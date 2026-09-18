"use client";

import React from "react";

export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Responsive Background Video Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover opacity-40 mix-blend-screen scale-105 transition-opacity duration-1000"
      >
        <source src="/video/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Multi-layered dark scrim to ensure video NEVER interferes with or overlays text */}
      <div className="absolute inset-0 bg-[#030712]/65 pointer-events-none backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-transparent to-[#030712]/95 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#030712_90%)] pointer-events-none" />
    </div>
  );
}
