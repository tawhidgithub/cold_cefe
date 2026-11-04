import { Eyebrow, Heading, Reveal, Section } from "@/components/ui";
import { cn } from "@/lib/cn";
import { spaces } from "../data";

export function Spaces() {
  return (
    <Section id="spaces" className="bg-ash">
      <Eyebrow>Two ways to sit</Eyebrow>
      <Heading hot="or cosy indoors.">Open sky</Heading>

      <div className="mt-14 grid gap-5 md:grid-cols-[1.25fr_1fr]">
        {spaces.map((s, i) => (
          <Reveal key={s.key} delay={i * 120}>
            <article className="relative flex min-h-[520px] items-end overflow-hidden rounded-[26px] border border-cream/10">
              <div className={cn("absolute inset-0", s.scene)} aria-hidden />
              {s.key === "terrace" && <TerraceBulbs />}
              <div className="relative w-full bg-gradient-to-t from-coal/95 via-coal/70 to-transparent p-8">
                <span className="mb-3.5 inline-block rounded-full border border-cream/25 px-3 py-1 font-display text-sm font-bold uppercase tracking-widest">
                  {s.size}
                </span>
                <h3 className="font-display text-[46px] font-black uppercase leading-[0.9]">{s.name}</h3>
                <p className="mt-3 max-w-md text-cream/75">{s.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full bg-cream/10 px-3 py-1.5 text-xs">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function TerraceBulbs() {
  return (
    <div className="absolute inset-x-0 top-[16%]" aria-hidden>
      {[20, 34, 48, 62, 76].map((x, i) => (
        <span
          key={x}
          className="absolute h-1.5 w-1.5 animate-twinkle rounded-full bg-[#ffc878] shadow-[0_0_12px_4px_rgba(255,200,120,0.5)]"
          style={{ left: `${x}%`, top: `${[6, 2, 0, 1, 5][i]}%`, animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </div>
  );
}
