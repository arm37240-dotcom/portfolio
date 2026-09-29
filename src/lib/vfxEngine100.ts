// Hikari Retro VFX Engine - 100 Distinct Visual, Interactive & Audio Effects
// Categorized into 10 Realms x 10 Effects = Exactly 100 Effects

export type VfxCategory = 
  | 'crt'         // 1. CRT & Display Hardware Artifacts (10)
  | 'electric'    // 2. Electrical, Voltage & High-Energy (10)
  | 'matrix'      // 3. Matrix, Cyber & Digital Streams (10)
  | 'audio'       // 4. Audio-Visual & Waveform Synthesizers (10)
  | 'arcade'      // 5. Retro Gaming & 8-Bit Arcade (10)
  | 'cosmic'      // 6. Cosmic, Sci-Fi & Astrophysics (10)
  | 'holo'        // 7. Holographic, Optical & Glass Sheen (10)
  | 'weather'     // 8. Weather, Nature & Atmosphere (10)
  | 'typography'  // 9. Typography & Text Motion (10)
  | 'interactive';// 10. Mouse, Cursor & Interactive Micro-FX (10)

export interface VfxItem {
  id: string;          // e.g. "fx-001"
  num: number;         // 1 to 100
  name: string;        // English Title
  nameTh: string;      // Thai Description
  category: VfxCategory;
  categoryLabel: string;
  categoryLabelTh: string;
  description: string;
  icon: string;
  defaultEnabled: boolean;
  type: 'css' | 'canvas' | 'audio' | 'interactive' | 'composite';
  intensity?: number;  // 0.1 to 1.0
}

export interface VfxCategoryMeta {
  id: VfxCategory;
  label: string;
  labelTh: string;
  icon: string;
  color: string;
  description: string;
}

export const VFX_CATEGORIES: VfxCategoryMeta[] = [
  {
    id: 'crt',
    label: 'CRT Display Hardware',
    labelTh: 'หลอดภาพแก้วเรโทร CRT',
    icon: 'Tv',
    color: '#38bdf8',
    description: 'เส้นสแกนหลอดภาพ, คลื่นสัญญาณ, รอยโค้งหน้าจอแก้ว, แสงเรืองฟอสฟอรัส'
  },
  {
    id: 'electric',
    label: 'High Voltage & Energy',
    labelTh: 'ไฟฟ้าแรงสูงและพลังงาน',
    icon: 'Zap',
    color: '#facc15',
    description: 'ประกายไฟสปาร์ก, อาร์กฟ้าผ่าเทสลา, ลำแสงเลเซอร์, โอเวอร์โหลด'
  },
  {
    id: 'matrix',
    label: 'Cyber & Matrix Streams',
    labelTh: 'ไซเบอร์และฝนเมทริกซ์',
    icon: 'Binary',
    color: '#22c55e',
    description: 'สตรีมตัวอักษรคาตากานะ, เลขฐานสอง, ลายวงจร PCB, เฮกซ่าเดซิมอล'
  },
  {
    id: 'audio',
    label: 'Audio Synthesizer & Waves',
    labelTh: 'คลื่นเสียงและซินธิไซเซอร์',
    icon: 'Volume2',
    color: '#ec4899',
    description: 'เสียงบลิป 8-Bit, คลื่น Sine/Square/Sawtooth, VU Meter, บีทดนตรี'
  },
  {
    id: 'arcade',
    label: '8-Bit Arcade & Retro Game',
    labelTh: 'เกมตู้เรโทร & อาร์เคด 80s',
    icon: 'Gamepad2',
    color: '#a855f7',
    description: 'INSERT COIN, ตัวหนังสือดอทพิกเซล, คะแนนลอย, สไปรต์ชัตเตอร์'
  },
  {
    id: 'cosmic',
    label: 'Cosmic & Astrophysics',
    labelTh: 'อวกาศและจักรวาลฟิสิกส์',
    icon: 'Compass',
    color: '#6366f1',
    description: 'วาร์ปดวงดาวไฮเปอร์สเปซ, ดาวตก, เมฆเนบิวลา, เลนส์แรงโน้มถ่วง'
  },
  {
    id: 'holo',
    label: 'Hologram & Optical Prism',
    labelTh: 'โฮโลแกรมและปริซึมแสง',
    icon: 'Sparkles',
    color: '#06b6d4',
    description: 'ฟิล์มรุ้งสะท้อน 3 มิติ, การหักเหของแสง, กระจกสะท้อน, แสงไฟนีออน'
  },
  {
    id: 'weather',
    label: 'Cyber Weather & Atmosphere',
    labelTh: 'บรรยากาศและสภาพอากาศ',
    icon: 'CloudRain',
    color: '#14b8a6',
    description: 'ฝนดิจิทัลตกกระทบ, ไอหมอกนีออน, ฝุ่นละอองเรืองแสง, เถ้าถ่านลอย'
  },
  {
    id: 'typography',
    label: 'Typography & Motion Text',
    labelTh: 'ตัวอักษรและอนิเมชันข้อความ',
    icon: 'Type',
    color: '#f97316',
    description: 'ถอดรหัสไซเฟอร์, ข้อความกระตุกกลิทช์, หลอดไฟนีออนกะพริบ, นีออนไหล'
  },
  {
    id: 'interactive',
    label: 'Cursor & Interactive Micro-FX',
    labelTh: 'เมาส์และการตอบสนองสัมผัส',
    icon: 'MousePointer',
    color: '#f43f5e',
    description: 'หางเมาส์นีออน, คลื่นช็อคเวฟเมื่อคลิก, การเอียง 3D, แม่เหล็กดึงดูด'
  }
];

// EXACTLY 100 EFFECTS CATALOG
export const ALL_100_VFX: VfxItem[] = [
  // ==========================================
  // CATEGORY 1: CRT & DISPLAY HARDWARE (1 - 10)
  // ==========================================
  {
    id: 'fx-001',
    num: 1,
    name: 'CRT Phosphor Scanlines',
    nameTh: 'เส้นสแกนหลอดภาพฟอสฟอรัส',
    category: 'crt',
    categoryLabel: 'CRT Display',
    categoryLabelTh: 'หลอดภาพ CRT',
    description: 'เส้นสแกนฮอริซอนทัลเลียนแบบหลอดภาพแก้วเรโทรความละเอียดคลาสสิก',
    icon: 'Tv',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-002',
    num: 2,
    name: 'CRT Curved Glass Vignette',
    nameTh: 'ขอบมุมมอนิเตอร์แก้วโค้งมน',
    category: 'crt',
    categoryLabel: 'CRT Display',
    categoryLabelTh: 'หลอดภาพ CRT',
    description: 'ขอบเงาดำแบบกระจกโค้งของจอ CRT ยุค 1980s',
    icon: 'Maximize',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-003',
    num: 3,
    name: 'CRT Electron Sweep Beam',
    nameTh: 'ลำแสงอิเล็กตรอนกวาดหน้าจอ',
    category: 'crt',
    categoryLabel: 'CRT Display',
    categoryLabelTh: 'หลอดภาพ CRT',
    description: 'ลำแสงแคนดีเลเวอร์สแกนจากบนลงล่างอย่างต่อเนื่องจำลองอัตราการรีเฟรช 60Hz',
    icon: 'SlidersHorizontal',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-004',
    num: 4,
    name: 'CRT Micro Cathode Flicker',
    nameTh: 'แสงกะพริบละเอียดของหลอดแคโทด',
    category: 'crt',
    categoryLabel: 'CRT Display',
    categoryLabelTh: 'หลอดภาพ CRT',
    description: 'การกะพริบระดับไมโครวินาทีที่จำลองการออสซิลเลตของกระแสไฟสลับ AC',
    icon: 'Activity',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-005',
    num: 5,
    name: 'CRT Phosphor Bloom',
    nameTh: 'แสงเรืองฟอสฟอรัสกระจายตัว (Bloom)',
    category: 'crt',
    categoryLabel: 'CRT Display',
    categoryLabelTh: 'หลอดภาพ CRT',
    description: 'สารเคลือบฟอสฟอรัสเรืองแสงรอบองค์ประกอบที่มีความสว่างสูง',
    icon: 'Sun',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-006',
    num: 6,
    name: 'RGB Triad Shadow Mask',
    nameTh: 'เมทริกซ์ซับพิกเซล RGB Shadow Mask',
    category: 'crt',
    categoryLabel: 'CRT Display',
    categoryLabelTh: 'หลอดภาพ CRT',
    description: 'จุดฟอสฟอรัส 3 สี (Red, Green, Blue) เรียงสลับระดับไมโครพิกเซล',
    icon: 'Grid',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-007',
    num: 7,
    name: 'VHS Magnetic Tape Tracking Glitch',
    nameTh: 'สัญญาณแทร็กกิ้งเทป VHS หลุด',
    category: 'crt',
    categoryLabel: 'CRT Display',
    categoryLabelTh: 'หลอดภาพ CRT',
    description: 'ริ้วคลื่นสัญญาณแม่เหล็กกวนเคลื่อนตัวขวางหน้าจอเป็นระยะ',
    icon: 'Film',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-008',
    num: 8,
    name: 'Chromatic Lens Aberration',
    nameTh: 'ความคลาดสีของเลนส์ (Red/Cyan Shift)',
    category: 'crt',
    categoryLabel: 'CRT Display',
    categoryLabelTh: 'หลอดภาพ CRT',
    description: 'การหักเหแยกช่องสีแดงและฟ้าบริเวณมุมจอ',
    icon: 'Layers',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-009',
    num: 9,
    name: 'Analog RF Static Noise',
    nameTh: 'คลื่นเสียงซ่าและสัญญาณรบกวนแอนะล็อก',
    category: 'crt',
    categoryLabel: 'CRT Display',
    categoryLabelTh: 'หลอดภาพ CRT',
    description: 'อนุภาคสัญญาณรบกวนแบบคลื่นวิทยุว่างเปล่า (Cosmic Microwave Background)',
    icon: 'Radio',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-010',
    num: 10,
    name: 'CRT Magnetic Degauss Wobble',
    nameTh: 'การสั่นคืนสภาพแม่เหล็ก (Degauss)',
    category: 'crt',
    categoryLabel: 'CRT Display',
    categoryLabelTh: 'หลอดภาพ CRT',
    description: 'หน้าจอกระเพื่อมและคืนรูปเหมือนกดปุ่มล้างสนามแม่เหล็กหน้าจอคอมรุ่นเก๋า',
    icon: 'RefreshCw',
    defaultEnabled: false,
    type: 'composite'
  },

  // ==========================================
  // CATEGORY 2: ELECTRICAL & HIGH-VOLTAGE (11 - 20)
  // ==========================================
  {
    id: 'fx-011',
    num: 11,
    name: 'Neon Electric Click Sparks',
    nameTh: 'สะเก็ดประกายไฟฟ้านีออนเมื่อคลิก',
    category: 'electric',
    categoryLabel: 'High Voltage',
    categoryLabelTh: 'ไฟฟ้าแรงสูง',
    description: 'ประกายสะเก็ดไฟฟ้าระเบิดตัวกระจายรอบจุดสัมผัสหรือคลิกเมาส์',
    icon: 'Zap',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-012',
    num: 12,
    name: 'Tesla Coil Border Lightning Arcs',
    nameTh: 'ประกายฟ้าผ่าขอบจอเทสลาคอยล์',
    category: 'electric',
    categoryLabel: 'High Voltage',
    categoryLabelTh: 'ไฟฟ้าแรงสูง',
    description: 'สายฟ้าประจุไฟฟ้าสูงแตกกิ่งก้านตามขอบหน้าต่างเป็นจังหวะ',
    icon: 'Cpu',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-013',
    num: 13,
    name: '50Hz Transformer Core Hum',
    nameTh: 'แสงเรืองฮัมหม้อแปลง 50Hz',
    category: 'electric',
    categoryLabel: 'High Voltage',
    categoryLabelTh: 'ไฟฟ้าแรงสูง',
    description: 'การเรืองแสงเป็นคลื่นความถี่ฮาร์มอนิก 50 รอบต่อวินาที',
    icon: 'Flame',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-014',
    num: 14,
    name: 'Interactive Plasma Globe Orb',
    nameTh: 'เส้นแสงพลาสมาไล่ตามเมาส์',
    category: 'electric',
    categoryLabel: 'High Voltage',
    categoryLabelTh: 'ไฟฟ้าแรงสูง',
    description: 'เส้นใยพลาสมาสีม่วงฟ้าเคลื่อนตัวติดตามเคอร์เซอร์คล้ายลูกแก้วพลาสมา',
    icon: 'Globe',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-015',
    num: 15,
    name: 'Circuit Breaker Strobe Surge',
    nameTh: 'แสงวาบเบรกเกอร์ตัดวงจร',
    category: 'electric',
    categoryLabel: 'High Voltage',
    categoryLabelTh: 'ไฟฟ้าแรงสูง',
    description: 'แสงวาบกระตุกสีขาวสว่างสั้นๆ เมื่อคลิกชิ้นส่วนสำคัญ',
    icon: 'Flashlight',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-016',
    num: 16,
    name: '3D Perspective Synthwave Grid',
    nameTh: 'ตารางเลเซอร์ 3 มิติใต้หน้าจอ',
    category: 'electric',
    categoryLabel: 'High Voltage',
    categoryLabelTh: 'ไฟฟ้าแรงสูง',
    description: 'เส้นตารางเรโทร 3 มิติมุ่งสู่เส้นขอบฟ้าที่เคลื่อนไหวไม่สิ้นสุด',
    icon: 'Grid3X3',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-017',
    num: 17,
    name: 'Hexagonal Energy Shield Ripple',
    nameTh: 'เกราะสนามพลังหกเหลี่ยมกระจายตัว',
    category: 'electric',
    categoryLabel: 'High Voltage',
    categoryLabelTh: 'ไฟฟ้าแรงสูง',
    description: 'ลวดลายตารางหกเหลี่ยมเรืองแสงสะท้อนคลื่นพลังงานเมื่อชี้การ์ด',
    icon: 'Shield',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-018',
    num: 18,
    name: 'Overload Warning Hazard Stripes',
    nameTh: 'แถบลายทางเตือนภัยโอเวอร์โหลด',
    category: 'electric',
    categoryLabel: 'High Voltage',
    categoryLabelTh: 'ไฟฟ้าแรงสูง',
    description: 'แถบลายทางสีเหลืองดำสไตล์โรงไฟฟ้าอุตสาหกรรมเลื่อนขยับช้าๆ',
    icon: 'AlertTriangle',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-019',
    num: 19,
    name: 'Industrial Arc Welder Flash',
    nameTh: 'แสงแฟลชเครื่องเชื่อมอาร์กไฟฟ้า',
    category: 'electric',
    categoryLabel: 'High Voltage',
    categoryLabelTh: 'ไฟฟ้าแรงสูง',
    description: 'แสงจ้าสีฟ้าขาวเหมือนสะเก็ดงานเชื่อมไฟฟ้าพลังสูง',
    icon: 'Sparkle',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-020',
    num: 20,
    name: 'AC Voltage Harmonic Noise Spike',
    nameTh: 'สัญญาณกวนยอดคลื่นไฟฟ้าแรงดันชั่วขณะ',
    category: 'electric',
    categoryLabel: 'High Voltage',
    categoryLabelTh: 'ไฟฟ้าแรงสูง',
    description: 'การกระตุกแบบสุ่มของแรงดันไฟฟ้าจำลองเสิร์จในสายไฟ',
    icon: 'Activity',
    defaultEnabled: false,
    type: 'canvas'
  },

  // ==========================================
  // CATEGORY 3: MATRIX & DIGITAL STREAMS (21 - 30)
  // ==========================================
  {
    id: 'fx-021',
    num: 21,
    name: 'Matrix Code Stream Rain',
    nameTh: 'สายฝนดิจิทัลคาตากานะและสัญลักษณ์ไฟฟ้า',
    category: 'matrix',
    categoryLabel: 'Cyber Stream',
    categoryLabelTh: 'สายฝนดิจิทัล',
    description: 'ตัวอักษรญี่ปุ่นและสัญลักษณ์วิศวกรรมไฟฟ้าหลั่งไหลลงมาจากด้านบน',
    icon: 'Binary',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-022',
    num: 22,
    name: 'Pure Binary 01 Waterfall',
    nameTh: 'น้ำตกตัวเลขฐานสอง 0 และ 1',
    category: 'matrix',
    categoryLabel: 'Cyber Stream',
    categoryLabelTh: 'สายฝนดิจิทัล',
    description: 'ข้อมูลบิต 0 และ 1 สีเขียวนีออนตกกระทบอย่างต่อเนื่อง',
    icon: 'Hash',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-023',
    num: 23,
    name: 'PCB Animated Copper Traces',
    nameTh: 'เส้นลายวงจรแผ่นพิมพ์ทองแดงแล่นแสง',
    category: 'matrix',
    categoryLabel: 'Cyber Stream',
    categoryLabelTh: 'สายฝนดิจิทัล',
    description: 'พัลส์กระแสไฟฟ้าวิ่งตามลายเส้นปริ้นท์ PCB รอบส่วนหัวและแถบข้าง',
    icon: 'GitBranch',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-024',
    num: 24,
    name: 'Gutter Hex Memory Dump',
    nameTh: 'แถบตัวเลขหน่วยความจำ Hex ข้างจอ',
    category: 'matrix',
    categoryLabel: 'Cyber Stream',
    categoryLabelTh: 'สายฝนดิจิทัล',
    description: 'แอดเดรส 0x00FF... เลื่อนสุ่มความเร็วสูงบริเวณขอบข้าง',
    icon: 'Code',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-025',
    num: 25,
    name: 'Text Decryption Character Scramble',
    nameTh: 'อนิเมชันถอดรหัสตัวอักษรบนหัวข้อ',
    category: 'matrix',
    categoryLabel: 'Cyber Stream',
    categoryLabelTh: 'สายฝนดิจิทัล',
    description: 'ตัวอักษรเปลี่ยนรูปสุ่มก่อนจะคลี่คลายกลายเป็นข้อความจริง',
    icon: 'Terminal',
    defaultEnabled: true,
    type: 'interactive'
  },
  {
    id: 'fx-026',
    num: 26,
    name: 'Firewall Defense Pulse Waves',
    nameTh: 'คลื่นสัญญาณไฟร์วอลล์ตรวจจับระบบ',
    category: 'matrix',
    categoryLabel: 'Cyber Stream',
    categoryLabelTh: 'สายฝนดิจิทัล',
    description: 'คลื่นตรวจจับสีฟ้า-แดงกวาดผ่านขอบการ์ดข้อมูลเหมือนระบบแอนติไวรัส',
    icon: 'ShieldCheck',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-027',
    num: 27,
    name: 'Quantum Qubit Probability Cloud',
    nameTh: 'กลุ่มหมอกความน่าจะเป็นคิวบิตควอนตัม',
    category: 'matrix',
    categoryLabel: 'Cyber Stream',
    categoryLabelTh: 'สายฝนดิจิทัล',
    description: 'อนุภาคซูเปอร์โพซิชันวนรอบข้อมูลสำคัญจำลองการประมวลผลควอนตัม',
    icon: 'Atom',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-028',
    num: 28,
    name: 'Mechanical Teletype Cursor Blinker',
    nameTh: 'เคอร์เซอร์เครื่องพิมพ์โทรเลขกลไก',
    category: 'matrix',
    categoryLabel: 'Cyber Stream',
    categoryLabelTh: 'สายฝนดิจิทัล',
    description: 'บล็อกสี่เหลี่ยมสีเขียวกะพริบจังหวะ 1Hz ในเทอร์มินัล',
    icon: 'Minus',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-029',
    num: 29,
    name: '3D Rotating Code Helix',
    nameTh: 'เกลียวรหัสโปรแกรม 3 มิติหมุนวน',
    category: 'matrix',
    categoryLabel: 'Cyber Stream',
    categoryLabelTh: 'สายฝนดิจิทัล',
    description: 'สายข้อมูลพันเป็นเกลียวคู่เหมือนดีเอ็นเอหมุนรอบตัวเอง',
    icon: 'Dna',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-030',
    num: 30,
    name: 'Floating Ambient Data Packets',
    nameTh: 'กลุ่มแพ็กเก็ตข้อมูลลอยตัวในบรรยากาศ',
    category: 'matrix',
    categoryLabel: 'Cyber Stream',
    categoryLabelTh: 'สายฝนดิจิทัล',
    description: 'กล่องข้อมูลบิตขนาดจิ๋ว 8-bit ลอยวนเวียนรอบหน้าเว็บ',
    icon: 'Box',
    defaultEnabled: false,
    type: 'canvas'
  },

  // ==========================================
  // CATEGORY 4: AUDIO-VISUAL & WAVEFORMS (31 - 40)
  // ==========================================
  {
    id: 'fx-031',
    num: 31,
    name: 'Harmonic Sine Wave Generator',
    nameTh: 'คลื่นรูปไซน์บริสุทธิ์ (Sine Wave)',
    category: 'audio',
    categoryLabel: 'Waveform & Audio',
    categoryLabelTh: 'คลื่นเสียงและรูปคลื่น',
    description: 'คลื่นออสซิลโลสโคปเรียบเนียน แสดงความถี่มูลฐานของระบบไฟฟ้ากระแสสลับ',
    icon: 'Waves',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-032',
    num: 32,
    name: 'Digital Square Clock Wave',
    nameTh: 'คลื่นสี่เหลี่ยมสัญญาณนาฬิกา (Square Wave)',
    category: 'audio',
    categoryLabel: 'Waveform & Audio',
    categoryLabelTh: 'คลื่นเสียงและรูปคลื่น',
    description: 'รูปคลื่นดิจิทัลสลับสถานะ 0 และ 1 ของวงจรอิเล็กทรอนิกส์และคอมพิวเตอร์',
    icon: 'Square',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-033',
    num: 33,
    name: 'Analog Sawtooth Sweep Wave',
    nameTh: 'คลื่นฟันเลื่อยสวีพสัญญาณ (Sawtooth Wave)',
    category: 'audio',
    categoryLabel: 'Waveform & Audio',
    categoryLabelTh: 'คลื่นเสียงและรูปคลื่น',
    description: 'คลื่นแอนะล็อกฟันเลื่อยแบบเดียวกับที่ใช้ขับการเบี่ยงเบนลำแสงจอภาพ',
    icon: 'TrendingUp',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-034',
    num: 34,
    name: 'Live ECG Heartbeat Pulse',
    nameTh: 'สัญญาณชีพไฟฟ้าหัวใจ (ECG Pulse)',
    category: 'audio',
    categoryLabel: 'Waveform & Audio',
    categoryLabelTh: 'คลื่นเสียงและรูปคลื่น',
    description: 'จังหวะชีพจรคลื่นไฟฟ้า QRS คอมเพล็กซ์เต้นเป็นจังหวะตามสถานะระบบ',
    icon: 'HeartPulse',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-035',
    num: 35,
    name: 'Stereo Needle VU Meter Bounce',
    nameTh: 'เข็มมิเตอร์วัดระดับเสียง VU เด้งตามจังหวะ',
    category: 'audio',
    categoryLabel: 'Waveform & Audio',
    categoryLabelTh: 'คลื่นเสียงและรูปคลื่น',
    description: 'หน้าปัดเข็มอนาล็อกสองข้างเด้งตอบสนองการคลิกและการกระทำ',
    icon: 'Gauge',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-036',
    num: 36,
    name: 'Spectrum Frequency EQ Bars',
    nameTh: 'แท่งกราฟอีควอไลเซอร์ย่านความถี่',
    category: 'audio',
    categoryLabel: 'Waveform & Audio',
    categoryLabelTh: 'คลื่นเสียงและรูปคลื่น',
    description: 'กราฟแท่งความถี่หลายช่องขยับขึ้นลงตามเสียงจำลองในวิทยุเรโทร',
    icon: 'BarChart2',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-037',
    num: 37,
    name: 'Lissajous Resonance Figure',
    nameTh: 'ลวดลายลิสซาจูส์เรโซแนนซ์ 2 มิติ',
    category: 'audio',
    categoryLabel: 'Waveform & Audio',
    categoryLabelTh: 'คลื่นเสียงและรูปคลื่น',
    description: 'เส้นโค้งพันรอบตัวเองที่เกิดจากสัญญาณสองความถี่ต่างเฟสกันบนจอออสซิลโลสโคป',
    icon: 'CircleDot',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-038',
    num: 38,
    name: 'Retro 8-Bit Interactive Blips',
    nameTh: 'เอฟเฟกต์เสียงคลิก 8-บิต Web Audio',
    category: 'audio',
    categoryLabel: 'Waveform & Audio',
    categoryLabelTh: 'คลื่นเสียงและรูปคลื่น',
    description: 'เสียงสังเคราะห์สไตล์ชิปเสียง NES เมื่อกดปุ่มหรือเลือกเมนู',
    icon: 'Volume1',
    defaultEnabled: false,
    type: 'audio'
  },
  {
    id: 'fx-039',
    num: 39,
    name: 'CRT Degauss Coil Discharge Sound',
    nameTh: 'เสียงล้างสนามแม่เหล็กหลอดภาพ CRT',
    category: 'audio',
    categoryLabel: 'Waveform & Audio',
    categoryLabelTh: 'คลื่นเสียงและรูปคลื่น',
    description: 'เสียงความถี่ต่ำทุ้มลึก "BOING-WUB" จำลองคอยล์ล้างหน้าจอเรโทร',
    icon: 'Disc',
    defaultEnabled: false,
    type: 'audio'
  },
  {
    id: 'fx-040',
    num: 40,
    name: 'Sub-Bass Electrical Transformer Drone',
    nameTh: 'เสียงเบสต่ำฮัมความถี่ไฟบ้าน 50Hz',
    category: 'audio',
    categoryLabel: 'Waveform & Audio',
    categoryLabelTh: 'คลื่นเสียงและรูปคลื่น',
    description: 'เสียงฮัมเบาๆ ในพื้นหลังสร้างบรรยากาศห้องควบคุมสถานีไฟฟ้า',
    icon: 'RadioTower',
    defaultEnabled: false,
    type: 'audio'
  },

  // ==========================================
  // CATEGORY 5: RETRO GAMING & 8-BIT ARCADE (41 - 50)
  // ==========================================
  {
    id: 'fx-041',
    num: 41,
    name: 'Arcade Blinking INSERT COIN Marquee',
    nameTh: 'ป้ายไฟกระพริบ INSERT COIN ตู้เกม 80s',
    category: 'arcade',
    categoryLabel: '8-Bit Arcade',
    categoryLabelTh: 'เกมตู้ 8-Bit',
    description: 'ตัวหนังสือพิกเซลกะพริบชวนหยอดเหรียญสไตล์เกมตู้แคปคอมยุคทอง',
    icon: 'Coins',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-042',
    num: 42,
    name: 'Pixel Star Dust Cursor Trail',
    nameTh: 'ละอองดาวพิกเซลตามหลังเมาส์',
    category: 'arcade',
    categoryLabel: '8-Bit Arcade',
    categoryLabelTh: 'เกมตู้ 8-Bit',
    description: 'บล็อกพิกเซลสี่เหลี่ยมหลากสีโปรยปรายเมื่อเลื่อนเมาส์ผ่าน',
    icon: 'Sparkles',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-043',
    num: 43,
    name: 'Game Boy 4-Color Bayer Dithering',
    nameTh: 'การแปลงภาพเป็นจุดดอท Game Boy คลาสสิก',
    category: 'arcade',
    categoryLabel: '8-Bit Arcade',
    categoryLabelTh: 'เกมตู้ 8-Bit',
    description: 'ฟิลเตอร์กระจายจุดสีเขียวมะกอก 4 ระดับแบบเครื่องเล่นพกพา DMG-01',
    icon: 'Grid',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-044',
    num: 44,
    name: 'Red Boss Alert Flashing Siren',
    nameTh: 'ไฟไซเรนแจ้งเตือนบอสแดงกะพริบ',
    category: 'arcade',
    categoryLabel: '8-Bit Arcade',
    categoryLabelTh: 'เกมตู้ 8-Bit',
    description: 'แถบเตือนภัยสีแดงฉานกะพริบที่ส่วนบนพร้อมเสียงเตือนฉุกเฉิน',
    icon: 'Siren',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-045',
    num: 45,
    name: 'Floating Score +100 PTS Popups',
    nameTh: 'ป๊อปอัปคะแนนลอย +100 PTS เมื่อคลิก',
    category: 'arcade',
    categoryLabel: '8-Bit Arcade',
    categoryLabelTh: 'เกมตู้ 8-Bit',
    description: 'ตัวเลขคะแนนเกมตู้ลอยขึ้นและค่อยๆ จางหายเมื่อคลิกปุ่มต่างๆ',
    icon: 'Trophy',
    defaultEnabled: true,
    type: 'interactive'
  },
  {
    id: 'fx-046',
    num: 46,
    name: '8-Bit Pixel Shatter Sprite Explosion',
    nameTh: 'การระเบิดแตกกระจายเป็นก้อนพิกเซล',
    category: 'arcade',
    categoryLabel: '8-Bit Arcade',
    categoryLabelTh: 'เกมตู้ 8-Bit',
    description: 'เอฟเฟกต์แตกกระจายเป็นบล็อกสี่เหลี่ยมแรงโน้มถ่วงเมื่อคลิกรูปภาพ',
    icon: 'BoomBox',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-047',
    num: 47,
    name: 'Pac-Man Trail Pellet Consumption',
    nameTh: 'เม็ดพาวเวอร์พาเลทที่ถูกเมาส์กิน',
    category: 'arcade',
    categoryLabel: '8-Bit Arcade',
    categoryLabelTh: 'เกมตู้ 8-Bit',
    description: 'จุดไข่ปลาสีเหลืองตามเส้นทางที่เมาส์ผ่านจะถูกกลืนหายไปชั่วคราว',
    icon: 'Circle',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-048',
    num: 48,
    name: 'Space Invaders Status Bar March',
    nameTh: 'เอเลี่ยนสเปซอินเวเดอร์สเดินแถวขอบล่าง',
    category: 'arcade',
    categoryLabel: '8-Bit Arcade',
    categoryLabelTh: 'เกมตู้ 8-Bit',
    description: 'ยานเอเลี่ยน 8-bit เดินสลับขาไปมาตามแถบสถานะด้านล่าง',
    icon: 'Ghost',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-049',
    num: 49,
    name: 'Pixel Targeting Crosshair HUD',
    nameTh: 'เป้าเล็งพิกเซลพร้อมพิกัดเรดาร์',
    category: 'arcade',
    categoryLabel: '8-Bit Arcade',
    categoryLabelTh: 'เกมตู้ 8-Bit',
    description: 'กรอบเป้าเล็งสีนีออนแสดงพิกัด [X: 120, Y: 450] บนหน้าจอ',
    icon: 'Crosshair',
    defaultEnabled: false,
    type: 'interactive'
  },
  {
    id: 'fx-050',
    num: 50,
    name: 'Combo Multiplier Streak Counter',
    nameTh: 'ตัวนับคอมโบคลิกต่อเนื่อง (COMBO x5!)',
    category: 'arcade',
    categoryLabel: '8-Bit Arcade',
    categoryLabelTh: 'เกมตู้ 8-Bit',
    description: 'เมื่อคลิกเว็บต่อเนื่องจะขึ้นเกจคอมโบเพิ่มสีสันให้กับผู้ใช้งาน',
    icon: 'Flame',
    defaultEnabled: false,
    type: 'interactive'
  },

  // ==========================================
  // CATEGORY 6: COSMIC & ASTROPHYSICS (51 - 60)
  // ==========================================
  {
    id: 'fx-051',
    num: 51,
    name: 'Hyperspace 3D Warp Starfield',
    nameTh: 'อุโมงค์ดวงดาวไฮเปอร์สเปซพุ่งเข้าหาจอ',
    category: 'cosmic',
    categoryLabel: 'Cosmic & Space',
    categoryLabelTh: 'อวกาศและจักรวาล',
    description: 'ดวงดาว 3 มิติพุ่งผ่านกล้องจำลองการเดินทางด้วยความเร็วเหนือแสง',
    icon: 'Compass',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-052',
    num: 52,
    name: 'Constellation Twinkling Stars',
    nameTh: 'ดวงดาวระยิบระยับและกลุ่มดาวจักรราศี',
    category: 'cosmic',
    categoryLabel: 'Cosmic & Space',
    categoryLabelTh: 'อวกาศและจักรวาล',
    description: 'ดาวฤกษ์ส่องแสงกะพริบช้าๆ ในความมืดของอวกาศลึก',
    icon: 'Star',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-053',
    num: 53,
    name: 'Black Hole Gravitational Lens',
    nameTh: 'เลนส์ความโน้มถ่วงหลุมดำบิดเบือนรอบเมาส์',
    category: 'cosmic',
    categoryLabel: 'Cosmic & Space',
    categoryLabelTh: 'อวกาศและจักรวาล',
    description: 'สนามความโน้มถ่วงโค้งงอเส้นแสงและฉากหลังรอบจุดที่เมาส์อยู่',
    icon: 'Orbit',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-054',
    num: 54,
    name: 'Periodic Shooting Meteors',
    nameTh: 'ดาวตกและฝนดาวหางพาดผ่านท้องฟ้า',
    category: 'cosmic',
    categoryLabel: 'Cosmic & Space',
    categoryLabelTh: 'อวกาศและจักรวาล',
    description: 'ดาวหางความเร็วสูงพุ่งตัดผ่านหน้าจอเป็นระยะพร้อมหางแสงนีออน',
    icon: 'Send',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-055',
    num: 55,
    name: 'Evolving Nebula Cosmic Gas Cloud',
    nameTh: 'กลุ่มหมอกก๊าซเนบิวลาเปลี่ยนสีตามเวลา',
    category: 'cosmic',
    categoryLabel: 'Cosmic & Space',
    categoryLabelTh: 'อวกาศและจักรวาล',
    description: 'มวลก๊าซไฮโดรเจนเรืองแสงม่วง-ฟ้าหมุนวนช้าๆ ในพื้นหลัง',
    icon: 'Cloud',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-056',
    num: 56,
    name: 'Solar Flare Prominence Radiation',
    nameTh: 'เปลวสุริยะและรังสีลมสุริยะขอบจอ',
    category: 'cosmic',
    categoryLabel: 'Cosmic & Space',
    categoryLabelTh: 'อวกาศและจักรวาล',
    description: 'เปลวไฟอนุภาคพลาสมาจากดวงอาทิตย์ปะทุขึ้นจากขอบล่าง',
    icon: 'SunMedium',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-057',
    num: 57,
    name: 'Wormhole Chromatic Tunnel',
    nameTh: 'อุโมงค์รูหนอนข้ามมิติโครมาติก',
    category: 'cosmic',
    categoryLabel: 'Cosmic & Space',
    categoryLabelTh: 'อวกาศและจักรวาล',
    description: 'วงแหวนสีรุ้งหมุนวนดึงดูดสายตาสู่จุดศูนย์กลางจักรวาล',
    icon: 'Minimize2',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-058',
    num: 58,
    name: 'Phosphor Green Satellite Radar Sweep',
    nameTh: 'เรดาร์กวาดหาสัญญาณดาวเทียมสีเขียว',
    category: 'cosmic',
    categoryLabel: 'Cosmic & Space',
    categoryLabelTh: 'อวกาศและจักรวาล',
    description: 'เข็มเรดาร์หมุนเป็นวงกลม 360 องศาตรวจจับเป้าหมายบนหน้าจอ',
    icon: 'Radar',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-059',
    num: 59,
    name: 'Sci-Fi HUD Mecha Target Lock',
    nameTh: 'กรอบล็อกเป้าหมายหุ่นยนต์ไซไฟ HUD',
    category: 'cosmic',
    categoryLabel: 'Cosmic & Space',
    categoryLabelTh: 'อวกาศและจักรวาล',
    description: 'วงแหวนล็อกเป้าแบบอนิเมะหุ่นยนต์กั้นสี่เหลี่ยมรอบการ์ดเมื่อชี้เมาส์',
    icon: 'Focus',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-060',
    num: 60,
    name: 'Planetary Rings Orbiting Operator',
    nameTh: 'วงแหวนดาวเคราะห์โคจรรอบรูปโปรไฟล์',
    category: 'cosmic',
    categoryLabel: 'Cosmic & Space',
    categoryLabelTh: 'อวกาศและจักรวาล',
    description: 'วงแหวนอนุภาคนีออนเอียง 45 องศาหมุนรอบรูปถ่ายอภิณัฐชรัชน์',
    icon: 'Disc',
    defaultEnabled: false,
    type: 'css'
  },

  // ==========================================
  // CATEGORY 7: HOLOGRAPHIC & OPTICAL PRISM (61 - 70)
  // ==========================================
  {
    id: 'fx-061',
    num: 61,
    name: '3D Holographic Rainbow Sheen',
    nameTh: 'ฟิล์มรุ้งสะท้อนแสงโฮโลแกรม 3 มิติ',
    category: 'holo',
    categoryLabel: 'Hologram & Prism',
    categoryLabelTh: 'โฮโลแกรมและปริซึม',
    description: 'ประกายรุ้งสะท้อนแสงเอียงตามมุมมองเมาส์บนการ์ดวิชาและผลงาน',
    icon: 'Sparkles',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-062',
    num: 62,
    name: 'Prism Refraction Edge Split',
    nameTh: 'การกระจายแสงสีรุ้งขอบกระจกปริซึม',
    category: 'holo',
    categoryLabel: 'Hologram & Prism',
    categoryLabelTh: 'โฮโลแกรมและปริซึม',
    description: 'เส้นขอบการ์ดแยกสเปกตรัมแสง 7 สีเหมือนแสงขาวผ่านปริซึมแก้ว',
    icon: 'Maximize2',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-063',
    num: 63,
    name: 'Frosted Aerogel Glass Refraction',
    nameTh: 'ผิวกระจกแอร์โรเจลฝ้าความลึกสูง',
    category: 'holo',
    categoryLabel: 'Hologram & Prism',
    categoryLabelTh: 'โฮโลแกรมและปริซึม',
    description: 'เอฟเฟกต์กระจกเบลอโปร่งแสงระดับพรีเมียมพร้อมการเบี่ยงเบนของแสง',
    icon: 'Eye',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-064',
    num: 64,
    name: 'Thermal Heat Mirage Shimmer',
    nameTh: 'คลื่นความร้อนระอุไอมิราจสั่นไหว',
    category: 'holo',
    categoryLabel: 'Hologram & Prism',
    categoryLabelTh: 'โฮโลแกรมและปริซึม',
    description: 'การสั่นไหวของอากาศจากความร้อนเหนือหม้อแปลงไฟฟ้า',
    icon: 'Wind',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-065',
    num: 65,
    name: 'Symmetric Kaleidoscope Reflection',
    nameTh: 'กระจกเงาสะท้อนสลับลายคาไลโดสโคป',
    category: 'holo',
    categoryLabel: 'Hologram & Prism',
    categoryLabelTh: 'โฮโลแกรมและปริซึม',
    description: 'ลวดลายสมมาตรสะท้อนหมุนวนคล้ายกล้องสลับลายเรโทร',
    icon: 'Shapes',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-066',
    num: 66,
    name: 'Anamorphic Blue Cine Lens Flare',
    nameTh: 'แฟลชเลนส์ภาพยนตร์แถบยาวแนวนอนสีฟ้า',
    category: 'holo',
    categoryLabel: 'Hologram & Prism',
    categoryLabelTh: 'โฮโลแกรมและปริซึม',
    description: 'ลำแสงสีฟ้าแนวนอนยาวสะท้อนจากโลโก้และจุดเด่นสไตล์ภาพยนตร์ไซไฟ',
    icon: 'Sun',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-067',
    num: 67,
    name: 'Iridescent Oil Slick Shimmer',
    nameTh: 'คราบน้ำมันสะท้อนแสงประกายรุ้งผิวน้ำ',
    category: 'holo',
    categoryLabel: 'Hologram & Prism',
    categoryLabelTh: 'โฮโลแกรมและปริซึม',
    description: 'การแทรกสอดของฟิล์มบางทำให้เกิดสีรุ้งเคลื่อนตัวช้าๆ บนพื้นผิวดำ',
    icon: 'Droplet',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-068',
    num: 68,
    name: 'Organic Sinusoidal Neon Breathing',
    nameTh: 'หลอดไฟนีออนหายใจเป็นจังหวะตามลม',
    category: 'holo',
    categoryLabel: 'Hologram & Prism',
    categoryLabelTh: 'โฮโลแกรมและปริซึม',
    description: 'ความสว่างค่อยๆ หม่นลงและสว่างขึ้นอย่างนุ่มนวลเป็นคลื่นไซน์',
    icon: 'Activity',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-069',
    num: 69,
    name: 'Fiber-Optic Light Caustics',
    nameTh: 'ระลอกแสงหักเหนำแสงใยแก้ว',
    category: 'holo',
    categoryLabel: 'Hologram & Prism',
    categoryLabelTh: 'โฮโลแกรมและปริซึม',
    description: 'การรวมแสงระลอกคลื่นใต้น้ำและท่อใยแก้วนำแสงความเร็วสูง',
    icon: 'Waves',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-070',
    num: 70,
    name: 'Anaglyph 3D Depth Pop',
    nameTh: 'ความลึก 3 มิติแอนากลิฟต์สีแดง-น้ำเงิน',
    category: 'holo',
    categoryLabel: 'Hologram & Prism',
    categoryLabelTh: 'โฮโลแกรมและปริซึม',
    description: 'ข้อความพุ่งลอยออกมาข้างหน้าเมื่อมองด้วยสายตาจำลองแว่น 3D',
    icon: 'Layers',
    defaultEnabled: false,
    type: 'css'
  },

  // ==========================================
  // CATEGORY 8: WEATHER, NATURE & ATMOSPHERE (71 - 80)
  // ==========================================
  {
    id: 'fx-071',
    num: 71,
    name: 'Cyberpunk Neon Rain with Ground Puddles',
    nameTh: 'สายฝนไซเบอร์พังก์ตกกระทบขอบล่าง',
    category: 'weather',
    categoryLabel: 'Atmosphere',
    categoryLabelTh: 'สภาพอากาศ',
    description: 'หยาดฝนเรืองแสงเฉียง 15 องศาพร้อมระลอกคลื่นน้ำกระเซ็นที่พื้นล่าง',
    icon: 'CloudRain',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-072',
    num: 72,
    name: 'Suspended Ambient Dust Motes',
    nameTh: 'ละอองฝุ่นอนุภาคเรืองแสงลอยในลำแสง',
    category: 'weather',
    categoryLabel: 'Atmosphere',
    categoryLabelTh: 'สภาพอากาศ',
    description: 'อนุภาคฝุ่นขนาดเล็กในห้องทดลองลอยตัวขึ้นช้าๆ อย่างเป็นธรรมชาติ',
    icon: 'Wind',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-073',
    num: 73,
    name: 'Industrial Dense Neon Steam Fog',
    nameTh: 'ควันไอหมอกอุตสาหกรรมนีออนเรืองแสง',
    category: 'weather',
    categoryLabel: 'Atmosphere',
    categoryLabelTh: 'สภาพอากาศ',
    description: 'ม่านหมอกควันสีฟ้าครามลอยต่ำผ่านหน้าจอสร้างบรรยากาศเมืองนีออน',
    icon: 'CloudFog',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-074',
    num: 74,
    name: 'Drifting Electric Phosphor Snowflakes',
    nameTh: 'เกล็ดหิมะไฟฟ้าฟอสฟอรัสปลิวไสว',
    category: 'weather',
    categoryLabel: 'Atmosphere',
    categoryLabelTh: 'สภาพอากาศ',
    description: 'เกล็ดหิมะทรงผลึกหกเหลี่ยมเรืองแสงร่วงหล่นอย่างนุ่มนวล',
    icon: 'Snowflake',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-075',
    num: 75,
    name: 'Bioluminescent Summer Fireflies',
    nameTh: 'หิ่งห้อยเรืองแสงชีวภาพสีเขียวมะนาว',
    category: 'weather',
    categoryLabel: 'Atmosphere',
    categoryLabelTh: 'สภาพอากาศ',
    description: 'ดวงไฟหิ่งห้อยขยับปีกบินวนและกะพริบแสงนุ่มนวลยามค่ำคืน',
    icon: 'Sun',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-076',
    num: 76,
    name: '8-Bit Pixel Sakura Petals Falling',
    nameTh: 'กลีบดอกซากุระพิกเซล 8-bit ปลิวตามลม',
    category: 'weather',
    categoryLabel: 'Atmosphere',
    categoryLabelTh: 'สภาพอากาศ',
    description: 'กลีบดอกไม้สีชมพูพิกเซลร่วงหล่นเป็นจังหวะตามลมฤดูใบไม้ผลิ',
    icon: 'Flower2',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-077',
    num: 77,
    name: 'Distant Thunderstorm Lightning Flash',
    nameTh: 'แสงฟ้าแลบฟ้าร้องระยะไกลสว่างทั่วทั้งจอ',
    category: 'weather',
    categoryLabel: 'Atmosphere',
    categoryLabelTh: 'สภาพอากาศ',
    description: 'ท้องฟ้าสว่างวาบจำลองพายุฟ้าคะนองในยามราตรีเหนือขอนแก่น',
    icon: 'CloudLightning',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-078',
    num: 78,
    name: 'Rising Furnace Thermal Ash Embers',
    nameTh: 'สะเก็ดเถ้าถ่านไฟลอยตัวจากเตาหลอม',
    category: 'weather',
    categoryLabel: 'Atmosphere',
    categoryLabelTh: 'สภาพอากาศ',
    description: 'ประกายสะเก็ดไฟสีส้มแดงลอยขึ้นจากส่วนท้ายของหน้าเว็บ',
    icon: 'Flame',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-079',
    num: 79,
    name: 'Interactive Water Droplet Ripples',
    nameTh: 'ระลอกคลื่นน้ำแผ่ออกเมื่อคลิก',
    category: 'weather',
    categoryLabel: 'Atmosphere',
    categoryLabelTh: 'สภาพอากาศ',
    description: 'วงระลอกน้ำซ้อนหลายชั้นแผ่ขยายจากจุดสัมผัสคล้ายผิวน้ำที่เงียบสงบ',
    icon: 'Droplets',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-080',
    num: 80,
    name: 'Organic Wind Breeze Card Sway',
    nameTh: 'การ์ดไหวเอนตามสายลมอ่อนๆ อย่างนุ่มนวล',
    category: 'weather',
    categoryLabel: 'Atmosphere',
    categoryLabelTh: 'สภาพอากาศ',
    description: 'การโยกเบาๆ ขององค์ประกอบเหมือนมีสายลมอ่อนพัดผ่านหน้าเว็บ',
    icon: 'Wind',
    defaultEnabled: false,
    type: 'css'
  },

  // ==========================================
  // CATEGORY 9: TYPOGRAPHY & TEXT MOTION (81 - 90)
  // ==========================================
  {
    id: 'fx-081',
    num: 81,
    name: 'Text Horizontal Glitch Slice Displacement',
    nameTh: 'ตัวอักษรกระตุกเลื่อนแยกชั้น (Glitch Slice)',
    category: 'typography',
    categoryLabel: 'Typography',
    categoryLabelTh: 'ตัวอักษรและข้อความ',
    description: 'หัวข้อใหญ่ถูกเฉือนเลื่อนซ้ายขวาในเสี้ยววินาทีสร้างฟีลไซเบอร์พังก์',
    icon: 'Scissors',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-082',
    num: 82,
    name: 'Flickering Faulty Neon Sign Tube',
    nameTh: 'ป้ายไฟนีออนท่อเสียกะพริบติดๆ ดับๆ',
    category: 'typography',
    categoryLabel: 'Typography',
    categoryLabelTh: 'ตัวอักษรและข้อความ',
    description: 'ตัวอักษรบางตัวในชื่อระบบกะพริบและติดสว่างเหมือนหลอดแก้วเรโทรเก่า',
    icon: 'ZapOff',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-083',
    num: 83,
    name: 'Flowing Liquid Gradient Headline Text',
    nameTh: 'ข้อความเกรเดียนต์สีรุ้งไหลไม่สิ้นสุด',
    category: 'typography',
    categoryLabel: 'Typography',
    categoryLabelTh: 'ตัวอักษรและข้อความ',
    description: 'สีสันในตัวหนังสือขนาดใหญ่ไหลเอื่อยเหมือนของเหลวนีออน',
    icon: 'Paintbrush',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-084',
    num: 84,
    name: 'Cybernetic Matrix Decrypt Text Hover',
    nameTh: 'ถอดรหัสตัวหนังสือพิกเซลเมื่อชี้เมาส์',
    category: 'typography',
    categoryLabel: 'Typography',
    categoryLabelTh: 'ตัวอักษรและข้อความ',
    description: 'ตัวหนังสือจะกลายเป็นรหัสฐานสิบหกก่อนถอดรหัสออกมาใหม่เมื่อนำเมาส์ไปชี้',
    icon: 'Code2',
    defaultEnabled: true,
    type: 'interactive'
  },
  {
    id: 'fx-085',
    num: 85,
    name: 'Isometric 3D Extruded Pixel Drop Shadow',
    nameTh: 'เงาตัวอักษร 3 มิติแบบพิกเซลไอโซเมตริก',
    category: 'typography',
    categoryLabel: 'Typography',
    categoryLabelTh: 'ตัวอักษรและข้อความ',
    description: 'เงาบล็อกทึบชั้นหนาหลายพิกเซลเฉียง 45 องศาแบบเกมแฟมิคอม',
    icon: 'BoxSelect',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-086',
    num: 86,
    name: 'Continuous Stock Ticker News Tape Marquee',
    nameTh: 'แถบข่าวด่วนเลื่อนตลอดเวลา (News Ticker)',
    category: 'typography',
    categoryLabel: 'Typography',
    categoryLabelTh: 'ตัวอักษรและข้อความ',
    description: 'ข้อความสถานะระบบเลื่อนผ่านไปทางซ้ายอย่างราบรื่นตลอดเวลา',
    icon: 'ArrowRightLeft',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-087',
    num: 87,
    name: 'Letter-by-Letter Sine Wave Bouncing',
    nameTh: 'ตัวอักษรเด้งเต้นระบำเป็นคลื่นไซน์',
    category: 'typography',
    categoryLabel: 'Typography',
    categoryLabelTh: 'ตัวอักษรและข้อความ',
    description: 'ตัวพยัญชนะแต่ละตัวขยับขึ้นลงตามความสูงคลื่นสร้างความมีชีวิตชีวา',
    icon: 'Waves',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-088',
    num: 88,
    name: 'High-Energy Laser Beam Headline Sweep',
    nameTh: 'ลำแสงเลเซอร์กวาดผ่านผิวกระจกข้อความ',
    category: 'typography',
    categoryLabel: 'Typography',
    categoryLabelTh: 'ตัวอักษรและข้อความ',
    description: 'ประกายแสงเลเซอร์เส้นบางวิ่งผ่านหัวข้อสะท้อนประกายแวววาว',
    icon: 'Sun',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-089',
    num: 89,
    name: 'Hollow Wireframe Stroke Typography',
    nameTh: 'ฟอนต์เส้นขอบโครงลวดโปร่งใส (Wireframe)',
    category: 'typography',
    categoryLabel: 'Typography',
    categoryLabelTh: 'ตัวอักษรและข้อความ',
    description: 'ตัวอักษรแบบมีเฉพาะเส้นขอบเรืองแสงโปร่งด้านในสไตล์พิมพ์เขียวไฟฟ้า',
    icon: 'Type',
    defaultEnabled: false,
    type: 'css'
  },
  {
    id: 'fx-090',
    num: 90,
    name: 'Mechanical Odometer Roll Counter Numbers',
    nameTh: 'ตัวเลขหมุนกลิ้งแบบมิเตอร์วัดระยะทางกล',
    category: 'typography',
    categoryLabel: 'Typography',
    categoryLabelTh: 'ตัวอักษรและข้อความ',
    description: 'ตัวเลขสถิติและคะแนนหมุนเปลี่ยนหลักขึ้นลงอย่างนุ่มนวล',
    icon: 'RotateCw',
    defaultEnabled: true,
    type: 'interactive'
  },

  // ==========================================
  // CATEGORY 10: CURSOR & INTERACTIVE MICRO-FX (91 - 100)
  // ==========================================
  {
    id: 'fx-091',
    num: 91,
    name: 'Glowing Neon Fluid Ribbon Cursor Trail',
    nameTh: 'ริบบิ้นนีออนเรืองแสงพลิ้วไหวตามเมาส์',
    category: 'interactive',
    categoryLabel: 'Interactive FX',
    categoryLabelTh: 'การโต้ตอบและสัมผัส',
    description: 'เส้นริบบิ้นหางแสงนีออนโค้งงออย่างนุ่มนวลตามเส้นทางการเคลื่อนที่ของเมาส์',
    icon: 'Spline',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-092',
    num: 92,
    name: 'Magnetic Attraction Button Pull',
    nameTh: 'ปุ่มแม่เหล็กดึงดูดเมาส์เข้าสู่ศูนย์กลาง',
    category: 'interactive',
    categoryLabel: 'Interactive FX',
    categoryLabelTh: 'การโต้ตอบและสัมผัส',
    description: 'ปุ่มไอคอนจะเคลื่อนตัวตามเมาส์เล็กน้อยเมื่อเข้าใกล้ขอบเขตสัมผัส',
    icon: 'Magnet',
    defaultEnabled: true,
    type: 'interactive'
  },
  {
    id: 'fx-093',
    num: 93,
    name: 'Concentric Ring Shockwave on Click',
    nameTh: 'วงแหวนคลื่นช็อคเวฟกระจายตัวเมื่อคลิก',
    category: 'interactive',
    categoryLabel: 'Interactive FX',
    categoryLabelTh: 'การโต้ตอบและสัมผัส',
    description: 'คลื่นพลังงานสีนีออนขยายตัวเป็นวงแหวนออกไปจากจุดที่คลิก',
    icon: 'Radio',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-094',
    num: 94,
    name: 'Interactive Spotlight Flashlight Torch',
    nameTh: 'ไฟฉายสปอตไลต์ส่องสว่างความมืดตามเมาส์',
    category: 'interactive',
    categoryLabel: 'Interactive FX',
    categoryLabelTh: 'การโต้ตอบและสัมผัส',
    description: 'ลำแสงไฟส่องสว่างจุดที่เมาส์ชี้ เผยให้เห็นรายละเอียดลายวงจรในเงามืด',
    icon: 'Flashlight',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-095',
    num: 95,
    name: 'Celebratory Confetti & Firework Burst',
    nameTh: 'พลุดอกไม้ไฟและกระดาษสีเฉลิมฉลอง',
    category: 'interactive',
    categoryLabel: 'Interactive FX',
    categoryLabelTh: 'การโต้ตอบและสัมผัส',
    description: 'พลุดอกไม้ไฟกระจายตัวเมื่อบันทึกข้อมูลสำเร็จหรือเปลี่ยนธีม',
    icon: 'Sparkle',
    defaultEnabled: false,
    type: 'canvas'
  },
  {
    id: 'fx-096',
    num: 96,
    name: '3D Parallax Tilt Card Gyroscope',
    nameTh: 'การ์ดเอียงมิติพารัลแลกซ์ 3D ตามตำแหน่งเมาส์',
    category: 'interactive',
    categoryLabel: 'Interactive FX',
    categoryLabelTh: 'การโต้ตอบและสัมผัส',
    description: 'การ์ดเนื้อหาเอียงทำมุมอย่างสมจริงราวกับถือแผ่นวงจรอิเล็กทรอนิกส์ในมือ',
    icon: 'Layers',
    defaultEnabled: true,
    type: 'interactive'
  },
  {
    id: 'fx-097',
    num: 97,
    name: 'High-Speed Light Border Beam Racer',
    nameTh: 'ลำแสงความเร็วสูงวิ่งวนรอบขอบการ์ด',
    category: 'interactive',
    categoryLabel: 'Interactive FX',
    categoryLabelTh: 'การโต้ตอบและสัมผัส',
    description: 'ลำแสงนีออนพุ่งวนรอบสี่เหลี่ยมของการ์ดที่กำลังถูกโฟกัส',
    icon: 'SquareDashedBottomCode',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-098',
    num: 98,
    name: 'Laser Beam Top Scroll Progress Tracker',
    nameTh: 'แถบความยาวเลเซอร์ติดตามการเลื่อนหน้าจอ',
    category: 'interactive',
    categoryLabel: 'Interactive FX',
    categoryLabelTh: 'การโต้ตอบและสัมผัส',
    description: 'ลำแสงเลเซอร์สีฟ้า-ชมพูวิ่งตามเปอร์เซ็นต์การเลื่อนอ่านหน้าเว็บด้านบนสุด',
    icon: 'SlidersHorizontal',
    defaultEnabled: true,
    type: 'css'
  },
  {
    id: 'fx-099',
    num: 99,
    name: 'Magnetic Particle Avoidance Field',
    nameTh: 'ละอองอนุภาคพื้นหลังหลบหลีกเมาส์อย่างมีชีวิต',
    category: 'interactive',
    categoryLabel: 'Interactive FX',
    categoryLabelTh: 'การโต้ตอบและสัมผัส',
    description: 'อนุภาคที่ลอยอยู่ในบรรยากาศจะถูกแรงผลักดีดตัวออกจากเคอร์เซอร์เมาส์',
    icon: 'Compass',
    defaultEnabled: true,
    type: 'canvas'
  },
  {
    id: 'fx-100',
    num: 100,
    name: 'Tactile Screen Camera Shake on Impact',
    nameTh: 'การสั่นสะเทือนของหน้าจอเมื่อกดปุ่มแอคชันแรง',
    category: 'interactive',
    categoryLabel: 'Interactive FX',
    categoryLabelTh: 'การโต้ตอบและสัมผัส',
    description: 'หน้าจอสั่นเล็กน้อยให้ความรู้สึกมีน้ำหนักแบบเกมต่อสู้เมื่อกดปุ่มใหญ่',
    icon: 'Vibrate',
    defaultEnabled: true,
    type: 'css'
  }
];

// Curated 100 VFX Combo Presets
export interface VfxPresetCombo {
  id: string;
  name: string;
  nameTh: string;
  description: string;
  activeCount: number;
  icon: string;
  badge: string;
  effectIds: string[];
}

export const VFX_PRESET_COMBOS: VfxPresetCombo[] = [
  {
    id: 'balanced-retro',
    name: 'Balanced Retro Lab (Default)',
    nameTh: 'ห้องแล็บเรโทรสมดุล (ค่ามาตรฐาน)',
    description: 'การผสมผสานเส้นสแกน CRT, ประกายไฟ, ฝนเมทริกซ์, ออสซิลโลสโคป และโฮโลแกรมอย่างลงตัว',
    activeCount: 28,
    icon: 'Sliders',
    badge: 'RECOMMENDED',
    effectIds: ALL_100_VFX.filter(f => f.defaultEnabled).map(f => f.id)
  },
  {
    id: 'cyberpunk-overdrive',
    name: 'Cyberpunk 2099 Overdrive',
    nameTh: 'ไซเบอร์พังก์โอเวอร์ไดรฟ์',
    description: 'แสงนีออนสะท้อน, ลายวงจร PCB, ฝนคาตากานะ, กลิตช์ตัวหนังสือ, ประกายไฟสปาร์ก และฟิล์มรุ้งโฮโลแกรม',
    activeCount: 35,
    icon: 'Zap',
    badge: 'HIGH-TECH',
    effectIds: [
      'fx-001', 'fx-002', 'fx-005', 'fx-008', 'fx-011', 'fx-014', 'fx-016', 'fx-017', 
      'fx-021', 'fx-023', 'fx-025', 'fx-026', 'fx-031', 'fx-032', 'fx-036', 'fx-041',
      'fx-061', 'fx-062', 'fx-066', 'fx-068', 'fx-071', 'fx-081', 'fx-082', 'fx-083', 
      'fx-084', 'fx-088', 'fx-091', 'fx-092', 'fx-093', 'fx-096', 'fx-097', 'fx-098'
    ]
  },
  {
    id: 'tesla-high-voltage',
    name: 'High-Voltage Tesla Laboratory',
    nameTh: 'สถานีไฟฟ้าแรงสูงเทสลาคอยล์',
    description: 'เน้นประกายไฟประจุสูง, เส้นโค้งฟ้าผ่า, เสียงฮัมหม้อแปลง 50Hz, คลื่นหัวใจ ECG และการสั่นไหวของแรงดัน',
    activeCount: 24,
    icon: 'Flame',
    badge: 'ELECTRICAL',
    effectIds: [
      'fx-003', 'fx-005', 'fx-011', 'fx-012', 'fx-013', 'fx-014', 'fx-015', 'fx-017',
      'fx-019', 'fx-020', 'fx-031', 'fx-034', 'fx-038', 'fx-040', 'fx-077', 'fx-082',
      'fx-091', 'fx-093', 'fx-097', 'fx-098', 'fx-100'
    ]
  },
  {
    id: 'deep-space-nebula',
    name: 'Deep Space Cosmic Voyage',
    nameTh: 'การเดินทางสู่อวกาศลึกและดวงดาว',
    description: 'วาร์ปดวงดาว 3D, เมฆเนบิวลาเปลี่ยนสี, ฝนดาวตก, เลนส์แรงโน้มถ่วง และฝุ่นอวกาศเรืองแสง',
    activeCount: 22,
    icon: 'Compass',
    badge: 'ASTRONOMY',
    effectIds: [
      'fx-051', 'fx-052', 'fx-053', 'fx-054', 'fx-055', 'fx-057', 'fx-058', 'fx-059',
      'fx-060', 'fx-063', 'fx-068', 'fx-072', 'fx-074', 'fx-075', 'fx-091', 'fx-093',
      'fx-096', 'fx-098', 'fx-099'
    ]
  },
  {
    id: 'arcade-1984',
    name: 'Arcade 1984 Coin-Op Master',
    nameTh: 'ตู้เกมยอดเหรียญปี 1984',
    description: 'ป้ายกระพริบ INSERT COIN, เสียงชิป 8-Bit, คะแนนลอย +100 PTS, ขอบจอ CRT โค้ง และจุดไข่ปลา',
    activeCount: 26,
    icon: 'Gamepad2',
    badge: 'RETRO 8-BIT',
    effectIds: [
      'fx-001', 'fx-002', 'fx-003', 'fx-006', 'fx-032', 'fx-033', 'fx-038', 'fx-041',
      'fx-042', 'fx-044', 'fx-045', 'fx-046', 'fx-047', 'fx-048', 'fx-050', 'fx-085',
      'fx-090', 'fx-093', 'fx-096', 'fx-100'
    ]
  },
  {
    id: 'matrix-hacker',
    name: 'Dark Terminal Matrix Hacker',
    nameTh: 'จอเขียวแฮกเกอร์เมทริกซ์',
    description: 'สายฝนดิจิทัลเต็มจอ, เฮกซ่าเดซิมอล, น้ำตกเลขฐานสอง, การถอดรหัสตัวอักษร และเคอร์เซอร์เทอร์มินัล',
    activeCount: 20,
    icon: 'Binary',
    badge: 'CODE STREAM',
    effectIds: [
      'fx-001', 'fx-005', 'fx-021', 'fx-022', 'fx-024', 'fx-025', 'fx-026', 'fx-028',
      'fx-030', 'fx-032', 'fx-038', 'fx-084', 'fx-086', 'fx-089', 'fx-091', 'fx-093',
      'fx-098', 'fx-099'
    ]
  },
  {
    id: 'zen-minimal',
    name: 'Zen Minimal (Clean & Subtle)',
    nameTh: 'มินิมอลสบายตา (เปิดเฉพาะเอฟเฟกต์เบา)',
    description: 'ปิดหน้ากากจอแก้วและเอฟเฟกต์หนักทั้งหมด เหลือเพียงละอองฝุ่นนุ่มนวลและเอฟเฟกต์การชี้เบาๆ',
    activeCount: 8,
    icon: 'Feather',
    badge: 'LIGHTWEIGHT',
    effectIds: ['fx-061', 'fx-063', 'fx-068', 'fx-072', 'fx-092', 'fx-096', 'fx-098']
  },
  {
    id: 'maximum-chaos-100',
    name: 'All 100 VFX Overload (Extreme)',
    nameTh: 'เปิดเต็มพิกัด 100 เอฟเฟกต์ (Maximum Overload)',
    description: 'เปิดใช้งานเอฟเฟกต์ทั้ง 100 รูปแบบพร้อมกันเพื่อประสบการณ์ภาพและเสียงระดับขีดสุด!',
    activeCount: 100,
    icon: 'Flame',
    badge: '100 ACTIVE',
    effectIds: ALL_100_VFX.map(f => f.id)
  }
];

// Helper to query effects
export function getVfxById(id: string): VfxItem | undefined {
  return ALL_100_VFX.find(f => f.id === id);
}

export function getVfxByNum(num: number): VfxItem | undefined {
  return ALL_100_VFX.find(f => f.num === num);
}

export function getVfxByCategory(cat: VfxCategory): VfxItem[] {
  return ALL_100_VFX.filter(f => f.category === cat);
}
