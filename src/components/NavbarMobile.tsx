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
    { id: 'hero', label: 'หน้าแรก', icon: Home },
    { id: 'profile', label: 'โปรไฟล์', icon: User },
    { id: 'education', label: 'การศึกษา', icon: GraduationCap },
    { id: 'courses', label: 'วิชา & งาน', icon: Cpu },
    { id: 'activities', label: 'ผลงาน', icon: Award },
    { id: 'footer', label: 'ติดต่อ', icon: FileText }
  ];

  return (
    <>
      {/* Top Mobile Bar */}
      <header className="lg:hidden sticky top-0 left-0 right-0 z-40 bg-[#030712]/95 border-b border-sky-500/20 backdrop-blur-xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent">
            ⚡ Aphinat.M
          </span>
          <span className="text-[10px] text-sky-400/80 bg-sky-950/60 border border-sky-500/30 px-2 py-0.5 rounded-full">
            EE-Edu
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-900 border border-sky-500/30 text-sky-400 hover:text-white transition"
          >
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          
          {isAdmin ? (
            <button
              onClick={onOpenAdminDrawer}
              className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-500 text-emerald-300 shadow-sm"
            >
              <ShieldCheck size={16} />
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-300 transition"
            >
              <Lock size={15} />
            </button>
          )}
        </div>
      </header>

      {/* Bottom Sticky Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#030712]/95 border-t border-sky-500/20 backdrop-blur-2xl px-2 py-2 flex items-center justify-around shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 py-1 px-2 rounded-lg text-[10px] transition-all ${
                isActive
                  ? 'text-sky-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-sky-400 scale-110 drop-shadow-[0_0_8px_#38bdf8]' : 'text-slate-400'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
