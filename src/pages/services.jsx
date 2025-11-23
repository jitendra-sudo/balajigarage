import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaCogs, FaCarCrash, FaPaintRoller, FaBroom, FaFan, } from "react-icons/fa";
import completeCar from '../assets/complete-car.jpg';

export default function Services() {
    const services = [
        {
            title: "General Service",
            desc: "Complete inspection, oil change, filters, brake service & full health report.",
            icon: <FaTools className="text-yellow-400 text-3xl" />,
        },
        {
            title: "Mechanical Repairs",
            desc: "Engine repair, clutch work, suspension, steering & major mechanical fixes.",
            icon: <FaCogs className="text-yellow-400 text-3xl" />,
        },
        {
            title: "Accidental Repair",
            desc: "Body restoration, denting, painting, insurance claim help & rebuilds.",
            icon: <FaCarCrash className="text-yellow-400 text-3xl" />,
        },
        // {
        //     title: "Car Painting",
        //     desc: "Premium paint jobs, refinishing, color matching & scratch removal.",
        //     icon: <FaPaintRoller className="text-yellow-400 text-3xl" />,
        // },
        {
            title: "Deep Cleaning",
            desc: "Interior deep clean, polishing, detailing & ceramic coating.",
            icon: <FaBroom className="text-yellow-400 text-3xl" />,
        },
        // {
        //     title: "AC Service",
        //     desc: "Cooling repair, gas refill, compressor check & filter replacement.",
        //     icon: <FaFan className="text-yellow-400 text-3xl" />,
        // },
    ];

    return (
        <section
            id="services"
            className="bg-gray-900 text-white py-10 md:py-16 px-4 md:px-12"
        >
            <div className="max-w-[1440px] mx-auto overflow-hidden">


                <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-12 items-center">

                    {/* LEFT: Services */}
                    <div className=" md:w-[50%]">
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-5 md:mb-10 "
                        >
                            <h2 className="text-2xl md:text-5xl font-extrabold leading-tight text-start lg:text-center">
                                Our <span className="text-yellow-400">Premium Services</span>
                            </h2>

                            <p className="text-gray-300 mt-3 text-sm lg:text-lg text-start lg:text-center">
                                High-quality car care backed by expert technicians and industrial-grade equipment.
                            </p>
                        </motion.div>

                        {/* SERVICE CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    whileHover={{ scale: 1.04 }}
                                    className="
                                        p-4
                                        bg-gray-800 
                                        border border-yellow-500/40 
                                        hover:border-yellow-400 
                                        shadow-[0_0_20px_rgba(255,255,0,0.1)] 
                                        hover:shadow-[0_0_30px_rgba(255,255,0,0.25)]
                                        transition-all duration-300
                                        cursor-pointer
                                        rounded-xl
                                        flex gap-4
                                    "
                                >
                                    <div className="flex items-center justify-center">
                                        {service.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-md lg:text-lg font-bold text-white">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 text-xs lg:text-sm mt-1">
                                            {service.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full flex  md:w-[50%] justify-center"
                    >
                        <img
                            src={completeCar}
                            alt="Mechanic"
                            className="w-full  h-[270px] md:h-[450px] object-cover rounded-2xl shadow-2xl border border-gray-700"
                        />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
