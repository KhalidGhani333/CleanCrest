import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          <div>
            <Logo light />
            <p className="mt-4 text-primary-foreground/70 text-sm">
              A Cleaner Home. A Happier Life. Trusted residential and commercial cleaning across
              the UK.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-lg">Our Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {["Domestic Cleaning", "Commercial Cleaning", "Deep Clean", "End of Tenancy", "Eco-Friendly"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-accent transition">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-lg">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-3"><Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 0800 123 4567</li>
              <li className="flex gap-3"><Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" /> hello@cleancrest.co.uk</li>
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" /> 45 Green Lane, London, SW1A 1AA</li>
              <li className="flex gap-3"><Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Mon–Sun · 8am–8pm</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-lg">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Cleaning tips and offers, straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 bg-primary-light/40 p-1.5 rounded-full"
            >
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-primary-foreground/50 outline-none"
              />
              <button className="bg-accent text-accent-foreground font-semibold px-3 py-2 rounded-full text-sm hover:scale-105 transition md:px-5 md:py-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-primary-foreground/15 text-center text-xs text-primary-foreground/60">
          Powered By <a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent underline underline-offset-4">AxisTechGroup</a>
        </div>
      </div>
    </footer>
  );
}
