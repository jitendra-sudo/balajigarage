import React from "react";
import { motion } from "framer-motion";
import { FaPaintRoller, FaSprayCan } from "react-icons/fa";

export default function PaintingSection() {
  return (
    <section className="bg-gray-900 text-white py-10 px-4 md:px-16">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://cdn.pixabay.com/photo/2022/12/03/23/02/car-7633490_1280.jpg"
            alt="Car Painting Premium"
            className="rounded-3xl shadow-2xl border border-white/10"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/60 via-transparent to-gray-900/10 rounded-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Premium Car <span className="text-yellow-400">Painting</span>
          </h2>

          <p className="text-gray-300 text-sm lg:text-lg leading-relaxed">
            Transform your vehicle with our world-class painting and detailing
            services. We use high-quality paint, precision tools, and factory-level
            finishing techniques to restore your car’s original shine.
          </p>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaPaintRoller className="text-yellow-400 text-3xl mt-1" />
              <div>
                <h4 className="text-md md:text-xl font-semibold">Full Body Painting</h4>
                <p className="text-gray-400 text-sm md:text-base">
                  Factory-grade finish using advanced spray booths and premium paint.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaSprayCan className="text-yellow-400 text-3xl mt-1" />
              <div>
                <h4 className="text-md md:text-xl font-semibold">Scratch & Dent Painting</h4>
                <p className="text-gray-400 text-sm md:text-base">
                  Spot painting & color matching to make your car look brand new.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2 md:py-3 bg-yellow-400 hover:text-yellow-500 text-black rounded-xl font-semibold shadow-lg mt-4"
          >
            Book Painting Service
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
