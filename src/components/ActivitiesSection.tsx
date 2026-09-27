'use client';

import React, { useState } from 'react';
import { Award, Calendar, MapPin, X, Plus, Trash2 } from 'lucide-react';
import { PortfolioData, ActivityItem, SectionTextConfig, UploadedFileRecord } from '@/types/portfolio';
import { EditableText } from './EditableText';
import { EditableImage } from './EditableImage';
import { EditableTagList } from './EditableTagList';

interface ActivitiesSectionProps {
  data: PortfolioData;
  isAdmin: boolean;
  onUpdateActivity: (actId: string, field: keyof ActivityItem, value: any) => void;
  onAddActivity: () => void;
  onDeleteActivity: (actId: string) => void;
  onUpdateSiteText: (field: keyof SectionTextConfig, value: string) => void;
  onFileUploaded?: (record: UploadedFileRecord) => void;
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  data,
  isAdmin,
  onUpdateActivity,
  onAddActivity,
  onDeleteActivity,
  onUpdateSiteText,
  onFileUploaded
}) => {
  const { activities, siteTexts, uploadedFiles } = data;
  const [activeModal, setActiveModal] = useState<ActivityItem | null>(null);

  return (
    <section id="activities" className="py-16 border-t border-sky-500/20">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-1">
              <Award size={14} />
              <EditableText
                value={siteTexts.activitiesBadge}
                onSave={(v) => onUpdateSiteText('activitiesBadge', v)}
                isAdmin={isAdmin}
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              <EditableText
                value={siteTexts.activitiesTitle}
                onSave={(v) => onUpdateSiteText('activitiesTitle', v)}
                isAdmin={isAdmin}
              />
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              <EditableText
                value={siteTexts.activitiesSubtitle}
                onSave={(v) => onUpdateSiteText('activitiesSubtitle', v)}
                isAdmin={isAdmin}
                multiline={true}
              />
            </p>
            {isAdmin && (
              <button
                onClick={onAddActivity}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition shadow"
              >
                <Plus size={14} />
                <span>เพิ่มกิจกรรม</span>
              </button>
            )}
          </div>
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act) => (
            <div
              key={act.id}
              className="electric-glass rounded-2xl overflow-hidden border border-sky-500/20 hover:border-sky-400/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
              onClick={() => setActiveModal(act)}
            >
              {/* Delete Button in Admin Mode */}
              {isAdmin && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteActivity(act.id);
                  }}
                  title="ลบกิจกรรมนี้"
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/90 text-rose-400 hover:bg-rose-950 hover:text-rose-200 border border-rose-500/30 transition z-30"
                >
                  <Trash2 size={14} />
                </button>
              )}

              <div>
                {/* Thumbnail Image with EditableImage */}
                <div className="w-full h-44 bg-slate-950 overflow-hidden relative" onClick={(e) => isAdmin && e.stopPropagation()}>
                  <EditableImage
                    src={act.imageUrl}
                    alt={act.title}
                    onSave={(newUrl) => onUpdateActivity(act.id, 'imageUrl', newUrl)}
                    isAdmin={isAdmin}
                    uploadedFiles={uploadedFiles}
                    onFileUploaded={onFileUploaded}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
                  
                  {act.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-500 text-white shadow-[0_0_12px_#38bdf8] pointer-events-auto">
                      <EditableText
                        value={act.badge}
                        onSave={(v) => onUpdateActivity(act.id, 'badge', v)}
                        isAdmin={isAdmin}
                      />
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-sky-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      <EditableText
                        value={act.date}
                        onSave={(v) => onUpdateActivity(act.id, 'date', v)}
                        isAdmin={isAdmin}
                      />
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      <EditableText
                        value={act.location}
                        onSave={(v) => onUpdateActivity(act.id, 'location', v)}
                        isAdmin={isAdmin}
                      />
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

              {/* Card Footer Tags with EditableTagList */}
              <div className="px-5 pb-5 pt-2 border-t border-sky-500/10" onClick={(e) => isAdmin && e.stopPropagation()}>
                <EditableTagList
                  items={act.tags}
                  onUpdateList={(newList) => onUpdateActivity(act.id, 'tags', newList)}
                  isAdmin={isAdmin}
                  pillClassName="text-[10px] font-mono text-sky-300/80 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/20"
                />
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
                  <EditableText
                    value={activeModal.title}
                    onSave={(val) => {
                      onUpdateActivity(activeModal.id, 'title', val);
                      setActiveModal({ ...activeModal, title: val });
                    }}
                    isAdmin={isAdmin}
                  />
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image with EditableImage */}
            <div className="w-full h-52 sm:h-64 rounded-xl overflow-hidden border border-sky-500/30 bg-slate-950 relative">
              <EditableImage
                src={activeModal.imageUrl}
                alt={activeModal.title}
                onSave={(newUrl) => {
                  onUpdateActivity(activeModal.id, 'imageUrl', newUrl);
                  setActiveModal({ ...activeModal, imageUrl: newUrl });
                }}
                isAdmin={isAdmin}
                uploadedFiles={uploadedFiles}
                onFileUploaded={onFileUploaded}
              />
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-4 text-sky-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <EditableText
                    value={activeModal.date}
                    onSave={(val) => {
                      onUpdateActivity(activeModal.id, 'date', val);
                      setActiveModal({ ...activeModal, date: val });
                    }}
                    isAdmin={isAdmin}
                  />
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <EditableText
                    value={activeModal.location}
                    onSave={(val) => {
                      onUpdateActivity(activeModal.id, 'location', val);
                      setActiveModal({ ...activeModal, location: val });
                    }}
                    isAdmin={isAdmin}
                  />
                </span>
              </div>

              <div className="text-slate-300 leading-relaxed text-sm">
                <EditableText
                  value={activeModal.description}
                  onSave={(val) => {
                    onUpdateActivity(activeModal.id, 'description', val);
                    setActiveModal({ ...activeModal, description: val });
                  }}
                  isAdmin={isAdmin}
                  multiline={true}
                />
              </div>

              <div className="pt-2">
                <EditableTagList
                  items={activeModal.tags}
                  onUpdateList={(newList) => {
                    onUpdateActivity(activeModal.id, 'tags', newList);
                    setActiveModal({ ...activeModal, tags: newList });
                  }}
                  isAdmin={isAdmin}
                />
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
