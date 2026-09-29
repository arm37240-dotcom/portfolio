'use client';

import React from 'react';
import { ArrowRight, Zap, Shield, Cpu, Activity, ChevronRight, Terminal, UserCheck } from 'lucide-react';
import { PortfolioData, SectionTextConfig } from '@/types/portfolio';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';
import { OscilloscopeWave } from './OscilloscopeWave';
import { PixelDitherBar } from './PixelDecorations';

interface HeroSectionProps {
  data: PortfolioData;
  isAdmin: boolean;
  onUpdateProfile: (field: keyof PortfolioData['profile'], value: string) => void;
  onUpdateSiteText: (field: keyof SectionTextConfig, value: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  data,
  isAdmin,
  onUpdateProfile,
  onUpdateSiteText,
  onNavigate
}) => {
  const { profile, siteTexts } = data;

  return (
    <section id="hero" className="relative pt-2 pb-10 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* TOP BREADCRUMB & RAINBOW DITHER BAR (Matches Reference Image) */}
      <div className="space-y-1 mb-6">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">
          <span className="text-pink-400 font-bold">HIKARI SYSTEM OS</span>
          <span className="text-slate-600">/</span>
          <span className="text-sky-400">ELECTRICAL &amp; PEDAGOGICAL PLATFORM</span>
        </div>
        <PixelDitherBar />
      </div>

      {/* MAIN HERO GRID: Left Content & Right Retro Operator Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Headline, Subtitle, CTA buttons, Tech Stack (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Title (Chunky Pixel Font) */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              <EditableText
                value={profile.heroHeadline || 'BUILD CALM. SHIP CONFIDENTLY.'}
                onSave={(val) => onUpdateProfile('heroHeadline', val)}
                isAdmin={isAdmin}
                as="span"
                className="pixel-font text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] block"
              />
            </h1>

            <div className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl font-chakra">
              <EditableText
                value={profile.heroSubheadline}
                onSave={(val) => onUpdateProfile('heroSubheadline', val)}
                isAdmin={isAdmin}
                as="p"
                multiline={true}
              />
            </div>
          </div>

          {/* Action Buttons (Matches Pink & Blue buttons in reference image) */}
          <div className="flex flex-wrap items-center gap-4 pt-1 font-mono">
            {/* 1. Pink Retro Button: GET STARTED */}
            <button
              onClick={() => onNavigate('courses')}
              className="pixel-btn-pink px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center gap-2 group cursor-pointer"
            >
              <span>GET STARTED</span>
              <span className="font-bold text-sm group-hover:translate-x-0.5 transition-transform">▸</span>
            </button>

            {/* 2. Blue Outlined Retro Button: EXPLORE FEATURES */}
            <button
              onClick={() => onNavigate('profile')}
              className="pixel-btn-blue px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center gap-2 group cursor-pointer"
            >
              <span>EXPLORE FEATURES</span>
              <span className="font-bold text-sm group-hover:translate-x-0.5 transition-transform">▸</span>
            </button>
          </div>

          {/* TRUSTED BY / POWERED BY TECH STACK (Matches Reference Image) */}
          <div className="pt-4 border-t border-[#1f2752] space-y-2.5">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
              <span className="text-sky-400">▸</span>
              <span>POWERED BY &amp; CORE TECH STACK</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 hover:text-white transition">
                <span className="text-pink-400">★</span>
                <span className="font-bold">POLARIS LABS</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-white transition">
                <span className="text-sky-400">▲</span>
                <span className="font-bold">SIEMENS PLC</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-white transition">
                <span className="text-amber-400">◈</span>
                <span className="font-bold">AUTOCAD EE</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-white transition">
                <span className="text-emerald-400">⫸</span>
                <span className="font-bold">RMUTI KKC</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-white transition">
                <span className="text-purple-400">✦</span>
                <span className="font-bold">SYNAPSE IoT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Retro OS Profile Card (Replaces Anime with Real Profile Photo + Scanlines) */}
        <div className="lg:col-span-5">
          <div className="relative bg-[#090b20] border-2 border-[#2b356e] rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
            {/* Window Header Bar */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-[#121638] border-b-2 border-[#2b356e] select-none font-mono text-xs">
              <div className="flex items-center gap-2">
                <UserCheck size={14} className="text-emerald-400" />
                <span className="text-slate-200 font-bold tracking-wider">
                  OPERATOR ID // 68322110246-5
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                <span className="w-3.5 h-3.5 flex items-center justify-center rounded border border-[#3b478c]">_</span>
                <span className="w-3.5 h-3.5 flex items-center justify-center rounded border border-[#3b478c] text-[9px]">□</span>
                <span className="w-3.5 h-3.5 flex items-center justify-center rounded border border-[#3b478c] text-[10px]">×</span>
              </div>
            </div>

            {/* Main Operator Frame */}
            <div className="p-4 relative space-y-3">
              {/* Photo Frame with Scanline & Corner Brackets */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-[#263168] bg-[#050612] group">
                <EditableImage
                  src={profile.avatarUrl}
                  alt={profile.name}
                  onSave={(url) => onUpdateProfile('avatarUrl', url)}
                  isAdmin={isAdmin}
                  className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                />

                {/* CRT Scanlines Overlay */}
                <div className="scanlines absolute inset-0 pointer-events-none opacity-40" />

                {/* Corner Pixel Brackets */}
                <div className="absolute top-2 left-2 text-sky-400 font-mono text-sm leading-none font-bold select-none pointer-events-none">
                  ┌
                </div>
                <div className="absolute top-2 right-2 text-sky-400 font-mono text-sm leading-none font-bold select-none pointer-events-none">
                  ┐
                </div>
                <div className="absolute bottom-2 left-2 text-sky-400 font-mono text-sm leading-none font-bold select-none pointer-events-none">
                  └
                </div>
                <div className="absolute bottom-2 right-2 text-sky-400 font-mono text-sm leading-none font-bold select-none pointer-events-none">
                  ┘
                </div>

                {/* Floating Status Badge */}
                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0b0e24]/90 border border-emerald-500/50 text-[10px] font-mono text-emerald-400 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
                  <span>ONLINE // IN FLOW</span>
                </div>
              </div>

              {/* Operator Info Specs */}
              <div className="bg-[#0e122b] p-3 rounded-lg border border-[#232b58] font-mono text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-[11px]">NAME:</span>
                  <span className="text-white font-bold">{profile.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-[11px]">ROLE:</span>
                  <span className="text-sky-300 font-semibold">ELECTRICAL EDUCATOR</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-[11px]">CAMPUS:</span>
                  <span className="text-slate-300">RMUTI KKC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TECHNICAL SPECS DASHBOARD (Matches retro metrics) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
        <div className="p-3.5 rounded-xl bg-[#090b20] border-2 border-[#2b356e] font-mono">
          <div className="flex items-center gap-1.5 text-[10px] text-sky-400 uppercase tracking-wider mb-1 font-semibold">
            <Zap size={13} />
            <EditableText
              value={siteTexts.voltageLabel}
              onSave={(v) => onUpdateSiteText('voltageLabel', v)}
              isAdmin={isAdmin}
            />
          </div>
          <div className="text-lg font-bold text-white">
            <EditableText
              value={profile.circuitVoltage}
              onSave={(v) => onUpdateProfile('circuitVoltage', v)}
              isAdmin={isAdmin}
            />
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">High Voltage Line</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#090b20] border-2 border-[#2b356e] font-mono">
          <div className="flex items-center gap-1.5 text-[10px] text-sky-400 uppercase tracking-wider mb-1 font-semibold">
            <Activity size={13} />
            <EditableText
              value={siteTexts.currentLabel}
              onSave={(v) => onUpdateSiteText('currentLabel', v)}
              isAdmin={isAdmin}
            />
          </div>
          <div className="text-lg font-bold text-white">
            <EditableText
              value={profile.circuitCurrent}
              onSave={(v) => onUpdateProfile('circuitCurrent', v)}
              isAdmin={isAdmin}
            />
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">Stable Closed Loop</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#090b20] border-2 border-[#2b356e] font-mono">
          <div className="flex items-center gap-1.5 text-[10px] text-sky-400 uppercase tracking-wider mb-1 font-semibold">
            <Cpu size={13} />
            <EditableText
              value={siteTexts.gasLabel}
              onSave={(v) => onUpdateSiteText('gasLabel', v)}
              isAdmin={isAdmin}
            />
          </div>
          <div className="text-lg font-bold text-white">
            <EditableText
              value={profile.circuitGas}
              onSave={(v) => onUpdateProfile('circuitGas', v)}
              isAdmin={isAdmin}
            />
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">Cobalt Blue Plasma</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#090b20] border-2 border-[#2b356e] font-mono">
          <div className="flex items-center gap-1.5 text-[10px] text-sky-400 uppercase tracking-wider mb-1 font-semibold">
            <Shield size={13} />
            <EditableText
              value={siteTexts.pressureLabel}
              onSave={(v) => onUpdateSiteText('pressureLabel', v)}
              isAdmin={isAdmin}
            />
          </div>
          <div className="text-lg font-bold text-white">
            <EditableText
              value={profile.circuitPressure}
              onSave={(v) => onUpdateProfile('circuitPressure', v)}
              isAdmin={isAdmin}
            />
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">Insulated Chamber</div>
        </div>
      </div>
    </section>
  );
};
