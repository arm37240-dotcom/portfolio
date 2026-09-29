'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  Layers, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  Rocket, 
  ChevronRight,
  Sparkles,
  Zap,
  Box
} from 'lucide-react';
import { PixelMeter } from './PixelDecorations';
import { PortfolioData } from '@/types/portfolio';

interface BottomWidgetsProps {
  portfolioData: PortfolioData;
  onNavigate: (sectionId: string) => void;
  onOpenThemeMatrix?: () => void;
  isAdmin?: boolean;
}

export const BottomWidgets: React.FC<BottomWidgetsProps> = ({
  portfolioData,
  onNavigate,
  onOpenThemeMatrix,
  isAdmin = false
}) => {
  // Terminal state for interactive typing
  const [terminalInput, setTerminalInput] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    { cmd: 'whoami', output: 'aphinat (อภิณัฐชรัชน์ มณีรัตน์)' },
    { 
      cmd: 'neofetch', 
      output: (
        <div className="flex items-start gap-4 text-xs font-mono py-1">
          {/* ASCII / Pixel art logo */}
          <div className="text-pink-400 select-none hidden sm:block font-mono leading-none tracking-tighter">
            <pre className="text-[10px] leading-tight">
{`   ⢀⣴⣶⣄
  ⢀⣿⣿⣿⣿⣆
 ⢠⣿⣿⠿⣿⣿⣿⡄
 ⣾⣿⠋   ⠙⣿⣿⣧
⢰⣿⡇  ⚡  ⢸⣿⣿
 ⢿⣿⡄   ⢠⣿⣿⠃
 ⠈⢿⣿⣷⣾⣿⡿⠃
   ⠉⠛⠛⠉`}
            </pre>
          </div>
          <div className="space-y-0.5 text-slate-300">
            <p><span className="text-sky-400 font-bold">OS:</span> Hikari System OS 2.0 (B.Ed. EE)</p>
            <p><span className="text-sky-400 font-bold">Host:</span> RMUTI Khon Kaen Campus</p>
            <p><span className="text-sky-400 font-bold">Kernel:</span> 6.8.0-aphinat-ee</p>
            <p><span className="text-sky-400 font-bold">Uptime:</span> 128d 7h 42m</p>
            <p><span className="text-sky-400 font-bold">Packages:</span> 152 (plc, circuits, pedagogy)</p>
            <p><span className="text-sky-400 font-bold">Resolution:</span> 1920x1080</p>
            <p><span className="text-sky-400 font-bold">Shell:</span> hikari-sh 2.0</p>
          </div>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = terminalInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: React.ReactNode = '';

    switch (cleanCmd) {
      case 'help':
        response = (
          <div className="text-sky-300 space-y-0.5">
            <p className="text-slate-400">Available commands:</p>
            <p><span className="text-white font-bold">whoami</span> - Show user identity</p>
            <p><span className="text-white font-bold">neofetch</span> - Display system specifications</p>
            {isAdmin && <p><span className="text-white font-bold">theme</span> - Open 100 Color Themes Matrix</p>}
            <p><span className="text-white font-bold">bio</span> - Read operator bio</p>
            <p><span className="text-white font-bold">skills</span> - List engineering skills</p>
            <p><span className="text-white font-bold">courses</span> - Navigate to coursework & projects</p>
            <p><span className="text-white font-bold">contact</span> - Display email and contact info</p>
            <p><span className="text-white font-bold">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;
      case 'theme':
      case 'themes':
      case 'palette':
      case 'colors':
        if (isAdmin && onOpenThemeMatrix) {
          onOpenThemeMatrix();
          response = 'Opening Hikari Color Matrix (100 Palettes Explorer)... Select any theme to apply instantly!';
        } else {
          response = '🔒 การปรับแต่งโทนสีสงวนสิทธิ์สำหรับโหมดผู้ดูแลเท่านั้น (Admin Mode Only) — กด Ctrl + Alt + P เพื่อเข้าสู่ระบบ';
        }
        break;
      case 'whoami':
        response = 'aphinat (อภิณัฐชรัชน์ มณีรัตน์) — นักศึกษาครุศาสตร์อุตสาหกรรมไฟฟ้า มทร.อีสาน ขอนแก่น';
        break;
      case 'neofetch':
        response = (
          <div className="flex items-start gap-4 text-xs font-mono py-1">
            <div className="text-pink-400 select-none hidden sm:block font-mono leading-none tracking-tighter">
              <pre className="text-[10px] leading-tight">
{`   ⢀⣴⣶⣄
  ⢀⣿⣿⣿⣿⣆
 ⢠⣿⣿⠿⣿⣿⣿⡄
 ⣾⣿⠋   ⠙⣿⣿⣧
⢰⣿⡇  ⚡  ⢸⣿⣿
 ⢿⣿⡄   ⢠⣿⣿⠃
 ⠈⢿⣿⣷⣾⣿⡿⠃
   ⠉⠛⠛⠉`}
              </pre>
            </div>
            <div className="space-y-0.5 text-slate-300">
              <p><span className="text-sky-400 font-bold">OS:</span> Hikari System OS 2.0 (B.Ed. EE)</p>
              <p><span className="text-sky-400 font-bold">Host:</span> RMUTI Khon Kaen Campus</p>
              <p><span className="text-sky-400 font-bold">Kernel:</span> 6.8.0-aphinat-ee</p>
              <p><span className="text-sky-400 font-bold">Uptime:</span> 128d 7h 42m</p>
              <p><span className="text-sky-400 font-bold">Packages:</span> 152 (plc, circuits, pedagogy)</p>
              <p><span className="text-sky-400 font-bold">Resolution:</span> 1920x1080</p>
              <p><span className="text-sky-400 font-bold">Shell:</span> hikari-sh 2.0</p>
            </div>
          </div>
        );
        break;
      case 'bio':
        response = portfolioData.profile.bio;
        break;
      case 'skills':
        response = (
          <ul className="list-disc list-inside space-y-0.5 text-sky-200">
            {portfolioData.profile.specialSkills.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        );
        break;
      case 'courses':
      case 'projects':
        onNavigate('courses');
        response = 'Navigating to Courses & Projects section...';
        break;
      case 'contact':
        response = `Email: ${portfolioData.profile.email} | Phone: ${portfolioData.profile.phone}`;
        break;
      case 'clear':
        setHistory([]);
        setTerminalInput('');
        return;
      default:
        response = `command not found: "${cleanCmd}". Type "help" for a list of commands.`;
    }

    setHistory((prev) => [...prev, { cmd: terminalInput, output: response }]);
    setTerminalInput('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-4">
      {/* 1. LATEST UPDATES WIDGET (5 Cols on LG) */}
      <div className="lg:col-span-5 bg-[var(--bg-card)] border-2 border-[var(--border-neon)] rounded-xl overflow-hidden shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-card-header)] border-b-2 border-[var(--border-neon)] select-none">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold tracking-wider text-[var(--text-title)] uppercase">
              LATEST UPDATES
            </span>
          </div>
          <button
            onClick={() => onNavigate('courses')}
            className="flex items-center gap-1 font-mono text-[11px] text-sky-500 dark:text-sky-400 hover:text-[var(--text-title)] transition uppercase font-semibold"
          >
            <span>VIEW ALL</span>
            <ChevronRight size={13} />
          </button>
        </div>

        {/* 3 Sub-Cards */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 flex-1">
          {/* Card 1: RELEASE */}
          <div className="flex flex-col justify-between p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-pink-500/50 transition">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sky-500 dark:text-sky-400 font-mono text-xs bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/30">
                  &gt;_
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/40 uppercase font-bold tracking-wider">
                  RELEASE
                </span>
              </div>
              <h4 className="font-mono text-xs font-bold text-[var(--text-title)] mb-1.5 line-clamp-1">
                Hikari OS 2.0
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-snug line-clamp-3">
                สถาปัตยกรรมระบบควบคุมไฟฟ้าและแฟ้มผลงานดิจิทัล ตอบสนองรวดเร็ว
              </p>
            </div>
            <div className="pt-3 mt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
              <span>MAY 12, 2026</span>
              <button
                onClick={() => onNavigate('courses')}
                className="text-pink-500 dark:text-pink-400 hover:text-[var(--text-title)] flex items-center font-bold"
              >
                READ MORE <ChevronRight size={10} />
              </button>
            </div>
          </div>

          {/* Card 2: FEATURE */}
          <div className="flex flex-col justify-between p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-sky-500/50 transition">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Box size={14} className="text-sky-500 dark:text-sky-400" />
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/40 uppercase font-bold tracking-wider">
                  FEATURE
                </span>
              </div>
              <h4 className="font-mono text-xs font-bold text-[var(--text-title)] mb-1.5 line-clamp-1">
                Motor & PLC Control
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-snug line-clamp-3">
                ชุดทดสอบความเร็วมอเตอร์ 3 เฟสผ่าน Inverter VFD และ Closed-loop PID
              </p>
            </div>
            <div className="pt-3 mt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
              <span>MAY 03, 2026</span>
              <button
                onClick={() => onNavigate('courses')}
                className="text-sky-500 dark:text-sky-400 hover:text-[var(--text-title)] flex items-center font-bold"
              >
                READ MORE <ChevronRight size={10} />
              </button>
            </div>
          </div>

          {/* Card 3: SECURITY */}
          <div className="flex flex-col justify-between p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-emerald-500/50 transition">
            <div>
              <div className="flex items-center justify-between mb-2">
                <ShieldCheck size={14} className="text-emerald-500 dark:text-emerald-400" />
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-300 border border-rose-500/40 uppercase font-bold tracking-wider">
                  SECURITY
                </span>
              </div>
              <h4 className="font-mono text-xs font-bold text-[var(--text-title)] mb-1.5 line-clamp-1">
                Power Protection
              </h4>
              <p className="text-[11px] text-[var(--text-muted)] leading-snug line-clamp-3">
                ระบบป้องกันไฟฟ้าลัดวงจร Ground Fault & Surge Protection มาตรฐาน วสท.
              </p>
            </div>
            <div className="pt-3 mt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
              <span>APR 28, 2026</span>
              <button
                onClick={() => onNavigate('courses')}
                className="text-emerald-500 dark:text-emerald-400 hover:text-[var(--text-title)] flex items-center font-bold"
              >
                READ MORE <ChevronRight size={10} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. QUICK SYSTEM CHECK & DEPLOYS (3 Cols on LG) */}
      <div className="lg:col-span-3 bg-[var(--bg-card)] border-2 border-[var(--border-neon)] rounded-xl overflow-hidden shadow-lg flex flex-col">
        {/* Top Header */}
        <div className="px-4 py-2.5 bg-[var(--bg-card-header)] border-b-2 border-[var(--border-neon)] select-none">
          <span className="font-mono text-xs font-bold tracking-wider text-[var(--text-title)] uppercase">
            QUICK SYSTEM CHECK
          </span>
        </div>

        {/* Meters */}
        <div className="p-3.5 space-y-2.5 border-b border-[var(--border-subtle)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[var(--text-main)] text-xs font-mono">
              <Box size={13} className="text-[var(--text-muted)]" />
              <span>BUILD</span>
            </div>
            <PixelMeter current={7} total={8} statusText="HEALTHY" color="green" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[var(--text-main)] text-xs font-mono">
              <Rocket size={13} className="text-[var(--text-muted)]" />
              <span>DEPLOY</span>
            </div>
            <PixelMeter current={8} total={8} statusText="HEALTHY" color="green" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[var(--text-main)] text-xs font-mono">
              <Activity size={13} className="text-[var(--text-muted)]" />
              <span>CIRCUIT</span>
            </div>
            <PixelMeter current={8} total={8} statusText="HEALTHY" color="green" />
          </div>
        </div>

        {/* Recent Deploys */}
        <div className="p-3.5 flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider font-semibold">
              RECENT DEPLOYS
            </span>
            <button
              onClick={() => onNavigate('activities')}
              className="text-[10px] font-mono text-sky-500 dark:text-sky-400 hover:text-[var(--text-title)] flex items-center gap-0.5"
            >
              VIEW LOGS <ChevronRight size={10} />
            </button>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between p-1.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
              <span className="text-[var(--text-main)] truncate max-w-[120px]">web-dashboard</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[var(--text-muted)]">2m ago</span>
                <CheckCircle2 size={13} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
              </div>
            </div>

            <div className="flex items-center justify-between p-1.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
              <span className="text-[var(--text-main)] truncate max-w-[120px]">plc-motor-pid</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[var(--text-muted)]">8m ago</span>
                <CheckCircle2 size={13} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
              </div>
            </div>

            <div className="flex items-center justify-between p-1.5 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
              <span className="text-[var(--text-main)] truncate max-w-[120px]">resonant-filter</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[var(--text-muted)]">15m ago</span>
                <CheckCircle2 size={13} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. TERMINAL WIDGET (4 Cols on LG) */}
      <div className="lg:col-span-4 bg-[var(--bg-card)] border-2 border-[var(--border-neon)] rounded-xl overflow-hidden shadow-lg flex flex-col crt-screen">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-3.5 py-2 bg-[var(--bg-card-header)] border-b-2 border-[var(--border-neon)] select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon size={13} className="text-[var(--accent-cyan)]" />
            <span className="font-mono text-xs font-bold tracking-wider text-[var(--text-title)]">
              TERMINAL
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[var(--text-muted)] font-mono text-[11px]">
            <span className="w-3 h-3 flex items-center justify-center rounded border border-[var(--border-neon)] hover:border-sky-400 hover:text-[var(--text-title)] cursor-pointer transition">_</span>
            <span className="w-3 h-3 flex items-center justify-center rounded border border-[var(--border-neon)] hover:border-sky-400 hover:text-[var(--text-title)] cursor-pointer transition text-[9px]">□</span>
            <span className="w-3 h-3 flex items-center justify-center rounded border border-[var(--border-neon)] hover:border-rose-400 hover:text-rose-400 cursor-pointer transition text-[10px]">×</span>
          </div>
        </div>

        {/* Terminal Console Output */}
        <div className="p-3.5 flex-1 overflow-y-auto max-h-[220px] font-mono text-xs space-y-2 select-text">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-sky-500 dark:text-sky-400">
                <span className="text-pink-500 dark:text-pink-400 font-semibold">hikari@local:~$</span>
                <span className="text-[var(--text-title)] font-bold">{item.cmd}</span>
              </div>
              <div className="text-[var(--text-main)] pl-2 border-l border-[var(--border-subtle)]">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Command Input Form */}
        <form onSubmit={handleCommandSubmit} className="p-2.5 bg-[var(--bg-card-header)] border-t border-[var(--border-subtle)] flex items-center gap-2">
          <span className="text-pink-500 dark:text-pink-400 font-mono text-xs flex-shrink-0 font-semibold">
            hikari@local:~$
          </span>
          <input
            type="text"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            placeholder="type 'help' or commands..."
            className="flex-1 bg-transparent text-xs font-mono text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none"
          />
          <span className="w-2 h-4 bg-[var(--accent-cyan)] animate-pulse flex-shrink-0" />
        </form>
      </div>
    </div>
  );
};
