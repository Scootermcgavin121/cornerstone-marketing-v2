"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto items-start",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col space-y-4 rounded-2xl p-6",
        "bg-slate-900/60 border border-slate-800/60",
        "hover:border-cyan-500/30 hover:bg-slate-900/80",
        "transition-all duration-300",
        "before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className
      )}
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.08),transparent_70%)]" />

      {header && <div className="relative z-10">{header}</div>}
      <div className="relative z-10 flex flex-col space-y-2">
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2 group-hover:bg-cyan-500/20 transition-colors duration-300">
            {icon}
          </div>
        )}
        <div className="font-bold text-lg text-slate-100 group-hover:text-white transition-colors duration-300">
          {title}
        </div>
        <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}
