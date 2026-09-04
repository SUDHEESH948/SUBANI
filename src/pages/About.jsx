import { motion } from "framer-motion";
import { Phone, MapPin, Sparkles, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import brandLogo from "../assets/subani.png";

// Corporate Brand Constants
const PRIMARY = "#C8102E"; // Brand Red
const YELLOW = "#F4B400";  // Brand Yellow / Gold
const DARK = "#111827";

const SPLIT_GRADIENT = `linear-gradient(90deg, ${PRIMARY} 0%, ${PRIMARY} 50%, ${YELLOW} 50%, ${YELLOW} 100%)`;

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const PILLARS = [
  {
    icon: Sparkles,
    title: "Uncompromising Freshness",
    desc: "From farm to retail shelf, every batch is selected to maintain peak freshness and flavor.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Hygiene",
    desc: "Strict adherence to safety standards and hygienic handling at every stage of storage.",
  },
  {
    icon: Award,
    title: "Trusted Benchmark",
    desc: "Backed by the manufacturing standards and credibility of Iftar Food Industries.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    desc: "Dedicated to building long-term relationships with local households and bulk buyers alike.",
  },
];

export default function About() {
  return (
    <section className="min-h-screen bg-gray-50/50 px-6 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            HERO / INTRODUCTION (BALANCED 2-COLUMN GRID)
        ================================================= */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <span
                className="text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: PRIMARY }}
              >
                We Are
              </span>
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: YELLOW }}
              />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-2 text-5xl font-black tracking-tight sm:text-6xl"
              style={{ color: PRIMARY }}
            >
              Subani!
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="mt-6 text-xl font-bold leading-8 text-gray-900 sm:text-2xl"
            >
              &ldquo;Elevate Your Shopping Experience with{" "}
              <span style={{ color: PRIMARY }}>Subani</span>&rdquo;
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-base leading-8 text-gray-600"
            >
              Welcome to <strong>Subani</strong>, your one-stop destination for all your
              grocery and food provisions. At Subani, we pride ourselves on offering a
              wide range of high-quality products that cater to every customer&apos;s preferences
              and dietary requirements.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base leading-8 text-gray-600"
            >
              Whether you&apos;re looking for fresh ingredients, pantry essentials, or
              specialty items, our facilities are stocked with an extensive selection
              to meet your demands. Backed by Iftar Food Industries, Subani upholds a
              steadfast commitment to unmatched quality and service.
            </motion.p>

            {/* Split Gradient Bar */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 h-1.5 w-28 rounded-full"
              style={{ background: SPLIT_GRADIENT }}
            />
          </motion.div>

          {/* Visual Showcase (Second Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="absolute -inset-2 rounded-3xl opacity-30 blur-2xl"
              style={{
                background: `linear-gradient(135deg, ${PRIMARY}, ${YELLOW})`,
              }}
            />

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-2xl">
              <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
                  alt="Subani Fresh Market"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Glassmorphism Floating Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/30 bg-black/60 p-4 text-white backdrop-blur-md"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-yellow-400">
                        Heritage & Freshness
                      </p>
                      <p className="text-sm font-extrabold text-white">
                        Everyday Quality You Trust
                      </p>
                    </div>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-black"
                    style={{ backgroundColor: YELLOW, color: DARK }}
                  >
                    100% Pure
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            CORE VALUES / COMMITMENTS (4 PILLARS)
        ================================================= */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: PRIMARY }}
            >
              Our Core Commitments
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Customers Rely on <span style={{ color: PRIMARY }}>Subani</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-xl"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${PRIMARY}12`, color: PRIMARY }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-gray-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* =================================================
            PARENT COMPANY (IFTAR FOOD INDUSTRIES)
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="group relative mt-20 overflow-hidden rounded-3xl border border-gray-200/90 bg-white p-8 shadow-lg transition-all hover:shadow-2xl sm:p-12"
        >
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: PRIMARY }}
              >
                Our Parent Company
              </span>

              <h2 className="mt-2 text-3xl font-black text-gray-900 sm:text-4xl">
                IFTAR FOOD INDUSTRIES
              </h2>

              <p className="mt-4 flex items-start gap-2 text-sm font-semibold leading-6 text-gray-800">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: PRIMARY }}
                />
                <span>
                  Pump House Road, Perunthallur PO, VP Puram, Tirur,
                  Malappuram (Dist), Kerala, 676102
                </span>
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Subani is a proud subsidiary of <strong>Iftar</strong>, a widely
                trusted name in food manufacturing and supply. Subani upholds the
                exact same benchmarks of stringent quality control, hygienic
                storage, and consumer satisfaction.
              </p>

              <p
                className="mt-6 text-xl font-bold tracking-tight"
                style={{ color: PRIMARY }}
              >
                &ldquo;Everything as fresh as they come.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-inner"
              >
                <img
                  src="https://subani.in/site_assets/images/Other/iftar.png"
                  alt="Iftar Food Industries"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80";
                  }}
                  className="h-48 w-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105 sm:h-56"
                />
              </motion.div>
            </div>
          </div>

          {/* 50/50 Split Bottom Line */}
          <div
            className="absolute bottom-0 left-0 h-1.5 w-full"
            style={{ background: SPLIT_GRADIENT }}
          />
        </motion.div>

        {/* =================================================
            BRAND HIGHLIGHT SECTION
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-gray-200/80 bg-white px-8 py-14 text-center shadow-lg transition-all hover:shadow-2xl"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: PRIMARY }}
          >
            About Subani
          </span>

          <motion.img
            src={brandLogo}
            alt="Subani Logo"
            className="mt-6 h-16 w-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
            At Subani, we pride ourselves on offering a wide selection of
            premium items catering to modern culinary needs. From everyday essentials
            to handpicked delicacies, we guarantee uncompromised freshness and
            honest pricing across our network.
          </p>
        </motion.div>

        {/* =================================================
            CALL TO ACTION / FIND US
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ color: PRIMARY }}
          >
            Find Us
          </h2>

          <p className="mt-3 text-base text-gray-600">
            Visit Subani today and experience quality, convenience, and absolute freshness.
          </p>

          <motion.a
            href="tel:7510116699"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:shadow-xl"
            style={{
              backgroundColor: PRIMARY,
              boxShadow: `0 8px 20px -4px rgba(200, 16, 46, 0.45)`,
            }}
          >
            <Phone className="h-4 w-4" style={{ color: YELLOW }} />
            <span>Call Subani: +91 75101 16699</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
