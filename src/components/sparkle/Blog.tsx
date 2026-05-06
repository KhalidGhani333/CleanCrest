import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { img: b1, title: "How to Keep Your Home Clean Between Professional Visits", date: "Apr 22, 2026" },
  { img: b2, title: "Why Eco-Friendly Cleaning Products Are Better for Your Family", date: "Apr 15, 2026" },
  { img: b3, title: "End of Tenancy Cleaning Checklist for UK Renters", date: "Apr 02, 2026" },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <SectionLabel>Blog & Insights</SectionLabel>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-primary text-balance max-w-xl">
              Get Weekly Cleaning Tips & Updates
            </h2>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition"
          >
            More Articles <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-background border border-border hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={p.img}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full">
                  CLEANING
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground mb-2">{p.date}</p>
                <h3 className="font-bold text-lg text-primary leading-snug mb-4">{p.title}</h3>
                <a href="#blog" className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
