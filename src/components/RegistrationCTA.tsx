"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function RegistrationCTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="cyber-card hud-corner rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl border-cyan-400/40">
          {/* Subtle watermark eagle in background */}
          <div className="absolute -right-12 -bottom-12 w-80 h-80 opacity-10 pointer-events-none filter drop-shadow-[0_0_20px_#00F0FF]">
            <Image
              src="/logos/vaioralogo.png"
              alt="Eagle Watermark"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-neon-cyan">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>OFFICIAL REGISTRATION OPEN</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              READY TO <span className="text-cyber-glow">TAKE FLIGHT?</span>
            </h2>

            {/* Subheading */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Register now for VAIORA’26 and be part of an inter-collegiate celebration of technology, creativity and innovation.
            </p>

            {/* Large Register Now Button */}
            <div className="mt-8 w-full sm:w-auto">
              <a
                href={siteConfig.event.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber-primary w-full sm:w-auto px-10 py-5 rounded-2xl text-base sm:text-lg font-black flex items-center justify-center gap-3 group tracking-wider shadow-neon-cyan-lg"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

            {/* Quick Micro notes */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Instant Google Form Verification</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Open to All Collegiate Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
