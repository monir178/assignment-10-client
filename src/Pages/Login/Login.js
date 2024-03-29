import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import animation from '../../../src/assets/animation/login.json';
import Lottie from 'lottie-react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import Swal from 'sweetalert2'

const Login = () => {
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const { providerLogin, setLoading, setUser, signInEmail, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Email Sign In Method
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user?.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    Swal.fire("Your email is not verified. Please check your email")
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })


    };

    //Reset password 
    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                Swal.fire("Reset Link has been sent, please check your email")
            })
            .catch(error => Swal.fire(error.message))
    }

    // Google Sign In Method
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);

                setError('');
                if (user?.emailVerified) {
                    navigate(from, { replace: true })
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Logged In Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    Swal.fire(
                        'No User Found',
                        'Your Email is not Verified',
                        'question'
                    )
                }
            })
            .catch(err => console.error(err));
    }

    //Github Sign In Method
    const githubSignIn = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        providerLogin(githubSignIn)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
                setError('');
                if (user?.uid) {
                    navigate(from, { replace: true })
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Logged In Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    Swal.fire(
                        'No User Found',
                        'Your Email is not Verified',
                        'question'
                    )
                }
            })
            .catch(err => console.error(err));
    }

    //Facebook Sign In Method
    const facebookSignIn = new FacebookAuthProvider();
    const handleFacebookSignIn = () => {
        providerLogin(facebookSignIn)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                if (user?.uid) {
                    navigate(from, { replace: true })
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Logged In Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    Swal.fire(
                        'No User Found',
                        'Your Email is not Verified',
                        'question'
                    )
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="py-6">
            <div className="flex bg-base-200 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center items-center" data-aos="zoom-in">
                <div className="hidden lg:block lg:w-1/2 bg-cover ">
                    <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96 '>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl font-semibold text-center">Welcome back!</p>



                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label className="block  text-sm font-bold mb-2">Email Address</label>
                            <input
                                onBlur={event => setUserEmail(event.target.value)}
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="email"
                                name="email"
                                id="email"
                                placeholder='email' />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block  text-sm font-bold mb-2">Password</label>

                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" placeholder='password' required />
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div className="mt-8">
                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                        </div>
                    </form>
                    <div className='space-y-1'>
                        <button
                            onClick={handleReset}
                            className='text-xs hover:underline text-blue-500'
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button
                        onClick={handleGoogleSignIn}
                        className="flex items-center justify-center mt-4 rounded-lg shadow-md hover:bg-gray-100 w-full">
                        <div className="px-4 py-3 text-2xl">
                            <FcGoogle></FcGoogle>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                    </button>
                    <button
                        onClick={handleGithubSignIn}
                        className="flex items-center justify-center mt-4  rounded-lg shadow-md hover:bg-gray-100 w-full">
                        <div className="px-4 py-3 text-2xl">
                            <FaGithub></FaGithub>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Github</h1>
                    </button>
                    <button
                        onClick={handleFacebookSignIn}
                        className="flex items-center justify-center my-4  rounded-lg shadow-md hover:bg-gray-100 w-full">
                        <div className="px-4 py-3 text-2xl">
                            <FaFacebook></FaFacebook>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Facebook</h1>
                    </button>

                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <Link to="/register" className="text-base font-semibold text-blue-700 hover:text-blue-400">or Sign up</Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;