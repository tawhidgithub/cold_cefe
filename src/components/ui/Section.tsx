import { cn } from "@/lib/cn";

export function Section({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("relative scroll-mt-20 px-5 py-24 sm:px-8 md:py-32", className)}>
      <div className="mx-auto max-w-[1180px]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-ember">
      <span className="h-0.5 w-7 bg-ember" />
      {children}
    </p>
  );
}

// Big condensed heading: pass the orange part as `hot`.
export function Heading({ children, hot, className }: { children: React.ReactNode; hot?: string; className?: string }) {
  return (
    <h2 className={cn("font-display text-[clamp(2.8rem,7vw,5.2rem)] font-black uppercase leading-[0.92]", className)}>
      {children} {hot && <span className="text-ember">{hot}</span>}
    </h2>
  );
}
