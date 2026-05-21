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
          .ava-mask { fill: #fff; stroke: none; }
          .ava-wall { fill: none; stroke: #111827; stroke-width: 12; stroke-linecap: square; stroke-linejoin: miter; vector-effect: non-scaling-stroke; }
          .ava-wall-thin { fill: none; stroke: #111827; stroke-width: 6; stroke-linecap: square; stroke-linejoin: miter; vector-effect: non-scaling-stroke; }
          .ava-wall-note { fill: none; stroke: #4b5563; stroke-width: 5; stroke-linecap: square; stroke-linejoin: miter; vector-effect: non-scaling-stroke; }
          .ava-plan-text { fill: #111827; font-family: Arial, Helvetica, sans-serif; font-weight: 700; letter-spacing: .03em; }
          .ava-plan-dim { fill: #374151; font-family: Arial, Helvetica, sans-serif; font-weight: 600; }
          .ava-label-bg { fill: rgba(255,255,255,.92); stroke: #111827; stroke-width: 3; vector-effect: non-scaling-stroke; }
          .ava-label { fill: #111827; font-family: Arial, Helvetica, sans-serif; font-weight: 800; letter-spacing: .04em; }
          .ava-note { fill: #374151; font-family: Arial, Helvetica, sans-serif; font-weight: 700; }
        `}</style>
        <filter id="avaShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#020617" floodOpacity="0.22" />
        </filter>
      </defs>

      <rect x="0" y="0" width="2290" height="2965" fill="#f8fafc" />
      <image href="/prototypes/floorplans/ava-first-floor.png" x="0" y="0" width="2290" height="2965" preserveAspectRatio="xMidYMid meet" filter="url(#avaShadow)" />

      {active("screened_porch") ? (
        <g id="option-screened_porch" className="on">
          <rect x="1078" y="218" width="420" height="338" className="ava-mask" />
          <path d="M1078 556 V218 H1498 V556" className="ava-wall" />
          <path d="M1122 270 H1454 M1122 335 H1454 M1122 400 H1454 M1122 465 H1454" className="ava-wall-note" opacity="0.45" />
          <text x="1288" y="372" textAnchor="middle" className="ava-plan-text" fontSize="46">SCREENED</text>
          <text x="1288" y="426" textAnchor="middle" className="ava-plan-text" fontSize="46">PORCH</text>
          <text x="1288" y="480" textAnchor="middle" className="ava-plan-dim" fontSize="34">17&apos;-0&quot; X 10&apos;-0&quot;</text>
        </g>
      ) : null}

      {active("raised_ceiling") ? (
        <g id="option-raised_ceiling" className="on">
          <rect x="1108" y="846" width="410" height="518" className="ava-mask" opacity="0.78" />
          <path d="M1138 894 H1488 V1328 H1138 Z" className="ava-wall-thin" />
          <path d="M1196 965 H1430 M1196 1257 H1430" className="ava-wall-note" />
          <text x="1313" y="1104" textAnchor="middle" className="ava-plan-text" fontSize="42">GREAT ROOM</text>
          <text x="1313" y="1154" textAnchor="middle" className="ava-plan-dim" fontSize="32">RAISED CEILING</text>
        </g>
      ) : null}

      {active("owners_tray_ceiling") ? (
        <g id="option-owners_tray_ceiling" className="on">
          <rect x="132" y="286" width="402" height="414" className="ava-mask" opacity="0.8" />
          <path d="M176 330 H490 V654 H176 Z" className="ava-wall-thin" />
          <path d="M234 392 H432 V592 H234 Z" className="ava-wall-note" />
          <text x="333" y="485" textAnchor="middle" className="ava-plan-text" fontSize="40">OWNER&apos;S</text>
          <text x="333" y="535" textAnchor="middle" className="ava-plan-text" fontSize="40">SUITE</text>
          <text x="333" y="585" textAnchor="middle" className="ava-plan-dim" fontSize="30">TRAY CEILING</text>
        </g>
      ) : null}

      {active("garage_extension") ? (
        <g id="option-garage_extension" className="on">
          <rect x="92" y="2528" width="728" height="132" className="ava-mask" />
          <path d="M92 2528 H820 V2660 H92 Z" className="ava-wall" />
          <text x="456" y="2608" textAnchor="middle" className="ava-plan-text" fontSize="38">2&apos; GARAGE EXTENSION</text>
        </g>
      ) : null}

      {active("alternate_bedroom_layout") ? (
        <g id="option_alternate_bedroom_layout" className="on">
          <rect x="1586" y="260" width="500" height="1510" className="ava-mask" opacity="0.82" />
          <path d="M1586 260 H2086 V1770 H1586 Z" className="ava-wall" />
          <path d="M1586 770 H2086 M1586 1262 H2086 M1838 260 V1770" className="ava-wall-thin" />
          <text x="1712" y="536" textAnchor="middle" className="ava-plan-text" fontSize="38">BEDROOM 2</text>
          <text x="1964" y="536" textAnchor="middle" className="ava-plan-text" fontSize="38">BATH</text>
          <text x="1712" y="1046" textAnchor="middle" className="ava-plan-text" fontSize="38">BEDROOM 3</text>
          <text x="1964" y="1510" textAnchor="middle" className="ava-plan-text" fontSize="34">ALT. LAYOUT</text>
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

