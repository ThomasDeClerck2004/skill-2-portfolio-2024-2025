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
                            name: "FilmVault",
                            imageUrl: "/assets/FilmVault.gif",
                            link: "https://filmvault.filmvault.be/",
                            description: "A website created for people who want to keep track of which movie they've watched now and which they haven't.",
                            descriptionLong: "Long description",
                            context: "Context",
                            tools: ["React", "Node.js", "Express", "MongoDB"],
                        },
                        {
                            name: "Donkey Kong",
                            imageUrl: "/assets/donkeykong.gif",
                            link: "https://github.com/Thomas997/Donkey-Kong",
                            description: "A project me and a friend created for our final project in high school, this was my first big programming assignment.",
                            descriptionLong: "Long description",
                            context: "Context",
                            tools: ["React", "Node.js", "Express", "MongoDB"],
                        },
                        {
                            name: "Personal Portfolio",
                            imageUrl: "/assets/portfolio.gif",
                            link: "https://github.com/ThomasDeClerck2004/skill-2-portfolio-2024-2025",
                            description: "This website was part of a school project, but I decided to build it with React to challenge myself. It wasn’t required, but I wanted to learn something new — and it’s actually my first time using React!",
                            descriptionLong: "Long description",
                            context: "Context",
                            tools: ["React", "Node.js", "Express", "MongoDB"],
                        },
                        {
                            name: "Project Skil-2",
                            imageUrl: "/assets/duffalo.gif",
                            link: "https://de.duffalos.be/",
                            description: "Together with 5 fellow students, we are developing a website as a team using the SCRUM methodology for an internal client at Thomas More, the football team De Duffalos.",
                            descriptionLong: "Long description",
                            context: "Context",
                            tools: ["React", "Node.js", "Express", "MongoDB"],
                        },
                        {
                            name: "Brussels Brews",
                            imageUrl: "/assets/brews.gif",
                            link: "https://brewery1itf604.netlify.app/",
                            description: "Together with two fellow students, we created a website for a fictitious client — Brussels Brews, a fictional beer company based in Brussels.",
                            descriptionLong: "Long description",
                            context: "Context",
                            tools: ["React", "Node.js", "Express", "MongoDB"],
                        },
                        {
                            name: "Project IoT-Bridge",
                            imageUrl: "/assets/IoT.png",
                            link: "https://www.youtube.com/watch?v=Z2LBS0gXR6E",
                            description: "Together with two fellow students, we developed a project using IoT components. We chose to build a bridge that operates with a small motor and sound sensors.",
                            descriptionLong: "Long description",
                            context: "Context",
                            tools: ["React", "Node.js", "Express", "MongoDB"],
                        },
                    ]}
                />
            </div>
        </section>
    );
}