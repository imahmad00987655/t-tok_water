import { MessageCircle, Droplets, Sparkles } from "lucide-react";
import { type Product, SITE, waLink } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  const isSpecialty = product.category === "specialty";
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-brand">
      {product.badge && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
          {product.badge}
        </span>
      )}
      <div
        className={`relative aspect-4/3 w-full overflow-hidden ${
          isSpecialty
            ? "bg-linear-to-br from-[oklch(0.92_0.06_300)] via-[oklch(0.88_0.08_250)] to-[oklch(0.85_0.1_220)]"
            : "bg-linear-to-br from-[oklch(0.97_0.02_235)] to-[oklch(0.88_0.08_240)]"
        }`}
      >
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full bg-white/70 p-2 object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
        <div className="absolute inset-0 grid place-items-center">
          {!product.image && isSpecialty ? (
            <Sparkles className="h-20 w-20 text-white/80 drop-shadow-lg" />
          ) : !product.image ? (
            <Droplets className="h-20 w-20 text-primary/70 drop-shadow-md transition-transform duration-500 group-hover:scale-110" />
          ) : null}
          {product.image ? (
            <span className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          ) : null}
          {product.badge ? (
            <span className="sr-only">{product.badge}</span>
          ) : null}
          {!product.image && !isSpecialty ? (
            <span className="sr-only">Water product</span>
          ) : null}
          {!product.image && isSpecialty ? (
            <span className="sr-only">Specialty product</span>
          ) : null}
          {!product.image ? null : (
            <span className="sr-only">{product.name}</span>
          )}
        </div>
        {product.size && (
          <span className="absolute bottom-3 right-3 rounded-md bg-background/90 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur">
            {product.size}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <a
          href={waLink(`Hi ${SITE.short}, I'd like to order: ${product.name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          <MessageCircle className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}