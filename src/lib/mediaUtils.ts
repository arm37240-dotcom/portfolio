/**
 * Utility functions for smart media handling (YouTube, Video files, Presentations/Slides, PDF, Images)
 */

export function extractYouTubeId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;

  // Patterns covering standard watch, shortened youtu.be, embed, shorts, and query params
  const patterns = [
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/,
    /^([\w-]{11})$/ // Direct ID
  ];

  for (const regex of patterns) {
    const match = url.trim().match(regex);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0`;
}

export function isDirectVideoUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const clean = url.split('?')[0].toLowerCase();
  return clean.endsWith('.mp4') || clean.endsWith('.webm') || clean.endsWith('.mov') || clean.endsWith('.ogg');
}

export function isVideoContent(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  return Boolean(extractYouTubeId(url)) || isDirectVideoUrl(url);
}

// ==========================================
// Slide & Presentation Handlers (Google Slides, Canva, PDF)
// ==========================================

export function isGoogleSlidesUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  return /docs\.google\.com\/presentation\/d\//i.test(url.trim());
}

export function getGoogleSlidesEmbedUrl(url: string): string {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();

  // If already an embed URL
  if (trimmed.includes('/embed')) {
    return trimmed;
  }

  // Published presentation: /d/e/2PACX-.../pub -> /d/e/2PACX-.../embed
  if (trimmed.includes('/d/e/') && trimmed.includes('/pub')) {
    return trimmed.replace('/pub', '/embed');
  }

  // Standard edit or view presentation: /presentation/d/([a-zA-Z0-9_-]+)
  const match = trimmed.match(/\/presentation\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://docs.google.com/presentation/d/${match[1]}/embed?start=false&loop=false&delayms=3000`;
  }

  return trimmed;
}

export function isCanvaUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  return /canva\.com\/design\//i.test(url.trim());
}

export function getCanvaEmbedUrl(url: string): string {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (trimmed.includes('/view?embed')) return trimmed;
  const clean = trimmed.split('?')[0];
  if (clean.endsWith('/view')) {
    return `${clean}?embed`;
  }
  return `${clean}/view?embed`;
}

export function isPdfUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const clean = url.split('?')[0].toLowerCase();
  return clean.endsWith('.pdf') || url.trim().startsWith('data:application/pdf');
}

export function isPresentationUrl(url: string): boolean {
  return isGoogleSlidesUrl(url) || isCanvaUrl(url) || isPdfUrl(url);
}

export type MediaType = 'youtube' | 'direct-video' | 'google-slides' | 'canva' | 'pdf' | 'image' | 'empty';

export function detectMediaType(url: string): MediaType {
  if (!url || typeof url !== 'string' || !url.trim()) return 'empty';
  const cleanUrl = url.trim();
  if (extractYouTubeId(cleanUrl)) return 'youtube';
  if (isDirectVideoUrl(cleanUrl)) return 'direct-video';
  if (isGoogleSlidesUrl(cleanUrl)) return 'google-slides';
  if (isCanvaUrl(cleanUrl)) return 'canva';
  if (isPdfUrl(cleanUrl)) return 'pdf';
  return 'image';
}

export function extractFirstVideoFromText(text: string): { type: 'youtube' | 'direct'; url: string; videoId?: string } | null {
  if (!text || typeof text !== 'string') return null;

  const urlRegex = /(https?:\/\/[^\s"'<>]+)/g;
  const matches = text.match(urlRegex);
  if (!matches) return null;

  for (const rawUrl of matches) {
    const ytId = extractYouTubeId(rawUrl);
    if (ytId) {
      return { type: 'youtube', url: rawUrl, videoId: ytId };
    }
    if (isDirectVideoUrl(rawUrl)) {
      return { type: 'direct', url: rawUrl };
    }
  }

  return null;
}
