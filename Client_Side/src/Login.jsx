import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { useAuth } from './AuthContext.jsx';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from './assets/logo-2.svg'
import loginbanner from './assets/login-banner2.png'
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const { email, password } = formData;
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post('http://localhost:3000/user/login', formData);
            const { token, user } = res.data;
            login(user, token);



            navigate('/home');
            toast.success(`Welcome, ${user.username}!`);
        } catch (err) {
            if (err.response && err.response.data) {
                toast.error(err.response.data.error);
            } else {
                toast.error('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 login-container">
            {/* <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
            >
                <source src={BgVideo} type="video/mp4" />
            </video> */}
            {/* background Image */}
            <div className="absolute inset-0">
                <div className="bg-black-blur h-full w-full" style={{ backgroundImage: `url(${loginbanner})` }}></div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            <div className="relative max-w-md w-full rounded-lg  overflow-hidden z-10">
                <div className="px-6 py-8 backdrop-blur-lg ">
                    <img src={logo} alt="logo" className="h-16 md:w-40 m-auto" />
                    <h2 className="text-center text-3xl font-extrabold text-orangecolor login-header font-oswald paragraph">Login</h2>
                    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none font-oswald relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-100 bg-transparent rounded-t-md focus:outline-none  focus:border-orangecolor focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none font-oswald block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-100 bg-transparent rounded-b-md focus:outline-none  focus:border-orangecolor focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                        value={password}
                                        onChange={onChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute top-0 right-0 mr-4 mt-3 text-white"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="relative flex h-10 w-full items-center justify-center overflow-hidden bg-transparent text-white  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orangecolor before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
                            >
                                <span className='relative z-10'>{loading ? 'Logging in...' : 'Login'}</span>
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-4">
                        <p className="text-gray-300 font-oswald">
                            Don't have an account? <Link to="/register" className="text-orange-600 visited:text-orangecolor">Register here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
