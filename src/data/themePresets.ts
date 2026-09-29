import { ColorThemePreset } from '@/types/portfolio';

export const themePresets: ColorThemePreset[] = [
  // ==========================================
  // 1. CYBERPUNK & SYNTHWAVE (1-18)
  // ==========================================
  {
    id: 'hikari-classic',
    name: 'Hikari Classic (ต้นฉบับ)',
    nameEn: 'Hikari Classic OS',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#060713',
      bgSecondary: '#0c0e24',
      bgCard: '#090b20',
      borderOuter: '#2b356e',
      borderInner: '#1c224a',
      textMain: '#f1f5f9',
      textMuted: '#8b9ac4',
      accentPink: '#ec4899',
      accentCyan: '#38bdf8',
      accentGreen: '#22c55e',
      accentAmber: '#f59e0b',
      glowShadow: 'rgba(56, 189, 248, 0.35)',
      swatches: ['#060713', '#2b356e', '#ec4899', '#38bdf8']
    }
  },
  {
    id: 'neo-tokyo-2077',
    name: 'นีโอโตเกียว 2077',
    nameEn: 'Neo Tokyo 2077',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#050508',
      bgSecondary: '#120b18',
      bgCard: '#10081c',
      borderOuter: '#e11d48',
      borderInner: '#4c0519',
      textMain: '#fff1f2',
      textMuted: '#fda4af',
      accentPink: '#f43f5e',
      accentCyan: '#38bdf8',
      accentGreen: '#4ade80',
      accentAmber: '#facc15',
      glowShadow: 'rgba(225, 29, 72, 0.45)',
      swatches: ['#050508', '#e11d48', '#f43f5e', '#facc15']
    }
  },
  {
    id: 'cyber-neon-dusk',
    name: 'นีออนยามพลบค่ำ',
    nameEn: 'Cyber Neon Dusk',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#08051a',
      bgSecondary: '#150d30',
      bgCard: '#120b29',
      borderOuter: '#7c3aed',
      borderInner: '#3b0764',
      textMain: '#f5f3ff',
      textMuted: '#c4b5fd',
      accentPink: '#d946ef',
      accentCyan: '#06b6d4',
      accentGreen: '#10b981',
      accentAmber: '#fbbf24',
      glowShadow: 'rgba(124, 58, 237, 0.4)',
      swatches: ['#08051a', '#7c3aed', '#d946ef', '#06b6d4']
    }
  },
  {
    id: 'outrun-sunset',
    name: 'เอาท์รัน ซันเซ็ต',
    nameEn: 'Outrun Sunset 80s',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#0d021c',
      bgSecondary: '#200538',
      bgCard: '#19032d',
      borderOuter: '#f97316',
      borderInner: '#581c87',
      textMain: '#fff7ed',
      textMuted: '#fdba74',
      accentPink: '#ec4899',
      accentCyan: '#06b6d4',
      accentGreen: '#22c55e',
      accentAmber: '#ea580c',
      glowShadow: 'rgba(249, 115, 22, 0.4)',
      swatches: ['#0d021c', '#f97316', '#ec4899', '#ea580c']
    }
  },
  {
    id: 'vaporwave-dream',
    name: 'เวเปอร์เวฟ ดรีม',
    nameEn: 'Vaporwave Dream',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#0e122c',
      bgSecondary: '#1c1f44',
      bgCard: '#16193d',
      borderOuter: '#f472b6',
      borderInner: '#2dd4bf',
      textMain: '#fdf2f8',
      textMuted: '#a5f3fc',
      accentPink: '#f472b6',
      accentCyan: '#2dd4bf',
      accentGreen: '#34d399',
      accentAmber: '#fcd34d',
      glowShadow: 'rgba(244, 114, 182, 0.35)',
      swatches: ['#0e122c', '#f472b6', '#2dd4bf', '#a5f3fc']
    }
  },
  {
    id: 'akihabara-night',
    name: 'อากิฮาบาระ ราตรี',
    nameEn: 'Akihabara Nightlife',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#050b1a',
      bgSecondary: '#0c1a3b',
      bgCard: '#091530',
      borderOuter: '#2563eb',
      borderInner: '#1e3a8a',
      textMain: '#eff6ff',
      textMuted: '#93c5fd',
      accentPink: '#f43f5e',
      accentCyan: '#60a5fa',
      accentGreen: '#10b981',
      accentAmber: '#f59e0b',
      glowShadow: 'rgba(37, 99, 235, 0.4)',
      swatches: ['#050b1a', '#2563eb', '#f43f5e', '#60a5fa']
    }
  },
  {
    id: 'blade-runner-2049',
    name: 'เบลดรันเนอร์ 2049',
    nameEn: 'Blade Runner 2049',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#0a0806',
      bgSecondary: '#1c140d',
      bgCard: '#160f0a',
      borderOuter: '#d97706',
      borderInner: '#78350f',
      textMain: '#fef3c7',
      textMuted: '#d97706',
      accentPink: '#f59e0b',
      accentCyan: '#38bdf8',
      accentGreen: '#84cc16',
      accentAmber: '#b45309',
      glowShadow: 'rgba(217, 119, 6, 0.45)',
      swatches: ['#0a0806', '#d97706', '#f59e0b', '#38bdf8']
    }
  },
  {
    id: 'shibuya-rain',
    name: 'ชิบูยะ สายฝน',
    nameEn: 'Shibuya Crossing Rain',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#040d14',
      bgSecondary: '#0a1d2e',
      bgCard: '#081726',
      borderOuter: '#0284c7',
      borderInner: '#075985',
      textMain: '#f0f9ff',
      textMuted: '#7dd3fc',
      accentPink: '#ec4899',
      accentCyan: '#38bdf8',
      accentGreen: '#34d399',
      accentAmber: '#fbbf24',
      glowShadow: 'rgba(2, 132, 199, 0.4)',
      swatches: ['#040d14', '#0284c7', '#ec4899', '#38bdf8']
    }
  },
  {
    id: 'hotline-miami',
    name: 'ฮอตไลน์ ไมอามี',
    nameEn: 'Hotline Miami Neon',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#061314',
      bgSecondary: '#0e292c',
      bgCard: '#0b2023',
      borderOuter: '#06b6d4',
      borderInner: '#d946ef',
      textMain: '#ecfeff',
      textMuted: '#67e8f9',
      accentPink: '#d946ef',
      accentCyan: '#22d3ee',
      accentGreen: '#4ade80',
      accentAmber: '#facc15',
      glowShadow: 'rgba(217, 70, 239, 0.4)',
      swatches: ['#061314', '#06b6d4', '#d946ef', '#facc15']
    }
  },
  {
    id: 'ghost-shell',
    name: 'โกสต์ อิน เดอะ เชลล์',
    nameEn: 'Ghost in the Shell',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#020d10',
      bgSecondary: '#081f26',
      bgCard: '#05181e',
      borderOuter: '#14b8a6',
      borderInner: '#0f766e',
      textMain: '#f0fdfa',
      textMuted: '#5eead4',
      accentPink: '#06b6d4',
      accentCyan: '#14b8a6',
      accentGreen: '#2dd4bf',
      accentAmber: '#f59e0b',
      glowShadow: 'rgba(20, 184, 166, 0.4)',
      swatches: ['#020d10', '#14b8a6', '#06b6d4', '#5eead4']
    }
  },
  {
    id: 'neuromancer-black',
    name: 'นิวโรแมนเซอร์',
    nameEn: 'Neuromancer Cyberspace',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#000000',
      bgSecondary: '#0f172a',
      bgCard: '#080d1a',
      borderOuter: '#38bdf8',
      borderInner: '#1e293b',
      textMain: '#ffffff',
      textMuted: '#94a3b8',
      accentPink: '#38bdf8',
      accentCyan: '#22c55e',
      accentGreen: '#22c55e',
      accentAmber: '#eab308',
      glowShadow: 'rgba(56, 189, 248, 0.35)',
      swatches: ['#000000', '#38bdf8', '#22c55e', '#ffffff']
    }
  },
  {
    id: 'synthwave-horizon',
    name: 'ขอบฟ้าซินธ์เวฟ',
    nameEn: 'SynthWave Horizon',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#14051e',
      bgSecondary: '#290c3d',
      bgCard: '#210931',
      borderOuter: '#c026d3',
      borderInner: '#701a75',
      textMain: '#fae8ff',
      textMuted: '#f0abfc',
      accentPink: '#e879f9',
      accentCyan: '#38bdf8',
      accentGreen: '#34d399',
      accentAmber: '#fbbf24',
      glowShadow: 'rgba(192, 38, 211, 0.4)',
      swatches: ['#14051e', '#c026d3', '#e879f9', '#38bdf8']
    }
  },
  {
    id: 'cyber-slums',
    name: 'สลัมไซเบอร์ ซิตี้',
    nameEn: 'Cyber City Underbelly',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#0b0c10',
      bgSecondary: '#1f2833',
      bgCard: '#151c24',
      borderOuter: '#66fcf1',
      borderInner: '#45a29e',
      textMain: '#ffffff',
      textMuted: '#c5c6c7',
      accentPink: '#ff007f',
      accentCyan: '#66fcf1',
      accentGreen: '#66fcf1',
      accentAmber: '#ffaa00',
      glowShadow: 'rgba(102, 252, 241, 0.35)',
      swatches: ['#0b0c10', '#1f2833', '#66fcf1', '#ff007f']
    }
  },
  {
    id: 'holo-projection',
    name: 'โฮโลแกรม โปรเจกชัน',
    nameEn: 'Holographic Field',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#03071e',
      bgSecondary: '#0a1931',
      bgCard: '#071224',
      borderOuter: '#00f0ff',
      borderInner: '#005f73',
      textMain: '#e0fbfc',
      textMuted: '#98c1d9',
      accentPink: '#ff0055',
      accentCyan: '#00f0ff',
      accentGreen: '#00f5d4',
      accentAmber: '#fee440',
      glowShadow: 'rgba(0, 240, 255, 0.45)',
      swatches: ['#03071e', '#00f0ff', '#ff0055', '#98c1d9']
    }
  },
  {
    id: 'laser-grid-80s',
    name: 'เลเซอร์กริด 80s',
    nameEn: 'Laser Grid 80s',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#0b0014',
      bgSecondary: '#1e0038',
      bgCard: '#160029',
      borderOuter: '#ff0055',
      borderInner: '#700030',
      textMain: '#fff0f5',
      textMuted: '#ff6699',
      accentPink: '#ff0055',
      accentCyan: '#00ffff',
      accentGreen: '#00ff66',
      accentAmber: '#ffaa00',
      glowShadow: 'rgba(255, 0, 85, 0.45)',
      swatches: ['#0b0014', '#ff0055', '#00ffff', '#ff6699']
    }
  },
  {
    id: 'akari-cyberpunk',
    name: 'อาคาริ ไซเบอร์',
    nameEn: 'Akari Scarlet Cyber',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#100307',
      bgSecondary: '#240810',
      bgCard: '#1c060c',
      borderOuter: '#dc2626',
      borderInner: '#7f1d1d',
      textMain: '#fef2f2',
      textMuted: '#fca5a5',
      accentPink: '#ef4444',
      accentCyan: '#f97316',
      accentGreen: '#22c55e',
      accentAmber: '#eab308',
      glowShadow: 'rgba(220, 38, 38, 0.4)',
      swatches: ['#100307', '#dc2626', '#ef4444', '#f97316']
    }
  },
  {
    id: 'electric-samurai',
    name: 'อิเล็กทริก ซามูไร',
    nameEn: 'Electric Samurai',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#080c18',
      bgSecondary: '#121b33',
      bgCard: '#0d1529',
      borderOuter: '#3b82f6',
      borderInner: '#1e3a8a',
      textMain: '#eff6ff',
      textMuted: '#93c5fd',
      accentPink: '#ec4899',
      accentCyan: '#60a5fa',
      accentGreen: '#34d399',
      accentAmber: '#fbbf24',
      glowShadow: 'rgba(59, 130, 246, 0.4)',
      swatches: ['#080c18', '#3b82f6', '#ec4899', '#60a5fa']
    }
  },
  {
    id: 'neon-glitch',
    name: 'นีออน กลิตช์',
    nameEn: 'Neon Glitch Artifact',
    category: 'cyberpunk',
    mode: 'dark',
    colors: {
      bgPrimary: '#000000',
      bgSecondary: '#121212',
      bgCard: '#080808',
      borderOuter: '#ff003c',
      borderInner: '#00e5ff',
      textMain: '#ffffff',
      textMuted: '#aaaaaa',
      accentPink: '#ff003c',
      accentCyan: '#00e5ff',
      accentGreen: '#00ff66',
      accentAmber: '#ffe600',
      glowShadow: 'rgba(255, 0, 60, 0.4)',
      swatches: ['#000000', '#ff003c', '#00e5ff', '#ffffff']
    }
  },

  // ==========================================
  // 2. RETRO CONSOLES & VINTAGE OS (19-36)
  // ==========================================
  {
    id: 'gameboy-dmg',
    name: 'เกมบอย คลาสสิก (DMG-01)',
    nameEn: 'Game Boy DMG-01 Classic',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#0f380f',
      bgSecondary: '#1a4f1a',
      bgCard: '#154415',
      borderOuter: '#8bac0f',
      borderInner: '#306230',
      textMain: '#9bbc0f',
      textMuted: '#8bac0f',
      accentPink: '#9bbc0f',
      accentCyan: '#8bac0f',
      accentGreen: '#9bbc0f',
      accentAmber: '#9bbc0f',
      glowShadow: 'rgba(155, 188, 15, 0.3)',
      swatches: ['#0f380f', '#306230', '#8bac0f', '#9bbc0f']
    }
  },
  {
    id: 'gameboy-pocket',
    name: 'เกมบอย พ็อกเก็ต ซิลเวอร์',
    nameEn: 'Game Boy Pocket Silver',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#1a1a1a',
      bgSecondary: '#2d2d2d',
      bgCard: '#242424',
      borderOuter: '#8a8a8a',
      borderInner: '#4a4a4a',
      textMain: '#e6e6e6',
      textMuted: '#aaaaaa',
      accentPink: '#cccccc',
      accentCyan: '#ffffff',
      accentGreen: '#ffffff',
      accentAmber: '#d4d4d4',
      glowShadow: 'rgba(200, 200, 200, 0.25)',
      swatches: ['#1a1a1a', '#4a4a4a', '#8a8a8a', '#e6e6e6']
    }
  },
  {
    id: 'gameboy-color-berry',
    name: 'เกมบอย คัลเลอร์ เบอร์รี',
    nameEn: 'Game Boy Color Berry',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#1a0515',
      bgSecondary: '#36092b',
      bgCard: '#280720',
      borderOuter: '#d91b7e',
      borderInner: '#780a43',
      textMain: '#fde7f3',
      textMuted: '#f472b6',
      accentPink: '#d91b7e',
      accentCyan: '#38bdf8',
      accentGreen: '#34d399',
      accentAmber: '#fbbf24',
      glowShadow: 'rgba(217, 27, 126, 0.4)',
      swatches: ['#1a0515', '#d91b7e', '#f472b6', '#38bdf8']
    }
  },
  {
    id: 'nes-famicom',
    name: 'แฟมิคอม NES 8-บิต',
    nameEn: 'Nintendo Famicom 8-Bit',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#1a0505',
      bgSecondary: '#360b0b',
      bgCard: '#280808',
      borderOuter: '#b91c1c',
      borderInner: '#d97706',
      textMain: '#fef2f2',
      textMuted: '#fde047',
      accentPink: '#dc2626',
      accentCyan: '#d97706',
      accentGreen: '#16a34a',
      accentAmber: '#eab308',
      glowShadow: 'rgba(185, 28, 28, 0.45)',
      swatches: ['#1a0505', '#b91c1c', '#d97706', '#fde047']
    }
  },
  {
    id: 'snes-16bit',
    name: 'ซูเปอร์แฟมิคอม SNES',
    nameEn: 'Super Nintendo 16-Bit',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#121217',
      bgSecondary: '#24242e',
      bgCard: '#1b1b24',
      borderOuter: '#8b5cf6',
      borderInner: '#6d28d9',
      textMain: '#ede9fe',
      textMuted: '#c4b5fd',
      accentPink: '#a855f7',
      accentCyan: '#818cf8',
      accentGreen: '#34d399',
      accentAmber: '#f59e0b',
      glowShadow: 'rgba(139, 92, 246, 0.4)',
      swatches: ['#121217', '#8b5cf6', '#a855f7', '#ede9fe']
    }
  },
  {
    id: 'sega-genesis',
    name: 'เซก้า เมกาไดรฟ์',
    nameEn: 'Sega Mega Drive Genesis',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#050505',
      bgSecondary: '#141414',
      bgCard: '#0d0d0d',
      borderOuter: '#2563eb',
      borderInner: '#1e40af',
      textMain: '#ffffff',
      textMuted: '#93c5fd',
      accentPink: '#ef4444',
      accentCyan: '#3b82f6',
      accentGreen: '#22c55e',
      accentAmber: '#eab308',
      glowShadow: 'rgba(37, 99, 235, 0.4)',
      swatches: ['#050505', '#2563eb', '#ef4444', '#ffffff']
    }
  },
  {
    id: 'commodore-64',
    name: 'คอมโมดอร์ 64',
    nameEn: 'Commodore 64 Classic',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#201c38',
      bgSecondary: '#3b3562',
      bgCard: '#2c274b',
      borderOuter: '#7b73b5',
      borderInner: '#50497e',
      textMain: '#a49ce3',
      textMuted: '#8279bc',
      accentPink: '#d16e9f',
      accentCyan: '#7b73b5',
      accentGreen: '#6abf69',
      accentAmber: '#e0aa3e',
      glowShadow: 'rgba(123, 115, 181, 0.4)',
      swatches: ['#201c38', '#50497e', '#7b73b5', '#a49ce3']
    }
  },
  {
    id: 'amiga-workbench',
    name: 'อมิก้า เวิร์กเบนช์ 1.3',
    nameEn: 'Amiga Workbench 1.3',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#001a40',
      bgSecondary: '#002f6c',
      bgCard: '#002454',
      borderOuter: '#ff8800',
      borderInner: '#0055bb',
      textMain: '#ffffff',
      textMuted: '#99ccff',
      accentPink: '#ff8800',
      accentCyan: '#00aaff',
      accentGreen: '#00ff88',
      accentAmber: '#ffaa00',
      glowShadow: 'rgba(255, 136, 0, 0.4)',
      swatches: ['#001a40', '#ff8800', '#00aaff', '#ffffff']
    }
  },
  {
    id: 'macintosh-system7',
    name: 'แมคอินทอช ซิสเต็ม 7',
    nameEn: 'Macintosh System 7',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#1a1c20',
      bgSecondary: '#282b30',
      bgCard: '#202328',
      borderOuter: '#6c757d',
      borderInner: '#495057',
      textMain: '#e9ecef',
      textMuted: '#adb5bd',
      accentPink: '#adb5bd',
      accentCyan: '#ced4da',
      accentGreen: '#ced4da',
      accentAmber: '#dee2e6',
      glowShadow: 'rgba(108, 117, 125, 0.3)',
      swatches: ['#1a1c20', '#495057', '#6c757d', '#e9ecef']
    }
  },
  {
    id: 'windows-95-teal',
    name: 'วินโดวส์ 95 คลาสสิก',
    nameEn: 'Windows 95 Classic Teal',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#004e4e',
      bgSecondary: '#006666',
      bgCard: '#005555',
      borderOuter: '#000080',
      borderInner: '#c0c0c0',
      textMain: '#ffffff',
      textMuted: '#c0c0c0',
      accentPink: '#000080',
      accentCyan: '#008080',
      accentGreen: '#00ff00',
      accentAmber: '#ffff00',
      glowShadow: 'rgba(0, 0, 128, 0.4)',
      swatches: ['#004e4e', '#000080', '#c0c0c0', '#ffffff']
    }
  },
  {
    id: 'win31-hotdog',
    name: 'วินโดวส์ 3.1 ฮอตด็อก',
    nameEn: 'Windows 3.1 Hotdog Stand',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#000000',
      bgSecondary: '#200000',
      bgCard: '#150000',
      borderOuter: '#ff0000',
      borderInner: '#ffff00',
      textMain: '#ffff00',
      textMuted: '#ff6600',
      accentPink: '#ff0000',
      accentCyan: '#ffff00',
      accentGreen: '#00ff00',
      accentAmber: '#ffaa00',
      glowShadow: 'rgba(255, 0, 0, 0.5)',
      swatches: ['#000000', '#ff0000', '#ffff00', '#ff6600']
    }
  },
  {
    id: 'atari-2600-wood',
    name: 'อาตาริ 2600 เรโทร',
    nameEn: 'Atari 2600 Woodgrain',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#140c06',
      bgSecondary: '#29180c',
      bgCard: '#1e1209',
      borderOuter: '#b45309',
      borderInner: '#78350f',
      textMain: '#ffedd5',
      textMuted: '#fdba74',
      accentPink: '#ea580c',
      accentCyan: '#f59e0b',
      accentGreen: '#84cc16',
      accentAmber: '#d97706',
      glowShadow: 'rgba(180, 83, 9, 0.4)',
      swatches: ['#140c06', '#78350f', '#b45309', '#ea580c']
    }
  },
  {
    id: 'zx-spectrum',
    name: 'แซดเอกซ์ สเปกตรัม',
    nameEn: 'Sinclair ZX Spectrum',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#000000',
      bgSecondary: '#111111',
      bgCard: '#080808',
      borderOuter: '#e11d48',
      borderInner: '#0284c7',
      textMain: '#ffffff',
      textMuted: '#facc15',
      accentPink: '#e11d48',
      accentCyan: '#0284c7',
      accentGreen: '#16a34a',
      accentAmber: '#eab308',
      glowShadow: 'rgba(225, 29, 72, 0.4)',
      swatches: ['#000000', '#e11d48', '#0284c7', '#facc15']
    }
  },
  {
    id: 'msdos-amber',
    name: 'เอ็มเอส-ดอส อำพัน (Amber CRT)',
    nameEn: 'MS-DOS Amber Phosphor',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#080500',
      bgSecondary: '#1a0e00',
      bgCard: '#120a00',
      borderOuter: '#ff9900',
      borderInner: '#995c00',
      textMain: '#ffb336',
      textMuted: '#cc7a00',
      accentPink: '#ff9900',
      accentCyan: '#ffb336',
      accentGreen: '#ffaa00',
      accentAmber: '#ff8000',
      glowShadow: 'rgba(255, 153, 0, 0.45)',
      swatches: ['#080500', '#995c00', '#ff9900', '#ffb336']
    }
  },
  {
    id: 'apple-ii-green',
    name: 'แอปเปิ้ล ทู ฟอสฟอร์เขียว',
    nameEn: 'Apple II Green CRT',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#000a02',
      bgSecondary: '#001a05',
      bgCard: '#001203',
      borderOuter: '#22c55e',
      borderInner: '#15803d',
      textMain: '#4ade80',
      textMuted: '#22c55e',
      accentPink: '#4ade80',
      accentCyan: '#22c55e',
      accentGreen: '#4ade80',
      accentAmber: '#86efac',
      glowShadow: 'rgba(34, 197, 94, 0.45)',
      swatches: ['#000a02', '#15803d', '#22c55e', '#4ade80']
    }
  },
  {
    id: 'virtual-boy-red',
    name: 'เวอร์ชวล บอย เรด',
    nameEn: 'Nintendo Virtual Boy Red',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#050000',
      bgSecondary: '#1a0000',
      bgCard: '#100000',
      borderOuter: '#ff0000',
      borderInner: '#800000',
      textMain: '#ff3333',
      textMuted: '#cc0000',
      accentPink: '#ff0000',
      accentCyan: '#ff4d4d',
      accentGreen: '#ff6666',
      accentAmber: '#ff1a1a',
      glowShadow: 'rgba(255, 0, 0, 0.5)',
      swatches: ['#050000', '#800000', '#ff0000', '#ff3333']
    }
  },
  {
    id: 'neo-geo-mvs',
    name: 'นีโอ จีโอ เอ็มวีเอส',
    nameEn: 'SNK Neo Geo MVS Arcade',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#0a0a0a',
      bgSecondary: '#202020',
      bgCard: '#141414',
      borderOuter: '#dc2626',
      borderInner: '#eab308',
      textMain: '#f5f5f5',
      textMuted: '#eab308',
      accentPink: '#dc2626',
      accentCyan: '#2563eb',
      accentGreen: '#16a34a',
      accentAmber: '#eab308',
      glowShadow: 'rgba(220, 38, 38, 0.4)',
      swatches: ['#0a0a0a', '#dc2626', '#eab308', '#2563eb']
    }
  },
  {
    id: 'ps1-bios',
    name: 'เพลย์สเตชัน 1 ไบออส',
    nameEn: 'PlayStation 1 Bios',
    category: 'retro_console',
    mode: 'dark',
    colors: {
      bgPrimary: '#040410',
      bgSecondary: '#0c0c28',
      bgCard: '#08081c',
      borderOuter: '#4f46e5',
      borderInner: '#312e81',
      textMain: '#e0e7ff',
      textMuted: '#a5b4fc',
      accentPink: '#f59e0b',
      accentCyan: '#6366f1',
      accentGreen: '#10b981',
      accentAmber: '#f59e0b',
      glowShadow: 'rgba(79, 70, 229, 0.4)',
      swatches: ['#040410', '#4f46e5', '#f59e0b', '#a5b4fc']
    }
  },

  // ==========================================
  // 3. ELECTRICAL & LAB INSTRUMENTS (37-52)
  // ==========================================
  {
    id: 'high-voltage-arc',
    name: 'อาร์กไฟฟ้าแรงสูง (High Voltage)',
    nameEn: 'High Voltage Plasma Arc',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#050312',
      bgSecondary: '#0e082b',
      bgCard: '#09051e',
      borderOuter: '#818cf8',
      borderInner: '#4338ca',
      textMain: '#e0e7ff',
      textMuted: '#a5b4fc',
      accentPink: '#c084fc',
      accentCyan: '#38bdf8',
      accentGreen: '#34d399',
      accentAmber: '#fbbf24',
      glowShadow: 'rgba(129, 140, 248, 0.45)',
      swatches: ['#050312', '#4338ca', '#818cf8', '#38bdf8']
    }
  },
  {
    id: 'oscilloscope-phosphor',
    name: 'ออสซิลโลสโคป ฟอสฟอร์กรีน',
    nameEn: 'CRT Oscilloscope Phosphor',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#020f06',
      bgSecondary: '#06260f',
      bgCard: '#041c0b',
      borderOuter: '#10b981',
      borderInner: '#047857',
      textMain: '#ecfdf5',
      textMuted: '#6ee7b7',
      accentPink: '#059669',
      accentCyan: '#34d399',
      accentGreen: '#10b981',
      accentAmber: '#f59e0b',
      glowShadow: 'rgba(16, 185, 129, 0.45)',
      swatches: ['#020f06', '#047857', '#10b981', '#6ee7b7']
    }
  },
  {
    id: 'pcb-green',
    name: 'แผ่นวงจรพิมพ์ PCB เขียว',
    nameEn: 'FR4 PCB Solder Mask Green',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#061a0c',
      bgSecondary: '#0f3319',
      bgCard: '#0b2612',
      borderOuter: '#d97706',
      borderInner: '#15803d',
      textMain: '#fef3c7',
      textMuted: '#fde68a',
      accentPink: '#d97706',
      accentCyan: '#4ade80',
      accentGreen: '#22c55e',
      accentAmber: '#d97706',
      glowShadow: 'rgba(217, 119, 6, 0.35)',
      swatches: ['#061a0c', '#15803d', '#d97706', '#fde68a']
    }
  },
  {
    id: 'pcb-matte-black',
    name: 'แผ่นวงจร PCB ดำทอง ENIG',
    nameEn: 'Matte Black PCB & Gold',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#080808',
      bgSecondary: '#1a1a1a',
      bgCard: '#101010',
      borderOuter: '#eab308',
      borderInner: '#854d0e',
      textMain: '#fefce8',
      textMuted: '#fef08a',
      accentPink: '#ca8a04',
      accentCyan: '#eab308',
      accentGreen: '#22c55e',
      accentAmber: '#eab308',
      glowShadow: 'rgba(234, 179, 8, 0.4)',
      swatches: ['#080808', '#854d0e', '#eab308', '#fefce8']
    }
  },
  {
    id: 'pcb-blue',
    name: 'แผ่นวงจรพิมพ์ PCB น้ำเงิน',
    nameEn: 'Industrial Blue PCB Mask',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#031024',
      bgSecondary: '#082048',
      bgCard: '#051836',
      borderOuter: '#0284c7',
      borderInner: '#0369a1',
      textMain: '#f0f9ff',
      textMuted: '#bae6fd',
      accentPink: '#38bdf8',
      accentCyan: '#0284c7',
      accentGreen: '#34d399',
      accentAmber: '#fbbf24',
      glowShadow: 'rgba(2, 132, 199, 0.4)',
      swatches: ['#031024', '#0369a1', '#0284c7', '#bae6fd']
    }
  },
  {
    id: 'vacuum-tube-amber',
    name: 'หลอดสุญญากาศ ทังสเตน',
    nameEn: 'Vacuum Tube Tungsten Glow',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#140a04',
      bgSecondary: '#291408',
      bgCard: '#1e0e06',
      borderOuter: '#ea580c',
      borderInner: '#9a3412',
      textMain: '#fff7ed',
      textMuted: '#ffedd5',
      accentPink: '#f97316',
      accentCyan: '#fbbf24',
      accentGreen: '#84cc16',
      accentAmber: '#ea580c',
      glowShadow: 'rgba(234, 88, 12, 0.45)',
      swatches: ['#140a04', '#9a3412', '#ea580c', '#fbbf24']
    }
  },
  {
    id: 'neon-indicator',
    name: 'หลอดไฟสัญญาณ นีออน ส้ม',
    nameEn: 'Neon Glow Indicator Lamp',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#120502',
      bgSecondary: '#2b0c05',
      bgCard: '#1e0803',
      borderOuter: '#f97316',
      borderInner: '#c2410c',
      textMain: '#ffedd5',
      textMuted: '#fdba74',
      accentPink: '#ff5400',
      accentCyan: '#ff9e00',
      accentGreen: '#22c55e',
      accentAmber: '#f97316',
      glowShadow: 'rgba(249, 115, 22, 0.5)',
      swatches: ['#120502', '#c2410c', '#f97316', '#ffedd5']
    }
  },
  {
    id: 'silicon-wafer',
    name: 'เวเฟอร์ซิลิคอน คลีนรูม',
    nameEn: 'Silicon Wafer Semiconductor',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#050c18',
      bgSecondary: '#0d1d36',
      bgCard: '#091528',
      borderOuter: '#38bdf8',
      borderInner: '#a855f7',
      textMain: '#f8fafc',
      textMuted: '#cbd5e1',
      accentPink: '#c084fc',
      accentCyan: '#38bdf8',
      accentGreen: '#2dd4bf',
      accentAmber: '#facc15',
      glowShadow: 'rgba(56, 189, 248, 0.35)',
      swatches: ['#050c18', '#38bdf8', '#c084fc', '#f8fafc']
    }
  },
  {
    id: 'copper-coil',
    name: 'ขดลวดทองแดง อินดัคเตอร์',
    nameEn: 'Copper Induction Coil',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#120803',
      bgSecondary: '#261106',
      bgCard: '#1c0c04',
      borderOuter: '#b45309',
      borderInner: '#78350f',
      textMain: '#fef3c7',
      textMuted: '#fde68a',
      accentPink: '#d97706',
      accentCyan: '#f59e0b',
      accentGreen: '#84cc16',
      accentAmber: '#b45309',
      glowShadow: 'rgba(180, 83, 9, 0.4)',
      swatches: ['#120803', '#78350f', '#b45309', '#fef3c7']
    }
  },
  {
    id: 'three-phase-power',
    name: 'ระบบไฟฟ้า 3 เฟส (R-S-T)',
    nameEn: 'Three-Phase Industrial Power',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#0a0d14',
      bgSecondary: '#161c2b',
      bgCard: '#101521',
      borderOuter: '#ef4444',
      borderInner: '#3b82f6',
      textMain: '#f8fafc',
      textMuted: '#fde047',
      accentPink: '#ef4444',
      accentCyan: '#3b82f6',
      accentGreen: '#22c55e',
      accentAmber: '#eab308',
      glowShadow: 'rgba(239, 68, 68, 0.4)',
      swatches: ['#0a0d14', '#ef4444', '#eab308', '#3b82f6']
    }
  },
  {
    id: 'tesla-discharge',
    name: 'เทสลาคอยล์ ดิสชาร์จ',
    nameEn: 'Tesla Coil Arc Discharge',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#080114',
      bgSecondary: '#170433',
      bgCard: '#100224',
      borderOuter: '#a855f7',
      borderInner: '#6b21a8',
      textMain: '#faf5ff',
      textMuted: '#d8b4fe',
      accentPink: '#c084fc',
      accentCyan: '#67e8f9',
      accentGreen: '#34d399',
      accentAmber: '#fcd34d',
      glowShadow: 'rgba(168, 85, 247, 0.45)',
      swatches: ['#080114', '#6b21a8', '#a855f7', '#67e8f9']
    }
  },
  {
    id: 'fluke-multimeter',
    name: 'มัลติมิเตอร์ ฟลุค เหลือง-เทา',
    nameEn: 'Fluke Multimeter Industrial',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#141416',
      bgSecondary: '#242428',
      bgCard: '#1c1c20',
      borderOuter: '#eab308',
      borderInner: '#52525b',
      textMain: '#ffffff',
      textMuted: '#fde047',
      accentPink: '#ef4444',
      accentCyan: '#eab308',
      accentGreen: '#22c55e',
      accentAmber: '#ca8a04',
      glowShadow: 'rgba(234, 179, 8, 0.4)',
      swatches: ['#141416', '#52525b', '#eab308', '#ef4444']
    }
  },
  {
    id: 'solar-photovoltaic',
    name: 'โซลาร์เซลล์ พลังงานแสงอาทิตย์',
    nameEn: 'Solar Photovoltaic Grid',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#04101e',
      bgSecondary: '#0a223e',
      bgCard: '#07182c',
      borderOuter: '#0ea5e9',
      borderInner: '#eab308',
      textMain: '#f0f9ff',
      textMuted: '#fde047',
      accentPink: '#f59e0b',
      accentCyan: '#0ea5e9',
      accentGreen: '#10b981',
      accentAmber: '#d97706',
      glowShadow: 'rgba(14, 165, 233, 0.4)',
      swatches: ['#04101e', '#0ea5e9', '#eab308', '#f0f9ff']
    }
  },
  {
    id: 'scada-telemetry',
    name: 'ระบบสกาด้า SCADA มอนิเตอร์',
    nameEn: 'SCADA Telemetry Industrial',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#020d14',
      bgSecondary: '#081f2e',
      bgCard: '#051621',
      borderOuter: '#06b6d4',
      borderInner: '#0e7490',
      textMain: '#ecfeff',
      textMuted: '#a5f3fc',
      accentPink: '#06b6d4',
      accentCyan: '#22d3ee',
      accentGreen: '#10b981',
      accentAmber: '#f59e0b',
      glowShadow: 'rgba(6, 182, 212, 0.4)',
      swatches: ['#020d14', '#0e7490', '#06b6d4', '#ecfeff']
    }
  },
  {
    id: 'vfd-inverter',
    name: 'อินเวอร์เตอร์ขับมอเตอร์ VFD',
    nameEn: 'VFD Inverter Drive Control',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#090d14',
      bgSecondary: '#131b28',
      bgCard: '#0d131e',
      borderOuter: '#3b82f6',
      borderInner: '#1e3a8a',
      textMain: '#f8fafc',
      textMuted: '#94a3b8',
      accentPink: '#60a5fa',
      accentCyan: '#38bdf8',
      accentGreen: '#22c55e',
      accentAmber: '#f59e0b',
      glowShadow: 'rgba(59, 130, 246, 0.35)',
      swatches: ['#090d14', '#1e3a8a', '#3b82f6', '#38bdf8']
    }
  },
  {
    id: 'fiber-optic-laser',
    name: 'ไฟเบอร์ออปติก เลเซอร์',
    nameEn: 'Fiber Optic Infrared',
    category: 'engineering',
    mode: 'dark',
    colors: {
      bgPrimary: '#0a0006',
      bgSecondary: '#1f0012',
      bgCard: '#15000c',
      borderOuter: '#f43f5e',
      borderInner: '#881337',
      textMain: '#fff1f2',
      textMuted: '#fecdd3',
      accentPink: '#f43f5e',
      accentCyan: '#fb7185',
      accentGreen: '#34d399',
      accentAmber: '#f59e0b',
      glowShadow: 'rgba(244, 63, 94, 0.45)',
      swatches: ['#0a0006', '#881337', '#f43f5e', '#fff1f2']
    }
  },

  // ==========================================
  // 4. CODE EDITORS & TERMINAL MATRIX (53-70)
  // ==========================================
  {
    id: 'matrix-rain',
    name: 'เดอะ เมทริกซ์ (Matrix Green)',
    nameEn: 'The Matrix Digital Rain',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#000000',
      bgSecondary: '#001404',
      bgCard: '#000a02',
      borderOuter: '#00ff41',
      borderInner: '#003b00',
      textMain: '#00ff41',
      textMuted: '#008f11',
      accentPink: '#00ff41',
      accentCyan: '#00ff41',
      accentGreen: '#00ff41',
      accentAmber: '#66ff66',
      glowShadow: 'rgba(0, 255, 65, 0.5)',
      swatches: ['#000000', '#003b00', '#008f11', '#00ff41']
    }
  },
  {
    id: 'dracula-pro',
    name: 'แดร็กคูลา (Dracula Official)',
    nameEn: 'Dracula Theme Pro',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#282a36',
      bgSecondary: '#383a59',
      bgCard: '#2d3042',
      borderOuter: '#bd93f9',
      borderInner: '#6272a4',
      textMain: '#f8f8f2',
      textMuted: '#6272a4',
      accentPink: '#ff79c6',
      accentCyan: '#8be9fd',
      accentGreen: '#50fa7b',
      accentAmber: '#f1fa8c',
      glowShadow: 'rgba(189, 147, 249, 0.4)',
      swatches: ['#282a36', '#bd93f9', '#ff79c6', '#8be9fd']
    }
  },
  {
    id: 'monokai-pro',
    name: 'โมโนไค โปร (Monokai Pro)',
    nameEn: 'Monokai Pro Dark',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#2d2a2e',
      bgSecondary: '#403e41',
      bgCard: '#363337',
      borderOuter: '#ffd866',
      borderInner: '#727072',
      textMain: '#fcfcfa',
      textMuted: '#939293',
      accentPink: '#ff6188',
      accentCyan: '#78dce8',
      accentGreen: '#a9dc76',
      accentAmber: '#fc9867',
      glowShadow: 'rgba(255, 216, 102, 0.4)',
      swatches: ['#2d2a2e', '#ff6188', '#ffd866', '#78dce8']
    }
  },
  {
    id: 'nord-frost',
    name: 'นอร์ด ฟรอสต์ (Nord Arctic)',
    nameEn: 'Nord Arctic Frost',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#2e3440',
      bgSecondary: '#3b4252',
      bgCard: '#353c4a',
      borderOuter: '#88c0d0',
      borderInner: '#4c566a',
      textMain: '#eceff4',
      textMuted: '#d8dee9',
      accentPink: '#bf616a',
      accentCyan: '#88c0d0',
      accentGreen: '#a3be8c',
      accentAmber: '#ebcb8b',
      glowShadow: 'rgba(136, 192, 208, 0.35)',
      swatches: ['#2e3440', '#4c566a', '#88c0d0', '#eceff4']
    }
  },
  {
    id: 'gruvbox-retro-dark',
    name: 'กรัฟบ็อกซ์ เรโทร ดาร์ก',
    nameEn: 'Gruvbox Retro Dark',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#1d2021',
      bgSecondary: '#282828',
      bgCard: '#242424',
      borderOuter: '#fe8019',
      borderInner: '#504945',
      textMain: '#fbf1c7',
      textMuted: '#d5c4a1',
      accentPink: '#fb4934',
      accentCyan: '#83a598',
      accentGreen: '#b8bb26',
      accentAmber: '#fabd2f',
      glowShadow: 'rgba(254, 128, 25, 0.35)',
      swatches: ['#1d2021', '#504945', '#fe8019', '#b8bb26']
    }
  },
  {
    id: 'catppuccin-mocha',
    name: 'แคตปุชชิน มอคค่า',
    nameEn: 'Catppuccin Mocha',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#181825',
      bgSecondary: '#313244',
      bgCard: '#1e1e2e',
      borderOuter: '#cba6f7',
      borderInner: '#45475a',
      textMain: '#cdd6f4',
      textMuted: '#a6adc8',
      accentPink: '#f5c2e7',
      accentCyan: '#89dceb',
      accentGreen: '#a6e3a1',
      accentAmber: '#f9e2af',
      glowShadow: 'rgba(203, 166, 247, 0.35)',
      swatches: ['#181825', '#1e1e2e', '#cba6f7', '#f5c2e7']
    }
  },
  {
    id: 'tokyo-night-storm',
    name: 'โตเกียว ไนท์ สตอร์ม',
    nameEn: 'Tokyo Night Storm',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#1a1b26',
      bgSecondary: '#24283b',
      bgCard: '#1f2335',
      borderOuter: '#7aa2f7',
      borderInner: '#3b4261',
      textMain: '#c0caf5',
      textMuted: '#9aa5ce',
      accentPink: '#bb9af7',
      accentCyan: '#7dcfff',
      accentGreen: '#9ece6a',
      accentAmber: '#e0af68',
      glowShadow: 'rgba(122, 162, 247, 0.35)',
      swatches: ['#1a1b26', '#3b4261', '#7aa2f7', '#bb9af7']
    }
  },
  {
    id: 'one-dark-pro',
    name: 'วันดาร์ก โปร (Atom)',
    nameEn: 'One Dark Pro Classic',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#1e1e1e',
      bgSecondary: '#282c34',
      bgCard: '#21252b',
      borderOuter: '#61afef',
      borderInner: '#3e4451',
      textMain: '#abb2bf',
      textMuted: '#5c6370',
      accentPink: '#e06c75',
      accentCyan: '#56b6c2',
      accentGreen: '#98c379',
      accentAmber: '#e5c07b',
      glowShadow: 'rgba(97, 175, 239, 0.35)',
      swatches: ['#1e1e1e', '#282c34', '#61afef', '#e06c75']
    }
  },
  {
    id: 'solarized-dark',
    name: 'โซลาร์ไรซ์ ดาร์ก',
    nameEn: 'Solarized Dark Official',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#002b36',
      bgSecondary: '#073642',
      bgCard: '#05313d',
      borderOuter: '#2aa198',
      borderInner: '#586e75',
      textMain: '#93a1a1',
      textMuted: '#657b83',
      accentPink: '#d33682',
      accentCyan: '#268bd2',
      accentGreen: '#859900',
      accentAmber: '#b58900',
      glowShadow: 'rgba(42, 161, 152, 0.35)',
      swatches: ['#002b36', '#073642', '#2aa198', '#d33682']
    }
  },
  {
    id: 'synthwave-84',
    name: 'ซินธ์เวฟ 84 เรโทรเรเดียนต์',
    nameEn: 'SynthWave 84 Radiant',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#262335',
      bgSecondary: '#342e47',
      bgCard: '#2c273e',
      borderOuter: '#ff7edb',
      borderInner: '#36f9f6',
      textMain: '#f92aad',
      textMuted: '#fe4450',
      accentPink: '#ff7edb',
      accentCyan: '#36f9f6',
      accentGreen: '#72f1b8',
      accentAmber: '#fede5d',
      glowShadow: 'rgba(255, 126, 219, 0.45)',
      swatches: ['#262335', '#ff7edb', '#36f9f6', '#fede5d']
    }
  },
  {
    id: 'kanagawa-wave',
    name: 'คานางาวะ คลื่นซามูไร',
    nameEn: 'Kanagawa Wave Japanese',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#1f1f28',
      bgSecondary: '#2a2a37',
      bgCard: '#252530',
      borderOuter: '#7e9cd8',
      borderInner: '#363646',
      textMain: '#dcd7ba',
      textMuted: '#957fb8',
      accentPink: '#e46876',
      accentCyan: '#7fb4ca',
      accentGreen: '#98bb6c',
      accentAmber: '#e6c384',
      glowShadow: 'rgba(126, 156, 216, 0.35)',
      swatches: ['#1f1f28', '#363646', '#7e9cd8', '#e46876']
    }
  },
  {
    id: 'material-oceanic',
    name: 'แมททีเรียล โอเชียนิค',
    nameEn: 'Material Oceanic Deep',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#1b2b34',
      bgSecondary: '#263b45',
      bgCard: '#20323c',
      borderOuter: '#5fb3b3',
      borderInner: '#344e5b',
      textMain: '#d8dee9',
      textMuted: '#65737e',
      accentPink: '#ec5f67',
      accentCyan: '#6699cc',
      accentGreen: '#99c794',
      accentAmber: '#fac863',
      glowShadow: 'rgba(95, 179, 179, 0.35)',
      swatches: ['#1b2b34', '#344e5b', '#5fb3b3', '#6699cc']
    }
  },
  {
    id: 'night-owl',
    name: 'ไนท์ อาวล์ (Night Owl)',
    nameEn: 'Night Owl by Sarah Drasner',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#011627',
      bgSecondary: '#0b2942',
      bgCard: '#062035',
      borderOuter: '#82aaff',
      borderInner: '#1d3b53',
      textMain: '#d6deeb',
      textMuted: '#5f7e97',
      accentPink: '#ff5874',
      accentCyan: '#7fdbca',
      accentGreen: '#addb67',
      accentAmber: '#ecc48d',
      glowShadow: 'rgba(130, 170, 255, 0.35)',
      swatches: ['#011627', '#1d3b53', '#82aaff', '#7fdbca']
    }
  },
  {
    id: 'cobalt2-wesbos',
    name: 'โคบอลต์ทู (Cobalt2)',
    nameEn: 'Cobalt2 by Wes Bos',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#193549',
      bgSecondary: '#1f4662',
      bgCard: '#1b3d56',
      borderOuter: '#ffc600',
      borderInner: '#0d3a58',
      textMain: '#ffffff',
      textMuted: '#0088ff',
      accentPink: '#ff9d00',
      accentCyan: '#0088ff',
      accentGreen: '#3ad900',
      accentAmber: '#ffc600',
      glowShadow: 'rgba(255, 198, 0, 0.4)',
      swatches: ['#193549', '#0d3a58', '#ffc600', '#0088ff']
    }
  },
  {
    id: 'ayu-mirage',
    name: 'อายู มิราจ (Ayu Mirage)',
    nameEn: 'Ayu Mirage Twilight',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#1f2430',
      bgSecondary: '#292f3e',
      bgCard: '#242936',
      borderOuter: '#ffcc66',
      borderInner: '#3b4252',
      textMain: '#cbccc6',
      textMuted: '#707a8c',
      accentPink: '#f28779',
      accentCyan: '#73d0ff',
      accentGreen: '#bae67e',
      accentAmber: '#ffd580',
      glowShadow: 'rgba(255, 204, 102, 0.35)',
      swatches: ['#1f2430', '#3b4252', '#ffcc66', '#73d0ff']
    }
  },
  {
    id: 'cyberpunk-2077-v',
    name: 'ไซเบอร์พังก์ วี เอดิชัน',
    nameEn: 'Cyberpunk 2077 Yellow V',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#0d0d0d',
      bgSecondary: '#1f1d07',
      bgCard: '#161405',
      borderOuter: '#fcee09',
      borderInner: '#716900',
      textMain: '#ffffff',
      textMuted: '#fcee09',
      accentPink: '#ff003c',
      accentCyan: '#00f0ff',
      accentGreen: '#39ff14',
      accentAmber: '#fcee09',
      glowShadow: 'rgba(252, 238, 9, 0.5)',
      swatches: ['#0d0d0d', '#fcee09', '#ff003c', '#00f0ff']
    }
  },
  {
    id: 'palenight-material',
    name: 'เพลไนท์ แมททีเรียล',
    nameEn: 'Material Palenight',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#292d3e',
      bgSecondary: '#343a4e',
      bgCard: '#2f3446',
      borderOuter: '#c792ea',
      borderInner: '#434965',
      textMain: '#d0d0d0',
      textMuted: '#676e95',
      accentPink: '#f07178',
      accentCyan: '#89ddff',
      accentGreen: '#c3e88d',
      accentAmber: '#ffcb6b',
      glowShadow: 'rgba(199, 146, 234, 0.35)',
      swatches: ['#292d3e', '#434965', '#c792ea', '#89ddff']
    }
  },
  {
    id: 'laserwave-code',
    name: 'เลเซอร์เวฟ โค้ด',
    nameEn: 'LaserWave Clean Synth',
    category: 'code_matrix',
    mode: 'dark',
    colors: {
      bgPrimary: '#1a1824',
      bgSecondary: '#272435',
      bgCard: '#201e2c',
      borderOuter: '#74dfc4',
      borderInner: '#403b54',
      textMain: '#eb64b9',
      textMuted: '#91889b',
      accentPink: '#eb64b9',
      accentCyan: '#74dfc4',
      accentGreen: '#74dfc4',
      accentAmber: '#ffe261',
      glowShadow: 'rgba(116, 223, 196, 0.35)',
      swatches: ['#1a1824', '#403b54', '#eb64b9', '#74dfc4']
    }
  },

  // ==========================================
  // 5. AESTHETIC, ANIME & NATURE (71-86)
  // ==========================================
  {
    id: 'sakura-sunset',
    name: 'ซากุระ อัสดง',
    nameEn: 'Sakura Twilight Sunset',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#160814',
      bgSecondary: '#2e122b',
      bgCard: '#230d21',
      borderOuter: '#f472b6',
      borderInner: '#831843',
      textMain: '#fdf2f8',
      textMuted: '#fbcfe8',
      accentPink: '#f472b6',
      accentCyan: '#fb923c',
      accentGreen: '#4ade80',
      accentAmber: '#facc15',
      glowShadow: 'rgba(244, 114, 182, 0.4)',
      swatches: ['#160814', '#831843', '#f472b6', '#fb923c']
    }
  },
  {
    id: 'midnight-ocean',
    name: 'มหาสมุทร ราตรี (Deep Ocean)',
    nameEn: 'Midnight Ocean Trench',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#020b14',
      bgSecondary: '#051b30',
      bgCard: '#031424',
      borderOuter: '#0284c7',
      borderInner: '#03436a',
      textMain: '#e0f2fe',
      textMuted: '#7dd3fc',
      accentPink: '#06b6d4',
      accentCyan: '#38bdf8',
      accentGreen: '#34d399',
      accentAmber: '#fbbf24',
      glowShadow: 'rgba(2, 132, 199, 0.4)',
      swatches: ['#020b14', '#03436a', '#0284c7', '#38bdf8']
    }
  },
  {
    id: 'aurora-borealis',
    name: 'แสงเหนือ ออโรร่า',
    nameEn: 'Northern Lights Aurora',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#020d0f',
      bgSecondary: '#062024',
      bgCard: '#04171a',
      borderOuter: '#10b981',
      borderInner: '#0891b2',
      textMain: '#ecfdf5',
      textMuted: '#67e8f9',
      accentPink: '#8b5cf6',
      accentCyan: '#06b6d4',
      accentGreen: '#10b981',
      accentAmber: '#facc15',
      glowShadow: 'rgba(16, 185, 129, 0.45)',
      swatches: ['#020d0f', '#0891b2', '#10b981', '#8b5cf6']
    }
  },
  {
    id: 'crimson-blood-moon',
    name: 'จันทรุปราคา สีเลือด',
    nameEn: 'Crimson Blood Moon',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#0d0204',
      bgSecondary: '#24060b',
      bgCard: '#1a0408',
      borderOuter: '#e11d48',
      borderInner: '#881337',
      textMain: '#fff1f2',
      textMuted: '#fda4af',
      accentPink: '#f43f5e',
      accentCyan: '#e11d48',
      accentGreen: '#4ade80',
      accentAmber: '#fbbf24',
      glowShadow: 'rgba(225, 29, 72, 0.45)',
      swatches: ['#0d0204', '#881337', '#e11d48', '#fda4af']
    }
  },
  {
    id: 'emerald-forest',
    name: 'ป่าเอเมอรัลด์ ลึกลับ',
    nameEn: 'Enchanted Emerald Forest',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#021208',
      bgSecondary: '#072913',
      bgCard: '#041d0e',
      borderOuter: '#059669',
      borderInner: '#064e3b',
      textMain: '#ecfdf5',
      textMuted: '#6ee7b7',
      accentPink: '#10b981',
      accentCyan: '#34d399',
      accentGreen: '#10b981',
      accentAmber: '#fcd34d',
      glowShadow: 'rgba(5, 150, 105, 0.4)',
      swatches: ['#021208', '#064e3b', '#059669', '#34d399']
    }
  },
  {
    id: 'sahara-dune',
    name: 'ทะเลทราย ซาฮารา',
    nameEn: 'Sahara Golden Dunes',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#140c03',
      bgSecondary: '#291807',
      bgCard: '#1f1205',
      borderOuter: '#d97706',
      borderInner: '#78350f',
      textMain: '#fffbeb',
      textMuted: '#fde68a',
      accentPink: '#f59e0b',
      accentCyan: '#fbbf24',
      accentGreen: '#84cc16',
      accentAmber: '#d97706',
      glowShadow: 'rgba(217, 119, 6, 0.4)',
      swatches: ['#140c03', '#78350f', '#d97706', '#fde68a']
    }
  },
  {
    id: 'obsidian-magma',
    name: 'แมกมา ภูเขาไฟ',
    nameEn: 'Obsidian Volcanic Magma',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#0f0200',
      bgSecondary: '#260600',
      bgCard: '#1b0400',
      borderOuter: '#ea580c',
      borderInner: '#7c2d12',
      textMain: '#fff7ed',
      textMuted: '#fed7aa',
      accentPink: '#f97316',
      accentCyan: '#facc15',
      accentGreen: '#22c55e',
      accentAmber: '#ea580c',
      glowShadow: 'rgba(234, 88, 12, 0.45)',
      swatches: ['#0f0200', '#7c2d12', '#ea580c', '#facc15']
    }
  },
  {
    id: 'lavender-cloud',
    name: 'เมฆหมอก ลาเวนเดอร์',
    nameEn: 'Pastel Lavender Clouds',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#0f0a1c',
      bgSecondary: '#1f1538',
      bgCard: '#17102b',
      borderOuter: '#a855f7',
      borderInner: '#581c87',
      textMain: '#faf5ff',
      textMuted: '#d8b4fe',
      accentPink: '#c084fc',
      accentCyan: '#818cf8',
      accentGreen: '#34d399',
      accentAmber: '#fcd34d',
      glowShadow: 'rgba(168, 85, 247, 0.35)',
      swatches: ['#0f0a1c', '#581c87', '#a855f7', '#d8b4fe']
    }
  },
  {
    id: 'deep-space-nebula',
    name: 'เนบิวลา ห้วงอวกาศ',
    nameEn: 'Deep Space Cosmic Nebula',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#05020c',
      bgSecondary: '#120726',
      bgCard: '#0c041a',
      borderOuter: '#9333ea',
      borderInner: '#581c87',
      textMain: '#faf5ff',
      textMuted: '#e9d5ff',
      accentPink: '#c084fc',
      accentCyan: '#38bdf8',
      accentGreen: '#4ade80',
      accentAmber: '#facc15',
      glowShadow: 'rgba(147, 51, 234, 0.4)',
      swatches: ['#05020c', '#581c87', '#9333ea', '#38bdf8']
    }
  },
  {
    id: 'supernova-flare',
    name: 'ซูเปอร์โนวา เปลวสุริยะ',
    nameEn: 'Supernova Solar Flare',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#140800',
      bgSecondary: '#2e1300',
      bgCard: '#220e00',
      borderOuter: '#f59e0b',
      borderInner: '#9a3412',
      textMain: '#fffbeb',
      textMuted: '#fde68a',
      accentPink: '#ef4444',
      accentCyan: '#f59e0b',
      accentGreen: '#22c55e',
      accentAmber: '#b45309',
      glowShadow: 'rgba(245, 158, 11, 0.45)',
      swatches: ['#140800', '#9a3412', '#f59e0b', '#ef4444']
    }
  },
  {
    id: 'cyber-peach',
    name: 'ไซเบอร์ พีช ซันไรส์',
    nameEn: 'Cyber Peach Sunrise',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#170912',
      bgSecondary: '#2e1424',
      bgCard: '#240f1c',
      borderOuter: '#fb7185',
      borderInner: '#881337',
      textMain: '#fff1f2',
      textMuted: '#fecdd3',
      accentPink: '#fb7185',
      accentCyan: '#fdba74',
      accentGreen: '#4ade80',
      accentAmber: '#facc15',
      glowShadow: 'rgba(251, 113, 133, 0.4)',
      swatches: ['#170912', '#881337', '#fb7185', '#fdba74']
    }
  },
  {
    id: 'frostbite-glacier',
    name: 'ธารน้ำแข็ง ฟรอสต์ไบต์',
    nameEn: 'Glacier Ice Frostbite',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#030d17',
      bgSecondary: '#081d33',
      bgCard: '#051626',
      borderOuter: '#38bdf8',
      borderInner: '#0369a1',
      textMain: '#f0f9ff',
      textMuted: '#bae6fd',
      accentPink: '#7dd3fc',
      accentCyan: '#38bdf8',
      accentGreen: '#2dd4bf',
      accentAmber: '#fcd34d',
      glowShadow: 'rgba(56, 189, 248, 0.4)',
      swatches: ['#030d17', '#0369a1', '#38bdf8', '#bae6fd']
    }
  },
  {
    id: 'radioactive-wasteland',
    name: 'กัมมันตรังสี ยูเรเนียม',
    nameEn: 'Uranium Radioactive Waste',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#070f03',
      bgSecondary: '#122607',
      bgCard: '#0c1b05',
      borderOuter: '#84cc16',
      borderInner: '#3f6212',
      textMain: '#f7fee7',
      textMuted: '#d9f99d',
      accentPink: '#bef264',
      accentCyan: '#a3e635',
      accentGreen: '#84cc16',
      accentAmber: '#facc15',
      glowShadow: 'rgba(132, 204, 22, 0.45)',
      swatches: ['#070f03', '#3f6212', '#84cc16', '#d9f99d']
    }
  },
  {
    id: 'rose-gold-metallic',
    name: 'เมทัลลิก โรสโกลด์',
    nameEn: 'Metallic Rose Gold Luxe',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#140a0e',
      bgSecondary: '#29141d',
      bgCard: '#200f16',
      borderOuter: '#fb7185',
      borderInner: '#9f1239',
      textMain: '#fff1f2',
      textMuted: '#fecdd3',
      accentPink: '#f43f5e',
      accentCyan: '#fda4af',
      accentGreen: '#34d399',
      accentAmber: '#fcd34d',
      glowShadow: 'rgba(251, 113, 133, 0.35)',
      swatches: ['#140a0e', '#9f1239', '#fb7185', '#fda4af']
    }
  },
  {
    id: 'celestial-starlight',
    name: 'แสงดาว เซเลสเชียล',
    nameEn: 'Celestial Starlight Realm',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#050716',
      bgSecondary: '#0d1338',
      bgCard: '#090e29',
      borderOuter: '#6366f1',
      borderInner: '#312e81',
      textMain: '#eef2ff',
      textMuted: '#c7d2fe',
      accentPink: '#818cf8',
      accentCyan: '#38bdf8',
      accentGreen: '#34d399',
      accentAmber: '#fcd34d',
      glowShadow: 'rgba(99, 102, 241, 0.4)',
      swatches: ['#050716', '#312e81', '#6366f1', '#c7d2fe']
    }
  },
  {
    id: 'midnight-butterfly',
    name: 'ผีเสื้อราตรี มิดไนท์',
    nameEn: 'Midnight Morpho Butterfly',
    category: 'aesthetic',
    mode: 'dark',
    colors: {
      bgPrimary: '#03081a',
      bgSecondary: '#081640',
      bgCard: '#05102e',
      borderOuter: '#2563eb',
      borderInner: '#7c3aed',
      textMain: '#eff6ff',
      textMuted: '#93c5fd',
      accentPink: '#8b5cf6',
      accentCyan: '#3b82f6',
      accentGreen: '#10b981',
      accentAmber: '#f59e0b',
      glowShadow: 'rgba(37, 99, 235, 0.4)',
      swatches: ['#03081a', '#2563eb', '#8b5cf6', '#93c5fd']
    }
  },

  // ==========================================
  // 6. MONOCHROME, MINIMALIST & LIGHT (87-100)
  // ==========================================
  {
    id: 'carbon-stealth',
    name: 'คาร์บอน สเตลธ์ แบล็ค',
    nameEn: 'Carbon Fiber Stealth Black',
    category: 'minimal',
    mode: 'dark',
    colors: {
      bgPrimary: '#09090b',
      bgSecondary: '#18181b',
      bgCard: '#121215',
      borderOuter: '#3f3f46',
      borderInner: '#27272a',
      textMain: '#fafafa',
      textMuted: '#a1a1aa',
      accentPink: '#71717a',
      accentCyan: '#a1a1aa',
      accentGreen: '#22c55e',
      accentAmber: '#eab308',
      glowShadow: 'rgba(63, 63, 70, 0.3)',
      swatches: ['#09090b', '#27272a', '#3f3f46', '#fafafa']
    }
  },
  {
    id: 'titanium-industrial',
    name: 'ไทเทเนียม อินดัสเทรียล',
    nameEn: 'Brushed Titanium Steel',
    category: 'minimal',
    mode: 'dark',
    colors: {
      bgPrimary: '#0f1115',
      bgSecondary: '#1d2128',
      bgCard: '#15181e',
      borderOuter: '#64748b',
      borderInner: '#334155',
      textMain: '#f1f5f9',
      textMuted: '#94a3b8',
      accentPink: '#38bdf8',
      accentCyan: '#64748b',
      accentGreen: '#34d399',
      accentAmber: '#fbbf24',
      glowShadow: 'rgba(100, 116, 139, 0.35)',
      swatches: ['#0f1115', '#334155', '#64748b', '#f1f5f9']
    }
  },
  {
    id: 'e-ink-paper',
    name: 'อี-อิงค์ ขาวดำ เรโทร',
    nameEn: 'E-Ink Monochrome Paper',
    category: 'minimal',
    mode: 'light',
    colors: {
      bgPrimary: '#f5f5f0',
      bgSecondary: '#e8e8e0',
      bgCard: '#ededeb',
      borderOuter: '#4a4a46',
      borderInner: '#73736c',
      textMain: '#1c1c1a',
      textMuted: '#575752',
      accentPink: '#262624',
      accentCyan: '#3b3b37',
      accentGreen: '#2b593f',
      accentAmber: '#855d21',
      glowShadow: 'rgba(0, 0, 0, 0.1)',
      swatches: ['#f5f5f0', '#73736c', '#4a4a46', '#1c1c1a']
    }
  },
  {
    id: 'paper-white-minimal',
    name: 'เปเปอร์ ไวท์ มินิมอล',
    nameEn: 'Paper White Clean Minimal',
    category: 'minimal',
    mode: 'light',
    colors: {
      bgPrimary: '#ffffff',
      bgSecondary: '#f1f5f9',
      bgCard: '#f8fafc',
      borderOuter: '#cbd5e1',
      borderInner: '#94a3b8',
      textMain: '#0f172a',
      textMuted: '#475569',
      accentPink: '#0284c7',
      accentCyan: '#2563eb',
      accentGreen: '#16a34a',
      accentAmber: '#d97706',
      glowShadow: 'rgba(2, 132, 199, 0.15)',
      swatches: ['#ffffff', '#cbd5e1', '#0284c7', '#0f172a']
    }
  },
  {
    id: 'solarized-light',
    name: 'โซลาร์ไรซ์ ไลท์ (ครีม)',
    nameEn: 'Solarized Light Paper',
    category: 'minimal',
    mode: 'light',
    colors: {
      bgPrimary: '#fdf6e3',
      bgSecondary: '#eee8d5',
      bgCard: '#f5efdc',
      borderOuter: '#93a1a1',
      borderInner: '#b58900',
      textMain: '#073642',
      textMuted: '#657b83',
      accentPink: '#d33682',
      accentCyan: '#268bd2',
      accentGreen: '#859900',
      accentAmber: '#cb4b16',
      glowShadow: 'rgba(38, 139, 210, 0.15)',
      swatches: ['#fdf6e3', '#93a1a1', '#268bd2', '#073642']
    }
  },
  {
    id: 'github-light',
    name: 'กิตฮับ ไลท์ คลาสสิก',
    nameEn: 'GitHub Light Official',
    category: 'minimal',
    mode: 'light',
    colors: {
      bgPrimary: '#f6f8fa',
      bgSecondary: '#eaeef2',
      bgCard: '#ffffff',
      borderOuter: '#d0d7de',
      borderInner: '#0969da',
      textMain: '#1f2328',
      textMuted: '#656d76',
      accentPink: '#cf222e',
      accentCyan: '#0969da',
      accentGreen: '#1a7f37',
      accentAmber: '#9a6700',
      glowShadow: 'rgba(9, 105, 218, 0.15)',
      swatches: ['#f6f8fa', '#d0d7de', '#0969da', '#1f2328']
    }
  },
  {
    id: 'nord-snow-light',
    name: 'นอร์ด สโนว์ ไลท์',
    nameEn: 'Nord Snow Arctic Light',
    category: 'minimal',
    mode: 'light',
    colors: {
      bgPrimary: '#eceff4',
      bgSecondary: '#e5e9f0',
      bgCard: '#f0f3f8',
      borderOuter: '#88c0d0',
      borderInner: '#5e81ac',
      textMain: '#2e3440',
      textMuted: '#4c566a',
      accentPink: '#bf616a',
      accentCyan: '#5e81ac',
      accentGreen: '#a3be8c',
      accentAmber: '#d08770',
      glowShadow: 'rgba(94, 129, 172, 0.15)',
      swatches: ['#eceff4', '#88c0d0', '#5e81ac', '#2e3440']
    }
  },
  {
    id: 'catppuccin-latte',
    name: 'แคตปุชชิน ลาเต้ ครีม',
    nameEn: 'Catppuccin Latte Light',
    category: 'minimal',
    mode: 'light',
    colors: {
      bgPrimary: '#eff1f5',
      bgSecondary: '#e6e9ef',
      bgCard: '#ffffff',
      borderOuter: '#8839ef',
      borderInner: '#bcc0cc',
      textMain: '#4c4f69',
      textMuted: '#6c6f85',
      accentPink: '#ea76cb',
      accentCyan: '#1e66f5',
      accentGreen: '#40a02b',
      accentAmber: '#df8e1d',
      glowShadow: 'rgba(136, 57, 239, 0.15)',
      swatches: ['#eff1f5', '#8839ef', '#ea76cb', '#4c4f69']
    }
  },
  {
    id: 'retro-newsprint',
    name: 'กระดาษหนังสือพิมพ์ เรโทร',
    nameEn: 'Vintage Newspaper Print',
    category: 'minimal',
    mode: 'light',
    colors: {
      bgPrimary: '#f7f3e8',
      bgSecondary: '#ede6d4',
      bgCard: '#f2ece0',
      borderOuter: '#3d3832',
      borderInner: '#6b6459',
      textMain: '#26221d',
      textMuted: '#5e564c',
      accentPink: '#a83232',
      accentCyan: '#2d5a7b',
      accentGreen: '#3b6e47',
      accentAmber: '#b36b00',
      glowShadow: 'rgba(61, 56, 50, 0.15)',
      swatches: ['#f7f3e8', '#6b6459', '#3d3832', '#a83232']
    }
  },
  {
    id: 'minimal-rose-light',
    name: 'มินิมอล โรส บลัช',
    nameEn: 'Minimalist Rose Blush',
    category: 'minimal',
    mode: 'light',
    colors: {
      bgPrimary: '#fff5f7',
      bgSecondary: '#ffe4e8',
      bgCard: '#ffffff',
      borderOuter: '#f43f5e',
      borderInner: '#fda4af',
      textMain: '#4c0519',
      textMuted: '#9f1239',
      accentPink: '#e11d48',
      accentCyan: '#fb7185',
      accentGreen: '#15803d',
      accentAmber: '#b45309',
      glowShadow: 'rgba(244, 63, 94, 0.15)',
      swatches: ['#fff5f7', '#fda4af', '#f43f5e', '#4c0519']
    }
  },
  {
    id: 'blueprint-architect',
    name: 'พิมพ์เขียว สถาปัตย์ (Blueprint)',
    nameEn: 'Architectural Cyan Blueprint',
    category: 'minimal',
    mode: 'dark',
    colors: {
      bgPrimary: '#00204a',
      bgSecondary: '#003366',
      bgCard: '#002959',
      borderOuter: '#00b4d8',
      borderInner: '#0077b6',
      textMain: '#caf0f8',
      textMuted: '#90e0ef',
      accentPink: '#00b4d8',
      accentCyan: '#48cae4',
      accentGreen: '#38b000',
      accentAmber: '#ffb703',
      glowShadow: 'rgba(0, 180, 216, 0.4)',
      swatches: ['#00204a', '#0077b6', '#00b4d8', '#caf0f8']
    }
  },
  {
    id: 'sepia-vintage',
    name: 'ซีเปีย วินเทจ โฟโต้',
    nameEn: 'Sepia Vintage Photograph',
    category: 'minimal',
    mode: 'dark',
    colors: {
      bgPrimary: '#171109',
      bgSecondary: '#291e10',
      bgCard: '#20180d',
      borderOuter: '#9c7a44',
      borderInner: '#614b28',
      textMain: '#f2e5cf',
      textMuted: '#bfa478',
      accentPink: '#c49a56',
      accentCyan: '#dfbe82',
      accentGreen: '#8a9a5b',
      accentAmber: '#c49a56',
      glowShadow: 'rgba(156, 122, 68, 0.35)',
      swatches: ['#171109', '#614b28', '#9c7a44', '#f2e5cf']
    }
  },
  {
    id: 'neon-white-cyber',
    name: 'นีออน ไวท์ ไซเบอร์',
    nameEn: 'Brilliant Neon White Cyber',
    category: 'minimal',
    mode: 'light',
    colors: {
      bgPrimary: '#fafafa',
      bgSecondary: '#f0f0f5',
      bgCard: '#ffffff',
      borderOuter: '#ec4899',
      borderInner: '#06b6d4',
      textMain: '#090a1a',
      textMuted: '#475569',
      accentPink: '#ec4899',
      accentCyan: '#06b6d4',
      accentGreen: '#10b981',
      accentAmber: '#f59e0b',
      glowShadow: 'rgba(236, 72, 153, 0.25)',
      swatches: ['#fafafa', '#ec4899', '#06b6d4', '#090a1a']
    }
  },
  {
    id: 'hikari-diamond-luxe',
    name: 'ฮิคาริ ไดมอนด์ ลักซ์',
    nameEn: 'Hikari Diamond Luxe Edition',
    category: 'minimal',
    mode: 'dark',
    colors: {
      bgPrimary: '#020205',
      bgSecondary: '#0c0d17',
      bgCard: '#07080f',
      borderOuter: '#38bdf8',
      borderInner: '#ec4899',
      textMain: '#ffffff',
      textMuted: '#94a3b8',
      accentPink: '#ec4899',
      accentCyan: '#38bdf8',
      accentGreen: '#34d399',
      accentAmber: '#fbbf24',
      glowShadow: 'rgba(56, 189, 248, 0.45)',
      swatches: ['#020205', '#38bdf8', '#ec4899', '#ffffff']
    }
  }
];

export const getThemePresetById = (id: string): ColorThemePreset => {
  const found = themePresets.find((p) => p.id === id);
  return found || themePresets[0];
};

export const applyThemePreset = (preset: ColorThemePreset): void => {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const { colors, mode } = preset;

  // 1. Toggle theme-light class
  if (mode === 'light') {
    root.classList.add('theme-light');
    document.body.classList.add('theme-light');
  } else {
    root.classList.remove('theme-light');
    document.body.classList.remove('theme-light');
  }

  // 2. Set dynamic CSS variables
  root.style.setProperty('--bg-primary', colors.bgPrimary);
  root.style.setProperty('--bg-secondary', colors.bgSecondary);
  root.style.setProperty('--bg-card', colors.bgCard);
  root.style.setProperty('--bg-card-header', colors.bgSecondary);
  root.style.setProperty('--bg-card-sub', mode === 'light' ? colors.bgSecondary : colors.bgPrimary);
  root.style.setProperty('--border-neon', colors.borderOuter);
  root.style.setProperty('--border-neon-glow', colors.borderInner);
  root.style.setProperty('--border-subtle', mode === 'light' ? colors.borderOuter : colors.borderInner);
  root.style.setProperty('--text-main', colors.textMain);
  root.style.setProperty('--text-title', mode === 'light' ? colors.textMain : '#ffffff');
  root.style.setProperty('--text-muted', colors.textMuted);
  root.style.setProperty('--accent-pink', colors.accentPink);
  root.style.setProperty('--accent-cyan', colors.accentCyan);
  root.style.setProperty('--accent-green', colors.accentGreen);
  root.style.setProperty('--accent-amber', colors.accentAmber);
  root.style.setProperty('--glow-shadow', colors.glowShadow);
  root.style.setProperty('--grid-line', mode === 'light' ? 'rgba(100, 116, 139, 0.18)' : 'rgba(43, 53, 110, 0.25)');

  // 3. Save to localStorage
  try {
    localStorage.setItem('hikari_theme_preset', preset.id);
  } catch (e) {
    console.warn('Could not save theme to localStorage', e);
  }
};
