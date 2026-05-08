import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-display">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
