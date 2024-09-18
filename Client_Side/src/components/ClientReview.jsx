import React, { useState, useRef } from 'react';
import Slider from 'react-slick'; // Ensure you have the slick-carousel installed

const ClientReviewsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null); // Create a ref for the Slider
    const slides = [
        {
            text: "Comprehensive services, state-of-the-art equipment, and a supportive environment ensuring members achieve their fitness objectives comfortably and effectively.",
            name: "Marko Marlee",
            title: "Chairman, Building Corp",
        },
        {
            text: "The instructors are fantastic – very friendly and enthusiastic. The activities are varied from week to week which keeps it exciting. I would highly recommend this gym.",
            name: "Christopher",
            title: "Social Worker",
        },
        {
            text: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            name: "Kevin Samuel",
            title: "Creative Head",
        },
        {
            text: "Sed rhoncus nulla turpis, vitae rutrum velit iaculis et. Curabitur vestibulum, erat non imperdiet vulputate, est neque iaculis mi, at malesuada eros ante sit amet elit.",
            name: "Donald Paul",
            title: "Fitness Trainer",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index
    };

    const handleRectangleClick = (index) => {
        setCurrentSlide(index); // Update the current slide index
        sliderRef.current.slickGoTo(index); // Use slickGoTo to change the slide
    };

    return (
        <div className="relative">
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div className="p-6 bg-blackcolor" key={index}>
                        <p className="text-gray-400 mb-4 text-lg">{slide.text}</p>
                        <div className="flex items-center">
                            <div className="w-6 h-6 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" className="text-red-600">
                                    {/* SVG content */}
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-400">{slide.name}</h3>
                                <p className="text-gray-400">{slide.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="flex mt-4 ml-6">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleRectangleClick(index)} // Use the click handler
                        className={`w-6 h-1 mx-2 cursor-pointer ${currentSlide === index ? 'bg-red-600' : 'bg-gray-400'}`} // Change color based on active state
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ClientReviewsSlider;
