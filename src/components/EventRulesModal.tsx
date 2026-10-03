"use client";

import React, { useEffect, useState } from "react";
import {
  X,
  Clock,
  MapPin,
  Users,
  Sparkles,
  FileText,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Trophy,
  ArrowRight,
  Maximize2,
  Calendar,
} from "lucide-react";
import { EventItem } from "@/types/events";
import { siteConfig } from "@/config/site";

interface EventRulesModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export default function EventRulesModal({ event, onClose }: EventRulesModalProps) {
  const [activeTab, setActiveTab] = useState<"rules" | "poster">("rules");
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  // Close on Escape key and lock body scroll
  useEffect(() => {
    if (!event) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isImageExpanded) {
          setIsImageExpanded(false);
        } else {
          onClose();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [event, onClose, isImageExpanded]);

  // Reset tab when new event opens
  useEffect(() => {
    if (event) {
      setActiveTab("rules");
      setIsImageExpanded(false);
    }
  }, [event]);

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Dialog Window */}
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#070e1c] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] text-slate-100 overflow-hidden hud-corner my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glowing Top Cyber Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_15px_#00F0FF]" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-cyan-500/20 bg-gradient-to-b from-cyan-950/40 to-transparent">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold tracking-wider bg-cyan-950 border border-cyan-400/40 text-cyan-300">
                  {event.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold tracking-wider bg-blue-950 border border-blue-400/40 text-blue-300">
                  {event.slot}
                </span>
                {event.subtitle && (
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-black tracking-widest bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 uppercase">
                    ★ {event.subtitle}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
                <span>{event.name}</span>
              </h2>
              {event.theme && (
                <p className="text-xs sm:text-sm text-cyan-300/80 font-mono flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Theme: {event.theme}</span>
                </p>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close rules modal"
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/60 transition-all group shrink-0"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-5">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#06142a]/90 border border-cyan-500/20">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="truncate">
                <div className="text-[10px] font-mono uppercase text-slate-400">VENUE</div>
                <div className="text-xs font-bold text-white truncate">{event.venue}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#06142a]/90 border border-cyan-500/20">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="truncate">
                <div className="text-[10px] font-mono uppercase text-slate-400">TIMING</div>
                <div className="text-xs font-bold text-white truncate">{event.timing}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#06142a]/90 border border-cyan-500/20 col-span-2 sm:col-span-1">
              <Users className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="truncate">
                <div className="text-[10px] font-mono uppercase text-slate-400">TEAM SIZE</div>
                <div className="text-xs font-bold text-white truncate">{event.teamSize}</div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex items-center gap-2 mt-5 border-b border-slate-800">
            <button
              onClick={() => setActiveTab("rules")}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all ${
                activeTab === "rules"
                  ? "border-cyan-400 text-cyan-300 bg-cyan-950/30"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>RULES & ROUNDS</span>
            </button>

            <button
              onClick={() => setActiveTab("poster")}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold tracking-wider uppercase border-b-2 transition-all ${
                activeTab === "poster"
                  ? "border-cyan-400 text-cyan-300 bg-cyan-950/30"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>OFFICIAL POSTER</span>
              {event.posterImage && (
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto max-h-[calc(92vh-280px)] space-y-6 custom-scrollbar">
          {activeTab === "rules" ? (
            <div className="space-y-6">
              {/* Event Overview Synopsis */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/25">
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>EVENT OVERVIEW</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Rounds Breakdown (If Available) */}
              {event.rounds && event.rounds.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-cyan-400" />
                    <span>COMPETITION ROUNDS & STRUCTURE</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-3.5">
                    {event.rounds.map((round, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#09152b] border border-cyan-500/30 space-y-2.5 relative overflow-hidden"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h5 className="text-sm font-extrabold text-white flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 text-xs flex items-center justify-center font-mono">
                              {idx + 1}
                            </span>
                            <span>{round.title}</span>
                          </h5>
                          <div className="flex items-center gap-2">
                            {round.duration && (
                              <span className="px-2 py-0.5 rounded text-[11px] font-mono text-cyan-300 bg-cyan-950 border border-cyan-500/30">
                                ⏱ {round.duration}
                              </span>
                            )}
                            {round.points && (
                              <span className="px-2 py-0.5 rounded text-[11px] font-mono text-amber-300 bg-amber-950/60 border border-amber-500/30">
                                🎯 {round.points}
                              </span>
                            )}
                          </div>
                        </div>

                        <ul className="space-y-1.5 pl-1 pt-1">
                          {round.rules.map((r, rIdx) => (
                            <li
                              key={rIdx}
                              className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                            >
                              <span className="text-cyan-400 mt-1">▸</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* IPL Squad Composition Box (Special Feature for IPL Auction) */}
              {event.squadComposition && event.squadComposition.length > 0 && (
                <div className="p-4 rounded-xl bg-gradient-to-br from-amber-950/30 to-[#070e1c] border border-amber-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase tracking-wider">
                    <Trophy className="w-4 h-4" />
                    <span>MANDATORY SQUAD COMPOSITION (CRICKET AUCTION)</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {event.squadComposition.map((item, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-black/40 border border-amber-500/20 text-center"
                      >
                        <div className="text-lg font-black text-amber-300 font-mono">
                          {item.count}
                        </div>
                        <div className="text-[11px] font-mono text-slate-300 mt-0.5">
                          {item.role}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-amber-300/80 font-mono italic">
                    ⚠ Teams failing to fulfill this exact composition will be disqualified.
                  </p>
                </div>
              )}

              {/* Full Rules Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-cyan-400" />
                  <span>OFFICIAL GUIDELINES & CRITERIA</span>
                </h4>
                <div className="space-y-2.5">
                  {event.rules.map((rule, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#061224] border border-slate-800 flex items-start gap-3 hover:border-cyan-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Timing & Venue Advisory */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 font-mono flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Date: 8th October, 2026 • Reporting 15 mins prior to slot start</span>
                </div>
                <span className="text-cyan-400 font-bold shrink-0">#VAIORA2026</span>
              </div>
            </div>
          ) : (
            /* Poster View Tab */
            <div className="flex flex-col items-center justify-center space-y-4 py-2">
              {event.posterImage ? (
                <div className="w-full flex flex-col items-center space-y-3">
                  <div className="relative group max-w-md w-full rounded-xl overflow-hidden border-2 border-cyan-500/40 shadow-[0_0_30px_rgba(0,240,255,0.2)] bg-black">
                    {/* Poster Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={event.posterImage}
                      alt={`${event.name} Official Poster`}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
                      onClick={() => setIsImageExpanded(true)}
                    />

                    {/* Hover Overlay with Fullscreen prompt */}
                    <div
                      onClick={() => setIsImageExpanded(true)}
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 cursor-pointer text-cyan-300 font-mono font-bold text-xs"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>CLICK TO VIEW FULL RESOLUTION</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsImageExpanded(true)}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold hover:bg-cyan-900 transition-all"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Expand Image</span>
                    </button>

                    <a
                      href={event.posterImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-bold hover:text-white hover:border-cyan-400 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in New Tab</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="p-10 text-center max-w-md space-y-3 border border-dashed border-cyan-500/30 rounded-2xl bg-[#061224]/60">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Official Poster Processing</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    The creative circular poster for <span className="text-cyan-300 font-bold">{event.name}</span> will be uploaded shortly. All verified rules, rounds, and guidelines are available in the Rules tab.
                  </p>
                  <button
                    onClick={() => setActiveTab("rules")}
                    className="btn-cyber-primary px-4 py-2 rounded-lg text-xs font-black"
                  >
                    View Verified Rules
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 border-t border-cyan-500/20 bg-[#050b16] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-700/80 bg-slate-900/60 text-slate-300 text-xs font-mono font-bold hover:bg-slate-800 hover:text-white transition-all text-center"
          >
            BACK TO EVENTS
          </button>

          <a
            href={siteConfig.event.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-cyber-primary px-6 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-neon-cyan transition-all"
          >
            <span>REGISTER FOR THIS EVENT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Expanded Fullscreen Poster Lightbox */}
      {isImageExpanded && event.posterImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsImageExpanded(false)}
        >
          <div className="relative max-w-4xl max-h-[95vh] flex flex-col items-center">
            <button
              onClick={() => setIsImageExpanded(false)}
              className="absolute -top-10 right-0 p-1.5 rounded-lg bg-slate-800 border border-slate-600 text-white hover:bg-cyan-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={event.posterImage}
              alt={`${event.name} Fullscreen Poster`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg border border-cyan-500/40 shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
