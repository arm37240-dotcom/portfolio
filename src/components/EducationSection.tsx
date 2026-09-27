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
    <section id="education" className="py-16 border-t border-sky-500/20">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-1">
              <GraduationCap size={14} />
              <EditableText
                value={siteTexts.educationBadge}
                onSave={(v) => onUpdateSiteText('educationBadge', v)}
                isAdmin={isAdmin}
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              <EditableText
                value={siteTexts.educationTitle}
                onSave={(v) => onUpdateSiteText('educationTitle', v)}
                isAdmin={isAdmin}
              />
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
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
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition shadow"
              >
                <Plus size={14} />
                <span>เพิ่มระดับการศึกษา</span>
              </button>
            )}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:via-blue-500 before:to-indigo-600 before:shadow-[0_0_12px_rgba(56,189,248,0.5)]">
          {education.map((item, index) => {
            const Icon = getIcon(item.iconType);
            const isCurrent = index === education.length - 1;

            return (
              <div key={item.id} className="relative group">
                {/* Glowing Node Dot on Timeline */}
                <div className={`absolute -left-[30px] sm:-left-[35px] top-1.5 h-6 w-6 sm:h-7 sm:w-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  isCurrent
                    ? 'bg-sky-500 border-white shadow-[0_0_15px_#38bdf8] scale-110'
                    : 'bg-slate-900 border-sky-400 group-hover:border-sky-300 group-hover:shadow-[0_0_10px_#38bdf8]'
                }`}>
                  <span className={`h-2 w-2 rounded-full ${isCurrent ? 'bg-white animate-ping' : 'bg-sky-400'}`}></span>
                </div>

                {/* Card Content */}
                <div className={`electric-glass rounded-2xl p-5 sm:p-6 border transition-all duration-300 relative ${
                  isCurrent
                    ? 'border-sky-400/60 shadow-[0_0_25px_rgba(56,189,248,0.25)] bg-sky-950/20'
                    : 'border-sky-500/20 hover:border-sky-500/40 hover:bg-slate-900/50'
                }`}>
                  {/* Delete Button in Admin Mode */}
                  {isAdmin && (
                    <button
                      onClick={() => onDeleteEducation(item.id)}
                      title="ลบรายการการศึกษานี้"
                      className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-900/80 text-rose-400 hover:bg-rose-950 hover:text-rose-200 border border-rose-500/30 transition z-10"
                    >
                      <Trash2 size={15} />
                    </button>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3 pr-8 sm:pr-10">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${
                        isCurrent
                          ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                          : 'bg-slate-900 border-sky-500/20 text-slate-400 group-hover:text-sky-400'
                      }`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-medium text-sky-400 uppercase tracking-wider">
                          <EditableText
                            value={item.level}
                            onSave={(val) => onUpdateEducationItem(item.id, 'level', val)}
                            isAdmin={isAdmin}
                          />
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          <EditableText
                            value={item.institution}
                            onSave={(val) => onUpdateEducationItem(item.id, 'institution', val)}
                            isAdmin={isAdmin}
                          />
                        </h3>
                      </div>
                    </div>

                    <span className={`inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold ${
                      isCurrent
                        ? 'bg-sky-500 text-white shadow-[0_0_10px_rgba(56,189,248,0.5)]'
                        : 'bg-slate-800 text-sky-300 border border-sky-500/20'
                    }`}>
                      <EditableText
                        value={item.badge || 'วุฒิการศึกษา'}
                        onSave={(val) => onUpdateEducationItem(item.id, 'badge', val)}
                        isAdmin={isAdmin}
                      />
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-semibold text-sky-300 mb-2 pl-12">
                    <EditableText
                      value={item.majorOrBranch || 'สาขาวิชา'}
                      onSave={(val) => onUpdateEducationItem(item.id, 'majorOrBranch', val)}
                      isAdmin={isAdmin}
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-12">
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
