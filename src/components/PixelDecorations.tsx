'use client';

import React from 'react';

// 1. Pixel Art Skyline SVG for the Sidebar (Matching Hikari OS reference image)
export const PixelCitySkyline: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-[var(--bg-card)] border-2 border-[var(--border-neon)] p-2 ${className}`}>
      {/* Pixelated Moon & Stars Header */}
      <svg
        viewBox="0 0 160 80"
        className="w-full h-auto block select-none"
        style={{ imageRendering: 'pixelated' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sky gradient background */}
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#121330" />
            <stop offset="50%" stopColor="#2a1a44" />
            <stop offset="85%" stopColor="#58244e" />
            <stop offset="100%" stopColor="#ff5e62" />
          </linearGradient>
        </defs>
        <rect width="160" height="80" fill="url(#skyGrad)" />

        {/* Pixel Stars */}
        <rect x="18" y="12" width="2" height="2" fill="#ffe082" />
        <rect x="42" y="8" width="2" height="2" fill="#ffffff" />
        <rect x="75" y="16" width="2" height="2" fill="#ffd54f" />
        <rect x="110" y="10" width="2" height="2" fill="#ffffff" />
        <rect x="135" y="18" width="2" height="2" fill="#ffe082" />
        <rect x="90" y="6" width="2" height="2" fill="#ffffff" />
        <rect x="25" y="24" width="2" height="2" fill="#ffffff" opacity="0.8" />
        <rect x="145" y="28" width="2" height="2" fill="#ffffff" opacity="0.8" />

        {/* Crescent Moon (Yellow pixel art) */}
        <rect x="20" y="18" width="10" height="2" fill="#ffe082" />
        <rect x="18" y="20" width="6" height="2" fill="#ffe082" />
        <rect x="16" y="22" width="6" height="4" fill="#ffe082" />
        <rect x="18" y="26" width="6" height="2" fill="#ffe082" />
        <rect x="20" y="28" width="10" height="2" fill="#ffe082" />
        {/* Inner cutout for crescent */}
        <rect x="22" y="20" width="6" height="2" fill="#2a1a44" />
        <rect x="20" y="22" width="6" height="4" fill="#301b44" />
        <rect x="22" y="26" width="6" height="2" fill="#361a46" />

        {/* Far Background Skyline (Dark Magenta / Purple silhouette) */}
        <rect x="0" y="44" width="14" height="36" fill="#22112e" />
        <rect x="14" y="38" width="18" height="42" fill="#291236" />
        <rect x="32" y="48" width="12" height="32" fill="#22112e" />
        <rect x="44" y="34" width="22" height="46" fill="#2c143c" />
        <rect x="66" y="42" width="16" height="38" fill="#22112e" />
        <rect x="82" y="32" width="24" height="48" fill="#301542" />
        <rect x="106" y="40" width="16" height="40" fill="#22112e" />
        <rect x="122" y="36" width="20" height="44" fill="#2a1338" />
        <rect x="142" y="46" width="18" height="34" fill="#22112e" />

        {/* Midground Skyline (Deep Navy silhouette) */}
        <rect x="6" y="50" width="16" height="30" fill="#13152d" />
        <rect x="26" y="46" width="14" height="34" fill="#111328" />
        <rect x="42" y="52" width="18" height="28" fill="#141630" />
        <rect x="64" y="44" width="16" height="36" fill="#0f1124" />
        <rect x="84" y="48" width="20" height="32" fill="#13152d" />
        <rect x="110" y="46" width="16" height="34" fill="#101229" />
        <rect x="132" y="52" width="22" height="28" fill="#13152d" />

        {/* Foreground Buildings (Deep Dark Indigo) */}
        <rect x="0" y="56" width="10" height="24" fill="#090a18" />
        <rect x="12" y="54" width="16" height="26" fill="#080916" />
        <rect x="34" y="58" width="20" height="22" fill="#090a18" />
        <rect x="58" y="50" width="18" height="30" fill="#070814" />
        <rect x="80" y="54" width="22" height="26" fill="#080916" />
        <rect x="106" y="52" width="14" height="28" fill="#070814" />
        <rect x="124" y="58" width="20" height="22" fill="#090a18" />
        <rect x="148" y="54" width="12" height="26" fill="#080916" />

        {/* Lit Windows (Yellow / Cyan / Amber glowing pixel windows) */}
        <rect x="16" y="58" width="2" height="2" fill="#ffeb3b" />
        <rect x="20" y="62" width="2" height="2" fill="#ffeb3b" />
        <rect x="16" y="68" width="2" height="2" fill="#ff9800" />
        <rect x="22" y="70" width="2" height="2" fill="#ffeb3b" />

        <rect x="38" y="62" width="2" height="2" fill="#00e5ff" />
        <rect x="46" y="66" width="2" height="2" fill="#ffeb3b" />
        <rect x="42" y="72" width="2" height="2" fill="#ffeb3b" />

        <rect x="62" y="54" width="2" height="2" fill="#ffeb3b" />
        <rect x="68" y="58" width="2" height="2" fill="#ff9800" />
        <rect x="62" y="64" width="2" height="2" fill="#ffeb3b" />
        <rect x="70" y="68" width="2" height="2" fill="#00e5ff" />

        <rect x="86" y="58" width="2" height="2" fill="#ffeb3b" />
        <rect x="94" y="62" width="2" height="2" fill="#ffeb3b" />
        <rect x="90" y="68" width="2" height="2" fill="#ff9800" />

        <rect x="110" y="56" width="2" height="2" fill="#ffeb3b" />
        <rect x="114" y="62" width="2" height="2" fill="#00e5ff" />
        <rect x="110" y="70" width="2" height="2" fill="#ffeb3b" />

        <rect x="130" y="64" width="2" height="2" fill="#ffeb3b" />
        <rect x="136" y="68" width="2" height="2" fill="#ff9800" />
      </svg>
    </div>
  );
};

// 2. Pixel Rainbow / Dither Bar (Matches top of Hero in reference image)
export const PixelDitherBar: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-[3px] py-1 overflow-hidden select-none ${className}`}>
      {/* Pattern of repeating rainbow pixel segments */}
      {Array.from({ length: 42 }).map((_, i) => {
        const colors = [
          'bg-sky-400',
          'bg-blue-500',
          'bg-indigo-400',
          'bg-purple-400',
          'bg-pink-500',
          'bg-rose-400',
          'bg-amber-400',
          'bg-yellow-300',
          'bg-emerald-400',
          'bg-cyan-300'
        ];
        const color = colors[i % colors.length];
        const isDithered = i % 2 === 0;
        return (
          <span
            key={i}
            className={`h-2 w-2 flex-shrink-0 ${color} ${
              isDithered ? 'opacity-90' : 'opacity-40'
            } shadow-[0_0_4px_rgba(255,255,255,0.2)]`}
            style={{
              clipPath: isDithered ? 'none' : 'polygon(0 0, 100% 0, 0 100%)'
            }}
          />
        );
      })}
    </div>
  );
};

// 3. Segmented Pixel Meter (e.g. Healthy ■■■■■■□□)
export const PixelMeter: React.FC<{
  current?: number;
  total?: number;
  statusText?: string;
  color?: 'green' | 'cyan' | 'pink' | 'amber';
}> = ({ current = 6, total = 8, statusText = 'HEALTHY', color = 'green' }) => {
  const colorMap = {
    green: {
      active: 'bg-emerald-400 shadow-[0_0_6px_#34d399]',
      text: 'text-emerald-400'
    },
    cyan: {
      active: 'bg-sky-400 shadow-[0_0_6px_#38bdf8]',
      text: 'text-sky-400'
    },
    pink: {
      active: 'bg-pink-500 shadow-[0_0_6px_#ec4899]',
      text: 'text-pink-400'
    },
    amber: {
      active: 'bg-amber-400 shadow-[0_0_6px_#fbbf24]',
      text: 'text-amber-400'
    }
  };

  const currentTheme = colorMap[color];

  return (
    <div className="flex items-center gap-2">
      {statusText && (
        <span className={`text-[10px] font-mono font-bold tracking-wider ${currentTheme.text}`}>
          {statusText}
        </span>
      )}
      <div className="flex items-center gap-[3px]">
        {Array.from({ length: total }).map((_, idx) => {
          const isActive = idx < current;
          return (
            <span
              key={idx}
              className={`w-2 h-3 transition-colors ${
                isActive
                  ? currentTheme.active
                  : 'bg-[var(--bg-secondary)] border border-[var(--border-neon)]/60'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

// 4. Retro OS Window Frame Component (with double pixel border and header controls _ [] X)
export const RetroWindow: React.FC<{
  title: string;
  badge?: string;
  badgeColor?: 'pink' | 'blue' | 'green' | 'amber';
  icon?: React.ReactNode;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}> = ({
  title,
  badge,
  badgeColor = 'pink',
  icon,
  headerRight,
  children,
  className = '',
  contentClassName = ''
}) => {
  const badgeClasses = {
    pink: 'bg-pink-500/10 text-pink-500 dark:text-pink-300 border-pink-500/40',
    blue: 'bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/40',
    green: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/40',
    amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/40'
  };

  return (
    <div
      className={`relative bg-[var(--bg-card)] border-2 border-[var(--border-neon)] rounded-xl overflow-hidden shadow-lg ${className}`}
    >
      {/* Outer Glow / Pixel Border Accent */}
      <div className="absolute inset-[1px] border border-[var(--border-neon-glow)] pointer-events-none rounded-[10px]" />

      {/* Retro Window Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[var(--bg-card-header)] border-b-2 border-[var(--border-neon)] select-none">
        <div className="flex items-center gap-2">
          {icon && <span className="text-[var(--accent-cyan)] flex items-center">{icon}</span>}
          <span className="font-mono text-xs font-bold tracking-wider text-[var(--text-title)] uppercase">
            {title}
          </span>
          {badge && (
            <span
              className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider font-semibold ${badgeClasses[badgeColor]}`}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Window controls or custom right elements */}
        <div className="flex items-center gap-2">
          {headerRight ? (
            headerRight
          ) : (
            <div className="flex items-center gap-1.5 text-[var(--text-muted)] font-mono text-[11px]">
              <span className="w-3.5 h-3.5 flex items-center justify-center rounded border border-[var(--border-neon)] hover:border-sky-400 hover:text-[var(--text-title)] cursor-pointer transition">
                _
              </span>
              <span className="w-3.5 h-3.5 flex items-center justify-center rounded border border-[var(--border-neon)] hover:border-sky-400 hover:text-[var(--text-title)] cursor-pointer transition text-[9px]">
                □
              </span>
              <span className="w-3.5 h-3.5 flex items-center justify-center rounded border border-[var(--border-neon)] hover:border-rose-400 hover:text-rose-400 cursor-pointer transition text-[10px]">
                ×
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Window Body Content */}
      <div className={`p-4 ${contentClassName}`}>{children}</div>
    </div>
  );
};
