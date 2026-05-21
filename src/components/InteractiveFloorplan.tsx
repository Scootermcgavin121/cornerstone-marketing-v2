"use client";

import { useMemo, useState } from "react";
type OptionCode = "screened_porch" | "morning_room" | "fireplace" | "third_car_garage" | "bonus_suite";

interface FloorplanOption {
  code: OptionCode;
  label: string;
  price: string;
  description: string;
  conflicts?: OptionCode[];
}

const options: FloorplanOption[] = [
  {
    code: "screened_porch",
    label: "Screened Porch",
    price: "+$18,900",
    description: "Adds an outdoor living room off the family room.",
    conflicts: ["morning_room"],
  },
  {
    code: "morning_room",
    label: "Morning Room",
    price: "+$27,500",
    description: "Extends the rear of the home with a bright dining nook.",
    conflicts: ["screened_porch"],
  },
  {
    code: "fireplace",
    label: "Fireplace",
    price: "+$7,800",
    description: "Centers the family room around a built-in fireplace wall.",
  },
  {
    code: "third_car_garage",
    label: "3-Car Garage",
    price: "+$24,000",
    description: "Adds a third bay for storage, tools, or weekend toys.",
  },
  {
    code: "bonus_suite",
    label: "Bonus Suite",
    price: "+$36,500",
    description: "Shows how a second-floor bonus suite could be layered in.",
  },
];

const optionLookup = new Map(options.map((option) => [option.code, option]));

export function InteractiveFloorplan() {
  const [selected, setSelected] = useState<OptionCode[]>(["screened_porch", "fireplace"]);
  const [showBrochure, setShowBrochure] = useState(false);

  const selectedOptions = useMemo(
    () => selected.map((code) => optionLookup.get(code)).filter(Boolean) as FloorplanOption[],
    [selected]
  );

  const total = useMemo(() => {
    return selectedOptions.reduce((sum, option) => {
      const amount = Number(option.price.replace(/[^0-9]/g, ""));
      return sum + amount;
    }, 0);
  }, [selectedOptions]);

  function toggleOption(code: OptionCode) {
    const option = optionLookup.get(code);
    if (!option) return;

    setSelected((current) => {
      if (current.includes(code)) {
        return current.filter((item) => item !== code);
      }

      const conflicts = new Set(option.conflicts ?? []);
      return [...current.filter((item) => !conflicts.has(item)), code];
    });
  }

  const isSelected = (code: OptionCode) => selected.includes(code);

  return (
    <section id="interactive-floorplan" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-sm text-cyan-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Interactive buyer experience concept
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Let buyers explore options before they ever hit the design center.
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Toggle structural options, preview the updated plan, and generate a brochure-ready summary from the same configuration state.
          </p>
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-start">
          <div>
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500">The Cypress</p>
                  <h3 className="text-2xl font-bold text-white">Structural Options</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected([])}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-400 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-3">
                {options.map((option) => {
                  const active = isSelected(option.code);
                  return (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => toggleOption(option.code)}
                      className={`w-full text-left rounded-2xl border p-4 transition-all duration-200 ${
                        active
                          ? "border-cyan-400/60 bg-cyan-500/10 shadow-lg shadow-cyan-500/5"
                          : "border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                            active ? "border-cyan-400 bg-cyan-400 text-slate-950" : "border-slate-600"
                          }`}
                        >
                          {active ? (
                            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z" clipRule="evenodd" />
                            </svg>
                          ) : null}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center justify-between gap-3">
                            <span className="font-semibold text-white">{option.label}</span>
                            <span className="text-sm font-semibold text-emerald-300">{option.price}</span>
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-slate-400">{option.description}</span>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Selected options</span>
                  <span className="font-bold text-white">{selectedOptions.length}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-slate-400">Estimated option total</span>
                  <span className="text-xl font-extrabold gradient-text">${total.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowBrochure((current) => !current)}
                className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-3 font-bold text-slate-950 hover:opacity-90 transition-opacity"
              >
                {showBrochure ? "Hide brochure preview" : "Generate brochure preview"}
              </button>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-4 sm:p-6 shadow-2xl shadow-emerald-950/20 backdrop-blur">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500">Live floorplan state</p>
                  <h3 className="text-2xl font-bold text-white">Base SVG + option overlay groups</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedOptions.length ? selectedOptions.map((option) => (
                    <span key={option.code} className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                      {option.label}
                    </span>
                  )) : (
                    <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400">Base plan</span>
                  )}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-white p-3 sm:p-6">
                <FloorplanSvg selected={selected} />
              </div>

              <div className="mt-5 grid sm:grid-cols-3 gap-3 text-sm">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-slate-500">Plan</p>
                  <p className="mt-1 font-bold text-white">The Cypress</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-slate-500">Base size</p>
                  <p className="mt-1 font-bold text-white">2,415 sq ft</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-slate-500">Configurator mode</p>
                  <p className="mt-1 font-bold text-white">Buyer preview</p>
                </div>
              </div>

              {showBrochure ? (
                <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-wider text-emerald-300">Brochure preview</p>
                      <h4 className="mt-1 text-xl font-bold text-white">The Cypress â€” Personalized Plan</h4>
                    </div>
                    <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">Print-ready concept</span>
                  </div>
                  <div className="mt-4 grid md:grid-cols-[1fr_220px] gap-4 items-start">
                    <div className="rounded-xl bg-white p-3">
                      <FloorplanSvg selected={selected} compact />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Selected Options</p>
                      {selectedOptions.length ? (
                        <ul className="mt-2 space-y-2 text-sm text-slate-300">
                          {selectedOptions.map((option) => (
                            <li key={option.code} className="flex justify-between gap-3 border-b border-slate-700/60 pb-2">
                              <span>{option.label}</span>
                              <span className="font-semibold text-emerald-300">{option.price}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-2 text-sm text-slate-400">No structural options selected.</p>
                      )}
                      <p className="mt-4 text-xs leading-relaxed text-slate-500">
                        Concept demo only. Real production version would read approved floorplan SVG layers and option rules from Cornerstone.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloorplanSvg({ selected, compact = false }: { selected: OptionCode[]; compact?: boolean }) {
  const active = (code: OptionCode) => selected.includes(code);
  const rearRoomLabel = active("morning_room") ? "Morning Room" : active("screened_porch") ? "Screened Porch" : "Covered Patio";

  return (
    <svg viewBox="0 0 900 560" role="img" aria-label="Interactive sample floorplan" className={`w-full ${compact ? "h-auto" : "min-h-[340px]"}`}>
      <defs>
        <pattern id="screenPattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#38bdf8" strokeWidth="2" opacity="0.65" />
        </pattern>
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.18" />
        </filter>
      </defs>

      <rect x="0" y="0" width="900" height="560" fill="#f8fafc" />
      <rect x="20" y="20" width="860" height="520" rx="24" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />

      {/* Base home shell */}
      <g id="base-plan" filter="url(#softShadow)">
        <rect x="170" y="110" width="520" height="360" fill="#ffffff" stroke="#0f172a" strokeWidth="6" />
        <rect x="170" y="330" width="190" height="140" fill="#f1f5f9" stroke="#0f172a" strokeWidth="4" />
        <rect x="360" y="330" width="160" height="140" fill="#f8fafc" stroke="#0f172a" strokeWidth="4" />
        <rect x="520" y="330" width="170" height="140" fill="#f8fafc" stroke="#0f172a" strokeWidth="4" />
        <rect x="170" y="110" width="210" height="160" fill="#f8fafc" stroke="#0f172a" strokeWidth="4" />
        <rect x="380" y="110" width="170" height="160" fill="#f8fafc" stroke="#0f172a" strokeWidth="4" />
        <rect x="550" y="110" width="140" height="160" fill="#f8fafc" stroke="#0f172a" strokeWidth="4" />
        <rect x="360" y="270" width="330" height="60" fill="#fff7ed" stroke="#0f172a" strokeWidth="4" />
        <rect x="170" y="270" width="190" height="60" fill="#ecfeff" stroke="#0f172a" strokeWidth="4" />
      </g>

      {/* Base garage */}
      <g id="garage-base">
        <rect x="55" y="300" width="115" height="170" fill="#e2e8f0" stroke="#0f172a" strokeWidth="6" />
        <line x1="72" y1="445" x2="153" y2="445" stroke="#64748b" strokeWidth="5" strokeLinecap="round" />
        <text x="112" y="385" textAnchor="middle" className="fill-slate-700" fontSize="18" fontWeight="700">2-Car</text>
        <text x="112" y="410" textAnchor="middle" className="fill-slate-500" fontSize="14">Garage</text>
      </g>

      {/* Option: third car garage */}
      {active("third_car_garage") ? (
        <g id="option-third_car_garage" className="on">
          <rect x="55" y="185" width="115" height="115" fill="#d1fae5" stroke="#10b981" strokeWidth="5" />
          <line x1="72" y1="205" x2="153" y2="205" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
          <text x="112" y="250" textAnchor="middle" fill="#065f46" fontSize="15" fontWeight="800">3rd Bay</text>
        </g>
      ) : null}

      {/* Rear conditional footprint */}
      <g id="rear-option-zone">
        <rect
          x="360"
          y="35"
          width={active("morning_room") ? 250 : 190}
          height="75"
          fill={active("screened_porch") ? "url(#screenPattern)" : active("morning_room") ? "#dcfce7" : "#f1f5f9"}
          stroke={active("screened_porch") ? "#0284c7" : active("morning_room") ? "#16a34a" : "#94a3b8"}
          strokeWidth={active("screened_porch") || active("morning_room") ? 5 : 3}
          strokeDasharray={active("screened_porch") ? "8 6" : undefined}
        />
        <line x1="420" y1="110" x2="500" y2="110" stroke="#ffffff" strokeWidth="8" />
        <text x={active("morning_room") ? 485 : 455} y="80" textAnchor="middle" fill="#0f172a" fontSize="17" fontWeight="800">{rearRoomLabel}</text>
      </g>

      {/* Option: fireplace */}
      {active("fireplace") ? (
        <g id="option-fireplace" className="on">
          <rect x="675" y="205" width="22" height="80" rx="6" fill="#fed7aa" stroke="#f97316" strokeWidth="4" />
          <path d="M686 258c14-20-12-27 1-45 21 18 30 39 2 58-11-5-16-11-3-13z" fill="#fb923c" />
          <text x="632" y="252" textAnchor="middle" fill="#9a3412" fontSize="14" fontWeight="800">Fireplace</text>
        </g>
      ) : null}

      {/* Option: bonus suite indicator */}
      {active("bonus_suite") ? (
        <g id="option-bonus_suite" className="on">
          <rect x="705" y="112" width="120" height="112" rx="14" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="10 7" />
          <text x="765" y="160" textAnchor="middle" fill="#5b21b6" fontSize="16" fontWeight="800">Bonus</text>
          <text x="765" y="183" textAnchor="middle" fill="#5b21b6" fontSize="16" fontWeight="800">Suite</text>
          <path d="M690 160h35" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />
        </g>
      ) : null}

      {/* Room labels */}
      <g id="room-labels" fontFamily="Inter, ui-sans-serif" fontSize="16" fill="#334155">
        <text x="275" y="190" textAnchor="middle" fontWeight="800">Primary Suite</text>
        <text x="465" y="190" textAnchor="middle" fontWeight="800">Kitchen</text>
        <text x="620" y="190" textAnchor="middle" fontWeight="800">Dining</text>
        <text x="525" y="307" textAnchor="middle" fontWeight="800">Family Room</text>
        <text x="265" y="307" textAnchor="middle" fontWeight="800">Foyer</text>
        <text x="265" y="405" textAnchor="middle" fontWeight="800">Bedroom 2</text>
        <text x="440" y="405" textAnchor="middle" fontWeight="800">Bath</text>
        <text x="605" y="405" textAnchor="middle" fontWeight="800">Bedroom 3</text>
      </g>

      {/* Simple doors/openings */}
      <g id="doors-and-symbols" stroke="#0f172a" strokeWidth="3" fill="none" opacity="0.75">
        <path d="M355 390 q-35 0 -35 -35" />
        <path d="M520 382 q30 0 30 -30" />
        <path d="M380 185 q35 0 35 35" />
        <path d="M550 190 q-30 0 -30 30" />
        <path d="M585 330 q0 -30 30 -30" />
        <line x1="210" y1="270" x2="320" y2="270" strokeDasharray="7 7" />
        <line x1="390" y1="330" x2="650" y2="330" strokeDasharray="7 7" />
      </g>

      {/* Option relationship annotation */}
      {active("screened_porch") ? (
        <g id="a-on-screened_porch-off-morning_room" className="on">
          <text x="455" y="30" textAnchor="middle" fill="#0369a1" fontSize="13" fontWeight="800">Screened Porch selected â€” Morning Room hidden</text>
        </g>
      ) : null}
      {active("morning_room") ? (
        <g id="a-on-morning_room-off-screened_porch" className="on">
          <text x="485" y="30" textAnchor="middle" fill="#15803d" fontSize="13" fontWeight="800">Morning Room selected â€” Screened Porch hidden</text>
        </g>
      ) : null}

      <text x="450" y="522" textAnchor="middle" fill="#64748b" fontSize="13">
        Demo SVG: option groups use IDs that can map to Cornerstone option codes.
      </text>
    </svg>
  );
}

