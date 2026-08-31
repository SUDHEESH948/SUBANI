function Gallery() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Our Gallery
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Explore Our Gallery
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Take a look at our products, projects and latest work.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <div className="h-64 overflow-hidden rounded-2xl bg-gray-100">
            <img
              src="/images/gallery-1.jpg"
              alt="Gallery 1"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="h-64 overflow-hidden rounded-2xl bg-gray-100">
            <img
              src="/images/gallery-2.jpg"
              alt="Gallery 2"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="h-64 overflow-hidden rounded-2xl bg-gray-100">
            <img
              src="/images/gallery-3.jpg"
              alt="Gallery 3"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="h-64 overflow-hidden rounded-2xl bg-gray-100">
            <img
              src="/images/gallery-4.jpg"
              alt="Gallery 4"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="h-64 overflow-hidden rounded-2xl bg-gray-100">
            <img
              src="/images/gallery-5.jpg"
              alt="Gallery 5"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="h-64 overflow-hidden rounded-2xl bg-gray-100">
            <img
              src="/images/gallery-6.jpg"
              alt="Gallery 6"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Gallery;