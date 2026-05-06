import { motion } from "framer-motion";
import { Home, Building2, Sparkles, AppWindow, KeyRound, Leaf } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const services = [
  { icon: Home, name: "Domestic Cleaning", desc: "Regular home cleaning tailored to your schedule and routine." },
  { icon: Building2, name: "Commercial Cleaning", desc: "Office and workspace cleaning for businesses of every size." },
  { icon: Sparkles, name: "Deep Cleaning", desc: "Thorough top-to-bottom clean for any property, inside out." },
  { icon: AppWindow, name: "Window & Door Cleaning", desc: "Crystal-clear windows and doors, inside and out." },
  { icon: KeyRound, name: "End of Tenancy Cleaning", desc: "Full clean to ensure you get your full deposit back." },
  { icon: Leaf, name: "Eco-Friendly Cleaning", desc: "100% non-toxic, child and pet-safe cleaning products." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl mb-14">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-primary text-balance">
            Spotless Spaces, Stress-Free Living
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-card rounded-3xl p-7 border border-border/60 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 before:absolute before:left-0 before:top-1/4 before:bottom-1/4 before:w-1 before:bg-accent before:rounded-full before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:origin-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{s.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
