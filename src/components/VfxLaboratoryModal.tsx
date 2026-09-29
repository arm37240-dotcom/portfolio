'use client';

import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  X, 
  Search, 
  Shuffle, 
  Power, 
  RotateCcw, 
  Tv, 
  Zap, 
  Binary, 
  Volume2, 
  Gamepad2, 
  Compass, 
  CloudRain, 
  Type, 
  MousePointer, 
  Flame, 
  Sliders,
  Filter
} from 'lucide-react';
import { 
  ALL_100_VFX, 
  VFX_CATEGORIES, 
  VFX_PRESET_COMBOS, 
  VfxCategory, 
  VfxItem,
  VfxPresetCombo
} from '@/lib/vfxEngine100';
import { retroAudio } from '@/lib/retroAudio';

interface VfxLaboratoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeIds: Set<string>;
  onToggleVfx: (id: string) => void;
  onApplyPreset: (combo: VfxPresetCombo) => void;
  onEnableAll: () => void;
  onDisableAll: () => void;
}

export const VfxLaboratoryModal: React.FC<VfxLaboratoryModalProps> = ({
  isOpen,
  onClose,
  activeIds,
  onToggleVfx,
  onApplyPreset,
  onEnableAll,
  onDisableAll
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Category Icon Resolver
  const getCategoryIcon = (catId: VfxCategory) => {
    switch (catId) {
      case 'crt': return <Tv size={14} className="text-sky-400" />;
      case 'electric': return <Zap size={14} className="text-amber-400" />;
      case 'matrix': return <Binary size={14} className="text-emerald-400" />;
      case 'audio': return <Volume2 size={14} className="text-pink-400" />;
      case 'arcade': return <Gamepad2 size={14} className="text-purple-400" />;
      case 'cosmic': return <Compass size={14} className="text-indigo-400" />;
      case 'holo': return <Sparkles size={14} className="text-cyan-400" />;
      case 'weather': return <CloudRain size={14} className="text-teal-400" />;
      case 'typography': return <Type size={14} className="text-orange-400" />;
      case 'interactive': return <MousePointer size={14} className="text-rose-400" />;
      default: return <Sliders size={14} />;
    }
  };

  // Filtered Effects
  const filteredEffects = useMemo(() => {
    return ALL_100_VFX.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        item.name.toLowerCase().includes(q) ||
        item.nameTh.includes(q) ||
        item.description.includes(q) ||
        item.id.includes(q) ||
        String(item.num) === q;
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Roll 5 Random Effects
  const handleRandom5 = () => {
    retroAudio.playThemeSwitch();
    const shuffled = [...ALL_100_VFX].sort(() => Math.random() - 0.5);
    const chosen = shuffled.slice(0, 5);
    onApplyPreset({
      id: 'random-5',
      name: 'Random 5 Combo',
      nameTh: 'สุ่ม 5 เอฟเฟกต์เรโทร',
      description: 'สุ่มคอมโบเอฟเฟกต์ 5 แบบไม่ซ้ำกัน',
      activeCount: 5,
      icon: 'Shuffle',
      badge: 'RANDOM',
      effectIds: chosen.map(c => c.id)
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn font-mono">
      <div className="relative w-full max-w-6xl max-h-[92vh] bg-[#07091a] border-2 border-sky-400/80 rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.35)] flex flex-col overflow-hidden text-slate-100">
        
        {/* 1. Modal Top Bar */}
        <div className="px-5 py-4 bg-[#0d1029] border-b-2 border-sky-500/40 flex items-center justify-between select-none">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-950/80 border border-sky-400 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]">
              <Sparkles size={20} className="animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-wider flex items-center gap-2">
                  <span>HIKARI 100 RETRO VFX LAB</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-950 border border-pink-500 text-pink-300 font-bold">
                    100 EFFECTS
                  </span>
                </h2>
              </div>
              <p className="text-xs text-sky-300/80">
                ห้องทดลองชุดเอฟเฟกต์ 100 รูปแบบ (CRT, แสงเลเซอร์, ประกายไฟ, เมทริกซ์, ออสซิลโลสโคป)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-sky-400/50 text-xs">
              <span className="text-slate-400">ACTIVE:</span>
              <span className="font-bold text-sky-400 text-sm">
                {activeIds.size}
              </span>
              <span className="text-slate-500">/ 100</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-rose-950/80 hover:text-rose-300 text-slate-400 transition cursor-pointer"
              title="ปิดหน้าต่าง"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* 2. Curated Combo Presets Row */}
        <div className="px-5 py-3 bg-[#0a0d24] border-b border-[#1b2354] overflow-x-auto select-none">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 mr-1">
              <Flame size={13} className="text-amber-400" />
              <span>PRESETS:</span>
            </span>

            {VFX_PRESET_COMBOS.map(combo => (
              <button
                key={combo.id}
                onClick={() => {
                  retroAudio.playThemeSwitch();
                  onApplyPreset(combo);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-sky-950/80 border border-sky-500/30 hover:border-sky-400 text-xs text-slate-300 hover:text-white transition cursor-pointer shadow-sm group"
              >
                <span className="font-semibold">{combo.name}</span>
                <span className="text-[10px] px-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40">
                  {combo.effectIds.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Controls & Filter Bar */}
        <div className="px-5 py-3 bg-[#080a1e] border-b border-[#1b2354] flex flex-wrap items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 min-w-[240px]">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาชื่อเอฟเฟกต์, หมวดหมู่ หรือคำอธิบาย (#001 - #100)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-sky-500/30 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Master Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRandom5}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/50 text-purple-200 text-xs font-bold transition cursor-pointer"
              title="สุ่ม 5 เอฟเฟกต์"
            >
              <Shuffle size={13} />
              <span className="hidden sm:inline">RANDOM 5</span>
            </button>

            <button
              onClick={() => {
                retroAudio.playClick();
                onEnableAll();
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-200 text-xs font-bold transition cursor-pointer"
              title="เปิดทั้ง 100 เอฟเฟกต์"
            >
              <Power size={13} />
              <span className="hidden sm:inline">ALL ON (100)</span>
            </button>

            <button
              onClick={() => {
                retroAudio.playClick();
                onDisableAll();
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-rose-950 border border-slate-700 hover:border-rose-500/60 text-slate-400 hover:text-rose-200 text-xs font-bold transition cursor-pointer"
              title="ปิดเอฟเฟกต์ทั้งหมด"
            >
              <RotateCcw size={13} />
              <span className="hidden sm:inline">ALL OFF</span>
            </button>
          </div>
        </div>

        {/* 4. 10 Category Filter Tabs */}
        <div className="px-5 py-2.5 bg-[#060818] border-b border-[#161c42] overflow-x-auto select-none">
          <div className="flex items-center gap-1.5 min-w-max">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-sky-500 text-white shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-[#1b2354]'
              }`}
            >
              <Filter size={12} />
              <span>ALL (100)</span>
            </button>

            {VFX_CATEGORIES.map(cat => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                    isSelected
                      ? 'bg-sky-950 border-2 border-sky-400 text-sky-200 font-bold shadow-md'
                      : 'bg-slate-900/40 text-slate-400 hover:text-white border border-[#1b2354]'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.label} (10)</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. 100 Effects Grid Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredEffects.map((fx) => {
              const active = activeIds.has(fx.id);
              return (
                <div
                  key={fx.id}
                  onClick={() => {
                    retroAudio.playClick();
                    onToggleVfx(fx.id);
                  }}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer select-none flex flex-col justify-between group ${
                    active
                      ? 'bg-[#0f1738]/95 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] ring-1 ring-sky-400/40'
                      : 'bg-[#090b20]/60 border-[#1a214d] hover:border-slate-600 hover:bg-[#0c0f2b]'
                  }`}
                >
                  <div>
                    {/* Header: ID, Category & Toggle Pill */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded font-mono ${
                          active ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-400'
                        }`}>
                          #{String(fx.num).padStart(3, '0')}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {fx.categoryLabelTh}
                        </span>
                      </div>

                      {/* Neon ON / OFF Switch */}
                      <div className={`px-2 py-0.5 rounded-full text-[10px] font-black tracking-wider transition ${
                        active
                          ? 'bg-sky-500 text-white shadow-[0_0_10px_rgba(56,189,248,0.8)]'
                          : 'bg-slate-800 text-slate-500'
                      }`}>
                        {active ? 'ON' : 'OFF'}
                      </div>
                    </div>

                    {/* Name in EN & TH */}
                    <h3 className={`text-xs font-bold leading-snug mb-1 transition ${
                      active ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {fx.name}
                    </h3>
                    <p className="text-[11px] text-sky-400/90 font-medium mb-1.5">
                      {fx.nameTh}
                    </p>

                    {/* Description */}
                    <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">
                      {fx.description}
                    </p>
                  </div>

                  {/* Footer: Type Badge */}
                  <div className="pt-2 mt-2 border-t border-[#182049] flex items-center justify-between text-[9px] text-slate-500 uppercase">
                    <span className="flex items-center gap-1">
                      {getCategoryIcon(fx.category)}
                      <span>{fx.type}</span>
                    </span>
                    <span className={active ? 'text-sky-300 font-bold' : ''}>
                      {active ? '● ACTIVE' : '○ DISABLED'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredEffects.length === 0 && (
            <div className="py-16 text-center text-slate-500">
              <Search size={32} className="mx-auto mb-2 opacity-40" />
              <p className="text-sm">ไม่พบเอฟเฟกต์ที่ตรงกับคำค้นหา &ldquo;{searchQuery}&rdquo;</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-2 text-xs text-sky-400 hover:underline"
              >
                ล้างตัวกรองทั้งหมด
              </button>
            </div>
          )}
        </div>

        {/* 6. Modal Footer */}
        <div className="px-5 py-3 bg-[#0d1029] border-t-2 border-sky-500/40 flex items-center justify-between select-none text-xs">
          <div className="text-slate-400 text-[11px]">
            <span>เปิดใช้งานแล้ว </span>
            <strong className="text-sky-400 font-bold">{activeIds.size}</strong>
            <span> จาก 100 เอฟเฟกต์</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition shadow-[0_0_15px_rgba(56,189,248,0.4)] cursor-pointer"
          >
            เสร็จสิ้น (DONE)
          </button>
        </div>

      </div>
    </div>
  );
};
