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
            <img src={Specialized} alt='Specialized Logo' className=' scale-50 m-4 md:scale-100'/>
            <img src={Rockshox} alt='Rockshox Logo' className='scale-50 m-4 md:scale-100'/>
            <img src={KHS} alt='KHS Logo' className='hidden md:block scale-50 m-4 md:h-[100px] md:scale-100'/>
            <img src={Fox} alt='Fox Logo' className='scale-50 m-4 md:h-[100px] md:scale-100'/>
            <img src={Fitbike} alt='Fitbike Logo' className='hidden md:block scale-50 m-4 md:h-[100px] md:scale-100'/>
        </div>
    </div>
  )
}

export default Brands