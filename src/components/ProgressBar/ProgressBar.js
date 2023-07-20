import React, { useEffect, useRef} from 'react'
import sisyphus from '../../assets/img/Sisyphus-e1557869810488.jpg'
const ProgressBar = ({ progress }) => {
    const sisyphusRef = useRef(null);
  
    useEffect(() => {
      if (sisyphusRef.current) {
        const progressBarWidth = sisyphusRef.current.parentElement.clientWidth;
        const sisyphusWidth = sisyphusRef.current.clientWidth;
        const sisyphusPosition = (progress * (progressBarWidth - sisyphusWidth)) / 6;
        sisyphusRef.current.style.left = `${sisyphusPosition}px`;
      }
    }, [progress]);
  
    return (
      <div className="relative w-full h-4 bg-gray-200">
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 transition-width ease-in-out duration-300"
          style={{ width: `${(progress * 100) / 6}%` }}
        ></div>
        <img
          ref={sisyphusRef}
          src={sisyphus}
          alt="Sisyphus"
          className="absolute top-0 h-full"
          style={{ width: '24px', height: '24px', zIndex: '1' }}
        />
      </div>
    );
  };

// const ProgressBar = ({ progress }) => {
//     const sisyphusProgress = `${(progress * 100) / 6}%`
//     return (
//         <div className='relative w-full h-4 bg-gray-200'>
//             <div 
//                 className='absolute top-0 left-0 h-full bg-blue-500 transition-width ease-in-out duration-300' 
//                 style={{ width: `${(progress * 100) / 6}%` }}
//             ></div>
//             <div
//                 className="absolute top-0 left-0 w-1/6 h-full bg-no-repeat bg-center"
//                 style={{ backgroundImage: sisyphus, left: sisyphusProgress, zIndex: '999', position: 'absolute' }}
//             ></div>
//         </div>
//     )
//     return (
//         <div className='w-full h-4 bg-gray-200'>
//             <div className={`h-full bg-blue-500 transition-width ease-in-out duration-300`} style={{ width: `${progress * 16.6666667}%` }}></div>
//         </div>
//     )
// }

export default ProgressBar