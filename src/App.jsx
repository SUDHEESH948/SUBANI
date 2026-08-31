import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;