'use client';

import React from 'react';
import { GraduationCap, School, Award, Plus, Trash2 } from 'lucide-react';
import { PortfolioData, EducationItem, SectionTextConfig } from '@/types/portfolio';
import { EditableText } from './EditableText';

interface EducationSectionProps {
  data: PortfolioData;
  isAdmin: boolean;
  onUpdateEducationItem: (id: string, field: keyof EducationItem, value: string) => void;
  onAddEducation: () => void;
  onDeleteEducation: (id: string) => void;
  onUpdateSiteText: (field: keyof SectionTextConfig, value: string) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  data,
  isAdmin,
  onUpdateEducationItem,
  onAddEducation,
  onDeleteEducation,
  onUpdateSiteText
}) => {
  const { education, siteTexts } = data;

  const getIcon = (type: EducationItem['iconType']) => {
    switch (type) {
      case 'university':
        return GraduationCap;
      case 'college':
        return Award;
      default:
        return School;
    }
  };

  return (
    <section id="education" className="py-12 border-t-2 border-[#2b356e]/60">
      <div className="space-y-6">
        {/* Section Header (Hikari OS Style) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-400 tracking-wider uppercase mb-1">
              <span>[ 02 // ACADEMICS ]</span>
              <EditableText
                value={siteTexts.educationBadge}
                onSave={(v) => onUpdateSiteText('educationBadge', v)}
                isAdmin={isAdmin}
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              <EditableText
                value={siteTexts.educationTitle}
                onSave={(v) => onUpdateSiteText('educationTitle', v)}
                isAdmin={isAdmin}
                className="pixel-font"
              />
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-chakra">
              <EditableText
                value={siteTexts.educationSubtitle}
                onSave={(v) => onUpdateSiteText('educationSubtitle', v)}
                isAdmin={isAdmin}
                multiline={true}
              />
            </p>
            {isAdmin && (
              <button
                onClick={onAddEducation}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-mono font-semibold transition shadow"
              >
                <Plus size={14} />
                <span>เพิ่มระดับการศึกษา</span>
              </button>
            )}
          </div>
        </div>

        {/* Timeline Container with Retro Pixel Nodes */}
        <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-sky-400 before:via-pink-500 before:to-indigo-600 before:shadow-[0_0_10px_rgba(56,189,248,0.5)]">
          {education.map((item, index) => {
            const Icon = getIcon(item.iconType);
            const isCurrent = index === education.length - 1;

            return (
              <div key={item.id} className="relative group">
                {/* Pixel Node Pip on Timeline */}
                <div className={`absolute -left-[30px] sm:-left-[35px] top-2 h-6 w-6 sm:h-7 sm:w-7 rounded-lg flex items-center justify-center border-2 transition-all duration-300 ${
                  isCurrent
                    ? 'bg-sky-500 border-white shadow-[0_0_15px_#38bdf8] scale-110'
                    : 'bg-[#090b20] border-[#2b356e] group-hover:border-sky-400'
                }`}>
                  <span className={`h-2 w-2 rounded-sm ${isCurrent ? 'bg-white animate-ping' : 'bg-sky-400'}`} />
                </div>

                {/* Retro OS Card Content */}
                <div className={`bg-[#090b20] rounded-xl p-5 sm:p-6 border-2 transition-all duration-300 relative shadow-lg ${
                  isCurrent
                    ? 'border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.25)] bg-[#0c102c]'
                    : 'border-[#2b356e] hover:border-[#3d4a96]'
                }`}>
                  {/* Delete Button in Admin Mode */}
                  {isAdmin && (
                    <button
                      onClick={() => onDeleteEducation(item.id)}
                      title="ลบรายการการศึกษานี้"
                      className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#0d1028] text-rose-400 hover:bg-rose-950 border border-rose-500/30 transition z-10"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3 pr-8 sm:pr-10">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg border-2 ${
                        isCurrent
                          ? 'bg-sky-950 border-sky-400 text-sky-300'
                          : 'bg-[#0e122b] border-[#232b58] text-slate-400 group-hover:text-sky-400'
                      }`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
                          <EditableText
                            value={item.level}
                            onSave={(val) => onUpdateEducationItem(item.id, 'level', val)}
                            isAdmin={isAdmin}
                          />
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          <EditableText
                            value={item.institution}
                            onSave={(val) => onUpdateEducationItem(item.id, 'institution', val)}
                            isAdmin={isAdmin}
                          />
                        </h3>
                      </div>
                    </div>

                    <span className={`inline-flex items-center self-start px-2.5 py-1 rounded font-mono text-[11px] font-semibold border uppercase ${
                      isCurrent
                        ? 'bg-sky-950 text-sky-300 border-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.4)]'
                        : 'bg-[#0e122b] text-slate-300 border-[#232b58]'
                    }`}>
                      <EditableText
                        value={item.badge || 'วุฒิการศึกษา'}
                        onSave={(val) => onUpdateEducationItem(item.id, 'badge', val)}
                        isAdmin={isAdmin}
                      />
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-mono font-semibold text-sky-300 mb-2 pl-11">
                    <EditableText
                      value={item.majorOrBranch || 'สาขาวิชา'}
                      onSave={(val) => onUpdateEducationItem(item.id, 'majorOrBranch', val)}
                      isAdmin={isAdmin}
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-11 font-chakra">
                    <EditableText
                      value={item.description}
                      onSave={(val) => onUpdateEducationItem(item.id, 'description', val)}
                      isAdmin={isAdmin}
                      multiline={true}
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
