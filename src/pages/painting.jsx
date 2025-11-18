import React from "react";
import { motion } from "framer-motion";
import { FaPaintRoller, FaSprayCan, FaPalette } from "react-icons/fa";

export default function PaintingSection() {
  const services = [
    {
      title: "Full Body Painting",
      desc: "Premium multi-layer paint, factory finish, and complete color restoration.",
      icon: <FaPaintRoller size={28} className="text-yellow-400" />,
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Panel Painting & Touch-ups",
      desc: "Scratch removal, dent repair painting, and precise panel color matching.",
      icon: <FaSprayCan size={28} className="text-yellow-400" />,
      image:
        "https://images.pexels.com/photos/3730413/pexels-photo-3730413.jpeg?auto=compress&cs=tinysrgb&w=1000",
    },
    {
      title: "Custom Paint & Finishes",
      desc: "Matte, glossy, metallic, dual-tone, and special custom paint projects.",
      icon: <FaPalette size={28} className="text-yellow-400" />,
      image:
        "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Car <span className="text-yellow-400">Painting Services</span>
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            High-quality painting with professional tools for a perfect finish
            and long-lasting shine.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700"
            >
              {/* Image */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4">
                  {s.icon}
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>

                <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                  {s.desc}
                </p>

                <button className="mt-5 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
