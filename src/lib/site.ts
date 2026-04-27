export const SITE = {
  name: "T-Tok Water Filtration",
  short: "T-Tok",
  tagline: "Pure Water, Pure Life",
  phone: "+92 300 1234567",
  whatsappNumber: "923001234567", // digits only for wa.me
  email: "hello@t-tok.water",
  address: "Sabzazar, Lahore, Pakistan",
};

export const waLink = (text: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export type Product = {
  slug: string;
  name: string;
  size?: string;
  description: string;
  category: "water" | "specialty";
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "half-liter",
    name: "Half Liter Pet Bottle",
    size: "500 ml",
    description: "Perfect on-the-go hydration. Lightweight, sealed, and pure.",
    category: "water",
  },
  {
    slug: "1-5-liter",
    name: "1.5 Liter Bottle",
    size: "1.5 L",
    description: "Ideal for desks, lunchboxes, and short trips.",
    category: "water",
  },
  {
    slug: "5-liter",
    name: "5 Liter Bottle",
    size: "5 L",
    description: "A reliable household choice for everyday drinking water.",
    category: "water",
  },
  {
    slug: "5-liter-cooler",
    name: "5 Liter Cooler Bottle",
    size: "5 L",
    description: "Cooler-ready bottle designed for compact dispensers.",
    category: "water",
  },
  {
    slug: "8-liter",
    name: "8 Liter Bottle",
    size: "8 L",
    description: "Family-sized bottle for kitchens and small offices.",
    category: "water",
  },
  {
    slug: "19-liter",
    name: "19 Liter Gallon",
    size: "19 L",
    description: "The classic office and home dispenser gallon.",
    category: "water",
    badge: "Best Seller",
  },
  {
    slug: "holography",
    name: "Holography Product",
    description:
      "A premium decorative holography piece — a statement of brand craftsmanship. Not a water product.",
    category: "specialty",
    badge: "Specialty",
  },
];