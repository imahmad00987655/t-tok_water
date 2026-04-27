import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — T-Tok Water Filtration" },
      {
        name: "description",
        content:
          "Browse our complete range of bottled water — from 500 ml to 19 L gallons — and our specialty Holography product.",
      },
      { property: "og:title", content: "Products — T-Tok Water Filtration" },
      {
        property: "og:description",
        content: "Bottled water in every size, plus our specialty Holography piece.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const water = PRODUCTS.filter((p) => p.category === "water");
  const specialty = PRODUCTS.filter((p) => p.category === "specialty");

  return (
    <div>
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-water">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Range
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Pure water, <span className="text-gradient-brand">every size</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            From single-serve bottles to family gallons, every product is filtered, sealed, and
            ready to drink.
          </p>
        </div>
      </section>

      {/* Water products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Bottled Water</h2>
          <span className="text-sm text-muted-foreground">{water.length} products</span>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {water.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Specialty */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Specialty</h2>
            <p className="mt-3 text-muted-foreground">
              A premium decorative item from our brand. Note: this is a specialty product and is
              not related to our water supply.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialty.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}