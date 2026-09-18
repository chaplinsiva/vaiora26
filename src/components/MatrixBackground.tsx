"use client";

import React, { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Characters matching cyber / binary theme from the VAIORA'26 eagle wings
    const chars = "0101010101010101VAIORA26VAIGAI<>[]{}/\\*+=~#_";
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newCols = Math.floor(width / fontSize);
      drops.length = 0;
      for (let i = 0; i < newCols; i++) {
        drops.push(Math.floor(Math.random() * -50));
      }
    };

    window.addEventListener("resize", handleResize);

    // Initialize drops at staggered heights
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }

    const draw = () => {
      // Semi-transparent black background to create fading trail
      ctx.fillStyle = "rgba(3, 7, 18, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // Randomly highlight the head of stream with pure cyan / white
        const isHead = Math.random() > 0.95;
        if (isHead) {
          ctx.fillStyle = "#E0F7FA"; // Bright cyan-white
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#00F0FF";
        } else {
          // Cyber cyan & electric blue shades
          ctx.fillStyle = i % 3 === 0 ? "rgba(0, 229, 255, 0.45)" : "rgba(37, 99, 235, 0.35)";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-25 mix-blend-screen"
      />
      {/* Subtle scanline overlay for cinematic depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
    </div>
  );
}
