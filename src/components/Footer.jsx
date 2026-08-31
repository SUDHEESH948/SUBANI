
import logo from "../assets/subani.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Footer Content */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">

          {/* Company / Logo */}
          <div className="flex flex-col">
            <img
              src={logo}
              alt="SUBANI Logo"
              className="h-14 w-100 object-contain object-left"
            />
          </div>

          {/* IFTAR FOOD INDUSTRIES */}
          <div>
            <h3 className="font-semibold text-white">
              IFTAR FOOD INDUSTRIES
            </h3>

            <div className="mt-4 space-y-2 text-sm leading-6 text-gray-400">
              <p>Pump House Road Perunthallur PO VP Puram</p>
              <p>Tirur Malappuram (Dist)</p>
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

              <p>Tirur Road Chamravattom PO Tirur</p>
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
  © {new Date().getFullYear()} SUBANI. All rights reserved.{" "}
  <span className="mx-2">|</span>
  Designed & Developed by{" "}
  <a
    href="https://winshineinfotech.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-gray-400 transition hover:text-white"
  >
    Winshine Infotech
  </a>
</div>


      </div>
    </footer>
  );
}

export default Footer;

