'use client';

import React, { useState } from 'react';
import { 
  extractYouTubeId, 
  getYouTubeEmbedUrl, 
  getYouTubeThumbnail, 
  isDirectVideoUrl,
  isVideoContent
} from '@/lib/mediaUtils';
import { EditableImage } from './EditableImage';
import { Play, ExternalLink, Video as VideoIcon, Film, Image as ImageIcon } from 'lucide-react';
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
  containerClassName = 'w-full h-full relative overflow-hidden rounded-xl bg-slate-950',
  uploadedFiles = [],
  onFileUploaded,
  showPlayerInModal = true
}) => {
  const [hasImageError, setHasImageError] = useState(false);
  const ytId = extractYouTubeId(mediaUrl);
  const isDirectVideo = isDirectVideoUrl(mediaUrl);
  const isVideo = ytId || isDirectVideo;

  // 1. YouTube Video Embed Player
  if (ytId && showPlayerInModal) {
    return (
      <div className={`relative group ${containerClassName} aspect-video flex flex-col justify-center items-center bg-black border border-sky-500/40 shadow-xl`}>
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-sky-400 text-sky-200 text-xs font-semibold shadow-lg backdrop-blur-md transition"
            >
              <VideoIcon size={14} className="text-sky-400" />
              <span>เปลี่ยนลิงก์วิดีโอ/รูป</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // 2. Direct Video File (.mp4, .webm)
  if (isDirectVideo && showPlayerInModal) {
    return (
      <div className={`relative group ${containerClassName} aspect-video bg-black border border-sky-500/40`}>
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-sky-400 text-sky-200 text-xs font-semibold shadow-lg backdrop-blur-md transition"
            >
              <Film size={14} className="text-sky-400" />
              <span>เปลี่ยนวิดีโอ</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // 3. YouTube Thumbnail in Listing Mode (when showPlayerInModal is false or as card preview)
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

  // 4. Standard Image or Fallback Placeholder
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
