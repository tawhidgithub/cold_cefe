"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { navLinks } from "../data";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid || open ? "bg-coal/85 py-3 shadow-[0_1px_0_rgba(241,230,211,0.1)] backdrop-blur-lg" : "py-5",
      )}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[26px] font-black uppercase" onClick={close}>
          <span className="h-3 w-3 animate-glow rounded-full bg-[radial-gradient(circle,var(--color-flame),var(--color-ember)_60%,#7a2208)] shadow-[0_0_18px_4px_rgba(255,106,43,0.6)]" />
          Coal <span className="text-ember">&amp;</span> Coffee
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-cream/75 transition-colors hover:text-ember">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#book" className="rounded-full bg-ember px-5 py-2.5 text-sm font-bold text-coal transition-colors hover:bg-flame">
              Book a table
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="relative h-10 w-10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("absolute left-2 h-0.5 w-6 bg-cream transition-all", open ? "top-5 rotate-45" : "top-3.5")} />
          <span className={cn("absolute left-2 top-5 h-0.5 w-4 bg-cream transition-opacity", open && "opacity-0")} />
          <span className={cn("absolute left-2 h-0.5 w-6 bg-cream transition-all", open ? "top-5 -rotate-45" : "top-[26px]")} />
        </button>
      </nav>

      <div id="mobile-nav" className={cn("grid transition-all duration-500 md:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <ul className="min-h-0 overflow-hidden px-5">
          {[...navLinks, { label: "Book a table", href: "#book" }].map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close} className="block py-2 font-display text-4xl font-black uppercase hover:text-ember">
                {l.label}
              </a>
            </li>
          ))}
          <li className="h-6" />
        </ul>
      </div>
    </header>
  );
}
