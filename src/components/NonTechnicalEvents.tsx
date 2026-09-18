"use client";

import React from "react";
import { Sparkles, HelpCircle, Trophy, Film, ArrowRight, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
  Sparkles: Sparkles,
  HelpCircle: HelpCircle,
  Trophy: Trophy,
  Film: Film,
};

export default function NonTechnicalEvents() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-400/40 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Trophy className="w-3.5 h-3.5 text-blue-400" />
            <span>TRACK 02 // 4 INTELLECT & CREATIVE ARENAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            NON-TECHNICAL <span className="text-cyber-glow">EVENTS</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Unleash quick deduction, creative video editing, auction tactics, and word puzzles across competitive tracks.
          </p>
        </div>

        {/* 4 Non-Technical Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.nonTechnicalEvents.map((event) => {
            const Icon = iconMap[event.icon] || Trophy;
            return (
              <div
                key={event.id}
                className="cyber-card hud-corner rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden border border-blue-500/25"
              >
                {/* Top Badge & Slot Timing */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-blue-300 bg-blue-950/80 px-2.5 py-1 rounded-md border border-blue-500/30">
                      {event.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                      {event.slot}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-[#08122a] border border-blue-500/40 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-105 group-hover:text-cyan-300 group-hover:border-cyan-400 transition-all shadow-neon-blue">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Timing Pill */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-blue-400 mb-3 px-2 py-0.5 rounded bg-blue-950/40 border border-blue-500/20">
                    <Clock className="w-3 h-3 text-blue-400" />
                    <span>{event.timing}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">
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

                {/* Bottom Subtle Hover Glow Strip */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#3B82F6]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
