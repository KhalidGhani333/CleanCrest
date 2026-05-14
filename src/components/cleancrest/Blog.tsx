import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { 
    img: b1, 
    title: "How to Keep Your Home Clean Between Professional Visits", 
    date: "Apr 22, 2026",
    author: "Jane Doe",
    readTime: "5 min read",
    content: "Maintaining a spotless home between professional cleanings doesn't have to be a chore. Start by implementing a 'one-touch' rule: if you pick something up, put it away immediately rather than setting it down elsewhere. Focus on high-traffic areas like the kitchen and bathroom daily. A quick wipe of the counters and a 5-minute tidy-up every evening can make a world of difference. Additionally, encourage everyone in the household to take responsibility for their own spaces to ensure the cleanliness lasts longer."
  },
  { 
    img: b2, 
    title: "Why Eco-Friendly Cleaning Products Are Better for Your Family", 
    date: "Apr 15, 2026",
    author: "Mark Smith",
    readTime: "4 min read",
    content: "Traditional cleaning products often contain harsh chemicals that can linger in the air and on surfaces long after the cleaning is done. Eco-friendly products, on the other hand, use natural ingredients like vinegar, lemon, and essential oils that are just as effective but much safer. Switching to green cleaning reduces the risk of respiratory issues, skin irritation, and environmental pollution. It's a small change that has a big impact on the health and well-being of your children, pets, and the planet."
  },
  { 
    img: b3, 
    title: "End of Tenancy Cleaning Checklist for UK Renters", 
    date: "Apr 02, 2026",
    author: "Sarah Wilson",
    readTime: "7 min read",
    content: "Getting your full deposit back requires a thorough clean that meets professional standards. Our checklist includes: deep cleaning the oven and extractor fan, descaling all taps and showerheads, cleaning inside all cupboards and drawers, and ensuring all carpets are vacuumed or steam-cleaned. Don't forget often-overlooked spots like skirting boards, light switches, and the tops of door frames. Hiring a professional service can guarantee results, but if you're doing it yourself, give yourself at least two full days to complete the task properly."
  },
];

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<(typeof posts)[0] | null>(null);

  return (
    <section id="blog" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <SectionLabel>Blog & Insights</SectionLabel>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-primary text-balance max-w-xl">
              Get Weekly Cleaning Tips & Updates
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-background border border-border hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden h-56 cursor-pointer" onClick={() => setSelectedPost(p)}>
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
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs text-muted-foreground mb-2">{p.date}</p>
                <h3 className="font-bold text-lg text-primary leading-snug mb-4 flex-1">{p.title}</h3>
                <button 
                  onClick={() => setSelectedPost(p)}
                  className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-accent transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-none bg-background rounded-3xl">
          {selectedPost && (
            <div className="flex flex-col">
              <div className="h-64 md:h-[400px] w-full overflow-hidden">
                <img 
                  src={selectedPost.img} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <DialogHeader className="mb-6">
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedPost.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {selectedPost.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}</span>
                  </div>
                  <DialogTitle className="text-2xl md:text-4xl font-bold text-primary leading-tight">
                    {selectedPost.title}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-lg text-foreground/80 leading-relaxed space-y-4">
                  {selectedPost.content}
                </DialogDescription>
                <div className="mt-10 pt-8 border-t border-border">
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
                  >
                    Back to Blog
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

