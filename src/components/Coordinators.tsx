"use client";

import React from "react";
import { UserCheck, GraduationCap, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Coordinators() {
  const { chief, faculty, students } = siteConfig.coordinators;

  return (
    <section id="coordinators" className="py-20 lg:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>LEADERSHIP & COMMITTEE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            SYMPOSIUM <span className="text-cyber-glow">COORDINATORS</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Dedicated leadership ensuring an exceptional competitive standard for VAIORA’26.
          </p>
        </div>

        <div className="space-y-12">
          {/* Chief Coordinator */}
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-4">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest px-3 py-1 bg-cyan-950/80 rounded-full border border-cyan-500/40">
                CHIEF COORDINATOR
              </span>
            </div>
            <div className="cyber-card hud-corner rounded-2xl p-7 text-center group border border-cyan-500/30 shadow-lg">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#061224] border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform shadow-neon-cyan">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                {chief.name}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mt-1">
                {chief.designation}
              </p>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                {chief.institution}
              </p>
            </div>
          </div>

          {/* Faculty Coordinators */}
          <div>
            <div className="text-center mb-6">
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700">
                FACULTY COORDINATORS
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {faculty.map((item, idx) => (
                <div
                  key={idx}
                  className="cyber-card hud-corner rounded-2xl p-6 text-center group border border-slate-700/60 hover:border-cyan-500/50"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-[#061224] border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 group-hover:border-cyan-400 transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs font-mono font-semibold text-cyan-400 mt-1">
                    {item.designation}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Vaigai College of Engineering
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Coordinators */}
          <div>
            <div className="text-center mb-6">
              <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-widest px-3 py-1 bg-blue-950/80 rounded-full border border-blue-500/40">
                STUDENT COORDINATORS
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {students.map((student, idx) => (
                <div
                  key={idx}
                  className="cyber-card hud-corner rounded-2xl p-6 flex flex-col items-center text-center group border border-blue-500/30 hover:border-cyan-400"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#08122a] border border-blue-500/40 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-105 transition-transform shadow-neon-blue">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {student.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    Student Coordinator • CSE
                  </p>

                  <a
                    href={`tel:${student.phone}`}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#061224] group-hover:bg-cyan-950/80 border border-cyan-500/30 group-hover:border-cyan-400 text-slate-200 group-hover:text-cyan-300 text-xs font-mono font-bold transition-all shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{student.displayPhone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
