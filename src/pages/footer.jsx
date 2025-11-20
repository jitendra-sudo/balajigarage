import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-14 pb-8 border-t border-white/10">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Balaji <span className="text-yellow-400">Garage</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Trusted multi-brand car repair & service centre in Bansur.
            Skilled mechanics, premium tools, and guaranteed quality work.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-5 text-xl">
            <a href="#" className="hover:text-yellow-400 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919460468419"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="hover:text-yellow-400 transition cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">About Us</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Our Services</li>
            {/* <li className="hover:text-yellow-400 transition cursor-pointer">Gallery</li> */}
            <li className="hover:text-yellow-400 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>

          <div className="flex items-start gap-3 mb-3">
            <FaPhoneAlt className="text-yellow-400 mt-1" />
            <p className="text-sm">
              <span className="text-white font-semibold">Phone:</span> +91 9460468419
            </p>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <FaWhatsapp className="text-green-400 mt-1" />
            <p className="text-sm">
              <span className="text-white font-semibold">WhatsApp:</span> +91 9460468419
            </p>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <FaEnvelope className="text-yellow-400 mt-1" />
            <p className="text-sm">
              <span className="text-white font-semibold">Email:</span> support@balajigarage.com
            </p>
          </div>
        </div>

        {/* ADDRESS */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Our Location</h3>

          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
            <p className="text-sm leading-relaxed">
              Balaji Garage <br />
              Near Bansur P.G. College,<br />
              Bypass Road, Bansur,<br />
              Kotputli–Behror (Alwar), Rajasthan <br />
              <span className="text-yellow-400 font-semibold">PIN 301402</span>
            </p>
          </div>

          <a
            href="https://www.google.com/maps?q=27.692335,76.349705"
            target="_blank"
            className="mt-4 inline-block text-sm text-yellow-400 hover:underline"
          >
            View on Google Maps →
          </a>
        </div>

      </motion.div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Balaji Garage — All Rights Reserved.
      </div>
    </footer>
  );
}
