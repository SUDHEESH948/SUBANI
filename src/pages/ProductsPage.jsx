import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, ShoppingBag, MessageSquare, Sparkles } from "lucide-react";

// =========================================================
// CORPORATE BRAND CONSTANTS
// =========================================================

const PRIMARY = "#C8102E"; // Corporate Red
const ACCENT = "#F4B400";  // Corporate Yellow
const DARK = "#111827";
const COMPANY_NAME = "IFTAR FOOD INDUSTRIES";

// =========================================================
// PRODUCT DATA
// =========================================================

const PRODUCTS = [
  {
    id: 1,
    name: "Premium Food Products",
    description:
      "High-quality food products prepared with carefully selected ingredients to deliver excellent taste, freshness, and consistency.",
    price: "Available on Request",
    category: "Premium Range",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    specs: ["Premium Quality", "Freshly Packed", "Quality Checked"],
  },
  {
    id: 2,
    name: "Fresh Food Ingredients",
    description:
      "Carefully sourced raw ingredients selected to maintain consistent quality, freshness, and authentic taste across batches.",
    price: "Available on Request",
    category: "Ingredients",
    image:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=900&q=80",
    specs: ["Directly Sourced", "Hygienic Storage", "Reliable Supply"],
  },
  {
    id: 3,
    name: "Specialty Food Range",
    description:
      "A curated culinary line developed with authentic recipes focused on batch consistency and elevated customer satisfaction.",
    price: "Available on Request",
    category: "Specialty",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    specs: ["Authentic Flavor", "Zero Compromise", "Strict Standards"],
  },
];

const CATEGORIES = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80";

// =========================================================
// PRODUCT CARD
// =========================================================

function ProductCard({ product, onInquire }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
    >
      {/* Product Image Header */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
          }}
        />

        {/* Category Badge */}
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm"
          style={{
            backgroundColor: "#FFFFFF",
            color: PRIMARY,
          }}
        >
          {product.category}
        </span>

        {/* Yellow Bottom Accent Bar */}
        <div
          className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: ACCENT }}
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-red-700">
          {product.name}
        </h3>

        <p className="mt-2.5 flex-1 text-sm leading-6 text-gray-600">
          {product.description}
        </p>

        {/* Feature Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {product.specs.map((spec) => (
            <span
              key={spec}
              className="inline-flex items-center gap-1.5 rounded-md border border-gray-100 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-700"
            >
              <Check className="h-3 w-3" strokeWidth={3} style={{ color: PRIMARY }} />
              {spec}
            </span>
          ))}
        </div>

        {/* Price & Action Area */}
        <div className="mt-6 border-t border-gray-100 pt-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Pricing
              </span>
              <span className="mt-0.5 block text-xs font-bold text-gray-900 sm:text-sm">
                {product.price}
              </span>
            </div>

            <motion.button
              type="button"
              onClick={() => onInquire(product)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:shadow-md"
              style={{ backgroundColor: PRIMARY }}
            >
              <span>Inquire</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// =========================================================
// MAIN PRODUCTS SECTION
// =========================================================

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleInquire = (product) => {
    const message = encodeURIComponent(
      `Hello ${COMPANY_NAME}, I am interested in inquiring about "${product.name}". Please share details and pricing.`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
            style={{
              borderColor: `${ACCENT}66`,
              backgroundColor: `${ACCENT}15`,
              color: PRIMARY,
            }}
          >
            <ShoppingBag className="h-4 w-4" style={{ color: ACCENT }} />
            {COMPANY_NAME}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Explore Our <span style={{ color: PRIMARY }}>Products</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600"
          >
            Discover quality food products from{" "}
            <strong style={{ color: DARK }}>{COMPANY_NAME}</strong>, crafted with high
            hygiene standards, dependable freshness, and uniform consistency.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 70 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 h-1 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                style={{
                  backgroundColor: isActive ? PRIMARY : "#E5E7EB",
                  color: isActive ? "#FFFFFF" : DARK,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <motion.div layout className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onInquire={handleInquire}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        
      </div>
    </section>
  );
}