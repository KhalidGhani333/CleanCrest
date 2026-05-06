import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import a1 from "@/assets/about-1.jpg";
import a2 from "@/assets/about-2.jpg";
import a3 from "@/assets/about-3.jpg";
import a4 from "@/assets/about-4.jpg";

export function About() {
  const [tab, setTab] = useState<"mission" | "vision">("mission");
  return (
    <section id="about" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          <img src={a1} alt="" loading="lazy" className="w-full h-56 object-cover rounded-2xl" />
          <img src={a2} alt="" loading="lazy" className="w-full h-56 object-cover rounded-2xl mt-8" />
          <img src={a3} alt="" loading="lazy" className="w-full h-56 object-cover rounded-2xl -mt-4" />
          <img src={a4} alt="" loading="lazy" className="w-full h-56 object-cover rounded-2xl mt-4" />
        </motion.div>

        <div>
          <SectionLabel>About Company</SectionLabel>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-primary text-balance">
            Making Clean, Healthy Spaces Accessible to Everyone
          </h2>

          <div className="flex gap-2 mt-7 border-b border-border">
            {(["mission", "vision"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-4 py-3 text-sm font-semibold capitalize ${
                  tab === t ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Our {t}
                {tab === t && (
                  <motion.span
                    layoutId="tab"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>

          <p className="mt-5 text-muted-foreground leading-relaxed">
            {tab === "mission"
              ? "To deliver professional, affordable and eco-conscious cleaning services that give every UK household and business the gift of time, comfort and a healthier home."
              : "To become the UK's most trusted residential and commercial cleaning brand — recognised for honest pricing, reliable people, and genuinely sustainable practice."}
          </p>

          <ul className="mt-7 space-y-3">
            {[
              "Trained & DBS-checked staff",
              "Customised cleaning plans",
              "Punctual and reliable service",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary-light transition"
          >
            About Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
