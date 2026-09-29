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
  Clock,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { PortfolioData, SectionTextConfig, UploadedFileRecord } from '@/types/portfolio';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';
import { EditableTagList } from './EditableTagList';
import { RetroWindow } from './PixelDecorations';

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
    <section id="profile" className="py-12 border-t-2 border-[var(--border-neon)]/60">
      <div className="space-y-6">
        {/* Section Header (Hikari OS Style) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-500 dark:text-sky-400 tracking-wider uppercase mb-1">
              <span>[ 01 // IDENTITY ]</span>
              <EditableText
                value={siteTexts.profileBadge}
                onSave={(v) => onUpdateSiteText('profileBadge', v)}
                isAdmin={isAdmin}
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-title)] tracking-tight flex items-center gap-3">
              <EditableText
                value={siteTexts.profileTitle}
                onSave={(v) => onUpdateSiteText('profileTitle', v)}
                isAdmin={isAdmin}
                className="pixel-font"
              />
              <span className="text-xs font-mono font-normal text-sky-500 dark:text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2.5 py-0.5 rounded">
                ID: <EditableText value={profile.studentId} onSave={(v) => onUpdateProfile('studentId', v)} isAdmin={isAdmin} />
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md font-chakra">
            <EditableText
              value={siteTexts.profileSubtitle}
              onSave={(v) => onUpdateSiteText('profileSubtitle', v)}
              isAdmin={isAdmin}
              multiline={true}
            />
          </p>
        </div>

        {/* Main Profile Grid Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Portrait & Quick ID Card */}
          <div className="lg:col-span-4 bg-[var(--bg-card)] border-2 border-[var(--border-neon)] rounded-xl p-5 flex flex-col items-center text-center relative overflow-hidden shadow-lg">
            {/* Header tag */}
            <div className="w-full flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-muted)]">
              <span className="text-pink-500 dark:text-pink-400 font-bold">OPERATOR CARD</span>
              <span>v2.0</span>
            </div>

            {/* Avatar Frame with EditableImage & Scanlines */}
            <div className="relative group mb-4">
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-xl overflow-hidden border-2 border-sky-400/60 shadow-[0_0_20px_rgba(56,189,248,0.25)] bg-[var(--bg-primary)] flex items-center justify-center">
                <EditableImage
                  src={profile.avatarUrl}
                  alt={profile.name}
                  onSave={(newUrl) => onUpdateProfile('avatarUrl', newUrl)}
                  isAdmin={isAdmin}
                  uploadedFiles={uploadedFiles}
                  onFileUploaded={onFileUploaded}
                  className="w-full h-full object-cover"
                />
                <div className="scanlines absolute inset-0 pointer-events-none opacity-25" />
              </div>
            </div>

            {/* Name & Nickname */}
            <div className="space-y-1 mb-4">
              <h3 className="text-xl font-bold text-[var(--text-title)] tracking-tight">
                <EditableText
                  value={profile.name}
                  onSave={(v) => onUpdateProfile('name', v)}
                  isAdmin={isAdmin}
                />
              </h3>
              <p className="text-xs font-mono font-semibold text-sky-500 dark:text-sky-400 flex items-center justify-center gap-1.5">
                <span>NICKNAME:</span>
                <EditableText
                  value={profile.nickname}
                  onSave={(v) => onUpdateProfile('nickname', v)}
                  isAdmin={isAdmin}
                />
              </p>
            </div>

            {/* University Tag */}
            <div className="w-full p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-left space-y-1.5 mb-4 font-mono text-xs">
              <div className="text-[10px] text-sky-500 dark:text-sky-400 uppercase tracking-wider flex items-center gap-1 font-bold">
                <GraduationCap size={13} />
                <span>INSTITUTION</span>
              </div>
              <div className="text-xs font-semibold text-[var(--text-title)]">
                <EditableText
                  value={profile.university}
                  onSave={(v) => onUpdateProfile('university', v)}
                  isAdmin={isAdmin}
                />
              </div>
              <div className="text-[11px] text-[var(--text-muted)]">
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
            <div className="w-full space-y-2 text-xs font-mono">
              <div className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-main)]">
                <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                  <Phone size={13} className="text-sky-500 dark:text-sky-400" />
                  <span>TEL:</span>
                </span>
                <EditableText
                  value={profile.phone}
                  onSave={(v) => onUpdateProfile('phone', v)}
                  isAdmin={isAdmin}
                  className="font-semibold text-[var(--text-title)]"
                />
              </div>

              <div className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-main)] truncate">
                <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                  <Mail size={13} className="text-sky-500 dark:text-sky-400" />
                  <span>EMAIL:</span>
                </span>
                <EditableText
                  value={profile.email}
                  onSave={(v) => onUpdateProfile('email', v)}
                  isAdmin={isAdmin}
                  className="font-semibold text-[var(--text-title)] truncate max-w-[140px]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Detailed Parameters & Skills */}
          <div className="lg:col-span-8 space-y-5">
            {/* Bio Card (Statement of Purpose) */}
            <RetroWindow
              title="STATEMENT OF PURPOSE // ปรัชญาและวิสัยทัศน์"
              badge="SOP.DAT"
              badgeColor="blue"
              icon={<Sparkles size={14} />}
            >
              <div className="text-[var(--text-main)] text-sm leading-relaxed font-chakra">
                <EditableText
                  value={profile.bio}
                  onSave={(v) => onUpdateProfile('bio', v)}
                  isAdmin={isAdmin}
                  multiline={true}
                />
              </div>
            </RetroWindow>

            {/* General Info Grid (Birthday, Age, Nationality, Student ID) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono">
              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border-2 border-[var(--border-neon)] shadow-sm">
                <div className="flex items-center gap-1.5 text-[10px] text-sky-500 dark:text-sky-400 mb-1 font-bold uppercase">
                  <Bookmark size={13} />
                  <span>STUDENT ID</span>
                </div>
                <div className="text-xs font-bold text-[var(--text-title)]">
                  <EditableText
                    value={profile.studentId}
                    onSave={(v) => onUpdateProfile('studentId', v)}
                    isAdmin={isAdmin}
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border-2 border-[var(--border-neon)] shadow-sm">
                <div className="flex items-center gap-1.5 text-[10px] text-sky-500 dark:text-sky-400 mb-1 font-bold uppercase">
                  <Calendar size={13} />
                  <span>BIRTHDATE</span>
                </div>
                <div className="text-xs font-bold text-[var(--text-title)]">
                  <EditableText
                    value={profile.birthdate}
                    onSave={(v) => onUpdateProfile('birthdate', v)}
                    isAdmin={isAdmin}
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border-2 border-[var(--border-neon)] shadow-sm">
                <div className="flex items-center gap-1.5 text-[10px] text-sky-500 dark:text-sky-400 mb-1 font-bold uppercase">
                  <Clock size={13} />
                  <span>AGE</span>
                </div>
                <div className="text-xs font-bold text-[var(--text-title)]">
                  <EditableText
                    value={profile.age}
                    onSave={(v) => onUpdateProfile('age', v)}
                    isAdmin={isAdmin}
                  /> ปี
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border-2 border-[var(--border-neon)] shadow-sm">
                <div className="flex items-center gap-1.5 text-[10px] text-sky-500 dark:text-sky-400 mb-1 font-bold uppercase">
                  <MapPin size={13} />
                  <span>NATIONALITY</span>
                </div>
                <div className="text-xs font-bold text-[var(--text-title)]">
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

            {/* Special Skills Section with Retro Window */}
            <RetroWindow
              title="TECHNICAL & PEDAGOGICAL CAPABILITIES // ทักษะวิชาชีพ"
              badge={`${profile.specialSkills.length} SKILLS`}
              badgeColor="pink"
              icon={<Award size={14} />}
            >
              <EditableTagList
                items={profile.specialSkills}
                onUpdateList={(newList) => onUpdateProfile('specialSkills', newList)}
                isAdmin={isAdmin}
                prefix="⚡ "
                pillClassName="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-main)] hover:border-sky-400 transition"
                containerClassName="grid grid-cols-1 sm:grid-cols-2 gap-2"
                addPlaceholder="เพิ่มทักษะวิชาชีพ..."
              />
            </RetroWindow>

            {/* Other Interests Section */}
            <RetroWindow
              title="RESEARCH & INNOVATION INTERESTS // ความสนใจ"
              badge="INTERESTS"
              badgeColor="amber"
              icon={<Sparkles size={14} />}
            >
              <EditableTagList
                items={profile.otherInterests}
                onUpdateList={(newList) => onUpdateProfile('otherInterests', newList)}
                isAdmin={isAdmin}
                prefix="🔋 "
                pillClassName="px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-main)] text-xs font-mono"
                addPlaceholder="เพิ่มความสนใจ..."
              />
            </RetroWindow>
          </div>
        </div>
      </div>
    </section>
  );
};
