import { Button, Eyebrow, Heading, Reveal, Section } from "@/components/ui";
import { site } from "@/config/site";

const steps = ["Enter SKS Tower from the main road", "Take the lift up to Coal & Coffee", "Follow the smell of the grill to the terrace"];

export function FindUs() {
  return (
    <Section id="find">
      <Eyebrow>Find us</Eyebrow>
      <Heading hot="from the flyover.">Look up</Heading>

      <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.3fr]">
        <Reveal className="space-y-5">
          <div className="rounded-3xl border border-cream/10 bg-ash p-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/50">Address</h3>
            <p className="mt-3.5 font-display text-4xl font-black uppercase leading-[0.95]">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
            <p className="mt-2.5 text-cream/60">Look for the rooftop lights behind the glass facade, right beside the Mohakhali flyover.</p>
            <ol className="mt-4 space-y-2.5">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm text-cream/80">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember/15 text-xs font-bold text-ember">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl border border-cream/10 bg-ash p-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/50">When</h3>
            <p className="mt-3.5 font-display text-4xl font-black uppercase">{site.hours.short}</p>
            <p className="mt-2.5 text-cream/60">{site.hours.detail}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {/* Google Maps embed — dark-tinted to match the site */}
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-cream/10">
            <iframe
              title="Map showing Coal & Coffee at SKS Tower, Mohakhali"
              src="https://maps.google.com/maps?q=SKS%20Tower%2C%20Mohakhali%2C%20Dhaka&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale invert-[0.92] hue-rotate-180 contrast-[0.9]"
            />
            <Button href={site.address.mapsUrl} variant="line" className="absolute bottom-5 left-5 bg-coal/80">
              Get directions ↗
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
