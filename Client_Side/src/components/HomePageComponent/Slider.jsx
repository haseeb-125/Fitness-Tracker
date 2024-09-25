import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import sliderpicture1 from '../../assets/sp6.png';
import sliderpicture2 from '../../assets/sp2.png';
import sliderpicture3 from '../../assets/sp8.png';

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: "easeInOut",
        },
    }),
};

const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
        duration: 0.5,
        ease: "easeInOut",
    },
};

const Slider = ({ backgroundpicture }) => {
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
            text: "Wellness & relaxing",
            title: 'YOGA',
            description: "FOR FLOURISHING AND GOOD HEALTH",
            phoneNo: "+789513898",
            height: 285,
            width: 285
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="flex flex-col lg:flex-row w-full relative min-h-[75vh]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div className="bg-cover bg-center h-full w-full" style={{ backgroundImage: `url(${backgroundpicture})` }}></div>
                <div className="absolute inset-0 bg-black opacity-85"></div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col  m-14  justify-center p-16  lg:text-left" data-aos="fade-up">
                <motion.div className="transition-transform transform -translate-y-8"
                    initial="hidden"
                    animate="visible"
                    key={currentSlide}
                >
                    <motion.p className="text-xl md:text-4xl mb-4 text-orangecolor uppercase font-oswald" custom={0} variants={textVariants}>
                        {slides[currentSlide].text}
                    </motion.p>
                    <motion.h2 className="text-3xl md:text-6xl font-extrabold mb-5 text-white" custom={1} variants={textVariants}>
                        {slides[currentSlide].title}
                    </motion.h2>
                    <motion.p className="text-xl md:text-4xl font-oswald mb-8 text-white" custom={2} variants={textVariants}>
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
                <div className="flex justify-center lg:justify-start space-x-5 translate-y-0">
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
                        key={slides[currentSlide].image}
                        src={slides[currentSlide].image}
                        alt={`Slide ${currentSlide + 1}`}
                        className="object-contain transform"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={imageVariants}
                        style={{
                            height: '75', 
                            maxHeight: '75%', 
                            width: '75', 
                            maxWidth: '75%',
                        }}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Slider;

