import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo-2.svg"
import { Link, useNavigate } from 'react-router-dom';
import sliderpicture1 from '../../assets/sp6.png'
import sliderpicture2 from '../../assets/sp2.png'
import sliderpicture3 from '../../assets/sp8.png'
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from '../../AuthContext';

const textVariants = {
    hidden: { opacity: 0, y: 50 },  // Start below and invisible
    visible: (i) => ({
        opacity: 1,
        y: 0,  // End at the original position
        transition: {
            delay: i * 0.2,  // Delay each item based on its index
            duration: 0.5,
            ease: "easeInOut",
        },
    }),
};
const imageVariants = {
    initial: { opacity: 0 },  // Start hidden
    animate: { opacity: 1 },  // Fade in
    exit: { opacity: 0 },     // Fade out
    transition: {
        duration: 0.5,          // Smooth transition duration
        ease: "easeInOut",
    },
};

const Header = ({ backgroundpicture }) => {
    const slides = [
        {
            id: 1,
            image: sliderpicture3,
            text: "HIGH INTENSITY",
            title: 'WORKOUT',
            description: "FOR WEIGHT LOSS",
            phoneNo: "+51561651165",
            height: 285,
            width: 285
        },
        {
            id: 2,
            image: sliderpicture1,
            text: "HIGH INTENSITY",
            title: 'WORKOUT',
            description: "FOR MUSCLE GAIN",
            phoneNo: "+56561561656",
            height: 450,
            width: 450
        },
        {
            id: 3,
            image: sliderpicture2,
            text: " Wellnss & relaxing",
            title: 'YOGA',
            description: "FOR FLOURISHING AND GOOG HEALTH ",
            phoneNo: "+789513898",
            height: 285,
            width: 285
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const { logout } = useAuth();
    let timer;

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


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };
    return (
        <>
            <div className="relative h-[75vh]"  >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <div className="bg-black-blur h-full w-full" style={{ backgroundImage: `url(${backgroundpicture})` }}></div>
                    <div className="absolute inset-0 bg-black opacity-85"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-4 inset-0">
                    <header className="flex justify-between items-center ">
                        {/* Logo */}
                        <div className="text-white ">
                            <Link to="/">
                                <img src={logo} alt="logo" className="h-12 md:w-28 " />
                            </Link>
                        </div>

                        {/* Navigation for large screens */}
                        <nav className="hidden md:flex text-white">
                            <ul className="flex space-x-6">
                                <li><Link to="/" className="hover:text-orangecolor font-oswald">Home</Link></li>
                                <li><Link to="/" className="hover:text-orangecolor font-oswald">About</Link></li>
                                <li><Link to="/" className="hover:text-orangecolor font-oswald">Classes</Link></li>
                                <li><Link to="/" className="hover:text-orangecolor font-oswald">Contact</Link></li>
                            </ul>
                        </nav>

                        {/* Profile for large screens */}

                        <div className="hidden md:flex items-center relative text-white group space-x-2">
                            <span className="font-semibold font-oswald text-white">{user?.username}</span>
                            <img
                                src={imageSrc}
                                alt="Profile"
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />
                            {/* Hover Menu */}
                            <ul className="absolute top-full bg-black text-gray-400 w-full cursor-pointer rounded shadow-lg p-2 space-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
                                <li>
                                    <Link
                                        to="/profilepage"
                                        className="hover:text-orangecolor font-oswald">Profile
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="hover:text-orangecolor font-oswald cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>


                        {/* Toggle button for small screens */}
                        <div className="md:hidden">
                            <button
                                className="text-white focus:outline-none"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <i className="fas fa-bars text-3xl"></i> {/* FontAwesome or any icon library */}
                            </button>
                        </div>

                        {/* Modal window for small screens */}
                        {isModalOpen && (
                            <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
                                <div className="bg-black w-full h-full p-4 relative">
                                    {/* Close button */}
                                    <button
                                        className="absolute top-4 right-4 text-white text-3xl"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        &times;
                                    </button>

                                    {/* Logo */}
                                    <div className="mb-8 ">
                                        <Link to="/" onClick={() => setIsModalOpen(false)}>
                                            <img src={logo} alt="logo" className="h-12 w-36 " />
                                        </Link>
                                    </div>

                                    {/* Navigation */}
                                    <nav className="text-white mb-8">
                                        <ul className="space-y-6">
                                            <li><Link to="/" className="hover:text-orangecolor font-oswald" onClick={() => setIsModalOpen(false)}>Home</Link></li>
                                            <li><Link to="/" className="hover:text-orangecolor font-oswald" onClick={() => setIsModalOpen(false)}>About</Link></li>
                                            <li><Link to="/" className="hover:text-orangecolor font-oswald" onClick={() => setIsModalOpen(false)}>Classes</Link></li>
                                            <li><Link to="/" className="hover:text-orangecolor font-oswald" onClick={() => setIsModalOpen(false)}>Contact</Link></li>
                                        </ul>
                                    </nav>

                                    {/* Profile for small screens */}                                    
                                     <div className="text-white md:hidden"  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} >  {/* Toggle profile menu on click for small screens Hidden on medium and larger screens  */} 
                                        <div className="relative text-white group ">
                                            <div className='flex gap-2 items-center'><img
                                                src={imageSrc}
                                                alt="Profile"
                                                className="w-10 h-10 rounded-full cursor-pointer"
                                               
                                            />
                                                <span className="font-semibold font-oswald text-white">{user?.username}</span>
                                            </div>
                                            {/* Submenu for small screens */}
                                            {isProfileMenuOpen && (
                                                <ul className="bg-transparent text-white-700 rounded shadow-lg p-1 space-y-2 mt-4">
                                                    <li>
                                                        <Link
                                                            to="/profilepage"
                                                            className="hover:text-orangecolor font-oswald">Profile
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={handleLogout}
                                                            className="hover:text-orangecolor font-oswald cursor-pointer"
                                                        >
                                                            Logout
                                                        </button>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </header>


                    <div className="flex flex-col lg:flex-row w-full relative">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 translate-y-8 text-center lg:text-left" data-aos="fade-up">
                            <motion.div className="transition-transform transform translate-y-12"
                                initial="hidden"
                                animate="visible"
                                key={currentSlide} // Ensures animation runs on slide change
                            >
                                <motion.p className="text-lg mb-4 text-orangecolor uppercase font-oswald" custom={0} variants={textVariants}>
                                    {slides[currentSlide].text}
                                </motion.p>
                                <motion.h2 className="text-3xl lg:text-4xl font-extrabold mb-5 text-white" custom={1} variants={textVariants}>
                                    {slides[currentSlide].title}
                                </motion.h2>
                                <motion.p className="text-xl font-oswald mb-8 text-white" custom={2} variants={textVariants}>
                                    {slides[currentSlide].description}
                                </motion.p>
                                <motion.div className="flex flex-col items-center lg:flex-row lg:items-center" custom={3} variants={textVariants}>
                                    <p className="text-xs mb-5 lg:translate-y-2.5 w-3/12 font-oswald text-white">
                                        {slides[currentSlide].phoneNo}
                                    </p>
                                    <button className="px-2 py-1 bg-orangecolor border border-orangecolor text-xs text-white font-oswald hover:bg-transparent duration-500 ease-out rounded">
                                        START CONSULTING
                                    </button>
                                </motion.div>
                            </motion.div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-center lg:justify-start space-x-5 translate-y-24">
                                {slides.map((slide, index) => (
                                    <button
                                        key={slide.id}
                                        className={`w-6 h-0.5 rounded-sm ${currentSlide === index ? 'bg-orangecolor' : 'bg-gray-300'}`}
                                        onClick={() => handleSlideChange(index)}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-16 lg:mt-0 translate-y-5 lg:translate-y-14 lg:order-2 hidden sm:flex">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={slides[currentSlide].image}  // Ensure a unique key for each image
                                    src={slides[currentSlide].image}
                                    alt={`Slide ${currentSlide + 1}`}
                                    className="object-contain transform"
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    variants={imageVariants}
                                    height={slides[currentSlide].height}
                                    width={slides[currentSlide].width}
                                />
                            </AnimatePresence>
                        </div>
                    </div>



                </div >
            </div >
        </>
    );
}

export default Header;
