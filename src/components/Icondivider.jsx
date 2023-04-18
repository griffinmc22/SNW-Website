import React from 'react'
import Wrench from '../assets/icons/wrench.png'
import Screwdriver from '../assets/icons/screwdriver.png'
import Crank from '../assets/icons/crank.png'
import Chainring from '../assets/icons/chainring.png'

const Icondivider = () => {
  return (
    <div className='p-4 bg-gradient-to-b from-[#90ADC6] to-[#E9EAEC]' >
        <div className='pt-5 flex justify-between mt-[200px] md:mt-[-50px]'>
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
  )
}

export default Icondivider