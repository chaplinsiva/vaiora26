"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Terminal, Compass, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Eagle Circuit Hologram */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square cyber-card hud-corner rounded-3xl p-8 flex flex-col items-center justify-center overflow-hidden border-cyan-500/30">
              {/* Rotating HUD Grid Rings */}
              <div className="absolute inset-4 rounded-full border border-dashed border-cyan-400/30 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-10 rounded-full border border-cyan-500/20 pointer-events-none" />

              {/* Glowing Center Badge */}
              <div className="relative w-36 h-36 filter drop-shadow-[0_0_25px_rgba(0,229,255,0.7)] animate-float">
                <Image
                  src="/logos/vaioralogo.png"
                  alt="VAIORA Eagle Insignia"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Bottom Telemetry Tag */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#061224] text-[11px] font-mono font-bold text-cyan-300 border border-cyan-500/40 shadow-neon-cyan">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>SYS.PROTOCOL // VAIORA.26</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>ABOUT THE SYMPOSIUM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                ABOUT <span className="text-cyber-glow">VAIORA’26</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">VAIORA’26</strong> is an inter-collegiate symposium organized by the <span className="text-cyan-300 font-semibold">Department of Computer Science and Engineering, Vaigai College of Engineering</span>.
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              The symposium brings together students from different colleges to explore technology, creativity, innovation and competitive problem-solving through a collection of technical and non-technical events.
            </p>

            {/* Quick Metrics / Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#091122]/90 border border-cyan-500/25 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Multi-Track</h4>
                  <p className="text-xs text-slate-400 font-mono">Technical & Creative</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#091122]/90 border border-blue-500/25 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-950 border border-blue-500/40 text-blue-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Statewide</h4>
                  <p className="text-xs text-slate-400 font-mono">Inter-Collegiate Reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
