import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo-2.svg"
import logo1 from "../../assets/icon.png"
import { Link } from 'react-router-dom';
const Header = () => {
    const slides = [
        {
            id: 1,
            image: 'https://via.placeholder.com/300x300.png?text=Image+1',
            title: 'Slide 1 Title',
            description: 'This is the description for slide 1.',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/300x300.png?text=Image+2',
            title: 'Slide 2 Title',
            description: 'This is the description for slide 2.',
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/300x300.png?text=Image+3',
            title: 'Slide 3 Title',
            description: 'This is the description for slide 3.',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

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
            <div className="relative h-[75vh]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <div className="bg-black-blur h-full w-full"></div>
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-4 inset-0">
                    <header className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="text-white font-bold text-2xl">
                            <Link to={"/"} ><img src={logo} alt="logo" height={100} width={100} /></Link>
                        </div>
                        {/* Navigation */}
                        <nav className="text-white">
                            <ul className="flex space-x-6">
                                <li><Link to={"/"} className="hover:text-orangecolor font-oswald" >Home</Link></li>
                                <li><Link to={"/"} className="hover:text-orangecolor font-oswald">About</Link></li>
                                <li><Link to={"/"} className="hover:text-orangecolor font-oswald">Classes</Link></li>
                                <li><Link to={"/"} className="hover:text-orangecolor font-oswald">Contact</Link></li>
                            </ul>
                        </nav>

                        {/* Profile */}
                        <div className="relative text-white group">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYnc4kjeZGceD1cVSBLJOSJYnbgSoNJY-mA&s"
                                alt="Profile"
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />

                            {/* Hover Menu */}
                            <ul className="absolute right-0 mt-1 bg-white text-gray-300 rounded shadow-lg p-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <li><a href="#" className="hover:text-orangecolor font-oswald">Profile</a></li>
                                <li><a href="#" className="hover:text-orangecolor font-oswald">Settings</a></li>
                                <li><a href="#" className="hover:text-orangecolor font-oswald">Logout</a></li>
                                <li><a href="#" className="hover:text-orangecolor font-oswald">Help</a></li>
                            </ul>
                        </div>


                    </header>

                    {/* Slider Section */}
                    <div className="flex w-full h-screen">

                        {/* Text Section */}
                        <div className="w-1/2 h-full flex flex-col justify-center p-8">
                            <div className="transition-transform transform translate-y-0">
                                <h2 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h2>
                                <p className="text-lg mb-8">{slides[currentSlide].description}</p>
                                <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-1/2 h-full flex items-center justify-center">
                            <img
                                src={slides[currentSlide].image}
                                alt={`Slide ${currentSlide + 1}`}
                                className="w-3/4 h-3/4 object-cover"
                                height={100} width={100}
                            />
                        </div>
                        {/* Navigation Buttons */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    className={`w-4 h-4 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                    onClick={() => handleSlideChange(index)}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
