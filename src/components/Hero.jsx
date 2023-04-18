import React from 'react'
import MTB from '../assets/mtb2.png'
import { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import wheel from '../assets/bikewheel.png'
import img2 from '../assets/gallery2.jpg'
import img3 from '../assets/gallery3.jpg'
import img4 from '../assets/gallery4.jpg'
import img5 from '../assets/gallery5.jpg'


const Hero = () => {
  const slides = [
    img3,img2,img4,img5
  ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex===0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex===slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 h-full pt-[100px] z-0 bg-[#E9EAEC]" >
        <div class="inset-0 flex items-center justify-start p-10">
            <h2 class="text-[#333652]  font-bold text-xl md:text-3xl text-left bg-[#E9EAEC]">Spoke N Wheel: Your 1977-founded cycling haven, where expert service fuels every pedal-powered adventure. Experience the ride, embrace the lifestyle!</h2>
            <img className='p-2 hover:rotate-180 duration-1000' src={wheel}></img>
        </div>
        <div className='flex justify-end content-center p-4'>
           {/* Scrolling Gallery */}
                <div className=' max-w-[1000px] h-[500px] w-full px-4 relative group'>
                    <div style={{backgroundImage: `url(${slides[currentIndex]})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' >
                        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' >
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
            </div>
        </div>
    </div>

  )
}

export default Hero