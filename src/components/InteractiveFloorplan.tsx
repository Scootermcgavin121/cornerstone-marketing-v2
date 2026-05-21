"use client";

import { useMemo, useState } from "react";
type OptionCode = "screened_porch" | "raised_ceiling" | "owners_tray_ceiling" | "garage_extension" | "alternate_bedroom_layout";

interface FloorplanOption {
  code: OptionCode;
  label: string;
  price: string;
  description: string;
}

const options: FloorplanOption[] = [
  {
    code: "screened_porch",
    label: "Screened Porch",
    price: "+$18,900",
    description: "Highlights the Ava covered porch / optional screened porch zone at the rear.",
  },
  {
    code: "raised_ceiling",
    label: "Great Room Raised Ceiling",
    price: "+$9,600",
    description: "Marks the optional raised ceiling callout in the great room.",
  },
  {
    code: "owners_tray_ceiling",
    label: "Owner's Tray Ceiling",
    price: "+$4,200",
    description: "Shows the owner's suite tray ceiling option from the plan.",
  },
  {
    code: "garage_extension",
    label: "2' Garage Extension",
    price: "+$6,800",
    description: "Highlights the optional garage extension at the front of the Ava plan.",
  },
  {
    code: "alternate_bedroom_layout",
    label: "Alternate Bedroom Layout",
    price: "+$12,500",
    description: "Represents the Ava alternate first-floor layout option set.",
  },
];

const optionLookup = new Map(options.map((option) => [option.code, option]));

export function InteractiveFloorplan() {
  const [selected, setSelected] = useState<OptionCode[]>(["screened_porch"]);
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

      return [...current, code];
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
            Toggle real Ava Redesign option callouts, preview the updated plan, and generate a brochure-ready summary from the same configuration state.
          </p>
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-start">
          <div>
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-sm uppercase tracking-wider text-slate-500">Ava Redesign</p>
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

              <div className="flex gap-3 overflow-x-auto pb-2 lg:block lg:space-y-3 lg:overflow-visible lg:pb-0">
                {options.map((option) => {
                  const active = isSelected(option.code);
                  return (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => toggleOption(option.code)}
                      className={`min-w-[250px] lg:min-w-0 lg:w-full text-left rounded-2xl border p-4 transition-all duration-200 ${
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
                  <h3 className="text-2xl font-bold text-white">Actual Ava PDF crop + option overlay groups</h3>
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

              <div className="rounded-2xl border border-slate-800 bg-white p-2 sm:p-6">
                <div className="mb-2 flex items-center justify-between gap-3 px-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:hidden">
                  <span>Scroll / pinch to inspect</span>
                  <span>{selectedOptions.length} overlays</span>
                </div>
                <div className="max-h-[72vh] overflow-auto rounded-xl bg-white overscroll-contain">
                  <div className="min-w-[720px] sm:min-w-0">
                    <FloorplanSvg selected={selected} />
                  </div>
                </div>
              </div>

              {selectedOptions.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedOptions.map((option) => (
                    <span key={`legend-${option.code}`} className="rounded-full border border-cyan-500/25 bg-slate-900/70 px-3 py-1 text-xs font-semibold text-slate-300">
                      Overlay: {option.label}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-5 grid sm:grid-cols-3 gap-3 text-sm">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-slate-500">Plan</p>
                  <p className="mt-1 font-bold text-white">Ava Redesign</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="text-slate-500">Base size</p>
                  <p className="mt-1 font-bold text-white">2,252 sq ft</p>
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
                      <h4 className="mt-1 text-xl font-bold text-white">Ava Redesign — Personalized Plan</h4>
                    </div>
                    <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">Print-ready concept</span>
                  </div>
                  <div className="mt-4 grid md:grid-cols-[1fr_220px] gap-4 items-start">
                    <div className="max-h-[520px] overflow-auto rounded-xl bg-white p-3">
                      <div className="min-w-[560px] md:min-w-0">
                        <FloorplanSvg selected={selected} compact />
                      </div>
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
                        Concept demo only. This version uses the real Ava PDF crop plus approved option-overlay coordinates.
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

  return (
    <svg viewBox="0 0 2290 2965" role="img" aria-label="Ava Redesign first floor interactive plan" className={"w-full " + (compact ? "h-auto" : "min-h-[620px]")}>
      <defs>
        <style>{`
          .ava-hotspot { fill: rgba(8, 145, 178, .16); stroke: #0891b2; stroke-width: 8; vector-effect: non-scaling-stroke; }
          .ava-hotspot-emerald { fill: rgba(16, 185, 129, .14); stroke: #10b981; stroke-width: 8; vector-effect: non-scaling-stroke; }
          .ava-hotspot-amber { fill: rgba(245, 158, 11, .16); stroke: #f59e0b; stroke-width: 8; vector-effect: non-scaling-stroke; }
          .ava-hotspot-purple { fill: rgba(139, 92, 246, .14); stroke: #8b5cf6; stroke-width: 8; vector-effect: non-scaling-stroke; }
          .ava-hotspot-dash { stroke-dasharray: 24 16; }
          .ava-label-bg { fill: rgba(15, 23, 42, .88); stroke: rgba(255,255,255,.75); stroke-width: 2; vector-effect: non-scaling-stroke; }
          .ava-label { fill: #fff; font-family: Inter, ui-sans-serif, system-ui, sans-serif; font-weight: 800; letter-spacing: .05em; }
          .ava-note { fill: #cffafe; font-family: Inter, ui-sans-serif, system-ui, sans-serif; font-weight: 700; }
        `}</style>
        <filter id="avaShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#020617" floodOpacity="0.22" />
        </filter>
      </defs>

      <rect x="0" y="0" width="2290" height="2965" fill="#f8fafc" />
      <image href="/prototypes/floorplans/ava-first-floor.png" x="0" y="0" width="2290" height="2965" preserveAspectRatio="xMidYMid meet" filter="url(#avaShadow)" />

      {active("screened_porch") ? (
        <g id="option-screened_porch" className="on">
          <rect x="1048" y="198" width="492" height="396" rx="10" className="ava-hotspot ava-hotspot-dash" />
          <Callout x={1294} y={164} title="SCREENED PORCH" note="Rear covered porch option" />
        </g>
      ) : null}

      {active("raised_ceiling") ? (
        <g id="option-raised_ceiling" className="on">
          <rect x="1088" y="804" width="452" height="606" rx="14" className="ava-hotspot-emerald ava-hotspot-dash" />
          <Callout x={1288} y={1500} title="RAISED CEILING" note="Great room option" />
        </g>
      ) : null}

      {active("owners_tray_ceiling") ? (
        <g id="option-owners_tray_ceiling" className="on">
          <rect x="86" y="238" width="492" height="526" rx="14" className="ava-hotspot-amber ava-hotspot-dash" />
          <Callout x={338} y={202} title="TRAY CEILING" note="Owner's suite" />
        </g>
      ) : null}

      {active("garage_extension") ? (
        <g id="option-garage_extension" className="on">
          <path d="M84 2546 H836 V2670 H84 Z" className="ava-hotspot ava-hotspot-dash" />
          <Callout x={458} y={2728} title="2' GARAGE EXT." note="Front garage extension" />
        </g>
      ) : null}

      {active("alternate_bedroom_layout") ? (
        <g id="option-alternate_bedroom_layout" className="on">
          <rect x="1546" y="188" width="590" height="1770" rx="16" className="ava-hotspot-purple ava-hotspot-dash" />
          <Callout x={1844} y={92} title="ALT. BEDROOM WING" note="Alternate first-floor layout" />
        </g>
      ) : null}

      <g id="ava-base-labels">
        <Callout x={360} y={90} title="AVA REDESIGN" note="Actual first-floor plan crop from PDF" align="left" />
      </g>
    </svg>
  );
}

function Callout({ x, y, title, note, align = "middle" }: { x: number; y: number; title: string; note: string; align?: "left" | "middle" }) {
  const width = title.length > 18 ? 360 : 300;
  const left = align === "left" ? x : x - width / 2;

  return (
    <g>
      <rect x={left} y={y - 44} width={width} height="72" rx="14" className="ava-label-bg" />
      <text x={align === "left" ? x + 18 : x} y={y - 16} textAnchor={align === "left" ? "start" : "middle"} className="ava-label" fontSize="24">{title}</text>
      <text x={align === "left" ? x + 18 : x} y={y + 12} textAnchor={align === "left" ? "start" : "middle"} className="ava-note" fontSize="18">{note}</text>
    </g>
  );
}

