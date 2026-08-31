import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, ArrowUpRight, X } from "lucide-react";

// =========================================================
// BRAND CONSTANTS & DATA
// =========================================================

const PRIMARY = "#C8102E";
const ACCENT = "#F4B400";
const DARK = "#111827";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Our Products",
    category: "Food Products",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Fresh Ingredients",
    category: "Ingredients",
    image: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Quality Food",
    category: "Quality",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Food Selection",
    category: "Food Products",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Premium Quality",
    category: "Quality",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Our Work",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
  },
];

const CATEGORIES = ["All", ...new Set(GALLERY_ITEMS.map((item) => item.category))];
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80";

// =========================================================
// GALLERY CARD
// =========================================================

function GalleryCard({ item, onSelect }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={() => onSelect(item)}
      className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={item.image}
        alt={item.title}
        onError={(e) => {
          e.currentTarget.src = FALLBACK_IMAGE;
        }}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Yellow bottom hover bar */}
      <div
        className="absolute bottom-0 left-0 h-1.5 w-0 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: ACCENT }}
      />

      {/* Card Content */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6">
        <span
          className="w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
          style={{ backgroundColor: ACCENT, color: DARK }}
        >
          {item.category}
        </span>

        <div className="mt-3 flex items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:rotate-45"
            style={{ color: PRIMARY }}
          >
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// =========================================================
// MAIN GALLERY COMPONENT
// =========================================================

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
            style={{
              borderColor: `${ACCENT}55`,
              backgroundColor: `${ACCENT}15`,
              color: PRIMARY,
            }}
          >
            <Images className="h-4 w-4" style={{ color: ACCENT }} />
            IFTAR FOOD INDUSTRIES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Explore Our <span style={{ color: PRIMARY }}>Gallery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600"
          >
            Explore our products, food selection, quality, and the dedicated work behind{" "}
            <strong style={{ color: DARK }}>IFTAR FOOD INDUSTRIES</strong>.
          </motion.p>

          <div
            className="mx-auto mt-6 h-1 w-20 rounded-full"
            style={{ backgroundColor: PRIMARY }}
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="relative rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200"
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

        {/* Gallery Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} onSelect={setActiveItem} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              >
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black"
                >
                  <X className="h-5 w-5" />
                </button>
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-[65vh] w-full object-cover"
                />
                <div className="p-6">
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: ACCENT, color: DARK }}
                  >
                    {activeItem.category}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">{activeItem.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        
      </div>
    </section>
  );
}