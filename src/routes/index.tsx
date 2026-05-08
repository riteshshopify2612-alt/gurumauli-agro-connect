import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PRODUCTS, WHATSAPP_URL, PHONE_PRIMARY } from "@/lib/site-data";
import { Phone, MessageCircle, ShieldCheck, Leaf, HandCoins, HeadphonesIcon, Star, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-farm.jpg";
import farmer from "@/assets/farmer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gurumauli Agro Agency — Trusted Fertilizers, Seeds & Agro Products" },
      { name: "description", content: "Quality fertilizers, seeds and agro products for farmers. Trusted local agro agency offering expert guidance and reliable service." },
      { property: "og:title", content: "Gurumauli Agro Agency" },
      { property: "og:description", content: "Trusted Agro Products for Better Farming." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="Lush green farmland" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container relative mx-auto flex min-h-[88vh] flex-col items-start justify-center px-4 py-20 text-white">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold backdrop-blur">
            <Leaf className="h-3.5 w-3.5" /> गुरुमाऊली अ‍ॅग्रो एजन्सी
          </span>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
            Trusted Agro Products for Better Farming
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
            उत्तम पीक आणि भरघोस उत्पादनासाठी दर्जेदार कृषी उत्पादने. Quality agricultural solutions for healthy crops and better yield.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE_PRIMARY}`} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-[var(--shadow-card)] transition hover:scale-[1.02]">
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white shadow-[var(--shadow-card)] transition hover:scale-[1.02]">
              <MessageCircle className="h-5 w-5" /> WhatsApp Inquiry
            </a>
            <Link to="/inquiry" className="inline-flex items-center gap-2 rounded-full bg-white/95 px-6 py-3 font-semibold text-primary transition hover:bg-white">
              Enquire Today <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 text-sm md:gap-8">
            {[["10+", "Years Trust"], ["1000+", "Happy Farmers"], ["50+", "Quality Products"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-bold md:text-3xl">{n}</div>
                <div className="text-white/80">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="container mx-auto grid items-center gap-10 px-4 py-20 md:grid-cols-2">
        <img src={farmer} alt="Farmer in field" loading="lazy" width={1200} height={800} className="rounded-2xl object-cover shadow-[var(--shadow-card)]" />
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">About Us</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">शेतकऱ्यांचा विश्वासू भागीदार</h2>
          <p className="mt-4 text-muted-foreground">
            Gurumauli Agro Agency is a trusted local agro business serving farmers with quality fertilizers, seeds and crop nutrition products. We focus on farmer success through reliable products and honest guidance.
          </p>
          <ul className="mt-6 grid gap-3 text-sm">
            {[
              "Trusted local agro business",
              "Quality, certified products",
              "Farmer-focused expert guidance",
              "Reliable service & fair pricing",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Products */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">Our Products</span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">आमची उत्पादने</h2>
            <p className="mt-3 text-muted-foreground">Complete range of agriculture solutions for every crop and every season.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-card)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground">{p.title} <span className="text-sm font-medium text-muted-foreground">/ {p.mr}</span></h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <Link to="/inquiry" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                    Inquire <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">Why Choose Us</span>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">आम्हालाच का निवडावे?</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "Trusted Agency", d: "Years of trusted service in the local farming community." },
            { icon: Leaf, t: "Quality Products", d: "Certified, branded fertilizers and seeds only." },
            { icon: HandCoins, t: "Affordable Pricing", d: "Best market rates with farmer-friendly offers." },
            { icon: HeadphonesIcon, t: "Expert Support", d: "Personal guidance from crop selection to harvest." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">Testimonials</span>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">शेतकऱ्यांचे अनुभव</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "Suresh Patil", v: "Akole", q: "Very helpful guidance and quality products. My yield has improved a lot." },
              { n: "Ramesh Kale", v: "Sangamner", q: "Good service and trusted agro shop. Always honest pricing." },
              { n: "Vijay Shinde", v: "Kopargaon", q: "Best fertilizers in the area. Owner gives proper advice for every crop." },
            ].map((t) => (
              <figure key={t.n} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-3 text-foreground">"{t.q}"</blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">— {t.n}, {t.v}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="overflow-hidden rounded-3xl p-10 text-center text-white md:p-16" style={{ background: "var(--gradient-primary)" }}>
          <h2 className="font-display text-3xl font-bold md:text-5xl">Need Better Farming Results?</h2>
          <p className="mt-3 text-white/90">उत्तम उत्पादनासाठी आजच आमच्याशी संपर्क साधा.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE_PRIMARY}`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary shadow hover:bg-white/90">
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <Link to="/inquiry" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground shadow hover:scale-[1.02] transition">
              Send Inquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
