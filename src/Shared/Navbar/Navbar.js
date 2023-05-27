import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import headLogo from '../../assets/images/icon.jpg';

const Navbar = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleHamburgerMenuToggle = () => {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    };


    return (
        <div className="bg-base-100 sticky z-10 top-0 drop-shadow-lg ">
            <div className="mx-auto px-10">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <img className='w-8 h-8 rounded-full me-1' src={headLogo} alt="" />
                            <Link to="/" className="px-4 rounded-lg py-1 text-white text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-700">
                                TECH LEARN
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center justify-center space-x-4 ">
                            <NavLink
                                to="/courses"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",

                                    };
                                }}
                            >
                                Courses
                            </NavLink>
                            <NavLink
                                to="/blog"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",

                                    };
                                }}
                            >
                                Blog
                            </NavLink>
                            <NavLink
                                to="/faq"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",

                                    };
                                }}
                            >
                                FAQ
                            </NavLink>
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

                            <div>
                                <label className="swap swap-rotate">
                                    <input type="checkbox" />

                                    <svg className="swap-off fill-current w-6 h-6 text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                    <svg className="swap-on fill-current w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center md:ml-6">
                        <Link>
                            {
                                user?.uid ?
                                    <img src={user?.photoURL} alt="Profile" className="h-8 w-8 rounded-full" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} />
                                    :
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Profile" className="h-8 w-8 rounded-full" />

                            }

                        </Link>
                        <ReactTooltip id="my-tooltip" data-tooltip-content={user?.displayName} effect="solid" place="bottom" />
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
                        <div>
                            <label className="swap swap-rotate">
                                <input type="checkbox" />

                                <svg className="swap-off fill-current w-6 h-6 text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                                <svg className="swap-on fill-current w-6 h-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            </label>
                        </div>
                        <NavLink
                            to="/courses"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",

                                };
                            }}
                        >
                            Courses
                        </NavLink>
                        <NavLink
                            to="/blog"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",

                                };
                            }}
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/faq"
                            style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",

                                };
                            }}
                        >
                            FAQ
                        </NavLink>
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
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
