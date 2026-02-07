import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hand, Package, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "100% Handmade",
    description: "Every piece is crafted by skilled artisans using traditional techniques passed down through generations.",
  },
  {
    icon: Package,
    title: "Zero Plastic Packaging",
    description: "All our packaging is biodegradable, recyclable, or reusable. No single-use plastics, ever.",
  },
  {
    icon: Award,
    title: "Fair Trade Certified",
    description: "We ensure fair wages and safe working conditions for all our artisan partners.",
  },
  {
    icon: Truck,
    title: "Carbon Neutral Shipping",
    description: "We offset 100% of our shipping emissions through verified environmental projects.",
  },
];

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="eco-section bg-card" ref={ref}>
      <div className="eco-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
              Why Parivarthana
            </span>
            <h2 className="eco-heading mb-6">
              Shopping That
              <br />
              <span className="text-primary">Feels Good</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              When you choose Parivarthana, you're not just buying a product — 
              you're joining a movement. A movement towards conscious consumption, 
              supporting communities, and healing our planet.
            </p>
            <p className="text-foreground font-medium italic">
              "Buy less. Choose well. Make it last."
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border/50 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
