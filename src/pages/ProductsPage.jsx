import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

// =========================================================
// CORPORATE BRAND CONSTANTS & SPLIT ACCENTS
// =========================================================

const PRIMARY = "#C8102E"; // Brand Red
const YELLOW = "#F4B400";  // Brand Yellow
const DARK = "#111827";

// 50% Red + 50% Yellow Hard Split Gradient
const SPLIT_GRADIENT = `linear-gradient(90deg, ${PRIMARY} 0%, ${PRIMARY} 50%, ${YELLOW} 50%, ${YELLOW} 100%)`;

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

const CATEGORIES = [
  "All",
  ...new Set(PRODUCTS.map((product) => product.category)),
];

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80";

// =========================================================
// ANIMATION VARIANTS
// =========================================================

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: -10,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

// =========================================================
// PRODUCT CARD
// =========================================================

function ProductCard({ product, onInquire }) {
  return (
    <motion.article
      variants={cardVariants}
      layout
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-gray-200/90
        bg-white
        shadow-sm
        transition-shadow
        duration-300
        hover:border-red-200
        hover:shadow-2xl
      "
    >
      {/* =================================================
          PRODUCT IMAGE & 50/50 SPLIT ACCENTS
      ================================================= */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        {/* Gradient Overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)",
          }}
        />

        {/* Category Badge */}
        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            px-3
            py-1
            text-[11px]
            font-bold
            uppercase
            tracking-wider
            shadow-md
            backdrop-blur-md
          "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            color: PRIMARY,
          }}
        >
          {product.category}
        </span>

        {/* Exactly 50% Red + 50% Yellow Linear Gradient Sweep */}
        <motion.div
          className="absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
          style={{ background: SPLIT_GRADIENT }}
        />
      </div>

      {/* =================================================
          PRODUCT DETAILS
      ================================================= */}
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
            <motion.span
              key={spec}
              whileHover={{ scale: 1.05 }}
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-md
                border
                border-gray-100
                bg-gray-50/80
                px-2.5
                py-1
                text-[11px]
                font-semibold
                text-gray-700
                transition-colors
                group-hover:border-red-100
                group-hover:bg-red-50/40
              "
            >
              <Check
                className="h-3 w-3"
                strokeWidth={3}
                style={{ color: PRIMARY }}
              />
              {spec}
            </motion.span>
          ))}
        </div>

        {/* =================================================
            PRICING + INQUIRY
        ================================================= */}
        <div className="mt-6 border-t border-gray-100 pt-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Pricing
              </span>
              <span className="mt-0.5 block text-xs font-bold text-gray-900 sm:text-sm">
                {product.price}
              </span>
            </div>

            {/* Inquire Button with Micro-interactions */}
            <motion.button
              type="button"
              onClick={() => onInquire(product)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                group/btn
                relative
                inline-flex
                items-center
                gap-1.5
                overflow-hidden
                rounded-lg
                px-4
                py-2.5
                text-xs
                font-bold
                text-white
                shadow-sm
                transition-all
                hover:shadow-lg
              "
              style={{ backgroundColor: PRIMARY }}
            >
              <span>Inquire</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// =========================================================
// MAIN PRODUCTS COMPONENT
// =========================================================

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === selectedCategory);

  const handleInquire = (product) => {
    const message = encodeURIComponent(
      `Hello ${COMPANY_NAME}, I am interested in "${product.name}". Please share the product details and pricing.`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            HEADER SECTION
        ================================================= */}
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Explore Our{" "}
            <span style={{ color: PRIMARY }}>Products</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-base leading-7 text-gray-600"
          >
            Discover quality food products crafted with high hygiene standards,
            dependable freshness, and consistent quality.
          </motion.p>

          {/* Section Divider with 50/50 Split */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 h-1 w-20 origin-left rounded-full"
            style={{ background: SPLIT_GRADIENT }}
          />
        </div>

        {/* =================================================
            CATEGORY TABS (RED SELECTED PILL + 50/50 ACCENT DOT)
        ================================================= */}
        <div className="mt-10 flex w-full flex-wrap items-center justify-start gap-2.5">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className="
                  relative
                  rounded-full
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  transition-colors
                  duration-200
                  focus:outline-none
                "
                style={{
                  color: isActive ? "#FFFFFF" : DARK,
                }}
              >
                {/* Active Red Tab Pill Animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeRedTab"
                    className="absolute inset-0 rounded-full shadow-lg"
                    style={{
                      backgroundColor: PRIMARY,
                      boxShadow: `0 8px 20px -4px rgba(200, 16, 46, 0.45)`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}

                {/* Inactive Tab Border/Background */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-full border border-gray-200 bg-white transition-colors duration-200 hover:border-red-200 hover:bg-gray-50" />
                )}

                {/* Tab Label & Animated 50/50 Split Dot */}
                <span className="relative z-10 flex items-center gap-2">
                  {category}

                  {isActive && (
                    <motion.span
                      layoutId="activeTabDot"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.3 }}
                      className="inline-block h-2.5 w-2.5 rounded-full ring-2 ring-white/40"
                      style={{ background: SPLIT_GRADIENT }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* =================================================
            PRODUCT GRID (SYNCHRONIZED STAGGER & POP)
        ================================================= */}
        <motion.div
          key={selectedCategory}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
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