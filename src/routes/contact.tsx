import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PHONE_PRIMARY, PHONE_SECONDARY, WHATSAPP_URL } from "@/lib/site-data";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gurumauli Agro Agency" },
      { name: "description", content: "Get in touch with Gurumauli Agro Agency. Call 9637065038 or 9322056833, WhatsApp us, or visit our shop." },
      { property: "og:title", content: "Contact — Gurumauli Agro Agency" },
      { property: "og:description", content: "Call, WhatsApp or visit Gurumauli Agro Agency for all your farming needs." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-secondary/60 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-3 text-lg text-muted-foreground">आमच्याशी संपर्क साधा</p>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-12 md:grid-cols-3">
        {[
          { icon: Phone, label: "Call Primary", value: PHONE_PRIMARY, href: `tel:${PHONE_PRIMARY}` },
          { icon: Phone, label: "Call Secondary", value: PHONE_SECONDARY, href: `tel:${PHONE_SECONDARY}` },
          { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: WHATSAPP_URL },
        ].map(({ icon: Icon, label, value, href }) => (
          <a key={label} href={href} target={label === "WhatsApp" ? "_blank" : undefined} rel="noopener" className="group rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-card)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Icon className="h-7 w-7" />
            </div>
            <div className="mt-4 text-sm text-muted-foreground">{label}</div>
            <div className="font-display text-lg font-bold">{value}</div>
          </a>
        ))}
      </section>

      <section className="container mx-auto grid gap-8 px-4 pb-16 md:grid-cols-2">
        <div className="rounded-2xl bg-card p-8 shadow-[var(--shadow-soft)]">
          <h2 className="font-display text-2xl font-bold">Visit Our Shop</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-primary" /><span>Gurumauli Agro Agency,<br />Beside Local Agro Market,<br />Maharashtra, India</span></li>
            <li className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 text-primary" /><span>Mon – Sat: 8:00 AM – 8:00 PM<br />Sun: 9:00 AM – 2:00 PM</span></li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${PHONE_PRIMARY}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=Maharashtra+India&output=embed"
            className="h-full min-h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteLayout>
  );
}
