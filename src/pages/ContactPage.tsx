import { useState } from "react";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi ${SITE.short}!\n\nName: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-gradient-water">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Get in touch</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Let's talk <span className="text-gradient-brand">water.</span></h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/[^+\d]/g, "")}` },
            { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
            { icon: MapPin, label: "Address", value: SITE.address, href: "#" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand"><Icon className="h-5 w-5" /></span>
              <div><div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div><div className="mt-1 font-semibold">{value}</div></div>
            </a>
          ))}
          <a href={waLink(`Hi ${SITE.short}, I have a question.`)} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-base font-semibold text-white shadow-brand">
            <MessageCircle className="h-5 w-5" />Chat on WhatsApp
          </a>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight">Send a message</h2>
          <div className="mt-6 grid gap-5">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm" placeholder="Your full name" />
            <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm" placeholder="+92 300 0000000" />
            <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm" placeholder="How can we help?" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-brand">
              <Send className="h-4 w-4" />Send via WhatsApp
            </button>
            {sent && <p className="flex items-center gap-2 text-sm text-whatsapp"><CheckCircle2 className="h-4 w-4" />Opening WhatsApp with your message…</p>}
          </div>
        </form>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Find us</h2>
          <p className="mt-2 text-muted-foreground">{SITE.address}</p>
          <div className="mt-6 aspect-16/7 w-full overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe title="Map" src="https://www.google.com/maps?q=Sabzazar%2C%20Lahore%2C%20Pakistan&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
