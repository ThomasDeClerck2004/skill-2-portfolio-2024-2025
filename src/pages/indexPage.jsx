import { Hero, About, Work, Contact } from "../components";

export default function IndexPage() {
    return (
        <div className="relative z-0 bg-[#000301]">
            <Hero />
            <About />
            <Work />
            <Contact />
        </div>
    );
}