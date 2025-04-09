import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Work() {
    const projects = [
        { name: "Donkey kong", description: "Description for Project 1." },
        { name: "Filmvault", description: "Description for Project 2." },
        { name: "Skil-2 Project", description: "Description for Project 3." },
        { name: "IOT-bridge", description: "Description for Project 4." },
        { name: "Brussels brews", description: "Description for Project 4." },
        { name: "My personal portfolio", description: "Description for Project 4." },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section
            id="work"
            ref={sectionRef}
            className="flex justify-center items-center bg-[#000301] overflow-hidden"
        >
            <div className="container mx-auto px-4 xl:px-20 py-12">
                <motion.p
                    className="text-gray-300 pb-2 text-xs sm:text-lg sm:text-left text-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    variants={containerVariants}
                >
                    MY WORK
                </motion.p>
                <motion.h3
                    className="text-white font-bold text-3xl sm:text-6xl sm:text-left text-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    variants={containerVariants}
                >
                    Projects.
                </motion.h3>

                <motion.div
                    className="flex flex-col lg:flex-row flex-wrap py-12 gap-13 justify-center items-center text-gray-300"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {projects.map((project, index) => (
                        <Tilt
                            key={index}
                            className="shadow-lg"
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={400}
                        >
                            <motion.div
                                className="bg-gradient-to-br from-[#00221556] to-[#399b75] border-4 border-black rounded-2xl shadow-lg shadow-primary p-6 w-[300px] h-[400px] cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                                variants={containerVariants}
                            >
                                <img
                                    src="/src/assets/placeholder.png"
                                    alt={project.name}
                                    className="w-full h-2/3 object-cover rounded-lg mb-4"
                                />
                                <h4 className="text-white font-bold text-xl">{project.name}</h4>
                                <p className="text-gray-300 mt-2">{project.description}</p>
                            </motion.div>
                        </Tilt>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}