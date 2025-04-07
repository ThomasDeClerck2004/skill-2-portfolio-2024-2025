import React from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Earth from '../components/earth.jsx';

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Handle form submission logic here, e.g., send data to an API or email service
        alert("Your message has been sent!");
    };

    return (
        <div id="contact" className="h-screen bg-white dark:bg-gray-900">
            <section className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl h-full flex flex-col">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Got a technical issue? Want to send feedback about a beta feature?
                Need details about our Business plan? Let us know.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between h-full">
                {/* Contact Form */}
                <div className="w-full lg:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        placeholder="name@flowbite.com"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                    </div>
                    <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        required
                        placeholder="Let us know how we can help you"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                    </div>
                    <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows="6"
                        placeholder="Leave a comment..."
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    ></textarea>
                    </div>
                    <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                    Send message
                    </button>
                </form>
                </div>

                {/* Earth Canvas */}
                <div className="hidden sm:block sm:w-1/2 sm:h-full">
                    <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 5]} intensity={4.5} />
                        <Earth />
                        <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                        />
                    </Canvas>
                </div>
            </div>
            </section>
        </div>
    );
}