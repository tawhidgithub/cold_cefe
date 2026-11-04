import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";
import { heroContent as c } from "../data";
import { Embers, Flyover, StringLights } from "./Scene";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[radial-gradient(ellipse_80%_45%_at_50%_105%,rgba(255,106,43,0.42),transparent_70%),radial-gradient(ellipse_40%_30%_at_85%_15%,rgba(95,138,92,0.18),transparent_70%),linear-gradient(180deg,#141210_0%,#0e0d0c_60%,#1a0f09_100%)]"
    >
      <StringLights />
      <Embers />
      <Flyover />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pb-16 pt-44 sm:px-8">
        <span className="mb-1 inline-block -rotate-3 font-hand text-[28px] text-flame">{c.kicker}</span>
        <h1 className="font-display text-[clamp(4.2rem,15vw,12.5rem)] font-black uppercase leading-[0.82]">
          Coal
          <br />
          <span className="text-ember [text-shadow:0_0_60px_rgba(255,106,43,0.55)]">&amp;</span>{" "}
          <span className="text-outline">Coffee</span>
        </h1>

        <div className="mt-9 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg text-cream/80">{c.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Button href="#book">Book a table →</Button>
            <Button href="#menu" variant="line">
              See the menu
            </Button>
          </div>
        </div>

        <ul className="mt-11 flex flex-wrap gap-2.5">
          {c.chips.map((chip) => (
            <li
              key={chip.label}
              className="inline-flex items-center gap-2 rounded-full border border-cream/10 bg-coal/55 px-4 py-2 text-[13px] text-cream/85 backdrop-blur"
            >
              <span className={cn("h-[7px] w-[7px] rounded-full", chip.live ? "animate-pulse bg-ember" : "bg-leaf")} />
              {chip.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
