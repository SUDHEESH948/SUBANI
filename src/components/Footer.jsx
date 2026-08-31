
import logo from "../assets/subani.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Company / Logo */}
          <div>
            <img
              src={logo}
              alt="SUBANI Logo"
              className="h-14 w-auto object-contain"
            />

            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a href="/" className="transition hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="transition hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="/products" className="transition hover:text-white">
                  Products
                </a>
              </li>

              <li>
                <a href="/gallery" className="transition hover:text-white">
                  Gallery
                </a>
              </li>

              <li>
                <a href="/contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* IFTAR FOOD INDUSTRIES */}
          <div>
            <h3 className="font-semibold text-white">
              IFTAR FOOD INDUSTRIES
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-6 text-gray-400">
              <p>Pump House Road</p>
              <p>Perunthallur PO</p>
              <p>VP Puram</p>
              <p>Tirur</p>
              <p>Malappuram (Dist)</p>
              <p>Kerala - 676102</p>

              <p className="pt-2">
                Phone:{" "}
                <a
                  href="tel:7510116688"
                  className="transition hover:text-white"
                >
                  7510116688
                </a>
              </p>
            </div>
          </div>

          {/* SUBANI / KOOLATH SUPERMARKET */}
          <div>
            <h3 className="font-semibold text-white">
              SUBANI
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-6 text-gray-400">
              <p className="font-medium text-gray-300">
                KOOLATH SUPERMARKET
              </p>

              <p>Tirur Road</p>
              <p>Chamravattom PO</p>
              <p>Tirur</p>
              <p>Malappuram Dist</p>
              <p>Kerala - 676</p>

              <p className="pt-2">
                Phone:{" "}
                <a
                  href="tel:7510116699"
                  className="transition hover:text-white"
                >
                  7510116699
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SUBANI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

