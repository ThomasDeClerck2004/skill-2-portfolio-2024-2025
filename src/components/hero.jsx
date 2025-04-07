import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section
            ref={ref}
            className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-black to-[#0c6e48] overflow-hidden"
        >
            <div className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-50"></div>

            <motion.h1
                className="text-5xl font-bold text-white z-10"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                Welcome to My Portfolio
            </motion.h1>

            <motion.p
                className="mt-4 text-lg text-gray-300 z-10"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            >
                Breaking things and fixing them (on purpose, usually).
            </motion.p>
        </section>
    );
}