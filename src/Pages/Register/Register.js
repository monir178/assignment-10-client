import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import animation from '../../../src/assets/animation/register.json';
import Lottie from 'lottie-react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const Register = () => {
    const [error, setError] = useState('');

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        console.log(name, photoURL, email, password, confirmPassword);


        if (password === confirmPassword) {

            //Create Account
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    setError('');
                    form.reset();
                    handleUpdateUserProfile();
                    handleEmailVerification();

                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Registration Successful. Check your email for verification',
                        showConfirmButton: false,
                        timer: 3000
                    });
                })
                .catch(error => {
                    console.error(error);
                    setError(error.message);
                    Swal.fire(error.message);
                });
        } else {
            setError('Passwords do not match');
        }
    }

    //Update user profile
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {
                console.log("user updated");
            })
            .catch((error) => {
                console.error(error);
            })
    }
    //Email Verification
    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }




    return (
        <div className="py-6">
            <div className="flex bg-base-200 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl justify-center items-center" data-aos="fade-in">
                <div className="hidden lg:block lg:w-1/2 bg-cover">
                    <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl font-semibold text-center">Register Here!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label className="block text-sm font-bold mb-2">Your Full Name</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name="name" placeholder='your full name' required />
                        </div>
                        <div className="mt-4">
                            <label className="block  text-sm font-bold mb-2">Upload Your Photo </label>
                            <input type="file" className="file-input file-input-md file-input-bordered w-full " name="photoURL" />
                            {/* <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name="photoURL" /> */}
                        </div>
                        <div className="mt-4">
                            <label className="block  text-sm font-bold mb-2">Email Address</label>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" placeholder='email' required />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block  text-sm font-bold mb-2">Password</label>
                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" placeholder='password' required />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block  text-sm font-bold mb-2">Confirm Password</label>
                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="confirm" placeholder='confirm password' required />
                        </div>
                        <p className='text-red-500'>{error}
                        </p>
                        <div className="mt-8">
                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Register</button>
                        </div>
                    </form>

                    <div className="mt-4 flex items-center justify-between">

                        <span className="border-b w-1/5 md:w-1/4"></span>

                        <Link to="/login" className="text-base font-semibold text-blue-700 hover:text-blue-400">or Login</Link>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;