// Replace `scene` gradients with real photos (next/image) when available.
export const spaces = [
  {
    key: "terrace",
    size: "≈ 600 sq ft · open-air",
    name: "The Terrace",
    body: "Our original corner: a Bali-inspired outdoor café with whimsical lights, lush greenery and a front-row view of the Mohakhali flyover. The grill station lives here.",
    tags: ["Live grill", "Flyover view", "Group seating", "Quiet nook for one"],
    scene:
      "bg-[radial-gradient(ellipse_30%_22%_at_50%_18%,rgba(255,170,90,0.22),transparent_70%),radial-gradient(ellipse_40%_50%_at_8%_70%,rgba(95,138,92,0.55),transparent_70%),radial-gradient(ellipse_30%_45%_at_96%_60%,rgba(95,138,92,0.45),transparent_70%),radial-gradient(ellipse_60%_30%_at_50%_100%,rgba(255,106,43,0.35),transparent_70%),linear-gradient(180deg,#161a1a,#121010_55%,#1b120c)]",
  },
  {
    key: "lounge",
    size: "≈ 500 sq ft · indoor",
    name: "The Lounge",
    body: "Part pub, part coffee shop. Well-cushioned chairs, padded stools and a calmer room for families.",
    tags: ["Family friendly", "Cushioned seating", "Cool & comfy"],
    scene:
      "bg-[radial-gradient(ellipse_22%_28%_at_30%_20%,rgba(255,190,110,0.4),transparent_70%),radial-gradient(ellipse_22%_28%_at_72%_22%,rgba(255,190,110,0.32),transparent_70%),repeating-linear-gradient(90deg,rgba(0,0,0,0.22)_0_2px,transparent_2px_38px),linear-gradient(170deg,#4a3123,#2c1d14_55%,#140d09)]",
  },
] as const;
