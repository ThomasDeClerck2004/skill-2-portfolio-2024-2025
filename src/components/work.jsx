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
                            descriptionLong: "In the second year of my studies, during the first semester in the course Web Development, we were given the assignment to create a website on our own. The website needed to have enough database entities to support a large database, allowing us to create CRUD screens and manage users.",
                            myContribution: "I developed this project all by myself. I created the database, the CRUD pages, and the authentication system. I also worked on the documentation.",
                            tools: ["Tailwind CSS", "Alpine.js", "Laravel", "Livewire", "Sqlite", "..."],
                            numberOfContributors: 1,
                        },
                        {
                            name: "Donkey Kong",
                            imageUrl: "/assets/donkeykong.gif",
                            link: "https://github.com/Thomas997/Donkey-Kong",
                            description: "A project me and a friend created for our final project in high school, this was my first big programming assignment.",
                            descriptionLong: "In the sixth year of high school, during the second semester in the programming course, we were tasked with creating a program to demonstrate our knowledge of everything we had learned up to that point. A friend and I came up with the idea to recreate Donkey Kong. We had to use C# and Windows Forms, making it a bit more challenging.",
                            myContribution: "My contribution to this project was designing the level layout — not the styling — and making sure that the walls functioned correctly as obstacles. I also worked on the logic for Donkey Kong throwing barrels and ensured the barrels bounced off each wall properly. In addition, I implemented the ladders.",
                            tools: ["C#", "Windows Forms", "Access"],
                            numberOfContributors: 2,
                        },
                        {
                            name: "Personal Portfolio",
                            imageUrl: "/assets/portfolio.gif",
                            link: "https://github.com/ThomasDeClerck2004/skill-2-portfolio-2024-2025",
                            description: "This website was part of a school project, but I decided to build it with React to challenge myself. It wasn’t required, but I wanted to learn something new — and it’s actually my first time using React!",
                            descriptionLong: "In the second year of my studies, during the second semester in the course Skills Integration Lab 2, we were tasked with creating a personal portfolio website to showcase all our skills and programming knowledge. The website you're currently on is the result of that assignment! It wasn't required to build it with React, but I wanted to challenge myself and avoid making another Laravel project. I had already done that with previous projects.",
                            myContribution: "I developed this project all by myself, learning React and other tools along the way, which was a great experience.",
                            tools: ["React", "Tailwind CSS", "Framer Motion", "Alpine.js", "Parallax Tilt", "React Router", "..."],
                            numberOfContributors: 1,
                        },
                        {
                            name: "Project Skil-2",
                            imageUrl: "/assets/duffalo.gif",
                            link: "https://de.duffalos.be/",
                            description: "Together with 5 fellow students, we are developing a website as a team using the SCRUM methodology for an internal client at Thomas More, the football team De Duffalos.",
                            descriptionLong: "In the second year of my studies, during the second semester in the course Skils Integration Lab 2, we were given the assignment to create a website in a group for an internal client at Thomas More — in this case, De Duffalos. This was by far the largest group I had ever worked with on a single project, which made things a bit challenging, but we managed to deliver in the end.",
                            myContribution: "My contribution to this project included overall code testing, creating the CRUD pages, implementing middleware for authentication, setting up and seeding the database, and more. I also worked on the documentation.",
                            tools: ["Tailwind CSS", "Alpine.js", "Laravel", "Livewire", "Sqlite", "..."],
                            numberOfContributors: 6,
                        },
                        {
                            name: "Brussels Brews",
                            imageUrl: "/assets/brews.gif",
                            link: "https://brewery1itf604.netlify.app/",
                            description: "Together with two fellow students, we created a website for a fictitious client — Brussels Brews, a fictional beer company based in Brussels.",
                            descriptionLong: "In the first year of my studies, during the second semester in the course Full Stack Essentials, we were given the assignment to create a website in a group for a fictional client — in this case, Brussels Brews. This was our first experience working on a website that involved both front-end and back-end development.",
                            myContribution: "We divided the different pages among ourselves and helped each other where needed. I was responsible for the homepage, the 'How it's made' page, and the contact page.",
                            tools: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "Python API"],
                            numberOfContributors: 3,
                        },
                        {
                            name: "Project IoT-Bridge",
                            imageUrl: "/assets/IoT.png",
                            link: "https://www.youtube.com/watch?v=Z2LBS0gXR6E",
                            description: "Together with two fellow students, we developed a project using IoT components. We chose to build a bridge that operates with a small motor and sound sensors.",
                            descriptionLong: "In the first year of my studies, during the second semester in the course IoT Essentials, we were given the assignment to create something using IoT. It had to be a project with a sufficiently large concept, so two fellow students and I came up with the idea of a bridge that uses sound sensors to detect boats passing through.",
                            myContribution: "My contribution to this project was helping to write the Python code that controlled the opening and closing of the bridge, as well as working on the final documentation.",
                            tools: ["Python", "OrangePI", "Multithreading", "IoT Gear"],
                            numberOfContributors: 3,
                        },
                    ]}
                />
            </div>
        </section>
    );
}