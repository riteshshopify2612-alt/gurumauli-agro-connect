import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import farmer from "@/assets/farmer.jpg";
import { Leaf, Users, ShieldCheck, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Gurumauli Agro Agency" },
      { name: "description", content: "Learn about Gurumauli Agro Agency — a trusted local agro business serving farmers with quality products and honest guidance." },
      { property: "og:title", content: "About — Gurumauli Agro Agency" },
      { property: "og:description", content: "Trusted local agro business committed to farmer success." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-secondary/60 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold md:text-5xl">About Gurumauli Agro</h1>
          <p className="mt-3 text-lg text-muted-foreground">गुरुमाऊली अ‍ॅग्रो एजन्सी विषयी</p>
        </div>
      </section>

      <section className="container mx-auto grid items-center gap-12 px-4 py-16 md:grid-cols-2">
        <img src={farmer} alt="Indian farmer" loading="lazy" className="rounded-2xl object-cover shadow-[var(--shadow-card)]" />
        <div>
          <h2 className="font-display text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 text-muted-foreground">
            At Gurumauli Agro Agency, our mission is simple — to help farmers grow better crops with quality products and honest advice. We believe that a farmer's success is our success.
          </p>
          <p className="mt-3 text-muted-foreground">
            For years, we have served the local farming community with a complete range of fertilizers, seeds, organic products and crop nutrition solutions. Every farmer who walks in is treated like family.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "Trusted Service", d: "Honest dealings and reliable supply." },
            { icon: Leaf, t: "Quality First", d: "Only branded, certified products." },
            { icon: Users, t: "Farmer Focused", d: "Personal advice for every farmer." },
            { icon: Award, t: "Years of Experience", d: "Deep knowledge of local crops." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-card p-6 text-center shadow-[var(--shadow-soft)]">
              <Icon className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-3 font-display font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="font-display text-3xl font-bold">Our Commitment to Farmers</h2>
        <p className="mt-4 text-muted-foreground">
          We don't just sell products — we walk with you through every season. From choosing the right seed to recommending the right nutrition at the right stage, our team is always available to support your farm.
        </p>
      </section>
    </SiteLayout>
  );
}
