'use client';

import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from '@/data/initialData';
import { PortfolioData, SectionTextConfig, UploadedFileRecord, CourseItem, CourseProject, ActivityItem, EducationItem, ColorThemePreset } from '@/types/portfolio';
import { StorageService } from '@/lib/storageService';
import { Sidebar } from '@/components/Sidebar';
import { NavbarMobile } from '@/components/NavbarMobile';
import { HeroSection } from '@/components/HeroSection';
import { ProfileSection } from '@/components/ProfileSection';
import { EducationSection } from '@/components/EducationSection';
import { CoursesSection } from '@/components/CoursesSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { Footer } from '@/components/Footer';
import { BottomWidgets } from '@/components/BottomWidgets';
import { AuthModal } from '@/components/AuthModal';
import { AdminDrawer } from '@/components/AdminDrawer';
import { ThemeMatrixModal } from '@/components/ThemeMatrixModal';
import { themePresets, applyThemePreset, getThemePresetById } from '@/data/themePresets';
import { getTheme10kById } from '@/lib/themeEngine10k';
import { VfxLaboratoryOverlay } from '@/components/VfxLaboratoryOverlay';
import { VfxLaboratoryModal } from '@/components/VfxLaboratoryModal';
import { VfxControlDock } from '@/components/VfxControlDock';
import { ALL_100_VFX, VfxPresetCombo } from '@/lib/vfxEngine100';
import { retroAudio } from '@/lib/retroAudio';
import { ShieldCheck, Sliders, LogOut, Sparkles, Palette } from 'lucide-react';

export default function PortfolioPage() {
  const [data, setData] = useState<PortfolioData>(initialPortfolioData);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isAdminDrawerOpen, setIsAdminDrawerOpen] = useState<boolean>(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);
  const [isVfxLabOpen, setIsVfxLabOpen] = useState<boolean>(false);
  const [currentPresetId, setCurrentPresetId] = useState<string>('hikari-classic');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // 100 VFX Suite Active State
  const [activeVfxIds, setActiveVfxIds] = useState<Set<string>>(() => new Set(
    ALL_100_VFX.filter(f => f.defaultEnabled).map(f => f.id)
  ));
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(false);

  // 1. โหลดข้อมูลจาก Dual-Engine Storage Service & Theme Preset
  useEffect(() => {
    async function loadData() {
      try {
        const loaded = await StorageService.loadPortfolioData();
        setData(loaded);
        
        // Restore saved theme preset and mode from localStorage or saved data
        const savedPreset = localStorage.getItem('hikari_theme_preset') || loaded.themeConfig.presetId || 'hikari-classic';
        const savedMode = (localStorage.getItem('hikari_theme_mode') || loaded.themeConfig.mode || 'dark') as 'dark' | 'light';
        setCurrentPresetId(savedPreset);
        setIsDarkMode(savedMode === 'dark');
        const presetObj = getTheme10kById(savedPreset);
        applyThemePreset(presetObj, savedMode);

        // Restore 100 VFX suite settings
        try {
          const savedVfx = localStorage.getItem('hikari_active_100_vfx');
          if (savedVfx) {
            setActiveVfxIds(new Set(JSON.parse(savedVfx)));
          }
          setIsAudioEnabled(retroAudio.getIsAudioEnabled());
        } catch {}
      } catch (err) {
        console.warn('Load portfolio data error:', err);
      }
    }
    loadData();

    // เช็ค session ผู้ดูแลระบบเดิม
    const savedAdminSession = sessionStorage.getItem('arminat_admin_session');
    if (savedAdminSession === 'true') {
      setIsAdmin(true);
    }
  }, []);

  // 2. จัดการคีย์ลัดลับ Ctrl + Alt + P เพื่อเปิดระบบล็อกอิน
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'p' || e.key === 'P' || e.code === 'KeyP')) {
        e.preventDefault();
        setIsAuthModalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 3. ปรับ Class ของ Root ตาม Dark/Light Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('theme-light');
      document.body.classList.remove('theme-light');
    } else {
      document.documentElement.classList.add('theme-light');
      document.body.classList.add('theme-light');
    }
  }, [isDarkMode]);

  // สลับโหมด มืด / สว่าง (Morning / Night) โดยคงโทนสีปัจจุบันไว้
  const handleToggleTheme = () => {
    const nextMode = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(nextMode === 'dark');
    
    const presetObj = getTheme10kById(currentPresetId);
    applyThemePreset(presetObj, nextMode);
    retroAudio.playChime(nextMode === 'light');

    const updated: PortfolioData = {
      ...data,
      themeConfig: {
        ...data.themeConfig,
        mode: nextMode,
        presetId: currentPresetId
      }
    };
    setData(updated);
    StorageService.savePortfolioData(updated);
  };

  // สลับโทนสีจาก 10,000 แบบ (Quantum Color Matrix) โดยรักษาโหมดปัจจุบันหรือตามที่เลือก
  const handleSelectTheme = (preset: ColorThemePreset, mode?: 'dark' | 'light') => {
    const targetMode = mode || (isDarkMode ? 'dark' : 'light');
    setCurrentPresetId(preset.id);
    setIsDarkMode(targetMode === 'dark');
    applyThemePreset(preset, targetMode);
    retroAudio.playThemeSwitch();

    const updated: PortfolioData = {
      ...data,
      themeConfig: {
        ...data.themeConfig,
        mode: targetMode,
        presetId: preset.id
      }
    };
    setData(updated);
    StorageService.savePortfolioData(updated);
  };

  // 100 VFX Suite Control Handlers
  const handleToggleVfx = (id: string) => {
    setActiveVfxIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem('hikari_active_100_vfx', JSON.stringify(Array.from(next)));
      } catch {}
      return next;
    });
  };

  const handleApplyVfxPreset = (combo: VfxPresetCombo) => {
    const next = new Set(combo.effectIds);
    setActiveVfxIds(next);
    try {
      localStorage.setItem('hikari_active_100_vfx', JSON.stringify(Array.from(next)));
    } catch {}
  };

  const handleEnableAllVfx = () => {
    const all = new Set(ALL_100_VFX.map(f => f.id));
    setActiveVfxIds(all);
    try {
      localStorage.setItem('hikari_active_100_vfx', JSON.stringify(Array.from(all)));
    } catch {}
  };

  const handleDisableAllVfx = () => {
    const empty = new Set<string>();
    setActiveVfxIds(empty);
    try {
      localStorage.setItem('hikari_active_100_vfx', JSON.stringify([]));
    } catch {}
  };

  const handleToggleSound = () => {
    const active = retroAudio.toggleMute();
    setIsAudioEnabled(active);
  };


  // จัดการบันทึกข้อมูลและซิงค์ Supabase
  const handleSaveData = async (newData: PortfolioData) => {
    setData(newData);
    setSaveStatus('กำลังบันทึกข้อมูล...');
    const res = await StorageService.savePortfolioData(newData);
    if (res.success) {
      setSaveStatus('บันทึกข้อมูลเรียบร้อยแล้ว!');
    } else {
      setSaveStatus('บันทึกผิดพลาด: ' + res.error);
    }
    setTimeout(() => setSaveStatus(null), 3000);
  };

  // อัปเดตข้อความทั่วไปของส่วนต่างๆ (Site Texts)
  const handleUpdateSiteText = (field: keyof SectionTextConfig, value: string) => {
    const updated: PortfolioData = {
      ...data,
      siteTexts: {
        ...data.siteTexts,
        [field]: value
      }
    };
    handleSaveData(updated);
  };

  // บันทึกไฟล์ใหม่ลงคลังไฟล์
  const handleFileUploaded = (record: UploadedFileRecord) => {
    const updated: PortfolioData = {
      ...data,
      uploadedFiles: [record, ...data.uploadedFiles]
    };
    handleSaveData(updated);
  };

  // อัปเดตข้อมูลส่วนตัว
  const handleUpdateProfile = (field: keyof PortfolioData['profile'], value: any) => {
    const updated: PortfolioData = {
      ...data,
      profile: {
        ...data.profile,
        [field]: value
      }
    };
    handleSaveData(updated);
  };

  // === จัดการประวัติการศึกษา ===
  const handleUpdateEducationItem = (id: string, field: any, value: string) => {
    const updatedList = data.education.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    handleSaveData({ ...data, education: updatedList });
  };

  const handleAddEducation = () => {
    const newItem: EducationItem = {
      id: 'edu_' + Date.now(),
      level: 'ระดับการศึกษาใหม่',
      institution: 'ชื่อสถาบันการศึกษา',
      period: 'สำเร็จการศึกษา',
      majorOrBranch: 'สาขาวิชา',
      description: 'คำอธิบายประวัติการศึกษาและการเรียนรู้',
      iconType: 'school',
      badge: 'การศึกษา'
    };
    handleSaveData({ ...data, education: [...data.education, newItem] });
  };

  const handleDeleteEducation = (id: string) => {
    if (confirm('ยืนยันการลบประวัติการศึกษานี้?')) {
      handleSaveData({ ...data, education: data.education.filter(e => e.id !== id) });
    }
  };

  // === จัดการรายวิชาและโครงงาน ===
  const handleUpdateCourse = (courseId: string, field: any, value: any) => {
    const updatedList = data.courses.map((c) =>
      c.id === courseId ? { ...c, [field]: value } : c
    );
    handleSaveData({ ...data, courses: updatedList });
  };

  const handleAddCourse = () => {
    const newCourse: CourseItem = {
      id: 'course_' + Date.now(),
      code: 'EE-NEW',
      title: 'ชื่อรายวิชาใหม่',
      category: 'วิชาชีพวิศวกรรมไฟฟ้า',
      credits: '3 (2-2-5)',
      description: 'คำอธิบายรายวิชาและเนื้อหาการเรียนรู้',
      projects: []
    };
    handleSaveData({ ...data, courses: [newCourse, ...data.courses] });
  };

  const handleDeleteCourse = (courseId: string) => {
    if (confirm('ยืนยันการลบรายวิชานี้พร้อมชิ้นงานทั้งหมด?')) {
      handleSaveData({ ...data, courses: data.courses.filter(c => c.id !== courseId) });
    }
  };

  const handleUpdateProject = (courseId: string, projId: string, field: any, value: any) => {
    const updatedList = data.courses.map((c) => {
      if (c.id === courseId) {
        const updatedProjects = c.projects.map((p) =>
          p.id === projId ? { ...p, [field]: value } : p
        );
        return { ...c, projects: updatedProjects };
      }
      return c;
    });
    handleSaveData({ ...data, courses: updatedList });
  };

  const handleAddProject = (courseId: string) => {
    const newProj: CourseProject = {
      id: 'proj_' + Date.now(),
      title: 'ชิ้นงาน/โครงงานใหม่',
      description: 'คำอธิบายผลการทดลองและการทำงานของชิ้นงาน',
      date: 'ภาคเรียนปัจจุบัน',
      imageUrl: '/images/helixion_reference.png',
      tags: ['โครงงานใหม่', 'วิศวกรรมไฟฟ้า'],
      highlights: ['จุดเด่นของชิ้นงาน']
    };

    const updatedList = data.courses.map((c) => {
      if (c.id === courseId) {
        return { ...c, projects: [newProj, ...c.projects] };
      }
      return c;
    });
    handleSaveData({ ...data, courses: updatedList });
  };

  const handleDeleteProject = (courseId: string, projId: string) => {
    if (confirm('ยืนยันการลบชิ้นงานนี้?')) {
      const updatedList = data.courses.map((c) => {
        if (c.id === courseId) {
          return { ...c, projects: c.projects.filter(p => p.id !== projId) };
        }
        return c;
      });
      handleSaveData({ ...data, courses: updatedList });
    }
  };

  // === จัดการกิจกรรมและผลงาน ===
  const handleUpdateActivity = (actId: string, field: any, value: any) => {
    const updatedList = data.activities.map((a) =>
      a.id === actId ? { ...a, [field]: value } : a
    );
    handleSaveData({ ...data, activities: updatedList });
  };

  const handleAddActivity = () => {
    const newAct: ActivityItem = {
      id: 'act_' + Date.now(),
      title: 'ชื่อกิจกรรมหรือผลงานใหม่',
      category: 'กิจกรรมจิตอาสาและสโมสร',
      date: '2568',
      location: 'ขอนแก่น',
      description: 'รายละเอียดกิจกรรม ความสำเร็จ และบทบาทหน้าที่',
      imageUrl: '/images/helixion_reference.png',
      badge: 'กิจกรรมใหม่',
      tags: ['กิจกรรม', 'วิชาชีพไฟฟ้า']
    };
    handleSaveData({ ...data, activities: [newAct, ...data.activities] });
  };

  const handleDeleteActivity = (actId: string) => {
    if (confirm('ยืนยันการลบกิจกรรมนี้?')) {
      handleSaveData({ ...data, activities: data.activities.filter(a => a.id !== actId) });
    }
  };

  // ล็อกอินสำเร็จ
  const handleLoginSuccess = () => {
    setIsAdmin(true);
    sessionStorage.setItem('arminat_admin_session', 'true');
    setIsAdminDrawerOpen(true);
  };

  // ออกจากระบบ
  const handleLogout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('arminat_admin_session');
    setIsAdminDrawerOpen(false);
  };

  // นำทางไปยัง Section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] pixel-grid flex flex-col selection:bg-pink-500 selection:text-white relative`}>
      {/* 100 Retro VFX Suite Multi-Layer Canvas & DOM Overlay */}
      <VfxLaboratoryOverlay activeIds={activeVfxIds} />

      {/* Floating Interactive 100 VFX Control Dock */}
      <VfxControlDock
        activeCount={activeVfxIds.size}
        onOpenVfxLab={() => setIsVfxLabOpen(true)}
        isCrtActive={activeVfxIds.has('fx-001')}
        isSparksActive={activeVfxIds.has('fx-011')}
        isMatrixActive={activeVfxIds.has('fx-021')}
        isSoundActive={isAudioEnabled}
        onToggleEffect={handleToggleVfx}
        onToggleSound={handleToggleSound}
      />

      {/* 1. Desktop Left Sidebar Navigation */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        portfolioData={data}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        isAdmin={isAdmin}
        onOpenLogin={() => setIsAuthModalOpen(true)}
        onOpenAdminDrawer={() => setIsAdminDrawerOpen(true)}
        onOpenThemeMatrix={() => setIsThemeModalOpen(true)}
        onOpenVfxLab={() => setIsVfxLabOpen(true)}
      />

      {/* 2. Mobile Responsive Top Header & Bottom Navigation */}
      <NavbarMobile
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        isAdmin={isAdmin}
        onOpenLogin={() => setIsAuthModalOpen(true)}
        onOpenAdminDrawer={() => setIsAdminDrawerOpen(true)}
        onOpenThemeMatrix={() => setIsThemeModalOpen(true)}
        onOpenVfxLab={() => setIsVfxLabOpen(true)}
      />

      {/* 3. Floating Admin Status Bar (เมื่อโหมด Admin ทำงาน) */}
      {isAdmin && (
        <aside aria-label="แถบควบคุมผู้ดูแลระบบ" className="fixed top-3 right-4 z-40 flex items-center gap-2 p-2 rounded-2xl bg-slate-900/90 border border-emerald-400/60 shadow-[0_0_25px_rgba(52,211,153,0.3)] backdrop-blur-xl text-xs">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-emerald-950/80 text-emerald-300 font-semibold">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span className="hidden sm:inline">โหมดตกแต่ง & แก้ไขเว็บ (Admin)</span>
            <span className="sm:hidden">CMS</span>
          </div>

          <button
            onClick={() => setIsAdminDrawerOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium transition shadow-sm cursor-pointer"
          >
            <Sliders size={14} />
            <span>เปิดแผงควบคุม</span>
          </button>

          <button
            onClick={handleLogout}
            title="ออกจากระบบผู้ดูแล"
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-950/80 hover:text-rose-300 text-slate-400 transition cursor-pointer"
          >
            <LogOut size={15} />
          </button>
        </aside>
      )}

      {/* Save Notification Toast */}
      {saveStatus && (
        <aside aria-label="การแจ้งเตือนการบันทึกข้อมูล" className="fixed bottom-16 sm:bottom-6 right-6 z-50 p-3 rounded-xl bg-sky-950/95 border border-sky-400 text-sky-200 text-xs flex items-center gap-2.5 shadow-[0_0_20px_rgba(56,189,248,0.4)] animate-bounce">
          <Sparkles size={16} className="text-sky-400 shrink-0" />
          <span>{saveStatus}</span>
        </aside>
      )}

      {/* 4. Main Content Area */}
      <main className="flex-1 lg:pl-72 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">
        {/* Section 1: Hero & Highlights */}
        <HeroSection
          data={data}
          isAdmin={isAdmin}
          onUpdateProfile={handleUpdateProfile}
          onUpdateSiteText={handleUpdateSiteText}
          onNavigate={handleNavigate}
        />

        {/* Hikari System OS Bottom Widgets (Updates, Health Check, Terminal) */}
        <BottomWidgets
          portfolioData={data}
          onNavigate={handleNavigate}
          onOpenThemeMatrix={() => setIsThemeModalOpen(true)}
          onOpenVfxLab={() => setIsVfxLabOpen(true)}
          isAdmin={isAdmin}
        />

        {/* Section 2: Personal Profile */}
        <ProfileSection
          data={data}
          isAdmin={isAdmin}
          onUpdateProfile={handleUpdateProfile}
          onUpdateSiteText={handleUpdateSiteText}
          onFileUploaded={handleFileUploaded}
        />

        {/* Section 3: Education Timeline */}
        <EducationSection
          data={data}
          isAdmin={isAdmin}
          onUpdateEducationItem={handleUpdateEducationItem}
          onAddEducation={handleAddEducation}
          onDeleteEducation={handleDeleteEducation}
          onUpdateSiteText={handleUpdateSiteText}
        />

        {/* Section 4: Courses & Works */}
        <CoursesSection
          data={data}
          isAdmin={isAdmin}
          onUpdateCourse={handleUpdateCourse}
          onUpdateProject={handleUpdateProject}
          onAddCourse={handleAddCourse}
          onDeleteCourse={handleDeleteCourse}
          onAddProject={handleAddProject}
          onDeleteProject={handleDeleteProject}
          onUpdateSiteText={handleUpdateSiteText}
          onFileUploaded={handleFileUploaded}
        />

        {/* Section 5: Activities & Achievements */}
        <ActivitiesSection
          data={data}
          isAdmin={isAdmin}
          onUpdateActivity={handleUpdateActivity}
          onAddActivity={handleAddActivity}
          onDeleteActivity={handleDeleteActivity}
          onUpdateSiteText={handleUpdateSiteText}
          onFileUploaded={handleFileUploaded}
        />

        {/* Section 6: Official Footer */}
        <Footer
          data={data}
          isAdmin={isAdmin}
          onUpdateProfile={handleUpdateProfile}
          onUpdateSiteText={handleUpdateSiteText}
        />
      </main>

      {/* 5. Secret Auth Modal (Ctrl + Alt + P) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* 6. Slide-Over Control Drawer for CMS */}
      <AdminDrawer
        isOpen={isAdminDrawerOpen}
        onClose={() => setIsAdminDrawerOpen(false)}
        data={data}
        onSaveData={handleSaveData}
        onLogout={handleLogout}
        onOpenThemeMatrix={() => setIsThemeModalOpen(true)}
        onOpenVfxLab={() => setIsVfxLabOpen(true)}
      />

      {/* 7. Floating Quick Theme Matrix Button (10,000 Themes) - Admin Only */}
      {isAdmin && (
        <button
          onClick={() => {
            retroAudio.playClick();
            setIsThemeModalOpen(true);
          }}
          title="เลือกโทนสีจาก 10,000 แบบ (Hikari Quantum Color Matrix)"
          className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#090b20]/90 hover:bg-[#121638] border-2 border-pink-500/60 hover:border-pink-400 text-pink-300 hover:text-white shadow-[0_0_20px_rgba(236,72,153,0.35)] backdrop-blur-md font-mono text-xs font-bold transition transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Palette size={15} className="text-pink-400 animate-pulse" />
          <span>10,000 THEMES</span>
        </button>
      )}

      {/* 8. Hikari Theme Matrix Modal (10,000 Palettes Explorer) */}
      <ThemeMatrixModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        currentPresetId={currentPresetId}
        onSelectTheme={handleSelectTheme}
        currentMode={isDarkMode ? 'dark' : 'light'}
        onToggleMode={(mode) => {
          setIsDarkMode(mode === 'dark');
          const presetObj = getTheme10kById(currentPresetId);
          applyThemePreset(presetObj, mode);
          retroAudio.playChime(mode === 'light');
        }}
      />

      {/* 9. Hikari 100 Retro VFX Laboratory Modal */}
      <VfxLaboratoryModal
        isOpen={isVfxLabOpen}
        onClose={() => setIsVfxLabOpen(false)}
        activeIds={activeVfxIds}
        onToggleVfx={handleToggleVfx}
        onApplyPreset={handleApplyVfxPreset}
        onEnableAll={handleEnableAllVfx}
        onDisableAll={handleDisableAllVfx}
      />

    </div>
  );
}
