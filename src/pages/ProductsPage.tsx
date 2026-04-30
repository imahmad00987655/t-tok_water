import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/site";

export function ProductsPage() {
  const water = PRODUCTS.filter((p) => p.category === "water");
  const specialty = PRODUCTS.filter((p) => p.category === "specialty");

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-gradient-water">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Range</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Pure water, <span className="text-gradient-brand">every size</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Bottled Water</h2>
          <span className="text-sm text-muted-foreground">{water.length} products</span>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {water.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Specialty</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialty.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
