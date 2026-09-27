'use client';

import React, { useState } from 'react';
import { Award, Calendar, MapPin, Tag, ExternalLink, X, CheckCircle, Sparkles } from 'lucide-react';
import { PortfolioData, ActivityItem } from '@/types/portfolio';
import { EditableText } from './EditableText';

interface ActivitiesSectionProps {
  data: PortfolioData;
  isAdmin: boolean;
  onUpdateActivity: (actId: string, field: keyof ActivityItem, value: string) => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  data,
  isAdmin,
  onUpdateActivity
}) => {
  const { activities } = data;
  const [activeModal, setActiveModal] = useState<ActivityItem | null>(null);

  return (
    <section id="activities" className="py-16 border-t border-sky-500/20">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-1">
              <Award size={14} />
              <span>Extracurricular, Competitions & Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              กิจกรรมและผลงาน (Activities & Honors)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            ผลงานการแข่งขันทางวิชาชีพช่างไฟฟ้า กิจกรรมจิตอาสาเพื่อสังคม และนิทรรศการนวัตกรรม
          </p>
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act) => (
            <div
              key={act.id}
              className="electric-glass rounded-2xl overflow-hidden border border-sky-500/20 hover:border-sky-400/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveModal(act)}
            >
              <div>
                {/* Thumbnail Image */}
                <div className="w-full h-44 bg-slate-950 overflow-hidden relative">
                  <img
                    src={act.imageUrl || '/images/helixion_reference.png'}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  
                  {act.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-500 text-white shadow-[0_0_12px_#38bdf8]">
                      {act.badge}
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-sky-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {act.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {act.location}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition line-clamp-2">
                    <EditableText
                      value={act.title}
                      onSave={(v) => onUpdateActivity(act.id, 'title', v)}
                      isAdmin={isAdmin}
                    />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    <EditableText
                      value={act.description}
                      onSave={(v) => onUpdateActivity(act.id, 'description', v)}
                      isAdmin={isAdmin}
                      multiline={true}
                    />
                  </p>
                </div>
              </div>

              {/* Card Footer Tags */}
              <div className="px-5 pb-5 pt-2 flex flex-wrap gap-1.5 border-t border-sky-500/10">
                {act.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono text-sky-300/80 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/20"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="electric-glass rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-sky-400 p-6 space-y-4 shadow-[0_0_50px_rgba(56,189,248,0.3)]">
            <div className="flex items-start justify-between gap-4 border-b border-sky-500/20 pb-3">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  รายละเอียดกิจกรรมและผลงาน
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {activeModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {activeModal.imageUrl && (
              <div className="w-full h-52 sm:h-64 rounded-xl overflow-hidden border border-sky-500/30 bg-slate-950 relative">
                <img
                  src={activeModal.imageUrl}
                  alt={activeModal.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-4 text-sky-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>{activeModal.date}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>{activeModal.location}</span>
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm">
                {activeModal.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {activeModal.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-500/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-sky-500/20 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
