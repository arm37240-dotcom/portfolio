'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { retroAudio } from '@/lib/retroAudio';

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
}

interface ElectricSparkCursorProps {
  enabled?: boolean;
}

export const ElectricSparkCursor: React.FC<ElectricSparkCursorProps> = ({ enabled = true }) => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  const createSparks = useCallback((x: number, y: number) => {
    if (!enabled) return;

    // Trigger subtle electric zap sound
    retroAudio.playSpark();

    const colors = [
      'var(--accent-cyan, #38bdf8)',
      'var(--accent-pink, #ec4899)',
      'var(--accent-green, #22c55e)',
      '#ffffff'
    ];

    const count = 12 + Math.floor(Math.random() * 8);
    const newSparks: Spark[] = [];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 2.5 + Math.random() * 5.5;
      newSparks.push({
        id: Date.now() + Math.random(),
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 2 + Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
        life: 1
      });
    }

    setSparks((prev) => [...prev.slice(-30), ...newSparks]);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const handleClick = (e: MouseEvent) => {
      // Don't trigger on text inputs
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }
      createSparks(e.clientX, e.clientY);
    };

    window.addEventListener('pointerdown', handleClick);
    return () => window.removeEventListener('pointerdown', handleClick);
  }, [enabled, createSparks]);

  // Animation frame loop to update sparks
  useEffect(() => {
    if (sparks.length === 0) return;

    const timer = requestAnimationFrame(() => {
      setSparks((prev) =>
        prev
          .map((s) => ({
            ...s,
            x: s.x + s.vx,
            y: s.y + s.vy + 0.5, // slight gravity
            opacity: s.opacity - 0.05,
            life: s.life - 0.05
          }))
          .filter((s) => s.life > 0)
      );
    });

    return () => cancelAnimationFrame(timer);
  }, [sparks]);

  if (!enabled || sparks.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="absolute rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            backgroundColor: spark.color,
            boxShadow: `0 0 8px ${spark.color}`,
            opacity: spark.opacity
          }}
        />
      ))}
    </div>
  );
};
