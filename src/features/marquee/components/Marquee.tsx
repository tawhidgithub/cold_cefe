const words = ["Charcoal kebabs", "Fresh coffee", "The Karbar", "Rooftop terrace", "Flyover views", "BBQ nights"];

export function Marquee() {
  return (
    <div className="relative z-10 -mx-2.5 -mt-1.5 -rotate-[1.2deg] overflow-hidden bg-ember text-coal" aria-hidden>
      <div className="flex w-max animate-slide">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="whitespace-nowrap px-6 py-3.5 font-display text-[26px] font-black uppercase after:ml-11 after:content-['✦']">
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
