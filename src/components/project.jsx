import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ProjectCard } from "../components";

export default function Project({ projects }) {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            ref={sectionRef}
            className="flex flex-col lg:flex-row flex-wrap py-12 gap-13 justify-center items-center text-gray-300"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.2 }}
        >
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    projectName={project.name}
                    imageUrl={project.imageUrl}
                    link={project.link}
                    description={project.description}
                    containerVariants={containerVariants}
                    index={index}
                    isInView={isInView}
                />
            ))}
        </motion.div>
    );
}