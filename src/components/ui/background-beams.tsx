"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function BackgroundBeams({ className }: { className?: string }) {
  const beams = [
    { top: "20%", left: "10%", delay: "0s", duration: "8s", opacity: 0.15 },
    { top: "60%", left: "80%", delay: "2s", duration: "10s", opacity: 0.12 },
    { top: "40%", left: "50%", delay: "4s", duration: "9s", opacity: 0.18 },
    { top: "80%", left: "20%", delay: "1s", duration: "11s", opacity: 0.1 },
    { top: "10%", left: "70%", delay: "3s", duration: "7s", opacity: 0.14 },
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Radial glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Beams */}
      {beams.map((beam, i) => (
        <div
          key={i}
          className="absolute w-px h-[400px] rotate-[15deg]"
          style={{
            top: beam.top,
            left: beam.left,
            background: `linear-gradient(to bottom, transparent, rgba(6,182,212,${beam.opacity}), transparent)`,
            animation: `beam ${beam.duration} linear infinite`,
            animationDelay: beam.delay,
          }}
        />
      ))}
    </div>
  );
}
