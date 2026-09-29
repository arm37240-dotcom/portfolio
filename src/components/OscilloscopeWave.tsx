'use client';

import React, { useEffect, useRef, useState } from 'react';
import { retroAudio } from '@/lib/retroAudio';

interface OscilloscopeWaveProps {
  speed?: number;
  height?: number;
  color?: string;
  voltage?: string;
  current?: string;
  showLabels?: boolean;
}

type WaveformMode = 'sine' | 'square' | 'sawtooth' | 'ecg';

export const OscilloscopeWave: React.FC<OscilloscopeWaveProps> = ({
  speed = 2,
  height = 90,
  color = '#38bdf8',
  voltage = '2.7 kV',
  current = '12 mA',
  showLabels = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [waveMode, setWaveMode] = useState<WaveformMode>('sine');
  const [isDischarging, setIsDischarging] = useState(false);

  // Switch wave mode
  const handleToggleWaveMode = (mode: WaveformMode) => {
    setWaveMode(mode);
    retroAudio.playClick();
  };

  // Shock discharge effect on click
  const handleCanvasClick = () => {
    setIsDischarging(true);
    retroAudio.playSpark();
    setTimeout(() => setIsDischarging(false), 300);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const render = () => {
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
      ctx.moveTo(0, centerY);
      ctx.lineTo(w, centerY);
      for (let x = 0; x < w; x += 30) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      ctx.stroke();

      // Waveform calculation
      ctx.save();
      ctx.shadowBlur = isDischarging ? 25 : 14;
      ctx.shadowColor = isDischarging ? '#ffffff' : color;
      ctx.strokeStyle = isDischarging ? '#ffffff' : color;
      ctx.lineWidth = isDischarging ? 3.5 : 2.5;
      ctx.lineCap = 'round';
      ctx.beginPath();

      const frequency = 0.025;
      const amplitude = h * 0.32;

      for (let x = 0; x < w; x++) {
        let y = centerY;
        const normX = x * frequency + phase;

        if (waveMode === 'sine') {
          y = centerY + Math.sin(normX) * amplitude + Math.sin(x * 0.05 + phase * 1.5) * (amplitude * 0.18);
        } else if (waveMode === 'square') {
          const s = Math.sin(normX);
          y = centerY + (s >= 0 ? 1 : -1) * (amplitude * 0.85);
        } else if (waveMode === 'sawtooth') {
          const s = (normX % Math.PI) / Math.PI;
          y = centerY + (s * 2 - 1) * (amplitude * 0.85);
        } else if (waveMode === 'ecg') {
          // ECG Heartbeat / Voltage pulse spike
          const cycle = (normX * 0.6) % (Math.PI * 2);
          if (cycle > 0.8 && cycle < 1.1) {
            y = centerY - amplitude * 0.95; // R-wave spike
          } else if (cycle >= 1.1 && cycle < 1.3) {
            y = centerY + amplitude * 0.45; // S-wave
          } else {
            y = centerY + Math.sin(cycle * 2) * (amplitude * 0.1);
          }
        }

        // Add electric discharge jitter if clicked
        if (isDischarging) {
          y += (Math.random() - 0.5) * 16;
        }

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.restore();

      // Leading cathode dot
      const leadX = w - 8;
      let leadY = centerY + Math.sin(leadX * frequency + phase) * amplitude;
      if (isDischarging) leadY += (Math.random() - 0.5) * 10;

      ctx.save();
      ctx.fillStyle = isDischarging ? '#ffffff' : '#f59e0b';
      ctx.shadowColor = isDischarging ? '#ffffff' : '#f59e0b';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(leadX, leadY, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      phase += 0.035 * speed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed, color, waveMode, isDischarging]);

  return (
    <div className="w-full bg-[#050c1c]/90 rounded-xl border border-sky-500/30 p-2.5 sm:p-3 shadow-inner font-mono">
      {showLabels && (
        <div className="flex items-center justify-between text-xs mb-2 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sky-300 font-bold uppercase text-[10px] tracking-wider">
              CIRCUIT FEED //
            </span>

            {/* Interactive Waveform Switcher */}
            <div className="flex items-center gap-1 bg-[#091026] p-0.5 rounded border border-[#1e2954]">
              {(['sine', 'square', 'sawtooth', 'ecg'] as WaveformMode[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => handleToggleWaveMode(mode)}
                  className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase transition cursor-pointer ${
                    waveMode === mode
                      ? 'bg-sky-500 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title={`สลับสัญญาณเป็นรูปคลื่น ${mode}`}
                >
                  {mode === 'sine' ? '∿ SINE' : mode === 'square' ? '⎍ SQ' : mode === 'sawtooth' ? '⩘ SAW' : '⚡ ECG'}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-sky-400/90 ml-auto">
            <span>{voltage}</span>
            <span className="text-sky-600">•</span>
            <span>{current}</span>
          </div>
        </div>
      )}

      {/* Screen Canvas (Clickable to trigger electric shockwave) */}
      <div 
        onClick={handleCanvasClick}
        style={{ height: `${height}px` }} 
        className="w-full relative overflow-hidden rounded-lg cursor-pointer group"
        title="คลิกที่หน้าจอเพื่อทดสอบสปาร์กไฟฟ้า (Trigger Electric Shock)"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
        <span className="absolute bottom-1 right-2 text-[8px] text-sky-400/40 opacity-0 group-hover:opacity-100 transition font-mono pointer-events-none">
          [ TAP TO DISCHARGE ]
        </span>
      </div>
    </div>
  );
};
