import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Earth from '../components/earth.jsx';
import { slideIn } from '../utils/animations';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function Contact() {
    const formRef = useRef();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Use EmailJS to send the form data
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_USER_ID // Replace with your EmailJS user ID
            )
            .then(
                () => {
                    setLoading(false);
                    alert('Message sent successfully!');
                    setForm({ name: '', email: '', message: '' }); // Reset form
                },
                (error) => {
                    setLoading(false);
                    console.error('Failed to send message:', error);
                    alert('Something went wrong. Please try again.');
                }
            );
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="flex justify-center items-center overflow-hidden"
        >
            <div className="container mx-auto px-4 xl:px-20 py-12 flex flex-col-reverse xl:flex-row gap-10 rounded-2xl shadow-lg">
                {/* Contact Form */}
                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    className="relative flex-[0.75] bg-[#1a1a1a] p-8 rounded-2xl"
                >
                    <div className="rounded-2xl bg-[#1a1a1a]">
                        <p className="text-[#009b5f] font-medium tracking-wider uppercase pb-2 text-xs lg:text-lg">GET IN TOUCH</p>
                        <h3 className="text-white font-bold text-3xl lg:text-6xl">Contact.</h3>
    
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="mt-12 flex flex-col gap-8"
                        >
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">Your Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What is your name?"
                                    required
                                    className="bg-[#1f1f1f] py-4 px-6 text-gray-300 rounded-lg outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">Your Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What is your email?"
                                    required
                                    className="bg-[#1f1f1f] py-4 px-6 text-gray-300 rounded-lg outline-none border-none font-medium"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-white font-medium mb-4">Your Message</span>
                                <textarea
                                    rows={7}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="What do you want to say?"
                                    required
                                    className="bg-[#1f1f1f] py-4 px-6 text-gray-300 rounded-lg outline-none border-none font-medium"
                                />
                            </label>
                            <button
                                type="submit"
                                className="bg-[#009b5f] hover:bg-[#01b872] transition duration-300 ease-in-out py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer"
                            >
                                {loading ? 'Sending...' : 'Send'}
                            </button>
                        </form>
                    </div>
                </motion.div>
    
                {/* 3D Earth */}
                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    className="flex-1 w-full max-w-[900px] max-h-[900px] aspect-square mx-auto"
                >
                    <Canvas camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}>
                        {/* Ambient light for general illumination */}
                        <ambientLight intensity={4.5} />

                        {/* Directional light to simulate sunlight */}
                        <directionalLight
                            position={[10, 5, 10]} // Position of the "Sun"
                            intensity={3} // Increase brightness
                            castShadow // Enable shadows
                            shadow-mapSize-width={2048} // Higher shadow quality
                            shadow-mapSize-height={2048}
                            shadow-camera-far={50}
                            shadow-camera-left={-10}
                            shadow-camera-right={10}
                            shadow-camera-top={10}
                            shadow-camera-bottom={-10}
                        />

                        {/* Point light for additional brightness */}
                        <pointLight position={[10, 10, 10]} intensity={2} />

                        {/* Earth model */}
                        <Earth />

                        {/* Orbit controls for interaction */}
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2}
                        />
                    </Canvas>
                </motion.div>
            </div>
        </section>
    );
}