import React from 'react'
import Specialized from '../assets/specialized.png'
import Rockshox from '../assets/rockshox.png'
import KHS from '../assets/khs.png'
import Fox from '../assets/fox.png'
import Fitbike from '../assets/fitbike.png'

const Brands = () => {
  return (
    <div className='h-[200px] w-full bg-gradient-to-b from-[#E9EAEC] to-[#90ADC6] justify-between items-center'>
        <div className='flex justify-between pt-4'>
            <img src={Specialized} alt='Specialized Logo' className='h-[75px] w-[75px] m-4 md:h-[100px] md:w-[100px]'/>
            <img src={Rockshox} alt='Rockshox Logo' className='h-[75px] w-[75px] m-4 md:h-[100px] md:w-[100px]'/>
            <img src={KHS} alt='KHS Logo' className='h-[75px] w-[75px] m-4 md:h-[100px] md:w-[100px]'/>
            <img src={Fox} alt='Fox Logo' className='h-[75px] w-[75px] m-4 md:h-[100px] md:w-[100px]'/>
            <img src={Fitbike} alt='Fitbike Logo' className='h-[75px] w-[75px] m-4 md:h-[100px] md:w-[100px]'/>
        </div>
    </div>
  )
}

export default Brands