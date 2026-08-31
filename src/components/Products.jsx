function Products() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Our Products
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Explore Our Products
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover our collection of quality products.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="flex h-56 items-center justify-center bg-gray-100">
                <span className="text-gray-400">
                  Product Image
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Product {item}
                </h3>

                <p className="mt-3 text-gray-600">
                  High-quality product designed for reliability
                  and performance.
                </p>

                <button className="mt-5 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;