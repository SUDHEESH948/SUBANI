
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Utensils,
} from "lucide-react";

// =========================================================
// CORPORATE BRAND COLORS
// =========================================================

const PRIMARY = "#C8102E"; // Corporate Red
const ACCENT = "#F4B400";  // Corporate Yellow
const DARK = "#111827";

// =========================================================
// COMPANY INFORMATION
// =========================================================

const COMPANY_NAME = "IFTAR FOOD INDUSTRIES";

const COMPANY_ADDRESS = [
  "PUMP HOUSE ROAD",
  "PERUNTHALLUR PO",
  "VP PURAM",
  "TIRUR",
  "MALAPPURAM (DIST)",
  "KERALA - 676102",
];

// =========================================================
// PRODUCT DATA
// Replace the images/names with your actual products.
// =========================================================

export const PRODUCTS = [
  {
    id: 1,
    name: "Premium Food Products",
    category: "Food Products",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
    description:
      "High-quality food products prepared with carefully selected ingredients to deliver excellent taste, freshness, and consistency.",
    specs: [
      "Premium Quality",
      "Fresh Products",
      "Quality Checked",
    ],
    price: "Available on Request",
    href: "/products",
  },

  {
    id: 2,
    name: "Fresh Ingredients",
    category: "Ingredients",
    image:
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1000&q=80",
    description:
      "Carefully sourced ingredients selected to maintain excellent quality, freshness, taste, and consistency.",
    specs: [
      "Fresh Ingredients",
      "Quality Sourced",
      "Reliable Supply",
    ],
    price: "Available on Request",
    href: "/products",
  },

  {
    id: 3,
    name: "Specialty Food Range",
    category: "Specialty Products",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80",
    description:
      "A carefully developed range of food products created with a strong focus on quality, taste, consistency, and customer satisfaction.",
    specs: [
      "Quality Focused",
      "Great Taste",
      "Trusted Quality",
    ],
    price: "Available on Request",
    href: "/products",
  },
];

// =========================================================
// FALLBACK IMAGE
// =========================================================

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80";

// =========================================================
// PRODUCT CARD
// =========================================================

export function ProductCard({ product }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className="
        group
        flex
        h-full
        flex-col
        justify-between
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-red-200
        hover:shadow-xl
      "
    >

      {/* =================================================
          CARD CONTENT
      ================================================= */}

      <div>

        {/* =================================================
            PRODUCT IMAGE
        ================================================= */}

        <div className="relative h-60 w-full overflow-hidden bg-gray-100">

          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
            loading="lazy"
          />

          {/* Dark Image Overlay */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
            "
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.50), transparent 60%)",
            }}
          />

          {/* =================================================
              CATEGORY BADGE
          ================================================= */}

          <span
            className="
              absolute
              left-4
              top-4
              rounded-lg
              px-3
              py-1.5
              text-xs
              font-bold
              shadow-sm
              backdrop-blur-md
            "
            style={{
              backgroundColor:
                "rgba(255,255,255,0.95)",
              color: PRIMARY,
            }}
          >
            {product.category}
          </span>

          {/* Yellow Accent */}

          <span
            className="
              absolute
              bottom-4
              left-4
              h-1
              w-12
              rounded-full
            "
            style={{
              backgroundColor: ACCENT,
            }}
          />
        </div>

        {/* =================================================
            PRODUCT CONTENT
        ================================================= */}

        <div className="p-6 pb-0">

          {/* Product Name */}

          <h3
            className="
              text-lg
              font-bold
              tracking-tight
              text-gray-900
              transition-colors
              duration-300
              group-hover:text-red-700
            "
          >
            {product.name}
          </h3>

          {/* Description */}

          <p
            className="
              mt-2
              text-sm
              leading-relaxed
              text-gray-500
            "
          >
            {product.description}
          </p>

          {/* =================================================
              PRODUCT SPECIFICATIONS
          ================================================= */}

          <ul
            className="
              mt-5
              flex
              list-none
              flex-wrap
              gap-2
              p-0
            "
          >
            {product.specs.map((spec) => (
              <li
                key={spec}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-md
                  bg-gray-50
                  px-2.5
                  py-1.5
                  text-[11px]
                  font-semibold
                  text-gray-700
                "
              >
                <Check
                  className="h-3 w-3 shrink-0"
                  strokeWidth={2.5}
                  style={{
                    color: PRIMARY,
                  }}
                  aria-hidden="true"
                />

                <span>
                  {spec}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* =================================================
          CARD FOOTER
      ================================================= */}

      <div
        className="
          mt-6
          flex
          items-center
          justify-between
          border-t
          border-gray-100
          px-6
          py-4
        "
      >

        {/* Pricing */}

        <div>
          <span
            className="
              block
              text-[10px]
              font-semibold
              uppercase
              tracking-wider
              text-gray-400
            "
          >
            Pricing
          </span>

          <span
            className="
              text-sm
              font-extrabold
              text-gray-900
            "
          >
            {product.price}
          </span>
        </div>

        {/* View Details */}

        <motion.a
          href={product.href}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            inline-flex
            items-center
            gap-1.5
            rounded-lg
            px-4
            py-2.5
            text-xs
            font-bold
            text-white
            transition-all
            duration-300
            hover:shadow-lg
          "
          style={{
            backgroundColor: PRIMARY,
          }}
        >
          <span>
            View Details
          </span>

          <ArrowUpRight
            className="h-3.5 w-3.5"
            aria-hidden="true"
          />
        </motion.a>
      </div>
    </motion.article>
  );
}

// =========================================================
// PRODUCTS SECTION
// =========================================================

export default function Products() {

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // =======================================================
  // CATEGORY LIST
  // =======================================================

  const categories = [
    "All",
    ...Array.from(
      new Set(
        PRODUCTS.map(
          (product) => product.category
        )
      )
    ),
  ];

  // =======================================================
  // FILTER PRODUCTS
  // =======================================================

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter(
          (product) =>
            product.category ===
            selectedCategory
        );

  // =======================================================
  // RETURN
  // =======================================================

  return (
    <section
      className="
        min-h-screen
        bg-gray-50
        px-6
        py-20
        lg:px-8
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <header
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >

          {/* Company Badge */}

          <motion.span
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-4
              py-1.5
              text-xs
              font-bold
              uppercase
              tracking-wider
            "
            style={{
              borderColor: `${ACCENT}55`,
              backgroundColor: `${ACCENT}12`,
              color: PRIMARY,
            }}
          >

            <Utensils
              className="h-3.5 w-3.5"
              style={{
                color: ACCENT,
              }}
              aria-hidden="true"
            />

            {COMPANY_NAME}

          </motion.span>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              mt-5
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
              lg:text-5xl
            "
          >
            Our{" "}

            <span
              style={{
                color: PRIMARY,
              }}
            >
              Products
            </span>
          </motion.h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-gray-600
            "
          >
            Discover quality food products from{" "}

            <strong
              style={{
                color: DARK,
              }}
            >
              {COMPANY_NAME}
            </strong>

            , committed to quality, freshness,
            consistency, and customer satisfaction.
          </motion.p>

          {/* =================================================
              CATEGORY FILTER
          ================================================= */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-2
            "
          >

            {categories.map((category) => {

              const isActive =
                selectedCategory ===
                category;

              return (
                <motion.button
                  key={category}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(
                      category
                    )
                  }
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    rounded-full
                    border
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    transition-all
                    duration-200
                  "
                  style={{
                    backgroundColor:
                      isActive
                        ? PRIMARY
                        : "#FFFFFF",

                    borderColor:
                      isActive
                        ? PRIMARY
                        : "#E5E7EB",

                    color:
                      isActive
                        ? "#FFFFFF"
                        : DARK,
                  }}
                >

                  {category}

                  {isActive && (
                    <span
                      className="
                        ml-2
                        inline-block
                        h-1.5
                        w-1.5
                        rounded-full
                        align-middle
                      "
                      style={{
                        backgroundColor:
                          ACCENT,
                      }}
                    />
                  )}

                </motion.button>
              );
            })}

          </div>
        </header>

        {/* =================================================
            PRODUCT GRID
        ================================================= */}

        <div
          className="
            mt-14
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}

        </div>

       
        

      </div>
    </section>
  );
}

