"use client";

import React from "react";
import { Lightbulb, Swords, Users, Cpu, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

const pillarIcons = [Lightbulb, Swords, Users, Cpu];

export default function WhyParticipate() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXCELLENCE & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            WHY <span className="text-cyber-glow">VAIORA’26?</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            An elite symposium designed to empower intellect, spark cross-campus collaboration, and celebrate engineering distinction.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Cpu;
            return (
              <div
                key={pillar.title}
                className="cyber-card hud-corner rounded-2xl p-7 flex flex-col justify-between group transition-all duration-300 border border-cyan-500/20 hover:border-cyan-400"
              >
                <div>
                  {/* Top Numeric Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-black text-cyan-400">
                      {pillar.badge}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors shadow-[0_0_6px_#00F0FF]" />
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#061224] border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:text-cyan-300 group-hover:border-cyan-300 transition-all shadow-neon-cyan">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-white mb-2 tracking-wide font-mono group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Minimal Text */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-cyan-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>DISCOVER</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
