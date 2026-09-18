"use client";

import React from "react";
import { MapPin, Calendar, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function EventInfo() {
  const infoCards = [
    {
      title: "VENUE",
      value: siteConfig.event.venue,
      subtitle: "Vaigai College Campus, Madurai",
      icon: MapPin,
      badge: "LOC.01",
    },
    {
      title: "DATE",
      value: siteConfig.event.date,
      subtitle: "Mark your calendars",
      icon: Calendar,
      badge: "DAT.02",
    },
    {
      title: "TIME",
      value: siteConfig.event.time,
      subtitle: "IST (Morning Session)",
      icon: Clock,
      badge: "TIM.03",
    },
  ];

  return (
    <section className="relative z-10 -mt-8 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {infoCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="cyber-card hud-corner rounded-2xl p-6 sm:p-7 relative overflow-hidden group border border-cyan-500/20"
            >
              {/* Top Telemetry Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 uppercase px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30">
                  {card.badge}
                </span>
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_#00F0FF]" />
              </div>

              <div className="flex items-start gap-4">
                {/* Futuristic Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#061224] border border-cyan-500/40 flex items-center justify-center flex-shrink-0 text-cyan-400 group-hover:border-cyan-300 group-hover:text-cyan-300 transition-colors shadow-neon-cyan">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-0.5">
                    {card.title}
                  </p>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {card.value}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Accent Glow Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent group-hover:via-cyan-400 transition-all shadow-[0_0_8px_#00F0FF]" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
