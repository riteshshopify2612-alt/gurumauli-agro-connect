import { Link } from "@tanstack/react-router";
import { Sprout, Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Sprout className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-bold text-primary">Gurumauli Agro</div>
              <div className="text-xs text-muted-foreground">गुरुमाऊली अ‍ॅग्रो एजन्सी</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            शेतकऱ्यांसाठी विश्वसनीय कृषी उत्पादने आणि उत्तम सेवा.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/inquiry" className="hover:text-primary">Inquiry</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="tel:9637065038">9637065038</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="tel:9322056833">9322056833</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> <a href="https://wa.me/919637065038">WhatsApp</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Local Agro Market Area</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Hours</h4>
          <p className="mt-3 text-sm text-muted-foreground">Mon – Sat: 8:00 AM – 8:00 PM<br />Sun: 9:00 AM – 2:00 PM</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gurumauli Agro Agency. All rights reserved.
      </div>
    </footer>
  );
}
