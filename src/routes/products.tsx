import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PRODUCTS, WHATSAPP_URL } from "@/lib/site-data";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Gurumauli Agro Agency" },
      { name: "description", content: "Browse fertilizers, seeds, organic products and crop nutrition solutions from Gurumauli Agro Agency." },
      { property: "og:title", content: "Products — Gurumauli Agro Agency" },
      { property: "og:description", content: "Quality fertilizers, seeds and agro products for every farmer." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-secondary/60 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">Our Products</h1>
          <p className="mt-3 text-lg text-muted-foreground">आमची दर्जेदार कृषी उत्पादने</p>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Contact us for pricing and availability. We deliver trusted brands and proven solutions.</p>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-card)]">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h2 className="font-display text-xl font-bold text-foreground">{p.title}</h2>
              <div className="text-sm text-muted-foreground">{p.mr}</div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <p className="mt-3 text-xs font-medium text-primary">Contact for pricing and availability</p>
              <div className="mt-5 flex gap-2">
                <Link to="/inquiry" className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground hover:bg-primary-glow">
                  Inquire
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white" aria-label="WhatsApp">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
