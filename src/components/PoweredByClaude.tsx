/**
 * PoweredByClaude
 * ─────────────────────────────────────────────────────────────
 * Pure-CSS "Powered by Claude" badge. Transparent background,
 * gradient border (coral → magenta → cyan), and the Claude
 * 12-petal sparkle logo rendered as inline SVG.
 *
 * Drop anywhere on a dark background:
 *   <PoweredByClaude />
 *   <PoweredByClaude size="lg" />
 */

type Size = "sm" | "md" | "lg";

interface Props {
  size?: Size;
  className?: string;
}

const sizeMap: Record<Size, {
  px: string;
  py: string;
  gap: string;
  sparkle: string;
  caption: string;
  brand: string;
  radius: string;
}> = {
  sm: { px: "px-4", py: "py-2",   gap: "gap-2.5", sparkle: "w-5 h-5",  caption: "text-[10px]", brand: "text-base",   radius: "rounded-full" },
  md: { px: "px-5", py: "py-2.5", gap: "gap-3",   sparkle: "w-6 h-6",  caption: "text-[11px]", brand: "text-lg",     radius: "rounded-full" },
  lg: { px: "px-7", py: "py-3.5", gap: "gap-4",   sparkle: "w-8 h-8",  caption: "text-xs",     brand: "text-2xl",    radius: "rounded-full" },
};

export function PoweredByClaude({ size = "md", className = "" }: Props) {
  const s = sizeMap[size];
  return (
    <div
      className={`relative inline-flex items-center ${s.gap} ${s.px} ${s.py} ${s.radius} ${className}`}
      style={{
        // Gradient border via background-clip technique
        background: "linear-gradient(rgba(10, 13, 22, 0.6), rgba(10, 13, 22, 0.6)) padding-box, linear-gradient(120deg, #f59e6b 0%, #e879c4 35%, #a78bfa 65%, #38bdf8 100%) border-box",
        border: "1px solid transparent",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Outer soft glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-50 blur-xl"
        style={{
          background: "linear-gradient(120deg, rgba(245,158,107,0.45) 0%, rgba(232,121,196,0.35) 35%, rgba(167,139,250,0.30) 65%, rgba(56,189,248,0.25) 100%)",
        }}
      />

      {/* Claude sparkle - 12 tapered petals */}
      <ClaudeSparkle className={`${s.sparkle} flex-shrink-0`} />

      <div className="flex flex-col leading-none">
        <span className={`${s.caption} font-medium text-slate-400 tracking-wide`}>Powered by</span>
        <span
          className={`${s.brand} font-bold text-white tracking-tight`}
          style={{ fontFamily: "'Times New Roman', Georgia, serif", letterSpacing: "-0.01em" }}
        >
          Claude
        </span>
      </div>
    </div>
  );
}

function ClaudeSparkle({ className = "" }: { className?: string }) {
  // 12 tapered petals around a center point - mimics Claude's sparkle/asterisk burst logo
  const petals = Array.from({ length: 12 }, (_, i) => i);
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-label="Claude logo"
      role="img"
    >
      <defs>
        <radialGradient id="claudeCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#d97757" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="claudePetal" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#d97757" />
        </linearGradient>
      </defs>

      {/* Soft center glow */}
      <circle cx="50" cy="50" r="40" fill="url(#claudeCoreGlow)" />

      {/* 12 petals, rotated around center */}
      <g transform="translate(50 50)">
        {petals.map((i) => {
          const angle = (i * 360) / petals.length;
          return (
            <path
              key={i}
              transform={`rotate(${angle})`}
              d="M 0 -38 Q 3.5 -14, 0 -3 Q -3.5 -14, 0 -38 Z"
              fill="url(#claudePetal)"
            />
          );
        })}
        {/* Center dot */}
        <circle cx="0" cy="0" r="3.5" fill="#fb923c" />
      </g>
    </svg>
  );
}
