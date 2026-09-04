import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div {...pageTransition}>
              <About />
            </motion.div>
          }
        />
        <Route
          path="/products"
          element={
            <motion.div {...pageTransition}>
              <ProductsPage />
            </motion.div>
          }
        />
        <Route
          path="/gallery"
          element={
            <motion.div {...pageTransition}>
              <Gallery />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
