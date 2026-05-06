import product500ml from "../assets/WhatsApp Image 2026-05-04 at 7.52.09 PM.jpeg";
import product15l from "../assets/WhatsApp Image 2026-05-04 at 7.52.10 PM.jpeg";
import product5l from "../assets/WhatsApp Image 2026-05-04 at 7.52.10 PM (1).jpeg";
import product5lCooler from "../assets/WhatsApp Image 2026-05-05 at 3.32.23 PM.jpeg";
import product8l from "../assets/WhatsApp Image 2026-05-05 at 3.32.23 PM (1).jpeg";
import product19l from "../assets/WhatsApp Image 2026-05-05 at 3.32.24 PM.jpeg";
import productHolography from "../assets/WhatsApp Image 2026-05-05 at 3.32.24 PM (1).jpeg";

export const SITE = {
  name: "T-Tok Water Filtration",
  short: "T-Tok",
  tagline: "Pure Water, Pure Life",
  phone: "0326 2110909",
  phone2: "0307 3644477",
  whatsappNumber: "923262110909", // digits only for wa.me
  email: "support@t-tok.com",
  address: "41 K, Block K, Near Kashmir Bakery, Sabzazar, Lahore, Pakistan"
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
  image?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "half-liter",
    name: "Half Liter Pet Bottle",
    size: "500 ml",
    description: "Perfect on-the-go hydration. Lightweight, sealed, and pure.",
    category: "water",
    image: product500ml,
  },
  {
    slug: "1-5-liter",
    name: "1.5 Liter Bottle",
    size: "1.5 L",
    description: "Ideal for desks, lunchboxes, and short trips.",
    category: "water",
    image: product15l,
  },
  {
    slug: "5-liter",
    name: "5 Liter Bottle",
    size: "5 L",
    description: "A reliable household choice for everyday drinking water.",
    category: "water",
    image: product19l,
  },
  {
    slug: "5-liter-cooler",
    name: "5 Liter Cooler Bottle",
    size: "5 L",
    description: "Cooler-ready bottle designed for compact dispensers.",
    category: "water",
    image: product5lCooler,
  },
  {
    slug: "8-liter",
    name: "8 Liter Bottle",
    size: "8 L",
    description: "Family-sized bottle for kitchens and small offices.",
    category: "water",
    image: product8l,
  },
  {
    slug: "19-liter",
    name: "19 Liter Gallon",
    size: "19 L",
    description: "The classic office and home dispenser gallon.",
    category: "water",
    badge: "Best Seller",
    image: product5l,
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