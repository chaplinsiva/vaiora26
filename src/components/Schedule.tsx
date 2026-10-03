"use client";

import React, { useState } from "react";
import { Clock, Coffee, Eye, Terminal, Trophy } from "lucide-react";
import { siteConfig } from "@/config/site";
import EventRulesModal from "@/components/EventRulesModal";
import { EventItem } from "@/types/events";

export default function Schedule() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const allEvents = [
    ...(siteConfig.technicalEvents as unknown as EventItem[]),
    ...(siteConfig.nonTechnicalEvents as unknown as EventItem[]),
  ];

  const findEvent = (id: string) => allEvents.find((e) => e.id === id) || null;

  return (
    <section id="schedule" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Circuit background accent */}
      <div className="absolute inset-0 bg-circuit-lines opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>EVENT TIMELINE & SLOTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            SYMPOSIUM <span className="text-cyber-glow">SCHEDULE</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Official 2-Slot schedule layout for all 8 technical and non-technical events. Tap any event to inspect round rules.
          </p>
        </div>

        {/* Schedule Matrix Table / Card Layout */}
        <div className="space-y-6">
          {/* SLOT 1 */}
          <div className="cyber-card hud-corner rounded-2xl p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono font-black text-sm tracking-wider">
                  SLOT 1
                </span>
                <span className="text-lg sm:text-xl font-extrabold text-white">
                  Morning Session
                </span>
              </div>
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono font-bold text-sm px-3 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/20">
                <Clock className="w-4 h-4" />
                <span>10:00 AM – 11:30 AM</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Technical Track in Slot 1 */}
              <div className="p-4 rounded-xl bg-[#061224]/80 border border-cyan-500/20">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Technical Events</span>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedEvent(findEvent("paper-presentation"))}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#091833] border border-cyan-500/30 text-sm font-semibold text-white hover:border-cyan-400 hover:bg-cyan-950/70 transition-all text-left group"
                  >
                    <span className="group-hover:text-cyan-300 transition-colors">1. Paper Presentation</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/20">TECH 01</span>
                      <Eye className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100" />
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedEvent(findEvent("code-clash"))}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#091833] border border-cyan-500/30 text-sm font-semibold text-white hover:border-cyan-400 hover:bg-cyan-950/70 transition-all text-left group"
                  >
                    <span className="group-hover:text-cyan-300 transition-colors">2. Code Clash</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/20">TECH 02</span>
                      <Eye className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Non-Technical Track in Slot 1 */}
              <div className="p-4 rounded-xl bg-[#08122a]/80 border border-blue-500/20">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-3">
                  <Trophy className="w-3.5 h-3.5 text-blue-400" />
                  <span>Non-Technical Events</span>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedEvent(findEvent("connection"))}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#0d1c42] border border-blue-500/30 text-sm font-semibold text-white hover:border-blue-400 hover:bg-blue-950/70 transition-all text-left group"
                  >
                    <span className="group-hover:text-blue-300 transition-colors">1. Connection</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-500/20">NON-TECH 01</span>
                      <Eye className="w-3.5 h-3.5 text-blue-400 opacity-60 group-hover:opacity-100" />
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedEvent(findEvent("missing-word"))}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#0d1c42] border border-blue-500/30 text-sm font-semibold text-white hover:border-blue-400 hover:bg-blue-950/70 transition-all text-left group"
                  >
                    <span className="group-hover:text-blue-300 transition-colors">2. Missing Word</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-500/20">NON-TECH 02</span>
                      <Eye className="w-3.5 h-3.5 text-blue-400 opacity-60 group-hover:opacity-100" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BREAK STRIP */}
          <div className="cyber-card rounded-2xl p-5 border border-amber-500/30 bg-[#161208]/70 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-amber-950/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-amber-300">
                  Break (Refreshment)
                </h4>
                <p className="text-xs text-amber-400/80 font-mono">
                  Complimentary snacks, beverages & informal interaction
                </p>
              </div>
            </div>
            <div className="text-xs font-mono font-bold text-amber-400 px-3 py-1.5 rounded-lg bg-amber-950/60 border border-amber-500/30">
              11:00 AM – 11:30 AM
            </div>
          </div>

          {/* SLOT 2 */}
          <div className="cyber-card hud-corner rounded-2xl p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-blue-950/80 border border-blue-500/40 text-blue-300 font-mono font-black text-sm tracking-wider">
                  SLOT 2
                </span>
                <span className="text-lg sm:text-xl font-extrabold text-white">
                  Mid-Day Session
                </span>
              </div>
              <div className="inline-flex items-center gap-2 text-blue-400 font-mono font-bold text-sm px-3 py-1 rounded-lg bg-blue-950/50 border border-blue-500/20">
                <Clock className="w-4 h-4" />
                <span>11:30 AM – 1:00 PM</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Technical Track in Slot 2 */}
              <div className="p-4 rounded-xl bg-[#061224]/80 border border-cyan-500/20">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Technical Events</span>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedEvent(findEvent("project-expo"))}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#091833] border border-cyan-500/30 text-sm font-semibold text-white hover:border-cyan-400 hover:bg-cyan-950/70 transition-all text-left group"
                  >
                    <span className="group-hover:text-cyan-300 transition-colors">1. Project Expo</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/20">TECH 03</span>
                      <Eye className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100" />
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedEvent(findEvent("ui-ux-design"))}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#091833] border border-cyan-500/30 text-sm font-semibold text-white hover:border-cyan-400 hover:bg-cyan-950/70 transition-all text-left group"
                  >
                    <span className="group-hover:text-cyan-300 transition-colors">2. UI / UX Design</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/20">TECH 04</span>
                      <Eye className="w-3.5 h-3.5 text-cyan-400 opacity-60 group-hover:opacity-100" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Non-Technical Track in Slot 2 */}
              <div className="p-4 rounded-xl bg-[#08122a]/80 border border-blue-500/20">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-3">
                  <Trophy className="w-3.5 h-3.5 text-blue-400" />
                  <span>Non-Technical Events</span>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedEvent(findEvent("ipl-auction"))}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#0d1c42] border border-blue-500/30 text-sm font-semibold text-white hover:border-blue-400 hover:bg-blue-950/70 transition-all text-left group"
                  >
                    <span className="group-hover:text-blue-300 transition-colors">1. IPL Auction</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-500/20">NON-TECH 03</span>
                      <Eye className="w-3.5 h-3.5 text-blue-400 opacity-60 group-hover:opacity-100" />
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedEvent(findEvent("video-editing"))}
                    className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#0d1c42] border border-blue-500/30 text-sm font-semibold text-white hover:border-blue-400 hover:bg-blue-950/70 transition-all text-left group"
                  >
                    <span className="group-hover:text-blue-300 transition-colors">2. Video Editing</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-500/20">NON-TECH 04</span>
                      <Eye className="w-3.5 h-3.5 text-blue-400 opacity-60 group-hover:opacity-100" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
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

