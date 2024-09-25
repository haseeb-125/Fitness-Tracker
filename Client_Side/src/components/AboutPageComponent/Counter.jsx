// src/components/Counter.js

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ value, label, description }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // Duration of the animation in ms
      const start = 0;
      const end = value;
      const increment = end / (duration / 100);
      
      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(current));
        }
      }, 100);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="counter-data group text-center bg-black p-6 border border-gray-700 shadow-lg transition-transform transform hover:translate-y-[-4px] hover:shadow-xl hover:shadow-gray-800 relative">
      <div className="count text-5xl font-bold font-oswald mb-4">
        <span className="counter text-white">{count}</span>
        <span className="text-red-500">+</span>
        <i className="text-sm text-gray-300 font-oswald">{label}</i>
      </div>
      <h4 className="text-sm font-semibold text-gray-300 font-oswald">{description}</h4>
      <div className="absolute bottom-1 right-1 w-0 h-0 border-t-[14px] border-t-transparent border-r-[14px] border-r-gray-500 group-hover:border-r-red-500 transition-colors duration-300 ease-in-out"></div>
    </div>
  );
};

export default Counter;
