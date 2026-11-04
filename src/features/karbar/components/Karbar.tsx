import { Button, Eyebrow, Reveal, Section } from "@/components/ui";
import { karbarContent as c } from "../data";
import { KarbarArt } from "./KarbarArt";

export function Karbar() {
  return (
    <Section id="karbar">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <KarbarArt />
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>The signature</Eyebrow>
          <h2 className="font-display text-[clamp(2.8rem,7vw,5.2rem)] font-black uppercase leading-[0.92]">
            Meet the <span className="text-ember">Karbar.</span>
            <span className="mt-2.5 block font-hand text-[clamp(1.6rem,3vw,2.3rem)] font-semibold normal-case leading-tight text-flame">
              our burger with a kebab inside
            </span>
          </h2>

          <div className="mt-8 border-l-[3px] border-ember py-1.5 pl-5">
            <p className="font-display text-3xl font-bold">
              {c.word} <span className="ml-2 font-sans text-sm font-normal text-cream/60">{c.pronounce}</span>
            </p>
            <p className="mt-1 text-cream/60">{c.meaning}</p>
          </div>

          <ol className="mt-8 space-y-3">
            {c.points.map((p, i) => (
              <li key={p} className="flex items-center gap-3.5 text-[15px]">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ember/15 text-[13px] font-bold text-ember">
                  0{i + 1}
                </span>
                {p}
              </li>
            ))}
          </ol>

          <Button href="#menu" className="mt-9">
            Order the Karbar
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
