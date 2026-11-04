"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Badge, MenuCategory } from "../types";

const badgeText: Record<Badge, string> = { hot: "Off the coals", sig: "Signature", share: "Great to share", night: "Evening only" };
const badgeStyle: Record<Badge, string> = {
  hot: "bg-ember/15 text-ember",
  sig: "bg-flame/15 text-flame",
  share: "bg-leaf/20 text-[#8fbf8b]",
  night: "bg-cream/10 text-cream/75",
};

const taka = (n: number) => `৳${n.toLocaleString("en-US")}`;

// Client island: only switching tabs needs JavaScript.
export function MenuTabs({ categories }: { categories: MenuCategory[] }) {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <>
      <div role="tablist" aria-label="Menu categories" className="mb-11 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            id={`tab-${c.id}`}
            aria-selected={c.id === activeId}
            aria-controls="menu-panel"
            onClick={() => setActiveId(c.id)}
            className={cn(
              "rounded-full border-[1.5px] px-5 py-2.5 text-[13px] font-bold tracking-wide transition-all",
              c.id === activeId ? "border-ember bg-ember text-coal" : "border-cream/15 text-cream/70 hover:border-ember/60 hover:text-cream",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} key={active.id} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {active.dishes.map((d, i) => (
          <article
            key={d.name}
            style={{ animationDelay: `${i * 60}ms` }}
            className="group relative animate-pop overflow-hidden rounded-[20px] border border-cream/10 bg-smoke p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember/45"
          >
            <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,106,43,0.16),transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-[26px] font-bold uppercase leading-none">{d.name}</h3>
              <span className="whitespace-nowrap font-bold text-flame">{taka(d.price)}</span>
            </div>
            <p className="mt-2.5 text-sm text-cream/60">{d.description}</p>
            {d.badges && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {d.badges.map((b) => (
                  <span key={b} className={cn("rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider", badgeStyle[b])}>
                    {badgeText[b]}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
