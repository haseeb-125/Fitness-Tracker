import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-cover bg-center" style={{ backgroundImage: 'url(src/assets/footer-img.jpg)' }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-85"></div>

            <div className="py-6 border-b border-b-gray-500 relative z-10">
                <div className="container mx-auto">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 mr-4">
                            <a href="index.html">
                                <img src="src/assets/logo-2.svg" alt="Footer Logo" className="h-12" />
                            </a>
                        </div>
                        <div className="flex items-center flex-grow ml-36 mr-4">
                            <div className="flex">
                                <img src="src/assets/blog-author-img.jpg" alt="Contact Images" className="h-14 w-14 rounded-full border-2 border-white" />
                                <img src="src/assets/blog-author-img-2.jpg" alt="Contact Images" className="h-14 w-14 rounded-full border-2 border-white -ml-2" />
                                <img
                                    src="src/assets/blog-author-img-3.jpg"
                                    alt="Contact Images"
                                    className="h-14 w-14 rounded-full border-2 border-white -ml-2"
                                />
                            </div>

                            <p className="text-sm ml-4 font-oswald text-gray-400">
                                expert trainers <span className="text-sm font-bold font-oswald text-gray-400">+1 (251) 344 0 66</span> free call!
                            </p>
                        </div>
                        <div>
                            <button className="relative px-12 py-4 bg-orangecolor border border-orangecolor text-xs text-white font-bold font-oswald hover:bg-transparent duration-500 ease-out group">
                                GET A CONSULTATION
                                <div className="absolute bottom-1 right-1 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-white group-hover:border-r-red-500 transition-colors duration-300 ease-in-out"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-transparent text-white relative z-10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
                    <div className="footer-col">
                        <h3 className="text-3xl font-bold font-oswald mb-4">Information</h3>
                        <p className="mb-4 mt-6 font-oswald text-gray-300">
                            Regular trips to the gym are great, but don't worry if you can't find a large chunk of time to exercise every day.
                        </p>
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 border-2 border-red-600 rounded-full transition-colors duration-300 ease-in-out hover:bg-red-600"
                                >
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 border-2 border-orangecolor rounded-full transition-colors duration-300 ease-in-out hover:bg-orangecolor"
                                >
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 border-2 border-orangecolor rounded-full transition-colors duration-300 ease-in-out hover:bg-orangecolor"
                                >
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-10 h-10 border-2 border-orangecolor rounded-full transition-colors duration-300 ease-in-out hover:bg-orangecolor"
                                >
                                    <FaPinterest />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="footer-col">
                        <h3 className="text-3xl font-bold font-oswald mb-4">Contact</h3>
                        <ul>
                            <li className="flex items-center mb-6 mt-6">
                                <div className="flex items-center justify-center w-11 h-11 bg-orangecolor ">
                                    <FaMapMarkerAlt className="text-white" />
                                </div>
                                <p className="ml-2 font-oswald text-gray-300">901 N Pitt Str., Suite 170, VA 22314, USA</p>
                            </li>
                            <li className="flex items-center mb-6">
                                <div className="flex items-center justify-center w-11 h-11 bg-orangecolor ">
                                    <FaPhone className="text-white" />
                                </div>
                                <p className="ml-2 font-oswald text-gray-300">
                                    <a href="callto:(+380)503184707">(+380) 50 318 47 07</a>
                                </p>
                            </li>
                            <li className="flex items-center mb-2">
                                <div className="flex items-center justify-center w-11 h-11 bg-orangecolor ">
                                    <FaEnvelope className="text-white" />
                                </div>
                                <p className="ml-2 font-oswald text-gray-300">
                                    <a href="mailto:username@domain.com">username@domain.com</a>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3 className="text-3xl font-bold font-oswald mb-4">Newsletter</h3>
                        <p className="mb-4 mt-6 font-oswald text-gray-300">Signup for our weekly newsletter to get the latest news.</p>
                        <form className="relative mt-8">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email."
                                className="px-4 py-4 bg-customgray pr-12 w-full" // Padding and width
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orangecolor text-white border-2 border-orangecolor w-12 h-11 flex items-center justify-center transition duration-300 ease-in-out hover:bg-transparent hover: hover:border-orangecolor"
                            >
                                <FaArrowRight /> {/* Use React Icon */}
                                <div className="absolute bottom-0.5 right-0.5 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-white group-hover:border-r-red-500 transition-colors duration-300 ease-in-out"></div>

                            </button>
                        </form>

                    </div>
                </div>
            </div>
            <ul className="flex p-0 m-0 relative z-10">
    {['o-p-o-1', 'o-p-o-2', 'o-p-o-3', 'blog-img-2', 'project-img-1', 'project-img-5', 'project-img-4'].map((img, index) => (
        <li key={index} className="flex-1 relative group overflow-hidden">
            <a href="/About" target="_blank" rel="noopener noreferrer"> {/* Update the URL */}
                <img
                    src={`src/assets/${img}.jpg`}
                    alt="gallery"
                    className="w-full h-[120px] object-cover opacity-50 transition-transform duration-300 transform group-hover:opacity-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaInstagram className="text-white text-3xl transition-transform duration-300 transform group-hover:scale-110" />
                </div>
            </a>
        </li>
    ))}
</ul>
            <div className="py-5 bg-transparent text-gray-300 text-center relative z-10">
                <p>
                    gym on fitness Center <FaHeart className="inline text-red-500" /> © 2024 <a href="https://winsfolio.net/" className="underline">winsfolio.net</a> All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
