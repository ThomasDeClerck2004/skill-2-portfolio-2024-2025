import React from 'react';

export default function Modal({ project, onClose }) {
    return (
        <div className="fixed inset-0 bg-transparent flex justify-center items-start z-50 pointer-events-none backdrop-blur-md">
            <div className="bg-[#1a1a1a] border-4 border-[#009b5f] rounded-lg p-8 w-4/5 max-w-5xl pointer-events-auto relative mt-25">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                    <div className='flex justify-center items-center w-15 h-15 border-3 border-white bg-red-700 shadow-xl rounded-2xl transition duration-300 ease-in-out hover:bg-red-600'>
                        <img
                            src="/assets/closeIcon.png"
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain"
                        />
                    </div>
                </button>
                <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <h2 className="text-3xl font-bold text-white mb-2">{project.name}</h2>
                <p className="text-gray-300 text-lg mb-6">{project.descriptionLong}</p>

                <h3 className="text-lg font-semibold text-white mb-1">Context:</h3>
                <p className="text-gray-400 text-sm mb-4">{project.context}</p>

                <h3 className="text-lg font-semibold text-white mb-2">Tools Used:</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, index) => (
                        <span
                            key={index}
                            className="border-2 border-[#009b5f] text-[#009b5f] text-sm font-semibold px-3 py-1 rounded-full"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
                <div className="mt-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#009b5f] hover:bg-[#01b872] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out inline-block"
                    >
                        More Info
                    </a>
                </div>
            </div>
        </div>
    );
}