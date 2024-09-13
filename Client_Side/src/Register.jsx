import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast
import { FaCamera } from 'react-icons/fa';
// import BgVideo from '../../assets/videos/login.mp4';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import loginbanner from './assets/login-banner2.png'
import logo from './assets/logo-2.svg'

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        profileImage: ''
    });
    const [preview, setPreview] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const { username, email, password } = formData;

    const onChange = e => {
        if (e.target.name === 'profileImage') {
            const file = e.target.files[0];
            setFormData({ ...formData, profileImage: file });
            setPreview(URL.createObjectURL(file));
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Za-z]/.test(email.split('@')[0])) {
            newErrors.email = 'The first character of the email username must be a letter';
        }
        if (!password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const onSubmit = async e => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            Object.values(validationErrors).forEach(error => toast.error(error)); // Toast validation errors
            return;
        }

        const data = new FormData();
        data.append('username', formData.username);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('profileImage', formData.profileImage);

        try {
            const res = await axios.post('http://localhost:3000/user/create/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            navigate('/');
            toast.success(res.data.message);
        } catch (err) {
            toast.error(err.response.data.error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 login-container">
            {/* <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay muted loop>
                <source src={BgVideo} type="video/mp4" />
            </video> */}
            <div className="absolute inset-0">
                <div className="bg-black-blur h-full w-full" style={{ backgroundImage: `url(${loginbanner})` }}></div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            <div className="p-8 rounded-lg backdrop-blur-lg max-w-md w-full z-10">
                <img src={logo} alt="logo" className="h-16 md:w-40 m-auto" />
                <h2 className="text-center text-3xl font-extrabold text-orangecolor font-oswald login-header paragraph mb-4">Register</h2>
                <form onSubmit={onSubmit}>
                    {preview && (
                        <img src={preview} alt="Profile Preview" className="w-24 h-24 rounded-full mx-auto mb-4" />
                    )}
                    <label htmlFor="profileImage" className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center border ${preview ? 'border-transparent' : 'border-gray-300'} cursor-pointer hover:bg-black hover:border-orangecolor transition ease-in-out delay-150 duration-300`}>
                        <span className="text-gray-400">
                            <FaCamera size={40} className='text-orangecolor ' />
                        </span>
                        <input
                            type="file"
                            id="profileImage"
                            name="profileImage"
                            accept="image/*"
                            onChange={onChange}
                            className="hidden"
                        />
                    </label>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-300"></label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={onChange}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 font-oswald text-gray-100 bg-transparent rounded-t-md focus:outline-none focus:ring-orangecolor focus:border-orangecolor focus:z-10 sm:text-sm"
                            required
                            aria-invalid={errors.username ? "true" : "false"}
                            aria-describedby={errors.username ? "username-error" : null}
                        />
                        {errors.username && <p id="username-error" className="text-red-500 text-sm mt-1">{errors.username}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700"></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            onChange={onChange}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 font-oswald text-gray-100 bg-transparent rounded-t-md focus:outline-none  focus:ring-orangecolor focus:border-orangecolor focus:z-10 sm:text-sm"
                            required
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby={errors.email ? "email-error" : null}
                        />
                        {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700"></label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={onChange}
                                className="appearance-none rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 font-oswald text-gray-100 bg-transparent rounded-t-md focus:outline-none  focus:ring-orangecolor focus:border-orangecolor focus:z-10 sm:text-sm"
                                required
                                aria-invalid={errors.password ? "true" : "false"}
                                aria-describedby={errors.password ? "password-error" : null}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute top-0 right-0 mr-4 mt-3 text-gray-300"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errors.password && <p id="password-error" className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <button type="submit" className="relative flex h-10 w-full items-center justify-center overflow-hidden bg-transparent text-white  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orangecolor before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
                        <span className='relative z-10'> Register</span>
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-300">
                        Already have an account? <Link to="/" className="text-orangecolor">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
