import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import howItWorksImg from "@/assets/how-it-works.jpg";

const headingWords = "Residential & Commercial Cleaning Tailored For You.".split(" ");

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-primary text-primary-foreground overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      {/* Animated blob */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-primary-light/40 blob pointer-events-none" />
      <div className="absolute -bottom-40 right-1/3 w-[400px] h-[400px] bg-accent/10 blob pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          >
            <Star className="w-3.5 h-3.5 fill-accent" />
            Trusted Cleaning Service Company
          </motion.span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] text-balance">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="inline-block mr-3 relative"
              >
                {word}
                {word === "Cleaning" && (
                  <svg
                    viewBox="0 0 200 14"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 w-full h-3"
                  >
                    <motion.path
                      d="M2 8 Q 25 2 50 8 T 100 8 T 150 8 T 198 8"
                      stroke="oklch(0.84 0.16 88)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                    />
                  </svg>
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 text-lg text-primary-foreground/75 max-w-xl"
          >
            Professional, eco-friendly cleaning services across the UK. Vetted staff,
            guaranteed results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform pulse-glow"
            >
              Get A Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-primary-foreground/40 px-6 py-3.5 rounded-full font-semibold hover:bg-primary-foreground/10 transition"
            >
              Book A Service <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* The rating paragraph and stars/avatars section were removed */}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <img
            src={howItWorksImg}
            alt="CleanCrest team cleaning a living room"
            width={1024}
            height={1280}
            className="w-full h-auto object-cover rounded-3xl shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-4 -left-4 lg:-left-8 bg-accent text-accent-foreground rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3"
          >
            <ShieldCheck className="w-7 h-7" />
            <div>
              <p className="text-[10px] uppercase tracking-wider opacity-70">100% Cover</p>
              <p className="font-bold text-sm">Fully Insured</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}