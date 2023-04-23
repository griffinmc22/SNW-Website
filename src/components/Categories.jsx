import React from 'react'
const Mtb = new URL('../assets/Categories/mtb.png', import.meta.url).href;
const Road = new URL('../assets/Categories/road.png', import.meta.url).href;
const Electric = new URL('../assets/Categories/electric.png', import.meta.url).href;
const Gravel = new URL('../assets/Categories/gravel.png', import.meta.url).href;
const Mechanic = new URL('../assets/mechanic.png', import.meta.url).href;

const Categories = () => {
  return (
    <div className='flex w-auto h-auto bg-[#E9EAEC] justify-center items-start py-8'>
        <div className='grid grid-cols-2 sm:gap-12 gap-6 text-black rounded-lg px-4'> 
            <div className='relative group'>
                <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer' src={Mtb} ></img>
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
            <div className='col-span-2'>
            <div className='col-span-2'>
          <div className='grid grid-cols-2 md:grid-cols-4 sm:gap-12 gap-6 text-black rounded-lg'>
            {/* Add your 4-column grid content here */}
            <div className='relative group'>
              <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer w-full h-48 object-cover' src={Mtb}></img>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Road</p>
              {/* Add additional content for this item */}
            </div>
            <div className='relative group'>
              <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer w-full h-48 object-cover' src={Mtb}></img>
              {/* Add additional content for this item */}
            </div>
            <div className='relative group'>
              <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer w-full h-48 object-cover' src={Mtb}></img>
              {/* Add additional content for this item */}
            </div>
            <div className='relative group'>
              <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer w-full h-48 object-cover' src={Mtb}></img>
              {/* Add additional content for this item */}
            </div>
          </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Categories