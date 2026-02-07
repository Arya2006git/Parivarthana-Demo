import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Leaf, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="eco-section bg-secondary/30" ref={ref}>
      <div className="eco-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
            <Leaf className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Join the Green Tribe 🌱
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get eco tips, artisan stories, exclusive offers, and be the first to know about new products. 
            One email a week, no spam, just goodness.
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 py-4 px-6 bg-accent/20 rounded-xl text-primary"
            >
              <Check className="w-5 h-5" />
              <span className="font-medium">Welcome to the tribe! Check your inbox 🌿</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-card border-border rounded-xl px-4 flex-1"
                required
              />
              <Button type="submit" variant="hero" size="lg" className="group">
                Subscribe
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          )}

          <p className="text-sm text-muted-foreground mt-4">
            🔒 Your data is safe. We never share your email.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
