import { MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(`Hi ${SITE.short}, I'd like to order water.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-3 text-white shadow-brand transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--whatsapp)] opacity-30" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">Order on WhatsApp</span>
    </a>
  );
}