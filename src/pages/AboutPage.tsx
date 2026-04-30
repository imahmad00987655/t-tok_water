import { Link } from "react-router-dom";
import { ArrowRight, Eye, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import heroImg from "@/assets/hero-water.jpg";
import { SITE } from "@/lib/site";

export function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-gradient-water">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">About us</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building trust, <span className="text-gradient-brand">one drop at a time.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{SITE.name} is your trusted local supplier of clean, safe drinking water.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="aspect-4/5 overflow-hidden rounded-3xl shadow-brand"><img src={heroImg} alt="Water purity" className="h-full w-full object-cover" /></div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our story</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We started {SITE.name} with a simple goal: make pure, safe drinking water effortlessly available.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
          {[
            { icon: Target, title: "Mission", text: "Provide safe and clean drinking water to every home and business we serve." },
            { icon: Eye, title: "Vision", text: "To become the most trusted local water supply brand — known for purity and reliability." },
            { icon: ShieldCheck, title: "Hygiene first", text: "Sanitized facility, sealed bottles, and lab-tested batches every day." },
            { icon: HeartHandshake, title: "Customer trust", text: "We treat every delivery as a promise — kept on time." },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-brand p-10 text-center shadow-brand sm:p-16">
          <h2 className="text-3xl font-bold text-brand-foreground sm:text-4xl">Ready for cleaner water?</h2>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-transform hover:scale-[1.03]">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
