'use client';

import React from 'react';
import { ArrowRight, Zap, Shield, Cpu, Activity } from 'lucide-react';
import { PortfolioData, SectionTextConfig } from '@/types/portfolio';
import { EditableText } from './EditableText';
import { OscilloscopeWave } from './OscilloscopeWave';

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
    <section id="hero" className="relative pt-6 pb-16 lg:py-20 overflow-hidden">
      {/* Background Decorative Circuit Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="space-y-8">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-400/30 text-sky-300 text-xs font-medium shadow-[0_0_15px_rgba(56,189,248,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          <EditableText
            value={siteTexts.heroBadge}
            onSave={(v) => onUpdateSiteText('heroBadge', v)}
            isAdmin={isAdmin}
            className="tracking-wide"
          />
        </div>

        {/* Main Title & Slogan */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            <EditableText
              value={profile.heroHeadline}
              onSave={(val) => onUpdateProfile('heroHeadline', val)}
              isAdmin={isAdmin}
              as="span"
              className="bg-gradient-to-r from-sky-400 via-blue-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            />
          </h1>

          <div className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            <EditableText
              value={profile.heroSubheadline}
              onSave={(val) => onUpdateProfile('heroSubheadline', val)}
              isAdmin={isAdmin}
              as="p"
              multiline={true}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('courses')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <EditableText
              value={siteTexts.heroCtaExplore}
              onSave={(v) => onUpdateSiteText('heroCtaExplore', v)}
              isAdmin={isAdmin}
            />
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => onNavigate('profile')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-sky-200 border border-sky-500/30 hover:border-sky-400 font-semibold text-sm transition-all"
          >
            <EditableText
              value={siteTexts.heroCtaProfile}
              onSave={(v) => onUpdateSiteText('heroCtaProfile', v)}
              isAdmin={isAdmin}
            />
          </button>

          <button
            onClick={() => onNavigate('footer')}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-sky-950/40 text-slate-300 hover:text-white font-medium text-sm transition"
          >
            <EditableText
              value={siteTexts.heroCtaContact}
              onSave={(v) => onUpdateSiteText('heroCtaContact', v)}
              isAdmin={isAdmin}
            />
          </button>
        </div>

        {/* Technical Specs Dashboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          <div className="p-4 rounded-xl electric-glass electric-glass-hover">
            <div className="flex items-center gap-2 text-xs text-sky-400 font-mono mb-1">
              <Zap size={14} />
              <EditableText
                value={siteTexts.voltageLabel}
                onSave={(v) => onUpdateSiteText('voltageLabel', v)}
                isAdmin={isAdmin}
              />
            </div>
            <div className="text-xl font-bold font-mono text-white">
              <EditableText
                value={profile.circuitVoltage}
                onSave={(v) => onUpdateProfile('circuitVoltage', v)}
                isAdmin={isAdmin}
              />
            </div>
            <div className="text-[11px] text-slate-400 mt-1">High Voltage Line</div>
          </div>

          <div className="p-4 rounded-xl electric-glass electric-glass-hover">
            <div className="flex items-center gap-2 text-xs text-sky-400 font-mono mb-1">
              <Activity size={14} />
              <EditableText
                value={siteTexts.currentLabel}
                onSave={(v) => onUpdateSiteText('currentLabel', v)}
                isAdmin={isAdmin}
              />
            </div>
            <div className="text-xl font-bold font-mono text-white">
              <EditableText
                value={profile.circuitCurrent}
                onSave={(v) => onUpdateProfile('circuitCurrent', v)}
                isAdmin={isAdmin}
              />
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Stable Closed Loop</div>
          </div>

          <div className="p-4 rounded-xl electric-glass electric-glass-hover">
            <div className="flex items-center gap-2 text-xs text-sky-400 font-mono mb-1">
              <Cpu size={14} />
              <EditableText
                value={siteTexts.gasLabel}
                onSave={(v) => onUpdateSiteText('gasLabel', v)}
                isAdmin={isAdmin}
              />
            </div>
            <div className="text-xl font-bold font-mono text-white">
              <EditableText
                value={profile.circuitGas}
                onSave={(v) => onUpdateProfile('circuitGas', v)}
                isAdmin={isAdmin}
              />
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Cobalt Blue Plasma</div>
          </div>

          <div className="p-4 rounded-xl electric-glass electric-glass-hover">
            <div className="flex items-center gap-2 text-xs text-sky-400 font-mono mb-1">
              <Shield size={14} />
              <EditableText
                value={siteTexts.pressureLabel}
                onSave={(v) => onUpdateSiteText('pressureLabel', v)}
                isAdmin={isAdmin}
              />
            </div>
            <div className="text-xl font-bold font-mono text-white">
              <EditableText
                value={profile.circuitPressure}
                onSave={(v) => onUpdateProfile('circuitPressure', v)}
                isAdmin={isAdmin}
              />
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Insulated Chamber</div>
          </div>
        </div>

        {/* Large Interactive Oscilloscope Visualizer Card */}
        <div className="electric-glass rounded-2xl p-5 border border-sky-500/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-sky-500/15">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                  <EditableText
                    value={siteTexts.oscilloscopeTitle}
                    onSave={(v) => onUpdateSiteText('oscilloscopeTitle', v)}
                    isAdmin={isAdmin}
                  />
                </span>
                <span className="text-xs font-mono text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30">
                  REALTIME 50Hz
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                <EditableText
                  value={siteTexts.oscilloscopeSubtitle}
                  onSave={(v) => onUpdateSiteText('oscilloscopeSubtitle', v)}
                  isAdmin={isAdmin}
                />
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-mono text-sky-300">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-sky-500/30">
                CH-1: AC Signal
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-sky-500/30">
                THD: &lt; 0.5%
              </span>
            </div>
          </div>

          <OscilloscopeWave
            height={130}
            voltage={profile.circuitVoltage}
            current={profile.circuitCurrent}
            speed={data.themeConfig.oscilloscopeSpeed}
            showLabels={false}
          />
        </div>
      </div>
    </section>
  );
};
