"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/moving-cards";

const testimonials = [
  {
    quote:
      "We were hemorrhaging $499 a month on BuilderTrend and using maybe 20% of it. Cornerstone PM™ has everything we actually need — scheduling, purchasing, and the buyer portal is something our clients love.",
    name: "Rick Harmon",
    title: "Owner, Harmon Custom Homes — 22 homes/year",
  },
  {
    quote:
      "The scheduling module alone saved us from double-booking our framing crew twice in one month. I can see every sub, every day, every lot on one screen. That's worth the price of admission.",
    name: "Denise Calloway",
    title: "Project Manager, Calloway Construction — 15 homes/year",
  },
  {
    quote:
      "I built my first spreadsheet tracking system in 2009. I've tried every app out there. Cornerstone PM™ is the first one that actually makes sense for a builder our size — not a national homebuilder.",
    name: "Mike Tran",
    title: "Founder, Tran Brothers Development — 30 homes/year",
  },
  {
    quote:
      "Our buyers used to call us twice a week asking for updates. Now they log into the portal and see exactly where their home is. It's cut our call volume in half and made us look way more professional.",
    name: "Sarah Kowalski",
    title: "Sales Director, Premier Custom Builders",
  },
  {
    quote:
      "The design center selections flow directly into purchasing. No more re-entering flooring choices three different places. That alone saved us hours every week.",
    name: "James Okafor",
    title: "Operations Manager, Okafor Quality Homes",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_50%,rgba(6,182,212,0.03),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-medium mb-4">
            BUILDER REVIEWS
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Builders who switched.
            <br />
            <span className="text-cyan-400">They&apos;re not going back.</span>
          </h2>
        </div>

        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
          pauseOnHover
        />
      </div>
    </section>
  );
}
