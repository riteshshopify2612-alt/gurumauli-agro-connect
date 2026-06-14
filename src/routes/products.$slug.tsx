import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PRODUCTS, whatsappOrderUrl, PHONE_PRIMARY } from "@/lib/site-data";
import { MessageCircle, Phone, ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    const title = product ? `${product.title} — Gurumauli Agro Agency` : "Product — Gurumauli Agro Agency";
    const description = product?.longDesc || product?.desc || "Quality agro product from Gurumauli Agro Agency.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(product?.image ? [
          { property: "og:image", content: product.image },
          { name: "twitter:image", content: product.image },
        ] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-primary hover:underline">Back to products</Link>
      </div>
    </SiteLayout>
  ),
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> All Products
        </Link>
      </section>
      <section className="container mx-auto grid gap-10 px-4 pb-16 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]">
          <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            {product.title}
          </h1>
          <p className="mt-1 text-lg text-muted-foreground">{product.mr}</p>
          <p className="mt-5 text-foreground/80">{product.longDesc || product.desc}</p>

          {product.benefits && product.benefits.length > 0 && (
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          <p className="mt-6 text-sm font-medium text-primary">Contact us for price and availability.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappOrderUrl(product.title)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white shadow-[var(--shadow-card)] transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" /> Order on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition hover:scale-[1.02]"
            >
              <Phone className="h-5 w-5" /> Call to Order
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
