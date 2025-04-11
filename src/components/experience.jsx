export default function Experience() {
    return (
        <div className="container mx-auto px-4 xl:px-20 pt-12">
            <p className="text-gray-300 pb-2 text-center text-xs sm:text-lg">WHAT I HAVE DONE SO FAR</p>
            <h3 className="text-white font-bold text-3xl sm:text-6xl text-center">My Experiences.</h3>
            
            {/* Timeline */}
            <div className="mt-12 border-l-2 border-gray-700">
                <div className="ml-4">
                    <div className="mb-8">
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                            <p className="ml-4 text-gray-300 font-bold">2025</p>
                        </div>
                        <p className="ml-8 text-gray-400">Started working as a Frontend Developer at XYZ Company.</p>
                    </div>
                    <div className="mb-8">
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                            <p className="ml-4 text-gray-300 font-bold">2023</p>
                        </div>
                        <p className="ml-8 text-gray-400">Graduated with a degree in Computer Science.</p>
                    </div>
                    <div className="mb-8">
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-gray-700 rounded-full"></div>
                            <p className="ml-4 text-gray-300 font-bold">2021</p>
                        </div>
                        <p className="ml-8 text-gray-400">Completed an internship at ABC Tech.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}