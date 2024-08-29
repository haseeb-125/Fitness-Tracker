import React from 'react';
import logo from '../../assets/logo-2.svg'
const Header = () => {
    return (
        <>
            <div>
                <div id="header" className='flex'>
                    {/* Background Image */}
                    <div className="absolute flex-none inset-0">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/644927389a1ab06f2f12a9fe/d2cef23b-98a3-4e23-9835-e24209de58f5/IMG_4073.jpg"
                            alt="Background"
                            className="w-full object-cover  opacity-15  "
                        />
                    </div>

                    {/* Navbar */}
                    <nav className="flex justify-between  basis-4/5 items-center py-2 text-white font-display mx-2">
                        <h6><img src={logo} alt="logo" height={120} width={120} /></h6>
                        <ul className="flex space-x-5 text-sm basis-6/12  ">
                            <li>
                                <a href="#" className="hover:text-gray-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-200">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-200">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-200">
                                    Blogs
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className='flex-1 flex items-center space-x-2 mr-1 '>
                        <button className='text-dark-text font-display hover:bg-gray-200 cursor-pointer hover:text-black transition'>
                            Register
                        </button>
                        <button className='.button text-dark-text font-display hover:bg-gray-200 cursor-pointer hover:text-black transition'>
                            Login
                        </button>
                    </div>
                </div>
                {/* Slider */}
                <div className=" relative p-4">
                    <h1 className="text-4xl font-bold text-white">
                        Welcome to our website!
                    </h1>
                    <p className="text-lg text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Header;
