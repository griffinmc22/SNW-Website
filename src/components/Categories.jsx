import React from 'react'
import MTB from '../assets/Categories/mtb.png'
import Road from '../assets/Categories/road.png'
import Electric from '../assets/Categories/electric.png'
import Gravel from '../assets/Categories/gravel.png'
import Mechanic from '../assets/mechanic.png'

const Categories = () => {
  return (
    <div className='flex w-auto h-auto bg-[#E9EAEC] justify-center items-start py-8'>
        <div className='grid grid-cols-2 sm:gap-12 gap-6 text-black rounded-lg px-4'> 
            <div className='relative group'>
                <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer' src={MTB} ></img>
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:border-black rounded-lg font-bold text-4xl p-2 group-hover:cursor-pointer'>Mountain</p>
            </div>
            <div className='relative group'>
                <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer' src={Road}></img>
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Road</p>
            </div>
            <div className='relative group'>
                <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer' src={Electric}></img>
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Electric</p>
            </div>
            <div className='relative group'>
                <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer' src={Gravel}></img>
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Gravel</p>
            </div>
            <div className='relative group col-span-2 justify-self-stretch'>
                <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer w-full object-cover' src={Mechanic}></img>
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Services</p>
            </div>
            
        </div>
    </div>
  )
}

export default Categories