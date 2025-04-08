import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideIn } from '../utils/animations';

export default function About() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section id="about" ref={sectionRef} className="flex justify-center items-center bg-[#000301] overflow-hidden">
            <div className="container mx-auto px-4 xl:px-20 py-12">
                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                >
                    <p className="text-gray-300 pb-2 lg:text-left text-center">INTRODUCTION</p>
                    <h3 className="text-white font-bold text-3xl lg:text-6xl lg:text-left text-center">About me.</h3>
                </motion.div>
              
                <div className="flex flex-col lg:flex-row py-12 gap-8">
                    {/* Image Section */}
                    <motion.img
                        variants={slideIn('left', 'tween', 0.2, 1)}
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'}
                        src="/src/assets/placeholder.png"
                        alt="about"
                        className="hidden xl:block xl:rounded-md xl:object-cover xl:w-1/2 xl:h-[500px] xl:shadow-lg xl:shadow-primary"
                    />

                    {/* Text Section */}
                    <motion.div className="flex flex-col justify-start"
                        variants={slideIn('right', 'tween', 0.2, 1)}
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'}
                    >
                        <h2 className="text-gray-300 font-bold text-3xl lg:text-5xl">
                            Hi, I'm <span className="text-[#009b5f]">Thomas</span>
                        </h2>
                        <p className="text-gray-300 font-bold text-xl lg:text-2xl pt-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley of type and scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-4 mt-8">
                            <button
                                type="button"
                                className="bg-[#009b5f] hover:bg-[#01b872] py-3 px-6 w-full sm:w-auto text-white font-bold shadow-md shadow-primary rounded-xl text-center"
                            >
                                <a href="/src/assets/CV-L-2025-NL.pdf" target="_blank" rel="noopener noreferrer">
                                    VIEW RESUME (NL)
                                </a>
                            </button>
                            <button
                                type="button"
                                className="bg-[#009b5f] hover:bg-[#01b872] py-3 px-6 w-full sm:w-auto text-white font-bold shadow-md shadow-primary rounded-xl text-center"
                            >
                                <a href="/src/assets/CV-L-2025-EN.pdf" target="_blank" rel="noopener noreferrer">
                                    VIEW RESUME (EN)
                                </a>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}