// One-off: weekly blog queue top-up 2026-07-20. Safe to delete after run.
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'blog-post-queue.json');
const q = JSON.parse(fs.readFileSync(file, 'utf8'));

const newItems = [
  {
    slug: 'vendor-payment-schedules-net-terms-semi-monthly-home-builders',
    title: 'Vendor Payment Schedules for Home Builders: Net Terms to Semi-Monthly',
    metaDescription:
      'Set vendor payment schedules in Cornerstone — Net-X, weekly, bi-weekly, monthly, or semi-monthly — so every bill computes its due date and lands on payday.',
    primaryKeyword: 'vendor payment schedule construction',
    hub: '/purchasing',
    angle:
      "Feature deep-dive on AP payment terms. Cornerstone supports five schedule types per vendor: Net-X days, weekly (any weekday), bi-weekly (anchored to a chosen payday), monthly (Nth weekday including Last), and the new semi-monthly schedule with two paydays a month (e.g. the 1st and 15th), with due dates keyed off the invoice/bill date. Due dates compute automatically and carry into QuickBooks Online, so builders batch-pay every vendor on one payday instead of dribbling out checks all month. Emphasize the human pay gate: Cornerstone never auto-pays — payment always stays a manual approval in QuickBooks. Frame the end-to-end AP loop: task completes, PO auto-generates and emails the vendor, PO syncs to QBO, the linked Bill auto-creates on completion, and the builder batch-pays on payday.",
    schema: 'HowTo',
    wordCount: 1000,
    heroImage: '/blog/vendor-payment-schedules-home-builders.png',
    heroImageAlt:
      'Vendor payment schedule construction software — five AP schedule types including semi-monthly paydays in Cornerstone',
    status: 'pending',
    publishedCommit: null,
  },
  {
    slug: 'quickbooks-sync-audit-trail-construction-accounting',
    title: 'A QuickBooks Sync You Can Audit: Sync Events and Clean Transaction Memos',
    metaDescription:
      'Cornerstone logs every QuickBooks push in a Sync Events audit trail and stamps each PO, bill, and change order with community, lot, PO number, and cost code.',
    primaryKeyword: 'quickbooks sync construction accounting',
    hub: '/purchasing',
    angle:
      "Feature deep-dive on sync visibility and trust. Most accounting integrations are a black box — data goes in and bookkeepers pray. Cornerstone shows every push to QuickBooks Online in the Accounting → Sync Events log, including retries, so builders can verify exactly what synced and when. Every synced PO, Bill, and change order carries a clean transaction memo with community, lot, address, PO number, and cost code, so a bookkeeper can trace any QuickBooks transaction back to the exact home and trade without leaving QBO. Reinforce the one-way design: Cornerstone is the source of truth and QuickBooks changes never overwrite it. Mention the two-stage accrual flow (PO commitment, then a linked Bill that closes the PO — no dangling POs or duplicates) and automatic sales tax on materials with labor exempt.",
    schema: 'FAQPage',
    wordCount: 1000,
    heroImage: '/blog/quickbooks-sync-audit-trail.png',
    heroImageAlt:
      'QuickBooks sync construction accounting — Sync Events audit log and clean transaction memos in Cornerstone',
    status: 'pending',
    publishedCommit: null,
  },
  {
    slug: 'cascade-scheduling-construction-delays-home-builders',
    title: 'When One Trade Slips: Cascade Scheduling for Home Builders',
    metaDescription:
      'One late trade can wreck a home construction schedule. See how cascade scheduling auto-adjusts downstream tasks and notifies vendors so homes stay on track.',
    primaryKeyword: 'construction scheduling software for home builders',
    hub: '/construction',
    angle:
      "Pain-point post on schedule ripple effects. When framing runs three days long, every downstream trade — plumbing rough-in, electrical, insulation, drywall — is now wrong, and most builders fix it with a morning of phone calls and a stale whiteboard. Cornerstone schedules cascade: adjust the slipped task and downstream tasks move with it, with vendors notified automatically so subs always see current dates without logging into anything. Cover schedule templates applied per home, the Gantt view across communities, and webhook events for schedule changes that let builders wire their own automations. Differentiator framing: generic PM tools make you re-drag every bar by hand; production home building is repeatable, so the schedule should be too. Link to /construction as the hub and /home-builder-project-management-software.",
    schema: null,
    wordCount: 1000,
    heroImage: '/blog/cascade-scheduling-home-builders.png',
    heroImageAlt:
      'Construction scheduling software for home builders — cascade scheduling adjusts downstream trades after a delay',
    status: 'pending',
    publishedCommit: null,
  },
  {
    slug: 'jobtread-vs-cornerstone-production-home-builder',
    title: 'JobTread vs Cornerstone: Job-by-Job Estimating vs Production Building',
    metaDescription:
      'JobTread was built for job-by-job estimating. Compare it with Cornerstone, the production home builder platform with a design center, auto POs, and QBO sync.',
    primaryKeyword: 'JobTread alternative for home builders',
    hub: '/home-builder-project-management-software',
    angle:
      "Segment-mismatch competitor post, respectful in tone. JobTread is a strong product for general contractors and remodelers who estimate one custom job at a time — but production home builders repeat the same floorplans across communities, and that changes everything. Cornerstone is built around that repetition: floorplan-level scope items and takeoffs, a buyer-facing design center with spec levels and community-based upgrade pricing, community-assigned vendor awards instead of re-bidding every job, auto-generated POs when tasks complete, and one-way QuickBooks sync with per-home job costing (Community = Customer, Home = Project). Contrast automation depth: competitors say webhooks exist; Cornerstone ships 37 webhook events and a REST API where every endpoint maps to one of Foreman's 396+ skills. Honest framing: if you build one-off remodels, JobTread fits; if you build the same plans repeatedly, you need production tooling.",
    schema: 'FAQPage',
    wordCount: 1100,
    heroImage: '/blog/jobtread-vs-cornerstone.png',
    heroImageAlt:
      'JobTread alternative for home builders — JobTread vs Cornerstone production home builder software comparison',
    status: 'pending',
    publishedCommit: null,
  },
  {
    slug: 'home-builder-design-center-software-what-it-should-do',
    title: 'What Home Builder Design Center Software Should Actually Do',
    metaDescription:
      'What should home builder design center software do? Spec levels, exclusion groups, designer packages, and vendor-priced upgrades that flow straight to budgets.',
    primaryKeyword: 'home builder design center software',
    hub: '/design',
    angle:
      "Hub-cluster reinforcement for /design. A buyer-facing selections list is not a design center — lay out the bar: spec levels with granular included-vs-upgrade control down to a single option (promote any standard finish to a paid upgrade with one spec-level change), exclusion groups that make conflicting selections impossible, 64 curated designer packages across 7 categories that auto-lock coordinated options, and options linked to scope items so every selection lands in the budget automatically. The differentiator that ties it together is the hard cost rule: upgrade prices trace back to accepted vendor pricing, not estimator guesses, so the design center and the budget never disagree. Link outward to the cluster: /design as the hub, plus /purchasing (vendor pricing feeds option costs) and /foreman (AI manages options and packages by chat).",
    schema: null,
    wordCount: 1000,
    heroImage: '/blog/home-builder-design-center-software.png',
    heroImageAlt:
      'Home builder design center software — spec levels, designer packages, and vendor-priced upgrades in Cornerstone',
    status: 'pending',
    publishedCommit: null,
  },
];

const existing = new Set(q.queue.map((x) => x.slug));
let added = 0;
for (const item of newItems) {
  const len = item.metaDescription.length;
  if (len < 150 || len > 160) {
    console.error(`META LENGTH ${len} OUT OF RANGE for ${item.slug}`);
    process.exitCode = 1;
  }
  if (existing.has(item.slug)) {
    console.log(`skip duplicate: ${item.slug}`);
    continue;
  }
  q.queue.push(item);
  added++;
  console.log(`added: ${item.slug} (meta ${len})`);
}

if (process.exitCode) {
  console.error('Aborting — fix meta descriptions first. File NOT written.');
} else {
  fs.writeFileSync(file, JSON.stringify(q, null, 2) + '\n');
  console.log(`\nwrote ${file} — added ${added} items`);
  const p = q.queue.filter((x) => x.status === 'pending');
  console.log('pending now:', p.length);
}
