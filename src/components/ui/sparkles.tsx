"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function SparklesCore({
  className,
  particleColor = "#06b6d4",
  particleDensity = 50,
  minSize = 0.4,
  maxSize = 1,
}: {
  className?: string;
  particleColor?: string;
  particleDensity?: number;
  minSize?: number;
  maxSize?: number;
}) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generated: Sparkle[] = Array.from({ length: particleDensity }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 4,
    }));
    setSparkles(generated);
  }, [particleDensity, minSize, maxSize]);

  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size * 3}px`,
            height: `${sparkle.size * 3}px`,
            backgroundColor: particleColor,
            opacity: 0,
            animation: `pulse-glow ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite`,
            boxShadow: `0 0 ${sparkle.size * 6}px ${particleColor}`,
          }}
        />
      ))}
    </div>
  );
}
