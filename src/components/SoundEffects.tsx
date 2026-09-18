"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import {
  playIronManTechSound,
  playToggleSound,
  initAudioContext,
  setSoundEnabled,
  isSoundEnabled,
} from "@/utils/audio";

export default function SoundEffects() {
  const [enabled, setEnabled] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Unlock browser audio context on first user touch/click
  const unlockAudio = useCallback(() => {
    initAudioContext();
    setHasInteracted(true);
  }, []);

  useEffect(() => {
    // Listen for any initial interaction to unlock browser Web Audio policy
    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Don't trigger default button sound if clicking the audio toggle button itself
      if (target.closest("#sound-fx-toggle")) {
        return;
      }

      // Check if clicking any button, link, or cyber interactive element
      const interactiveEl = target.closest(
        "button, a, .btn-cyber-primary, .btn-cyber-secondary, [role='button'], input[type='button'], input[type='submit']"
      );

      if (interactiveEl) {
        initAudioContext();
        playIronManTechSound();
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [unlockAudio]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    initAudioContext();
    const nextState = !enabled;
    setEnabled(nextState);
    setSoundEnabled(nextState);

    // Play feedback tone so user immediately hears confirmation
    playToggleSound(nextState);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50">
      <button
        id="sound-fx-toggle"
        onClick={handleToggle}
        type="button"
        title={enabled ? "Mute Tech SFX" : "Enable Tech SFX"}
        aria-label="Toggle Sound Effects"
        className={`group flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border transition-all duration-300 shadow-2xl backdrop-blur-xl cursor-pointer select-none active:scale-95 ${
          enabled
            ? "bg-[#061224]/90 border-cyan-400 text-cyan-300 shadow-neon-cyan hover:border-cyan-300"
            : "bg-[#080d1a]/90 border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500"
        }`}
      >
        {enabled ? (
          <>
            <div className="relative flex items-center justify-center">
              <Volume2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-cyan-300">
              TECH SFX ON
            </span>
            {/* Audio Wave Visualizer Bars */}
            <div className="flex items-center gap-0.5 h-3 pl-1">
              <span className="w-0.5 h-full bg-cyan-400 rounded-full animate-pulse" />
              <span className="w-0.5 h-2 bg-cyan-300 rounded-full animate-pulse delay-75" />
              <span className="w-0.5 h-3 bg-cyan-400 rounded-full animate-pulse delay-150" />
            </div>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-slate-200" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-slate-400 group-hover:text-slate-200">
              SFX MUTED
            </span>
          </>
        )}
      </button>
    </div>
  );
}
