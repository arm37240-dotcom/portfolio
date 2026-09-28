/**
 * Utility functions for smart media handling (YouTube, Video files, Images)
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
