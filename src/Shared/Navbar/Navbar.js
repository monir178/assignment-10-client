import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    const handleHamburgerMenuToggle = () => {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    };

    return (
        <div className="bg-base-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-gray-700 text-lg font-bold" activeClassName="font-bold">
                                TECH LEARN
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink
                                to="/"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",

                                    };
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/login"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",

                                    };
                                }}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",

                                    };
                                }}
                            >
                                Register
                            </NavLink>
                        </div>
                    </div>
                    <div className="flex items-center md:ml-6">
                        <Link><img
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                            alt="Profile"
                            className="h-8 w-8 rounded-full"
                        /></Link>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={handleHamburgerMenuToggle}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            aria-controls="mobile-menu"
                            aria-expanded={isHamburgerMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <FaBars className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isHamburgerMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <div className="flex flex-col">
                        <NavLink
                            to="/"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",

                                };
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/login"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",

                                };
                            }}
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",

                                };
                            }}
                        >
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
