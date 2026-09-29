import { ColorThemePreset, ThemeColors } from '@/types/portfolio';
import { themePresets, getThemePresetById as getHandcraftedPresetById } from '@/data/themePresets';

export interface ThemeRealm {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  startId: number;
  endId: number;
  description: string;
  colorIdentity: string;
}

export const THEME_REALMS: ThemeRealm[] = [
  {
    id: 'all',
    name: 'ทั้งหมด (10,000 โทนสี)',
    nameEn: 'ALL SPECTRUM',
    icon: '✦',
    startId: 1,
    endId: 10000,
    description: 'คลังเฉดสีครบวงจร 10,000 รูปแบบ',
    colorIdentity: '#38bdf8'
  },
  {
    id: 'cyberpunk',
    name: 'นีออนไซเบอร์ & ซินธ์เวฟ',
    nameEn: 'CYBERPUNK & SYNTHWAVE',
    icon: '⚡',
    startId: 1,
    endId: 1000,
    description: 'นีออนม่วง ชมพู ฟ้า ราตรีโตเกียว 2077',
    colorIdentity: '#ec4899'
  },
  {
    id: 'retro_console',
    name: 'คอนโซลเรโทร & วินเทจ OS',
    nameEn: 'RETRO CONSOLES & OS',
    icon: '🕹️',
    startId: 1001,
    endId: 2000,
    description: 'Game Boy, Famicom, Arcade 80s-90s, Mac 1984',
    colorIdentity: '#eab308'
  },
  {
    id: 'engineering',
    name: 'วิศวกรรมไฟฟ้า & เครื่องมือวัด',
    nameEn: 'ELECTRICAL & LAB INSTRUMENTS',
    icon: '📟',
    startId: 2001,
    endId: 3000,
    description: 'ออสซิลโลสโคป, PCB, หลอดสุญญากาศ, มัลติมิเตอร์',
    colorIdentity: '#10b981'
  },
  {
    id: 'code_matrix',
    name: 'โค้ดแฮกเกอร์ & เมทริกซ์',
    nameEn: 'CODE MATRIX & TERMINAL',
    icon: '💻',
    startId: 3001,
    endId: 4000,
    description: 'เทอร์มินัลสีเขียว, Dracula, Monokai, Solarized',
    colorIdentity: '#22c55e'
  },
  {
    id: 'cosmic',
    name: 'เนบิวลาอวกาศ & พัลซาร์',
    nameEn: 'COSMIC NEBULA & SPACE',
    icon: '🌌',
    startId: 4001,
    endId: 5000,
    description: 'ดาราจักรแอนโดรเมดา, แสงเหนือออโรร่า, หลุมดำ',
    colorIdentity: '#8b5cf6'
  },
  {
    id: 'mecha_scifi',
    name: 'ไซไฟหุ่นรบ & เลเซอร์แคนนอน',
    nameEn: 'SCI-FI MECHA & LASER',
    icon: '🤖',
    startId: 5001,
    endId: 6000,
    description: 'กันดั้ม, เอวานเกเลียน, เลเซอร์บีม, วาร์ปไดรฟ์',
    colorIdentity: '#06b6d4'
  },
  {
    id: 'nature_elemental',
    name: 'พฤกษา & ธาตุธรรมชาติ',
    nameEn: 'BOTANICAL & ELEMENTS',
    icon: '🌸',
    startId: 6001,
    endId: 7000,
    description: 'ซากุระเกียวโต, ชาเขียวมัทฉะ, มหาสมุทร, ภูเขาไฟ',
    colorIdentity: '#f43f5e'
  },
  {
    id: 'steampunk_industrial',
    name: 'อินดัสเทรียล & โลหะอัลลอย',
    nameEn: 'INDUSTRIAL & ALLOY METALS',
    icon: '⚙️',
    startId: 7001,
    endId: 8000,
    description: 'ทองเหลือง, ทองแดงบริสุทธิ์, คาร์บอนไฟเบอร์',
    colorIdentity: '#f97316'
  },
  {
    id: 'minimal_monochrome',
    name: 'มินิมอลโมโนโครม & ไททาเนียม',
    nameEn: 'MINIMAL & MONOCHROME',
    icon: '📄',
    startId: 8001,
    endId: 9000,
    description: 'E-Ink Kindle, สเลทชาร์โคล, ขาวกระดาษหรู',
    colorIdentity: '#94a3b8'
  },
  {
    id: 'quantum_prism',
    name: 'ควอนตัมปริซึม & สเปกตรัมแสง',
    nameEn: 'QUANTUM PRISM & SPECTRUM',
    icon: '🔮',
    startId: 9001,
    endId: 10000,
    description: 'การหักเหแสงรุ้ง, ไบโอลูมิเนสเซนซ์, คริสตัล',
    colorIdentity: '#ec4899'
  }
];

// Helper: HSL to HEX
function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (h < 60) { r = c; g = x; }
  else if (h < 120) { r = x; g = c; }
  else if (h < 180) { g = c; b = x; }
  else if (h < 240) { g = x; b = c; }
  else if (h < 300) { r = x; b = c; }
  else { r = c; b = x; }

  const toHex = (n: number) => Math.max(0, Math.min(255, Math.round((n + m) * 255))).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Pseudo-random deterministic hash based on seed number
function pseudoRandom(seed: number, offset = 0): number {
  const x = Math.sin((seed + offset) * 12.9898 + 78.233) * 43758.5453;
  return Math.abs(x - Math.floor(x));
}

const THAI_REALM_PREFIXES: Record<number, string[]> = {
  0: ['นีออน', 'ไซเบอร์', 'โครม', 'ชินจูกุ', 'ซินธ์', 'เลเซอร์', 'ซันเซ็ต', 'แฮ็กเกอร์', 'ไนท์'],
  1: ['เรโทร', 'เกมบอย', 'แฟมิคอม', 'อาร์เคด', 'เซก้า', 'อะมิกา', 'พิกเซล', 'เมกาไดรฟ์', 'คลาสสิก'],
  2: ['ออสซิลโล', 'ฟอสเฟอร์', 'โวลต์', 'แอมป์', 'พลาสม่า', 'เซอร์กิต', 'ทรานซิสเตอร์', 'นิปโคฟ', 'นิกซี่'],
  3: ['เมทริกซ์', 'ไบนารี', 'เทอร์มินัล', 'แอสเซมบลี', 'ดราคูลา', 'เคอร์เนล', 'สแต็ก', 'เฮกซา', 'ไบออส'],
  4: ['คอสมิก', 'เนบิวลา', 'พัลซาร์', 'ออโรร่า', 'ควอซาร์', 'สเตลลาร์', 'ซูเปอร์โนวา', 'อวาลอน', 'โวด'],
  5: ['เมคา', 'อีวาน', 'กันดั้ม', 'ไททัน', 'บีม', 'วาร์ป', 'ฟอร์ซฟิลด์', 'ออพติคัส', 'นาโน'],
  6: ['ซากุระ', 'มัทฉะ', 'เซน', 'โอเชียน', 'คอรัล', 'วัลแคน', 'ป่าฝน', 'ภูผา', 'กลีบบัว'],
  7: ['บรอนซ์', 'ทองเหลือง', 'อัลลอย', 'คาร์บอน', 'คอปเปอร์', 'สตีม', 'ฟอร์จ', 'ไททาเนียม', 'ฟอสซิล'],
  8: ['อีอิงค์', 'สเลท', 'ชาร์โคล', 'เพเพอร์', 'มินิมอล', 'โนร์ด', 'เพนซิล', 'ออบซิเดียน', 'คลาวด์'],
  9: ['ควอนตัม', 'ปริซึม', 'สเปกตรัม', 'โอปอล', 'คริสตัล', 'ลูมินัส', 'ออพติค', 'เรนโบว์', 'ไดมอนด์']
};

const EN_REALM_PREFIXES: Record<number, string[]> = {
  0: ['Neon', 'Cyber', 'Chrome', 'Synth', 'Tokyo', 'Laser', 'Sunset', 'Hacker', 'Glitch'],
  1: ['Retro', 'Arcade', 'Famicom', 'GameBoy', 'Pixel', 'Sega', 'Vintage', 'Amiga', 'Vectrex'],
  2: ['Oscillo', 'Phosphor', 'Voltage', 'Plasma', 'Circuit', 'Nixie', 'Analog', 'Diode', 'Probe'],
  3: ['Matrix', 'Terminal', 'Dracula', 'Monokai', 'Solar', 'Kernel', 'Assembly', 'Hex', 'Binary'],
  4: ['Cosmic', 'Nebula', 'Pulsar', 'Aurora', 'Stellar', 'Supernova', 'Galaxy', 'Quasar', 'Void'],
  5: ['Mecha', 'Titan', 'Laser', 'Warp', 'Photon', 'Shield', 'Gundam', 'Kinetic', 'Vortex'],
  6: ['Sakura', 'Matcha', 'Zen', 'Abyss', 'Coral', 'Volcano', 'Flora', 'Lotus', 'Breeze'],
  7: ['Brass', 'Copper', 'Alloy', 'Carbon', 'Steam', 'Titanium', 'Forged', 'Rust', 'Metallic'],
  8: ['E-Ink', 'Slate', 'Charcoal', 'Paper', 'Minimal', 'Obsidian', 'Graphite', 'Nordic', 'Ivory'],
  9: ['Quantum', 'Prism', 'Spectrum', 'Opal', 'Crystal', 'Luminous', 'Rainbow', 'Photon', 'Aura']
};

const THAI_SUFFIXES = ['โกลว์', 'เวฟ', 'บลาสท์', 'โอเปอเรเตอร์', 'คอร์', 'พัลส์', 'สโคป', 'ไดรฟ์', 'อีเทอร์', 'เอเพ็กซ์', 'เรย์', 'อัลตร้า'];
const EN_SUFFIXES = ['Glow', 'Wave', 'Blast', 'Operator', 'Core', 'Pulse', 'Scope', 'Drive', 'Aether', 'Apex', 'Ray', 'Ultra'];

// Generate deterministic ColorThemePreset for any seed number 1 - 10000
export function generateProceduralTheme(num: number): ColorThemePreset {
  const clampedNum = Math.max(1, Math.min(10000, Math.floor(num)));
  
  // If in first 100, return original hand-crafted preset
  if (clampedNum <= themePresets.length) {
    return themePresets[clampedNum - 1];
  }

  const realmIndex = Math.min(9, Math.floor((clampedNum - 1) / 1000));

  // Deterministic seed variations
  const seed1 = pseudoRandom(clampedNum, 1);
  const seed2 = pseudoRandom(clampedNum, 2);
  const seed3 = pseudoRandom(clampedNum, 3);
  const seed4 = pseudoRandom(clampedNum, 4);

  // Hue calculation based on Realm
  let baseHue = 0;
  let saturation = 85;
  let bgL = 4;

  switch (realmIndex) {
    case 0: // Cyberpunk: Magenta (300-340), Cyan (180-200), Amber (35-50)
      baseHue = seed1 < 0.4 ? 300 + seed2 * 45 : seed1 < 0.75 ? 185 + seed2 * 25 : 35 + seed2 * 25;
      saturation = 90 + seed3 * 10;
      bgL = 3 + seed4 * 2;
      break;
    case 1: // Retro Consoles: Pea soup (75-95), Gold (40-55), Arcade Blue (210-230), Famicom Red (350-10)
      baseHue = seed1 < 0.3 ? 80 + seed2 * 20 : seed1 < 0.6 ? 215 + seed2 * 25 : seed1 < 0.85 ? 45 + seed2 * 15 : (350 + seed2 * 25) % 360;
      saturation = 60 + seed3 * 30;
      bgL = 4 + seed4 * 3;
      break;
    case 2: // Electrical & Instruments: Phosphor Jade (140-165), Amber (35-45), CRT Blue (195-210)
      baseHue = seed1 < 0.55 ? 145 + seed2 * 25 : seed1 < 0.8 ? 38 + seed2 * 12 : 200 + seed2 * 15;
      saturation = 80 + seed3 * 18;
      bgL = 3.5 + seed4 * 2;
      break;
    case 3: // Code Matrix: Terminal Green (120-145), Dracula Purple (265-285), Monokai Pink (340-355)
      baseHue = seed1 < 0.5 ? 125 + seed2 * 20 : seed1 < 0.8 ? 270 + seed2 * 20 : 340 + seed2 * 18;
      saturation = 75 + seed3 * 22;
      bgL = 3 + seed4 * 2;
      break;
    case 4: // Cosmic Nebula: Deep Indigo (240-270), Violet (275-295), Stellar Teal (170-190)
      baseHue = seed1 < 0.45 ? 250 + seed2 * 30 : seed1 < 0.8 ? 280 + seed2 * 20 : 175 + seed2 * 20;
      saturation = 85 + seed3 * 15;
      bgL = 3 + seed4 * 2;
      break;
    case 5: // Sci-Fi Mecha: Eva Purple (275), Neon Lime (90-110), Mecha Red (0-15), Laser Cyan (190-205)
      baseHue = seed1 < 0.3 ? 275 + seed2 * 15 : seed1 < 0.6 ? 95 + seed2 * 20 : seed1 < 0.8 ? 5 + seed2 * 15 : 195 + seed2 * 15;
      saturation = 90 + seed3 * 10;
      bgL = 3.5 + seed4 * 2;
      break;
    case 6: // Botanical & Nature: Sakura Rose (340-360), Matcha Leaf (130-155), Coral Cyan (170-185)
      baseHue = seed1 < 0.4 ? (345 + seed2 * 20) % 360 : seed1 < 0.75 ? 135 + seed2 * 25 : 175 + seed2 * 15;
      saturation = 70 + seed3 * 25;
      bgL = 4 + seed4 * 2;
      break;
    case 7: // Steampunk Industrial: Brass Gold (40-50), Copper Orange (20-35), Patina Teal (165-180)
      baseHue = seed1 < 0.45 ? 24 + seed2 * 15 : seed1 < 0.8 ? 42 + seed2 * 12 : 168 + seed2 * 16;
      saturation = 65 + seed3 * 28;
      bgL = 3.5 + seed4 * 2;
      break;
    case 8: // Minimal & Monochrome: Low saturation, slate (210-230)
      baseHue = 210 + seed1 * 25;
      saturation = 10 + seed2 * 25;
      bgL = 3 + seed4 * 2;
      break;
    case 9: // Quantum Prism: Full rainbow spectrum
    default:
      baseHue = (clampedNum * 137.5) % 360; // Golden angle dispersion
      saturation = 85 + seed3 * 15;
      bgL = 3.5 + seed4 * 2;
      break;
  }

  // Complementary & Harmonic Accents
  const accent1Hue = (baseHue + 30) % 360;
  const accent2Hue = (baseHue + 180) % 360;
  const accent3Hue = (baseHue + 120) % 360;
  const accent4Hue = (baseHue + 240) % 360;

  const bgPrimary = hslToHex(baseHue, Math.min(saturation * 0.4, 30), bgL);
  const bgSecondary = hslToHex(baseHue, Math.min(saturation * 0.5, 36), bgL + 4.5);
  const bgCard = hslToHex(baseHue, Math.min(saturation * 0.45, 34), bgL + 2.5);
  const borderOuter = hslToHex(baseHue, saturation, 55);
  const borderInner = hslToHex(baseHue, saturation * 0.6, 22);

  const accentPink = hslToHex(accent2Hue, saturation, 60);
  const accentCyan = hslToHex(accent1Hue, saturation, 58);
  const accentGreen = hslToHex(accent3Hue, saturation, 54);
  const accentAmber = hslToHex(accent4Hue, saturation, 56);

  const thaiPrefixList = THAI_REALM_PREFIXES[realmIndex];
  const enPrefixList = EN_REALM_PREFIXES[realmIndex];
  const prefixIdx = Math.floor(seed2 * thaiPrefixList.length);
  const suffixIdx = Math.floor(seed3 * THAI_SUFFIXES.length);

  const thaiName = `${thaiPrefixList[prefixIdx]}-${THAI_SUFFIXES[suffixIdx]} #${String(clampedNum).padStart(4, '0')}`;
  const enName = `${enPrefixList[prefixIdx]} ${EN_SUFFIXES[suffixIdx]} #${String(clampedNum).padStart(4, '0')}`;

  const categoryMap: ColorThemePreset['category'][] = [
    'cyberpunk',
    'retro_console',
    'engineering',
    'code_matrix',
    'aesthetic',
    'cyberpunk',
    'aesthetic',
    'engineering',
    'minimal',
    'cyberpunk'
  ];

  const colors: ThemeColors = {
    bgPrimary,
    bgSecondary,
    bgCard,
    borderOuter,
    borderInner,
    textMain: '#f8fafc',
    textMuted: hslToHex(baseHue, 35, 70),
    accentPink,
    accentCyan,
    accentGreen,
    accentAmber,
    glowShadow: `rgba(${parseInt(borderOuter.slice(1, 3), 16)}, ${parseInt(borderOuter.slice(3, 5), 16)}, ${parseInt(borderOuter.slice(5, 7), 16)}, 0.35)`,
    swatches: [bgPrimary, borderOuter, accentPink, accentCyan]
  };

  return {
    id: `hikari-q-${String(clampedNum).padStart(5, '0')}`,
    name: thaiName,
    nameEn: enName,
    category: categoryMap[realmIndex],
    mode: 'dark',
    colors
  };
}

// Master lookup function: Supports string IDs (e.g. 'hikari-classic', 'tektronix-oscilloscope') and 1-10000 numbers
export function getTheme10kById(idOrNum: string | number): ColorThemePreset {
  if (typeof idOrNum === 'number') {
    return generateProceduralTheme(idOrNum);
  }

  // If string is numeric like "500" or "#500"
  const cleanId = idOrNum.replace(/^#/, '');
  const parsedNum = parseInt(cleanId, 10);
  if (!isNaN(parsedNum) && String(parsedNum) === cleanId) {
    return generateProceduralTheme(parsedNum);
  }

  // If format is "hikari-q-00500"
  if (idOrNum.startsWith('hikari-q-')) {
    const qNum = parseInt(idOrNum.replace('hikari-q-', ''), 10);
    if (!isNaN(qNum)) {
      return generateProceduralTheme(qNum);
    }
  }

  // Otherwise, fallback to original 100 hand-crafted presets
  return getHandcraftedPresetById(idOrNum);
}

// Total count of themes supported
export const TOTAL_THEMES_COUNT = 10000;

// Query and paginated loader for 10,000 themes
export function getThemesPage(
  page: number,
  pageSize = 60,
  realmId = 'all',
  searchQuery = ''
): { themes: ColorThemePreset[]; totalMatches: number; totalPages: number } {
  const query = searchQuery.trim().toLowerCase();

  // If query is an exact number e.g. "7777" or "#7777"
  const queryNum = parseInt(query.replace('#', ''), 10);
  if (!isNaN(queryNum) && queryNum >= 1 && queryNum <= 10000) {
    const directTheme = getTheme10kById(queryNum);
    return {
      themes: [directTheme],
      totalMatches: 1,
      totalPages: 1
    };
  }

  // Determine realm bounds
  let startId = 1;
  let endId = 10000;
  if (realmId !== 'all') {
    const realm = THEME_REALMS.find((r) => r.id === realmId);
    if (realm) {
      startId = realm.startId;
      endId = realm.endId;
    }
  }

  const realmTotal = endId - startId + 1;

  // Filter with query
  if (query) {
    const matches: ColorThemePreset[] = [];
    const maxSearch = 180; // Safety cap for text queries
    for (let id = startId; id <= endId && matches.length < maxSearch; id++) {
      const theme = getTheme10kById(id);
      if (
        theme.name.toLowerCase().includes(query) ||
        theme.nameEn.toLowerCase().includes(query) ||
        theme.id.toLowerCase().includes(query) ||
        String(id).includes(query)
      ) {
        matches.push(theme);
      }
    }

    const startIndex = (page - 1) * pageSize;
    const pageItems = matches.slice(startIndex, startIndex + pageSize);
    return {
      themes: pageItems,
      totalMatches: matches.length,
      totalPages: Math.ceil(matches.length / pageSize) || 1
    };
  }

  // Fast procedural slice without searching all 10,000 items
  const totalPages = Math.ceil(realmTotal / pageSize);
  const startIndex = (page - 1) * pageSize;
  const currentStartId = startId + startIndex;
  const currentEndId = Math.min(endId, currentStartId + pageSize - 1);

  const themes: ColorThemePreset[] = [];
  for (let id = currentStartId; id <= currentEndId; id++) {
    themes.push(getTheme10kById(id));
  }

  return {
    themes,
    totalMatches: realmTotal,
    totalPages
  };
}
