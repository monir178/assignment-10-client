import React from 'react';
import { Link } from 'react-router-dom';
import animation from '../../../src/assets/animation/login.json';
import Lottie from 'lottie-react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    return (
        <div className="py-6">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center items-center ">
                <div className="hidden lg:block lg:w-1/2 bg-cover ">
                    <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96 '>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>


                    <form>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" required />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>

                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" required />
                        </div>
                        <div className="mt-8">
                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                        </div>
                    </form>

                    <button className="flex items-center justify-center mt-4 rounded-lg shadow-md hover:bg-gray-100 w-full">
                        <div className="px-4 py-3 text-2xl">
                            <FcGoogle></FcGoogle>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                    </button>
                    <button className="flex items-center justify-center mt-4  rounded-lg shadow-md hover:bg-gray-100 w-full">
                        <div className="px-4 py-3 text-2xl">
                            <FaGithub></FaGithub>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Github</h1>
                    </button>
                    <button className="flex items-center justify-center my-4  rounded-lg shadow-md hover:bg-gray-100 w-full">
                        <div className="px-4 py-3 text-2xl">
                            <FaFacebook></FaFacebook>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Facebook</h1>
                    </button>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to="/register" className="text-xs text-gray-500 uppercase">or sign up</Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;