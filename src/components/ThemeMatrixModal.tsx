'use client';

import React, { useState, useMemo } from 'react';
import { 
  Palette, 
  X, 
  Search, 
  Sparkles, 
  Shuffle, 
  Check, 
  Moon, 
  Sun,
  RotateCcw
} from 'lucide-react';
import { ColorThemePreset } from '@/types/portfolio';
import { themePresets, applyThemePreset } from '@/data/themePresets';

interface ThemeMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPresetId: string;
  onSelectTheme: (preset: ColorThemePreset) => void;
}

export const ThemeMatrixModal: React.FC<ThemeMatrixModalProps> = ({
  isOpen,
  onClose,
  currentPresetId,
  onSelectTheme
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL', count: 100 },
    { id: 'cyberpunk', label: 'CYBERPUNK', count: 18 },
    { id: 'retro_console', label: 'CONSOLES & OS', count: 18 },
    { id: 'engineering', label: 'ELECTRICAL', count: 16 },
    { id: 'code_matrix', label: 'CODE & MATRIX', count: 18 },
    { id: 'aesthetic', label: 'AESTHETIC', count: 16 },
    { id: 'minimal', label: 'LIGHT & MINIMAL', count: 14 }
  ];

  const filteredPresets = useMemo(() => {
    return themePresets.filter((preset) => {
      const matchesCategory = selectedCategory === 'all' || preset.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        preset.name.toLowerCase().includes(q) ||
        preset.nameEn.toLowerCase().includes(q) ||
        preset.id.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const currentThemeObj = useMemo(() => {
    return themePresets.find((p) => p.id === currentPresetId) || themePresets[0];
  }, [currentPresetId]);

  const handleRandomTheme = () => {
    const randomIndex = Math.floor(Math.random() * themePresets.length);
    const chosen = themePresets[randomIndex];
    onSelectTheme(chosen);
    applyThemePreset(chosen);
  };

  const handleResetDefault = () => {
    const defaultTheme = themePresets[0];
    onSelectTheme(defaultTheme);
    applyThemePreset(defaultTheme);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn select-none font-mono">
      <div className="bg-[#080918] border-2 border-sky-400 rounded-xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-[0_0_50px_rgba(56,189,248,0.4)] overflow-hidden">
        {/* Modal Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#101432] border-b-2 border-sky-400">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-pink-950 border border-pink-500/60 flex items-center justify-center text-pink-400">
              <Palette size={15} />
            </div>
            <div>
              <div className="text-xs font-bold text-white tracking-wider flex items-center gap-2">
                <span>HIKARI COLOR MATRIX</span>
                <span className="text-[10px] text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-500/40 font-bold">
                  100 PRESETS
                </span>
              </div>
              <div className="text-[10px] text-slate-400">
                CURRENT: <span className="text-pink-300 font-bold">{currentThemeObj.nameEn} ({currentThemeObj.name})</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRandomTheme}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1c224a] hover:bg-pink-600 text-pink-200 hover:text-white border border-pink-500/40 text-[11px] font-bold transition cursor-pointer shadow-sm"
              title="สุ่มโทนสีใหม่"
            >
              <Shuffle size={12} />
              <span className="hidden sm:inline">RANDOM</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-rose-400 transition"
              title="ปิดหน้าต่าง"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Search & Categories Bar */}
        <div className="p-3 sm:p-4 bg-[#0c0e24] border-b border-[#232b58] space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาโทนสีจาก 100 แบบ (เช่น Matrix, Neon, Game Boy, PCB, Dracula, Cyber...)"
              className="w-full pl-9 pr-4 py-2 bg-[#060714] border border-[#2b356e] rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[10px] scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded whitespace-nowrap transition cursor-pointer font-bold ${
                  selectedCategory === cat.id
                    ? 'bg-sky-500 text-white shadow-[0_0_10px_rgba(56,189,248,0.4)]'
                    : 'bg-[#121634] text-slate-400 hover:text-white border border-[#202854]'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* 100 Presets Grid Area */}
        <div className="p-3 sm:p-4 flex-1 overflow-y-auto max-h-[55vh]">
          {filteredPresets.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs">
              ไม่พบโทนสีที่ค้นหา "{searchQuery}"
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filteredPresets.map((preset, idx) => {
                const isSelected = preset.id === currentPresetId;
                const { swatches } = preset.colors;

                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      onSelectTheme(preset);
                      applyThemePreset(preset);
                    }}
                    className={`p-3 rounded-lg text-left transition-all duration-150 cursor-pointer flex flex-col justify-between border-2 ${
                      isSelected
                        ? 'bg-[#15204c] border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.35)] scale-[1.01]'
                        : 'bg-[#0d102a] border-[#222a54] hover:border-sky-400/60 hover:bg-[#121638]'
                    }`}
                  >
                    {/* Top Row: Index number, Category tag & Checkmark */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-slate-500 font-bold">
                          #{String(themePresets.findIndex((p) => p.id === preset.id) + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#181c3c] text-sky-300 border border-[#2b356e]">
                          {preset.category.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {preset.mode === 'light' ? (
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
                    <div className="mb-3">
                      <div className="text-xs font-bold text-white truncate">
                        {preset.nameEn}
                      </div>
                      <div className="text-[11px] text-slate-400 font-chakra truncate">
                        {preset.name}
                      </div>
                    </div>

                    {/* Bottom: 4 Color Swatches */}
                    <div className="flex items-center gap-1.5 pt-2 border-t border-[#1b2248]">
                      {swatches.map((color, sIdx) => (
                        <div
                          key={sIdx}
                          className="w-5 h-5 rounded border border-white/20 shadow-sm flex-shrink-0"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                      <span className="text-[10px] text-slate-500 ml-auto font-mono">
                        SELECT ▸
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-3 bg-[#0a0d24] border-t-2 border-[#202752] flex items-center justify-between text-xs font-mono">
          <button
            onClick={handleResetDefault}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>RESET (Hikari Classic)</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-[11px] hidden sm:inline">
              เลือกแล้วมีผลทันทีทั้งเว็บไซต์
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-sky-600 hover:bg-sky-500 text-white font-bold transition cursor-pointer"
            >
              DONE [ ปิด ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
