import { Phone, MessageCircle } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919637065038?text=Hello%20Gurumauli%20Agro%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[var(--shadow-card)] transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:9637065038"
        aria-label="Call now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-card)] transition hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
