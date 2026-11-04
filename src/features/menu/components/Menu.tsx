import { Eyebrow, Heading, Section } from "@/components/ui";
import { menu } from "../data";
import { MenuTabs } from "./MenuTabs";

export function Menu() {
  return (
    <Section id="menu" className="bg-ash">
      <Eyebrow>The menu</Eyebrow>
      <Heading hot="into the cup." className="mb-10">
        Off the coals,
      </Heading>
      <MenuTabs categories={menu} />
      <p className="mt-8 text-[13px] text-cream/45">Easy on the pocket, made for sharing. Ask about today&apos;s grill specials.</p>
    </Section>
  );
}
