import { div, p } from "framer-motion/client";

export default function Project({ projectName}) {
    return (
        <div className="container mx-auto px-4 xl:px-20 pt-12">
            <p className="text-gray-300 pb-2 text-center text-xs sm:text-lg">WHAT I HAVE DONE SO FAR</p>
            <h3 className="text-white font-bold text-3xl sm:text-6xl text-center">{projectName}</h3>

            <div className="border-4 h-[500px] left-[50%] ml-3 top-0 border-[#009b5f]"></div>
        </div>
    );
}