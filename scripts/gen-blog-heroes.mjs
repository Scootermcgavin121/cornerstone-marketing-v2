// Generates polished, brand-consistent blog hero HTML files (1024x1024).
// Render each to PNG via Chrome headless (see gen-blog-heroes.ps1).
// Brand: cool light-gray bg (#F4F5F7), white card, emerald/navy/gray palette.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "hero-out");
fs.mkdirSync(outDir, { recursive: true });

const SHELL = (inner) => `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><style>
:root{
  --bg:#F4F5F7;--card:#fff;--navy:#0f172a;--slate:#475569;--muted:#94a3b8;
  --line:#e5e7eb;--emerald:#059669;--emerald-bg:#ecfdf5;--emerald-line:#a7f3d0;
  --red:#dc2626;--red-bg:#fef2f2;--red-line:#fecaca;--amber:#b45309;
}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1024px;height:1024px;font-family:-apple-system,"Segoe UI",Inter,Roboto,Helvetica,Arial,sans-serif;background:var(--bg);color:var(--navy);-webkit-font-smoothing:antialiased}
.stage{width:1024px;height:1024px;display:flex;align-items:center;justify-content:center;padding:72px}
.card{width:100%;background:var(--card);border:1px solid var(--line);border-radius:28px;
  box-shadow:0 30px 60px -20px rgba(15,23,42,.18),0 8px 20px -8px rgba(15,23,42,.10);overflow:hidden}
.head{padding:40px 48px 32px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:20px}
.head-ico{width:64px;height:64px;border-radius:16px;background:var(--emerald-bg);border:1px solid var(--emerald-line);
  display:flex;align-items:center;justify-content:center;color:var(--emerald);flex-shrink:0}
.head-ico svg{width:34px;height:34px}
.eyebrow{font-size:18px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--emerald);margin-bottom:6px}
.head h1{font-size:34px;font-weight:800;line-height:1.12}
.cols{display:grid;grid-template-columns:1fr 1fr;gap:0}
.col{padding:36px 44px}
.col.left{border-right:1px solid var(--line)}
.col h3{font-size:16px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px}
.col .brand{font-size:27px;font-weight:800;margin-bottom:22px;line-height:1.1}
.col.left h3{color:var(--muted)} .col.left .brand{color:var(--slate)}
.col.right h3{color:var(--emerald)} .col.right .brand{color:var(--navy)}
.feat{display:flex;align-items:flex-start;gap:12px;padding:11px 0;font-size:20px;line-height:1.3}
.feat .ic{width:26px;height:26px;flex-shrink:0;margin-top:1px}
.feat.no{color:var(--muted)} .feat.yes{color:var(--navy);font-weight:600}
.feat.no .ic{color:var(--red)} .feat.yes .ic{color:var(--emerald)}
.rows{padding:24px 48px 12px;display:flex;flex-direction:column}
.row{display:flex;align-items:center;justify-content:space-between;padding:22px 4px;border-bottom:1px solid var(--line)}
.row:last-child{border-bottom:none}
.row .k{font-size:21px;color:var(--slate);font-weight:600}
.row .v{font-size:23px;font-weight:800;color:var(--navy)}
.row .v.em{color:var(--emerald)}
.result{background:var(--emerald-bg);border-top:1px solid var(--emerald-line);padding:34px 48px;display:flex;align-items:center;justify-content:space-between}
.result .left{display:flex;align-items:center;gap:18px}
.check{width:52px;height:52px;border-radius:14px;background:var(--emerald);display:flex;align-items:center;justify-content:center}
.check svg{width:30px;height:30px;color:#fff}
.result .lbl-k{font-size:17px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--emerald)}
.result .lbl-v{font-size:26px;font-weight:800;color:var(--navy);margin-top:2px}
.bigstat{padding:52px 48px;display:flex;align-items:center;gap:40px}
.bigstat .num{font-size:140px;font-weight:900;color:var(--emerald);line-height:.9;letter-spacing:-.03em}
.bigstat .meta .t{font-size:30px;font-weight:800;margin-bottom:8px}
.bigstat .meta .d{font-size:21px;color:var(--slate);line-height:1.4}
.chips{padding:0 48px 44px;display:flex;flex-wrap:wrap;gap:14px}
.chip{background:var(--emerald-bg);border:1px solid var(--emerald-line);color:var(--emerald);
  font-size:19px;font-weight:700;padding:12px 20px;border-radius:999px}
.flowrow{display:grid;grid-template-columns:1fr auto 1fr;align-items:stretch;padding:40px 48px 8px}
.pill{border-radius:18px;padding:26px;display:flex;flex-direction:column;gap:12px;min-height:178px;justify-content:flex-start}
.pill.before{background:#f8fafc;border:1px solid var(--line)}
.pill.after{background:var(--emerald-bg);border:1px solid var(--emerald-line)}
.pill .tag{font-size:15px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.pill.after .tag{color:var(--emerald)}
.pill .name{font-size:26px;font-weight:800;line-height:1.15}
.pill .sub{font-size:19px;color:var(--slate)}
.arrow{display:flex;align-items:center;justify-content:center;padding:0 22px;color:var(--emerald)}
.arrow svg{width:50px;height:50px}
.divider-tabs{display:flex;gap:10px;padding:28px 48px 6px}
.tab{flex:1;border-radius:14px;padding:18px 16px;text-align:center;font-size:19px;font-weight:700;border:1px solid var(--line);color:var(--slate);background:#f8fafc}
.tab.active{background:var(--emerald);color:#fff;border-color:var(--emerald)}
</style></head><body><div class="stage"><div class="card">${inner}</div></div></body></html>`;

const CHECK = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
const X = `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
const CHECKBADGE = `<div class="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>`;
const ARROW = `<div class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>`;
const ico = (paths) => `<div class="head-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg></div>`;

const ICONS = {
  layers: `<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`,
  grid: `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>`,
  building: `<rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="15" y2="14"/>`,
  dollar: `<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`,
  api: `<circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><line x1="9.5" y1="10.5" x2="5.5" y2="7"/><line x1="14.5" y1="10.5" x2="18.5" y2="7"/><line x1="9.5" y1="13.5" x2="5.5" y2="17"/><line x1="14.5" y1="13.5" x2="18.5" y2="17"/>`,
  palette: `<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>`,
};

const card = ({ ico: icoPaths, eyebrow, h1, body, footer }) => SHELL(
  `<div class="head">${ico(icoPaths)}<div><div class="eyebrow">${eyebrow}</div><h1>${h1}</h1></div></div>${body}${footer || ""}`
);

const compareBody = (leftTitle, leftBrand, leftFeats, rightTitle, rightBrand, rightFeats) => `
<div class="cols">
  <div class="col left"><h3>${leftTitle}</h3><div class="brand">${leftBrand}</div>
    ${leftFeats.map(f => `<div class="feat no">${X}<span>${f}</span></div>`).join("")}
  </div>
  <div class="col right"><h3>${rightTitle}</h3><div class="brand">${rightBrand}</div>
    ${rightFeats.map(f => `<div class="feat yes">${CHECK}<span>${f}</span></div>`).join("")}
  </div>
</div>`;

const resultStrip = (k, v) => `<div class="result"><div class="left">${CHECKBADGE}<div><div class="lbl-k">${k}</div><div class="lbl-v">${v}</div></div></div></div>`;

// ---- The 6 heroes ----
const heroes = {

"production-builder-software": card({
  ico: ICONS.building, eyebrow: "Production Home Builder",
  h1: "Options Pricing Engine",
  body: compareBody(
    "Generic / Custom Tools", "Manual Spreadsheets",
    ["Re-price every option by hand", "No standard option library", "Margins drift per job"],
    "Cornerstone PM", "Built for Production",
    ["Reusable option catalog", "Auto-priced from scope items", "Consistent margin every home"]
  ),
  footer: resultStrip("Production Workflow", "Price a full home in minutes, not days"),
}),

"vs-generic-pm": card({
  ico: ICONS.grid, eyebrow: "ClickUp & monday.com vs Cornerstone",
  h1: "Generic PM vs Home Builder Software",
  body: compareBody(
    "Generic PM Tools", "ClickUp / monday.com",
    ["Empty task lists you must build", "No selections or design center", "No scope-based budgets"],
    "Purpose-Built", "Cornerstone PM",
    ["Construction workflows preloaded", "Design Center + selections", "Scope-linked Master Cost Budget"]
  ),
  footer: resultStrip("Out of the Box", "Built for builders, not blank boards"),
}),

"enterprise-multi-division": card({
  ico: ICONS.building, eyebrow: "Enterprise · Multi-Division",
  h1: "One Platform, Every Division",
  body: `
  <div class="divider-tabs">
    <div class="tab">Coastal Homes</div>
    <div class="tab active">Metro Division ▾</div>
    <div class="tab">Mountain Builds</div>
  </div>
  <div class="rows">
    <div class="row"><span class="k">Division Switcher</span><span class="v em">Instant</span></div>
    <div class="row"><span class="k">Corporate Admin & Roles</span><span class="v">Centralized</span></div>
    <div class="row"><span class="k">Cross-Division Analytics</span><span class="v">Rolled Up</span></div>
    <div class="row"><span class="k">Full Pro+ Per Division</span><span class="v em">Included</span></div>
  </div>`,
  footer: resultStrip("Enterprise Pricing", "$500 / division / mo · volume break after 5"),
}),

"job-cost-tracking": card({
  ico: ICONS.dollar, eyebrow: "Job Cost Tracking",
  h1: "Where Your Margin Goes",
  body: `
  <div class="rows">
    <div class="row"><span class="k">Untracked change orders</span><span class="v" style="color:var(--red)">- $4,200</span></div>
    <div class="row"><span class="k">Allowance overages</span><span class="v" style="color:var(--red)">- $3,150</span></div>
    <div class="row"><span class="k">Vendor price creep</span><span class="v" style="color:var(--red)">- $2,800</span></div>
    <div class="row"><span class="k">Caught by area-cost tracking</span><span class="v em">+ $10,150</span></div>
  </div>`,
  footer: resultStrip("Real-Time Area Costs", "See margin leaks before they close the job"),
}),

"api-operations-238": card({
  ico: ICONS.api, eyebrow: "API Operations · BYOA",
  h1: "The Most Agent-Ready Platform",
  body: `
  <div class="bigstat">
    <div class="num">238</div>
    <div class="meta"><div class="t">API operations, live</div>
      <div class="d">Every Foreman skill exposed as an endpoint — ship a skill, your agent gets it automatically.</div></div>
  </div>
  <div class="chips">
    <div class="chip">REST API</div><div class="chip">BYOA</div><div class="chip">MCP Server</div>
    <div class="chip">Webhook Catalog</div><div class="chip">Anthropic · OpenAI · OpenAPI</div>
  </div>`,
}),

"vs-buildxact": card({
  ico: ICONS.palette, eyebrow: "Buildxact vs Cornerstone",
  h1: "Selections Software vs Design Center",
  body: compareBody(
    "Estimating-First", "Buildxact",
    ["Selections bolted onto estimating", "No structured option tiers", "Manual budget reconciliation"],
    "Design-First", "Cornerstone PM",
    ["Design Center + Option Classes", "Standard / Upgrade tiers built in", "Selections flow to the budget"]
  ),
  footer: resultStrip("Designer Packages", "Curated selections buyers actually finish"),
}),

};

for (const [slug, html] of Object.entries(heroes)) {
  fs.writeFileSync(path.join(outDir, `${slug}.html`), html);
  console.log(`wrote ${slug}.html`);
}
console.log(`\n${Object.keys(heroes).length} hero HTML files in ${outDir}`);
