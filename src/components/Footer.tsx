'use client';

import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Sparkles, Terminal } from 'lucide-react';
import { PortfolioData, SectionTextConfig } from '@/types/portfolio';
import { EditableText } from './EditableText';

interface FooterProps {
  data: PortfolioData;
  isAdmin: boolean;
  onUpdateProfile: (field: keyof PortfolioData['profile'], value: string) => void;
  onUpdateSiteText: (field: keyof SectionTextConfig, value: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  data,
  isAdmin,
  onUpdateProfile,
  onUpdateSiteText
}) => {
  const { profile, siteTexts } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="mt-16 border-t-2 border-[#2b356e] bg-[#050612] text-slate-300 relative select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8 font-mono">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Column 1: Official University & Creator Credentials */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-[#18112c] border-2 border-pink-500/60 flex items-center justify-center text-pink-400 font-bold text-base shadow-[0_0_10px_rgba(236,72,153,0.3)]">
                ✦
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-wider uppercase">
                  <EditableText
                    value={profile.name}
                    onSave={(v) => onUpdateProfile('name', v)}
                    isAdmin={isAdmin}
                  />
                </h3>
                <p className="text-[11px] text-sky-400">
                  STUDENT ID: <EditableText
                    value={profile.studentId}
                    onSave={(v) => onUpdateProfile('studentId', v)}
                    isAdmin={isAdmin}
                  />
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#090b20] border-2 border-[#2b356e] text-xs space-y-2 leading-relaxed">
              <p className="font-bold text-white">
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
              <p className="text-[11px] text-slate-400 pt-2 border-t border-[#1e254e] font-chakra">
                <EditableText
                  value={siteTexts.footerNote}
                  onSave={(v) => onUpdateSiteText('footerNote', v)}
                  isAdmin={isAdmin}
                  multiline={true}
                />
              </p>
            </div>
          </div>

          {/* Column 2: Direct Contact Channels */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              <EditableText
                value={siteTexts.footerContactHeading}
                onSave={(v) => onUpdateSiteText('footerContactHeading', v)}
                isAdmin={isAdmin}
              />
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#090b20] border-2 border-[#2b356e] hover:border-sky-400 transition text-slate-200">
                <span className="flex items-center gap-2 text-slate-400">
                  <Phone size={13} className="text-sky-400" />
                  <span>TEL:</span>
                </span>
                <EditableText
                  value={profile.phone}
                  onSave={(v) => onUpdateProfile('phone', v)}
                  isAdmin={isAdmin}
                  className="font-bold text-white"
                />
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#090b20] border-2 border-[#2b356e] hover:border-sky-400 transition text-slate-200">
                <span className="flex items-center gap-2 text-slate-400">
                  <Mail size={13} className="text-sky-400" />
                  <span>EMAIL:</span>
                </span>
                <EditableText
                  value={profile.email}
                  onSave={(v) => onUpdateProfile('email', v)}
                  isAdmin={isAdmin}
                  className="font-bold text-white truncate max-w-[170px]"
                />
              </div>

              <div className="p-2.5 rounded-lg bg-[#090b20] border border-[#1f2750] flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-sky-400" />
                  <span>LOCATION: KHON KAEN, TH</span>
                </span>
                <span className="text-emerald-400 font-bold">ONLINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-6 border-t-2 border-[#1f2750] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-[11px]">
            <EditableText
              value={siteTexts.footerCopyright}
              onSave={(v) => onUpdateSiteText('footerCopyright', v)}
              isAdmin={isAdmin}
            />
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101432] border border-[#2b356e] text-sky-300 hover:text-white hover:border-sky-400 transition text-[11px] font-bold cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
