import React, { useState, useEffect } from 'react';
import './Header.css';

const images = [
  '/software.png',
  '/elec.png',
  // '/mechanichal.png',
  // '/bio.png',
  // '/civil.png',
  // '/chemichal.png'

  // Add as many images as you want
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000); // 0.3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="header-bg-responsive h-screen w-screen flex items-center justify-center text-white transition-all duration-500"
      style={{
        backgroundImage: `url('${images[currentImageIndex]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       
        margin: 0,
        padding: 0,
      }}
    >
      <div className="header-overlay flex items-center justify-center w-full h-full ">
        <div className="rounded-2xl text-center max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Campus Hub</h1>
          <p className="text-lg mb-6">
            Connect, collaborate, and grow with your campus community.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;



// import React from 'react'
// import './Header.css';


// const Header = () => {
//   return (
//     <div
//       className="header-bg-responsive h-screen w-screen flex items-center justify-center text-white"
//       style={{
//         backgroundImage: `url('/image.png')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center right',
//         backgroundRepeat: 'no-repeat',
       
//         margin: 0,
//         padding: 0,
//       }}
//     >
//       <div className="header-overlay flex items-center justify-center w-full h-full">
//         <div className=" rounded-2xl text-center max-w-md mx-auto">
//           <h1 className="text-4xl font-bold mb-4">Welcome to Campus Hub</h1>
//           <p className="text-lg mb-6">
//             Connect, collaborate, and grow with your campus community.
//           </p>
//           <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300">
//             Sign In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
