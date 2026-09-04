import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

// Corporate Brand Colors
const PRIMARY = "#C8102E"; // Corporate Red
const ACCENT = "#F4B400";  // Corporate Yellow
const DARK = "#111827";

const PRODUCTS = [
  {
    id: 1,
    name: "Premium Food Products",
    category: "Food Products",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
    description:
      "High-quality food products prepared with carefully selected ingredients to deliver excellent taste, freshness, and consistency.",
    specs: ["Premium Quality", "Fresh Products", "Quality Checked"],
    price: "Available on Request",
    href: "/products",
  },
  {
    id: 2,
    name: "Fresh Ingredients",
    category: "Ingredients",
    image:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1000&q=80",
    description:
      "Carefully sourced ingredients selected to maintain excellent quality, freshness, taste, and consistency across all batches.",
    specs: ["Fresh Ingredients", "Quality Sourced", "Reliable Supply"],
    price: "Available on Request",
    href: "/products",
  },
  {
    id: 3,
    name: "Specialty Food Range",
    category: "Specialty Products",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80",
    description:
      "A carefully developed range of food products created with a strong focus on quality, taste, consistency, and customer satisfaction.",
    specs: ["Quality Focused", "Great Taste", "Trusted Quality"],
    price: "Available on Request",
    href: "/products",
  },
];

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 22,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 20,
    transition: { duration: 0.2 },
  },
};

function ProductCard({ product }) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-2xl"
    >
      {/* Product Content & Visual */}
      <div>
        <div className="relative h-60 w-full overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Image Overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.60), transparent 60%)",
            }}
          />

          {/* Category Badge */}
          <span
            className="absolute left-4 top-4 rounded-lg px-3 py-1.5 text-xs font-bold shadow-sm backdrop-blur-md"
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
              color: PRIMARY,
            }}
          >
            {product.category}
          </span>

          {/* Yellow Accent Line */}
          <div
            className="absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
            style={{ backgroundColor: ACCENT }}
          />
        </div>

        <div className="p-6 pb-0">
          <h3 className="text-lg font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-red-700">
            {product.name}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            {product.description}
          </p>

          {/* Specifications */}
          <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
            {product.specs.map((spec) => (
              <li
                key={spec}
                className="inline-flex items-center gap-1.5 rounded-md bg-gray-50 px-2.5 py-1.5 text-[11px] font-semibold text-gray-700 transition-colors group-hover:bg-red-50/50"
              >
                <Check
                  className="h-3 w-3 shrink-0"
                  strokeWidth={2.5}
                  style={{ color: PRIMARY }}
                  aria-hidden="true"
                />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer with SPA Link */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 px-6 py-4">
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            Pricing
          </span>
          <span className="text-sm font-extrabold text-gray-900">
            {product.price}
          </span>
        </div>

        {/* View Details Button with React Router Link */}
        <Link
          to={product.href}
          className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-[0.97]"
          style={{ backgroundColor: PRIMARY }}
        >
          <span>View Details</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(PRODUCTS.map((product) => product.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center justify-center gap-2">
            <span
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: PRIMARY }}
            >
              IFTAR QUALITY ASSURED
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our <span style={{ color: PRIMARY }}>Products</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Discover our quality food products, carefully developed with a focus
            on freshness, taste, consistency, and customer satisfaction.
          </p>

          {/* Category Filter with Animated Indicator */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className="relative rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none"
                  style={{
                    color: isActive ? "#FFFFFF" : DARK,
                  }}
                >
                  {isActive ? (
                    <motion.div
                      layoutId="homeProductActiveTab"
                      className="absolute inset-0 rounded-full shadow-md"
                      style={{ backgroundColor: PRIMARY }}
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  ) : (
                    <div className="absolute inset-0 rounded-full border border-gray-200 bg-white transition-colors hover:border-red-200 hover:bg-gray-50" />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    {category}
                    {isActive && (
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Product Grid with AnimatePresence */}
        <motion.div
          key={selectedCategory}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
