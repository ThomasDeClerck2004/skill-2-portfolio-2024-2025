import { useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import phoneIcon from "../assets/phoneIcon.png";
import closeIcon from "../assets/closeIcon.png";

export default function Nav() {
    const location = useLocation();
    const isHashActive = (hash) => location.hash === hash;

    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-[#131313] text-white p-4 shadow-md">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <NavLink
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
                    <h1 className="text-lg font-bold text-gray-400">
                        <span className="whitespace-nowrap">Thomas De Clerck</span>&nbsp;
                        <span className="sm:inline-block hidden">| IT-student</span>
                    </h1>
                </NavLink>
                
                <ul className="list-none hidden sm:flex flex-row gap-10 text-lg font-semibold">
                    <NavLink 
                        to="/#about" 
                        className={() =>
                            isHashActive('#about') ? 'text-gray-400' : 'text-[#009b5f] hover:text-gray-300'
                        }
                    >
                        About
                    </NavLink>

                    <NavLink 
                        to="/#work" 
                        className={() =>
                            isHashActive('#work') ? 'text-gray-400' : 'text-[#009b5f] hover:text-gray-300'
                        }
                    >
                        Work
                    </NavLink>

                    <NavLink 
                        to="/#contact" 
                        className={() =>
                            isHashActive('#contact') ? 'text-gray-400' : 'text-[#009b5f] hover:text-gray-300'
                        }
                    >
                        Contact
                    </NavLink>
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? closeIcon : phoneIcon}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[#131313] border border-gray-600 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex flex-col gap-4 text-lg font-semibold">
                            <NavLink
                                to="/#about"
                                className={() =>
                                    isHashActive('#about') ? 'text-gray-400' : 'text-[#009b5f] hover:text-gray-300'
                                }
                                onClick={() => {
                                    setToggle(false);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                About
                            </NavLink>

                            <NavLink
                                to="/#work"
                                className={() =>
                                    isHashActive('#work') ? 'text-gray-400' : 'text-[#009b5f] hover:text-gray-300'
                                }
                                onClick={() => {
                                    setToggle(false);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Work
                            </NavLink>

                            <NavLink
                                to="/#contact"
                                className={() =>
                                    isHashActive('#contact') ? 'text-gray-400' : 'text-[#009b5f] hover:text-gray-300'
                                }
                                onClick={() => {
                                    setToggle(false);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Contact
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}