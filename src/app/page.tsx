'use client';

import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from '@/data/initialData';
import { PortfolioData } from '@/types/portfolio';
import { StorageService } from '@/lib/storageService';
import { Sidebar } from '@/components/Sidebar';
import { NavbarMobile } from '@/components/NavbarMobile';
import { HeroSection } from '@/components/HeroSection';
import { ProfileSection } from '@/components/ProfileSection';
import { EducationSection } from '@/components/EducationSection';
import { CoursesSection } from '@/components/CoursesSection';
import { ActivitiesSection } from '@/components/ActivitiesSection';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';
import { AdminDrawer } from '@/components/AdminDrawer';
import { ShieldCheck, Sliders, LogOut, Save, Sparkles } from 'lucide-react';

export default function PortfolioPage() {
  const [data, setData] = useState<PortfolioData>(initialPortfolioData);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isAdminDrawerOpen, setIsAdminDrawerOpen] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // 1. โหลดข้อมูลจาก Dual-Engine Storage Service
  useEffect(() => {
    async function loadData() {
      try {
        const loaded = await StorageService.loadPortfolioData();
        setData(loaded);
        setIsDarkMode(loaded.themeConfig.mode === 'dark');
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
      // ตรวจสอบทั้ง Ctrl+Alt+P และ Cmd+Alt+P (สำหรับ macOS)
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

  // ฟังก์ชันสลับโหมด มืด / สว่าง
  const handleToggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    const updated: PortfolioData = {
      ...data,
      themeConfig: {
        ...data.themeConfig,
        mode: nextMode ? 'dark' : 'light'
      }
    };
    setData(updated);
    StorageService.savePortfolioData(updated);
  };

  // จัดการบันทึกข้อมูล
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

  // การอัปเดตข้อมูลส่วนตัว
  const handleUpdateProfile = (field: keyof PortfolioData['profile'], value: string) => {
    const updated: PortfolioData = {
      ...data,
      profile: {
        ...data.profile,
        [field]: value
      }
    };
    handleSaveData(updated);
  };

  // อัปโหลดรูปประจำตัว
  const handleUploadAvatar = async (file: File) => {
    try {
      const record = await StorageService.uploadFile(file);
      const updated: PortfolioData = {
        ...data,
        profile: {
          ...data.profile,
          avatarUrl: record.url
        },
        uploadedFiles: [record, ...data.uploadedFiles]
      };
      handleSaveData(updated);
    } catch (err) {
      alert('อัปโหลดรูปภาพล้มเหลว กรุณาลองใหม่อีกครั้ง');
    }
  };

  // การอัปเดตประวัติการศึกษา
  const handleUpdateEducationItem = (id: string, field: any, value: string) => {
    const updatedList = data.education.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    const updated: PortfolioData = { ...data, education: updatedList };
    handleSaveData(updated);
  };

  // การอัปเดตรายวิชา
  const handleUpdateCourse = (courseId: string, field: any, value: string) => {
    const updatedList = data.courses.map((c) =>
      c.id === courseId ? { ...c, [field]: value } : c
    );
    const updated: PortfolioData = { ...data, courses: updatedList };
    handleSaveData(updated);
  };

  // การอัปเดตโครงงานในวิชา
  const handleUpdateProject = (courseId: string, projId: string, field: any, value: string) => {
    const updatedList = data.courses.map((c) => {
      if (c.id === courseId) {
        const updatedProjects = c.projects.map((p) =>
          p.id === projId ? { ...p, [field]: value } : p
        );
        return { ...c, projects: updatedProjects };
      }
      return c;
    });
    const updated: PortfolioData = { ...data, courses: updatedList };
    handleSaveData(updated);
  };

  // การอัปเดตกิจกรรม
  const handleUpdateActivity = (actId: string, field: any, value: string) => {
    const updatedList = data.activities.map((a) =>
      a.id === actId ? { ...a, [field]: value } : a
    );
    const updated: PortfolioData = { ...data, activities: updatedList };
    handleSaveData(updated);
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
    <div className={`min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] circuit-grid flex flex-col selection:bg-sky-500 selection:text-white`}>
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium transition shadow-sm"
          >
            <Sliders size={14} />
            <span>เปิดแผงควบคุม</span>
          </button>

          <button
            onClick={handleLogout}
            title="ออกจากระบบผู้ดูแล"
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-950/80 hover:text-rose-300 text-slate-400 transition"
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
          onNavigate={handleNavigate}
        />

        {/* Section 2: Personal Profile */}
        <ProfileSection
          data={data}
          isAdmin={isAdmin}
          onUpdateProfile={handleUpdateProfile}
          onUploadAvatar={handleUploadAvatar}
        />

        {/* Section 3: Education Timeline */}
        <EducationSection
          data={data}
          isAdmin={isAdmin}
          onUpdateEducationItem={handleUpdateEducationItem}
        />

        {/* Section 4: Courses & Works */}
        <CoursesSection
          data={data}
          isAdmin={isAdmin}
          onUpdateCourse={handleUpdateCourse}
          onUpdateProject={handleUpdateProject}
        />

        {/* Section 5: Activities & Achievements */}
        <ActivitiesSection
          data={data}
          isAdmin={isAdmin}
          onUpdateActivity={handleUpdateActivity}
        />

        {/* Section 6: Official Footer */}
        <Footer
          data={data}
          isAdmin={isAdmin}
          onUpdateProfile={handleUpdateProfile}
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
      />
    </div>
  );
}
