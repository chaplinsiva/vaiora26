"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA when scrolled past hero section (~350px)
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sm:hidden fixed bottom-4 inset-x-4 z-40 animate-in slide-in-from-bottom duration-300">
      <div className="cyber-card rounded-2xl p-2.5 shadow-2xl border border-cyan-400/50 bg-[#040916]/95 backdrop-blur-xl">
        <a
          href={siteConfig.event.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cyber-primary w-full py-3 px-4 rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-neon-cyan"
        >
          <span>REGISTER FOR VAIORA’26 NOW</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
