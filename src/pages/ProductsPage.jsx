import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, MessageCircle, Search } from "lucide-react";
import { PRODUCTS } from "../components/Products";

// Corporate Brand Constants
const PRIMARY = "#C8102E"; // Brand Red
const ACCENT = "#F4B400"; // Accent Yellow / Gold
const DARK = "#111827";

const WHATSAPP_NUMBER = "917510116699"; // Verified Subani WhatsApp line

const CATEGORIES = [
  "All",
  ...new Set(PRODUCTS.map((product) => product.category)),
];

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: -15,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

function ProductCard({ product, onInquire }) {
  return (
    <motion.article
      variants={cardVariants}
      layout
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-2xl"
    >
      {/* Product Image & Badges */}
      <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <span
          className="absolute left-4 top-4 rounded-lg px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider shadow-xs backdrop-blur-md z-10"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            color: PRIMARY,
          }}
        >
          {product.category}
        </span>

        {/* Brand Tag */}
        {product.brand && (
          <span
            className="absolute right-4 top-4 rounded-md px-2.5 py-1 text-[9px] font-extrabold tracking-wider uppercase shadow-xs backdrop-blur-xs z-10"
            style={{
              backgroundColor:
                product.brand === "IFTAR FOOD INDUSTRIES"
                  ? "rgba(200, 16, 46, 0.9)"
                  : "rgba(0, 0, 0, 0.72)",
              color:
                product.brand === "IFTAR FOOD INDUSTRIES"
                  ? "#FFFFFF"
                  : "#FFCA00",
            }}
          >
            {product.brand}
          </span>
        )}

        {/* Brand Liquid Accent Strip */}
        <motion.div
          className="absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
          style={{
            background: `linear-gradient(90deg, ${PRIMARY} 50%, ${ACCENT} 50%)`,
          }}
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
            <motion.span
              key={spec}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-100 bg-gray-50/90 px-2.5 py-1 text-[11px] font-semibold text-gray-700 transition-colors group-hover:border-red-100 group-hover:bg-red-50/50"
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

        {/* Pricing & WhatsApp Inquiry */}
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

            <motion.button
              type="button"
              onClick={() => onInquire(product)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:shadow-lg"
              style={{ backgroundColor: PRIMARY }}
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Inquire</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.brand &&
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquire = (product) => {
    const brandName = product.brand || "Koolath Group";
    const message = encodeURIComponent(
      `Hello ${brandName}, I am interested in "${product.name}". Please share product specifications, bulk pricing, and minimum order quantity.`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <span
                className="text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: PRIMARY }}
              >
                OUR CATALOG
              </span>
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Explore Our <span style={{ color: PRIMARY }}>Products</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-2xl text-base leading-7 text-gray-600"
            >
              Discover quality food products and wholesale provisions crafted
              with high hygiene standards, dependable freshness, and consistent
              supply.
            </motion.p>
          </div>

          {/* Quick Search */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full max-w-xs"
          >
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-xs font-medium text-gray-900 shadow-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
            />
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex w-full flex-wrap items-center justify-start gap-2.5">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className="relative rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus:outline-none"
                style={{
                  color: isActive ? "#FFFFFF" : DARK,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProductsPill"
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

                {!isActive && (
                  <div className="absolute inset-0 rounded-full border border-gray-200 bg-white transition-colors duration-200 hover:border-red-200 hover:bg-gray-50" />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  {category}
                  {isActive && (
                    <motion.span
                      layoutId="activeProdTabDot"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.3 }}
                      className="inline-block h-2 w-2 rounded-full ring-2 ring-white/30"
                      style={{ backgroundColor: ACCENT }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <motion.div
          key={selectedCategory + searchQuery}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onInquire={handleInquire}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center text-gray-500"
              >
                No products found matching &ldquo;{searchQuery}&rdquo;.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
