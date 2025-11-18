import React from "react";
import { motion } from "framer-motion";
import { FaPaintRoller, FaTools, FaCarCrash, FaCogs, FaBroom, FaFan } from "react-icons/fa";

export default function Services() {
    const services = [
        {
            title: "General Service",
            desc: "Complete multi-point inspection, oil change, filters, brake check & full car health report.",
            icon: <FaTools className="text-yellow-400 text-[20px] md:text-[32px]" />,
        },
        {
            title: "Mechanical Repairs",
            desc: "Engine repair, clutch work, suspension, steering & all mechanical fault fixing.",
            icon: <FaCogs className="text-yellow-400 text-[20px] md:text-[32px]" />,
        },
        {
            title: "Accidental Repair",
            desc: "Full body restoration, dent removal, insurance claim assistance & complete rebuild.",
            icon: <FaCarCrash className="text-yellow-400 text-[20px] md:text-[32px]" />,
        },
        {
            title: "Car Painting",
            desc: "Premium paint jobs, panel painting, scratch removal & body refinishing with OEM colors.",
            icon: <FaPaintRoller className="text-yellow-400 text-[20px] md:text-[32px]" />,
        },
        {
            title: "Deep Cleaning",
            desc: "Interior deep clean, exterior wash, polishing, detailing & ceramic coating protection.",
            icon: <FaBroom className="text-yellow-400 text-[20px] md:text-[32px]" />,
        },
        {
            title: "AC Service",
            desc: "Cooling issue fix, AC gas refill, compressor check & cabin filter replacement.",
            icon: <FaFan className="text-yellow-400 text-[20px] md:text-[32px]" />,
        },
    ];

    return (
        <section id="services" className="bg-gray-900 text-white py-10  px-4 md:px-16">
            <div className="max-w-[1440px] mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-7 md:mb-14"
                >
                    <h2 className="text-3xl lg:text-5xl font-bold">
                        Our <span className="text-yellow-400">Services</span>
                    </h2>
                    <p className="text-gray-300 mt-3 text-sm lg:text-lg max-w-2xl mx-auto">
                        Premium, reliable, and high-quality garage services powered by expert technicians.
                    </p>
                </motion.div>

                {/* Service Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.20 },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                            }}
                            whileHover={{ scale: 1.04 }}
                            className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-2 md:p-6 shadow-lg 
                                 hover:bg-gray-800 hover:border-yellow-400 transition-all duration-300 cursor-pointer flex flex-row md:flex-col items-center justify-center gap-2"
                        >
                            <div className="flex items-center justify-center mb-1 md:mb-6">
                                <div className="bg-gray-700 p-4 rounded-xl">{service.icon}</div>
                            </div>
                            <div className="">
                                <h3 className="text-sm md:text-xl font-bold text-center mb-1 md:mb-3">{service.title}</h3>
                                <p className="text-gray-300 text-center text-[8px] md:text-sm">{service.desc}</p>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

