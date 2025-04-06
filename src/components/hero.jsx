import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-black to-[#0c6e48]">
            <div className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-50"></div>
            <h1 className="text-5xl font-bold text-white z-10">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg text-gray-300 z-10">I am a passionate developer.</p>
        </section>
    )
}