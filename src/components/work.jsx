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
                            description: "A website to track movies and series you've watched or want to watch. Features include watchlists, trailers, and downloads.",
                            descriptionLong: "In the first semester of the second year of my studies, during the Web Development course, we were assigned to create a website independently. The project required a sufficiently complex database structure to support multiple entities, allowing us to implement CRUD functionalities and user management. For this assignment, I developed a website that helps users keep track of the films and series they have watched or plan to watch. Users can create and download personalized watchlists, watch trailers, and access various other features designed to enhance their viewing experience.",
                            myContribution: "I developed this project all by myself. I created the database, the CRUD pages, the authentication system and also the documentation. I've also learned how to call two third-party APIs and use their data. For example, when creating a movie in the movie CRUD page, you can search by name, and the fields will be automatically filled. Try it out! **Email: john.doe@example.com | Password: admin1234**",
                            tools: ["Tailwind CSS", "Alpine.js", "Laravel", "Livewire", "Sqlite", "..."],
                            numberOfContributors: 1,
                        },
                        {
                            name: "Donkey Kong",
                            imageUrl: "/assets/donkeykong.gif",
                            link: "https://github.com/Thomas997/Donkey-Kong",
                            description: "A recreation of the classic Donkey Kong game using Windows Forms and C#, made as our high school final project.",
                            descriptionLong: "In the sixth year of high school, during the second semester in the programming course, we were tasked with creating a program to demonstrate our knowledge of everything we had learned up to that point. A friend and I came up with the idea to recreate Donkey Kong. We had to use C# and Windows Forms, making it a bit more challenging.",
                            myContribution: "My contribution to this project was designing the level layout — not the art — and making sure that the walls functioned correctly as obstacles. I also worked on the logic for Donkey Kong throwing barrels and ensured the barrels bounced off each wall properly. In addition, I implemented the ladders. Things like the menu, music and the start screen and more were done by my friend.",
                            tools: ["C#", "Windows Forms", "Access"],
                            numberOfContributors: 2,
                        },
                        {
                            name: "Personal Portfolio",
                            imageUrl: "/assets/portfolio.gif",
                            link: "https://github.com/ThomasDeClerck2004/skill-2-portfolio-2024-2025",
                            description: "My personal portfolio site, built from scratch in React for a school assignment. It was my first time using React.",
                            descriptionLong: "In the second year of my studies, during the second semester in the course Skills Integration Lab 2, we were tasked with creating a personal portfolio website to showcase all our skills and programming knowledge. The website you're currently on is the result of that assignment! It wasn't required to build it with React, but I wanted to challenge myself and avoid making another Laravel project. I had already done that with previous projects.",
                            myContribution: "I developed this project all by myself, learning React and other tools along the way, which was a great experience.",
                            tools: ["React", "Tailwind CSS", "Framer Motion", "Alpine.js", "Parallax Tilt", "React Router", "..."],
                            numberOfContributors: 1,
                        },
                        {
                            name: "Project Skil-2 | TTC Westel",
                            imageUrl: "/assets/TTC.gif",
                            link: "/assets/Report_TTC_Westel.pdf",
                            description: "Team project with an internal client at Thomas More. We used Scrum, held stand-ups, created ERDs and use cases, and designed a prototype in Figma.",
                            descriptionLong: "As a team of six students (myself, Yme Clonen, Mauro Leonardo, Yorick Peeters, Jaro Wagener, and Brent Janssen), we were assigned to develop an IT project for an internal client: TTC Westel, a local table tennis club in which one of our teachers is involved. In close collaboration with the client, we went through the initial phases of a software project. We created an ERD and a Use Case diagram, analyzed functional requirements, and designed a visual proof of concept using Figma. We also wrote a report detailing our findings and the steps we took to reach our conclusions.",
                            myContribution: "My contribution to this project mainly involved helping to create the diagrams, such as the Use Case diagram and the ERD. I was also responsible for designing several pages in Figma and contributed significantly to the final report.",
                            tools: ["Figma", "StarUML", "Microsoft Word", "..."],
                            numberOfContributors: 6,
                        },
                        {
                            name: "Project Skil-2 | De Duffalos",
                            imageUrl: "/assets/duffalo.gif",
                            link: "https://de.duffalos.be/",
                            description: "Developed a website for football club De Duffalos. Worked in a team of six using Scrum throughout the entire project lifecycle.",
                            descriptionLong: "In the second year of my studies, during the second semester in the course Skils Integration Lab 2, we were given the assignment to create a website in a group for an internal client at Thomas More — in this case, De Duffalos. This was by far the largest group I had ever worked with on a single project, which made things a bit challenging, but we managed to deliver in the end.",
                            myContribution: "My contribution to this project included overall code testing, creating the CRUD pages, implementing middleware for authentication, setting up and seeding the database, and more. I also worked on the documentation.",
                            tools: ["Tailwind CSS", "Alpine.js", "Laravel", "Livewire", "Sqlite", "..."],
                            numberOfContributors: 6,
                        },
                        {
                            name: "Brussels Brews",
                            imageUrl: "/assets/brews.gif",
                            link: "https://brewery1itf604.netlify.app/",
                            description: "Created a fictional brewery website for Brussels Brews in a group of three, focusing on both front-end and back-end.",
                            descriptionLong: "In the first year of my studies, during the second semester in the course Full Stack Essentials, we were given the assignment to create a website in a group for a fictional client — in this case, Brussels Brews. This was our first experience working on a website that involved both front-end and back-end development.",
                            myContribution: "We divided the different pages among ourselves and helped each other where needed. I was responsible for the homepage, the 'How it's made' page, and the contact page.",
                            tools: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "Python API"],
                            numberOfContributors: 3,
                        },
                        {
                            name: "Project IoT-Bridge",
                            imageUrl: "/assets/IoT.gif",
                            link: "https://www.youtube.com/watch?v=Z2LBS0gXR6E",
                            description: "Built a smart bridge system in a group of three for our IoT course. The bridge opened for boats and closed for cars, based on requirements.",
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