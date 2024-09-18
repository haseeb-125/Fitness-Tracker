import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import aboutImage from './assets/about-d-1.jpg';
import Counter from './components/Counter';
import headingIcon from './assets/heading-icon.png';
import { faLocationDot, faContactCard, faDumbbell, faHandshake } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from './components/CustomArrows';
import { MeetTrainerSection } from './components/HomePageComponent/MeetTrainerSection';
import Footer from './components/Footer';
import ClientReviewsSlider from './components/ClientReview';


const AboutSection = () => {
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    };

    useEffect(() => {
        const handleScroll = () => {
            if (imgRef.current) {
                const rect = imgRef.current.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
                setIsInView(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section className="gap about-first py-16 bg-black text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="lg:w-1/2 w-full flex flex-col lg:flex-row">
                            <div className="flex flex-col justify-center lg:pr-8">
                                <div className="who-we-are">
                                    <h2 className="text-5xl font-oswald mb-6">
                                        Welcome to GymOn Fitness Training Center & Yoga Studio
                                    </h2>
                                </div>
                                <figure className="reveal1 it-reveal-animation">
                                    <img
                                        ref={imgRef}
                                        className={`transition-transform duration-1000 ${isInView ? 'scale-100' : 'scale-75'} h-auto object-cover`}
                                        src={aboutImage}
                                        alt="About Image One"
                                    />
                                </figure>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full flex flex-col justify-center p-6">
                            <div className="who-we-are space">
                                <div>
                                    <h3 className="text-2xl font-semibold font-oswald mb-2 text-gray-300">Who We Are?</h3>
                                    <p className="font-oswald mb-2 text-gray-300">
                                        A gym isn’t just a place for exercise; it’s the place you go to unwind, socialize & work out. The gym is a wholesome experience. Some of the most successful facilities have several gym features that contribute to the kind of member experience that drives retention and sales. Our mission is to create a nurturing and empowering environment where individuals of all ages, abilities, and fitness aspirations can thrive. We dive headfirst into your brand, content, and goals.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-oswald text-gray-300 mb-2">What's in it for me?</h3>
                                    <ul className=" list-inside space-y-2">
                                        <li className='font-oswald mb-2 text-gray-300'><FontAwesomeIcon icon={faCircleDot} className="text-red-500 mr-2" /> 22,000 square feet Gym</li>
                                        <li className='font-oswald mb-2 text-gray-300'><FontAwesomeIcon icon={faCircleDot} className="text-red-500 mr-2" /> State of the Art Equipment</li>
                                        <li className='font-oswald mb-2 text-gray-300'><FontAwesomeIcon icon={faCircleDot} className="text-red-500 mr-2" /> Programs for weight loss</li>
                                        <li className='font-oswald mb-2 text-gray-300'><FontAwesomeIcon icon={faCircleDot} className="text-red-500 mr-2" /> Meet Expert Trainers</li>
                                        <li className='font-oswald mb-2 text-gray-300'><FontAwesomeIcon icon={faCircleDot} className="text-red-500 mr-2" /> Don't take our word for it</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gap no-top counter-style-one py-16 bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="lg:w-1/3 w-full px-4 mb-8 lg:mb-0 relative">
                            <Counter value={10} label="Years" description="Professional Experience" />
                        </div>
                        <div className="lg:w-1/3 w-full px-4 mb-8 lg:mb-0 relative">
                            <Counter value={90} label="Trainers" description="Experts Trainers Team Members" />
                        </div>
                        <div className="lg:w-1/3 w-full px-4 relative">
                            <Counter value={21} label="Locations" description="Different centers in different states" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="gap about-how-it-works bg-blackcolor py-16">
                <div className="text-center mb-12">
                    <figure className="mb-4 mx-auto">
                        <img src={headingIcon} alt="Heading Icon" className="mx-auto" />
                    </figure>
                    <span className="block text-sm font-semibold font-oswald text-gray-500">Plan + Control</span>
                    <h2 className="text-4xl font-bold font-oswald mt-2 text-white">How it Works</h2>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="lg:w-1/4 md:w-1/2 w-full">
                            <div className="bg-black p-6 border border-gray-700 text-center">
                                <FontAwesomeIcon icon={faLocationDot} className="text-4xl text-red-500 mb-4" />
                                <h3 className="text-xl text-white font-semibold font-oswald mb-2">Select Location</h3>
                                <p className="text-gray-600 font-oswald">The gym is a whole experience. Some of the most successful facilities have several gym</p>
                                <p className='text-gray-600 font-oswald'>1.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full">
                            <div className="bg-black p-6 border border-gray-700 text-center">
                                <FontAwesomeIcon icon={faContactCard} className="text-4xl text-red-500 mb-4" />
                                <h3 className="text-xl font-semibold font-oswald mb-2 text-white">Get Membership</h3>
                                <p className="text-gray-600 font-oswald">The gym is a whole experience. Some of the most successful facilities have several gym</p>
                                <p className='text-gray-600 font-oswald'>2.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full">
                            <div className="bg-black p-6 border border-gray-700 text-center">
                                <FontAwesomeIcon icon={faDumbbell} className="text-4xl text-red-500 mb-4" />
                                <h3 className="text-xl font-semibold font-oswald mb-2 text-white">Start Classes</h3>
                                <p className="text-gray-600 font-oswald">The gym is a whole experience. Some of the most successful facilities have several gym</p>
                                <p className='text-gray-600 font-oswald'>3.</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full">
                            <div className="bg-black p-6 border border-gray-700 text-center">
                                <FontAwesomeIcon icon={faHandshake} className="text-4xl text-red-500 mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-white font-oswald">Healthy & Fit</h3>
                                <p className="text-gray-600 font-oswald">The gym is a whole experience. Some of the most successful facilities have several gym</p>
                                <p className='text-gray-600 font-oswald'>4.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blackcolor mt-0 pb-16">
                <video autoPlay muted loop className="w-full h-auto object-cover">
                    <source src="/src/assets/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="container mx-auto px-4 mt-14">
                    <div className="flex flex-wrap lg:flex-nowrap gap-8">
                        {/* Image Section */}
                        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
                            <div className="relative">
                                <figure className="overflow-hidden">
                                    <img
                                        src="src/assets/certificates.jpg"
                                        alt="Certificates"
                                        className="w-full h-[80vh] object-cover mb-4" /* Adjust height here */
                                    />
                                </figure>
                            </div>
                        </div>

                        {/* Text and Carousel Section */}
                        <div className="lg:w-1/2 w-full">
                            <div className="mb-6">
                                <span className="block text-sm text-gray-300 mb-2 font-oswald">Since we were founded in 1984</span>
                                <h2 className="text-5xl font-bold font-oswald text-white">A Brief History of the GymOn Fitness Center</h2>
                            </div>

                            {/* Slider Section */}
                            <Slider {...settings} className="relative">
                                {/* Slider Item 1 */}
                                <div className="p-4 bg-black">
                                    <div className="flex flex-col lg:flex-row items-center p-6">
                                        <div className="lg:w-1/2 mb-4 lg:mb-0 relative">
                                            <span className="block text-xl font-oswald text-gray-500 pb-1 relative">
                                                2001 - 2006
                                                <span className="absolute left-0 bottom-0 w-28 border-b-2 border-gray-500" />
                                            </span>
                                            <h3 className="text-xl font-semibold font-oswald text-white mt-2">
                                                In the Beginning of GymOn Fitness Center
                                            </h3>
                                            <p className="text-gray-600 mt-2 font-oswald">
                                                The SEGD Global Design Awards represents the best in experiential graphic design and covers a variety of topics.
                                            </p>
                                        </div>
                                        <div className="lg:w-1/2">
                                            <figure>
                                                <img
                                                    src="src/assets/c-img.png"
                                                    alt="Beginning"
                                                    className="w-36 h-36 object-cover ml-10"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>

                                {/* Slider Item 2 */}
                                <div className="p-4 bg-black">
                                    <div className="flex flex-col lg:flex-row items-center p-6">
                                        <div className="lg:w-1/2 mb-4 lg:mb-0 relative">
                                            <span className="block text-xl font-oswald text-gray-500 pb-1 relative">
                                                2007 - 2012
                                                <span className="absolute left-0 bottom-0 w-28 border-b-2 border-gray-500" />
                                            </span>
                                            <h3 className="text-xl font-semibold font-oswald text-white mt-2">
                                                The Dark Ages and Rebirth of Fitness
                                            </h3>
                                            <p className="text-gray-600 mt-2 font-oswald">
                                                The SEGD Global Design Awards represents the best in experiential graphic design and covers a variety of topics.
                                            </p>
                                        </div>
                                        <div className="lg:w-1/2">
                                            <figure>
                                                <img
                                                    src="src/assets/c-img2.png"
                                                    alt="Rebirth"
                                                    className="w-36 h-36 object-cover ml-10"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </Slider>

                        </div>
                    </div>
                </div>
            </section>
            <MeetTrainerSection />

            <section className="py-16 bg-blackcolor">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center">
                        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
                            <div className="mb-8">
                                <span className="block text-xl text-gray-500">Testimonials</span>
                                <h3 className="text-5xl font-bold font font-oswald text-white">Client’s Reviews</h3>
                            </div>
                            <ClientReviewsSlider/>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <figure className="relative">
                                <img src="src/assets/clients-images.png" alt="Client Images" className="w-full h-auto" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default AboutSection;
