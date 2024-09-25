// Header.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo-2.svg";
import { useAuth } from '../../AuthContext';

const Header = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser({
                username: storedUser.username,
                profileImage: storedUser.profileImage,
            });
        }
    }, []);

    const imageSrc = user?.profileImage
        ? `http://localhost:3000/${user.profileImage}`
        : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYnc4kjeZGceD1cVSBLJOSJYnbgSoNJY-mA&s`;

    // Function to open modal
    const openModal = () => {
        setIsProfileModalOpen(true);
        setIsModalOpen(false);
    };

    // Function to close modal
    const closeModal = () => {
        setIsProfileModalOpen(false);
        setIsProfileMenuOpen(false);
        setIsModalOpen(false);
    };

    return (
        <header className="flex bg-black justify-between items-center p-4">
            {/* Logo */}
            <div className="text-white">
                <Link to="/home">
                    <img src={logo} alt="logo" className="h-12 md:w-28" />
                </Link>
            </div>

            {/* Navigation for large screens */}
            <nav className="hidden md:flex text-white">
                <ul className="flex space-x-6">
                    <li><Link to='/db/dashboard' className="hover:text-orangecolor font-oswald">Dashboard</Link></li>
                    <li><Link to="/home" className="hover:text-orangecolor font-oswald">Home</Link></li>
                    <li><Link to="/about" className="hover:text-orangecolor font-oswald">About</Link></li>
                    <li><Link to="/" className="hover:text-orangecolor font-oswald">Classes</Link></li>
                    <li><Link to="/" className="hover:text-orangecolor font-oswald">Contact</Link></li>
                </ul>
            </nav>

            {/* Profile for large screens */}
            <div className="hidden md:flex items-center relative text-white group space-x-2">
                <span className="font-semibold font-oswald">{user?.username}</span>
                <img
                    src={imageSrc}
                    alt="Profile"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    onClick={openModal}
                />
                {/* Hover Menu */}
                <ul className="absolute top-full bg-black text-gray-400 w-full cursor-pointer rounded shadow-lg p-2 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
                    <li><Link to="/profilepage" className="hover:text-orangecolor font-oswald">My Profile</Link></li>
                    <li><span className="hover:text-orangecolor font-oswald" onClick={handleLogout}>Logout</span></li>
                </ul>
            </div>

            {/* Toggle for small screens */}
            <div className="flex items-center space-x-3 md:hidden">
                <div className="text-white">
                    <img
                        src={imageSrc}
                        alt="Profile"
                        className="w-8 h-8 rounded-full cursor-pointer"
                        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    />
                </div>
                <button onClick={() => setIsModalOpen(!isModalOpen)}>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </button>
            </div>

            {/* Modal for small screens */}
            <div
                className={`fixed left-0 top-0 w-full h-full bg-opacity-50 bg-black z-50 transition-transform ${isModalOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="w-64 bg-gray-800 h-full flex flex-col p-4">
                    <div className="flex justify-between items-center mb-8">
                        <img src={logo} alt="Logo" className="h-16" />
                        <button className="text-white" onClick={closeModal}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L12.414 10l4.95 4.95a1 1 0 01-1.414 1.414l-.707-.707L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414l4.95-4.95L3.586 5.05a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 8.586z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        <Link to="/home" className="text-white">Home</Link>
                        <Link to="/" className="text-white">About</Link>
                        <Link to="/" className="text-white">Classes</Link>
                        <Link to="/" className="text-white">Contact</Link>
                    </nav>
                </div>
            </div>

            {/* Profile Modal */}
            {isProfileModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white w-1/3 rounded-lg p-4 shadow-lg relative">
                        <button
                            className="absolute top-2 right-2 text-gray-700"
                            onClick={closeModal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <h2 className="text-xl font-semibold mb-4">User Profile</h2>
                        <div className="flex justify-center items-center mb-4">
                            <img
                                src={imageSrc}
                                alt="Profile"
                                className="w-20 h-20 rounded-full"
                            />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-700 text-center">
                            {user?.username}
                        </h3>
                        <div className="text-center space-y-2">
                            <Link to="/profilepage" className="text-blue-500">My Profile</Link>
                            <button onClick={handleLogout} className="text-blue-500">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
