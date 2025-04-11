import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Project } from '../components';

export default function Work() {
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
            className="flex justify-center items-center overflow-hidden"
        >
            <div className="container mx-auto px-4 xl:px-20 pt-12 pb-24">
                <motion.p
                    className="text-[#009b5f] pb-2 sm:text-left text-center text-xs sm:text-lg font-medium tracking-wider uppercase"
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

                <Project
                    projects={[
                        {
                            name: "Donkey Kong",
                            imageUrl: "/src/assets/placeholder.png",
                            githubLink: "https://github.com/user/project1",
                            description: "This is a description of Project 2.",
                        },
                        {
                            name: "Filmvault",
                            imageUrl: "/src/assets/placeholder.png",
                            githubLink: "https://github.com/user/project2",
                            description: "This is a description of Project 2.",
                        },
                        {
                            name: "Project Skil-2",
                            imageUrl: "/src/assets/placeholder.png",
                            githubLink: "https://github.com/user/project2",
                            description: "This is a description of Project 2.",
                        },
                        {
                            name: "IoT-project",
                            imageUrl: "/src/assets/placeholder.png",
                            githubLink: "https://github.com/user/project2",
                            description: "This is a description of Project 2.",
                        },
                        {
                            name: "Brussels brews",
                            imageUrl: "/src/assets/placeholder.png",
                            githubLink: "https://github.com/user/project2",
                            description: "This is a description of Project 2.",
                        },
                        {
                            name: "My personal portfolio",
                            imageUrl: "/src/assets/placeholder.png",
                            githubLink: "https://github.com/user/project2",
                            description: "This is a description of Project 2.",
                        },
                    ]}
                />
            </div>
        </section>
    );
}