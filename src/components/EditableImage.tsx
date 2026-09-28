'use client';

import React, { useState, useEffect } from 'react';
import { Camera, Upload, Link as LinkIcon, Image as ImageIcon, X, Check, Loader2, Video as VideoIcon } from 'lucide-react';
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
  const effectiveSrc = ytId ? getYouTubeThumbnail(ytId) : (src || '/images/helixion_reference.png');

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

  const imageFiles = uploadedFiles.filter(f => f.category === 'image' || f.type.startsWith('image/'));

  return (
    <div className={`relative group ${containerClassName}`}>
      {/* Current Image or Fallback */}
      {!imgError ? (
        <img
          src={effectiveSrc}
          alt={alt}
          className={className}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full min-h-[140px] flex flex-col items-center justify-center p-4 bg-slate-950 text-slate-400 border border-sky-500/20 text-center gap-2">
          <ImageIcon size={32} className="text-sky-400/60" />
          <span className="text-xs text-slate-300 font-medium">{alt || 'ไม่มีรูปภาพ'}</span>
          {isAdmin && (
            <span className="text-[11px] text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30">
              คลิกเพื่อตั้งค่ารูปภาพ
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

      {/* Admin Hover Overlay Button */}
      {isAdmin && (
        <div
          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-200 flex flex-col items-center justify-center gap-2 p-2 z-20 cursor-pointer backdrop-blur-xs rounded-[inherit]"
          onClick={(e) => {
            e.stopPropagation();
            setCustomUrl(src);
            setIsModalOpen(true);
          }}
        >
          <div className="p-2.5 rounded-full bg-sky-500 text-white shadow-[0_0_15px_#38bdf8] hover:scale-110 transition">
            <Camera size={18} />
          </div>
          <span className="text-xs font-semibold text-white bg-slate-900/90 px-2.5 py-1 rounded-full border border-sky-400/50 shadow">
            คลิกเพื่อเปลี่ยนรูป/วิดีโอ
          </span>
        </div>
      )}

      {/* Image Picker Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="electric-glass rounded-2xl max-w-lg w-full border border-sky-400 p-6 space-y-5 shadow-[0_0_50px_rgba(56,189,248,0.4)]">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-sky-500/20 pb-3">
              <div className="flex items-center gap-2">
                <ImageIcon size={20} className="text-sky-400" />
                <h3 className="text-base font-bold text-white">จัดการรูปภาพ / วิดีโอ</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition"
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
            <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-sky-500/20 text-xs font-medium">
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
                  activeTab === 'upload' ? 'bg-sky-500 text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Upload size={14} />
                <span>อัปโหลดจากเครื่อง</span>
              </button>

              <button
                onClick={() => setActiveTab('library')}
                className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
                  activeTab === 'library' ? 'bg-sky-500 text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <ImageIcon size={14} />
                <span>คลังรูปภาพ ({imageFiles.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('url')}
                className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition ${
                  activeTab === 'url' ? 'bg-sky-500 text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <LinkIcon size={14} />
                <span>ใส่ URL / YouTube</span>
              </button>
            </div>

            {/* Tab 1: Upload */}
            {activeTab === 'upload' && (
              <label className="border-2 border-dashed border-sky-500/40 hover:border-sky-400 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer bg-slate-950/40 hover:bg-slate-900/40 transition">
                {isUploading ? (
                  <div className="flex flex-col items-center gap-2 text-sky-400 py-4">
                    <Loader2 size={32} className="animate-spin" />
                    <span className="text-sm font-semibold">กำลังอัปโหลดไปยัง Supabase Storage...</span>
                  </div>
                ) : (
                  <>
                    <div className="p-3 rounded-full bg-sky-950/80 text-sky-400 mb-3 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                      <Upload size={24} />
                    </div>
                    <span className="text-sm font-bold text-white mb-1">คลิกเลือกรูปภาพใหม่</span>
                    <span className="text-xs text-slate-400">รองรับไฟล์ PNG, JPG, WebP, SVG</span>
                    <input
                      type="file"
                      accept="image/*"
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
                {imageFiles.length === 0 ? (
                  <p className="text-xs text-slate-400 text-center py-6">
                    ยังไม่มีรูปภาพในคลัง สามารถอัปโหลดใหม่ได้ที่แท็บ 'อัปโหลดจากเครื่อง'
                  </p>
                ) : (
                  <div className="grid grid-cols-3 gap-2.5 max-h-60 overflow-y-auto pr-1">
                    {imageFiles.map((f) => (
                      <div
                        key={f.id}
                        onClick={() => handleSelectFromLibrary(f.url)}
                        className={`h-24 rounded-xl overflow-hidden border cursor-pointer relative group transition ${
                          src === f.url ? 'border-sky-400 ring-2 ring-sky-400' : 'border-sky-500/20 hover:border-sky-400'
                        }`}
                      >
                        <img src={f.url} alt={f.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[11px] font-semibold transition">
                          เลือกรูปนี้
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab 3: Custom URL or YouTube */}
            {activeTab === 'url' && (
              <form onSubmit={handleSaveCustomUrl} className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    วางลิงก์รูปภาพ หรือ ลิงก์ YouTube
                  </label>
                  <input
                    type="url"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="https://example.com/photo.jpg หรือ https://youtu.be/..."
                    required
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-sky-500/30 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                  <p className="text-[11px] text-sky-400/80 pt-1">
                    💡 หากใส่วิดีโอ YouTube ระบบจะดึงภาพหน้าปกและแสดงวิดีโอให้เล่นได้ทันทีอัตโนมัติ!
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition"
                >
                  บันทึกลิงก์
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
