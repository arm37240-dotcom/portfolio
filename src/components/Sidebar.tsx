'use client';

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  GraduationCap, 
  Cpu, 
  Award, 
  FileText, 
  Moon, 
  Sun, 
  ShieldCheck, 
  Lock,
  Sliders,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Palette
} from 'lucide-react';
import { OscilloscopeWave } from './OscilloscopeWave';
import { PixelCitySkyline } from './PixelDecorations';
import { PortfolioData } from '@/types/portfolio';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  portfolioData: PortfolioData;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  isAdmin: boolean;
  onOpenLogin: () => void;
  onOpenAdminDrawer: () => void;
  onOpenThemeMatrix: () => void;
  onOpenVfxLab?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  portfolioData,
  isDarkMode,
  onToggleTheme,
  isAdmin,
  onOpenLogin,
  onOpenAdminDrawer,
  onOpenThemeMatrix,
  onOpenVfxLab
}) => {
  // Live uptime counter (starts at 128D 07:42:18 and ticks)
  const [seconds, setSeconds] = useState(18);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev + 1) % 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'hero', label: 'HOME', sub: 'หน้าหลัก', icon: Home },
    { id: 'profile', label: 'PROFILE', sub: 'ข้อมูลส่วนตัว', icon: User },
    { id: 'education', label: 'EDUCATION', sub: 'ประวัติการศึกษา', icon: GraduationCap },
    { id: 'courses', label: 'COURSES', sub: 'รายวิชา & ชิ้นงาน', icon: Cpu },
    { id: 'activities', label: 'ACTIVITIES', sub: 'กิจกรรม & ผลงาน', icon: Award },
    { id: 'footer', label: 'CONTACT', sub: 'ช่องทางติดต่อ', icon: FileText }
  ];

  return (
    <aside 
      style={{ position: 'fixed', top: 0, bottom: 0, left: 0, width: '18rem', height: '100vh', zIndex: 40 }}
      className="hidden lg:flex flex-col w-72 h-screen max-h-screen fixed inset-y-0 left-0 top-0 bottom-0 z-40 bg-[var(--bg-primary)] border-r-2 border-[var(--border-neon)] text-[var(--text-main)] select-none overflow-hidden"
    >
      {/* 1. HIKARI SYSTEM BRAND HEADER (Matches Reference Image) */}
      <div className="shrink-0 p-4 border-b-2 border-[var(--border-neon)] bg-[var(--bg-secondary)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Pixel Emblem (Magenta/Pink pixel diamond cluster) */}
            <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[var(--bg-card)] border-2 border-pink-500/60 rounded p-1 shadow-[0_0_12px_rgba(236,72,153,0.3)]">
              <svg viewBox="0 0 24 24" className="w-full h-full text-pink-400" fill="currentColor">
                {/* Pixel diamond shapes */}
                <rect x="10" y="2" width="4" height="4" fill="#f472b6" />
                <rect x="4" y="8" width="4" height="4" fill="#ec4899" />
                <rect x="16" y="8" width="4" height="4" fill="#ec4899" />
                <rect x="10" y="10" width="4" height="4" fill="#ffffff" />
                <rect x="6" y="14" width="4" height="4" fill="#db2777" />
                <rect x="14" y="14" width="4" height="4" fill="#db2777" />
                <rect x="10" y="18" width="4" height="4" fill="#be185d" />
              </svg>
            </div>

            <div>
              <div className="font-mono text-sm font-black tracking-widest text-[var(--text-title)] uppercase leading-none">
                HIKARI
              </div>
              <div className="font-mono text-[11px] font-bold tracking-widest text-sky-500 dark:text-sky-400 uppercase leading-none mt-1">
                SYSTEM
              </div>
            </div>
          </div>

          {/* Theme & Palette Switchers (Admin Only) */}
          {isAdmin && (
            <div className="flex items-center gap-1.5">
              <button
                onClick={onOpenThemeMatrix}
                title="เปลี่ยนโทนสี (10,000 Color Themes)"
                className="p-1.5 rounded bg-[var(--bg-card)] border border-pink-500/40 text-pink-500 dark:text-pink-400 hover:text-[var(--text-title)] hover:border-pink-400 hover:bg-pink-950/20 transition cursor-pointer flex items-center justify-center shadow-sm"
              >
                <Palette size={15} />
              </button>
              <button
                onClick={onToggleTheme}
                title={isDarkMode ? 'สลับเป็นโหมดสว่าง' : 'สลับเป็นโหมดมืด'}
                className="p-1.5 rounded bg-[var(--bg-card)] border border-[var(--border-neon)] text-sky-500 dark:text-sky-400 hover:text-[var(--text-title)] hover:border-sky-400 transition cursor-pointer"
              >
                {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>
          )}
        </div>

        <p className="text-[10px] font-mono text-[var(--text-muted)] mt-2.5 pt-2 border-t border-[var(--border-subtle)] uppercase tracking-wider">
          APHINAT OS 2.0 // EE EDITION
        </p>

        {/* Quick Theme Matrix Button (Admin Only) */}
        {isAdmin && (
          <div className="pt-2.5">
            <button
              onClick={onOpenThemeMatrix}
              className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] border border-pink-500/40 hover:border-pink-400 text-pink-500 dark:text-pink-300 hover:text-[var(--text-title)] transition text-[11px] font-mono font-bold cursor-pointer shadow-sm group"
            >
              <span className="flex items-center gap-1.5">
                <Palette size={13} className="text-pink-400 group-hover:rotate-45 transition-transform" />
                <span>QUANTUM MATRIX</span>
              </span>
              <span className="bg-pink-500/10 text-pink-500 dark:text-pink-300 border border-pink-500/40 px-1.5 py-0.5 rounded text-[9px] font-mono">
                10,000 THEMES ▸
              </span>
            </button>

            {onOpenVfxLab && (
              <button
                onClick={onOpenVfxLab}
                className="w-full mt-1.5 flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] border border-sky-500/40 hover:border-sky-400 text-sky-500 dark:text-sky-300 hover:text-[var(--text-title)] transition text-[11px] font-mono font-bold cursor-pointer shadow-sm group"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles size={13} className="text-sky-400 group-hover:rotate-45 transition-transform" />
                  <span>100 VFX SUITE</span>
                </span>
                <span className="bg-sky-500/10 text-sky-500 dark:text-sky-300 border border-sky-500/40 px-1.5 py-0.5 rounded text-[9px] font-mono">
                  100 FX ▸
                </span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Middle Scrollable Section (Nav, System Metrics, Skyline) */}
      <div className="flex-1 overflow-y-auto min-h-0 space-y-3 py-2">
        {/* 2. NAVIGATION LIST (Matches Reference Image) */}
        <nav className="p-3 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-mono text-xs tracking-wider transition-all ${
                  isActive
                    ? 'bg-[var(--bg-card)] text-[var(--text-title)] border-2 border-[var(--accent-cyan)] shadow-[0_0_15px_var(--glow-shadow)] font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-title)] hover:bg-[var(--bg-secondary)] border-2 border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={15} className={isActive ? 'text-[var(--accent-cyan)]' : 'text-[var(--text-muted)]'} />
                  <span>{item.label}</span>
                </div>
                {isActive && (
                  <span className="text-[var(--accent-cyan)] text-xs font-bold">▸</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* 3. SYSTEM STATUS BOX (Matches Reference Image) */}
        <div className="px-3 pb-1">
          <div className="p-3 bg-[var(--bg-card)] border-2 border-[var(--border-neon)] rounded-lg font-mono space-y-2 text-xs">
            <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-bold">
              SYSTEM STATUS
            </div>
            
            <div className="flex items-center gap-2 text-emerald-500 dark:text-emerald-400 font-semibold text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="truncate">ALL SYSTEMS OPERATIONAL</span>
            </div>

            <div className="pt-1 text-[11px] text-[var(--text-muted)] space-y-0.5">
              <div>
                <span className="text-[var(--text-muted)]">UPTIME</span>
                <p className="text-[var(--text-title)] font-bold">128D 07:42:{seconds < 10 ? `0${seconds}` : seconds}</p>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">REGION</span>
                <p className="text-[var(--text-title)] font-semibold">EAST ASIA (RMUTI)</p>
              </div>
            </div>

            <div className="pt-1 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px]">
              <button 
                onClick={() => onNavigate('courses')}
                className="text-sky-500 dark:text-sky-400 hover:text-[var(--text-title)] flex items-center gap-1 font-semibold uppercase"
              >
                <span>VIEW STATUS PAGE</span>
                <ExternalLink size={10} />
              </button>
            </div>
          </div>
        </div>

        {/* 4. PIXEL ART CITY SKYLINE (Matches Bottom of Sidebar in Image) */}
        <div className="px-3 pb-2">
          <PixelCitySkyline />
        </div>
      </div>

      {/* 5. ADMIN / OSCILLOSCOPE BOTTOM FOOTER (Pinned to Bottom) */}
      <div className="shrink-0 p-3 border-t-2 border-[var(--border-neon)] bg-[var(--bg-secondary)] space-y-2">
        <OscilloscopeWave
          voltage={portfolioData.profile.circuitVoltage}
          current={portfolioData.profile.circuitCurrent}
          speed={portfolioData.themeConfig.oscilloscopeSpeed}
          height={48}
        />

        {isAdmin ? (
          <button
            onClick={onOpenAdminDrawer}
            className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 transition text-xs font-mono font-medium shadow-sm"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>โหมดผู้ดูแล (CMS)</span>
            </span>
            <Sliders size={13} />
          </button>
        ) : (
          <button
            onClick={onOpenLogin}
            title="เข้าสู่ระบบผู้ดูแลระบบ (Ctrl + Alt + P)"
            className="w-full flex items-center justify-between px-2.5 py-1 rounded bg-[var(--bg-card)] border border-[var(--border-neon)] text-[var(--text-muted)] hover:text-sky-400 hover:border-sky-500/40 transition text-[11px] font-mono"
          >
            <span className="flex items-center gap-1.5">
              <Lock size={12} className="text-[var(--text-muted)]" />
              <span>ADMIN ACCESS</span>
            </span>
            <span className="text-[9px] text-[var(--text-muted)] bg-[var(--bg-secondary)] px-1 py-0.5 rounded">
              Ctrl+Alt+P
            </span>
          </button>
        )}
      </div>
    </aside>
  );
};
