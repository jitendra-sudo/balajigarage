import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

// Load 3D Model from URL
const CarModel = ({ modelUrl, rotationY }) => {
    const { scene } = useGLTF(modelUrl);
    return (
        <primitive object={scene} rotation={[0, rotationY, 0]} scale={1.5} />
    );
};

function Home() {
    const [currentCar, setCurrentCar] = useState(0);
    const [rotationY, setRotationY] = useState(0);

    const carModels = [
      "https://raw.githubusercontent.com/pmndrs/drei-assets/master/ferrari/scene.glb",
      "https://raw.githubusercontent.com/pmndrs/drei-assets/master/ferrari/scene.glb",
      "https://raw.githubusercontent.com/pmndrs/drei-assets/master/ferrari/scene.glb",
      "https://raw.githubusercontent.com/pmndrs/drei-assets/master/ferrari/scene.glb",
      "https://raw.githubusercontent.com/pmndrs/drei-assets/master/ferrari/scene.glb",
      "https://raw.githubusercontent.com/pmndrs/drei-assets/master/ferrari/scene.glb",
    ];

    const nextCar = () => setCurrentCar((prev) => (prev + 1) % carModels.length);
    const prevCar = () =>
        setCurrentCar((prev) => (prev - 1 + carModels.length) % carModels.length);

    const rotateForward = () => setRotationY((prev) => prev + Math.PI);
    const rotateBackward = () => setRotationY((prev) => prev - Math.PI);

    return (
        <div className="h-screen flex gap-2 items-center bg-gray-900 text-white">

            <motion.section
                className="px-5 md:px-16 py-16 w-[50%]"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Professional Car{" "}
                        <span className="text-yellow-400">Repair</span> & <br />
                        Premium <span className="text-yellow-400">Garage Services</span>
                    </h2>

                    <p className="text-gray-300 mt-4 text-lg">
                        Your trusted partner for car servicing, painting, mechanical
                        repairs, detailing & premium maintenance.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <a href="tel:+919166306480" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-300">
                            Call Now
                        </a>

                        <a href="#services" className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
                            View Services
                        </a>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="w-[50%] flex flex-col items-center justify-center"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
                <div className="h-[450px]">
                    {/* <Canvas className="w-full h-[500px]">
                        <ambientLight intensity={0.6} />
                        <directionalLight intensity={1} position={[5, 5, 5]} />
                        <Stage environment="city" intensity={0.7}>
                            <CarModel modelUrl={carModels[currentCar]} rotationY={rotationY} />
                        </Stage>
                        <OrbitControls enablePan={false} enableZoom={true} />
                    </Canvas> */}

                </div>

                <div className="flex gap-4 mt-4">
                    <button onClick={rotateBackward} className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                        Rotate Back
                    </button>

                    <button onClick={rotateForward} className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                        Rotate Forward
                    </button>
                </div>

                <div className="flex gap-4 mt-3">
                    <button onClick={prevCar} className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300">
                        Previous Car
                    </button>

                    <button onClick={nextCar} className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300">
                        Next Car
                    </button>
                </div>
            </motion.section>
        </div>
    );
}

export default Home;
