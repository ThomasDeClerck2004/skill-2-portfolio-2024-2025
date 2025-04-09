import { Hero, About, Work, Contact, Experience, Skills } from "../components";

export default function IndexPage() {
    return (
        <div className="relative z-0 bg-[#000301]">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Work />
            <Contact />
        </div>
    );
}