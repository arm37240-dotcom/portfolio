'use client';

import React from 'react';
import { Phone, Mail, GraduationCap, MapPin, Heart, ArrowUp } from 'lucide-react';
import { PortfolioData } from '@/types/portfolio';
import { EditableText } from './EditableText';

interface FooterProps {
  data: PortfolioData;
  isAdmin: boolean;
  onUpdateProfile: (field: keyof PortfolioData['profile'], value: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  data,
  isAdmin,
  onUpdateProfile
}) => {
  const { profile } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="mt-20 border-t border-sky-500/20 bg-[#02050c]/90 text-slate-300 relative overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_#38bdf8]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Official University & Creator Credentials */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-sky-950/80 border border-sky-400/40 flex items-center justify-center text-sky-400 font-bold text-lg shadow-[0_0_12px_rgba(56,189,248,0.3)]">
                ⚡
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  <EditableText
                    value={profile.name}
                    onSave={(v) => onUpdateProfile('name', v)}
                    isAdmin={isAdmin}
                  />
                </h3>
                <p className="text-xs font-mono text-sky-400">
                  รหัสนักศึกษา: <EditableText
                    value={profile.studentId}
                    onSave={(v) => onUpdateProfile('studentId', v)}
                    isAdmin={isAdmin}
                  />
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl electric-glass border border-sky-500/20 text-xs sm:text-sm space-y-2 leading-relaxed">
              <p className="font-semibold text-slate-200">
                <EditableText
                  value={profile.university}
                  onSave={(v) => onUpdateProfile('university', v)}
                  isAdmin={isAdmin}
                />
              </p>
              <p className="text-sky-300">
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
              </p>
              <p className="text-[11px] text-slate-400 pt-1 border-t border-sky-500/10">
                แฟ้มสะสมผลงานทางวิชาการและวิชาชีพ (Electronic Portfolio for Vocational & Engineering Education)
              </p>
            </div>
          </div>

          {/* Column 2: Direct Contact Channels */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              ช่องทางการติดต่ออย่างเป็นทางการ
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-sky-500/20 hover:border-sky-400/50 hover:bg-slate-900 transition text-slate-200"
              >
                <span className="flex items-center gap-2.5">
                  <Phone size={15} className="text-sky-400" />
                  <span>เบอร์โทรศัพท์:</span>
                </span>
                <span className="font-mono font-semibold text-white">{profile.phone}</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-sky-500/20 hover:border-sky-400/50 hover:bg-slate-900 transition text-slate-200"
              >
                <span className="flex items-center gap-2.5">
                  <Mail size={15} className="text-sky-400" />
                  <span>อีเมล:</span>
                </span>
                <span className="font-mono font-semibold text-white">{profile.email}</span>
              </a>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-sky-500/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-sky-400" />
                  <span>ที่ตั้ง: ขอนแก่น, ประเทศไทย</span>
                </span>
                <span className="text-sky-400 font-mono">RMUTI KKC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-sky-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} จัดทำโดย นาย อภิณัฐชรัชน์ มณีรัตน์ — สงวนลิขสิทธิ์
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-sky-500/30 text-sky-300 hover:text-white hover:border-sky-400 transition"
          >
            <span>กลับสู่ด้านบน</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
