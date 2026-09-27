'use client';

import React from 'react';
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
  Clock
} from 'lucide-react';
import { PortfolioData, SectionTextConfig, UploadedFileRecord } from '@/types/portfolio';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';
import { EditableTagList } from './EditableTagList';

interface ProfileSectionProps {
  data: PortfolioData;
  isAdmin: boolean;
  onUpdateProfile: (field: keyof PortfolioData['profile'], value: any) => void;
  onUpdateSiteText: (field: keyof SectionTextConfig, value: string) => void;
  onFileUploaded?: (record: UploadedFileRecord) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  data,
  isAdmin,
  onUpdateProfile,
  onUpdateSiteText,
  onFileUploaded
}) => {
  const { profile, siteTexts, uploadedFiles } = data;

  return (
    <section id="profile" className="py-16 border-t border-sky-500/20">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-1">
              <User size={14} />
              <EditableText
                value={siteTexts.profileBadge}
                onSave={(v) => onUpdateSiteText('profileBadge', v)}
                isAdmin={isAdmin}
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <EditableText
                value={siteTexts.profileTitle}
                onSave={(v) => onUpdateSiteText('profileTitle', v)}
                isAdmin={isAdmin}
              />
              <span className="text-sm font-mono font-normal text-sky-400/80 bg-sky-950/60 border border-sky-500/30 px-3 py-1 rounded-full">
                ID: <EditableText value={profile.studentId} onSave={(v) => onUpdateProfile('studentId', v)} isAdmin={isAdmin} />
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            <EditableText
              value={siteTexts.profileSubtitle}
              onSave={(v) => onUpdateSiteText('profileSubtitle', v)}
              isAdmin={isAdmin}
              multiline={true}
            />
          </p>
        </div>

        {/* Main Profile Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Portrait & Quick ID Card */}
          <div className="lg:col-span-4 electric-glass rounded-2xl p-6 border border-sky-500/30 flex flex-col items-center text-center relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-sky-500/15 rounded-full blur-2xl pointer-events-none"></div>

            {/* Avatar Frame with EditableImage */}
            <div className="relative group mb-5">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-sky-400/60 shadow-[0_0_25px_rgba(56,189,248,0.3)] bg-slate-900 flex items-center justify-center">
                <EditableImage
                  src={profile.avatarUrl}
                  alt={profile.name}
                  onSave={(newUrl) => onUpdateProfile('avatarUrl', newUrl)}
                  isAdmin={isAdmin}
                  uploadedFiles={uploadedFiles}
                  onFileUploaded={onFileUploaded}
                  className="w-full h-full object-cover"
                />
              </div>
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
              <div className="w-full flex items-center justify-between p-2.5 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-200 font-mono">
                <span className="flex items-center gap-2">
                  <Phone size={14} className="text-sky-400" />
                  <span>โทร:</span>
                </span>
                <EditableText
                  value={profile.phone}
                  onSave={(v) => onUpdateProfile('phone', v)}
                  isAdmin={isAdmin}
                  className="font-semibold text-white"
                />
              </div>

              <div className="w-full flex items-center justify-between p-2.5 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-200 font-mono truncate">
                <span className="flex items-center gap-2">
                  <Mail size={14} className="text-sky-400" />
                  <span>อีเมล:</span>
                </span>
                <EditableText
                  value={profile.email}
                  onSave={(v) => onUpdateProfile('email', v)}
                  isAdmin={isAdmin}
                  className="font-semibold text-white truncate max-w-[150px]"
                />
              </div>
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

            {/* Special Skills Section with EditableTagList */}
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

              <EditableTagList
                items={profile.specialSkills}
                onUpdateList={(newList) => onUpdateProfile('specialSkills', newList)}
                isAdmin={isAdmin}
                prefix="⚡ "
                pillClassName="p-2.5 rounded-xl bg-slate-900/70 border border-sky-500/30 text-xs sm:text-sm text-slate-200 hover:border-sky-400 transition"
                containerClassName="grid grid-cols-1 sm:grid-cols-2 gap-2"
                addPlaceholder="เพิ่มทักษะวิชาชีพ..."
              />
            </div>

            {/* Other Interests Section with EditableTagList */}
            <div className="electric-glass rounded-2xl p-6 border border-sky-500/30 space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles size={18} className="text-amber-400" />
                <span>ความสนใจอื่นๆ & นวัตกรรมที่ติดตาม (Interests & Focus)</span>
              </h4>
              <EditableTagList
                items={profile.otherInterests}
                onUpdateList={(newList) => onUpdateProfile('otherInterests', newList)}
                isAdmin={isAdmin}
                prefix="🔋 "
                pillClassName="px-3 py-1.5 rounded-lg bg-sky-950/50 border border-sky-500/30 text-sky-200 text-xs font-medium"
                addPlaceholder="เพิ่มความสนใจ..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
