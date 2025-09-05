import { useState } from "react";
import { AlignCenter, X, Sun, Moon } from "feather-icons-react";
import NavLinks from "../utils/Nav.jsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   

        

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };



    const links = [
        { href: "/", text: "Home" },
        { href: "/", text: "Services" },
        { href: "/", text: "Portfolio" },
        { href: "/", text: "Blog" },
        { href: "/", text: "About Us" },
        { href: "/", text: "Contact Us" },
    ];

    return (
        <div>
            <div className="md:hidden flex justify-between items-center p-4">
                <h1 className="text-white text-2xl font-bold cursor-pointer">
                    Logo
                </h1>
                <button onClick={toggleMenu} className="text-white cursor-pointer hover:text-primary">
                    <AlignCenter />
                </button>
            </div>
            <div className="hidden md:flex justify-between items-center p-5 bg-gray-800 rounded-2xl">
                <h1 className="text-white text-2xl font-bold">Logo</h1>
                <NavLinks links={links} className="flex-row" />
                <div className="flex items-center gap-4">
                   
                    <button
                        onClick={toggleLogin}
                        className="border-primary border-2 cursor-pointer hover:bg-primary text-white font-bold py-2 px-4 rounded"
                    >
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                </div>
            </div>
            <div
                className={`md:hidden fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
                    isOpen ? "translateX(0)" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-white text-2xl font-bold cursor-pointer">
                        Logo
                    </h1>
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-primary"
                    >
                        <X />
                    </button>
                </div>
                <NavLinks links={links} className="flex-col" />
                <div className="flex items-center gap-4 m-5">
            
                    <button
                        onClick={toggleLogin}
                        className="border-primary border-2 cursor-pointer hover:bg-primary text-white font-bold py-2 px-4 rounded"
                    >
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
