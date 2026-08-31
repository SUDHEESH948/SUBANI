function Contact() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-600">
          Get in touch with us. We would love to hear from you.
        </p>

        <form className="mt-10 max-w-xl space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <button
            type="submit"
            className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;