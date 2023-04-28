import React from 'react'
import {BsInstagram, BsFacebook, BsStrava} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex w-auto h-auto bg-[#333652] text-[#E9EAEC] p">
      <div className="grid grid-cols-[1fr,1fr,2fr] w-full pt-6">
        {/* List 1 */}
        <ul className="flex flex-col items-center col-span-1">
          <li className="font-bold md:text-xl border-b-2">Social Media</li>
          <li className='py-4'>
            <a target='_blank' rel='nooppener noreferrer' className='flex justify-between w-full text-gray-300' href='https://www.instagram.com/spoken_wheel/'>
              <BsInstagram className='text-xl md:text-3xl hover:cursor-pointer'/>
            </a>
          </li>
          <li className='py-2'>
            <a target='_blank' rel='nooppener noreferrer' className='flex justify-between w-full text-gray-300' href='https://www.facebook.com/people/Spoke-N-Wheel-Bicycle-Shop/100057492556162/'>
              <BsFacebook className='text-xl md:text-3xl hover:cursor-pointer'/>
            </a>
          </li>
          <li className='py-2'>
            <a target='_blank' rel='nooppener noreferrer' className='flex justify-between w-full text-gray-300' href='https://strava.com'>
              <BsStrava className='text-xl md:text-3xl hover:cursor-pointer'/>
            </a>
          </li>
        </ul>

        {/* List 2 */}

        <ul className="flex flex-col items-center col-span-1">
          <li className="font-bold md:text-xl border-b-2"> Links </li>
          <a className=' py-2 hover:underline text-gray-300' href='/service'>
              Service
          </a>
          <a className=' py-2 hover:underline text-gray-300' href='/about'>
              About
          </a>
          <a className=' py-2 hover:underline text-gray-300' href='/contact'>
              Contact
          </a>
          <a className=' py-2 hover:underline text-gray-300' href='/locator'>
              Store Locator
          </a>
        </ul>

        {/* List 3 */}
        <ul className="flex flex-col justify-center col-span-1 text-right pr-12">
          <li className='font-bold md:text-2xl  hover:cursor-pointer'>Spoke N Wheel Bicycles</li>
          <a className=' py-2 hover:underline md:text-xl text-gray-300' href='/location'>
              <p>6804 Platt Ave</p>
              <p>West Hills, CA 91307</p>
          </a>
        </ul>
      </div>
    </div>
  );
};



export default Footer