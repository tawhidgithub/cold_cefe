import type { MenuCategory } from "./types";

// ⚠️ DEMO DATA. Dish names come from press coverage (reshmi, harialli, gulati
// kebabs, BBQ chicken, grilled fish, the Karbar); descriptions and ALL prices
// are placeholders. Replace with the client's real menu before launch.
export const menu: MenuCategory[] = [
  {
    id: "coals",
    label: "🔥 From the coals",
    dishes: [
      { name: "Chicken Reshmi Kebab", description: "Silky, creamy-marinated chicken, charred over open coals", price: 320, badges: ["hot", "sig"] },
      { name: "Chicken Harialli Kebab", description: "Green herb & mint marinade, smoky edges", price: 320, badges: ["hot"] },
      { name: "Gulati Kebab", description: "Melt-in-the-mouth minced kebab, gently spiced", price: 350, badges: ["hot"] },
      { name: "BBQ Chicken", description: "Quarter or half, basted and flame-grilled", price: 380, badges: ["hot", "share"] },
      { name: "Grilled Fish", description: "Spice-rubbed fillet, lemon, grilled to order", price: 420, badges: ["night"] },
      { name: "Kebab Platter", description: "Three kebabs, naan, salad & dips for two", price: 890, badges: ["share", "sig"] },
    ],
  },
  {
    id: "karbar",
    label: "🍔 Karbar",
    dishes: [
      { name: "The Karbar", description: "Charcoal reshmi kebab in a toasted bun, greens, house sauce", price: 290, badges: ["sig"] },
      { name: "Harialli Karbar", description: "Herby green kebab, mint mayo, pickled onion", price: 290, badges: ["hot"] },
      { name: "Double Karbar", description: "Two kebabs, double cheese, for the hungry", price: 420, badges: ["sig"] },
      { name: "Karbar Combo", description: "Any Karbar + fries + a cold coffee", price: 490, badges: ["share"] },
    ],
  },
  {
    id: "coffee",
    label: "☕ Coffee",
    dishes: [
      { name: "Espresso", description: "Short, strong, no nonsense", price: 150 },
      { name: "Cappuccino", description: "Espresso, steamed milk, thick foam", price: 220 },
      { name: "Café Latte", description: "Smooth and milky, hot or iced", price: 240 },
      { name: "Hazelnut Latte", description: "Our sweet-tooth favourite", price: 270, badges: ["sig"] },
      { name: "Cold Coffee", description: "Blended, creamy, made for the terrace", price: 250, badges: ["sig"] },
      { name: "Iced Americano", description: "Espresso over ice, long and clean", price: 200 },
    ],
  },
  {
    id: "sets",
    label: "🍽 Set meals",
    dishes: [
      { name: "Kebab Set", description: "Any kebab, naan or rice, salad, raita", price: 420, badges: ["share"] },
      { name: "BBQ Set", description: "Quarter BBQ chicken, naan, salad, soft drink", price: 480 },
      { name: "Grill for Four", description: "Mixed kebabs, BBQ chicken, naan basket, dips", price: 1790, badges: ["share", "night"] },
    ],
  },
];
