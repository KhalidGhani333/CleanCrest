import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const items = [
  { name: "Sarah Mitchell", city: "London", quote: "Absolutely brilliant service! My flat has never looked this clean. Will book again." },
  { name: "James Carter", city: "Manchester", quote: "Used SparkleNest for our office. Professional and thorough — the team are an absolute credit." },
  { name: "Priya Sharma", city: "Birmingham", quote: "The eco-friendly products are a bonus — safe for my kids and dog and they smell lovely!" },
  { name: "Tom Hughes", city: "Bristol", quote: "Booked end-of-tenancy clean. Got my full deposit back. 5 stars all the way." },
  { name: "Emma Clarke", city: "Leeds", quote: "They arrived on time and worked so efficiently. Highly recommend to anyone in Leeds." },
  { name: "David Osei", city: "Glasgow", quote: "Friendly staff, great results. Will be booking every month from now on." },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-primary text-balance">
            Happy Customers Say About SparkleNest
          </h2>
        </div>

        <div className="columns-1 md:columns-2 gap-6 [column-fill:_balance]">
          {items.map((t, i) => {
            const yellow = i % 3 === 1;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className={`mb-6 break-inside-avoid rounded-3xl p-7 border ${
                  yellow
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-foreground border-border"
                }`}
              >
                <div className="flex gap-0.5 text-accent-foreground mb-4">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star
                      key={k}
                      className={`w-4 h-4 ${yellow ? "fill-accent-foreground" : "fill-accent text-accent"}`}
                    />
                  ))}
                </div>
                <p className={`text-base leading-relaxed ${yellow ? "" : "text-foreground/80"}`}>
                  "{t.quote}"
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/80?u=${t.name}`}
                    alt=""
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className={`text-xs ${yellow ? "text-accent-foreground/70" : "text-muted-foreground"}`}>
                      {t.city}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
