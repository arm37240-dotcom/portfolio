'use client';

import React from 'react';
import Image from 'next/image';
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  MapPin, 
  Award, 
  Sparkles, 
  GraduationCap, 
  Bookmark,
  Camera,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { PortfolioData } from '@/types/portfolio';
import { EditableText } from './EditableText';

interface ProfileSectionProps {
  data: PortfolioData;
  isAdmin: boolean;
  onUpdateProfile: (field: keyof PortfolioData['profile'], value: string) => void;
  onUploadAvatar?: (file: File) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  data,
  isAdmin,
  onUpdateProfile,
  onUploadAvatar
}) => {
  const { profile } = data;

  const handleAvatarFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && onUploadAvatar) {
      onUploadAvatar(e.target.files[0]);
    }
  };

  return (
    <section id="profile" className="py-16 border-t border-sky-500/20">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-1">
              <User size={14} />
              <span>Personal Biography & Identity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <span>ข้อมูลส่วนตัว</span>
              <span className="text-sm font-mono font-normal text-sky-400/80 bg-sky-950/60 border border-sky-500/30 px-3 py-1 rounded-full">
                ID: {profile.studentId}
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            ประวัติส่วนบุคคล ข้อมูลการศึกษา ประจำสาขาครุศาสตร์อุตสาหกรรมไฟฟ้า มทร.อีสาน วิทยาเขตขอนแก่น
          </p>
        </div>

        {/* Main Profile Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Portrait & Quick ID Card */}
          <div className="lg:col-span-4 electric-glass rounded-2xl p-6 border border-sky-500/30 flex flex-col items-center text-center relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-sky-500/15 rounded-full blur-2xl pointer-events-none"></div>

            {/* Avatar Frame with Glowing Border */}
            <div className="relative group mb-5">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-sky-400/60 shadow-[0_0_25px_rgba(56,189,248,0.3)] bg-slate-900 flex items-center justify-center">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-4">
                    <User size={64} className="text-sky-400/60 mx-auto mb-2" />
                    <span className="text-xs text-slate-400">ยังไม่มีรูปภาพ</span>
                  </div>
                )}
              </div>

              {/* Upload Overlay in Admin Mode */}
              {isAdmin && (
                <label className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition text-white text-xs font-medium gap-1.5 backdrop-blur-sm">
                  <Camera size={24} className="text-sky-400" />
                  <span>เปลี่ยนรูปประจำตัว</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarFileChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Name & Nickname */}
            <div className="space-y-1 mb-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                <EditableText
                  value={profile.name}
                  onSave={(v) => onUpdateProfile('name', v)}
                  isAdmin={isAdmin}
                />
              </h3>
              <p className="text-sm font-semibold text-sky-400 flex items-center justify-center gap-1.5">
                <span>ชื่อเล่น:</span>
                <EditableText
                  value={profile.nickname}
                  onSave={(v) => onUpdateProfile('nickname', v)}
                  isAdmin={isAdmin}
                />
              </p>
            </div>

            {/* University Crest / Tag */}
            <div className="w-full p-3.5 rounded-xl bg-slate-900/80 border border-sky-500/20 text-left space-y-1.5 mb-5">
              <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap size={13} />
                <span>สถาบันการศึกษา</span>
              </div>
              <div className="text-xs font-semibold text-slate-200">
                <EditableText
                  value={profile.university}
                  onSave={(v) => onUpdateProfile('university', v)}
                  isAdmin={isAdmin}
                />
              </div>
              <div className="text-[11px] text-sky-300/80">
                <EditableText
                  value={profile.faculty}
                  onSave={(v) => onUpdateProfile('faculty', v)}
                  isAdmin={isAdmin}
                />
                {' • '}
                <EditableText
                  value={profile.major}
                  onSave={(v) => onUpdateProfile('major', v)}
                  isAdmin={isAdmin}
                />
              </div>
            </div>

            {/* Contact Quick Buttons */}
            <div className="w-full space-y-2 text-xs">
              <a
                href={`tel:${profile.phone}`}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-200 hover:bg-sky-900/50 transition font-mono"
              >
                <span className="flex items-center gap-2">
                  <Phone size={14} className="text-sky-400" />
                  <span>โทรศัพท์:</span>
                </span>
                <span className="font-semibold text-white">{profile.phone}</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-200 hover:bg-sky-900/50 transition font-mono truncate"
              >
                <span className="flex items-center gap-2">
                  <Mail size={14} className="text-sky-400" />
                  <span>อีเมล:</span>
                </span>
                <span className="font-semibold text-white truncate max-w-[150px]">{profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bio, Detailed Parameters & Skills */}
          <div className="lg:col-span-8 space-y-6">
            {/* Bio Card */}
            <div className="electric-glass rounded-2xl p-6 border border-sky-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase">
                <Sparkles size={14} />
                <span>วิสัยทัศน์และความมุ่งมั่น (Statement of Purpose)</span>
              </div>
              <div className="text-slate-300 text-sm sm:text-base leading-relaxed">
                <EditableText
                  value={profile.bio}
                  onSave={(v) => onUpdateProfile('bio', v)}
                  isAdmin={isAdmin}
                  multiline={true}
                />
              </div>
            </div>

            {/* General Info Grid (Birthday, Age, Nationality, Student ID) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl electric-glass">
                <div className="flex items-center gap-2 text-xs text-sky-400 mb-1">
                  <Bookmark size={14} />
                  <span>รหัสนักศึกษา</span>
                </div>
                <div className="text-sm font-bold font-mono text-white">
                  <EditableText
                    value={profile.studentId}
                    onSave={(v) => onUpdateProfile('studentId', v)}
                    isAdmin={isAdmin}
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl electric-glass">
                <div className="flex items-center gap-2 text-xs text-sky-400 mb-1">
                  <Calendar size={14} />
                  <span>วันเกิด</span>
                </div>
                <div className="text-sm font-bold text-white">
                  <EditableText
                    value={profile.birthdate}
                    onSave={(v) => onUpdateProfile('birthdate', v)}
                    isAdmin={isAdmin}
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl electric-glass">
                <div className="flex items-center gap-2 text-xs text-sky-400 mb-1">
                  <Clock size={14} />
                  <span>อายุ</span>
                </div>
                <div className="text-sm font-bold text-white">
                  <EditableText
                    value={profile.age}
                    onSave={(v) => onUpdateProfile('age', v)}
                    isAdmin={isAdmin}
                  /> ปี
                </div>
              </div>

              <div className="p-4 rounded-xl electric-glass">
                <div className="flex items-center gap-2 text-xs text-sky-400 mb-1">
                  <MapPin size={14} />
                  <span>สัญชาติ / เชื้อชาติ</span>
                </div>
                <div className="text-sm font-bold text-white">
                  <EditableText
                    value={profile.nationality}
                    onSave={(v) => onUpdateProfile('nationality', v)}
                    isAdmin={isAdmin}
                  /> / <EditableText
                    value={profile.ethnicity}
                    onSave={(v) => onUpdateProfile('ethnicity', v)}
                    isAdmin={isAdmin}
                  />
                </div>
              </div>
            </div>

            {/* Special Skills Section */}
            <div className="electric-glass rounded-2xl p-6 border border-sky-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Award size={18} className="text-sky-400" />
                  <span>ความสามารถพิเศษ & ทักษะวิชาชีพ (Special Skills)</span>
                </h4>
                <span className="text-xs text-sky-400/80 font-mono">
                  {profile.specialSkills.length} ทักษะเด่น
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {profile.specialSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-sky-500/20 hover:border-sky-400/50 transition group"
                  >
                    <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 group-hover:text-white transition">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Interests Section */}
            <div className="electric-glass rounded-2xl p-6 border border-sky-500/30 space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles size={18} className="text-amber-400" />
                <span>ความสนใจอื่นๆ & นวัตกรรมที่ติดตาม (Interests & Focus)</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.otherInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-sky-950/50 border border-sky-500/30 text-sky-200 text-xs font-medium"
                  >
                    ⚡ {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
