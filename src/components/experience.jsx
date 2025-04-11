import { slideIn } from '../utils/animations';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section ref={sectionRef}>
            <div className="container mx-auto px-4 xl:px-20 pt-24">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <p className="text-[#009b5f] pb-2 text-center text-xs sm:text-lg font-medium tracking-wider uppercase">WHAT I HAVE DONE SO FAR</p>
                    <h3 className="text-white font-bold text-3xl sm:text-6xl text-center">My Experiences.</h3>
                </motion.div>
                
                {/* Timeline */}
                <motion.div className="mt-12 border-l-4 border-[#009b5f]"
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                >
                    <div className="ml-4">
                        {/* Timeline Item */}
                        <div className="mb-8">
                            <div className="flex items-center">
                                <img src="/src/assets/checkmark.png" alt="Checkmark" className="w-4 h-4 sm:w-8 sm:h-8 rounded-full" />
                                <p className="ml-4 text-[#009b5f] font-bold">Mar 15, 2024</p>
                            </div>
                            <div className="ml-8 mt-2 sm:ml-12 sm:border-2 sm:border-[#009b5f] sm:rounded-lg sm:p-4 sm:bg-gray-800">
                                <h4 className="text-white font-semibold">Project Kickoff</h4>
                                <p className="text-gray-400">
                                    Initial team meeting and project scope definition. Established key milestones and resource allocation.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item */}
                        <div className="mb-8">
                            <div className="flex items-center">
                                <div className="w-4 h-4 sm:w-8 sm:h-8 border-4 border-[#009b5f] rounded-full"></div>
                                <p className="ml-4 text-[#009b5f] font-bold">Mar 15, 2024</p>
                            </div>
                            <div className="ml-8 mt-2 sm:ml-12 sm:border-2 sm:border-[#009b5f] sm:rounded-lg sm:p-4 sm:bg-gray-800">
                                <h4 className="text-white font-semibold">Project Kickoff</h4>
                                <p className="text-gray-400">
                                    Initial team meeting and project scope definition. Established key milestones and resource allocation.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}