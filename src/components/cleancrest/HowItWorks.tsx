import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import img from "@/assets/how-it-works-new.jpg";

const steps = [
  { n: "01", title: "Fill Up the Appointment Form", desc: "Choose your service, date, and location online in minutes." },
  { n: "02", title: "Get a Confirmation Call", desc: "Our team will call to confirm details and answer any questions." },
  { n: "03", title: "Sit Back & Enjoy the Results", desc: "Our vetted cleaners arrive on time and leave your space spotless." },
];

const tickerItems = [
  "Domestic Cleaning",
  "Commercial Cleaning",
  "Deep Cleaning",
  "End of Tenancy",
  "Eco-Friendly",
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-primary text-primary-foreground pt-24 pb-0 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center pb-20">
        <motion.img
          src={img}
          alt="Modern clean bathroom showing professional results"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full h-[460px] object-cover rounded-3xl shadow-2xl"
        />

        <div>
          <SectionLabel light>How It Works</SectionLabel>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-balance">
            Step-by-step care process made simple for you
          </h2>

          <div className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-primary-light/40 backdrop-blur rounded-2xl p-5 flex gap-5 items-start border border-primary-foreground/10"
              >
                <span className="shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-bold text-lg">{s.title}</h3>
                  <p className="text-primary-foreground/70 text-sm mt-1">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Book Your Slot <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="bg-accent text-accent-foreground py-5 overflow-hidden">
        <div className="marquee gap-12">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i} className="font-display text-2xl font-bold whitespace-nowrap flex items-center gap-12 shrink-0">
              {t} <span className="text-accent-foreground/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
