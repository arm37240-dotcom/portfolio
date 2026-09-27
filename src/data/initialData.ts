import { PortfolioData } from '@/types/portfolio';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: 'อภิณัฐชรัชน์ มณีรัตน์',
    nickname: 'อาร์ม',
    studentId: '68322110246-5',
    university: 'มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น',
    faculty: 'คณะครุศาสตร์อุตสาหกรรม',
    major: 'สาขาครุศาสตร์อุตสาหกรรมไฟฟ้า',
    phone: '0611096291',
    email: 'Arm37240@gmail.com',
    birthdate: '27 กรกฎาคม 2547',
    age: '22',
    nationality: 'ไทย',
    ethnicity: 'ไทย',
    avatarUrl: '/images/rmuti_logo.jpg',
    heroHeadline: 'Turn Power Into Knowledge & Engineering',
    heroSubheadline: 'ก้าวสู่อนาคตวิศวกรรมไฟฟ้าและนวัตกรรมวิชาชีพครูช่าง ผสานเทคโนโลยี วงจรพลังงาน และการถ่ายทอดองค์ความรู้สู่สังคมอย่างทรงคุณค่า',
    bio: 'มุ่งมั่นพัฒนาตนเองสู่ความเป็นเลิศทั้งในด้านทักษะเชิงช่างวิศวกรรมไฟฟ้า การออกแบบระบบควบคุมอัตโนมัติ และศาสตร์การสอนวิชาชีพ (Pedagogy) พร้อมประยุกต์ใช้นวัตกรรมสมัยใหม่ในการยกระดับคุณภาพการเรียนรู้และขับเคลื่อนการพัฒนาอุตสาหกรรมอย่างยั่งยืน',
    specialSkills: [
      'การออกแบบและติดตั้งระบบไฟฟ้ากำลัง (Electrical Power System Design)',
      'การเขียนโปรแกรมควบคุม PLC & Microcontroller (Arduino, ESP32, Siemens S7)',
      'การเขียนแบบวงจรไฟฟ้าด้วยคอมพิวเตอร์ (AutoCAD Electrical)',
      'การบำรุงรักษาและทดสอบเครื่องกลไฟฟ้า (Electrical Machine Maintenance)',
      'การสร้างสื่อและชุดฝึกปฏิบัติการสอนทางวิศวกรรมไฟฟ้า (Educational Training Kits)',
      'การวิเคราะห์สัญญาณและการทดสอบวงจรด้วย Oscilloscope & Power Analyzer'
    ],
    otherInterests: [
      'ระบบพลังงานแสงอาทิตย์และพลังงานสะอาด (Smart Solar PV Systems)',
      'ระบบบ้านอัจฉริยะและ IoT สำหรับอุตสาหกรรม (Industrial IoT & Smart Home)',
      'เทคโนโลยีระบบควบคุมมอเตอร์ความเร็วรอบแปรผัน (VFD Inverter Drives)',
      'การค้นคว้าและพัฒนานวัตกรรมสิ่งประดิษฐ์เพื่อชุมชน'
    ],
    circuitVoltage: '2.7 kV',
    circuitCurrent: '12 mA',
    circuitGas: 'Cobalt / Neon',
    circuitPressure: '760 Torr'
  },
  education: [
    {
      id: 'edu-1',
      level: 'ระดับประถมศึกษา',
      institution: 'โรงเรียนประชารัฐวิทยา',
      period: 'สำเร็จการศึกษา',
      description: 'ศึกษาพื้นฐานวิชาการ สร้างเสริมคุณธรรม และริเริ่มความสนใจในวิทยาศาสตร์และสิ่งประดิษฐ์',
      iconType: 'school',
      badge: 'พื้นฐานการศึกษา'
    },
    {
      id: 'edu-2',
      level: 'ระดับมัธยมศึกษาตอนต้น',
      institution: 'โรงเรียนหัวตะพานวิทยาคม',
      period: 'สำเร็จการศึกษา',
      description: 'ศึกษาหลักสูตรมัธยมศึกษาตอนต้น เพิ่มพูนทักษะคณิตศาสตร์ วิทยาศาสตร์ และกิจกรรมพัฒนาผู้เรียน',
      iconType: 'school',
      badge: 'มัธยมศึกษา'
    },
    {
      id: 'edu-3',
      level: 'ระดับประกาศนียบัตรวิชาชีพ (ปวช.)',
      institution: 'วิทยาลัยเทคนิคหัวตะพาน',
      period: 'สำเร็จการศึกษา',
      majorOrBranch: 'สาขาวิชาช่างไฟฟ้ากำลัง',
      description: 'ฝึกปฏิบัติทักษะวิชาชีพช่างไฟฟ้า งานติดตั้งระบบไฟฟ้าในอาคาร เครื่องจักรกลไฟฟ้า และการตรวจวัดทางไฟฟ้า',
      iconType: 'college',
      badge: 'สายอาชีพ ปวช.'
    },
    {
      id: 'edu-4',
      level: 'ระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส. / อนุปริญญา)',
      institution: 'วิทยาลัยเทคนิคหัวตะพาน',
      period: 'สำเร็จการศึกษา',
      majorOrBranch: 'สาขาวิชาไฟฟ้ากำลัง (เทคนิควิศวกรรมไฟฟ้า)',
      description: 'ศึกษาเชิงลึกด้านระบบส่งจ่ายกำลังไฟฟ้า การควบคุมมอเตอร์ไฟฟ้าอัตโนมัติ การเขียนโปรแกรม PLC และโครงการวิชาชีพ',
      iconType: 'college',
      badge: 'อนุปริญญา ปวส.'
    },
    {
      id: 'edu-5',
      level: 'ระดับปริญญาตรี',
      institution: 'มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น',
      period: 'กำลังศึกษาอยู่ (รหัสนักศึกษา 68322110246-5)',
      majorOrBranch: 'คณะครุศาสตร์อุตสาหกรรม • สาขาครุศาสตร์อุตสาหกรรมไฟฟ้า (หลักสูตร 5 ปี/เทียบโอน)',
      description: 'ศึกษาองค์ความรู้วิศวกรรมไฟฟ้าขั้นสูง พร้อมทั้งศาสตร์และศิลป์การสอนวิชาชีพ (Curriculum, Instruction & Pedagogy) เพื่อผลิตบุคลากรครูช่างและวิศวกรผู้เชี่ยวชาญ',
      iconType: 'university',
      badge: 'ปริญญาตรี (ปัจจุบัน)'
    }
  ],
  courses: [
    {
      id: 'course-1',
      code: 'EE-201',
      title: 'การวิเคราะห์และออกแบบวงจรไฟฟ้า (Electrical Circuit Analysis)',
      category: 'วิชาชีพวิศวกรรมไฟฟ้า',
      credits: '3 (2-3-5)',
      description: 'ทฤษฎีวงจรไฟฟ้ากระแสตรงและกระแสสลับ เครือข่ายสองพอร์ต ทรานเชียนต์ และการจำลองวงจรด้วยซอฟต์แวร์',
      projects: [
        {
          id: 'proj-1',
          title: 'แบบจำลองวงจรกรองความถี่และเรโซแนนซ์ไฟฟ้า (Resonant Filter Circuit Simulator)',
          description: 'วิเคราะห์การตอบสนองความถี่ของวงจร RLC พร้อมแสดงผลกราฟรูปคลื่นแบบ Real-time ด้วย Oscilloscope',
          date: 'ภาคเรียนที่ 1/2567',
          imageUrl: '/images/helixion_reference.png',
          tags: ['RLC Circuit', 'Oscilloscope', 'Frequency Response'],
          highlights: ['คำนวณค่า Q-Factor และ Bandwidth อย่างแม่นยำ', 'ทดสอบสัญญาน Sine wave ความถี่ 50Hz - 100kHz']
        }
      ]
    },
    {
      id: 'course-2',
      code: 'EE-312',
      title: 'การควบคุมมอเตอร์และระบบอัตโนมัติอุตสาหกรรม (Motor Control & Industrial Automation)',
      category: 'วิชาชีพวิศวกรรมไฟฟ้า',
      credits: '3 (2-3-5)',
      description: 'การออกแบบตู้ควบคุมมอเตอร์ Magnetic Contactor, Variable Frequency Drive (VFD) และการเขียนโปรแกรมควบคุมด้วย PLC',
      projects: [
        {
          id: 'proj-2',
          title: 'ชุดทดสอบควบคุมความเร็วมอเตอร์ 3 เฟส ผ่านอินเวอร์เตอร์และ PLC',
          description: 'ออกแบบระบบสตาร์ทมอเตอร์แบบ Star-Delta และ VFD พร้อมระบบป้องกัน Overload และ Emergency Stop',
          date: 'ภาคเรียนที่ 2/2567',
          imageUrl: '/images/helixion_reference.png',
          tags: ['PLC Siemens', 'Inverter VFD', 'Motor 3-Phase', 'Relay Logic'],
          highlights: ['ระบบควบคุมความเร็วรอบแบบ Closed-loop PID', 'ระบบตัดวงจรอัตโนมัติเมื่อตรวจพบกระแสเกิน (Protection)']
        }
      ]
    },
    {
      id: 'course-3',
      code: 'TE-101',
      title: 'นวัตกรรมและเทคโนโลยีสารสนเทศเพื่อการศึกษาทางวิชาชีพ (Vocational Education Innovation)',
      category: 'วิชาชีพครู',
      credits: '3 (2-2-5)',
      description: 'การพัฒนาและประยุกต์ใช้สื่อนวัตกรรมดิจิทัล ชุดสาธิตการสอน และระบบห้องปฏิบัติการเสมือนสำหรับวิชาชีพช่างไฟฟ้า',
      projects: [
        {
          id: 'proj-3',
          title: 'ชุดฝึกปฏิบัติการสอนการต่อสายวงจรไฟฟ้าในอาคารพร้อมระบบตรวจสอบความปลอดภัย',
          description: 'สื่อการสอนเชิงโต้ตอบสำหรับนักเรียนช่างไฟฟ้า มีไฟสัญญาณแจ้งสถานะเมื่อต่อวงจรลัดวงจรหรือต่อผิดขั้ว',
          date: 'ภาคเรียนที่ 1/2568',
          imageUrl: '/images/helixion_reference.png',
          tags: ['ชุดฝึกการสอน', 'ความปลอดภัยทางไฟฟ้า', 'สื่อการเรียนรู้'],
          highlights: ['ช่วยลดความเสี่ยงอุบัติเหตุทางไฟฟ้าในห้องปฏิบัติการ', 'เพิ่มประสิทธิภาพการเรียนรู้ของนักเรียนขึ้น 40%']
        }
      ]
    },
    {
      id: 'course-4',
      code: 'EE-405',
      title: 'การออกแบบระบบไฟฟ้ากำลังและระบบป้องกัน (Power System Design & Protection)',
      category: 'วิชาชีพวิศวกรรมไฟฟ้า',
      credits: '3 (3-0-6)',
      description: 'มาตรฐานการติดตั้งระบบไฟฟ้า (วสท.), การคำนวณขนาดหม้อแปลง ขนาดสายไฟฟ้า และการประสานอุปกรณ์ป้องกันไฟเกิน/ลัดวงจร',
      projects: [
        {
          id: 'proj-4',
          title: 'การออกแบบระบบไฟฟ้าและตู้สวิตช์บอร์ด MDB อาคารปฏิบัติการวิศวกรรม',
          description: 'เขียนแบบ Single Line Diagram ตู้ MDB และตู้ย่อย DB ด้วย AutoCAD Electrical พร้อมคำนวณโหลดรวมและขนาดเบรกเกอร์',
          date: 'ภาคเรียนที่ 2/2568',
          imageUrl: '/images/helixion_reference.png',
          tags: ['AutoCAD Electrical', 'MDB Switchboard', 'วสท. มาตรฐาน', 'Load Calculation'],
          highlights: ['คำนวณ Fault Current และพิกัด Breaking Capacity ของเบรกเกอร์', 'ระบบกราวด์และ Surge Protection ตามมาตรฐานสากล']
        }
      ]
    }
  ],
  activities: [
    {
      id: 'act-1',
      title: 'โครงการจิตอาสาตรวจเช็กและซ่อมบำรุงระบบไฟฟ้าชุมชนและโรงเรียนชนบท',
      category: 'กิจกรรมจิตอาสาและสโมสร',
      date: 'มกราคม 2568',
      location: 'พื้นที่ภาคตะวันออกเฉียงเหนือ',
      description: 'ร่วมทีมคณาจารย์และเพื่อนนักศึกษาออกให้บริการเปลี่ยนอุปกรณ์ไฟฟ้า หลอดไฟ สายไฟ และตรวจวัดค่าความต้านทานดินเพื่อความปลอดภัยของชุมชน',
      imageUrl: '/images/helixion_reference.png',
      badge: 'จิตอาสาพัฒนาสังคม',
      tags: ['จิตอาสา', 'ตรวจเช็กไฟฟ้า', 'ความปลอดภัยชุมชน']
    },
    {
      id: 'act-2',
      title: 'การแข่งขันทักษะการติดตั้งระบบไฟฟ้าและการควบคุมอัตโนมัติระดับอาชีวศึกษา',
      category: 'การแข่งขันทักษะวิชาชีพ',
      date: 'ธันวาคม 2567',
      location: 'การแข่งขันทักษะวิชาชีพระดับภาค',
      description: 'เข้าร่วมประลองทักษะการเดินสายท่อร้อยสายไฟฟ้า การต่อวงจรควบคุมมอเตอร์ และการโปรแกรม PLC ภายใต้เวลาที่จำกัด',
      imageUrl: '/images/helixion_reference.png',
      badge: 'เกียรติบัตรรางวัลทักษะยอดเยี่ยม',
      tags: ['การแข่งขันทักษะ', 'PLC Competition', 'Electrical Wiring']
    },
    {
      id: 'act-3',
      title: 'การจัดนิทรรศการแสดงผลงานสิ่งประดิษฐ์คนรุ่นใหม่และนวัตกรรมพลังงานสะอาด',
      category: 'นวัตกรรมและผลงานวิจัย',
      date: 'สิงหาคม 2568',
      location: 'มทร.อีสาน วิทยาเขตขอนแก่น',
      description: 'นำเสนอผลงานชุดจำลองระบบผลิตไฟฟ้าพลังงานแสงอาทิตย์แบบ Smart Microgrid พร้อมระบบบันทึกข้อมูลและรายงานผลผ่าน IoT',
      imageUrl: '/images/helixion_reference.png',
      badge: 'ผลงานดีเด่นด้านนวัตกรรม',
      tags: ['นวัตกรรมพลังงาน', 'Solar Smart Microgrid', 'IoT Telemetry']
    }
  ],
  uploadedFiles: [
    {
      id: 'file-1',
      name: 'rmuti_logo.jpg',
      size: 15987,
      type: 'image/jpeg',
      url: '/images/rmuti_logo.jpg',
      uploadedAt: new Date().toISOString(),
      category: 'image'
    },
    {
      id: 'file-2',
      name: 'helixion_reference.png',
      size: 1298502,
      type: 'image/png',
      url: '/images/helixion_reference.png',
      uploadedAt: new Date().toISOString(),
      category: 'image'
    }
  ],
  themeConfig: {
    mode: 'dark',
    accentColor: 'cyan',
    glowIntensity: 1.0,
    oscilloscopeSpeed: 2,
    circuitAnimation: true,
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  siteTexts: {
    heroBadge: 'ครุศาสตร์อุตสาหกรรมไฟฟ้า • RMUTI Khon Kaen',
    heroCtaExplore: 'สำรวจชิ้นงาน & โครงงาน',
    heroCtaProfile: 'ข้อมูลส่วนตัว (Profile)',
    heroCtaContact: 'ช่องทางติดต่อ',
    voltageLabel: 'VOLTAGE',
    currentLabel: 'CURRENT',
    gasLabel: 'DISCHARGE GAS',
    pressureLabel: 'VACUUM / PRESSURE',
    oscilloscopeTitle: 'LIVE CIRCUIT OSCILLOSCOPE FEED',
    oscilloscopeSubtitle: 'การจำลองสัญญาณรูปคลื่นไซน์ (Sine Waveform) และการมอดูเลตความถี่ทางไฟฟ้า',
    profileBadge: 'Personal Biography & Identity',
    profileTitle: 'ข้อมูลส่วนตัว',
    profileSubtitle: 'ประวัติส่วนบุคคล ข้อมูลการศึกษา ประจำสาขาครุศาสตร์อุตสาหกรรมไฟฟ้า มทร.อีสาน วิทยาเขตขอนแก่น',
    educationBadge: 'Academic Pathway & Qualifications',
    educationTitle: 'ประวัติการศึกษา (Education Timeline)',
    educationSubtitle: 'เส้นทางการศึกษาจากระดับพื้นฐาน สู่วิชาชีพช่างไฟฟ้า และระดับปริญญาตรีครุศาสตร์อุตสาหกรรม',
    coursesBadge: 'Curriculum & Applied Engineering Work',
    coursesTitle: 'รายวิชาและชิ้นงาน (Courses & Projects)',
    activitiesBadge: 'Extracurricular, Competitions & Leadership',
    activitiesTitle: 'กิจกรรมและผลงาน (Activities & Honors)',
    activitiesSubtitle: 'ผลงานการแข่งขันทางวิชาชีพช่างไฟฟ้า กิจกรรมจิตอาสาเพื่อสังคม และนิทรรศการนวัตกรรม',
    footerContactHeading: 'ช่องทางการติดต่ออย่างเป็นทางการ',
    footerNote: 'แฟ้มสะสมผลงานทางวิชาการและวิชาชีพ (Electronic Portfolio for Vocational & Engineering Education)',
    footerCopyright: '© 2026 จัดทำโดย นาย อภิณัฐชรัชน์ มณีรัตน์ — สงวนลิขสิทธิ์'
  }
};
