import { Link } from "@tanstack/react-router";
import { Droplets, Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand shadow-brand">
              <Droplets className="h-5 w-5 text-brand-foreground" />
            </span>
            <span className="text-lg font-bold tracking-tight">{SITE.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Pure, hygienically bottled water delivered to your door. A trusted local supplier
            committed to safety, freshness, and reliable service.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> {SITE.phone}</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> {SITE.email}</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> {SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}