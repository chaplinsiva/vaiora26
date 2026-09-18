// Omnitrix & Iron Man Tech Sound Synthesizer using Web Audio API

let audioCtx: AudioContext | null = null;
let soundEnabled = true;

export const isSoundEnabled = () => soundEnabled;

export const setSoundEnabled = (enabled: boolean) => {
  soundEnabled = enabled;
  return soundEnabled;
};

// Initialize or resume AudioContext safely on any user gesture
export const initAudioContext = (): AudioContext | null => {
  if (typeof window === "undefined") return null;

  try {
    if (!audioCtx) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        audioCtx = new AudioCtxClass();
      }
    }

    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  } catch (err) {
    console.warn("AudioContext init error:", err);
  }

  return audioCtx;
};

/**
 * Omnitrix / Iron Man HUD Tech Chirp & Repulsor Pulse
 * High-clarity futuristic sci-fi sound
 */
export const playIronManTechSound = () => {
  if (!soundEnabled) return;

  try {
    const ctx = initAudioContext();
    if (!ctx) return;

    if (ctx.state === "suspended") {
      ctx.resume().then(() => {
        executeTechSound(ctx);
      });
      return;
    }

    executeTechSound(ctx);
  } catch (e) {
    console.warn("Error playing tech sound:", e);
  }
};

const executeTechSound = (ctx: AudioContext) => {
  const now = ctx.currentTime;

  // 1. High Tech HUD Chirp (Sine wave sweeping 600Hz -> 2400Hz -> 1200Hz)
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();

  osc1.type = "sine";
  osc1.frequency.setValueAtTime(650, now);
  osc1.frequency.exponentialRampToValueAtTime(2600, now + 0.06);
  osc1.frequency.exponentialRampToValueAtTime(1100, now + 0.16);

  gain1.gain.setValueAtTime(0.01, now);
  gain1.gain.linearRampToValueAtTime(0.45, now + 0.02);
  gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

  osc1.connect(gain1);
  gain1.connect(ctx.destination);

  // 2. Metallic Resonance (Triangle wave bandpassed at 1800Hz)
  const osc2 = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain2 = ctx.createGain();

  osc2.type = "triangle";
  osc2.frequency.setValueAtTime(220, now);
  osc2.frequency.exponentialRampToValueAtTime(950, now + 0.08);

  filter.type = "bandpass";
  filter.frequency.setValueAtTime(1800, now);
  filter.Q.setValueAtTime(3.5, now);

  gain2.gain.setValueAtTime(0.01, now);
  gain2.gain.linearRampToValueAtTime(0.3, now + 0.02);
  gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

  osc2.connect(filter);
  filter.connect(gain2);
  gain2.connect(ctx.destination);

  // 3. Sub-Bass Arc Thump (Quick 90Hz tech pop)
  const osc3 = ctx.createOscillator();
  const gain3 = ctx.createGain();

  osc3.type = "sine";
  osc3.frequency.setValueAtTime(140, now);
  osc3.frequency.exponentialRampToValueAtTime(45, now + 0.09);

  gain3.gain.setValueAtTime(0.01, now);
  gain3.gain.linearRampToValueAtTime(0.4, now + 0.015);
  gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

  osc3.connect(gain3);
  gain3.connect(ctx.destination);

  // Start & Stop triggers
  osc1.start(now);
  osc2.start(now);
  osc3.start(now);

  osc1.stop(now + 0.22);
  osc2.stop(now + 0.2);
  osc3.stop(now + 0.12);
};

/**
 * Omnitrix Mode Switch / Toggle Sound
 */
export const playToggleSound = (willBeEnabled: boolean) => {
  try {
    const ctx = initAudioContext();
    if (!ctx) return;

    if (ctx.state === "suspended") {
      ctx.resume().then(() => {
        executeToggleBeep(ctx, willBeEnabled);
      });
      return;
    }

    executeToggleBeep(ctx, willBeEnabled);
  } catch (e) {
    console.warn("Error playing toggle sound:", e);
  }
};

const executeToggleBeep = (ctx: AudioContext, isEnabling: boolean) => {
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  if (isEnabling) {
    // Rising Omnitrix activation tone
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(1450, now + 0.1);
  } else {
    // Falling power-down tone
    osc.frequency.setValueAtTime(980, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.1);
  }

  gain.gain.setValueAtTime(0.01, now);
  gain.gain.linearRampToValueAtTime(0.35, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.16);
};
