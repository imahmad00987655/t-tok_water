import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Droplets,
  Truck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero-water.jpg";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "T-Tok Water Filtration — Pure Water, Pure Life" },
      {
        name: "description",
        content:
          "Crystal-clear, hygienically bottled drinking water delivered to your door. Order on WhatsApp.",
      },
      { property: "og:title", content: "T-Tok Water Filtration — Pure Water, Pure Life" },
      {
        property: "og:description",
        content: "Pure filtered water delivered fast. Order today on WhatsApp.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

const TRUST = [
  { icon: Droplets, title: "100% Pure Filtered Water", desc: "Multi-stage filtration for safe, great-tasting water." },
  { icon: Truck, title: "Fast Home Delivery", desc: "Same-day and scheduled delivery across the city." },
  { icon: ShieldCheck, title: "Hygienic Bottling", desc: "Sealed at source in a sanitized facility." },
  { icon: Sparkles, title: "Affordable Pricing", desc: "Premium quality water that fits every budget." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand" />
        <div className="absolute inset-0 opacity-40">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="text-brand-foreground animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Trusted local water supplier
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Pure Water,
              <br />
              <span className="text-white/90">Pure Life.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/85 leading-relaxed">
              Clean, safe, and hygienically filtered water delivered straight to your home and
              office — fast, reliable, and refreshingly pure.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(`Hi ${SITE.short}, I'd like to place an order.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-7 py-3.5 text-base font-semibold text-white shadow-brand transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-5 w-5" />
                Order Now
              </a>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                View Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 gap-6 text-white/90">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-xs uppercase tracking-wider text-white/70">Happy Homes</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-xs uppercase tracking-wider text-white/70">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-xs uppercase tracking-wider text-white/70">Pure</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 rounded-[3rem] bg-white/5 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/5 shadow-brand backdrop-blur">
              <img
                src={heroImg}
                alt="Crystal clear water splashing into a glass"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {TRUST.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Products
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              From pocket-size to family gallons
            </h2>
            <p className="mt-4 text-muted-foreground">
              A complete range of bottled water — plus our signature Holography piece.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.slice(0, 4).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-gradient-water">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">About us</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              A trusted local name in <span className="text-gradient-brand">pure water</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {SITE.name} has been serving families and businesses with safe, clean drinking water
              for years. From multi-stage filtration to sealed bottling, every drop is handled
              with care.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Modern filtration & ozonation",
                "Quality-tested every batch",
                "Reliable scheduled delivery",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-brand">
              <img
                src={heroImg}
                alt="Pure filtered water"
                loading="lazy"
                width={800}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-border bg-card p-5 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand">
                  <ShieldCheck className="h-5 w-5 text-brand-foreground" />
                </span>
                <div>
                  <div className="text-sm font-semibold">Certified Safe</div>
                  <div className="text-xs text-muted-foreground">Lab-tested purity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand px-8 py-16 text-center shadow-brand sm:px-16">
          <div className="absolute inset-0 opacity-20">
            <img src={heroImg} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-brand-foreground sm:text-4xl lg:text-5xl">
              Stay hydrated with pure and safe water.
            </h2>
            <p className="mt-4 text-lg text-white/85">Order today via WhatsApp.</p>
            <a
              href={waLink(`Hi ${SITE.short}, I'd like to order water.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-lg transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
