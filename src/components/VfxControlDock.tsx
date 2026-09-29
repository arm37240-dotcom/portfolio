'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Tv, 
  Volume2, 
  VolumeX, 
  CloudRain, 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  Sliders,
  Compass
} from 'lucide-react';
import { retroAudio } from '@/lib/retroAudio';

interface VfxControlDockProps {
  activeCount: number;
  onOpenVfxLab: () => void;
  isCrtActive: boolean;
  isSparksActive: boolean;
  isMatrixActive: boolean;
  isSoundActive: boolean;
  onToggleEffect: (id: string) => void;
  onToggleSound: () => void;
}

export const VfxControlDock: React.FC<VfxControlDockProps> = ({
  activeCount,
  onOpenVfxLab,
  isCrtActive,
  isSparksActive,
  isMatrixActive,
  isSoundActive,
  onToggleEffect,
  onToggleSound
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 lg:left-80 z-40 font-mono select-none">
      {/* Expanded Controls Window */}
      {isExpanded ? (
        <div className="bg-[#080918]/95 border-2 border-sky-400 rounded-2xl p-3.5 shadow-[0_0_35px_rgba(56,189,248,0.4)] backdrop-blur-md w-72 animate-fadeIn space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#202958] pb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-pink-400 animate-spin-slow" />
              <span className="text-xs font-bold text-white tracking-wide">100 RETRO VFX SUITE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-950 border border-sky-400/60 text-sky-300">
                {activeCount}/100
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-slate-400 hover:text-white p-0.5 text-xs cursor-pointer"
                title="ย่อแถบควบคุม"
              >
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          {/* Master 100 VFX Lab Button */}
          <button
            type="button"
            onClick={() => {
              retroAudio.playClick();
              onOpenVfxLab();
            }}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-sky-600 via-purple-600 to-pink-600 hover:opacity-95 text-white font-bold text-xs shadow-md transition transform hover:scale-[1.02] cursor-pointer"
          >
            <Sliders size={14} />
            <span>เปิดแล็บ 100 เอฟเฟกต์ (100 FX LAB)</span>
          </button>

          {/* Quick Toggles */}
          <div className="space-y-1.5 text-xs">
            {/* 1. CRT Scanlines (fx-001) */}
            <button
              type="button"
              onClick={() => {
                retroAudio.playClick();
                onToggleEffect('fx-001');
              }}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg border transition cursor-pointer ${
                isCrtActive
                  ? 'bg-sky-950/60 border-sky-400 text-sky-200'
                  : 'bg-[#0f1330] border-[#1d2454] text-slate-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <Tv size={13} className={isCrtActive ? 'text-sky-400' : ''} />
                <span>CRT Scanlines</span>
              </span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isCrtActive ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                {isCrtActive ? 'ON' : 'OFF'}
              </span>
            </button>

            {/* 2. Electric Sparks (fx-011) */}
            <button
              type="button"
              onClick={() => {
                retroAudio.playClick();
                onToggleEffect('fx-011');
              }}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg border transition cursor-pointer ${
                isSparksActive
                  ? 'bg-amber-950/60 border-amber-400 text-amber-200'
                  : 'bg-[#0f1330] border-[#1d2454] text-slate-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <Zap size={13} className={isSparksActive ? 'text-amber-400' : ''} />
                <span>Electric Sparks</span>
              </span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isSparksActive ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-500'}`}>
                {isSparksActive ? 'ON' : 'OFF'}
              </span>
            </button>

            {/* 3. Matrix Rain (fx-021) */}
            <button
              type="button"
              onClick={() => {
                retroAudio.playClick();
                onToggleEffect('fx-021');
              }}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg border transition cursor-pointer ${
                isMatrixActive
                  ? 'bg-emerald-950/60 border-emerald-400 text-emerald-200'
                  : 'bg-[#0f1330] border-[#1d2454] text-slate-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <CloudRain size={13} className={isMatrixActive ? 'text-emerald-400' : ''} />
                <span>Matrix Rain</span>
              </span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isMatrixActive ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-500'}`}>
                {isMatrixActive ? 'ON' : 'OFF'}
              </span>
            </button>

            {/* 4. Retro Audio Sound FX */}
            <button
              type="button"
              onClick={onToggleSound}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg border transition cursor-pointer ${
                isSoundActive
                  ? 'bg-pink-950/60 border-pink-400 text-pink-200'
                  : 'bg-[#0f1330] border-[#1d2454] text-slate-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                {isSoundActive ? <Volume2 size={13} className="text-pink-400" /> : <VolumeX size={13} />}
                <span>Retro Sound FX</span>
              </span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isSoundActive ? 'bg-pink-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                {isSoundActive ? 'ON' : 'MUTE'}
              </span>
            </button>
          </div>
        </div>
      ) : (
        /* Minimized Pill Button */
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#090b20]/90 hover:bg-[#121638] border-2 border-sky-400 text-sky-300 hover:text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] backdrop-blur-md text-xs font-bold transition transform hover:scale-105 active:scale-95 cursor-pointer"
          title="เปิดแผงควบคุม 100 เอฟเฟกต์ (100 VFX Suite)"
        >
          <Sparkles size={13} className="text-pink-400 animate-pulse" />
          <span>100 VFX ({activeCount})</span>
          <ChevronUp size={13} className="text-slate-400" />
        </button>
      )}
    </div>
  );
};
