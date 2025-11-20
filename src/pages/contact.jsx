import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const whatsappNumber = "9166306480";

    const url = `https://wa.me/${whatsappNumber}?text=
      New%20Enquiry%20From%20Website%0A%0A
      *Name:*%20${encodeURIComponent(name)}%0A
      *Phone:*%20${encodeURIComponent(phone)}%0A
      *Message:*%20${encodeURIComponent(message)}
    `;

    window.open(url, "_blank");
  };

  return (
    <>
      {/* MODAL */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-gray-900 border border-white/20 rounded-2xl shadow-xl w-[90%] max-w-3xl p-5"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" /> Our Location
            </h3>

            <iframe
              title="modal-map"
              className="w-full h-[350px] rounded-xl border border-gray-700"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=27.692335,76.349705&z=15&output=embed"
            ></iframe>

            <button
              onClick={() => setOpen(false)}
              className="mt-5 w-full bg-yellow-500/20 hover:bg-yellow-500/30
                text-yellow-400 font-semibold p-3 rounded-xl border border-yellow-500/40 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="min-h-screen py-8 md:py-10 px-4 md:px-12 bg-gray-900 text-white flex items-center justify-center"
      >
        <div className="w-full 2xl:max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=" flex flex-col gap-2 md:gap-6"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-center">
              Contact <span className="text-yellow-400">Us</span>
            </h2>

            <p className="text-gray-300 text-xs md:text-sm leading-relaxed text-center">
              Reach out for any car service, repair, accidental restoration, painting, or detailing work.
            </p>

            <div className="flex flex-col gap-4 mt-2">

              <motion.a
                whileTap={{ scale: 0.95 }}
                href="tel:+919166306480"
                className="flex items-center gap-3 bg-yellow-500/20 border border-yellow-400/40 
                hover:bg-yellow-500/30 transition p-2  md:p-4 justify-center rounded-xl"
              >
                <FaPhoneAlt className="text-yellow-400 text-sm md:text-xl" />
                <span className="font-semibold">Call Now: +91 9166306480</span>
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919166306480?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20garage%20services."
                target="_blank"
                className="flex items-center gap-3 bg-green-500/20 border border-green-400/40 
                hover:bg-green-500/30 transition p-2 md:p-4 justify-center  rounded-xl"
              >
                <FaWhatsapp className="text-green-400  text-sm md:text-xl" />
                <span className="font-semibold">Chat on WhatsApp</span>
              </motion.a>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-3 mt-6">
              <FaMapMarkerAlt className="text-yellow-400 text-sm md:text-2xl" />
              <p className="text-gray-300 leading-relaxed text-sm">
                <span className="font-semibold text-white">Balaji Garage</span><br />
                Nearest Bansur P.G. College, Bypass Road, Bansur <br />
                Kotputli–Behror (Alwar) District,<br />
                Rajasthan — <span className="font-semibold">PIN 301402</span>
              </p>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="mt-4 bg-white/10 hover:bg-white/20 border border-white/30 
              rounded-xl p-4 text-yellow-400 font-semibold transition-all"
            >
              View Location on Map
            </motion.button>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-4 md:p-8"
          >
            <h3 className="text-3xl font-bold mb-6">
              Send <span className="text-yellow-400">Message</span>
            </h3>

            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-600 
                focus:border-yellow-400 outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-600 
                focus:border-yellow-400 outline-none"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-600 
                focus:border-yellow-400 outline-none"
              ></textarea>

              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 
                font-semibold p-4 rounded-xl border border-yellow-500/40 transition"
              >
                Submit Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>
    </>
  );
}
