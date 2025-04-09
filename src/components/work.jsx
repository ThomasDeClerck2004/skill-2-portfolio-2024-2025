import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Work() {
    return (
        <section id="work" className="flex justify-center items-center bg-[#000301] overflow-hidden">
            <div className="container mx-auto px-4 xl:px-20 py-12">
                <p className="text-gray-300 pb-2 text-xs sm:text-lg sm:text-left text-center">MY WORK</p>
                <h3 className="text-white font-bold text-3xl sm:text-6xl sm:text-left text-center">Projects.</h3>

                <div className="flex flex-col lg:flex-row flex-wrap py-12 gap-20 justify-center items-center text-gray-300">
                    {["Project 1", "Project 2", "Project 3", "Project 4"].map((project, index) => (
                        <Tilt
                            key={index}
                            className="rounded-2xl shadow-lg"
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={400}
                        >
                            <motion.div
                                className="bg-gradient-to-br from-[#009b5f] to-[#01b872] border-4 border-transparent rounded-2xl shadow-lg shadow-primary p-6 w-[300px] h-[400px] flex flex-col items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src="/src/assets/placeholder.png"
                                    alt={project}
                                    className="w-full h-2/3 object-cover rounded-lg mb-4"
                                />
                                <h4 className="text-white font-bold text-xl">{project}</h4>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
}