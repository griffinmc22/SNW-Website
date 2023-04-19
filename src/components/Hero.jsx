import React from 'react'
import { useState } from 'react';
import {BsArrowRightCircleFill} from 'react-icons/bs'
import Sale from '../assets/sale.png'
import Banner from '../assets/mainpagebanner.jpeg'



const Hero = () => {
  
  

  return (

    <div className="pt-[100px] flex justify-center h-screen w-auto bg-[#E9EAEC]" >
      <div style={{backgroundImage: `url(${Banner})`}} className="group max-h-[400px] bg-cover bg-center bg-no-repeat flex flex-col justify-center text-center items-center h-full w-full hover:cursor-pointer">
        <div className='group-hover:scale-110 duration-300'>
          <img src={Sale} ></img>
        </div>
        <div>
          <button className='py-6 group-hover:scale-125'>
            <BsArrowRightCircleFill className="text-[#E9EAEC] text-5xl"/>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Hero