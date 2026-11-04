# Coal & Coffee — website demo

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript strict · Zod

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Structure (one feature = one folder)

```
src/
├── app/                 # layout (fonts, SEO, JSON-LD), page.tsx composes features
├── config/site.ts       # address, hours, Messenger, phone — edit once
├── components/ui/       # Button, Section/Eyebrow/Heading, Reveal
├── lib/cn.ts
└── features/
    ├── navbar/            client: scroll + mobile menu
    ├── hero/              string lights, embers, flyover (lib/scene.ts = pure generators)
    ├── marquee/
    ├── karbar/            signature-dish story + SVG illustration
    ├── menu/              data.ts + MenuTabs client island
    ├── day-cycle/         daytime → evening grill → night
    ├── spaces/            terrace vs indoor lounge
    ├── story/
    ├── booking/           Zod schema → summary → copy + open Messenger
    ├── find-us/           address, directions, dark map embed
    ├── footer/
    └── messenger-button/
```

Each feature: `components/` + `data.ts` (content) + `index.ts` (the only public export).
Features never import each other (ESLint rule). Client components: Navbar, MenuTabs, BookingForm, Reveal.

## Facts used (from public press, 2021–22 — confirm with the owners)

- Rooftop terrace (~600 sq ft) + indoor lounge (~500 sq ft) at SKS Tower, Mohakhali, beside the flyover
- Live charcoal grill on the terrace every evening; kebabs, BBQ chicken, grilled fish, coffee
- Signature "Karbar": burger with a kebab instead of a patty
- Bali-inspired terrace with lights and greenery; locally made furniture

## Before launch

- [ ] Real menu + prices (`features/menu/data.ts` is DEMO data)
- [ ] Phone number (`config/site.ts` → shows Call link), exact hours, floor number
- [ ] Real photos: terrace, grill, Karbar → replace gradient scenes / SVG
- [ ] Logo
- [ ] Domain
