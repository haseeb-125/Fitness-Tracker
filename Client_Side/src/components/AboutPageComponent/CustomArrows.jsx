import React, { useState } from 'react';

// Customize the Previous Arrow
export const SamplePrevArrow = (props) => {
    const { onClick } = props;
    const [hover, setHover] = useState(false);

    return (
        <div
            className={`absolute top-full transform translate-y-5 left-2 cursor-pointer z-10 ${
                hover ? 'left-[calc(50%-50px)]' : 'left-[calc(50%-50px)]'
            }`}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border ${
                    hover ? 'bg-red-600 border-gray-300' : 'bg-black border-gray-300'
                } transition-colors duration-300`}
            >
                <span className="text-white text-xl">←</span> {/* Left arrow symbol */}
            </div>
        </div>
    );
};

// Customize the Next Arrow
export const SampleNextArrow = (props) => {
    const { onClick } = props;
    const [hover, setHover] = useState(false);

    return (
        <div
            className={`absolute top-full transform translate-y-5 left-16 cursor-pointer z-10 ${
                hover ? 'left-[calc(50%+10px)]' : 'left-[calc(50%+10px)]'
            }`}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border ${
                    hover ? 'bg-red-600 border-gray-300' : 'bg-black border-gray-300'
                } transition-colors duration-300`}
            >
                <span className="text-white text-xl">→</span> {/* Right arrow symbol */}
            </div>
        </div>
    );
};
