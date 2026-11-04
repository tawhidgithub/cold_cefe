import { z } from "zod";

export function todayLocal() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export const areaOptions = [
  { value: "Terrace", icon: "🌿" },
  { value: "Indoor lounge", icon: "🛋" },
] as const;

export const guestOptions = ["1", "2", "3", "4", "5", "6", "7–10", "11–20", "20+ (event)"];

// 30-minute slots, 11:00 AM – 11:00 PM. ⚠️ match real opening hours.
export const timeSlots = Array.from({ length: 25 }, (_, i) => {
  const minutes = 11 * 60 + i * 30;
  const h = Math.floor(minutes / 60);
  return `${h > 12 ? h - 12 : h}:${minutes % 60 ? "30" : "00"} ${h >= 12 ? "PM" : "AM"}`;
});

export const bookingSchema = z.object({
  date: z.string().min(1, "Pick a date").refine((d) => d >= todayLocal(), "Can't book in the past"),
  time: z.string().min(1, "Pick a time"),
  guests: z.string().min(1),
  area: z.enum(["Terrace", "Indoor lounge"]),
  name: z.string().trim().min(2, "Tell us your name").max(80),
  phone: z
    .string()
    .transform((v) => v.replace(/[\s-]/g, ""))
    .refine((v) => /^(\+?880|0)?1[3-9]\d{8}$/.test(v), "Enter a valid BD mobile number"),
  note: z.string().trim().max(400),
});

export type Booking = z.infer<typeof bookingSchema>;
export type BookingErrors = Partial<Record<keyof Booking, string>>;

export function bookingMessage(b: Booking) {
  return [
    "Hi Coal & Coffee! I'd like to book a table.",
    `Name: ${b.name}`,
    `Date: ${b.date}`,
    `Time: ${b.time}`,
    `Guests: ${b.guests}`,
    `Seating: ${b.area}`,
    `Phone: ${b.phone}`,
    b.note && `Note: ${b.note}`,
  ]
    .filter(Boolean)
    .join("\n");
}
