'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { 
  Palette, 
  X, 
  Search, 
  Shuffle, 
  Check, 
  Moon, 
  Sun, 
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Compass,
  Sliders,
  Zap
} from 'lucide-react';
import { ColorThemePreset, PresetMode } from '@/types/portfolio';
import { applyThemePreset, getThemeColors } from '@/data/themePresets';
import { 
  THEME_REALMS, 
  getThemesPage, 
  getTheme10kById, 
  TOTAL_THEMES_COUNT 
} from '@/lib/themeEngine10k';
import { retroAudio } from '@/lib/retroAudio';

interface ThemeMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPresetId: string;
  onSelectTheme: (preset: ColorThemePreset, mode?: PresetMode) => void;
  currentMode?: PresetMode;
  onToggleMode?: (mode: PresetMode) => void;
}

export const ThemeMatrixModal: React.FC<ThemeMatrixModalProps> = ({
  isOpen,
  onClose,
  currentPresetId,
  onSelectTheme,
  currentMode = 'dark',
  onToggleMode
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRealm, setSelectedRealm] = useState<string>('all');
  const [modalMode, setModalMode] = useState<PresetMode>(currentMode);
  const [page, setPage] = useState(1);
  const pageSize = 60;

  // Quantum Seed Jumper & Dial (1 to 10000)
  const [dialInput, setDialInput] = useState<string>('');
  const [dialSlider, setDialSlider] = useState<number>(1);

  // Sync modalMode whenever modal is opened
  useEffect(() => {
    if (isOpen) {
      setModalMode(currentMode);
    }
  }, [isOpen, currentMode]);

  // Reset page when realm or search changes
  useEffect(() => {
    setPage(1);
  }, [selectedRealm, searchQuery]);

  // Current active theme object
  const currentThemeObj = useMemo(() => {
    return getTheme10kById(currentPresetId);
  }, [currentPresetId]);

  // Load paginated themes from 10,000 engine
  const { themes: currentThemes, totalMatches, totalPages } = useMemo(() => {
    return getThemesPage(page, pageSize, selectedRealm, searchQuery);
  }, [page, pageSize, selectedRealm, searchQuery]);

  // Quantum Randomizer (Roll 1 - 10,000)
  const handleRandom10k = useCallback(() => {
    const randomNum = Math.floor(Math.random() * TOTAL_THEMES_COUNT) + 1;
    const chosen = getTheme10kById(randomNum);
    setDialSlider(randomNum);
    setDialInput(String(randomNum));
    retroAudio.playThemeSwitch();
    onSelectTheme(chosen, modalMode);
    applyThemePreset(chosen, modalMode);
  }, [modalMode, onSelectTheme]);

  // Reset to Hikari Classic (#0001)
  const handleResetDefault = () => {
    const defaultTheme = getTheme10kById(1);
    setDialSlider(1);
    setDialInput('1');
    retroAudio.playClick();
    onSelectTheme(defaultTheme, modalMode);
    applyThemePreset(defaultTheme, modalMode);
  };

  // Jump to specific theme number
  const handleJumpToNumber = (num: number) => {
    const clamped = Math.max(1, Math.min(10000, num));
    const chosen = getTheme10kById(clamped);
    setDialSlider(clamped);
    setDialInput(String(clamped));
    retroAudio.playThemeSwitch();
    onSelectTheme(chosen, modalMode);
    applyThemePreset(chosen, modalMode);
  };

  // Handle dial input submit
  const handleDialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(dialInput.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= 10000) {
      handleJumpToNumber(parsed);
    }
  };

  const handleModeSwitch = (mode: PresetMode) => {
    setModalMode(mode);
    retroAudio.playChime(mode === 'light');
    if (onToggleMode) {
      onToggleMode(mode);
    }
    applyThemePreset(currentThemeObj, mode);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn select-none font-mono">
      <div className="bg-[#060818] border-2 border-sky-400 rounded-xl w-full max-w-5xl max-h-[94vh] flex flex-col shadow-[0_0_60px_rgba(56,189,248,0.4)] overflow-hidden">
        {/* 1. Modal Window Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-[#0e1230] border-b-2 border-sky-400">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-pink-950 border border-pink-500/60 flex items-center justify-center text-pink-400 shadow-sm">
              <Sparkles size={16} className="animate-spin-slow" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white tracking-wider flex items-center gap-2">
                <span>HIKARI QUANTUM COLOR MATRIX</span>
                <span className="text-[10px] text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-500/40 font-bold">
                  10,000 THEMES
                </span>
              </div>
              <div className="text-[10px] text-slate-400 flex items-center gap-1.5 flex-wrap">
                <span>ACTIVE:</span>
                <span className="text-pink-300 font-bold">{currentThemeObj.nameEn}</span>
                <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${modalMode === 'light' ? 'bg-amber-400/20 text-amber-300 border border-amber-500/40' : 'bg-sky-400/20 text-sky-300 border border-sky-500/40'}`}>
                  {modalMode === 'light' ? '☀️ โหมดเช้า' : '🌙 โหมดค่ำ'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRandom10k}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1c224a] hover:bg-pink-600 text-pink-200 hover:text-white border border-pink-500/40 text-xs font-bold transition cursor-pointer shadow-sm active:scale-95"
              title="สุ่มโทนสีจาก 1-10,000 รูปแบบ"
            >
              <Shuffle size={13} />
              <span className="hidden sm:inline">ROLL 1-10,000</span>
              <span className="sm:hidden">ROLL</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-rose-400 transition cursor-pointer"
              title="ปิดหน้าต่าง"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* 2. Quantum Theme Jumper & Mode Switcher Bar */}
        <div className="px-3 sm:px-4 py-2 bg-[#090c24] border-b border-[#1c234e] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5">
          {/* Direct Theme # Quick Jumper */}
          <form onSubmit={handleDialSubmit} className="flex items-center gap-2">
            <span className="text-xs text-sky-400 font-bold flex items-center gap-1">
              <Zap size={13} className="text-amber-400" />
              <span>DIAL #1-10000:</span>
            </span>
            <input
              type="text"
              value={dialInput}
              onChange={(e) => setDialInput(e.target.value)}
              placeholder="เช่น 777, 2077, 9999"
              className="w-32 px-2.5 py-1 bg-[#040614] border border-[#2b356e] rounded text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-400 font-mono text-center"
            />
            <button
              type="submit"
              className="px-2.5 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition cursor-pointer"
            >
              JUMP ▸
            </button>
          </form>

          {/* Quick Scrub Slider across 1-10,000 */}
          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <span className="text-[10px] text-slate-500 font-bold">#0001</span>
            <input
              type="range"
              min="1"
              max="10000"
              value={dialSlider}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                setDialSlider(val);
                setDialInput(String(val));
              }}
              onMouseUp={() => handleJumpToNumber(dialSlider)}
              onTouchEnd={() => handleJumpToNumber(dialSlider)}
              className="w-full accent-sky-400 cursor-pointer h-1.5 bg-[#121638] rounded-lg appearance-none"
              title="เลื่อนปรับเฉดสี 1 - 10,000 อย่างรวดเร็ว"
            />
            <span className="text-[10px] text-slate-500 font-bold">#10000</span>
          </div>

          {/* Segmented Mode Switcher: ☀️ โหมดเช้า / 🌙 โหมดค่ำ */}
          <div className="flex items-center bg-[#040614] border border-[#2b356e] p-0.5 rounded-lg shrink-0 self-end md:self-auto">
            <button
              type="button"
              onClick={() => handleModeSwitch('light')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold transition cursor-pointer ${
                modalMode === 'light'
                  ? 'bg-amber-400 text-slate-950 shadow-[0_0_12px_rgba(251,191,36,0.6)]'
                  : 'text-slate-400 hover:text-amber-300'
              }`}
            >
              <Sun size={13} className={modalMode === 'light' ? 'text-slate-950 animate-spin-slow' : 'text-amber-400'} />
              <span>☀️ โหมดเช้า</span>
            </button>
            <button
              type="button"
              onClick={() => handleModeSwitch('dark')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold transition cursor-pointer ${
                modalMode === 'dark'
                  ? 'bg-sky-500 text-white shadow-[0_0_12px_rgba(56,189,248,0.6)]'
                  : 'text-slate-400 hover:text-sky-300'
              }`}
            >
              <Moon size={13} className={modalMode === 'dark' ? 'text-white' : 'text-sky-400'} />
              <span>🌙 โหมดค่ำ</span>
            </button>
          </div>
        </div>

        {/* 3. Search & 10 Realms Tabs Bar */}
        <div className="p-2.5 sm:p-3 bg-[#0a0d26] border-b border-[#1c234e] space-y-2">
          {/* Search Box */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาชื่อโทนสี, สเปกตรัม หรือหมายเลข (เช่น #777, Tektronix, Matrix, Cyber, Dracula, 9000...)"
              className="w-full pl-9 pr-4 py-1.5 bg-[#040614] border border-[#232b58] rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* 10 Thematic Realms */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[10px] scrollbar-none">
            {THEME_REALMS.map((realm) => (
              <button
                key={realm.id}
                onClick={() => setSelectedRealm(realm.id)}
                className={`px-2.5 py-1 rounded whitespace-nowrap transition cursor-pointer font-bold flex items-center gap-1 ${
                  selectedRealm === realm.id
                    ? 'bg-sky-500 text-white shadow-[0_0_10px_rgba(56,189,248,0.5)]'
                    : 'bg-[#0f1434] text-slate-400 hover:text-white border border-[#1b2248]'
                }`}
                title={realm.description}
              >
                <span>{realm.icon}</span>
                <span>{realm.nameEn}</span>
                {realm.id !== 'all' && (
                  <span className="text-[9px] opacity-75">
                    ({realm.startId}-{realm.endId})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Themes Grid Area */}
        <div className="p-3 flex-1 overflow-y-auto max-h-[50vh] sm:max-h-[55vh]">
          {currentThemes.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs">
              ไม่พบโทนสีที่ค้นหา "{searchQuery}"
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {currentThemes.map((preset) => {
                const isSelected = preset.id === currentPresetId;
                const colors = getThemeColors(preset, modalMode);
                const { swatches } = colors;

                // Extract numeric badge ID
                const numericMatch = preset.id.match(/\d+/);
                const numDisplay = numericMatch ? `#${numericMatch[0].padStart(4, '0')}` : '#CORE';

                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      retroAudio.playThemeSwitch();
                      onSelectTheme(preset, modalMode);
                      applyThemePreset(preset, modalMode);
                    }}
                    className={`p-2.5 rounded-lg text-left transition-all duration-150 cursor-pointer flex flex-col justify-between border-2 ${
                      isSelected
                        ? 'bg-[#15204c] border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.35)] scale-[1.01]'
                        : 'bg-[#0a0d24] border-[#1a2044] hover:border-sky-400/60 hover:bg-[#101438]'
                    }`}
                  >
                    {/* Top Row: Numeric ID, Category & Mode Icon */}
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-pink-400 font-bold font-mono">
                          {numDisplay}
                        </span>
                        <span className="text-[8px] uppercase px-1.5 py-0.2 rounded bg-[#121634] text-sky-300 border border-[#232b58]">
                          {preset.category.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {modalMode === 'light' ? (
                          <Sun size={11} className="text-amber-400" />
                        ) : (
                          <Moon size={11} className="text-sky-400" />
                        )}
                        {isSelected && (
                          <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold">
                            <Check size={10} />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Middle: Theme Name */}
                    <div className="mb-2.5">
                      <div className="text-xs font-bold text-white truncate">
                        {preset.nameEn}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {preset.name}
                      </div>
                    </div>

                    {/* Bottom: 4 Color Swatches */}
                    <div className="flex items-center gap-1.5 pt-1.5 border-t border-[#161c40]">
                      {swatches.map((color, sIdx) => (
                        <div
                          key={sIdx}
                          className="w-4 h-4 rounded border border-white/20 shadow-sm flex-shrink-0"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                      <span className="text-[9px] text-slate-500 ml-auto font-mono">
                        {modalMode === 'light' ? '☀️ เช้า ▸' : '🌙 ค่ำ ▸'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 5. Pagination & Footer Navigation Bar */}
        <div className="p-2.5 sm:p-3 bg-[#080a1c] border-t-2 border-[#1c234e] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs font-mono">
          <div className="flex items-center gap-3">
            <button
              onClick={handleResetDefault}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition cursor-pointer text-xs"
            >
              <RotateCcw size={12} />
              <span>RESET (#0001)</span>
            </button>

            <span className="text-[11px] text-slate-500 hidden md:inline">
              TOTAL: <span className="text-sky-400 font-bold">{totalMatches.toLocaleString()}</span> THEMES
            </span>
          </div>

          {/* Page Navigator */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => {
                setPage((p) => Math.max(1, p - 1));
                retroAudio.playClick();
              }}
              className="px-2 py-1 rounded bg-[#101436] hover:bg-sky-600 disabled:opacity-30 disabled:hover:bg-[#101436] text-white border border-[#202854] cursor-pointer"
            >
              <ChevronLeft size={13} />
            </button>

            <span className="px-2 text-[11px] text-slate-300">
              PAGE <span className="text-sky-400 font-bold">{page}</span> / {totalPages}
            </span>

            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => {
                setPage((p) => Math.min(totalPages, p + 1));
                retroAudio.playClick();
              }}
              className="px-2 py-1 rounded bg-[#101436] hover:bg-sky-600 disabled:opacity-30 disabled:hover:bg-[#101436] text-white border border-[#202854] cursor-pointer"
            >
              <ChevronRight size={13} />
            </button>

            <button
              onClick={onClose}
              className="ml-3 px-3.5 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white font-bold transition cursor-pointer"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
