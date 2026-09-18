"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles, Cpu, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient Cybernetic Radial Glows for Dark Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Decorative Cyber HUD grid lines */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-circuit-lines opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
        {/* Department Banner Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold tracking-wider mb-3 shadow-[0_0_15px_rgba(0,229,255,0.2)] font-mono backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-500">
          <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>{siteConfig.college.department}</span>
        </div>

        {/* Invites You To */}
        <p className="text-xs sm:text-sm font-extrabold tracking-[0.3em] text-cyan-300/70 uppercase mb-5 font-mono">
          INVITES YOU TO
        </p>

        {/* Large VAIORA'26 Eagle Logo with Animated Aura */}
        <div className="relative w-full max-w-[340px] sm:max-w-[480px] md:max-w-[580px] lg:max-w-[650px] aspect-[16/10] my-2 group">
          {/* Subtle Electric Blue Pulse Ring behind eagle */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-purple-600/20 blur-3xl group-hover:scale-110 transition-transform duration-700 animate-pulse-slow pointer-events-none" />

          {/* Futuristic Concentric HUD Circles behind head */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 border border-cyan-400/40 rounded-full pointer-events-none animate-spin-slow opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 border border-dashed border-cyan-300/30 rounded-full pointer-events-none opacity-40" />

          {/* Hero Eagle Logo */}
          <div className="relative w-full h-full filter drop-shadow-[0_0_35px_rgba(0,229,255,0.6)] transition-all duration-500 group-hover:drop-shadow-[0_0_55px_rgba(0,229,255,0.9)]">
            <Image
              src="/logos/vaioralogo.png"
              alt="VAIORA'26 Hero Eagle Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 650px"
            />
          </div>
        </div>

        {/* Symposium Title & Tagline */}
        <div className="mt-4 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400/80 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>AICTE APPROVED • ANNA UNIVERSITY AFFILIATED</span>
          </div>

          <h1 className="sr-only">VAIORA’26 - AN INTER COLLEGIATE SYMPOSIUM</h1>

          <p className="text-sm sm:text-base md:text-lg font-mono font-bold tracking-[0.25em] text-slate-300 uppercase">
            AN INTER COLLEGIATE SYMPOSIUM
          </p>

          <div className="pt-2">
            <span className="inline-block text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-cyber-glow">
              LET IDEAS TAKE FLIGHT
            </span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href={siteConfig.event.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-primary w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 group tracking-wider shadow-neon-cyan"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#events"
            className="btn-cyber-secondary w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 group tracking-wider"
          >
            <span>EXPLORE EVENTS</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-cyan-400" />
          </a>
        </div>

        {/* Quick Highlights */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-400 text-xs font-mono font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Cash Prizes & Certificates</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Technical & Non-Technical Tracks</span>
          </div>
        </div>
      </div>
    </section>
  );
}
