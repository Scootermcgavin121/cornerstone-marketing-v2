"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function Meteors({ number = 20 }: { number?: number }) {
  const meteors = Array.from({ length: number }, (_, i) => ({
    id: i,
    top: Math.floor(Math.random() * 100) + "%",
    left: Math.floor(Math.random() * 100) + "%",
    delay: Math.random() * 2 + "s",
    duration: Math.floor(Math.random() * 8 + 2) + "s",
    size: Math.floor(Math.random() * 60 + 40) + "px",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={cn(
            "absolute top-1/2 left-1/2 h-0.5 w-0.5 rotate-[215deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-px before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']"
          )}
          style={{
            top: meteor.top,
            left: meteor.left,
            width: meteor.size,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
            animation: `meteor ${meteor.duration} ${meteor.delay} linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
