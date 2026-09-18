"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "EVENTS", href: "#events" },
    { name: "SCHEDULE", href: "#schedule" },
    { name: "COORDINATORS", href: "#coordinators" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/85 backdrop-blur-xl border-b border-cyan-500/25 shadow-lg shadow-cyan-950/40 py-3"
          : "bg-[#030712]/40 backdrop-blur-md border-b border-cyan-500/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Vaigai College of Engineering Logo and Name */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-white p-1 rounded-xl border border-cyan-400/40 shadow-neon-cyan group-hover:border-cyan-300 transition-colors">
            <Image
              src="/logos/vaigailogo.png"
              alt="Vaigai College of Engineering Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-tight">
              VAIGAI COLLEGE OF ENGINEERING
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-cyan-400 tracking-wider uppercase font-mono">
              DEPT. OF COMPUTER SCIENCE & ENGG
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#091122]/80 px-3 py-1.5 rounded-full border border-cyan-500/20 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-bold text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-full transition-all tracking-wider font-mono"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.event.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-primary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 group tracking-wide shadow-neon-cyan"
          >
            <span>REGISTER NOW</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#0c1527] border border-cyan-500/30 text-slate-200 hover:text-cyan-400 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060B18]/95 backdrop-blur-2xl border-b border-cyan-500/30 px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/80 tracking-wider font-mono flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 opacity-60" />
              </a>
            ))}
            <div className="pt-3">
              <a
                href={siteConfig.event.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-cyber-primary w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-neon-cyan"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
