'use client';

import React, { useState, useEffect } from 'react';
import { Camera, Upload, Link as LinkIcon, Image as ImageIcon, X, Loader2, Video as VideoIcon, Presentation, FileText } from 'lucide-react';
import { StorageService } from '@/lib/storageService';
import { UploadedFileRecord } from '@/types/portfolio';
import { extractYouTubeId, getYouTubeThumbnail } from '@/lib/mediaUtils';

interface EditableImageProps {
  src: string;
  alt: string;
  onSave: (newUrl: string) => void;
  isAdmin: boolean;
  className?: string;
  containerClassName?: string;
  uploadedFiles?: UploadedFileRecord[];
  onFileUploaded?: (record: UploadedFileRecord) => void;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  src,
  alt,
  onSave,
  isAdmin,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  uploadedFiles = [],
  onFileUploaded
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'upload' | 'library' | 'url'>('upload');
  const [customUrl, setCustomUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);

  // If src is a YouTube URL, extract thumbnail URL
  const ytId = extractYouTubeId(src);
  const hasValidSrc = Boolean(src && src.trim() && src !== '/images/helixion_reference.png');
  const effectiveSrc = ytId ? getYouTubeThumbnail(ytId) : src;

  useEffect(() => {
    setImgError(false);
  }, [src]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setIsUploading(true);
    setErrorMsg(null);

    try {
      const file = e.target.files[0];
      const record = await StorageService.uploadFile(file);
      if (onFileUploaded) {
        onFileUploaded(record);
      }
      onSave(record.url);
      setIsModalOpen(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setErrorMsg('เกิดข้อผิดพลาดในการอัปโหลด: ' + msg);
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  const handleSelectFromLibrary = (url: string) => {
    onSave(url);
    setIsModalOpen(false);
  };

  const handleSaveCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim()) {
      onSave(customUrl.trim());
      setIsModalOpen(false);
    }
  };

  const mediaFiles = uploadedFiles.filter(f => 
    f.category === 'image' || 
    f.type.startsWith('image/') || 
    f.type.includes('pdf') || 
    f.name.endsWith('.pdf')
  );

  const isPlaceholderMode = !hasValidSrc || imgError;

  return (
    <div className={`relative group w-full h-full flex flex-col justify-center ${containerClassName}`}>
      {/* Current Image or Fallback */}
      {!isPlaceholderMode ? (
        <img
          src={effectiveSrc}
          alt={alt}
          className={className}
          onError={() => setImgError(true)}
        />
      ) : (
        <div 
          onClick={(e) => {
            if (isAdmin) {
              e.stopPropagation();
              setCustomUrl(src || '');
              setIsModalOpen(true);
            }
          }}
          className={`w-full h-full min-h-[240px] flex flex-col items-center justify-center p-6 bg-[var(--bg-secondary)] text-[var(--text-main)] border-2 border-dashed border-[var(--border-neon)] text-center gap-3 rounded-[inherit] transition ${
            isAdmin ? 'cursor-pointer hover:bg-[var(--bg-card)] hover:border-[var(--accent-cyan)] shadow-inner' : ''
          }`}
        >
          <div className="h-16 w-16 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-neon)] flex items-center justify-center text-[var(--accent-cyan)] shadow-[0_0_20px_var(--border-neon)] group-hover:scale-105 transition duration-300">
            <Presentation size={32} />
          </div>
          <div className="space-y-1">
            <span className="text-sm font-bold text-[var(--text-title)] block">
              {alt || 'ยังไม่ได้ระบุรูปภาพหรือสไลด์ผลงาน'}
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono block">
              รองรับทั้ง Google Slides, Canva, ไฟล์ PDF, วิดีโอ YouTube และรูปภาพ
            </span>
          </div>

          {isAdmin ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCustomUrl(src || '');
                setIsModalOpen(true);
              }}
              className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-black bg-[var(--accent-cyan)] hover:brightness-110 px-4 py-2 rounded-xl border border-white/20 shadow-[0_0_15px_var(--accent-cyan)] transition transform hover:scale-105 cursor-pointer"
            >
              <Upload size={14} />
              <span>คลิกเพื่อตั้งค่ารูปภาพ / ใส่ลิงก์สไลด์</span>
            </button>
          ) : (
            <span className="text-[11px] text-[var(--text-muted)] italic">
              (อยู่ในระหว่างจัดเตรียมสื่อนำเสนอ)
            </span>
          )}
        </div>
      )}

      {/* YouTube indicator if thumbnail was resolved */}
      {ytId && (
        <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded bg-black/80 border border-red-500/40 text-[10px] font-bold text-red-400 font-mono flex items-center gap-1 shadow">
          <VideoIcon size={12} />
          <span>YouTube Cover</span>
        </span>
      )}

      {/* Admin Hover Overlay Button (Only when actual image is showing) */}
      {isAdmin && !isPlaceholderMode && (
        <div
          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-200 flex flex-col items-center justify-center gap-2 p-2 z-20 cursor-pointer backdrop-blur-xs rounded-[inherit]"
          onClick={(e) => {
            e.stopPropagation();
            setCustomUrl(src || '');
            setIsModalOpen(true);
          }}
        >
          <div className="p-3 rounded-full bg-[var(--accent-cyan)] text-black shadow-[0_0_20px_var(--accent-cyan)] hover:scale-110 transition">
            <Camera size={20} />
          </div>
          <span className="text-xs font-bold text-[var(--text-title)] bg-[var(--bg-secondary)] px-3 py-1.5 rounded-full border border-[var(--border-neon)] shadow-lg">
            คลิกเพื่อเปลี่ยนรูปภาพ / สไลด์ / วิดีโอ
          </span>
        </div>
      )}

      {/* Image & Slide Picker Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(false);
          }}
        >
          <div 
            className="bg-[var(--bg-card)] rounded-2xl max-w-lg w-full border-2 border-[var(--border-neon)] p-6 space-y-5 shadow-[0_0_50px_var(--border-neon)] text-[var(--text-main)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--accent-cyan)] border border-[var(--border-subtle)]">
                  <Presentation size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-title)]">จัดการสื่อและสไลด์ผลงาน</h3>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono">รูปภาพ, Google Slides, Canva, PDF หรือ YouTube</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-rose-400 hover:bg-rose-500/10 border border-[var(--border-subtle)] transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-950/70 border border-rose-500/50 text-rose-300 text-xs">
                {errorMsg}
              </div>
            )}

            {/* Picker Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  activeTab === 'upload' 
                    ? 'bg-[var(--accent-cyan)] text-black font-bold shadow' 
                    : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'
                }`}
              >
                <Upload size={14} />
                <span>อัปโหลดไฟล์</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('library')}
                className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  activeTab === 'library' 
                    ? 'bg-[var(--accent-cyan)] text-black font-bold shadow' 
                    : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'
                }`}
              >
                <ImageIcon size={14} />
                <span>คลังไฟล์ ({mediaFiles.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('url')}
                className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  activeTab === 'url' 
                    ? 'bg-[var(--accent-cyan)] text-black font-bold shadow' 
                    : 'text-[var(--text-muted)] hover:text-[var(--text-title)]'
                }`}
              >
                <LinkIcon size={14} />
                <span>วางลิงก์สไลด์/URL</span>
              </button>
            </div>

            {/* Tab 1: Upload */}
            {activeTab === 'upload' && (
              <label className="border-2 border-dashed border-[var(--border-neon)] hover:border-[var(--accent-cyan)] rounded-2xl p-7 flex flex-col items-center justify-center text-center cursor-pointer bg-[var(--bg-secondary)]/50 hover:bg-[var(--bg-secondary)] transition group">
                {isUploading ? (
                  <div className="flex flex-col items-center gap-3 text-[var(--accent-cyan)] py-4">
                    <Loader2 size={36} className="animate-spin" />
                    <span className="text-sm font-semibold">กำลังอัปโหลดไฟล์ไปยัง Storage...</span>
                  </div>
                ) : (
                  <>
                    <div className="p-3.5 rounded-2xl bg-[var(--bg-card)] text-[var(--accent-cyan)] mb-3 border border-[var(--border-neon)] shadow-[0_0_15px_var(--border-neon)] group-hover:scale-110 transition">
                      <Upload size={26} />
                    </div>
                    <span className="text-sm font-bold text-[var(--text-title)] mb-1">คลิกเลือกรูปภาพ หรือ ไฟล์สไลด์ (PDF)</span>
                    <span className="text-xs text-[var(--text-muted)]">รองรับ PNG, JPG, WebP, SVG และเอกสาร PDF</span>
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={handleFileUpload}
                      disabled={isUploading}
                      className="hidden"
                    />
                  </>
                )}
              </label>
            )}

            {/* Tab 2: Media Library */}
            {activeTab === 'library' && (
              <div className="space-y-3">
                {mediaFiles.length === 0 ? (
                  <p className="text-xs text-[var(--text-muted)] text-center py-8">
                    ยังไม่มีไฟล์ในคลัง สามารถอัปโหลดใหม่ได้ที่แท็บ 'อัปโหลดไฟล์'
                  </p>
                ) : (
                  <div className="grid grid-cols-3 gap-2.5 max-h-60 overflow-y-auto pr-1">
                    {mediaFiles.map((f) => {
                      const isPdf = f.type?.includes('pdf') || f.name?.endsWith('.pdf');
                      return (
                        <div
                          key={f.id}
                          onClick={() => handleSelectFromLibrary(f.url)}
                          className={`h-24 rounded-xl overflow-hidden border cursor-pointer relative group transition flex flex-col items-center justify-center bg-[var(--bg-secondary)] ${
                            src === f.url ? 'border-[var(--accent-cyan)] ring-2 ring-[var(--accent-cyan)]' : 'border-[var(--border-subtle)] hover:border-[var(--border-neon)]'
                          }`}
                        >
                          {isPdf ? (
                            <div className="flex flex-col items-center justify-center p-2 text-center">
                              <FileText size={24} className="text-rose-500 mb-1" />
                              <span className="text-[10px] text-[var(--text-main)] truncate max-w-[80px]">{f.name}</span>
                            </div>
                          ) : (
                            <img src={f.url} alt={f.name} className="w-full h-full object-cover" />
                          )}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[11px] font-bold transition">
                            เลือกไฟล์นี้
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Tab 3: Custom URL or Slide Link */}
            {activeTab === 'url' && (
              <form onSubmit={handleSaveCustomUrl} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[var(--text-title)] flex items-center gap-1.5">
                    <LinkIcon size={14} className="text-[var(--accent-cyan)]" />
                    <span>ระบุลิงก์สไลด์, วิดีโอ หรือ รูปภาพ</span>
                  </label>
                  <input
                    type="url"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="https://docs.google.com/presentation/... หรือ Canva, YouTube, รูปภาพ"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-main)] placeholder-[var(--text-muted)] text-xs focus:outline-none focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)] transition"
                  />
                  <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[11px] space-y-1.5 text-[var(--text-muted)]">
                    <p className="font-semibold text-[var(--text-title)]">💡 รูปแบบที่รองรับการฝังสด (Interactive Embed):</p>
                    <div className="grid grid-cols-1 gap-1 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <span className="text-amber-500 font-bold">● Google Slides:</span>
                        <span>วางลิงก์หน้าสไลด์ หรือลิงก์เผยแพร่ (Publish) ได้เลย</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-cyan-400 font-bold">● Canva:</span>
                        <span>วางลิงก์แชร์สไลด์ Canva</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-rose-500 font-bold">● YouTube:</span>
                        <span>เล่นวิดีโอได้ทันทีในหน้าต่าง</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400 font-bold">● รูปภาพ &amp; PDF:</span>
                        <span>URL รูปภาพตรง (JPG, PNG, WebP) หรือไฟล์ .pdf</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[var(--accent-cyan)] hover:brightness-110 text-black text-xs font-bold transition cursor-pointer shadow-md"
                >
                  บันทึกลิงก์สื่อและสไลด์
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
