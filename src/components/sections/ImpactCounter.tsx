import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Leaf, Users, TreePine, Droplets } from "lucide-react";

const impacts = [
  {
    icon: Leaf,
    value: 1200,
    suffix: "kg",
    label: "Plastic Saved",
  },
  {
    icon: Users,
    value: 85,
    suffix: "",
    label: "Artisans Supported",
  },
  {
    icon: TreePine,
    value: 300,
    suffix: "",
    label: "Trees Planted",
  },
  {
    icon: Droplets,
    value: 5000,
    suffix: "L",
    label: "Water Saved",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export const ImpactCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="eco-section bg-primary" ref={ref}>
      <div className="eco-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-leaf font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Collective Impact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
            Together, We're Making a Difference
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Every purchase contributes to a greener planet. Here's what our community has achieved.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-primary-foreground/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-leaf/20 flex items-center justify-center mx-auto mb-4">
                <impact.icon className="w-7 h-7 text-leaf" />
              </div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                <AnimatedCounter value={impact.value} suffix={impact.suffix} />
              </div>
              <p className="text-primary-foreground/70 text-sm md:text-base">
                {impact.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
