'use client';

import React, { useState } from 'react';
import { Cpu, BookOpen, Layers, ExternalLink, Tag, CheckCircle2, ChevronRight, X, Play } from 'lucide-react';
import { PortfolioData, CourseItem, CourseProject } from '@/types/portfolio';
import { EditableText } from './EditableText';

interface CoursesSectionProps {
  data: PortfolioData;
  isAdmin: boolean;
  onUpdateCourse: (courseId: string, field: keyof CourseItem, value: string) => void;
  onUpdateProject: (courseId: string, projId: string, field: keyof CourseProject, value: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  data,
  isAdmin,
  onUpdateCourse,
  onUpdateProject
}) => {
  const { courses } = data;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<CourseProject | null>(null);

  const categories = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'วิชาชีพวิศวกรรมไฟฟ้า', label: 'วิชาชีพวิศวกรรมไฟฟ้า' },
    { id: 'วิชาชีพครู', label: 'วิชาชีพครู' }
  ];

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
              <span>Curriculum & Applied Engineering Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              รายวิชาและชิ้นงาน (Courses & Projects)
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-sky-500/20 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedCategory === cat.id
                    ? 'bg-sky-500 text-white shadow-[0_0_10px_rgba(56,189,248,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses & Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="electric-glass rounded-2xl p-6 border border-sky-500/20 flex flex-col justify-between hover:border-sky-400/50 transition-all duration-300 group"
            >
              <div>
                {/* Course Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-sky-950/80 border border-sky-400/40 text-sky-300 font-semibold">
                    <EditableText
                      value={course.code}
                      onSave={(v) => onUpdateCourse(course.id, 'code', v)}
                      isAdmin={isAdmin}
                    />
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    หน่วยกิต: {course.credits}
                  </span>
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
                  <div className="text-xs font-semibold text-sky-400 flex items-center gap-1.5 uppercase tracking-wider">
                    <Layers size={13} />
                    <span>ชิ้นงานและโครงงานในรายวิชา ({course.projects.length})</span>
                  </div>

                  {course.projects.map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => setActiveProjectModal(proj)}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-sky-500/20 hover:border-sky-400/60 hover:bg-slate-900/90 cursor-pointer transition flex items-center justify-between gap-3 group/p"
                    >
                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-white group-hover/p:text-sky-300 transition">
                          {proj.title}
                        </h4>
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
                      <ChevronRight size={16} className="text-slate-500 group-hover/p:text-sky-400 group-hover/p:translate-x-1 transition" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="electric-glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-sky-400 p-6 space-y-5 shadow-[0_0_50px_rgba(56,189,248,0.3)]">
            <div className="flex items-start justify-between gap-4 border-b border-sky-500/20 pb-4">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  รายละเอียดชิ้นงาน / โครงงาน
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Media Preview if available */}
            {activeProjectModal.imageUrl && (
              <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-sky-500/30 bg-slate-950 relative">
                <img
                  src={activeProjectModal.imageUrl}
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
                  คำอธิบายการทำงาน & ผลลัพธ์
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeProjectModal.description}
                </p>
              </div>

              {activeProjectModal.highlights && activeProjectModal.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                    จุดเด่นและสาระสำคัญ
                  </h4>
                  <ul className="space-y-1.5">
                    {activeProjectModal.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                  แท็กและทักษะที่เกี่ยวข้อง
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded-md border border-sky-500/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
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
