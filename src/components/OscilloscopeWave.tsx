'use client';

import React, { useEffect, useRef } from 'react';

interface OscilloscopeWaveProps {
  speed?: number;
  height?: number;
  color?: string;
  voltage?: string;
  current?: string;
  showLabels?: boolean;
}

export const OscilloscopeWave: React.FC<OscilloscopeWaveProps> = ({
  speed = 2,
  height = 90,
  color = '#38bdf8',
  voltage = '2.7 kV',
  current = '12 mA',
  showLabels = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const render = () => {
      // Resize handling
      if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const centerY = h / 2;

      // Draw subtle background grid
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      // Horizontal center line
      ctx.moveTo(0, centerY);
      ctx.lineTo(w, centerY);
      // Grid lines
      for (let x = 0; x < w; x += 30) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      ctx.stroke();

      // Draw Outer Glow Sine Wave
      ctx.save();
      ctx.shadowBlur = 14;
      ctx.shadowColor = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.beginPath();

      const frequency = 0.025;
      const amplitude = h * 0.32;

      for (let x = 0; x < w; x++) {
        // Compound wave with subtle harmonics for authentic electric oscilloscope effect
        const y = centerY + 
          Math.sin(x * frequency + phase) * amplitude + 
          Math.sin(x * 0.05 + phase * 1.5) * (amplitude * 0.18);

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.restore();

      // Lead cathode point (Glowing dot at the leading edge)
      const leadX = (w - 8);
      const leadY = centerY + 
        Math.sin(leadX * frequency + phase) * amplitude + 
        Math.sin(leadX * 0.05 + phase * 1.5) * (amplitude * 0.18);

      ctx.save();
      ctx.fillStyle = '#ff7b00';
      ctx.shadowColor = '#ff7b00';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(leadX, leadY, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      phase += 0.035 * speed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, color]);

  return (
    <div className="w-full bg-[#050c1c]/80 rounded-xl border border-sky-500/20 p-3 shadow-inner">
      {showLabels && (
        <div className="flex items-center justify-between text-xs mb-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sky-300 font-medium tracking-wider uppercase text-[10px]">
              Live Circuit Feed
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-sky-400/90">
            <span>{voltage}</span>
            <span className="text-sky-600">•</span>
            <span>{current}</span>
          </div>
        </div>
      )}
      <div style={{ height: `${height}px` }} className="w-full relative overflow-hidden rounded-lg">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
};
