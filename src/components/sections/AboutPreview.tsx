import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Recycle, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Recycle,
    title: "Turn Waste into Wonder",
    description: "Every product begins with materials that would otherwise pollute our planet.",
  },
  {
    icon: Heart,
    title: "Crafted with Love",
    description: "Our artisans pour their skill and passion into every handmade piece.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We support fair wages and sustainable livelihoods for local craftspeople.",
  },
];

export const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="eco-section bg-card" ref={ref}>
      <div className="eco-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Philosophy
          </span>
          <h2 className="eco-heading mb-6">
            We're Not Perfect.
            <br />
            <span className="text-primary">But We're Trying. Every Day.</span>
          </h2>
          <p className="eco-subheading">
            Parivarthana means transformation. We believe in the power of small, 
            conscious choices to create a ripple of positive change across our world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="eco-card p-8 text-center group hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
