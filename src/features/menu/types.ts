export type Badge = "hot" | "sig" | "share" | "night";

export type Dish = {
  name: string;
  description: string;
  price: number; // BDT
  badges?: Badge[];
};

export type MenuCategory = {
  id: string;
  label: string;
  dishes: Dish[];
};
