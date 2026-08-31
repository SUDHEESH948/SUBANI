import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Building2,
  Clock,
  CheckCircle2,
} from "lucide-react";

// =========================================================
// CORPORATE BRAND CONSTANTS
// =========================================================

const PRIMARY = "#C8102E"; // Corporate Red
const ACCENT = "#F4B400";  // Corporate Yellow
const DARK = "#111827";

const COMPANY_NAME = "IFTAR FOOD INDUSTRIES";
const COMPANY_EMAIL = "contact@iftarfoodindustries.com"; // Replace with your corporate email
const PHONE_NUMBER = "+919876543210";                   // Replace with primary calling line
const WHATSAPP_NUMBER = "919876543210";                 // Replace with verified WhatsApp number (no '+' or '-')

const COMPANY_ADDRESS = [
  "PUMP HOUSE ROAD",
  "PERUNTHALLUR PO",
  "VP PURAM",
  "TIRUR",
  "MALAPPURAM (DIST)",
  "KERALA - 676102",
];

const ENQUIRY_TYPES = [
  "General Inquiry",
  "Bulk / Wholesale Order",
  "Product Distribution",
  "Custom Requirements",
];

// =========================================================
// CONTACT COMPONENT
// =========================================================

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: ENQUIRY_TYPES[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `
*New Enquiry - ${COMPANY_NAME}*
------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone || "Not provided"}
*Email:* ${formData.email}
*Type:* ${formData.enquiryType}

*Message:*
${formData.message}
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
            style={{
              borderColor: `${ACCENT}66`,
              backgroundColor: `${ACCENT}15`,
              color: PRIMARY,
            }}
          >
            <MessageCircle className="h-4 w-4" style={{ color: ACCENT }} />
            Connect with {COMPANY_NAME}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl"
          >
            Get In <span style={{ color: PRIMARY }}>Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600"
          >
            Have a question, bulk order requirement, or distributorship proposal?
            Our team is here to assist you promptly.
          </motion.p>

          <div
            className="mx-auto mt-6 h-1 w-16 rounded-full"
            style={{ backgroundColor: ACCENT }}
          />
        </div>

        {/* =================================================
            MAIN CONTENT (CARDS)
        ================================================= */}
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Left: Company Details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between rounded-2xl bg-gray-900 p-8 text-white shadow-lg lg:col-span-2"
          >
            <div>
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl shadow-md"
                style={{ backgroundColor: PRIMARY }}
              >
                <Building2 className="h-7 w-7 text-white" />
              </div>

              <h2 className="mt-6 text-2xl font-bold tracking-tight">
                {COMPANY_NAME}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-300">
                Supplying premium quality food products with consistent freshness,
                hygiene standards, and reliable supply chains across Kerala and beyond.
              </p>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${ACCENT}25`, color: ACCENT }}
                  >
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Plant & Office
                    </p>
                    <p className="mt-1 text-sm leading-6 text-gray-300">
                      {COMPANY_ADDRESS.join(", ")}
                    </p>
                  </div>
                </div>

                {/* Direct Phone / Email */}
                <div className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${ACCENT}25`, color: ACCENT }}
                  >
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Direct Support
                    </p>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="mt-1 block text-sm font-semibold text-white hover:underline"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                {/* Operating Schedule */}
                <div className="flex gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${ACCENT}25`, color: ACCENT }}
                  >
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Working Hours
                    </p>
                    <p className="mt-1 text-sm text-gray-300">
                      Mon - Sat: 9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold text-white shadow-lg transition-all"
              style={{ backgroundColor: PRIMARY }}
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm lg:col-span-3"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Send an Enquiry
              </h2>
              <p className="mt-1.5 text-sm text-gray-500">
                Complete the details below to dispatch your message directly to our sales and operations team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Mohammed Rasheed"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-600 focus:bg-white"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-600 focus:bg-white"
                  />
                </div>

                {/* Enquiry Type Dropdown */}
                <div>
                  <label htmlFor="enquiryType" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-600 focus:bg-white"
                  >
                    {ENQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-700">
                  Your Message / Specifications <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the quantity, delivery location, or questions you have..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-600 focus:bg-white"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg disabled:opacity-75"
                style={{ backgroundColor: PRIMARY }}
              >
                <Send className="h-4 w-4" />
                Submit via WhatsApp
              </motion.button>

              <p className="flex items-center justify-center gap-1.5 text-center text-xs text-gray-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                Direct routing with pre-formatted inquiry text.
              </p>
            </form>
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM LOCATION & FAST LINKS STRIP
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${PRIMARY}15`, color: PRIMARY }}
            >
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">Location</p>
              <p className="mt-0.5 text-sm font-bold text-gray-900">Tirur, Malappuram, Kerala</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${ACCENT}20`, color: "#B78100" }}
            >
              <Mail className="h-5 w-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold uppercase text-gray-400">Email Inquiry</p>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="mt-0.5 block truncate text-sm font-bold text-gray-900 hover:underline"
              >
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>

          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:col-span-2 lg:col-span-1"
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${PRIMARY}15`, color: PRIMARY }}
            >
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-gray-400">Direct Message</p>
              <p className="mt-0.5 text-sm font-bold" style={{ color: PRIMARY }}>
                Chat with Representatives
              </p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}