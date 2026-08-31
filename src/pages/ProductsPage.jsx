const products = [
  {
    id: 1,
    name: "Premium Product",
    description: "High-quality product designed for reliability and performance.",
    price: "₹999",
  },
  {
    id: 2,
    name: "Professional Product",
    description: "A modern solution built with quality materials.",
    price: "₹1,499",
  },
  {
    id: 3,
    name: "Advanced Product",
    description: "Designed to provide excellent performance and durability.",
    price: "₹1,999",
  },
];

function Products() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our Products
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Explore Our Products
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover our collection of quality products designed
            for performance, reliability and value.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="flex h-56 items-center justify-center bg-gray-100">
                <span className="text-gray-400">
                  Product Image
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>

                  <button className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800">
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;