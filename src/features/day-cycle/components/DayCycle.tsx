import { Eyebrow, Heading, Reveal, Section } from "@/components/ui";
import { cn } from "@/lib/cn";
import { phases } from "../data";

export function DayCycle() {
  return (
    <Section>
      <Eyebrow>A day on the roof</Eyebrow>
      <Heading hot="to last coal.">From first cup</Heading>

      <div className="mt-14 grid gap-px overflow-hidden rounded-[26px] border border-cream/10 bg-cream/10 md:grid-cols-3">
        {phases.map((p, i) => (
          <Reveal key={p.when} delay={i * 100} className="bg-coal">
            <article className="h-full p-8 transition-colors duration-500 hover:bg-ash">
              <div className={cn("mb-11 grid h-14 w-14 place-items-center rounded-2xl text-2xl", p.tint)}>{p.icon}</div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-ember">{p.when}</p>
              <h3 className="mt-2 font-display text-[34px] font-black uppercase leading-[0.95]">{p.title}</h3>
              <p className="mt-3 text-[15px] text-cream/60">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
