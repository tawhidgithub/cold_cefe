"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import {
  areaOptions,
  bookingMessage,
  bookingSchema,
  guestOptions,
  timeSlots,
  todayLocal,
  type Booking,
  type BookingErrors,
} from "../schema";

const input =
  "w-full rounded-[14px] border-[1.5px] border-cream/15 bg-coal/75 px-4 py-3.5 text-cream outline-none transition placeholder:text-cream/30 [color-scheme:dark] focus:border-ember focus:ring-4 focus:ring-ember/15";
const label = "mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-cream/55";
const card = "rounded-[26px] border border-cream/10 bg-ash/85 p-6 backdrop-blur sm:p-9";

export function BookingForm({ messenger }: { messenger: string }) {
  const [errors, setErrors] = useState<BookingErrors>({});
  const [booking, setBooking] = useState<Booking | null>(null);
  const [copied, setCopied] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = bookingSchema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!result.success) {
      const next: BookingErrors = {};
      for (const issue of result.error.issues) next[issue.path[0] as keyof Booking] ??= issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setBooking(result.data);
  }

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied("✓ Copied. Paste it in Messenger.");
    } catch {
      setCopied("Select the text above and copy it.");
    }
  }

  // Step 2 — summary + hand-off to Messenger
  if (booking) {
    const msg = bookingMessage(booking);
    return (
      <div className={cn(card, "animate-pop border-ember/35")} aria-live="polite">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.32em] text-ember">Almost there</p>
        <h3 className="font-display text-[44px] font-black uppercase leading-[0.92]">
          See you soon, <span className="text-ember">{booking.name.split(" ")[0]}.</span>
        </h3>
        <dl className="my-7 grid grid-cols-2 gap-4 border-y border-cream/10 py-5">
          {(
            [
              ["Date", booking.date],
              ["Time", booking.time],
              ["Guests", booking.guests],
              ["Seating", booking.area],
            ] as const
          ).map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs text-cream/45">{k}</dt>
              <dd className="mt-1 font-display text-[22px] font-bold uppercase">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mb-3 text-sm text-cream/60">1. Copy your booking message · 2. Send it on Messenger · 3. We confirm your table.</p>
        <pre className="max-h-40 overflow-auto whitespace-pre-wrap rounded-[14px] border border-cream/10 bg-coal/80 p-4 font-sans text-[13px] text-cream/75">{msg}</pre>
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <button type="button" onClick={() => copy(msg)} className="rounded-full border-[1.5px] border-cream/30 px-6 py-3.5 text-sm font-bold hover:border-ember hover:text-ember">
            Copy message
          </button>
          <a href={messenger} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ember px-6 py-3.5 text-sm font-bold text-coal hover:bg-flame">
            Open Messenger ↗
          </a>
          <button type="button" onClick={() => setBooking(null)} className="px-2 text-sm text-cream/55 underline underline-offset-4">
            Edit
          </button>
        </div>
        <p className="mt-3 min-h-5 text-[13px] text-[#8fbf8b]">{copied}</p>
      </div>
    );
  }

  // Step 1 — the form
  return (
    <form onSubmit={onSubmit} noValidate className={card}>
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Date" error={errors.date}>
          <input type="date" name="date" min={todayLocal()} suppressHydrationWarning className={input} />
        </Field>
        <Field label="Time" error={errors.time}>
          <select name="time" defaultValue="" className={input}>
            <option value="" disabled>Select</option>
            {timeSlots.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Guests">
          <select name="guests" defaultValue="2" className={input}>
            {guestOptions.map((g) => <option key={g}>{g}</option>)}
          </select>
        </Field>
      </div>

      <fieldset className="mt-5">
        <legend className={label}>Where do you want to sit?</legend>
        <div className="grid grid-cols-2 gap-2.5">
          {areaOptions.map((a, i) => (
            <label key={a.value} className="cursor-pointer">
              <input type="radio" name="area" value={a.value} defaultChecked={i === 0} className="peer sr-only" />
              <span className="flex items-center gap-2.5 rounded-[14px] border-[1.5px] border-cream/15 px-3.5 py-3 text-sm transition peer-checked:border-ember peer-checked:bg-ember/10 peer-checked:text-flame peer-focus-visible:ring-4 peer-focus-visible:ring-ember/30">
                <span className="text-lg" aria-hidden>{a.icon}</span>
                {a.value}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input name="name" autoComplete="name" placeholder="Your name" className={input} />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input name="phone" type="tel" autoComplete="tel" placeholder="01XXX-XXXXXX" className={input} />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Occasion or note (optional)" error={errors.note}>
          <textarea name="note" rows={3} placeholder="Birthday, office team of 12, need the grill side…" className={cn(input, "resize-none")} />
        </Field>
      </div>

      <button type="submit" className="mt-7 w-full rounded-full bg-ember py-4 text-sm font-bold text-coal shadow-[0_10px_40px_-10px_rgba(255,106,43,0.7)] transition hover:bg-flame">
        Check my booking →
      </button>
    </form>
  );
}

function Field({ label: text, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className={label}>{text}</span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-xs text-[#ff8f6b]">
          {error}
        </span>
      )}
    </label>
  );
}
