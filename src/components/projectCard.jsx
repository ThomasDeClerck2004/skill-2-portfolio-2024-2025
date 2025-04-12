import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function ProjectCard({ projectName, imageUrl, link, description, containerVariants, index, isInView }) {
    return (
        <Tilt
            className="shadow-lg"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={400}
        >
            <motion.div
                className="bg-gradient-to-br from-[#031e1456] to-[#399b75] border-4 border-[#0d0d0d] rounded-2xl shadow-lg shadow-primary p-6 w-[400px] h-[500px] cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                variants={containerVariants}
            >
                <img
                    src={imageUrl || "/src/assets/placeholder.png"}
                    alt={projectName}
                    className="w-full h-3/5 object-cover rounded-lg mb-4"
                />
                <h4 className="text-white font-bold text-2xl">{projectName}</h4>
                <p className="text-gray-300 text-sm mt-2">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4"
                >
                    <button className="bg-white text-[#399b75] py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out">
                        View
                    </button>
                </a>
            </motion.div>
        </Tilt>
    );
}