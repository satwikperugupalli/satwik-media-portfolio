/**
 * =========================================================================
 * CINEMA SOUND ENGINE
 * =========================================================================
 * Uses authentic recorded cinema clapperboard audio (/sounds/clapper.mp3)
 * plus lightweight procedural tactile clicks.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.preloadedClap = null;

    if (typeof window !== "undefined") {
      try {
        const base = import.meta.env.BASE_URL || "/";
        const soundPath = base.endsWith("/") ? `${base}sounds/clapper.mp3` : `${base}/sounds/clapper.mp3`;
        this.preloadedClap = new Audio(soundPath);
        this.preloadedClap.preload = "auto";
      } catch {
        // Ignore
      }
    }
  }

  initAudioContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  /**
   * Authentic recorded cinema clapperboard slap sound
   * Volume softened to a refined, natural level (not heavy/piercing)
   */
  playClap() {
    try {
      if (typeof window !== "undefined") {
        const base = import.meta.env.BASE_URL || "/";
        const soundPath = base.endsWith("/") ? `${base}sounds/clapper.mp3` : `${base}/sounds/clapper.mp3`;
        const audio = new Audio(soundPath);
        audio.currentTime = 0;
        audio.volume = 0.42; // Softened level: crisp & balanced, not heavy
        audio.play().catch(() => {
          // Autoplay policy fallback
        });
      }
    } catch {
      // Ignore
    }
  }

  /**
   * Camera focal-plane shutter wipe / blade cut slice
   */
  playShutterCut() {
    this.initAudioContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.06);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.065);
    } catch {
      // Ignore
    }
  }

  /**
   * Tactile NLE timeline jog click / magnetic snap
   */
  playClick() {
    this.initAudioContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.02);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.022);
    } catch {
      // Ignore
    }
  }

  /**
   * Timeline playhead scrub tick
   */
  playScrub() {
    this.initAudioContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(800 + Math.random() * 200, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.015);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.016);
    } catch {
      // Ignore
    }
  }
}

export const soundFX = new SoundEngine();
