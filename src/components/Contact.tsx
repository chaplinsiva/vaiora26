"use client";

import React from "react";
import { MapPin, Phone, ArrowUpRight, Building2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const [hari, afrin] = siteConfig.coordinators.students;

  return (
    <section id="contact" className="py-20 lg:py-24 relative border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMMUNICATION TERMINAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            CONTACT <span className="text-cyber-glow">US</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Reach out directly to our student coordinators for symposium guidance and assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* College Address Card */}
          <div className="lg:col-span-6 cyber-card hud-corner rounded-3xl p-8 flex flex-col justify-between border border-cyan-500/30">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#061224] border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-6 shadow-neon-cyan">
                <Building2 className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                INSTITUTION & VENUE
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-2">
                VAIGAI COLLEGE OF ENGINEERING
              </h3>

              <p className="text-sm font-semibold text-slate-300 font-mono mb-4">
                Department of Computer Science and Engineering
              </p>

              <div className="space-y-1 text-slate-400 text-sm leading-relaxed border-l-2 border-cyan-400 pl-4 py-1">
                <p>Therkkutheru,</p>
                <p>Vinayagapuram,</p>
                <p>Melur,</p>
                <p className="font-semibold text-slate-200">Madurai - 625 122, Tamil Nadu</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>HALL: KALAM AUDITORIUM</span>
              <span className="text-cyan-400 font-bold">CAMPUS DIRECTORY READY</span>
            </div>
          </div>

          {/* Coordinators Action & Quick Links */}
          <div className="lg:col-span-6 cyber-card hud-corner rounded-3xl p-8 flex flex-col justify-between border border-cyan-400/40">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#08122a] border border-blue-500/40 flex items-center justify-center text-blue-400 mb-6 shadow-neon-blue">
                <Phone className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                DIRECT HELPLINE
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1 mb-2">
                STUDENT COORDINATORS
              </h3>

              <p className="text-sm text-slate-400 mb-6">
                For questions regarding events, registration verification, or event schedules, feel free to call our coordinators directly.
              </p>

              {/* Coordinator Contacts List */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#060D1E] border border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{hari.name}</h4>
                    <p className="text-xs font-mono text-slate-400">Student Coordinator</p>
                  </div>
                  <a
                    href={`tel:${hari.phone}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#091529] hover:bg-cyan-950/90 border border-cyan-500/30 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 text-xs font-mono font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{hari.displayPhone}</span>
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-[#060D1E] border border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{afrin.name}</h4>
                    <p className="text-xs font-mono text-slate-400">Student Coordinator</p>
                  </div>
                  <a
                    href={`tel:${afrin.phone}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#091529] hover:bg-cyan-950/90 border border-cyan-500/30 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 text-xs font-mono font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{afrin.displayPhone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${hari.phone}`}
                className="btn-cyber-secondary py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>CALL HARI VIGNESH</span>
              </a>

              <a
                href={`tel:${afrin.phone}`}
                className="btn-cyber-secondary py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>CALL AFRIN SAHANA</span>
              </a>

              <div className="sm:col-span-2">
                <a
                  href={siteConfig.event.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-primary w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-neon-cyan"
                >
                  <span>REGISTER NOW</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
