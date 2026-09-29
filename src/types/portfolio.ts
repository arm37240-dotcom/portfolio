export interface ProfileData {
  name: string;
  nickname: string;
  studentId: string;
  university: string;
  faculty: string;
  major: string;
  phone: string;
  email: string;
  birthdate: string;
  age: string;
  nationality: string;
  ethnicity: string;
  avatarUrl: string;
  heroHeadline: string;
  heroSubheadline: string;
  bio: string;
  specialSkills: string[];
  otherInterests: string[];
  circuitVoltage: string;
  circuitCurrent: string;
  circuitGas: string;
  circuitPressure: string;
}

export interface EducationItem {
  id: string;
  level: string;
  institution: string;
  period: string;
  majorOrBranch?: string;
  description: string;
  badge?: string;
  iconType: 'school' | 'college' | 'university' | 'award';
}

export interface CourseProject {
  id: string;
  title: string;
  description: string;
  courseCode?: string;
  date: string;
  imageUrl: string;
  videoUrl?: string;
  fileUrl?: string;
  tags: string[];
  circuitDiagram?: string;
  highlights: string[];
}

export interface CourseItem {
  id: string;
  code: string;
  title: string;
  category: string;
  credits: string;
  description: string;
  projects: CourseProject[];
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  badge: string;
  certificateUrl?: string;
  tags: string[];
}

export interface UploadedFileRecord {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  uploadedAt: string;
  category: 'image' | 'video' | 'font' | 'document' | 'other';
}

export interface ColorThemePreset {
  id: string;
  name: string;
  nameEn: string;
  category: 'cyberpunk' | 'retro_console' | 'engineering' | 'code_matrix' | 'aesthetic' | 'minimal';
  mode: 'dark' | 'light';
  colors: {
    bgPrimary: string;
    bgSecondary: string;
    bgCard: string;
    borderOuter: string;
    borderInner: string;
    textMain: string;
    textMuted: string;
    accentPink: string;
    accentCyan: string;
    accentGreen: string;
    accentAmber: string;
    glowShadow: string;
    swatches: [string, string, string, string];
  };
}

export type ThemeColors = ColorThemePreset['colors'];
export type PresetMode = 'dark' | 'light';

export interface ThemeConfig {
  mode: 'dark' | 'light';
  presetId?: string;
  accentColor: 'cyan' | 'blue' | 'emerald' | 'amber' | 'purple';
  glowIntensity: number; // 0.2 to 2.0
  oscilloscopeSpeed: number; // 1 to 5
  circuitAnimation: boolean;
  fontFamily: string;
  customFontUrl?: string;
}

export interface SectionTextConfig {
  heroBadge: string;
  heroCtaExplore: string;
  heroCtaProfile: string;
  heroCtaContact: string;
  voltageLabel: string;
  currentLabel: string;
  gasLabel: string;
  pressureLabel: string;
  oscilloscopeTitle: string;
  oscilloscopeSubtitle: string;
  profileBadge: string;
  profileTitle: string;
  profileSubtitle: string;
  educationBadge: string;
  educationTitle: string;
  educationSubtitle: string;
  coursesBadge: string;
  coursesTitle: string;
  activitiesBadge: string;
  activitiesTitle: string;
  activitiesSubtitle: string;
  footerContactHeading: string;
  footerNote: string;
  footerCopyright: string;
}

export interface PortfolioData {
  profile: ProfileData;
  education: EducationItem[];
  courses: CourseItem[];
  activities: ActivityItem[];
  uploadedFiles: UploadedFileRecord[];
  themeConfig: ThemeConfig;
  siteTexts: SectionTextConfig;
}
