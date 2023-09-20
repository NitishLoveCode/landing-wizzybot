import React, { useEffect, useState } from 'react';

const LoadingDots = ({ size, color }) => {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prevActiveDot) => (prevActiveDot === 2 ? 0 : prevActiveDot + 1));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex space-x-3 p-${size * 3} mx-auto w-fit`}>
      <div className={`${color === undefined ? 'bg-blue-500' : color} w-${size} h-${size} rounded-full transform transition-transform duration-500 ${activeDot === 0 ? 'translate-y-[-0.5rem]' : ''}`}></div>
      <div className={`${color === undefined ? 'bg-blue-500' : color} w-${size} h-${size} rounded-full transform transition-transform duration-500 ${activeDot === 1 ? 'translate-y-[-0.5rem]' : ''}`}></div>
      <div className={`${color === undefined ? 'bg-blue-500' : color} w-${size} h-${size} rounded-full transform transition-transform duration-500 ${activeDot === 2 ? 'translate-y-[-0.5rem]' : ''}`}></div>
    </div>
  );
};

export default LoadingDots;
