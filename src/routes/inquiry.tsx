import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";
import { z } from "zod";
import { WHATSAPP_URL, PHONE_PRIMARY } from "@/lib/site-data";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Inquiry — Gurumauli Agro Agency" },
      { name: "description", content: "Send your inquiry to Gurumauli Agro Agency. Tell us your crop and product needs and our team will contact you shortly." },
      { property: "og:title", content: "Inquiry — Gurumauli Agro Agency" },
      { property: "og:description", content: "Submit your farming inquiry and get expert guidance." },
    ],
  }),
  component: InquiryPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  village: z.string().trim().min(2, "Please enter village/city").max(100),
  phone: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone number"),
  crop: z.string().trim().max(100).optional().or(z.literal("")),
  requirement: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function InquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    // Forward to WhatsApp as a lightweight lead delivery
    const text = `New Inquiry%0AName: ${encodeURIComponent(result.data.name)}%0AVillage/City: ${encodeURIComponent(result.data.village)}%0APhone: ${encodeURIComponent(result.data.phone)}%0ACrop: ${encodeURIComponent(result.data.crop || "-")}%0ARequirement: ${encodeURIComponent(result.data.requirement || "-")}%0AMessage: ${encodeURIComponent(result.data.message || "-")}`;
    window.open(`https://wa.me/91${PHONE_PRIMARY}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-secondary/60 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Send Inquiry</h1>
          <p className="mt-3 text-lg text-muted-foreground">चौकशी फॉर्म</p>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
        <div className="md:col-span-2">
          {submitted ? (
            <div className="rounded-2xl bg-card p-10 text-center shadow-[var(--shadow-soft)]">
              <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
              <h2 className="mt-4 font-display text-2xl font-bold">Thank you!</h2>
              <p className="mt-2 text-muted-foreground">Our team will contact you shortly.<br />आमची टीम लवकरच आपल्याशी संपर्क साधेल.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5 rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
              {[
                { name: "name", label: "Full Name / पूर्ण नाव", type: "text", required: true },
                { name: "village", label: "Village / City / गाव / शहर", type: "text", required: true },
                { name: "phone", label: "Phone Number / फोन नंबर", type: "tel", required: true },
                { name: "crop", label: "Crop Type / पीक प्रकार", type: "text" },
                { name: "requirement", label: "Product Requirement / उत्पादन गरज", type: "text" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="text-sm font-semibold text-foreground">{f.label}{f.required && <span className="text-destructive"> *</span>}</label>
                  <input
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    maxLength={f.name === "phone" ? 15 : 100}
                    className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {errors[f.name] && <p className="mt-1 text-xs text-destructive">{errors[f.name]}</p>}
                </div>
              ))}
              <div>
                <label className="text-sm font-semibold text-foreground">Message / संदेश</label>
                <textarea name="message" rows={4} maxLength={1000} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary-glow transition">
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
        <aside className="space-y-4">
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-card)]">
            <h3 className="font-display text-xl font-bold">Need quick help?</h3>
            <p className="mt-2 text-sm text-primary-foreground/90">Talk to us directly — we're here to help.</p>
            <a href={`tel:${PHONE_PRIMARY}`} className="mt-4 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 font-semibold text-primary">
              <Phone className="h-4 w-4" /> Call {PHONE_PRIMARY}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="mt-2 flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground shadow-[var(--shadow-soft)]">
            <strong className="text-foreground">Why inquire?</strong>
            <ul className="mt-2 space-y-1">
              <li>✓ Honest pricing</li>
              <li>✓ Crop-specific advice</li>
              <li>✓ Trusted local service</li>
            </ul>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}
