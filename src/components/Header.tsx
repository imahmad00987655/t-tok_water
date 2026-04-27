import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "border-b border-border/50 bg-background/65 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-brand">
            <Droplets className="h-5 w-5 text-brand-foreground" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            {SITE.short}
            <span className="font-medium text-foreground/85"> Water</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-4 py-2 text-sm font-medium text-foreground/85 rounded-md transition-colors hover:text-foreground hover:bg-secondary data-[status=active]:text-primary data-[status=active]:bg-secondary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:scale-[1.03]"
          >
            Order Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-lg animate-fade-in">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}