'use client';

import React, { useState } from 'react';
import { Award, Calendar, MapPin, X, Plus, Trash2, ExternalLink } from 'lucide-react';
import { PortfolioData, ActivityItem, SectionTextConfig, UploadedFileRecord } from '@/types/portfolio';
import { EditableText } from './EditableText';
import { EditableTagList } from './EditableTagList';
import { SmartMediaView } from './SmartMediaView';

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
    <section id="activities" className="py-12 border-t-2 border-[#2b356e]/60">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-400 tracking-wider uppercase mb-1">
              <span>[ 04 // ACTIVITIES ]</span>
              <EditableText
                value={siteTexts.activitiesBadge}
                onSave={(v) => onUpdateSiteText('activitiesBadge', v)}
                isAdmin={isAdmin}
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              <EditableText
                value={siteTexts.activitiesTitle}
                onSave={(v) => onUpdateSiteText('activitiesTitle', v)}
                isAdmin={isAdmin}
                className="pixel-font"
              />
            </h2>
          </div>
          <div className="flex items-center gap-3 font-mono">
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-chakra">
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
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition shadow"
              >
                <Plus size={14} />
                <span>เพิ่มกิจกรรม</span>
              </button>
            )}
          </div>
        </div>

        {/* Activities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((act) => (
            <div
              key={act.id}
              className="bg-[#090b20] rounded-xl overflow-hidden border-2 border-[#2b356e] hover:border-sky-400/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative shadow-lg"
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
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-[#0d1028]/90 text-rose-400 hover:bg-rose-950 border border-rose-500/30 transition z-30"
                >
                  <Trash2 size={13} />
                </button>
              )}

              <div>
                {/* Thumbnail Image with SmartMediaView & Scanline */}
                <div className="w-full h-44 bg-[#050612] overflow-hidden relative border-b-2 border-[#2b356e]" onClick={(e) => isAdmin && e.stopPropagation()}>
                  <SmartMediaView
                    mediaUrl={act.imageUrl}
                    alt={act.title}
                    onSaveMedia={(newUrl) => onUpdateActivity(act.id, 'imageUrl', newUrl)}
                    isAdmin={isAdmin}
                    uploadedFiles={uploadedFiles}
                    onFileUploaded={onFileUploaded}
                    showPlayerInModal={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="scanlines absolute inset-0 pointer-events-none opacity-25" />
                  
                  {act.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded font-mono text-[10px] font-bold bg-pink-950 text-pink-300 border border-pink-500/50 shadow-[0_0_10px_rgba(236,72,153,0.3)] pointer-events-auto uppercase">
                      <EditableText
                        value={act.badge}
                        onSave={(v) => onUpdateActivity(act.id, 'badge', v)}
                        isAdmin={isAdmin}
                      />
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-4 space-y-2.5">
                  <div className="flex items-center gap-2 text-[10px] text-sky-400 font-mono font-semibold uppercase">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      <EditableText
                        value={act.date}
                        onSave={(v) => onUpdateActivity(act.id, 'date', v)}
                        isAdmin={isAdmin}
                      />
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 truncate max-w-[140px]">
                      <MapPin size={11} />
                      <EditableText
                        value={act.location}
                        onSave={(v) => onUpdateActivity(act.id, 'location', v)}
                        isAdmin={isAdmin}
                      />
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition line-clamp-2">
                    <EditableText
                      value={act.title}
                      onSave={(v) => onUpdateActivity(act.id, 'title', v)}
                      isAdmin={isAdmin}
                    />
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-chakra">
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
              <div className="px-4 pb-4 pt-2 border-t border-[#1d2550] font-mono" onClick={(e) => isAdmin && e.stopPropagation()}>
                <EditableTagList
                  items={act.tags}
                  onUpdateList={(newList) => onUpdateActivity(act.id, 'tags', newList)}
                  isAdmin={isAdmin}
                  pillClassName="text-[9px] text-sky-300 bg-sky-950/80 px-1.5 py-0.5 rounded border border-sky-500/30"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#090b20] border-2 border-sky-400 rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(56,189,248,0.35)] relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#121638] border-b-2 border-sky-400 select-none font-mono">
              <div className="flex items-center gap-2">
                <span className="text-pink-400 font-bold">ACTIVITY.DAT</span>
                <span className="text-slate-500">/</span>
                <span className="text-slate-200 text-xs truncate max-w-[240px]">
                  {activeModal.title}
                </span>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 text-slate-400 hover:text-rose-400 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
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

              {/* Modal Media */}
              <div className="w-full rounded-lg overflow-hidden border-2 border-[#2b356e] bg-[#050612] relative min-h-[220px]">
                <SmartMediaView
                  mediaUrl={activeModal.imageUrl}
                  alt={activeModal.title}
                  onSaveMedia={(newUrl) => {
                    onUpdateActivity(activeModal.id, 'imageUrl', newUrl);
                    setActiveModal({ ...activeModal, imageUrl: newUrl });
                  }}
                  isAdmin={isAdmin}
                  uploadedFiles={uploadedFiles}
                  onFileUploaded={onFileUploaded}
                  showPlayerInModal={true}
                />
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-4 text-sky-400 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
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
                    <MapPin size={13} />
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

                <div className="text-slate-300 leading-relaxed text-xs sm:text-sm p-3 rounded-lg bg-[#0e122b] border border-[#232b58] font-chakra">
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

                <div className="pt-1">
                  <EditableTagList
                    items={activeModal.tags}
                    onUpdateList={(newList) => {
                      onUpdateActivity(activeModal.id, 'tags', newList);
                      setActiveModal({ ...activeModal, tags: newList });
                    }}
                    isAdmin={isAdmin}
                    pillClassName="px-2.5 py-1 rounded bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-[#1d2550] flex justify-end font-mono">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 rounded-lg bg-[#141a3c] border border-[#3b82f6] text-white text-xs font-bold hover:bg-[#1c2452] transition cursor-pointer"
                >
                  CLOSE WINDOW [ × ]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
