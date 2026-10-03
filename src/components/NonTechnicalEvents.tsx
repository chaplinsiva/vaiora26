"use client";

import React, { useState } from "react";
import {
  Sparkles,
  HelpCircle,
  Trophy,
  Film,
  ArrowRight,
  Clock,
  MapPin,
  Eye,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import EventRulesModal from "@/components/EventRulesModal";
import { EventItem } from "@/types/events";

const iconMap: Record<string, React.ElementType> = {
  Sparkles: Sparkles,
  HelpCircle: HelpCircle,
  Trophy: Trophy,
  Film: Film,
};

export default function NonTechnicalEvents() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

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
            Unleash quick deduction, creative video editing, auction tactics, and word puzzles across competitive tracks. Tap any event to inspect full round rules and official circular.
          </p>
        </div>

        {/* 4 Non-Technical Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(siteConfig.nonTechnicalEvents as unknown as EventItem[]).map((event) => {
            const Icon = iconMap[event.icon] || Trophy;
            return (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="cyber-card hud-corner rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden border border-blue-500/25 cursor-pointer hover:border-blue-400/70 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
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
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-[#08122a] border border-blue-500/40 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 group-hover:text-cyan-300 group-hover:border-cyan-400 transition-all shadow-neon-blue">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Subtitle Alias Tag */}
                  {event.subtitle && (
                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-black tracking-widest text-amber-300 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/30 uppercase">
                        ★ {event.subtitle}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">
                    {event.name}
                  </h3>

                  {/* Timing & Venue Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3 text-[11px] font-mono text-blue-400">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-950/40 border border-blue-500/20">
                      <Clock className="w-3 h-3 text-blue-400 shrink-0" />
                      <span>{event.timing}</span>
                    </div>
                    {event.venue && (
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                        <MapPin className="w-3 h-3 text-blue-400 shrink-0" />
                        <span>{event.venue}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {event.description}
                  </p>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  {/* View Rules Prompt Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEvent(event);
                    }}
                    className="w-full py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 bg-blue-950/60 border border-blue-500/30 text-blue-300 hover:bg-blue-900/80 hover:border-blue-400 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW RULES & FORMAT</span>
                  </button>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{event.teamSize}</span>
                    </span>
                    <a
                      href={siteConfig.event.googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-cyber-primary px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1.5 shadow-neon-cyan transition-all"
                    >
                      <span>REGISTER</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Bottom Subtle Hover Glow Strip */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#3B82F6]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Rules & Circular Modal */}
      <EventRulesModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
}

