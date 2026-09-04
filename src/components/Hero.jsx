import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

// Corporate Brand Colors
const PRIMARY = "#C8102E"; // Corporate Red
const ACCENT = "#F4B400";  // Corporate Yellow / Gold

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
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

const floatCardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.25,
    },
  },
};

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [8, -8]);
  const rotateY = useTransform(mouseX, [-150, 150], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden bg-gray-950 py-16 lg:py-24">
      {/* Dynamic Ambient Background Glows */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-30 blur-[100px] animate-pulse-glow"
        style={{ backgroundColor: PRIMARY }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full opacity-25 blur-[120px] animate-pulse-glow"
        style={{ backgroundColor: ACCENT }}
        aria-hidden="true"
      />

      {/* Grid Mesh Subtle Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline & CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left lg:col-span-7"
          >
            {/* Eyebrow Pill */}
            <motion.div
              variants={itemVariants}
              className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
            >
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{ backgroundColor: ACCENT }}
              />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                Welcome to Subani
              </span>
              <span className="text-xs text-white/40">•</span>
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: ACCENT }}
              >
                Iftar Food Industries
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Quality Products.
              <span
                className="block mt-1 font-black"
                style={{ color: PRIMARY }}
              >
                Trusted Solutions.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg"
            >
              Explore our industrial-grade catalog and retail provisions engineered
              to deliver unmatched reliability, freshness, hygiene standards, and
              long-term operational value.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Primary Button */}
              <Link to="/products">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold text-gray-950 shadow-lg shadow-yellow-500/20 transition-all hover:shadow-xl focus:outline-none"
                  style={{ backgroundColor: ACCENT }}
                >
                  <span>Explore Products</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </motion.div>
              </Link>

              {/* Secondary Button */}
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-gray-950 focus:outline-none"
                >
                  Contact Us
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 max-w-lg"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                <span className="text-xs font-semibold text-gray-300">
                  100% Quality Checked
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0" style={{ color: PRIMARY }} />
                <span className="text-xs font-semibold text-gray-300">
                  Fresh Ingredients
                </span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                <span className="text-xs font-semibold text-gray-300">
                  Trusted Partner
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Interactive Showcase Card */}
          <div className="lg:col-span-5">
            <motion.div
              variants={floatCardVariants}
              initial="hidden"
              animate="visible"
              style={{ perspective: 1000 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Glow Behind Card */}
              <div
                className="absolute -inset-1.5 rounded-3xl opacity-40 blur-xl transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                }}
              />

              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative overflow-hidden rounded-3xl border border-white/15 bg-gray-900/90 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/30"
              >
                {/* Showcase Image */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80"
                    alt="Subani Fresh Food Products"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(17,24,39,0.95) 0%, rgba(17,24,39,0.2) 60%, transparent 100%)",
                    }}
                  />

                  {/* Top Floating Glass Badge */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 left-4 flex items-center gap-2 rounded-xl border border-white/20 bg-black/60 px-3.5 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-md"
                  >
                    <span
                      className="flex h-2 w-2 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <Sparkles className="h-3.5 w-3.5" style={{ color: ACCENT }} />
                    <span>Pure & Fresh Arrival</span>
                  </motion.div>

                  {/* Bottom Floating Glass Badge */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-6 right-4 flex items-center gap-2 rounded-xl border border-white/20 bg-black/60 px-3.5 py-2 text-xs font-bold text-white shadow-xl backdrop-blur-md"
                  >
                    <CheckCircle2 className="h-4 w-4" style={{ color: "#22c55e" }} />
                    <span>Strict Standards Passed</span>
                  </motion.div>
                </div>

                {/* Bottom Strip of Card */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        IFTAR FOOD INDUSTRIES
                      </p>
                      <h4 className="mt-1 text-lg font-extrabold text-white">
                        Premium Food & Ingredients
                      </h4>
                    </div>
                    <Link
                      to="/products"
                      className="flex h-10 w-10 items-center justify-center rounded-full text-gray-950 transition-transform hover:scale-110"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Split Bottom Accent */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${PRIMARY} 50%, ${ACCENT} 50%)`,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
