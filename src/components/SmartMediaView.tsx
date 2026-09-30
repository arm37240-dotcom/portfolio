'use client';

import React, { useState } from 'react';
import { 
  extractYouTubeId, 
  getYouTubeEmbedUrl, 
  getYouTubeThumbnail, 
  isDirectVideoUrl,
  isGoogleSlidesUrl,
  getGoogleSlidesEmbedUrl,
  isCanvaUrl,
  getCanvaEmbedUrl,
  isPdfUrl,
  detectMediaType
} from '@/lib/mediaUtils';
import { EditableImage } from './EditableImage';
import { Play, ExternalLink, Video as VideoIcon, Film, Presentation, FileText, Maximize2 } from 'lucide-react';
import { UploadedFileRecord } from '@/types/portfolio';

interface SmartMediaViewProps {
  mediaUrl: string;
  alt: string;
  onSaveMedia: (newUrl: string) => void;
  isAdmin: boolean;
  className?: string;
  containerClassName?: string;
  uploadedFiles?: UploadedFileRecord[];
  onFileUploaded?: (record: UploadedFileRecord) => void;
  showPlayerInModal?: boolean;
}

export const SmartMediaView: React.FC<SmartMediaViewProps> = ({
  mediaUrl,
  alt,
  onSaveMedia,
  isAdmin,
  className = 'w-full h-full object-cover',
  containerClassName = 'w-full h-full min-h-[260px] relative overflow-hidden rounded-xl bg-[var(--bg-secondary)] flex flex-col justify-center',
  uploadedFiles = [],
  onFileUploaded,
  showPlayerInModal = true
}) => {
  const [, setHasImageError] = useState(false);
  const mediaType = detectMediaType(mediaUrl);
  const ytId = extractYouTubeId(mediaUrl);
  const isDirectVideo = isDirectVideoUrl(mediaUrl);

  // 1. Google Slides Presentation Embed
  if (mediaType === 'google-slides' && showPlayerInModal) {
    const embedUrl = getGoogleSlidesEmbedUrl(mediaUrl);
    return (
      <div className={`relative group ${containerClassName} aspect-video sm:aspect-16/10 flex flex-col justify-center items-center bg-black border-2 border-[var(--border-neon)] shadow-xl rounded-xl overflow-hidden`}>
        <iframe
          src={embedUrl}
          title={alt || 'Google Slides Presentation'}
          className="w-full h-full border-0 rounded-xl"
          allowFullScreen
          loading="lazy"
        />

        <div className="absolute top-3 left-3 z-30 flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/90 text-black text-xs font-bold shadow-lg backdrop-blur-md">
            <Presentation size={14} />
            <span>Google Slides</span>
          </span>
          <a
            href={mediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/70 hover:bg-black/90 text-white text-xs border border-white/20 shadow-md backdrop-blur-md transition"
            title="เปิดสไลด์ในหน้าต่างใหม่"
          >
            <ExternalLink size={13} />
            <span>เปิดลิงก์เต็ม</span>
          </a>
        </div>

        {/* Change Slide Button for Admin */}
        {isAdmin && (
          <div className="absolute top-3 right-3 z-30">
            <button
              onClick={() => {
                const nextUrl = prompt('ระบุลิงก์สไลด์ (Google Slides, Canva), วิดีโอ หรือ รูปภาพ:', mediaUrl);
                if (nextUrl !== null && nextUrl.trim()) {
                  onSaveMedia(nextUrl.trim());
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)] border border-[var(--border-neon)] text-[var(--accent-cyan)] text-xs font-semibold shadow-lg backdrop-blur-md transition cursor-pointer"
            >
              <Presentation size={14} />
              <span>เปลี่ยนสไลด์ / สื่อ</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // 2. Canva Presentation Embed
  if (mediaType === 'canva' && showPlayerInModal) {
    const embedUrl = getCanvaEmbedUrl(mediaUrl);
    return (
      <div className={`relative group ${containerClassName} aspect-video flex flex-col justify-center items-center bg-black border-2 border-[var(--border-neon)] shadow-xl rounded-xl overflow-hidden`}>
        <iframe
          src={embedUrl}
          title={alt || 'Canva Presentation'}
          className="w-full h-full border-0 rounded-xl"
          allowFullScreen
          loading="lazy"
        />

        <div className="absolute top-3 left-3 z-30 flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-600/90 text-white text-xs font-bold shadow-lg backdrop-blur-md">
            <Presentation size={14} />
            <span>Canva Slides</span>
          </span>
          <a
            href={mediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/70 hover:bg-black/90 text-white text-xs border border-white/20 shadow-md backdrop-blur-md transition"
          >
            <ExternalLink size={13} />
            <span>เปิดลิงก์เต็ม</span>
          </a>
        </div>

        {isAdmin && (
          <div className="absolute top-3 right-3 z-30">
            <button
              onClick={() => {
                const nextUrl = prompt('ระบุลิงก์สไลด์ Canva, Google Slides หรือรูปภาพ:', mediaUrl);
                if (nextUrl !== null && nextUrl.trim()) {
                  onSaveMedia(nextUrl.trim());
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)] border border-[var(--border-neon)] text-[var(--accent-cyan)] text-xs font-semibold shadow-lg backdrop-blur-md transition cursor-pointer"
            >
              <Presentation size={14} />
              <span>เปลี่ยนสไลด์ / สื่อ</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // 3. PDF Document Embed
  if (mediaType === 'pdf' && showPlayerInModal) {
    return (
      <div className={`relative group ${containerClassName} h-[360px] sm:h-[450px] flex flex-col justify-center items-center bg-black border-2 border-[var(--border-neon)] shadow-xl rounded-xl overflow-hidden`}>
        <iframe
          src={mediaUrl}
          title={alt || 'PDF Document'}
          className="w-full h-full border-0 rounded-xl bg-slate-900"
        />

        <div className="absolute top-3 left-3 z-30 flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-600/90 text-white text-xs font-bold shadow-lg backdrop-blur-md">
            <FileText size={14} />
            <span>เอกสาร PDF / สไลด์</span>
          </span>
          <a
            href={mediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/70 hover:bg-black/90 text-white text-xs border border-white/20 shadow-md backdrop-blur-md transition"
          >
            <Maximize2 size={13} />
            <span>เปิดเต็มจอ</span>
          </a>
        </div>

        {isAdmin && (
          <div className="absolute top-3 right-3 z-30">
            <button
              onClick={() => {
                const nextUrl = prompt('ระบุ URL ไฟล์ PDF หรือสไลด์:', mediaUrl);
                if (nextUrl !== null && nextUrl.trim()) {
                  onSaveMedia(nextUrl.trim());
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)] border border-[var(--border-neon)] text-[var(--accent-cyan)] text-xs font-semibold shadow-lg backdrop-blur-md transition cursor-pointer"
            >
              <FileText size={14} />
              <span>เปลี่ยนเอกสาร / รูป</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // 4. Slide Preview in Card / Listing Mode (when showPlayerInModal is false)
  if ((mediaType === 'google-slides' || mediaType === 'canva' || mediaType === 'pdf') && !showPlayerInModal) {
    const isGoogle = mediaType === 'google-slides';
    const isCnv = mediaType === 'canva';
    const badgeColor = isGoogle ? 'bg-amber-500/90 text-black' : isCnv ? 'bg-cyan-600/90 text-white' : 'bg-rose-600/90 text-white';
    const badgeText = isGoogle ? 'Google Slides' : isCnv ? 'Canva Presentation' : 'PDF Slides';

    return (
      <div className={`relative group ${containerClassName} flex flex-col items-center justify-center p-6 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-center`}>
        <div className="h-14 w-14 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-neon)] flex items-center justify-center text-[var(--accent-cyan)] mb-3 shadow-lg group-hover:scale-110 transition duration-300">
          <Presentation size={28} />
        </div>
        <p className="text-xs font-bold text-[var(--text-title)] line-clamp-1 mb-1">{alt || 'สไลด์นำเสนอผลงาน'}</p>
        <span className="text-[11px] text-[var(--text-muted)] font-mono">คลิกเพื่อเปิดดูสไลด์</span>
        <span className={`absolute top-2.5 right-2.5 px-2 py-0.5 rounded ${badgeColor} text-[10px] font-bold font-mono flex items-center gap-1 shadow`}>
          <Presentation size={11} />
          <span>{badgeText}</span>
        </span>
      </div>
    );
  }

  // 5. YouTube Video Embed Player
  if (ytId && showPlayerInModal) {
    return (
      <div className={`relative group ${containerClassName} aspect-video flex flex-col justify-center items-center bg-black border-2 border-[var(--border-neon)] shadow-xl rounded-xl overflow-hidden`}>
        <iframe
          src={getYouTubeEmbedUrl(ytId)}
          title={alt || 'YouTube Video Player'}
          className="w-full h-full border-0 rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        {/* Change Video Button for Admin */}
        {isAdmin && (
          <div className="absolute top-3 right-3 z-30">
            <button
              onClick={() => {
                const nextUrl = prompt('ระบุลิงก์วิดีโอ YouTube หรือ URL รูปภาพใหม่:', mediaUrl);
                if (nextUrl !== null && nextUrl.trim()) {
                  onSaveMedia(nextUrl.trim());
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)] border border-[var(--border-neon)] text-[var(--accent-cyan)] text-xs font-semibold shadow-lg backdrop-blur-md transition cursor-pointer"
            >
              <VideoIcon size={14} />
              <span>เปลี่ยนลิงก์วิดีโอ/รูป</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // 6. Direct Video File (.mp4, .webm)
  if (isDirectVideo && showPlayerInModal) {
    return (
      <div className={`relative group ${containerClassName} aspect-video bg-black border-2 border-[var(--border-neon)] rounded-xl overflow-hidden`}>
        <video
          src={mediaUrl}
          controls
          playsInline
          className="w-full h-full object-contain rounded-xl"
        >
          เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอนี้
        </video>

        {isAdmin && (
          <div className="absolute top-3 right-3 z-30">
            <button
              onClick={() => {
                const nextUrl = prompt('ระบุ URL วิดีโอใหม่:', mediaUrl);
                if (nextUrl !== null && nextUrl.trim()) {
                  onSaveMedia(nextUrl.trim());
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-card)] border border-[var(--border-neon)] text-[var(--accent-cyan)] text-xs font-semibold shadow-lg backdrop-blur-md transition cursor-pointer"
            >
              <Film size={14} />
              <span>เปลี่ยนวิดีโอ</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // 7. YouTube Thumbnail in Listing Mode (when showPlayerInModal is false or as card preview)
  if (ytId && !showPlayerInModal) {
    const thumbUrl = getYouTubeThumbnail(ytId);
    return (
      <div className={`relative group ${containerClassName}`}>
        <img
          src={thumbUrl}
          alt={alt}
          className={className}
          onError={() => setHasImageError(true)}
        />
        {/* Play Icon Badge Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none group-hover:bg-black/10 transition">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.7)] group-hover:scale-110 transition">
            <Play size={20} className="fill-white translate-x-0.5" />
          </div>
        </div>
        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 border border-red-500/40 text-[10px] font-bold text-red-300 font-mono flex items-center gap-1">
          <VideoIcon size={11} />
          <span>YouTube</span>
        </span>
      </div>
    );
  }

  // 8. Standard Image or Fallback Placeholder
  return (
    <div className={`relative ${containerClassName}`}>
      <EditableImage
        src={mediaUrl}
        alt={alt}
        onSave={onSaveMedia}
        isAdmin={isAdmin}
        uploadedFiles={uploadedFiles}
        onFileUploaded={onFileUploaded}
        className={className}
      />
    </div>
  );
};
