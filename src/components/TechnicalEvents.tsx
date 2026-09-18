"use client";

import React from "react";
import { FileText, Terminal, Cpu, Palette, ArrowRight, Sparkles, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
  FileText: FileText,
  Terminal: Terminal,
  Cpu: Cpu,
  Palette: Palette,
};

export default function TechnicalEvents() {
  return (
    <section id="events" className="py-20 relative">
      {/* Circuit background accent */}
      <div className="absolute inset-0 bg-circuit-lines opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRACK 01 // 4 TECHNICAL CHALLENGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            TECHNICAL <span className="text-cyber-glow">EVENTS</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Prove your engineering mindset, programming intellect, presentation skills, and design mastery.
          </p>
        </div>

        {/* 4 Technical Event Cards in 2x2 or 4-col responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.technicalEvents.map((event) => {
            const Icon = iconMap[event.icon] || Terminal;
            return (
              <div
                key={event.id}
                className="cyber-card hud-corner rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden border border-cyan-500/25"
              >
                {/* Top Badge & Slot Timing */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
                      {event.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                      {event.slot}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-[#061224] border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-105 group-hover:text-cyan-300 group-hover:border-cyan-300 transition-all shadow-neon-cyan">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Timing Pill */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 mb-3 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{event.timing}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {event.name}
                  </h3>

                  {/* Placeholder Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">
                    REG. OPEN
                  </span>
                  <a
                    href={siteConfig.event.googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber-primary px-3.5 py-1.5 rounded-lg text-xs font-black flex items-center gap-1.5 shadow-neon-cyan transition-all"
                  >
                    <span>REGISTER</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                {/* Subtle Hover Glow Strip */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#00F0FF]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
