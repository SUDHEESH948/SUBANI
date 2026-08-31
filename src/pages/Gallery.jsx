
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

// =========================================================
// CORPORATE BRAND COLORS
// =========================================================

const PRIMARY = "#ff3d57";       // Corporate Red
const ACCENT = "#F4B400";        // Corporate Yellow
const DARK = "#111827";

// 50% Red + 50% Yellow
const BRAND_GRADIENT =
  "linear-gradient(90deg, #ff3d57 0%, #ff3d57 50%, #F4B400 50%, #F4B400 100%)";

// =========================================================
// GALLERY DATA
// =========================================================

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Our Products",
    category: "Food Products",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Fresh Ingredients",
    category: "Ingredients",
    image:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Quality Food",
    category: "Quality",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Food Selection",
    category: "Food Products",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Premium Quality",
    category: "Quality",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Our Work",
    category: "Operations",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
  },
];

const CATEGORIES = [
  "All",
  ...new Set(GALLERY_ITEMS.map((item) => item.category)),
];

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80";

// =========================================================
// GALLERY CARD
// =========================================================

function GalleryCard({ item, onSelect }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      onClick={() => onSelect(item)}
      className="
        group
        relative
        h-80
        cursor-pointer
        overflow-hidden
        rounded-2xl
        bg-gray-100
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <img
        src={item.image}
        alt={item.title}
        onError={(e) => {
          e.currentTarget.src = FALLBACK_IMAGE;
        }}
        loading="lazy"
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

      {/* =================================================
          IMAGE OVERLAY
      ================================================= */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* =================================================
          RED + YELLOW BOTTOM ACCENT
      ================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1.5
          w-full
          scale-x-0
          origin-left
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
        style={{
          background: BRAND_GRADIENT,
        }}
      />

      {/* =================================================
          CARD CONTENT
      ================================================= */}

      <div className="absolute inset-x-0 bottom-0 p-6">
        {/* Category */}

        <span
          className="
            inline-flex
            rounded-full
            px-3
            py-1
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            shadow-sm
          "
          style={{
            backgroundColor: ACCENT,
            color: DARK,
          }}
        >
          {item.category}
        </span>

        {/* Title + Button */}

        <div className="mt-3 flex items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-white">
            {item.title}
          </h3>

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-lg
              transition-all
              duration-300
              group-hover:rotate-45
            "
            style={{
              color: PRIMARY,
            }}
          >
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// =========================================================
// MAIN GALLERY
// =========================================================

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section
      className="
        min-h-screen
        bg-gray-50
        px-6
        py-20
        lg:px-8
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mx-auto max-w-3xl text-center">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
            "
            style={{
              color: PRIMARY,
            }}
          >
            IFTAR FOOD INDUSTRIES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              mt-4
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
              md:text-5xl
            "
          >
            Explore Our{" "}
            <span
              style={{
                color: PRIMARY,
              }}
            >
              Gallery
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-gray-600
            "
          >
            Explore our food products, fresh ingredients,
            quality standards, operations, and the work
            behind IFTAR FOOD INDUSTRIES.
          </motion.p>

          {/* 50/50 Brand Accent */}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              mx-auto
              mt-6
              h-1
              rounded-full
            "
            style={{
              background: BRAND_GRADIENT,
            }}
          />
        </div>

        {/* =================================================
            CATEGORY FILTER
        ================================================= */}

        <div className="mt-10 flex flex-wrap justify-center gap-2">

          {CATEGORIES.map((category) => {
            const isActive =
              selectedCategory === category;

            return (
              <motion.button
                key={category}
                type="button"
                onClick={() =>
                  setSelectedCategory(category)
                }
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  transition-all
                  duration-200
                "
                style={{
                  backgroundColor: isActive
                    ? PRIMARY
                    : "#FFFFFF",

                  borderColor: isActive
                    ? PRIMARY
                    : "#E5E7EB",

                  color: isActive
                    ? "#FFFFFF"
                    : DARK,

                  boxShadow: isActive
                    ? `0 5px 15px ${PRIMARY}25`
                    : "none",
                }}
              >
                {category}

                {isActive && (
                  <span
                    className="
                      ml-2
                      inline-block
                      h-1.5
                      w-1.5
                      rounded-full
                      align-middle
                    "
                    style={{
                      backgroundColor: ACCENT,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* =================================================
            GALLERY GRID
        ================================================= */}

        <motion.div
          layout
          className="
            mt-12
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onSelect={setActiveItem}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* =================================================
            LIGHTBOX MODAL
        ================================================= */}

        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-black/80
                p-4
                backdrop-blur-sm
              "
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 20,
                }}
                transition={{
                  duration: 0.3,
                }}
                onClick={(e) => e.stopPropagation()}
                className="
                  relative
                  max-h-[90vh]
                  w-full
                  max-w-4xl
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-2xl
                "
              >

                {/* Close Button */}

                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="
                    absolute
                    right-4
                    top-4
                    z-10
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-black/60
                    text-white
                    transition
                    hover:bg-black
                  "
                  aria-label="Close gallery"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Modal Image */}

                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  onError={(e) => {
                    e.currentTarget.src =
                      FALLBACK_IMAGE;
                  }}
                  className="
                    max-h-[65vh]
                    w-full
                    object-cover
                  "
                />

                {/* Modal Content */}

                <div className="p-6">

                  <span
                    className="
                      inline-flex
                      rounded-full
                      px-3
                      py-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                    "
                    style={{
                      backgroundColor: ACCENT,
                      color: DARK,
                    }}
                  >
                    {activeItem.category}
                  </span>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-extrabold
                      text-gray-900
                    "
                  >
                    {activeItem.title}
                  </h3>

                  {/* Brand Accent */}

                  <div
                    className="
                      mt-4
                      h-1
                      w-16
                      rounded-full
                    "
                    style={{
                      background: BRAND_GRADIENT,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

