
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Info,
  ShoppingBag,
  Image as GalleryIcon,
  Phone,
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/image.png";

// =========================================================
// CORPORATE BRAND COLORS
// =========================================================

const PRIMARY = "#C8102E"; // Corporate Red
const ACCENT = "#F4B400";  // Corporate Yellow
const DARK = "#111827";    // Charcoal
const MUTED = "#6B7280";
const LIGHT = "#F8FAFC";

// =========================================================
// NAVIGATION LINKS
// =========================================================

const NAV_LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Products", href: "/products", icon: ShoppingBag },
  { label: "Gallery", href: "/gallery", icon: GalleryIcon },
  { label: "Contact", href: "/contact", icon: Phone },
];

// =========================================================
// NAVIGATION COMPONENT
// =========================================================

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* ===================================================
            LOGO
        =================================================== */}

        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="SUBANI Logo"
            className="
              block
              h-11
              w-auto
              max-w-[165px]
              object-contain
              transition-transform
              duration-300
              group-hover:scale-[1.03]
            "
          />
        </NavLink>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <div className="hidden md:flex md:items-center">

          <nav
            className="
              flex
              items-center
              gap-1
              rounded-full
              border
              border-gray-200
              bg-gray-50
              p-1.5
            "
          >

            {NAV_LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-4
                    py-2.5
                    text-sm
                    transition-all
                    duration-200
                  "
                >
                  {({ isActive }) => (
                    <>
                      {/* Active Background */}

                      {isActive && (
                        <motion.div
                          layoutId="activeNavBackground"
                          className="
                            absolute
                            inset-0
                            rounded-full
                            bg-white
                            shadow-sm
                          "
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Icon */}

                      <motion.div
                        animate={{
                          scale: isActive ? 1 : 0.95,
                        }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10"
                        style={{
                          color: isActive ? PRIMARY : MUTED,
                        }}
                      >
                        <Icon
                          size={17}
                          strokeWidth={isActive ? 2.4 : 1.9}
                        />
                      </motion.div>

                      {/* Label */}

                      <span
                        className="
                          relative
                          z-10
                          whitespace-nowrap
                        "
                        style={{
                          color: isActive ? PRIMARY : DARK,
                          fontWeight: isActive ? 600 : 500,
                        }}
                      >
                        {link.label}
                      </span>

                      {/* Yellow Active Indicator */}

                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="
                            relative
                            z-10
                            h-1.5
                            w-1.5
                            rounded-full
                          "
                          style={{
                            backgroundColor: ACCENT,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 25,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}

          </nav>
        </div>

        {/* ===================================================
            DESKTOP CTA
        =================================================== */}

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block"
        >
          <NavLink
            to="/contact"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:shadow-md
            "
            style={{
              backgroundColor: PRIMARY,
            }}
          >
            Get Started

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
              "
              style={{
                backgroundColor: ACCENT,
              }}
            />
          </NavLink>
        </motion.div>

        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-gray-50
            transition-all
            duration-200
            hover:bg-gray-100
            md:hidden
          "
          style={{
            color: PRIMARY,
          }}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={23} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={23} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="
              overflow-hidden
              border-t
              border-gray-100
              bg-white
              md:hidden
            "
          >
            <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">

              {/* Mobile Links */}

              <div className="flex flex-col gap-1.5">

                {NAV_LINKS.map((link) => {
                  const Icon = link.icon;

                  return (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="
                        rounded-xl
                        px-3
                        py-2
                        transition-colors
                        duration-200
                      "
                    >
                      {({ isActive }) => (
                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >

                          {/* Icon Box */}

                          <div
                            className="
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              transition-all
                            "
                            style={{
                              backgroundColor: isActive
                                ? PRIMARY
                                : `${PRIMARY}0D`,
                              color: isActive
                                ? "#FFFFFF"
                                : PRIMARY,
                            }}
                          >
                            <Icon
                              size={18}
                              strokeWidth={isActive ? 2.4 : 2}
                            />
                          </div>

                          {/* Label */}

                          <span
                            className="text-sm"
                            style={{
                              color: isActive ? PRIMARY : DARK,
                              fontWeight: isActive ? 600 : 500,
                            }}
                          >
                            {link.label}
                          </span>

                          {/* Active Indicator */}

                          {isActive && (
                            <span
                              className="
                                ml-auto
                                h-2
                                w-2
                                rounded-full
                              "
                              style={{
                                backgroundColor: ACCENT,
                              }}
                            />
                          )}
                        </div>
                      )}
                    </NavLink>
                  );
                })}

              </div>

              {/* =================================================
                  MOBILE CTA
              ================================================= */}

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                "
                style={{
                  backgroundColor: PRIMARY,
                }}
              >
                Get Started

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                  "
                  style={{
                    backgroundColor: ACCENT,
                  }}
                />
              </NavLink>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

export default Navigation;

