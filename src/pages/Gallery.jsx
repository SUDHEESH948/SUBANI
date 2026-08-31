import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, X, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

// =========================================================
// CORPORATE BRAND CONSTANTS & SPLIT ACCENTS
// =========================================================

const PRIMARY = "#C8102E"; // Brand Red
const YELLOW = "#F4B400";  // Brand Yellow
const DARK = "#111827";

// 50% Red + 50% Yellow Split Gradient
const SPLIT_GRADIENT = `linear-gradient(90deg, ${PRIMARY} 0%, ${PRIMARY} 50%, ${YELLOW} 50%, ${YELLOW} 100%)`;

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
    title: "Our Operations",
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
// ANIMATION VARIANTS
// =========================================================

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
  hidden: { opacity: 0, y: 40, scale: 0.92, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    y: 20,
    filter: "blur(6px)",
    transition: { duration: 0.22, ease: "easeIn" },
  },
};

// =========================================================
// 3D INTERACTIVE GALLERY CARD
// =========================================================

function GalleryCard({ item, onSelect }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      variants={cardVariants}
      style={{ perspective: 1000 }}
      className="h-80 w-full"
    >
      <motion.article
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(item)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
          group
          relative
          h-full
          w-full
          cursor-pointer
          overflow-hidden
          rounded-3xl
          border
          border-gray-200/90
          bg-gray-900
          shadow-md
          transition-all
          duration-300
          hover:border-red-200
          hover:shadow-[0_20px_45px_-12px_rgba(200,16,46,0.25)]
        "
      >
        <motion.img
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
            group-hover:scale-115
          "
        />

        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-tr from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-1.5
            w-full
            origin-left
            scale-x-0
            transition-transform
            duration-500
            ease-out
            group-hover:scale-x-100
          "
          style={{ background: SPLIT_GRADIENT }}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex items-center justify-between">
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                px-3
                py-1
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                shadow-lg
                backdrop-blur-md
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                color: PRIMARY,
              }}
            >
              <Sparkles className="h-2.5 w-2.5" style={{ color: YELLOW }} />
              {item.category}
            </span>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="transform transition-transform duration-300 ease-out group-hover:-translate-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-300">
                IFTAR COLLECTION
              </span>
              <h3 className="mt-1 text-2xl font-black tracking-tight text-white transition-colors group-hover:text-yellow-400">
                {item.title}
              </h3>
            </div>

            <div
              className="
                relative
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-full
                bg-white
                shadow-xl
                transition-all
                duration-300
                group-hover:scale-110
              "
            >
              <div
                className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
                style={{ background: SPLIT_GRADIENT }}
              />

              <ArrowUpRight className="relative z-10 h-5 w-5 text-gray-900 transition-colors duration-300 group-hover:text-white" />
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

// =========================================================
// MAIN GALLERY SECTION
// =========================================================

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  // Scroll Container Ref and State for Arrow Visibility
  const navContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Check scroll position to show/disable arrows
  const checkScrollability = () => {
    if (navContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  // Smooth Scroll Handlers
  const handleScroll = (direction) => {
    if (navContainerRef.current) {
      const scrollAmount = direction === "left" ? -220 : 220;
      navContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2"
          >
            <span
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: PRIMARY }}
            >
              IFTAR FOOD INDUSTRIES
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: YELLOW }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Explore Our{" "}
            <span style={{ color: PRIMARY }}>Gallery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7"
          >
            Explore our food products, fresh ingredients, quality standards,
            operations, and the dedication behind our brand.
          </motion.p>

          {/* 50/50 Brand Accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 h-1 w-20 rounded-full"
            style={{ background: SPLIT_GRADIENT }}
          />
        </div>

        {/* =================================================
            RESPONSIVE NAVIGATION WITH LEFT/RIGHT ARROWS
        ================================================= */}
        <div className="relative mx-auto mt-8 flex max-w-4xl items-center justify-center sm:mt-10">
          
          {/* Left Arrow Button */}
          <motion.button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
            whileTap={{ scale: canScrollLeft ? 0.9 : 1 }}
            className={`
              mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-200
              ${!canScrollLeft ? "cursor-not-allowed opacity-30" : "hover:border-red-200 hover:text-red-600 hover:shadow-md"}
            `}
            aria-label="Scroll Categories Left"
          >
            <ChevronLeft className="h-4 w-4" />
          </motion.button>

          {/* Scrollable Track */}
          <div
            ref={navContainerRef}
            onScroll={checkScrollability}
            className="
              flex
              items-center
              gap-2
              overflow-x-auto
              px-2
              py-2
              no-scrollbar
              sm:gap-2.5
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className="
                    relative
                    shrink-0
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    transition-colors
                    duration-200
                    focus:outline-none
                    sm:px-5
                    sm:py-2.5
                  "
                  style={{
                    color: isActive ? "#FFFFFF" : DARK,
                  }}
                >
                  {/* Active Red Tab Pill Animation */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGalleryPill"
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
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    {category}

                    {isActive && (
                      <motion.span
                        layoutId="activeGalleryDot"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.3, 1] }}
                        transition={{ duration: 0.3 }}
                        className="inline-block h-2 w-2 rounded-full ring-2 ring-white/40 sm:h-2.5 sm:w-2.5"
                        style={{ background: SPLIT_GRADIENT }}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <motion.button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
            whileTap={{ scale: canScrollRight ? 0.9 : 1 }}
            className={`
              ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-200
              ${!canScrollRight ? "cursor-not-allowed opacity-30" : "hover:border-red-200 hover:text-red-600 hover:shadow-md"}
            `}
            aria-label="Scroll Categories Right"
          >
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        </div>

        {/* =================================================
            GALLERY GRID (SYNCHRONIZED STAGGER & POP)
        ================================================= */}
        <motion.div
          key={selectedCategory}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
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
                bg-black/85
                p-4
                backdrop-blur-md
              "
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="
                  relative
                  max-h-[90vh]
                  w-full
                  max-w-4xl
                  overflow-hidden
                  rounded-3xl
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
                    backdrop-blur-sm
                    transition-all
                    hover:bg-black
                    hover:scale-110
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
                    e.currentTarget.src = FALLBACK_IMAGE;
                  }}
                  className="
                    max-h-[60vh]
                    w-full
                    object-cover
                    sm:max-h-[65vh]
                  "
                />

                {/* Modal Content */}
                <div className="p-6 sm:p-8">
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
                      backgroundColor: PRIMARY,
                      color: "#FFFFFF",
                    }}
                  >
                    {activeItem.category}
                  </span>

                  <h3 className="mt-3 text-xl font-black text-gray-900 sm:text-2xl md:text-3xl">
                    {activeItem.title}
                  </h3>

                  {/* 50/50 Brand Accent */}
                  <div
                    className="mt-4 h-1 w-20 rounded-full"
                    style={{ background: SPLIT_GRADIENT }}
                  />
                </div>

                {/* Bottom Accent Bar */}
                <div
                  className="absolute bottom-0 left-0 h-1.5 w-full"
                  style={{ background: SPLIT_GRADIENT }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}