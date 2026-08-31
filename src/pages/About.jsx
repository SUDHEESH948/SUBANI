
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

function About() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Hero / Introduction */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#ff3d57" }}
            >
              We are
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl"
              style={{ color: "#ff3d57" }}
            >
              Subani!
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="mt-6 text-xl font-semibold leading-8 text-gray-900"
            >
              ❝Elevate Your Shopping Experience with{" "}
              <span style={{ color: "#ff3d57" }}>Subani</span>❞
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-base leading-8 text-gray-600"
            >
              Welcome to Subani, your one-stop destination for all your
              grocery needs. At Subani, we pride ourselves on offering a
              wide range of high-quality products that cater to every
              customer's preferences and dietary requirements.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base leading-8 text-gray-600"
            >
              Whether you're looking for fresh produce, pantry essentials,
              or specialty items, our store is stocked with an extensive
              selection to meet your demands. With a commitment to
              exceptional customer service and a pleasant shopping
              experience, Subani aims to be your trusted partner in
              fulfilling your grocery needs.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base font-semibold leading-8"
              style={{ color: "#ff3d57" }}
            >
              Visit us today and discover the convenience and quality
              that Subani has to offer.
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <motion.img
              src="https://subani.in/site_assets/images/Other/iftar.png"
              alt="Iftar Food Industries"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Iftar Food Industries */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="mt-20 rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl sm:p-10"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#ff3d57" }}
          >
            Our Parent Company
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            IFTAR FOOD INDUSTRIES
          </h2>

          <p className="mt-5 text-base font-semibold leading-7 text-gray-800">
            PUMP HOUSE ROAD, PERUNTHALLUR PO, VP PURAM, TIRUR,
            MALAPPURAM (DIST), KERALA, 676102
          </p>

          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-600">
            Subani is a part of Iftar, a trusted name in the food industry.
            As a subsidiary of Iftar, Subani upholds the same commitment to
            quality, convenience, and exceptional customer service.
          </p>

          <p
            className="mt-6 text-xl font-bold"
            style={{ color: "#ff3d57" }}
          >
            Everything as fresh as they come.
          </p>
        </motion.div>

        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white px-6 py-12 text-center shadow-lg transition-shadow hover:shadow-xl"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#ff3d57" }}
          >
            About Subani
          </p>

          <motion.img
            src="https://subani.in/site_assets/images/Logo/logo.png"
            alt="Subani Logo"
            className="mt-5 h-20 w-auto object-contain"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
            At Subani, we pride ourselves on offering a wide range of
            high-quality products that cater to every customer's preferences
            and dietary requirements. Whether you're looking for fresh
            produce, pantry essentials, or specialty items, our store is
            stocked with an extensive selection to meet your demands.
          </p>
        </motion.div>

        {/* Find Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <h2
            className="text-3xl font-bold"
            style={{ color: "#ff3d57" }}
          >
            Find Us
          </h2>

          <p className="mt-4 text-gray-600">
            Visit Subani and experience quality, convenience, and freshness.
          </p>

          <motion.a
            href="tel:7510116699"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
            style={{ backgroundColor: "#ff3d57" }}
          >
            Call Subani
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

export default About;

