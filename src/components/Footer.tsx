"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#02050E] text-white relative pt-16 pb-12 overflow-hidden border-t border-cyan-500/20">
      {/* Subtle Cyan Ambient Glow in footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-cyan-500/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center border-b border-slate-800/90 pb-12">
          {/* Logo and Event Branding */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
            {/* VAIORA'26 Eagle Logo */}
            <div className="relative w-28 h-28 flex-shrink-0 filter drop-shadow-[0_0_20px_rgba(0,229,255,0.6)]">
              <Image
                src="/logos/vaioralogo.png"
                alt="VAIORA'26 Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-2xl font-black tracking-tight text-white font-mono">
                {siteConfig.event.name}
              </h3>
              <p className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase">
                {siteConfig.event.type}
              </p>
              <p className="text-sm font-medium text-slate-300">
                {siteConfig.college.name}
              </p>
              <p className="text-xs text-slate-400 font-mono">
                {siteConfig.college.department}
              </p>
              <p className="text-xs font-bold text-cyan-300 tracking-widest pt-1">
                {siteConfig.event.tagline}
              </p>
            </div>
          </div>

          {/* College Logo and Quick Nav */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-6 text-center sm:text-right">
            <div className="relative w-20 h-20 bg-white p-2 rounded-2xl border border-cyan-500/30 shadow-neon-cyan">
              <Image
                src="/logos/vaigailogo.png"
                alt="Vaigai College of Engineering"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs text-slate-400 font-mono">
                Approved by AICTE • Affiliated to Anna University
              </p>
              <p className="text-xs text-slate-400">
                Therkkutheru, Melur, Madurai - 625 122
              </p>
              <div>
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#081224] hover:bg-[#0c1c38] border border-cyan-500/30 text-xs font-mono text-cyan-300 transition-colors shadow-sm"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>BACK TO TOP</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4 text-center sm:text-left">
          <p>© 2026 Vaigai College of Engineering. All rights reserved.</p>
          <p className="text-cyan-400/80">
            DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
          </p>
        </div>
      </div>
    </footer>
  );
}
