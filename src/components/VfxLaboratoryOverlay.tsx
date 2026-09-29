'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { retroAudio } from '@/lib/retroAudio';

interface VfxLaboratoryOverlayProps {
  activeIds: Set<string>;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  type: string;
  char?: string;
}

interface ScorePopup {
  id: number;
  x: number;
  y: number;
  text: string;
}

export const VfxLaboratoryOverlay: React.FC<VfxLaboratoryOverlayProps> = ({ activeIds }) => {
  const bgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Mouse & Scroll State
  const mousePos = useRef({ x: -100, y: -100, isDown: false });
  const [hudCoords, setHudCoords] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scorePopups, setScorePopups] = useState<ScorePopup[]>([]);
  const [comboCount, setComboCount] = useState(0);
  const comboTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Particles pools
  const bgParticles = useRef<Particle[]>([]);
  const fgParticles = useRef<Particle[]>([]);
  const trailPoints = useRef<Array<{ x: number; y: number; age: number }>>([]);
  const matrixCols = useRef<Array<{ y: number; speed: number; chars: string[] }>>([]);

  const isEnabled = useCallback((id: string) => activeIds.has(id), [activeIds]);

  // 1. Setup Resize & Scroll Handlers
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (bgCanvasRef.current) {
        bgCanvasRef.current.width = w;
        bgCanvasRef.current.height = h;
      }
      if (fgCanvasRef.current) {
        fgCanvasRef.current.width = w;
        fgCanvasRef.current.height = h;
      }

      // Initialize Matrix Columns (fx-021, fx-022)
      const colCount = Math.floor(w / 18);
      matrixCols.current = Array.from({ length: colCount }, () => ({
        y: Math.random() * -100,
        speed: 1.5 + Math.random() * 3,
        chars: ['0', '1', 'Ω', 'μ', 'λ', '⚡', '⎍', 'Hz', 'V', 'A', 'ｱ', 'ｶ', 'ｻ', 'ﾀ', 'ﾅ', '0', '1']
      }));

      // Initialize Starfield (fx-051, fx-052)
      bgParticles.current = Array.from({ length: 90 }, () => ({
        x: (Math.random() - 0.5) * w,
        y: (Math.random() - 0.5) * h,
        vx: 0,
        vy: 0,
        size: 0.5 + Math.random() * 2,
        color: Math.random() > 0.3 ? '#38bdf8' : '#ec4899',
        alpha: 0.2 + Math.random() * 0.8,
        life: Math.random() * 1000,
        maxLife: 1000,
        type: 'star'
      }));
    };

    const handleScroll = () => {
      const totalH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalH > 0 ? (window.scrollY / totalH) * 100 : 0;
      setScrollProgress(progress);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 2. Mouse Move & Interactive Particle Generation
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY, isDown: mousePos.current.isDown };

      if (isEnabled('fx-049')) {
        setHudCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      }

      // Cursor Trail Ribbon (fx-091)
      if (isEnabled('fx-091')) {
        trailPoints.current.push({ x: e.clientX, y: e.clientY, age: 0 });
        if (trailPoints.current.length > 28) trailPoints.current.shift();
      }

      // Pixel Star Dust Trail (fx-042)
      if (isEnabled('fx-042') && Math.random() > 0.4) {
        fgParticles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 12,
          y: e.clientY + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * 1.5 + 0.5,
          size: Math.random() > 0.5 ? 3 : 2,
          color: Math.random() > 0.5 ? '#facc15' : '#38bdf8',
          alpha: 1,
          life: 0,
          maxLife: 25,
          type: 'pixeldust'
        });
      }
    };

    // Global Click Handler for Interactivities
    const handleClick = (e: MouseEvent) => {
      // 1. Electric click sparks (fx-011)
      if (isEnabled('fx-011')) {
        const sparkCount = 14 + Math.floor(Math.random() * 8);
        for (let i = 0; i < sparkCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 2 + Math.random() * 5.5;
          fgParticles.current.push({
            x: e.clientX,
            y: e.clientY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: 1.5 + Math.random() * 2,
            color: Math.random() > 0.4 ? '#38bdf8' : '#ec4899',
            alpha: 1,
            life: 0,
            maxLife: 20 + Math.random() * 15,
            type: 'spark'
          });
        }
        retroAudio.playSpark();
      }

      // 2. Concentric Shockwave ring (fx-093)
      if (isEnabled('fx-093')) {
        fgParticles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: 0,
          vy: 0,
          size: 4,
          color: '#38bdf8',
          alpha: 0.9,
          life: 0,
          maxLife: 30,
          type: 'shockwave'
        });
        retroAudio.playShockwave();
      }

      // 3. Water Droplet Ripple (fx-079)
      if (isEnabled('fx-079')) {
        fgParticles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: 0,
          vy: 0,
          size: 6,
          color: '#06b6d4',
          alpha: 0.7,
          life: 0,
          maxLife: 35,
          type: 'ripple'
        });
      }

      // 4. Floating +100 PTS Score Popup (fx-045)
      if (isEnabled('fx-045')) {
        const newPopup = { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY, text: '+100 PTS' };
        setScorePopups(prev => [...prev.slice(-6), newPopup]);
        retroAudio.playCoin();
        setTimeout(() => {
          setScorePopups(prev => prev.filter(p => p.id !== newPopup.id));
        }, 1200);
      }

      // 5. Combo Counter (fx-050)
      if (isEnabled('fx-050')) {
        setComboCount(prev => prev + 1);
        if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
        comboTimerRef.current = setTimeout(() => {
          setComboCount(0);
        }, 2200);
      }

      // 6. Screen Shake on Impact (fx-100)
      if (isEnabled('fx-100')) {
        document.body.classList.add('vfx-screen-shake');
        setTimeout(() => document.body.classList.remove('vfx-screen-shake'), 260);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [isEnabled]);

  // 3. Ambient 50Hz Hum Sync (fx-040)
  useEffect(() => {
    if (isEnabled('fx-040')) {
      retroAudio.setHum(true);
    } else {
      retroAudio.stopHum();
    }
    return () => {
      retroAudio.stopHum();
    };
  }, [isEnabled]);

  // 3.1 Synchronize Active Body FX Classes (fx-081, fx-083, fx-085, fx-097, fx-068, fx-008)
  useEffect(() => {
    const body = document.body;
    const classMap: Record<string, string> = {
      'fx-081': 'vfx-active-glitch',
      'fx-083': 'vfx-active-liquid',
      'fx-085': 'vfx-active-isometric',
      'fx-097': 'vfx-active-border-beam',
      'fx-068': 'vfx-active-neon-breathe',
      'fx-008': 'vfx-active-chromatic'
    };

    Object.entries(classMap).forEach(([id, cls]) => {
      if (activeIds.has(id)) {
        body.classList.add(cls);
      } else {
        body.classList.remove(cls);
      }
    });

    return () => {
      Object.values(classMap).forEach(cls => body.classList.remove(cls));
    };
  }, [activeIds]);

  // 4. Main Unified 60FPS Canvas Animation Loop
  useEffect(() => {
    let animId: number;

    const render = () => {
      const bgCanvas = bgCanvasRef.current;
      const fgCanvas = fgCanvasRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // === A. BACKGROUND CANVAS RENDERING ===
      if (bgCanvas) {
        const bgCtx = bgCanvas.getContext('2d');
        if (bgCtx) {
          bgCtx.clearRect(0, 0, w, h);

          // 1. Matrix Code Stream (fx-021) or Binary Waterfall (fx-022)
          if (isEnabled('fx-021') || isEnabled('fx-022')) {
            const isBinary = isEnabled('fx-022') && !isEnabled('fx-021');
            bgCtx.font = '12px monospace';
            matrixCols.current.forEach((col, idx) => {
              const x = idx * 18;
              col.y += col.speed;
              if (col.y > h) col.y = -20;

              for (let j = 0; j < 6; j++) {
                const charY = col.y - j * 16;
                if (charY > 0 && charY < h) {
                  const alpha = 1 - j * 0.16;
                  bgCtx.fillStyle = j === 0 ? '#ffffff' : isBinary ? `rgba(56, 189, 248, ${alpha * 0.75})` : `rgba(34, 197, 94, ${alpha * 0.75})`;
                  const ch = isBinary ? (Math.random() > 0.5 ? '1' : '0') : col.chars[(idx + j) % col.chars.length];
                  bgCtx.fillText(ch, x, charY);
                }
              }
            });
          }

          // 2. 3D Warp Starfield (fx-051) & Twinkling Stars (fx-052)
          if (isEnabled('fx-051') || isEnabled('fx-052')) {
            const isWarp = isEnabled('fx-051');
            const cx = w / 2;
            const cy = h / 2;

            bgParticles.current.forEach(p => {
              if (p.type === 'star') {
                if (isWarp) {
                  p.x += (p.x / 40);
                  p.y += (p.y / 40);
                  p.size += 0.02;

                  if (Math.abs(p.x) > cx || Math.abs(p.y) > cy) {
                    p.x = (Math.random() - 0.5) * 80;
                    p.y = (Math.random() - 0.5) * 80;
                    p.size = 0.5;
                  }
                  bgCtx.fillStyle = p.color;
                  bgCtx.beginPath();
                  bgCtx.arc(cx + p.x, cy + p.y, Math.min(p.size, 2.5), 0, Math.PI * 2);
                  bgCtx.fill();
                } else {
                  // Soft Twinkle
                  p.alpha += (Math.random() - 0.5) * 0.05;
                  p.alpha = Math.max(0.1, Math.min(0.9, p.alpha));
                  bgCtx.fillStyle = `rgba(56, 189, 248, ${p.alpha * 0.6})`;
                  bgCtx.fillRect(cx + p.x, cy + p.y, p.size, p.size);
                }
              }
            });
          }

          // 3. Periodic Shooting Meteors (fx-054)
          if (isEnabled('fx-054') && Math.random() < 0.015) {
            bgParticles.current.push({
              x: Math.random() * w,
              y: 0,
              vx: 4 + Math.random() * 6,
              vy: 3 + Math.random() * 5,
              size: 2,
              color: '#38bdf8',
              alpha: 1,
              life: 0,
              maxLife: 40,
              type: 'meteor'
            });
          }

          // Render active meteors, dust motes, fireflies, snow, rain, embers
          bgParticles.current = bgParticles.current.filter(p => {
            if (p.type === 'meteor') {
              p.x += p.vx;
              p.y += p.vy;
              p.life++;
              bgCtx.strokeStyle = `rgba(56, 189, 248, ${1 - p.life / p.maxLife})`;
              bgCtx.lineWidth = 1.5;
              bgCtx.beginPath();
              bgCtx.moveTo(p.x, p.y);
              bgCtx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
              bgCtx.stroke();
              return p.life < p.maxLife;
            }
            return true;
          });

          // 4. Suspended Dust Motes (fx-072)
          if (isEnabled('fx-072') && Math.random() < 0.08 && bgParticles.current.length < 140) {
            bgParticles.current.push({
              x: Math.random() * w,
              y: h + 10,
              vx: (Math.random() - 0.5) * 0.4,
              vy: -0.3 - Math.random() * 0.5,
              size: 1 + Math.random() * 1.5,
              color: '#f8fafc',
              alpha: 0.15 + Math.random() * 0.35,
              life: 0,
              maxLife: 300,
              type: 'dust'
            });
          }

          // Render dust particles
          bgParticles.current = bgParticles.current.filter(p => {
            if (p.type === 'dust') {
              p.x += p.vx;
              p.y += p.vy;
              p.life++;
              bgCtx.fillStyle = `rgba(248, 250, 252, ${p.alpha * (1 - p.life / p.maxLife)})`;
              bgCtx.beginPath();
              bgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              bgCtx.fill();
              return p.life < p.maxLife && p.y > -10;
            }
            return true;
          });
        }
      }

      // === B. FOREGROUND CANVAS RENDERING (Sparks, Trails, Waves) ===
      if (fgCanvas) {
        const fgCtx = fgCanvas.getContext('2d');
        if (fgCtx) {
          fgCtx.clearRect(0, 0, w, h);

          // 1. Neon Fluid Ribbon Cursor Trail (fx-091)
          if (isEnabled('fx-091') && trailPoints.current.length > 2) {
            fgCtx.beginPath();
            fgCtx.moveTo(trailPoints.current[0].x, trailPoints.current[0].y);
            for (let i = 1; i < trailPoints.current.length; i++) {
              const pt = trailPoints.current[i];
              fgCtx.lineTo(pt.x, pt.y);
            }
            fgCtx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
            fgCtx.lineWidth = 3;
            fgCtx.lineCap = 'round';
            fgCtx.lineJoin = 'round';
            fgCtx.stroke();
          }

          // 2. Interactive Plasma Globe Filaments (fx-014)
          if (isEnabled('fx-014') && mousePos.current.x > 0) {
            const mx = mousePos.current.x;
            const my = mousePos.current.y;
            fgCtx.strokeStyle = 'rgba(168, 85, 247, 0.5)';
            fgCtx.lineWidth = 1.2;
            for (let i = 0; i < 3; i++) {
              fgCtx.beginPath();
              fgCtx.moveTo(mx, my);
              const angle = Math.sin(Date.now() * 0.003 + i) * Math.PI;
              const len = 35 + Math.sin(Date.now() * 0.01 + i) * 20;
              const endX = mx + Math.cos(angle) * len;
              const endY = my + Math.sin(angle) * len;
              fgCtx.quadraticCurveTo(
                (mx + endX) / 2 + Math.sin(Date.now() * 0.02) * 15,
                (my + endY) / 2 + Math.cos(Date.now() * 0.02) * 15,
                endX,
                endY
              );
              fgCtx.stroke();
            }
          }

          // 3. Render Sparks, Shockwaves, Dust, Ripples
          fgParticles.current = fgParticles.current.filter(p => {
            p.life++;
            const progress = p.life / p.maxLife;

            if (p.type === 'spark') {
              p.x += p.vx;
              p.y += p.vy;
              p.vy += 0.12; // Gravity
              fgCtx.fillStyle = p.color;
              fgCtx.globalAlpha = 1 - progress;
              fgCtx.fillRect(p.x, p.y, p.size, p.size);
              fgCtx.globalAlpha = 1;
              return p.life < p.maxLife;
            }

            if (p.type === 'shockwave' || p.type === 'ripple') {
              p.size += 3.5;
              fgCtx.strokeStyle = p.color;
              fgCtx.globalAlpha = (1 - progress) * 0.6;
              fgCtx.lineWidth = 2;
              fgCtx.beginPath();
              fgCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              fgCtx.stroke();
              fgCtx.globalAlpha = 1;
              return p.life < p.maxLife;
            }

            if (p.type === 'pixeldust') {
              p.x += p.vx;
              p.y += p.vy;
              fgCtx.fillStyle = p.color;
              fgCtx.globalAlpha = 1 - progress;
              fgCtx.fillRect(p.x, p.y, p.size, p.size);
              fgCtx.globalAlpha = 1;
              return p.life < p.maxLife;
            }

            return false;
          });
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isEnabled]);

  return (
    <>
      {/* Background Atmosphere Canvas */}
      <canvas
        ref={bgCanvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-80"
      />

      {/* Foreground Particle & Interactive Canvas */}
      <canvas
        ref={fgCanvasRef}
        className="fixed inset-0 pointer-events-none z-30"
      />

      {/* === DOM OVERLAYS FOR CSS EFFECTS === */}

      {/* 1. CRT Scanlines (fx-001) */}
      {isEnabled('fx-001') && (
        <div 
          className="fixed inset-0 pointer-events-none z-20 scanlines opacity-50 select-none" 
          aria-hidden="true" 
        />
      )}

      {/* 2. CRT Curved Glass Vignette (fx-002) */}
      {isEnabled('fx-002') && (
        <div 
          className="fixed inset-0 pointer-events-none z-20 shadow-[inset_0_0_90px_rgba(0,0,0,0.85)] select-none" 
          aria-hidden="true" 
        />
      )}

      {/* 3. CRT Electron Sweep Beam (fx-003) */}
      {isEnabled('fx-003') && (
        <div 
          className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none"
          aria-hidden="true"
        >
          <div className="w-full h-24 bg-gradient-to-b from-transparent via-cyan-400/8 to-transparent animate-[crtBeam_7s_linear_infinite]" />
        </div>
      )}

      {/* 4. CRT Micro Flicker (fx-004) */}
      {isEnabled('fx-004') && (
        <div 
          className="fixed inset-0 pointer-events-none z-20 vfx-crt-flicker bg-cyan-950/[0.02]" 
          aria-hidden="true" 
        />
      )}

      {/* 5. CRT RGB Triad Shadow Mask (fx-006) */}
      {isEnabled('fx-006') && (
        <div 
          className="fixed inset-0 pointer-events-none z-20 opacity-30 mix-blend-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60 bg-[length:4px_4px]" 
          aria-hidden="true" 
        />
      )}

      {/* 6. Top Scroll Laser Tracker (fx-098) */}
      {isEnabled('fx-098') && (
        <div 
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-400 via-pink-500 to-amber-400 z-50 transition-all duration-75 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      )}

      {/* 7. Arcade INSERT COIN Blinking Marquee (fx-041) */}
      {isEnabled('fx-041') && (
        <aside 
          aria-label="Arcade Marquee"
          className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-2 px-3 py-1 rounded bg-[#090b20]/90 border border-pink-500/60 shadow-[0_0_15px_rgba(236,72,153,0.4)] backdrop-blur-md font-mono text-[10px] font-bold text-pink-300 animate-pulse select-none"
        >
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
          <span>★ 1984 ARCADE // INSERT COIN TO PLAY ★</span>
        </aside>
      )}

      {/* 8. Red Boss Alert Siren (fx-044) */}
      {isEnabled('fx-044') && (
        <div 
          className="fixed top-0 inset-x-0 h-7 z-40 flex items-center justify-center font-mono text-xs font-black tracking-widest text-rose-200 vfx-boss-alert border-b select-none"
        >
          <span>⚠ WARNING // INTRUDER LEVEL 5 DETECTED ⚠</span>
        </div>
      )}

      {/* 9. Floating Score Popups +100 PTS (fx-045) */}
      {scorePopups.map(p => (
        <div
          key={p.id}
          className="fixed z-50 pointer-events-none font-mono text-xs font-bold text-amber-300 animate-bounce transition-opacity"
          style={{ left: p.x + 8, top: p.y - 20 }}
        >
          {p.text}
        </div>
      ))}

      {/* 10. Pixel Crosshair Coordinates HUD (fx-049) */}
      {isEnabled('fx-049') && hudCoords.x > 0 && (
        <div
          className="fixed pointer-events-none z-50 font-mono text-[9px] text-sky-400 select-none bg-slate-950/80 px-1.5 py-0.5 rounded border border-sky-400/40"
          style={{ left: hudCoords.x + 14, top: hudCoords.y + 14 }}
        >
          [X:{hudCoords.x} Y:{hudCoords.y}]
        </div>
      )}

      {/* 11. Combo Multiplier Streak Counter (fx-050) */}
      {isEnabled('fx-050') && comboCount > 1 && (
        <aside 
          aria-label="Combo streak"
          className="fixed bottom-20 right-6 z-40 font-mono font-black text-sm px-3 py-1.5 rounded-lg bg-pink-950/90 border-2 border-pink-400 text-pink-200 shadow-[0_0_20px_rgba(236,72,153,0.6)] animate-bounce select-none"
        >
          🔥 COMBO x{comboCount}!
        </aside>
      )}
    </>
  );
};
