
import { motion } from "framer-motion";
import heroImage from "../assets/image.png";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gray-950">
   

      {/* Soft Dark Overlay - Reduced Intensity */}
      <div
        className="absolute inset-0 bg-black/45"
        aria-hidden="true"
      />

      {/* Brand Yellow Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#ffca00]/35 via-[#ffca00]/15 to-transparent"
        aria-hidden="true"
      />

      {/* Left Readability Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-left"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-0.5 w-8 rounded-full bg-[#ffca00]" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ffca00]">
              Welcome to Subani
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Quality Products.
            <span className="block text-[#ffca00]">
              Trusted Solutions.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl"
          >
            Explore our industrial-grade catalog engineered to deliver
            unmatched reliability, durability, and operational value.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {/* Primary Button */}
            <motion.a
              href="/products"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ffca00] px-7 py-3.5 text-sm font-semibold text-gray-950 shadow-lg shadow-yellow-500/20 transition-all hover:bg-[#ffd633] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffca00] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Explore Products

              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-gray-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Brand Line */}
     
    </section>
  );
}

export default Hero;
