import React from 'react';
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'
import signature from '../../assets/signature-1.png'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutStyle = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
            <section className="gap-12 py-10 lg:py-20 bg-black">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center mx-10 justify-between">
                        {/* Left Side Images */}
                        <div className="sm:w-full md:w-2/3 lg:w-1/2 space-y-4 ml-5 flex gap-3  lg:flex-row" data-aos="fade-right">
                            <figure>
                                <img src={about1} alt="About One" className="rounded-lg shadow-md" height={200} width={230} />
                            </figure>
                            <figure>
                                <img src={about2} alt="About Two" className="rounded-lg shadow-md" height={200} width={270} />
                            </figure>
                        </div>

                        {/* Right Side Blog */}
                        <div className="sm:w-full md:w-2/3 lg:w-1/2 mt-8 lg:mt-0" data-aos="fade-left">
                            <div className="text-start space-y-4">
                                <span className="text-gray-400 font-oswald text-xs">Welcome to Gym On Fitness Center</span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-white font-oswald">
                                    Fitness Studio & Gym For Ladies or Men's
                                </h2>
                                <p className="text-gray-400 text-xs">
                                    Regular trips to the gym are great, but don't worry if you can't find a large chunk of time to exercise every day. Our portfolio includes dozens of successfully completed projects of houses of different storeys, with high–quality finishes and good repairs. Building houses is our vocation!
                                </p>
                                <div className="mt-4">
                                    <figure className="inline-flex items-center space-x-2">
                                        <img className="h-10" src={signature} alt="Signature" />
                                    </figure>
                                    <h3 className="text-sm text-gray-400 font-oswald mt-2 sm:text-xs">Marqo Oliva</h3>
                                    <h4 className="text-sm text-gray-400 font-oswald">Director and CEO of Gym Center</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default AboutStyle;
