'use client';

import React, { useState } from 'react';
import { Cpu, Layers, ChevronRight, X, Plus, Trash2, ExternalLink, Play, Video as VideoIcon, Sparkles } from 'lucide-react';
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
    <section id="courses" className="py-12 border-t-2 border-[var(--border-neon)]/60">
      <div className="space-y-6">
        {/* Section Header & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-500 dark:text-sky-400 tracking-wider uppercase mb-1">
              <span>[ 03 // MODULES ]</span>
              <EditableText
                value={siteTexts.coursesBadge}
                onSave={(v) => onUpdateSiteText('coursesBadge', v)}
                isAdmin={isAdmin}
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-title)] tracking-tight">
              <EditableText
                value={siteTexts.coursesTitle}
                onSave={(v) => onUpdateSiteText('coursesTitle', v)}
                isAdmin={isAdmin}
                className="pixel-font"
              />
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono">
            {/* Category Filter Pills (Pixel Style) */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-[var(--bg-card)] border-2 border-[var(--border-neon)]">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1 rounded text-xs transition ${
                  selectedCategory === 'all'
                    ? 'bg-sky-500 text-white font-bold shadow-[0_0_10px_rgba(56,189,248,0.4)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'
                }`}
              >
                ALL (ทั้งหมด)
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded text-xs transition ${
                    selectedCategory === cat
                      ? 'bg-sky-500 text-white font-bold shadow-[0_0_10px_rgba(56,189,248,0.4)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition shadow"
              >
                <Plus size={14} />
                <span>เพิ่มรายวิชา</span>
              </button>
            )}
          </div>
        </div>

        {/* Courses & Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="holo-card bg-[var(--bg-card)] rounded-xl border-2 border-[var(--border-neon)] overflow-hidden flex flex-col justify-between hover:border-[var(--accent-cyan)] transition-all duration-300 group relative shadow-lg"
            >
              {/* Window Header Bar */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-[var(--bg-card-header)] border-b-2 border-[var(--border-neon)] select-none font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sky-600 dark:text-sky-300 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/40">
                    <EditableText
                      value={course.code}
                      onSave={(v) => onUpdateCourse(course.id, 'code', v)}
                      isAdmin={isAdmin}
                    />
                  </span>
                  <span className="text-[var(--text-muted)] text-[11px]">
                    <EditableText
                      value={course.category}
                      onSave={(v) => onUpdateCourse(course.id, 'category', v)}
                      isAdmin={isAdmin}
                    />
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-pink-500 dark:text-pink-400 font-semibold">
                    <EditableText
                      value={course.credits}
                      onSave={(v) => onUpdateCourse(course.id, 'credits', v)}
                      isAdmin={isAdmin}
                    />
                  </span>
                  {isAdmin && (
                    <button
                      onClick={() => onDeleteCourse(course.id)}
                      title="ลบรายวิชานี้"
                      className="p-1 text-rose-400 hover:text-white transition"
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>
              </div>

              {/* Course Body Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-title)] mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-300 transition">
                    <EditableText
                      value={course.title}
                      onSave={(v) => onUpdateCourse(course.id, 'title', v)}
                      isAdmin={isAdmin}
                    />
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-4 leading-relaxed line-clamp-2 font-chakra">
                    <EditableText
                      value={course.description}
                      onSave={(v) => onUpdateCourse(course.id, 'description', v)}
                      isAdmin={isAdmin}
                      multiline={true}
                    />
                  </p>
                </div>

                {/* Projects in Course */}
                <div className="space-y-2 pt-3 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between font-mono">
                    <div className="text-[11px] font-bold text-sky-500 dark:text-sky-400 flex items-center gap-1.5 uppercase tracking-wider">
                      <Layers size={13} />
                      <span>ชิ้นงานในรายวิชา ({course.projects.length})</span>
                    </div>
                    {isAdmin && (
                      <button
                        onClick={() => onAddProject(course.id)}
                        className="text-[10px] flex items-center gap-1 text-sky-500 dark:text-sky-400 hover:text-[var(--text-title)] bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/30"
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
                        className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-sky-400 hover:bg-[var(--bg-card)] cursor-pointer transition flex items-center justify-between gap-3 group/p relative"
                      >
                        <div className="space-y-1 overflow-hidden pr-4">
                          <div className="flex items-center gap-2">
                            {isYt && (
                              <span className="p-1 rounded bg-rose-600 text-white shrink-0">
                                <Play size={10} className="fill-white" />
                              </span>
                            )}
                            <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-main)] group-hover/p:text-sky-500 dark:group-hover/p:text-sky-300 transition truncate">
                              {proj.title}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1 font-mono">
                            {proj.tags.slice(0, 3).map((tag, i) => (
                              <span
                                key={i}
                                className="text-[9px] text-sky-600 dark:text-sky-300 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/30"
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
                          <ChevronRight size={15} className="text-slate-500 group-hover/p:text-sky-400 group-hover/p:translate-x-1 transition" />
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

      {/* Retro OS Project Detail Modal with SmartMediaView */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[var(--bg-card)] border-2 border-[var(--border-neon)] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-card-header)] border-b-2 border-[var(--border-neon)] select-none font-mono">
              <div className="flex items-center gap-2">
                <span className="text-pink-500 dark:text-pink-400 font-bold">PROJECT.MOD</span>
                <span className="text-[var(--text-muted)]">/</span>
                <span className="text-[var(--text-title)] text-xs truncate max-w-[280px]">
                  {activeProjectModal.project.title}
                </span>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1 text-[var(--text-muted)] hover:text-rose-400 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-title)]">
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

              {/* Smart Media Player (YouTube Embed / MP4 / Image) */}
              <div className="w-full rounded-lg overflow-hidden border-2 border-[var(--border-neon)] bg-[var(--bg-primary)] relative min-h-[220px]">
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

              <div className="space-y-4 font-mono">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-bold text-sky-500 dark:text-sky-400 uppercase tracking-wider">
                      DESCRIPTION &amp; OUTCOMES
                    </h4>
                    {extractYouTubeId(activeProjectModal.project.description) && (
                      <a
                        href={activeProjectModal.project.description}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-rose-500 dark:text-rose-400 hover:text-rose-600 inline-flex items-center gap-1 font-medium"
                      >
                        <ExternalLink size={12} />
                        <span>OPEN ON YOUTUBE</span>
                      </a>
                    )}
                  </div>

                  <div className="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] font-chakra">
                    <EditableText
                      value={activeProjectModal.project.description}
                      onSave={(val) => {
                        onUpdateProject(activeProjectModal.courseId, activeProjectModal.project.id, 'description', val);
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
                  <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                    KEY HIGHLIGHTS
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
                    pillClassName="flex items-center gap-2 text-xs text-slate-300 bg-[#0e122b] p-2 rounded-lg border border-[#232b58]"
                    addPlaceholder="เพิ่มจุดเด่น..."
                  />
                </div>

                {/* Tags with EditableTagList */}
                <div>
                  <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                    TAGS &amp; SKILLS
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
                    pillClassName="px-2.5 py-1 rounded bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs"
                    addPlaceholder="เพิ่มแท็ก..."
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-[#1d2550] flex justify-end font-mono">
                <button
                  onClick={() => setActiveProjectModal(null)}
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
