import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "PS",
    rating: 5,
    text: "The quality is incredible. You can feel the love and care in every stitch. I'm so proud to support local artisans while making sustainable choices.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    location: "London, UK",
    avatar: "SM",
    rating: 5,
    text: "Finally, a brand that walks the talk! The packaging was completely plastic-free, and the products exceeded my expectations. My go-to for gifts now.",
  },
  {
    id: 3,
    name: "Arjun Patel",
    location: "San Francisco, USA",
    avatar: "AP",
    rating: 5,
    text: "Parivarthana has transformed my home. Every piece sparks joy knowing it was made sustainably and supports fair trade practices.",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="eco-section" ref={ref}>
      <div className="eco-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Love Letters
          </span>
          <h2 className="eco-heading mb-4">Stories From Our Community</h2>
          <p className="eco-subheading">
            Real people, real impact, real change.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="eco-card p-6 md:p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/30" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
