"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Timeline() {
  return (
    <section id="schedule" className="py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SYMPOSIUM JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            EVENT <span className="text-cyber-glow">EXPERIENCE</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Your progressive path from initial entry to collegiate excellence.
          </p>
        </div>

        {/* Horizontal Visual Timeline */}
        <div className="relative">
          {/* Glowing connecting neon line behind desktop nodes */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full shadow-[0_0_16px_rgba(0,229,255,0.9)] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {siteConfig.journey.map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center group"
              >
                {/* Animated Node Circle */}
                <div className="relative w-24 h-24 rounded-2xl bg-[#071124] border-2 border-cyan-500/30 group-hover:border-cyan-400 flex flex-col items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-neon-cyan mb-5">
                  {/* Glowing halo on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-cyan-400/15 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <span className="text-xs font-mono font-black text-cyan-400">
                    STEP
                  </span>
                  <span className="text-2xl font-black font-mono text-white group-hover:text-cyan-300 transition-colors">
                    {item.step}
                  </span>

                  {/* Little pulsing node dot */}
                  <div className="absolute -bottom-1.5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#030712] shadow-[0_0_8px_#00F0FF]" />
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-white tracking-wider font-mono uppercase group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {/* Subtitle / Detail */}
                <p className="text-xs text-slate-400 mt-1 max-w-[160px] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
