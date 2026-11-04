import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-cream/10 px-5 pb-10 pt-24 sm:px-8">
      <div className="mx-auto max-w-[1180px]">
        <p className="whitespace-nowrap font-display text-[clamp(4rem,17vw,15rem)] font-black uppercase leading-[0.8]">
          Coal <span className="text-ember">&amp;</span> Coffee
        </p>
        <div className="mt-12 grid gap-8 border-t border-cream/10 pt-9 text-sm text-cream/60 sm:grid-cols-3">
          <div>
            <h4 className="mb-2.5 text-[11px] uppercase tracking-[0.25em] text-cream/40">Visit</h4>
            <p>{site.address.line1}, Mohakhali<br />Dhaka, Bangladesh</p>
          </div>
          <div>
            <h4 className="mb-2.5 text-[11px] uppercase tracking-[0.25em] text-cream/40">Talk to us</h4>
            <a href={site.messenger} target="_blank" rel="noopener noreferrer" className="block hover:text-ember">Messenger</a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="block hover:text-ember">Facebook page</a>
            {site.phone && <a href={`tel:${site.phone}`} className="block hover:text-ember">{site.phone}</a>}
          </div>
          <div>
            <h4 className="mb-2.5 text-[11px] uppercase tracking-[0.25em] text-cream/40">Hours</h4>
            <p>{site.hours.short}<br />Grill every evening</p>
          </div>
        </div>
        <p className="mt-12 text-xs text-cream/35">© {new Date().getFullYear()} Coal &amp; Coffee</p>
      </div>
    </footer>
  );
}
