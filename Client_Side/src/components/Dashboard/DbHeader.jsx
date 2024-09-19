import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const Header = ({ toggleSidebar }) => {
    const [user, setUser] = useState([]);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const imageSrc = user?.profileImage
        ? `http://localhost:3000/${user.profileImage}`
        : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYnc4kjeZGceD1cVSBLJOSJYnbgSoNJY-mA&s`;

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser({
                username: storedUser.username,
                profileImage: storedUser.profileImage,
            });
        }
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Function to open modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setIsProfileMenuOpen(false); 
    };

    return (
        <header className="bg-bg_black text-white shadow-lg py-4 px-6 lg:px-8 flex justify-between items-center">
            <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
                <div className="flex items-center">
                    <Link to="/home " className="text-textgray font-bold font-oswald hover:text-orangecolor transition-all duration-500 text-lg">Back to Home</Link>
                </div>

                {/* Profile for large screens */}

                <div className="hidden md:flex items-center relative text-white group space-x-2">
                    <span className="font-semibold font-oswald text-[#6c7291] cursor-pointer group-hover:text-orangecolor transition-all duration-500 ">{user?.username}</span>
                    <img
                        src={imageSrc}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-contain cursor-pointer"
                        onClick={openModal}
                    />



                    {/* Hover Menu */}
                    <ul className="absolute top-full bg-black text-textgray w-full cursor-pointer rounded shadow-lg p-2 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
                        <li>
                            <Link
                                to="/profilepage"
                                className="hover:text-orangecolor font-oswald">My Profile
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="hover:text-orangecolor font-oswald cursor-pointer"
                            >
                                Log Out
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Profile for small screens */}
                <div className="text-white md:hidden" onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} >  {/* Toggle profile menu on click for small screens Hidden on medium and larger screens  */}
                    <div className="relative text-white group ">
                        <div className='flex gap-2 items-center'><img
                            src={imageSrc}
                            alt="Profile"
                            className="w-10 h-10 rounded-full cursor-pointer"
                            onClick={openModal}
                        />
                            <span className="font-semibold font-oswald text-white">{user?.username}</span>
                        </div>
                        {/* Submenu for small screens */}
                        {isProfileMenuOpen && (
                            <ul className="bg-transparent text-white-700 rounded shadow-lg p-1 space-y-2 mt-4">
                                <li>
                                    <Link
                                        to="/profilepage"
                                        className="hover:text-orangecolor font-oswald">My Profile
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="hover:text-orangecolor font-oswald cursor-pointer"
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                {/* Modal for enlarged image */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative">
                            <img
                                src={imageSrc}
                                alt="Enlarged Profile"
                                className="max-w-96 max-h-fit object-contain"
                            />
                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-0 right-0  mr-4 text-orangecolor text-5xl"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}

                <button onClick={toggleSidebar} className="lg:hidden text-2xl focus:outline-none">
                    <FaBars />
                </button>
            </div>
        </header>
    );
};

export default Header;
