// Retro Web Audio Synthesizer (Zero External Dependencies)
// High-performance procedural audio synthesis for Retro VFX Suite

class RetroAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true; // Default muted for respectful UX
  private humOsc: OscillatorNode | null = null;
  private humGain: GainNode | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('hikari_sound_enabled');
        this.isMuted = saved === null ? true : saved !== 'true';
      } catch (e) {
        this.isMuted = true;
      }
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem('hikari_sound_enabled', String(!this.isMuted));
    } catch (e) {
      // ignore
    }
    if (!this.isMuted) {
      this.initCtx();
      this.playClick();
    } else {
      this.stopHum();
    }
    return !this.isMuted;
  }

  public getIsAudioEnabled(): boolean {
    return !this.isMuted;
  }

  // 1. Soft 8-bit click / blip (fx-038)
  public playClick() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      // ignore
    }
  }

  // 2. High-Tech CRT degauss swoosh when changing theme
  public playThemeSwitch() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(950, this.ctx.currentTime + 0.12);
      osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.22);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch (e) {
      // ignore
    }
  }

  // 3. Electric spark zap (fx-011)
  public playSpark() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) {
      // ignore
    }
  }

  // 4. Harmonic Chime (Morning / Mode switch)
  public playChime(isMorning: boolean) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const freqs = isMorning ? [523.25, 659.25, 783.99] : [783.99, 659.25, 523.25];
      freqs.forEach((f, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, this.ctx.currentTime + idx * 0.06);

        gain.gain.setValueAtTime(0.07, this.ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.18);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + idx * 0.06);
        osc.stop(this.ctx.currentTime + idx * 0.06 + 0.18);
      });
    } catch (e) {
      // ignore
    }
  }

  // 5. Retro Arcade Coin / Score Pickup (fx-045)
  public playCoin() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(987.77, this.ctx.currentTime); // B5
      osc.frequency.setValueAtTime(1318.51, this.ctx.currentTime + 0.07); // E6

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {
      // ignore
    }
  }

  // 6. Deep CRT Degauss Coil Thump (fx-010, fx-039)
  public playDegauss() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.45);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.5);
    } catch (e) {
      // ignore
    }
  }

  // 7. Shockwave / Sub-Bass Impact (fx-093, fx-100)
  public playShockwave() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.2);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch (e) {
      // ignore
    }
  }

  // 8. Laser Beam Sweep (fx-088, fx-098)
  public playLaser() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(2200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.07, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {
      // ignore
    }
  }

  // 9. Siren Alert (fx-018, fx-044)
  public playAlarm() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(500, this.ctx.currentTime + 0.15);
      osc.frequency.linearRampToValueAtTime(800, this.ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.32);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.32);
    } catch (e) {
      // ignore
    }
  }

  // 10. 50Hz Electrical Transformer Ambient Drone (fx-040)
  public setHum(enabled: boolean) {
    if (!enabled || this.isMuted) {
      this.stopHum();
      return;
    }
    try {
      this.initCtx();
      if (!this.ctx || this.humOsc) return;

      this.humOsc = this.ctx.createOscillator();
      this.humGain = this.ctx.createGain();

      this.humOsc.type = 'sine';
      this.humOsc.frequency.setValueAtTime(50, this.ctx.currentTime); // 50 Hz European/Thai mains

      this.humGain.gain.setValueAtTime(0.015, this.ctx.currentTime);

      this.humOsc.connect(this.humGain);
      this.humGain.connect(this.ctx.destination);

      this.humOsc.start();
    } catch (e) {
      // ignore
    }
  }

  public stopHum() {
    if (this.humOsc) {
      try {
        this.humOsc.stop();
        this.humOsc.disconnect();
      } catch (e) {}
      this.humOsc = null;
      this.humGain = null;
    }
  }
}

export const retroAudio = new RetroAudioEngine();
