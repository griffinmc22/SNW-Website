import React from 'react'
const Mtb = '/assets/Categories/mtb.png'
const Road = '/assets/Categories/road.png'
const Electric = '/assets/Categories/electric.png'
const Gravel = '/assets/Categories/gravel.png'
const Mechanic = '/assets/Categories/mechanic.png'
const Accessories = '/assets/Categories/accessories.png'
const Apparel = '/assets/Categories/apparel.png'
const Maintenance = '/assets/Categories/maintenance.png'
const Rentals = '/assets/Categories/rentals.png' 

const Categories = () => {
  return (
    <div className='flex w-auto h-auto bg-[#E9EAEC] justify-center items-start py-8'>
        <div className='grid grid-cols-2 sm:gap-12 gap-6 text-black rounded-lg px-4'> 
            <div className='relative group'>
                <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer brightness-50' src={Mtb} ></img>
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:border-black rounded-lg font-bold text-4xl p-2 group-hover:cursor-pointer'>Mountain</p>
            </div>
            <div className='relative group'>
                <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer brightness-50' src={Road}></img>
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Road</p>
            </div>
            <div className='relative group'>
                <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer brightness-50' src={Electric}></img>
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Electric</p>
            </div>
            <div className='relative group'>
                <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer brightness-50' src={Gravel}></img>
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Gravel</p>
            </div>
            <div className='relative group col-span-2 justify-self-stretch'>
                <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer w-full object-cover brightness-50' src={Mechanic}></img>
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Services</p>
            </div>
            <div className='col-span-2'>
            <div className='col-span-2'>
          <div className='grid grid-cols-2 md:grid-cols-4 sm:gap-12 gap-6 text-black rounded-lg'>
            {/* Add your 4-column grid content here */}
            <div className='relative group'>
              <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer w-full h-48 object-cover brightness-50' src={Rentals}></img>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Rentals</p>
            </div>
            <div className='relative group'>
              <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer w-full h-48 object-cover brightness-50' src={Maintenance}></img>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Maintenance</p>
            </div>
            <div className='relative group'>
              <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer w-full h-48 object-cover brightness-50' src={Apparel}></img>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Apparel</p>
            </div>
            <div className='relative group'>
              <img className='rounded-lg group-hover:opacity-50 opacity-75 group-hover:cursor-pointer w-full h-48 object-cover brightness-50' src={Accessories}></img>
              <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white group-hover:border-4 group-hover:bg-black group-hover:cursor-pointer group-hover:border-black rounded-lg font-bold text-4xl p-2'>Accessories</p>
            </div>
          </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Categories