import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

import productBasket from "@/assets/product-basket.jpg";
import productStationery from "@/assets/product-stationery.jpg";
import productBag from "@/assets/product-bag.jpg";
import productPlanter from "@/assets/product-planter.jpg";
import productWraps from "@/assets/product-wraps.jpg";
import productCutlery from "@/assets/product-cutlery.jpg";

const products = [
  {
    id: 1,
    name: "Handwoven Jute Basket",
    price: 34.99,
    ecoScore: 4.9,
    category: "Home Decor",
    image: productBasket,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Recycled Paper Notebook",
    price: 12.99,
    ecoScore: 4.8,
    category: "Stationery",
    image: productStationery,
    badge: null,
  },
  {
    id: 3,
    name: "Organic Cotton Tote",
    price: 24.99,
    ecoScore: 4.7,
    category: "Accessories",
    image: productBag,
    badge: "New",
  },
  {
    id: 4,
    name: "Terracotta Planter",
    price: 18.99,
    ecoScore: 4.8,
    category: "Home Decor",
    image: productPlanter,
    badge: null,
  },
  {
    id: 5,
    name: "Beeswax Food Wraps",
    price: 16.99,
    ecoScore: 5.0,
    category: "Kitchen",
    image: productWraps,
    badge: "Eco Star",
  },
  {
    id: 6,
    name: "Bamboo Cutlery Set",
    price: 14.99,
    ecoScore: 4.9,
    category: "Kitchen",
    image: productCutlery,
    badge: null,
  },
];

export const FeaturedProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="shop" className="eco-section" ref={ref}>
      <div className="eco-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Shop Consciously
          </span>
          <h2 className="eco-heading mb-4">Featured Products</h2>
          <p className="eco-subheading">
            Each item tells a story of transformation and hope.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="eco-card group overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 eco-badge">
                    <Leaf className="w-3 h-3" />
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-soft hover:bg-card">
                  <ShoppingBag className="w-4 h-4 text-foreground" />
                </button>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                  {product.category}
                </p>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-foreground">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Leaf className="w-4 h-4 text-accent" />
                    <span>{product.ecoScore}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
