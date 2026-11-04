import { Eyebrow, Heading, Reveal, Section } from "@/components/ui";
import { site } from "@/config/site";
import { BookingForm } from "./BookingForm";

const occasions = ["🎂 Birthdays", "💼 Office hangouts", "🍢 BBQ nights", "🎓 Farewells", "☕ Meetings"];

export function Booking() {
  return (
    <Section id="book" className="overflow-hidden bg-ash">
      <div className="pointer-events-none absolute -bottom-72 left-1/2 h-[600px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(255,106,43,0.22),transparent_65%)]" />
      <div className="relative grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Book &amp; events</Eyebrow>
          <Heading hot="by the grill.">Save a spot</Heading>
          <p className="mt-5 max-w-md text-lg text-cream/60">
            Table for two or the whole office? Send us the details and we&apos;ll confirm on Messenger.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {occasions.map((o) => (
              <li key={o} className="rounded-full border border-dashed border-cream/25 px-3.5 py-2 text-[13px] text-cream/80">
                {o}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <BookingForm messenger={site.messenger} />
        </Reveal>
      </div>
    </Section>
  );
}
