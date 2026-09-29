'use client';

import React from 'react';

interface CrtOverlayProps {
  enabled?: boolean;
}

export const CrtOverlay: React.FC<CrtOverlayProps> = ({ enabled = true }) => {
  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[8888] overflow-hidden select-none">
      {/* 1. Fine Phosphor Scanlines */}
      <div 
        className="absolute inset-0 opacity-[0.14] dark:opacity-[0.22]"
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)',
          backgroundSize: '100% 4px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* 2. Sweeping CRT Refresh Beam */}
      <div 
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(56, 189, 248, 0.25) 51%, transparent 55%)',
          backgroundSize: '100% 800px',
          animation: 'crtBeam 6s linear infinite'
        }}
      />

      {/* 3. Radial CRT Vignette / Screen Curvature */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60"
        style={{
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(0, 0, 0, 0.8)'
        }}
      />
    </div>
  );
};
