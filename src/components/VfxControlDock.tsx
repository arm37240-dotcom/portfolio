'use client';

import React, { useState } from 'react';
import { Sparkles, Tv, Volume2, VolumeX, CloudRain, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { retroAudio } from '@/lib/retroAudio';

interface VfxConfig {
  crtScanlines: boolean;
  electricSparks: boolean;
  matrixRain: boolean;
  soundFx: boolean;
}

interface VfxControlDockProps {
  config: VfxConfig;
  onChangeConfig: (newConfig: VfxConfig) => void;
}

export const VfxControlDock: React.FC<VfxControlDockProps> = ({
  config,
  onChangeConfig
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSetting = (key: keyof VfxConfig) => {
    retroAudio.playClick();
    if (key === 'soundFx') {
      const active = retroAudio.toggleMute();
      onChangeConfig({ ...config, soundFx: active });
      return;
    }

    const updated = { ...config, [key]: !config[key] };
    onChangeConfig(updated);
    try {
      localStorage.setItem(`hikari_${key}_enabled`, String(updated[key]));
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 font-mono select-none">
      {/* Expanded Controls Window */}
      {isExpanded ? (
        <div className="bg-[#080918]/95 border-2 border-sky-400 rounded-xl p-3 shadow-[0_0_30px_rgba(56,189,248,0.35)] backdrop-blur-md w-64 animate-fadeIn space-y-2.5">
          <div className="flex items-center justify-between border-b border-[#202958] pb-1.5">
            <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
              <Sparkles size={13} className="text-pink-400 animate-spin-slow" />
              <span>HIKARI FX DOCK</span>
            </span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-white p-0.5 text-xs cursor-pointer"
              title="ย่อแถบควบคุม"
            >
              <ChevronDown size={14} />
            </button>
          </div>

          <div className="space-y-1.5 text-xs">
            {/* 1. CRT Scanlines */}
            <button
              type="button"
              onClick={() => toggleSetting('crtScanlines')}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg border transition cursor-pointer ${
                config.crtScanlines
                  ? 'bg-sky-950/50 border-sky-400 text-sky-200'
                  : 'bg-[#0f1330] border-[#1d2454] text-slate-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <Tv size={13} className={config.crtScanlines ? 'text-sky-400' : ''} />
                <span>CRT Scanlines</span>
              </span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${config.crtScanlines ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                {config.crtScanlines ? 'ON' : 'OFF'}
              </span>
            </button>

            {/* 2. Electric Sparks */}
            <button
              type="button"
              onClick={() => toggleSetting('electricSparks')}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg border transition cursor-pointer ${
                config.electricSparks
                  ? 'bg-amber-950/50 border-amber-400 text-amber-200'
                  : 'bg-[#0f1330] border-[#1d2454] text-slate-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <Zap size={13} className={config.electricSparks ? 'text-amber-400' : ''} />
                <span>Electric Sparks</span>
              </span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${config.electricSparks ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-500'}`}>
                {config.electricSparks ? 'ON' : 'OFF'}
              </span>
            </button>

            {/* 3. Matrix Digital Rain */}
            <button
              type="button"
              onClick={() => toggleSetting('matrixRain')}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg border transition cursor-pointer ${
                config.matrixRain
                  ? 'bg-emerald-950/50 border-emerald-400 text-emerald-200'
                  : 'bg-[#0f1330] border-[#1d2454] text-slate-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <CloudRain size={13} className={config.matrixRain ? 'text-emerald-400' : ''} />
                <span>Matrix Rain</span>
              </span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${config.matrixRain ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-500'}`}>
                {config.matrixRain ? 'ON' : 'OFF'}
              </span>
            </button>

            {/* 4. Retro Audio Sound FX */}
            <button
              type="button"
              onClick={() => toggleSetting('soundFx')}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg border transition cursor-pointer ${
                config.soundFx
                  ? 'bg-pink-950/50 border-pink-400 text-pink-200'
                  : 'bg-[#0f1330] border-[#1d2454] text-slate-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                {config.soundFx ? <Volume2 size={13} className="text-pink-400" /> : <VolumeX size={13} />}
                <span>Retro Sound FX</span>
              </span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${config.soundFx ? 'bg-pink-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                {config.soundFx ? 'ON' : 'MUTE'}
              </span>
            </button>
          </div>
        </div>
      ) : (
        /* Minimized Pill Button */
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#090b20]/90 hover:bg-[#121638] border-2 border-sky-400 text-sky-300 hover:text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] backdrop-blur-md text-xs font-bold transition transform hover:scale-105 active:scale-95 cursor-pointer"
          title="เปิดแผงควบคุมเอฟเฟกต์ภาพและเสียง (CRT, Sparks, Matrix, Sound)"
        >
          <Sparkles size={13} className="text-pink-400 animate-pulse" />
          <span>VFX DOCK</span>
          <ChevronUp size={13} className="text-slate-400" />
        </button>
      )}
    </div>
  );
};
