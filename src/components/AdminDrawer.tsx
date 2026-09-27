'use client';

import React, { useState } from 'react';
import { 
  X, 
  Upload, 
  FileText, 
  Film, 
  Image as ImageIcon, 
  Type, 
  Sliders, 
  Database, 
  Sparkles, 
  Plus, 
  Trash2, 
  Edit3, 
  Copy, 
  Check, 
  LogOut, 
  RefreshCw, 
  Layers, 
  Cpu, 
  ShieldCheck,
  Download,
  UploadCloud
} from 'lucide-react';
import { PortfolioData, UploadedFileRecord, CourseItem, ActivityItem, EducationItem } from '@/types/portfolio';
import { StorageService } from '@/lib/storageService';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSaveData: (newData: PortfolioData) => void;
  onLogout: () => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  data,
  onSaveData,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState<'files' | 'content' | 'fx' | 'db'>('files');
  const [isUploading, setIsUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Form states for adding items
  const [newCourseTitle, setNewCourseTitle] = useState('');
  const [newCourseCode, setNewCourseCode] = useState('');
  const [newCourseCategory, setNewCourseCategory] = useState<'วิชาชีพวิศวกรรมไฟฟ้า' | 'วิชาชีพครู' | 'วิชาการทั่วไป'>('วิชาชีพวิศวกรรมไฟฟ้า');
  const [newCourseDesc, setNewCourseDesc] = useState('');

  const [newActTitle, setNewActTitle] = useState('');
  const [newActCategory, setNewActCategory] = useState<'กิจกรรมจิตอาสาและสโมสร' | 'การแข่งขันทักษะวิชาชีพ' | 'นวัตกรรมและผลงานวิจัย' | 'การอบรมและสัมมนา'>('กิจกรรมจิตอาสาและสโมสร');
  const [newActDate, setNewActDate] = useState('');
  const [newActLocation, setNewActLocation] = useState('');
  const [newActDesc, setNewActDesc] = useState('');

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 3500);
  };

  // Upload handler for all file types
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setIsUploading(true);

    try {
      const file = e.target.files[0];
      const uploadedRecord = await StorageService.uploadFile(file);

      const updatedFiles = [uploadedRecord, ...data.uploadedFiles];
      const updatedData = { ...data, uploadedFiles: updatedFiles };
      onSaveData(updatedData);

      showToast(`อัปโหลดไฟล์ "${file.name}" เรียบร้อยแล้ว!`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      showToast(`เกิดข้อผิดพลาดในการอัปโหลด: ${msg}`);
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
    showToast('คัดลอก URL ไฟล์แล้ว นำไปวางในเนื้อหาหรือรูปภาพได้ทันที!');
  };

  const handleDeleteFile = (id: string) => {
    const updated = {
      ...data,
      uploadedFiles: data.uploadedFiles.filter(f => f.id !== id)
    };
    onSaveData(updated);
    showToast('ลบไฟล์ออกจากรายการแล้ว');
  };

  // Content Actions
  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseTitle.trim()) return;

    const newCourse: CourseItem = {
      id: 'course_' + Date.now(),
      code: newCourseCode.trim() || 'EE-NEW',
      title: newCourseTitle.trim(),
      category: newCourseCategory,
      credits: '3 (2-2-5)',
      description: newCourseDesc.trim() || 'คำอธิบายรายวิชาใหม่',
      projects: []
    };

    const updated = {
      ...data,
      courses: [newCourse, ...data.courses]
    };
    onSaveData(updated);
    setNewCourseTitle('');
    setNewCourseCode('');
    setNewCourseDesc('');
    showToast('เพิ่มรายวิชาใหม่สำเร็จ!');
  };

  const handleDeleteCourse = (id: string) => {
    const updated = {
      ...data,
      courses: data.courses.filter(c => c.id !== id)
    };
    onSaveData(updated);
    showToast('ลบรายวิชาแล้ว');
  };

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newActTitle.trim()) return;

    const newAct: ActivityItem = {
      id: 'act_' + Date.now(),
      title: newActTitle.trim(),
      category: newActCategory,
      date: newActDate.trim() || '2568',
      location: newActLocation.trim() || 'ขอนแก่น',
      description: newActDesc.trim() || 'รายละเอียดกิจกรรมใหม่',
      imageUrl: '/images/helixion_reference.png',
      badge: 'กิจกรรมใหม่',
      tags: ['กิจกรรม', 'วิชาชีพไฟฟ้า']
    };

    const updated = {
      ...data,
      activities: [newAct, ...data.activities]
    };
    onSaveData(updated);
    setNewActTitle('');
    setNewActDate('');
    setNewActLocation('');
    setNewActDesc('');
    showToast('เพิ่มกิจกรรมและผลงานใหม่สำเร็จ!');
  };

  const handleDeleteActivity = (id: string) => {
    const updated = {
      ...data,
      activities: data.activities.filter(a => a.id !== id)
    };
    onSaveData(updated);
    showToast('ลบกิจกรรมแล้ว');
  };

  // FX Controls
  const handleThemeConfigChange = (field: keyof PortfolioData['themeConfig'], value: unknown) => {
    const updated = {
      ...data,
      themeConfig: {
        ...data.themeConfig,
        [field]: value
      }
    };
    onSaveData(updated);
  };

  // Export / Import
  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    showToast('ดาวน์โหลดไฟล์สำรองข้อมูล JSON เรียบร้อยแล้ว!');
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        onSaveData(parsed);
        showToast('นำเข้าข้อมูลสำเร็จและอัปเดตหน้าเว็บแล้ว!');
      } catch (err) {
        showToast('ไฟล์ JSON ไม่ถูกต้อง กรุณาตรวจสอบ');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleResetToDefault = () => {
    if (confirm('คุณแน่ใจหรือไม่ว่าต้องการคืนค่าหน้าเว็บและข้อมูลทั้งหมดเป็นค่าเริ่มต้นจากระบบ?')) {
      const defaultData = StorageService.resetToDefault();
      onSaveData(defaultData);
      showToast('คืนค่าข้อมูลเริ่มต้นเรียบร้อยแล้ว');
    }
  };

  const connectionStatus = StorageService.getConnectionStatus();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md sm:max-w-lg bg-[#030712] border-l border-sky-500/30 text-slate-200 flex flex-col shadow-2xl">
          {/* Drawer Header */}
          <div className="p-5 border-b border-sky-500/20 bg-slate-950/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-400">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">แผงควบคุมผู้ดูแลระบบ (CMS)</h3>
                <p className="text-[11px] text-sky-400/80 font-mono">
                  ตกแต่ง แก้ไข เพิ่ม/ลบ และอัปโหลดไฟล์
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Toast Alert */}
          {statusMessage && (
            <div className="m-3 p-3 rounded-xl bg-sky-950/90 border border-sky-400/60 text-sky-200 text-xs flex items-center gap-2 shadow-lg animate-pulse">
              <Sparkles size={14} className="text-sky-400 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Drawer Tabs */}
          <div className="flex items-center border-b border-sky-500/15 bg-slate-950/50 px-3 pt-2 gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab('files')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-t-lg transition border-b-2 ${
                activeTab === 'files'
                  ? 'border-sky-400 text-sky-400 bg-slate-900/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Upload size={14} />
              <span>อัปโหลดไฟล์</span>
            </button>

            <button
              onClick={() => setActiveTab('content')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-t-lg transition border-b-2 ${
                activeTab === 'content'
                  ? 'border-sky-400 text-sky-400 bg-slate-900/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers size={14} />
              <span>จัดการเนื้อหา</span>
            </button>

            <button
              onClick={() => setActiveTab('fx')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-t-lg transition border-b-2 ${
                activeTab === 'fx'
                  ? 'border-sky-400 text-sky-400 bg-slate-900/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sliders size={14} />
              <span>สไตล์ & เอฟเฟกต์</span>
            </button>

            <button
              onClick={() => setActiveTab('db')}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-t-lg transition border-b-2 ${
                activeTab === 'db'
                  ? 'border-sky-400 text-sky-400 bg-slate-900/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Database size={14} />
              <span>คลาวด์ & สำรอง</span>
            </button>
          </div>

          {/* Tab Content Container */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {/* TAB 1: FILE UPLOADER */}
            {activeTab === 'files' && (
              <div className="space-y-5">
                {/* Upload Drop Zone */}
                <label className="border-2 border-dashed border-sky-500/40 hover:border-sky-400/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer bg-slate-950/40 hover:bg-slate-900/40 transition group">
                  <div className="p-3 rounded-full bg-sky-950/80 text-sky-400 group-hover:scale-110 transition mb-3">
                    <Upload size={24} />
                  </div>
                  <span className="text-sm font-bold text-white mb-1">
                    {isUploading ? 'กำลังอัปโหลดไฟล์...' : 'คลิกเพื่อเลือกไฟล์ หรือลากไฟล์มาวาง'}
                  </span>
                  <span className="text-xs text-slate-400 max-w-xs">
                    รองรับทุกประเภท: วิดีโอ (MP4), รูปภาพ (PNG/JPG), ฟอนต์ (TTF/WOFF), เอกสาร (PDF/DOCX)
                  </span>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    disabled={isUploading}
                    className="hidden"
                  />
                </label>

                {/* Uploaded Files List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>ไฟล์ทั้งหมดในระบบ ({data.uploadedFiles.length})</span>
                    <span>คลิกเพื่อคัดลอก URL</span>
                  </div>

                  <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                    {data.uploadedFiles.map((file) => {
                      let Icon = FileText;
                      if (file.category === 'image') Icon = ImageIcon;
                      else if (file.category === 'video') Icon = Film;
                      else if (file.category === 'font') Icon = Type;

                      return (
                        <div
                          key={file.id}
                          className="p-3 rounded-xl bg-slate-900/80 border border-sky-500/20 hover:border-sky-500/40 flex items-center justify-between gap-3 text-xs"
                        >
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <div className="p-2 rounded-lg bg-slate-800 text-sky-400 shrink-0">
                              <Icon size={16} />
                            </div>
                            <div className="truncate">
                              <p className="font-semibold text-white truncate max-w-[180px]">{file.name}</p>
                              <p className="text-[10px] text-slate-400 font-mono">
                                {(file.size / 1024).toFixed(1)} KB • {file.category}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => copyToClipboard(file.url)}
                              title="คัดลอก URL ไฟล์"
                              className="p-1.5 rounded-lg bg-slate-800 text-sky-300 hover:bg-sky-900/60 transition"
                            >
                              {copiedUrl === file.url ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                            </button>
                            <button
                              onClick={() => handleDeleteFile(file.id)}
                              title="ลบไฟล์"
                              className="p-1.5 rounded-lg bg-slate-800 text-rose-400 hover:bg-rose-950/60 transition"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CONTENT MANAGEMENT */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                {/* Add New Course */}
                <div className="p-4 rounded-xl electric-glass border border-sky-500/30 space-y-3">
                  <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Plus size={14} />
                    <span>เพิ่มรายวิชาใหม่ (Add Course)</span>
                  </h4>
                  <form onSubmit={handleAddCourse} className="space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="รหัสวิชา (เช่น EE-301)"
                        value={newCourseCode}
                        onChange={(e) => setNewCourseCode(e.target.value)}
                        className="p-2 rounded-lg bg-slate-900 border border-sky-500/30 text-white placeholder-slate-500"
                        required
                      />
                      <select
                        value={newCourseCategory}
                        onChange={(e) => setNewCourseCategory(e.target.value as any)}
                        className="p-2 rounded-lg bg-slate-900 border border-sky-500/30 text-white"
                      >
                        <option value="วิชาชีพวิศวกรรมไฟฟ้า">วิชาชีพวิศวกรรมไฟฟ้า</option>
                        <option value="วิชาชีพครู">วิชาชีพครู</option>
                        <option value="วิชาการทั่วไป">วิชาการทั่วไป</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      placeholder="ชื่อวิชา (ภาษาไทยหรืออังกฤษ)"
                      value={newCourseTitle}
                      onChange={(e) => setNewCourseTitle(e.target.value)}
                      className="w-full p-2 rounded-lg bg-slate-900 border border-sky-500/30 text-white placeholder-slate-500"
                      required
                    />
                    <textarea
                      placeholder="คำอธิบายรายวิชาโดยสรุป"
                      value={newCourseDesc}
                      onChange={(e) => setNewCourseDesc(e.target.value)}
                      className="w-full p-2 rounded-lg bg-slate-900 border border-sky-500/30 text-white placeholder-slate-500 h-16"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition"
                    >
                      บันทึกรายวิชาใหม่
                    </button>
                  </form>
                </div>

                {/* Course List & Delete */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400">รายการรายวิชาปัจจุบัน ({data.courses.length})</span>
                  {data.courses.map((course) => (
                    <div key={course.id} className="p-3 rounded-lg bg-slate-900/60 border border-sky-500/20 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-mono text-sky-400 font-bold">{course.code}</span>
                        <p className="font-semibold text-white truncate max-w-[220px]">{course.title}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteCourse(course.id)}
                        className="p-1.5 text-rose-400 hover:bg-rose-950/60 rounded transition"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add New Activity */}
                <div className="p-4 rounded-xl electric-glass border border-sky-500/30 space-y-3 pt-4">
                  <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Plus size={14} />
                    <span>เพิ่มกิจกรรม / ผลงาน (Add Activity)</span>
                  </h4>
                  <form onSubmit={handleAddActivity} className="space-y-3 text-xs">
                    <input
                      type="text"
                      placeholder="ชื่อกิจกรรมหรือผลงานรางวัล"
                      value={newActTitle}
                      onChange={(e) => setNewActTitle(e.target.value)}
                      className="w-full p-2 rounded-lg bg-slate-900 border border-sky-500/30 text-white placeholder-slate-500"
                      required
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="ช่วงเวลา (เช่น มกราคม 2568)"
                        value={newActDate}
                        onChange={(e) => setNewActDate(e.target.value)}
                        className="p-2 rounded-lg bg-slate-900 border border-sky-500/30 text-white placeholder-slate-500"
                      />
                      <input
                        type="text"
                        placeholder="สถานที่ / หน่วยงาน"
                        value={newActLocation}
                        onChange={(e) => setNewActLocation(e.target.value)}
                        className="p-2 rounded-lg bg-slate-900 border border-sky-500/30 text-white placeholder-slate-500"
                      />
                    </div>
                    <textarea
                      placeholder="คำอธิบายผลงานและความสำเร็จ"
                      value={newActDesc}
                      onChange={(e) => setNewActDesc(e.target.value)}
                      className="w-full p-2 rounded-lg bg-slate-900 border border-sky-500/30 text-white placeholder-slate-500 h-16"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition"
                    >
                      บันทึกกิจกรรมใหม่
                    </button>
                  </form>
                </div>

                {/* Activity List & Delete */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-slate-400">รายการกิจกรรมและผลงาน ({data.activities.length})</span>
                  {data.activities.map((act) => (
                    <div key={act.id} className="p-3 rounded-lg bg-slate-900/60 border border-sky-500/20 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-semibold text-white truncate max-w-[220px]">{act.title}</p>
                        <span className="text-[10px] text-sky-400 font-mono">{act.date} • {act.location}</span>
                      </div>
                      <button
                        onClick={() => handleDeleteActivity(act.id)}
                        className="p-1.5 text-rose-400 hover:bg-rose-950/60 rounded transition"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: FX & APPEARANCE */}
            {activeTab === 'fx' && (
              <div className="space-y-5">
                {/* Glow Intensity Slider */}
                <div className="p-4 rounded-xl electric-glass border border-sky-500/30 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">ความเข้มแสงนีออน (Glow Intensity)</span>
                    <span className="font-mono text-sky-400">{data.themeConfig.glowIntensity}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.4"
                    max="2.0"
                    step="0.1"
                    value={data.themeConfig.glowIntensity}
                    onChange={(e) => handleThemeConfigChange('glowIntensity', parseFloat(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                  <p className="text-[11px] text-slate-400">ปรับระดับความสว่างเรืองแสงของหลอดไฟนีออนฟ้าและขอบกระจก</p>
                </div>

                {/* Oscilloscope Waveform Speed */}
                <div className="p-4 rounded-xl electric-glass border border-sky-500/30 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">ความเร็วคลื่นสัญญาณ (Wave Speed)</span>
                    <span className="font-mono text-sky-400">{data.themeConfig.oscilloscopeSpeed}x</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={data.themeConfig.oscilloscopeSpeed}
                    onChange={(e) => handleThemeConfigChange('oscilloscopeSpeed', parseInt(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                  <p className="text-[11px] text-slate-400">ควบคุมความถี่ในการเคลื่อนไหวของเส้นคลื่น Oscilloscope</p>
                </div>

                {/* Accent Color Switcher */}
                <div className="p-4 rounded-xl electric-glass border border-sky-500/30 space-y-3 text-xs">
                  <span className="font-bold text-white">โทนสีหลักของวงจร (Accent Color)</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'cyan', label: 'Cyan Blue', color: 'bg-sky-400' },
                      { id: 'blue', label: 'Cobalt', color: 'bg-blue-600' },
                      { id: 'emerald', label: 'Neon Green', color: 'bg-emerald-400' },
                      { id: 'amber', label: 'Plasma Orange', color: 'bg-amber-400' }
                    ].map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleThemeConfigChange('accentColor', c.id)}
                        className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition ${
                          data.themeConfig.accentColor === c.id
                            ? 'border-white bg-slate-800'
                            : 'border-slate-800 bg-slate-900/60'
                        }`}
                      >
                        <span className={`h-4 w-4 rounded-full ${c.color} shadow-sm`}></span>
                        <span className="text-[10px] text-slate-300">{c.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: DATABASE & BACKUP */}
            {activeTab === 'db' && (
              <div className="space-y-5 text-xs">
                {/* Cloud Connection Card */}
                <div className="p-4 rounded-xl electric-glass border border-sky-500/30 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${connectionStatus.isCloud ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
                    <span className="font-bold text-white">สถานะการเชื่อมต่อฐานข้อมูล</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    {connectionStatus.message}
                  </p>
                  <p className="text-[10px] text-sky-400/90 pt-1">
                    * มีไฟล์ <code className="bg-slate-900 px-1 py-0.5 rounded">supabase_schema.sql</code> พร้อมรันบน Supabase เพื่อเปิดใช้ Cloud Sync ได้ทันที
                  </p>
                </div>

                {/* Backup & Restore */}
                <div className="p-4 rounded-xl electric-glass border border-sky-500/30 space-y-3">
                  <span className="font-bold text-white">สำรองและกู้คืนข้อมูล (Backup & Restore)</span>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleExportJSON}
                      className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-sky-500/30 text-sky-300 transition"
                    >
                      <Download size={14} />
                      <span>Export JSON</span>
                    </button>

                    <label className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-sky-500/30 text-sky-300 transition cursor-pointer">
                      <UploadCloud size={14} />
                      <span>Import JSON</span>
                      <input
                        type="file"
                        accept=".json"
                        onChange={handleImportJSON}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                {/* Reset to Default */}
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                  <span className="font-bold text-rose-300">คืนค่าเริ่มต้น (Factory Reset)</span>
                  <p className="text-[11px] text-slate-400">
                    ล้างการตั้งค่าและการแก้ไขทั้งหมด และคืนค่าเป็นข้อมูลของ อภิณัฐชรัชน์ มณีรัตน์ เริ่มต้น
                  </p>
                  <button
                    onClick={handleResetToDefault}
                    className="w-full py-2 rounded-lg bg-rose-900/60 hover:bg-rose-800 border border-rose-500/50 text-rose-200 transition font-semibold"
                  >
                    คืนค่าข้อมูลเริ่มต้นทั้งหมด
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-sky-500/20 bg-slate-950 flex items-center justify-between text-xs">
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-rose-950/80 hover:text-rose-300 text-slate-400 border border-slate-800 transition"
            >
              <LogOut size={14} />
              <span>ออกจากระบบผู้ดูแล</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition"
            >
              ปิดแผงควบคุม
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
