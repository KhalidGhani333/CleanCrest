import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const plans = [
  {
    name: "Basic",
    price: 15,
    popular: false,
    features: ["Regular domestic cleaning", "1 cleaner", "Weekly or fortnightly", "Eco products available", "No hidden fees"],
  },
  {
    name: "Standard",
    price: 22,
    popular: true,
    features: ["Deep clean option", "2 cleaners", "Flexible scheduling", "Priority booking", "Quality guarantee"],
  },
  {
    name: "Premium",
    price: 35,
    popular: false,
    features: ["Full property clean", "Dedicated team", "Same-day available", "Commercial included", "Dedicated account manager"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Pricing Plans</SectionLabel>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-primary">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            All prices in GBP. No surprise charges, just honest hourly rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {plans.map((p, i) => {
            const isPop = p.popular;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative rounded-3xl p-8 border ${
                  isPop
                    ? "bg-primary text-primary-foreground border-primary scale-100 md:scale-105 shadow-2xl"
                    : "bg-card text-foreground border-border"
                }`}
              >
                {isPop && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={`font-bold text-xl ${isPop ? "" : "text-primary"}`}>{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold font-display">£{p.price}</span>
                  <span className={isPop ? "text-primary-foreground/70" : "text-muted-foreground"}>/hr</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          isPop ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 block text-center px-6 py-3 rounded-full font-semibold transition ${
                    isPop
                      ? "bg-accent text-accent-foreground hover:scale-105"
                      : "bg-primary text-primary-foreground hover:bg-primary-light"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
