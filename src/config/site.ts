// Business facts shared by every feature. Confirm the ⚠️ items with the client.
export const site = {
  name: "Coal & Coffee",
  description:
    "Rooftop grill & café at SKS Tower, Mohakhali. Charcoal kebabs, the Karbar kebab burger and fresh coffee on an open-air terrace above the flyover.",
  url: "https://coalncoffee.com", // ⚠️ placeholder domain
  facebook: "https://www.facebook.com/CoalnCoffee/",
  messenger: "https://m.me/CoalnCoffee",
  phone: undefined as string | undefined, // ⚠️ add the real number → enables Call + WhatsApp buttons
  address: {
    line1: "SKS Tower",
    line2: "Mohakhali, Dhaka",
    mapsUrl: "https://maps.google.com/?q=SKS+Tower+Mohakhali+Dhaka",
  },
  hours: {
    short: "Open daily",
    detail: "Coffee all day. The grill fires up every evening.", // ⚠️ add exact hours
  },
} as const;
