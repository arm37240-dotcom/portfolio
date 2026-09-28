'use client';

import React, { useState } from 'react';
import { Cpu, Layers, ChevronRight, X, Plus, Trash2, ExternalLink, Play, Video as VideoIcon } from 'lucide-react';
import { PortfolioData, CourseItem, CourseProject, SectionTextConfig, UploadedFileRecord } from '@/types/portfolio';
import { EditableText } from './EditableText';
import { EditableTagList } from './EditableTagList';
import { SmartMediaView } from './SmartMediaView';
import { extractYouTubeId, extractFirstVideoFromText } from '@/lib/mediaUtils';

interface CoursesSectionProps {
  data: PortfolioData;
  isAdmin: boolean;
  onUpdateCourse: (courseId: string, field: keyof CourseItem, value: any) => void;
  onUpdateProject: (courseId: string, projId: string, field: keyof CourseProject, value: any) => void;
  onAddCourse: () => void;
  onDeleteCourse: (courseId: string) => void;
  onAddProject: (courseId: string) => void;
  onDeleteProject: (courseId: string, projId: string) => void;
  onUpdateSiteText: (field: keyof SectionTextConfig, value: string) => void;
  onFileUploaded?: (record: UploadedFileRecord) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  data,
  isAdmin,
  onUpdateCourse,
  onUpdateProject,
  onAddCourse,
  onDeleteCourse,
  onAddProject,
  onDeleteProject,
  onUpdateSiteText,
  onFileUploaded
}) => {
  const { courses, siteTexts, uploadedFiles } = data;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<{ courseId: string; project: CourseProject } | null>(null);

  // Extract all unique categories dynamically from courses
  const allCategories = Array.from(new Set(courses.map(c => c.category).filter(Boolean)));

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <section id="courses" className="py-16 border-t border-sky-500/20">
      <div className="space-y-10">
        {/* Section Header & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-1">
              <Cpu size={14} />
              <EditableText
                value={siteTexts.coursesBadge}
                onSave={(v) => onUpdateSiteText('coursesBadge', v)}
                isAdmin={isAdmin}
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              <EditableText
                value={siteTexts.coursesTitle}
                onSave={(v) => onUpdateSiteText('coursesTitle', v)}
                isAdmin={isAdmin}
              />
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-sky-500/20">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedCategory === 'all'
                    ? 'bg-sky-500 text-white shadow-[0_0_10px_rgba(56,189,248,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ทั้งหมด
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-sky-500 text-white shadow-[0_0_10px_rgba(56,189,248,0.4)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Add Course Button */}
            {isAdmin && (
              <button
                onClick={onAddCourse}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition shadow"
              >
                <Plus size={14} />
                <span>เพิ่มรายวิชา</span>
              </button>
            )}
          </div>
        </div>

        {/* Courses & Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="electric-glass rounded-2xl p-6 border border-sky-500/20 flex flex-col justify-between hover:border-sky-400/50 transition-all duration-300 group relative"
            >
              {/* Delete Course in Admin Mode */}
              {isAdmin && (
                <button
                  onClick={() => onDeleteCourse(course.id)}
                  title="ลบรายวิชานี้"
                  className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-900/80 text-rose-400 hover:bg-rose-950 hover:text-rose-200 border border-rose-500/30 transition z-10"
                >
                  <Trash2 size={15} />
                </button>
              )}

              <div>
                {/* Course Header */}
                <div className="flex items-center justify-between gap-2 mb-3 pr-8">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-sky-950/80 border border-sky-400/40 text-sky-300 font-semibold">
                    <EditableText
                      value={course.code}
                      onSave={(v) => onUpdateCourse(course.id, 'code', v)}
                      isAdmin={isAdmin}
                    />
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>หมวด:</span>
                    <EditableText
                      value={course.category}
                      onSave={(v) => onUpdateCourse(course.id, 'category', v)}
                      isAdmin={isAdmin}
                      className="text-sky-400 font-medium"
                    />
                    <span>•</span>
                    <EditableText
                      value={course.credits}
                      onSave={(v) => onUpdateCourse(course.id, 'credits', v)}
                      isAdmin={isAdmin}
                    />
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition">
                  <EditableText
                    value={course.title}
                    onSave={(v) => onUpdateCourse(course.id, 'title', v)}
                    isAdmin={isAdmin}
                  />
                </h3>

                {/* Course Description */}
                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed line-clamp-2">
                  <EditableText
                    value={course.description}
                    onSave={(v) => onUpdateCourse(course.id, 'description', v)}
                    isAdmin={isAdmin}
                    multiline={true}
                  />
                </p>

                {/* Projects in Course */}
                <div className="space-y-3 pt-3 border-t border-sky-500/15">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold text-sky-400 flex items-center gap-1.5 uppercase tracking-wider">
                      <Layers size={13} />
                      <span>ชิ้นงานในรายวิชา ({course.projects.length})</span>
                    </div>
                    {isAdmin && (
                      <button
                        onClick={() => onAddProject(course.id)}
                        className="text-[11px] flex items-center gap-1 text-sky-400 hover:text-sky-300 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30"
                      >
                        <Plus size={11} />
                        <span>เพิ่มชิ้นงาน</span>
                      </button>
                    )}
                  </div>

                  {course.projects.map((proj) => {
                    const isYt = Boolean(extractYouTubeId(proj.imageUrl) || extractYouTubeId(proj.videoUrl || '') || extractFirstVideoFromText(proj.description));

                    return (
                      <div
                        key={proj.id}
                        onClick={() => setActiveProjectModal({ courseId: course.id, project: proj })}
                        className="p-3.5 rounded-xl bg-slate-900/60 border border-sky-500/20 hover:border-sky-400/60 hover:bg-slate-900/90 cursor-pointer transition flex items-center justify-between gap-3 group/p relative"
                      >
                        <div className="space-y-1 overflow-hidden pr-6">
                          <div className="flex items-center gap-2">
                            {isYt && (
                              <span className="p-1 rounded bg-red-600/90 text-white shrink-0">
                                <Play size={10} className="fill-white" />
                              </span>
                            )}
                            <h4 className="text-xs sm:text-sm font-semibold text-white group-hover/p:text-sky-300 transition truncate">
                              {proj.title}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {proj.tags.slice(0, 3).map((tag, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-mono text-sky-300/80 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/20"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {isAdmin && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onDeleteProject(course.id, proj.id);
                              }}
                              title="ลบชิ้นงานนี้"
                              className="p-1 text-slate-500 hover:text-rose-400 transition"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                          <ChevronRight size={16} className="text-slate-500 group-hover/p:text-sky-400 group-hover/p:translate-x-1 transition" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal with SmartMediaView */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="electric-glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-sky-400 p-6 space-y-5 shadow-[0_0_50px_rgba(56,189,248,0.3)] relative">
            <div className="flex items-start justify-between gap-4 border-b border-sky-500/20 pb-4">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  รายละเอียดชิ้นงาน / โครงงาน
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  <EditableText
                    value={activeProjectModal.project.title}
                    onSave={(val) => {
                      onUpdateProject(activeProjectModal.courseId, activeProjectModal.project.id, 'title', val);
                      setActiveProjectModal({
                        ...activeProjectModal,
                        project: { ...activeProjectModal.project, title: val }
                      });
                    }}
                    isAdmin={isAdmin}
                  />
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Smart Media Player (YouTube Embed / MP4 / Image) */}
            <div className="w-full rounded-xl overflow-hidden border border-sky-500/30 bg-slate-950 relative min-h-[220px]">
              <SmartMediaView
                mediaUrl={activeProjectModal.project.imageUrl}
                alt={activeProjectModal.project.title}
                onSaveMedia={(newUrl) => {
                  onUpdateProject(activeProjectModal.courseId, activeProjectModal.project.id, 'imageUrl', newUrl);
                  setActiveProjectModal({
                    ...activeProjectModal,
                    project: { ...activeProjectModal.project, imageUrl: newUrl }
                  });
                }}
                isAdmin={isAdmin}
                uploadedFiles={uploadedFiles}
                onFileUploaded={onFileUploaded}
                showPlayerInModal={true}
              />
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                    คำอธิบายการทำงาน & ผลลัพธ์
                  </h4>
                  {extractYouTubeId(activeProjectModal.project.description) && (
                    <a
                      href={activeProjectModal.project.description}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-red-400 hover:text-red-300 inline-flex items-center gap-1 font-medium"
                    >
                      <ExternalLink size={12} />
                      <span>เปิดดูบน YouTube</span>
                    </a>
                  )}
                </div>

                <div className="text-sm text-slate-300 leading-relaxed p-3 rounded-xl bg-slate-900/60 border border-sky-500/15">
                  <EditableText
                    value={activeProjectModal.project.description}
                    onSave={(val) => {
                      onUpdateProject(activeProjectModal.courseId, activeProjectModal.project.id, 'description', val);
                      // If the user pasted a YouTube URL in description and image is default, also update image/video
                      if (extractYouTubeId(val) && !extractYouTubeId(activeProjectModal.project.imageUrl)) {
                        onUpdateProject(activeProjectModal.courseId, activeProjectModal.project.id, 'imageUrl', val);
                        setActiveProjectModal({
                          ...activeProjectModal,
                          project: { ...activeProjectModal.project, description: val, imageUrl: val }
                        });
                        return;
                      }
                      setActiveProjectModal({
                        ...activeProjectModal,
                        project: { ...activeProjectModal.project, description: val }
                      });
                    }}
                    isAdmin={isAdmin}
                    multiline={true}
                  />
                </div>
              </div>

              {/* Highlights with EditableTagList */}
              <div>
                <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                  จุดเด่นและสาระสำคัญ
                </h4>
                <EditableTagList
                  items={activeProjectModal.project.highlights || []}
                  onUpdateList={(newList) => {
                    onUpdateProject(activeProjectModal.courseId, activeProjectModal.project.id, 'highlights', newList);
                    setActiveProjectModal({
                      ...activeProjectModal,
                      project: { ...activeProjectModal.project, highlights: newList }
                    });
                  }}
                  isAdmin={isAdmin}
                  prefix="✓ "
                  pillClassName="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-2 rounded-lg border border-sky-500/20"
                  addPlaceholder="เพิ่มจุดเด่น..."
                />
              </div>

              {/* Tags with EditableTagList */}
              <div>
                <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                  แท็กและทักษะที่เกี่ยวข้อง
                </h4>
                <EditableTagList
                  items={activeProjectModal.project.tags || []}
                  onUpdateList={(newList) => {
                    onUpdateProject(activeProjectModal.courseId, activeProjectModal.project.id, 'tags', newList);
                    setActiveProjectModal({
                      ...activeProjectModal,
                      project: { ...activeProjectModal.project, tags: newList }
                    });
                  }}
                  isAdmin={isAdmin}
                  addPlaceholder="เพิ่มแท็ก..."
                />
              </div>
            </div>

            <div className="pt-4 border-t border-sky-500/20 flex justify-end">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
