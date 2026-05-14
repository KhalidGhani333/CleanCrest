import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-primary flex items-center justify-center"
        >
          <div className="relative">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: Math.cos((i / 8) * Math.PI * 2) * 80,
                  y: Math.sin((i / 8) * Math.PI * 2) * 80,
                  scale: [0, 1.2, 0],
                }}
                transition={{ duration: 1.4, delay: 0.2 }}
                className="absolute text-accent text-xl left-1/2 top-1/2"
              >
                ✦
              </motion.span>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl text-primary-foreground font-bold flex items-center gap-2"
            >
              <span className="text-accent">✦</span> CleanCrest
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
