'use client';

import React from 'react';
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
  Activity
} from 'lucide-react';
import { OscilloscopeWave } from './OscilloscopeWave';
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
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  portfolioData,
  isDarkMode,
  onToggleTheme,
  isAdmin,
  onOpenLogin,
  onOpenAdminDrawer
}) => {
  const navItems = [
    { id: 'hero', label: 'หน้าหลัก (Overview)', icon: Home },
    { id: 'profile', label: 'ข้อมูลส่วนตัว', icon: User },
    { id: 'education', label: 'ประวัติการศึกษา', icon: GraduationCap },
    { id: 'courses', label: 'รายวิชา & ชิ้นงาน', icon: Cpu },
    { id: 'activities', label: 'กิจกรรมและผลงาน', icon: Award },
    { id: 'footer', label: 'ข้อมูลติดต่อ & ส่วนท้าย', icon: FileText }
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen fixed left-0 top-0 z-40 bg-[#030712]/95 border-r border-sky-500/20 backdrop-blur-xl text-slate-200 select-none">
      {/* Brand Header */}
      <div className="p-6 border-b border-sky-500/15">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
              <span className="text-sky-400">⚡</span>
              <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-sky-200 bg-clip-text text-transparent">
                Aphinat
              </span>
            </span>
            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse"></span>
          </div>
          
          {/* Theme Switcher Button */}
          <button
            onClick={onToggleTheme}
            title={isDarkMode ? 'สลับเป็นโหมดสว่าง' : 'สลับเป็นโหมดมืด'}
            className="p-2 rounded-lg bg-slate-900 border border-sky-500/30 text-sky-400 hover:text-white hover:border-sky-400 transition"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
        <p className="text-xs text-sky-300/70 font-medium">
          ครุศาสตร์อุตสาหกรรมไฟฟ้า • มทร.อีสาน ขอนแก่น
        </p>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-sky-500/15 text-sky-300 border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-sky-400' : 'text-slate-500'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Live Oscilloscope Feed Widget (Bottom of Sidebar) */}
      <div className="p-4 border-t border-sky-500/15 bg-slate-950/40 space-y-3">
        <OscilloscopeWave
          voltage={portfolioData.profile.circuitVoltage}
          current={portfolioData.profile.circuitCurrent}
          speed={portfolioData.themeConfig.oscilloscopeSpeed}
          height={65}
        />

        {/* Admin Management Status Indicator */}
        <div className="flex items-center justify-between pt-1 text-xs">
          {isAdmin ? (
            <button
              onClick={onOpenAdminDrawer}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/50 transition font-medium shadow-sm"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>โหมดผู้ดูแลระบบ (CMS)</span>
              </span>
              <Sliders size={14} />
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              title="เข้าสู่ระบบผู้ดูแลระบบ (หรือกดคีย์ลัด Ctrl + Alt + P)"
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-sky-300 hover:border-sky-500/40 transition text-[11px]"
            >
              <span className="flex items-center gap-1.5">
                <Lock size={13} className="text-slate-500" />
                <span>ผู้ดูแลระบบ</span>
              </span>
              <span className="font-mono text-[10px] text-slate-500 bg-slate-800/80 px-1.5 py-0.5 rounded">
                Ctrl+Alt+P
              </span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
