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
                      <h4 className="mt-1 text-xl font-bold text-white">The Cypress Ã¢â‚¬â€ Personalized Plan</h4>
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
  const rearLabel = active("morning_room") ? "MORNING ROOM" : active("screened_porch") ? "SCREENED PORCH" : "COVERED LANAI";
  const rearDims = active("morning_room") ? "13'-8\" X 15'-0\"" : active("screened_porch") ? "13'-8\" X 12'-0\"" : "13'-8\" X 10'-0\"";

  return (
    <svg viewBox="0 0 980 690" role="img" aria-label="Interactive sample floorplan" className={"w-full " + (compact ? "h-auto" : "min-h-[420px]")}>
      <defs>
        <style>{`
          .fp-bg { fill: #ffffff; }
          .fp-fill { fill: #f4e7cf; }
          .fp-fill-light { fill: #fbf3e6; }
          .fp-line { stroke: #18385d; stroke-linecap: square; stroke-linejoin: miter; vector-effect: non-scaling-stroke; }
          .fp-wall-ext { stroke-width: 7; fill: none; }
          .fp-wall-int { stroke-width: 3.5; fill: none; }
          .fp-thin { stroke-width: 1.6; fill: none; }
          .fp-dash { stroke-dasharray: 9 7; }
          .fp-label { fill: #18385d; font-family: Inter, ui-sans-serif, system-ui, sans-serif; font-weight: 800; letter-spacing: .06em; }
          .fp-dim { fill: #315071; font-family: Inter, ui-sans-serif, system-ui, sans-serif; font-weight: 600; letter-spacing: .03em; }
          .fp-note { fill: #315071; font-family: Inter, ui-sans-serif, system-ui, sans-serif; font-weight: 700; letter-spacing: .04em; }
          .fp-option { stroke: #0e7490; fill: rgba(224, 242, 254, .45); }
        `}</style>
        <pattern id="screenHatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="9" stroke="#0e7490" strokeWidth="1.4" opacity="0.8" />
        </pattern>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L7,3 z" fill="#18385d" />
        </marker>
      </defs>

      <rect className="fp-bg" x="0" y="0" width="980" height="690" />
      <rect x="22" y="22" width="936" height="646" rx="10" fill="#fff" stroke="#d8c7ad" strokeWidth="1.5" />

      <g id="plan-title" className="fp-note" fontSize="13">
        <text x="64" y="58">THE CYPRESS - INTERACTIVE STRUCTURAL OPTIONS</text>
        <text x="64" y="78" fontSize="11">CONCEPT SALES PLAN - NOT FOR CONSTRUCTION</text>
      </g>

      <g id="rear-option-zone">
        <rect
          x="410"
          y={active("morning_room") ? 42 : 62}
          width={active("morning_room") ? 252 : 214}
          height={active("morning_room") ? 112 : 92}
          fill={active("screened_porch") ? "url(#screenHatch)" : active("morning_room") ? "#e8f5e9" : "#fff"}
          className={"fp-line " + (active("screened_porch") || active("morning_room") ? "fp-wall-ext fp-option" : "fp-thin fp-dash")}
        />
        <text x={active("morning_room") ? 536 : 517} y={active("morning_room") ? 92 : 105} textAnchor="middle" className="fp-label" fontSize="14">{rearLabel}</text>
        <text x={active("morning_room") ? 536 : 517} y={active("morning_room") ? 112 : 124} textAnchor="middle" className="fp-dim" fontSize="11">{rearDims}</text>
      </g>

      <g id="room-fills">
        <path className="fp-fill" d="M250 155 H730 V555 H165 V330 H250 Z" />
        <rect className="fp-fill-light" x="165" y="330" width="165" height="225" />
        <rect className="fp-fill-light" x="250" y="155" width="198" height="178" />
        <rect className="fp-fill-light" x="448" y="155" width="150" height="178" />
        <rect className="fp-fill-light" x="598" y="155" width="132" height="178" />
      </g>

      {active("third_car_garage") ? (
        <g id="option-third_car_garage" className="on">
          <rect x="44" y="214" width="121" height="116" fill="#e8f5e9" className="fp-line fp-wall-ext fp-option" />
          <line x1="61" y1="316" x2="148" y2="316" className="fp-line fp-thin" />
          <text x="104" y="265" textAnchor="middle" className="fp-label" fontSize="13">3RD BAY</text>
          <text x="104" y="283" textAnchor="middle" className="fp-dim" fontSize="10">11&apos;-0&quot; X 20&apos;-0&quot;</text>
        </g>
      ) : null}

      <g id="base-walls" className="fp-line">
        <path className="fp-wall-ext" d="M165 330 H250 V155 H730 V555 H165 Z" />
        <path className="fp-wall-ext" d="M44 330 H165 V555 H44 Z" />
        <path className="fp-wall-int" d="M250 330 H730" />
        <path className="fp-wall-int" d="M330 330 V555" />
        <path className="fp-wall-int" d="M448 155 V330" />
        <path className="fp-wall-int" d="M598 155 V330" />
        <path className="fp-wall-int" d="M448 250 H598" />
        <path className="fp-wall-int" d="M250 250 H448" />
        <path className="fp-wall-int" d="M500 330 V555" />
        <path className="fp-wall-int" d="M615 330 V555" />
        <path className="fp-wall-int" d="M330 440 H500" />
        <path className="fp-wall-int" d="M615 445 H730" />
        <path className="fp-wall-int" d="M165 440 H330" />
      </g>

      <g id="wall-openings" stroke="#ffffff" strokeWidth="9" strokeLinecap="square">
        <line x1="455" y1="155" x2="520" y2="155" />
        <line x1="530" y1="330" x2="590" y2="330" />
        <line x1="250" y1="360" x2="250" y2="420" />
        <line x1="330" y1="380" x2="330" y2="430" />
        <line x1="500" y1="390" x2="500" y2="438" />
        <line x1="615" y1="365" x2="615" y2="420" />
        <line x1="650" y1="555" x2="710" y2="555" />
        <line x1="92" y1="330" x2="142" y2="330" />
      </g>

      <g id="windows" className="fp-line fp-thin">
        <line x1="280" y1="155" x2="390" y2="155" strokeWidth="5" />
        <line x1="462" y1="155" x2="566" y2="155" strokeWidth="5" />
        <line x1="630" y1="155" x2="704" y2="155" strokeWidth="5" />
        <line x1="730" y1="205" x2="730" y2="285" strokeWidth="5" />
        <line x1="690" y1="555" x2="724" y2="555" strokeWidth="5" />
        <line x1="182" y1="555" x2="300" y2="555" strokeWidth="5" />
      </g>

      <g id="doors-and-swings" className="fp-line fp-thin">
        <path d="M250 420 Q205 420 205 375" />
        <line x1="250" y1="420" x2="205" y2="420" />
        <path d="M330 430 Q375 430 375 385" />
        <line x1="330" y1="430" x2="375" y2="430" />
        <path d="M500 438 Q545 438 545 393" />
        <line x1="500" y1="438" x2="545" y2="438" />
        <path d="M615 420 Q660 420 660 375" />
        <line x1="615" y1="420" x2="660" y2="420" />
        <path d="M142 330 Q142 375 97 375" />
        <line x1="142" y1="330" x2="142" y2="375" />
        <path d="M650 555 Q650 510 695 510" />
        <line x1="650" y1="555" x2="695" y2="555" />
      </g>

      <g id="fixtures" className="fp-line fp-thin">
        <rect x="462" y="174" width="118" height="30" />
        <circle cx="490" cy="189" r="9" />
        <circle cx="520" cy="189" r="9" />
        <rect x="462" y="215" width="118" height="24" />
        <line x1="480" y1="215" x2="480" y2="239" />
        <line x1="520" y1="215" x2="520" y2="239" />
        <rect x="456" y="260" width="118" height="36" />
        <text x="515" y="284" textAnchor="middle" className="fp-dim" fontSize="9">ISLAND</text>
        <rect x="358" y="458" width="58" height="46" rx="8" />
        <line x1="358" y1="481" x2="416" y2="481" />
        <circle cx="388" cy="492" r="5" />
        <rect x="420" y="458" width="50" height="28" />
        <ellipse cx="445" cy="472" rx="12" ry="7" />
        <rect x="350" y="352" width="56" height="28" />
        <ellipse cx="378" cy="366" rx="12" ry="7" />
        <rect x="410" y="350" width="48" height="48" />
        <path d="M410 350 L458 398 M458 350 L410 398" />
      </g>

      <g id="stairs" className="fp-line fp-thin">
        <rect x="180" y="350" width="52" height="78" />
        {Array.from({ length: 7 }).map((_, index) => (
          <line key={index} x1="180" x2="232" y1={360 + index * 10} y2={360 + index * 10} />
        ))}
        <line x1="206" y1="418" x2="206" y2="360" markerEnd="url(#arrow)" />
      </g>

      <g id="closets-notes" className="fp-line fp-thin">
        <rect x="263" y="260" width="84" height="58" />
        <line x1="274" y1="285" x2="336" y2="285" />
        <rect x="635" y="455" width="72" height="78" />
        <line x1="646" y1="492" x2="696" y2="492" />
        <rect x="612" y="92" width="118" height="45" className="fp-dash" />
        <text x="671" y="120" textAnchor="middle" className="fp-dim" fontSize="9">OPT. CLG. SLOPE</text>
      </g>

      {active("fireplace") ? (
        <g id="option-fireplace" className="on">
          <rect x="716" y="245" width="24" height="70" fill="#fff" className="fp-line fp-wall-int fp-option" />
          <path d="M728 300c12-18-10-24 2-40 18 15 24 34 2 50-10-4-14-9-4-10z" fill="#d97706" opacity="0.8" />
          <text x="680" y="292" textAnchor="middle" className="fp-note" fontSize="10">OPT. F/P</text>
        </g>
      ) : null}

      {active("bonus_suite") ? (
        <g id="option-bonus_suite" className="on">
          <rect x="760" y="155" width="142" height="144" fill="#faf5ff" className="fp-line fp-wall-ext fp-dash" />
          <text x="831" y="214" textAnchor="middle" className="fp-label" fontSize="13">BONUS SUITE</text>
          <text x="831" y="233" textAnchor="middle" className="fp-dim" fontSize="10">13&apos;-4&quot; X 16&apos;-0&quot;</text>
          <path d="M730 230 H760" className="fp-line fp-wall-int" />
        </g>
      ) : null}

      <g id="room-labels">
        <RoomLabel x={350} y={204} name="OWNER'S SUITE" dim={`15&apos;-0&quot; X 15&apos;-6&quot;`} />
        <RoomLabel x={523} y={206} name="KITCHEN" dim={`12&apos;-4&quot; X 14&apos;-0&quot;`} />
        <RoomLabel x={664} y={222} name="DINING" dim={`11&apos;-0&quot; X 12&apos;-6&quot;`} />
        <RoomLabel x={559} y={395} name="GREAT ROOM" dim={`18&apos;-8&quot; X 17&apos;-0&quot;`} />
        <RoomLabel x={246} y={397} name="FOYER" dim="OPEN" />
        <RoomLabel x={248} y={500} name="BEDROOM 2" dim={`11&apos;-4&quot; X 12&apos;-2&quot;`} />
        <RoomLabel x={415} y={525} name="BATH 2" dim="" />
        <RoomLabel x={672} y={502} name="BEDROOM 3" dim={`12&apos;-0&quot; X 12&apos;-8&quot;`} />
        <RoomLabel x={305} y={300} name="W.I.C." dim="" small />
        <RoomLabel x={105} y={454} name="GARAGE" dim={`20&apos;-0&quot; X 21&apos;-0&quot;`} />
      </g>

      {active("screened_porch") ? (
        <g id="a-on-screened_porch-off-morning_room" className="on">
          <text x="517" y="44" textAnchor="middle" className="fp-note" fontSize="10">SCREENED PORCH SELECTED - MORNING ROOM HIDDEN</text>
        </g>
      ) : null}
      {active("morning_room") ? (
        <g id="a-on-morning_room-off-screened_porch" className="on">
          <text x="536" y="30" textAnchor="middle" className="fp-note" fontSize="10">MORNING ROOM SELECTED - SCREENED PORCH HIDDEN</text>
        </g>
      ) : null}

      <g id="dimensions" className="fp-dim" fontSize="10">
        <line x1="250" y1="610" x2="730" y2="610" className="fp-line fp-thin" />
        <line x1="250" y1="600" x2="250" y2="620" className="fp-line fp-thin" />
        <line x1="730" y1="600" x2="730" y2="620" className="fp-line fp-thin" />
        <text x="490" y="635" textAnchor="middle">52&apos;-0&quot;</text>
        <line x1="775" y1="155" x2="775" y2="555" className="fp-line fp-thin" />
        <line x1="765" y1="155" x2="785" y2="155" className="fp-line fp-thin" />
        <line x1="765" y1="555" x2="785" y2="555" className="fp-line fp-thin" />
        <text x="807" y="360" transform="rotate(90 807 360)" textAnchor="middle">42&apos;-0&quot;</text>
      </g>

      <text x="490" y="666" textAnchor="middle" className="fp-dim" fontSize="10">
        Demo SVG: walls, labels, fixtures, and option groups are generated as layered SVG for buyer-facing configurators.
      </text>
    </svg>
  );
}

function RoomLabel({ x, y, name, dim, small = false }: { x: number; y: number; name: string; dim: string; small?: boolean }) {
  return (
    <g>
      <text x={x} y={y} textAnchor="middle" className="fp-label" fontSize={small ? 10 : 12}>{name}</text>
      {dim ? <text x={x} y={y + 17} textAnchor="middle" className="fp-dim" fontSize={small ? 8 : 10}>{dim}</text> : null}
    </g>
  );
}


