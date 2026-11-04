import { Eyebrow, Reveal, Section } from "@/components/ui";
import { story as s } from "../data";

export function Story() {
  return (
    <Section id="story">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>Our story</Eyebrow>
          <p className="font-display text-[clamp(2rem,4.2vw,3.2rem)] font-bold uppercase leading-[1.02]">
            {s.quoteStart} <span className="text-ember">{s.quoteHot}</span> {s.quoteEnd}
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-3.5">
            {s.stats.map((st) => (
              <div key={st.label} className="rounded-[18px] border border-cream/10 p-5">
                <dt className="sr-only">{st.label}</dt>
                <dd>
                  <b className="block font-display text-[46px] font-black leading-none text-flame">{st.value}</b>
                  <span className="text-[13px] text-cream/60">{st.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={120} className="space-y-5 text-[1.05rem] text-cream/60">
          {s.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
