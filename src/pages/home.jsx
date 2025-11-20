import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ressuv from '../assets/redsuv.png';
import Services from "./services";
import RepairSection from "./repair";
import Painting from "./painting";
import Contact from "./contact";
import Footer from "./footer";

function Home() {
    const images = [
        "https://pngimg.com/uploads/audi/audi_PNG1740.png",
        ressuv,
        "https://pngimg.com/uploads/audi/audi_PNG1740.png",
        ressuv,
    ];


    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () =>
        setIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <>
            <div className="bg-gray-900">
                <div className="md:h-screen 2xl:h-auto flex flex-col-reverse md:flex-row gap-2 items-center w-full px-4 md:px-12 2xl:max-w-[1440px] mx-auto  text-white ">
                    <motion.section
                        className=" md:pl-8 lg:pl-16 2xl:pl-0 w-full md:w-[50%]"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl lg:text-5xl font-bold leading-tight">
                            Professional Car{" "}
                            <span className="text-yellow-400">Repair</span> & <br />
                            Premium <span className="text-yellow-400">Garage Services</span>
                        </h2>

                        <p className="text-gray-300 mt-4 text-sm  lg:text-lg ">
                            Your trusted partner for car servicing, painting, mechanical
                            repairs, detailing & premium maintenance.
                        </p>

                        <div className="flex gap-4 my-4 md:mt-8">
                            <a href="tel:+919166306480" className="bg-gray-300 text-black px-4 py-2 rounded-lg">
                                Call Now
                            </a>
                            <a href="#services" className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg">
                                View Services
                            </a>
                        </div>
                    </motion.section>

                    <section className="w-full md:w-[50%] h-screen md:h-auto flex flex-col items-center justify-center">
                        <div className="relative w-full h-[400px] lg:h-[450px] overflow-hidden flex items-center justify-center">
                            <AnimatePresence>
                                <motion.img
                                    key={index}
                                    src={images[index]}
                                    className="absolute  lg:h-[450px] object-contain drop-shadow-2xl"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.6 }}
                                />
                            </AnimatePresence>
                        </div>

                        <div className="flex gap-4 lg:mt-4">
                            <button
                                onClick={prevSlide}
                                className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
                            >
                                Previous
                            </button>

                            <button
                                onClick={nextSlide}
                                className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
                            >
                                Next
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            <Services />
            <RepairSection />
            <Painting />
            <Contact />
            <Footer />
        </>

    );
}

export default Home;
