import React from 'react'
import Mechanic1 from '../assets/mechanic1.png'
import Mechanic2 from '../assets/mechanic2.png'
import Mechanic3 from '../assets/mechanic3.png'
import Wrench from '../assets/icons/wrench.png'
import Screwdriver from '../assets/icons/screwdriver.png'
import Crank from '../assets/icons/crank.png'
import Chainring from '../assets/icons/chainring.png'
import { BsArrowReturnRight } from 'react-icons/bs'

const Service = () => {
  return (
    <div className=' bg-[#90ADC6]'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-screen max-h-[1000px] w-full z-0 space-x-4 bg-[#90ADC6]'>
                    <div className='px-4'>
                        <img className='hidden md:block md:scale-100 md:object-cover' src={Mechanic3} ></img>
                        <img className='hidden md:block md:scale-100 md:my-[-100px]' src={Mechanic1} ></img>
                    </div>
                    {/* content with text */}
                    <div className=''>
                        <h2 className='md:py-10 text-4xl font-bold border-b-4 border-[#FAD02C] text-center'>Services</h2>
                        <p className='text-xl pt-8 text-center'>At Spoke N Wheel, exceptional customer service is at the heart of everything we do. We recognize that your bike is more than just transportation; it's a key to adventure, fitness, and outdoor enjoyment. Our team of skilled technicians is committed to getting you back in the saddle as quickly as possible, with minimal downtime and a focus on your unique needs.</p>
                        <p className='text-xl py-4 text-center'>We strive to provide unbeatable value, offering competitive pricing without compromising on quality. Our comprehensive range of services caters to various budgets and requirements, ensuring a tailored solution for each customer. From the moment you walk through our doors, our friendly staff is eager to assist you and answer any questions you may have.</p>
                        <p className='text-xl py-4 text-center'>Visit Spoke N Wheel and experience our dedication to top-notch service firsthand. Let us show you why we're the go-to destination for all your cycling needs, and together, we'll keep you rolling smoothly for years to come</p>
                        <div className='flex items-center justify-center py-4 group'>
                            <button className='text-2xl font-bold border-4 rounded-lg text-center border-[#FAD02C] px-8 py-4 hover:text-white hover:bg-[#FAD02C]'>
                            <div className='flex items-center justify-center'>
                            Details
                            <BsArrowReturnRight className='group-hover:rotate-90 duration-1000 font-bold text-center ml-2' />
                            </div>
                            </button>
                        </div>
                    </div>                
            </div>
            <div className='pt-5 flex justify-between mt-[200px] md:mt-[-50px] bg-gradient-to-b from-[#90ADC6]] to-[#E9EAEC]'>
                <div>
                <img className='hover:rotate-180 duration-1000' src={Wrench}></img>
                </div>
                <div>
                <img className='hidden md:block hover:rotate-180 duration-1000' src={Chainring}></img>
                </div>
                <div>
                <img className='hover:rotate-180 duration-1000' src={Screwdriver}></img>
                </div>
                <div>
                <img className='hidden md:block hover:rotate-180 duration-1000' src={Crank}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service