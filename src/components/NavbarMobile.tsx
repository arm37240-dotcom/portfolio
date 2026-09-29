'use client';

import React from 'react';
import { Home, User, GraduationCap, Cpu, Award, FileText, Moon, Sun, Lock, ShieldCheck } from 'lucide-react';

interface NavbarMobileProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  isAdmin: boolean;
  onOpenLogin: () => void;
  onOpenAdminDrawer: () => void;
}

export const NavbarMobile: React.FC<NavbarMobileProps> = ({
  activeSection,
  onNavigate,
  isDarkMode,
  onToggleTheme,
  isAdmin,
  onOpenLogin,
  onOpenAdminDrawer
}) => {
  const navItems = [
    { id: 'hero', label: 'HOME', icon: Home },
    { id: 'profile', label: 'PROFILE', icon: User },
    { id: 'education', label: 'EDU', icon: GraduationCap },
    { id: 'courses', label: 'COURSES', icon: Cpu },
    { id: 'activities', label: 'ACTIVITIES', icon: Award },
    { id: 'footer', label: 'CONTACT', icon: FileText }
  ];

  return (
    <>
      {/* Top Mobile Bar (Hikari OS Header) */}
      <header className="lg:hidden sticky top-0 left-0 right-0 z-40 bg-[#060817] border-b-2 border-[#2b356e] px-4 py-2.5 flex items-center justify-between shadow-lg select-none">
        <div className="flex items-center gap-2">
          {/* Mini Pixel Emblem */}
          <div className="w-6 h-6 flex items-center justify-center bg-[#18112c] border border-pink-500 rounded">
            <span className="text-[10px] text-pink-400 font-bold">✦</span>
          </div>
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              HIKARI OS
            </span>
            <span className="ml-1.5 text-[9px] font-mono text-sky-400 bg-sky-950/80 px-1.5 py-0.5 rounded border border-sky-500/30">
              APHINAT
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 font-mono">
          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded bg-[#101432] border border-[#2e3b78] text-sky-400 hover:text-white transition"
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          
          {isAdmin ? (
            <button
              onClick={onOpenAdminDrawer}
              className="p-1.5 rounded bg-emerald-950 border border-emerald-500 text-emerald-300 shadow-sm"
            >
              <ShieldCheck size={14} />
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              className="p-1.5 rounded bg-[#0d1028] border border-[#242b58] text-slate-400 hover:text-sky-300 transition text-[11px]"
            >
              <Lock size={13} />
            </button>
          )}
        </div>
      </header>

      {/* Bottom Sticky Mobile Navigation (Retro Dock) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#060817]/95 border-t-2 border-[#2b356e] backdrop-blur-xl px-2 py-1.5 flex items-center justify-around shadow-2xl select-none font-mono">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded text-[9px] font-semibold transition-all ${
                isActive
                  ? 'text-sky-300 bg-[#15204c] border border-sky-400/60 shadow-[0_0_10px_rgba(56,189,248,0.25)]'
                  : 'text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              <Icon size={16} className={isActive ? 'text-sky-400 scale-105' : 'text-slate-500'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
