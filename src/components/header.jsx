import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div className="flex flex-col">
            {/* Navbar */}
            <nav className="bg-blue-600 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">My Website</h1>
                    
                    <ul className="flex space-x-4">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "text-red-600" : "text-gray-600 hover:text-gray-900"}
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? "text-red-600" : "text-gray-600 hover:text-gray-900"}
                    >
                        About
                    </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
}