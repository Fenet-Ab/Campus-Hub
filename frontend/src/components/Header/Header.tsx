import React, { useState, useEffect } from 'react';
import './Header.css';

const images: string[] = [
  '/software.png',
  '/elec.png',
 
];



const Header: React.FC<any> = ({ setShowLogin }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) =>
        (prevIndex + 1) % images.length
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="header-bg-responsive h-screen w-screen flex items-center justify-center text-white transition-all duration-500 brightness-160 "
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       
        margin: 0,
        padding: 0,
      }}
    >
     
     {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div> */}
      
      
      <div className="header-overlay flex items-center justify-center w-full h-full relative opacity-90 text-white">
        <div className="rounded-2xl text-center  mx-auto  p-6 ">
          <h1 className="text-4xl font-bold mb-2 ">Connect, Collaborate, Conquer Your Campus Life</h1>
          <p className="text-xl mb-6 max-w-2xl max-auto ml-20">
          CampusHub is your all-in-one platform to find study partners, discover events, buy & sell items, and build your university community.
          </p>
          <button onClick={() => setShowLogin?.(true)} className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300">
            Join the community
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header; 