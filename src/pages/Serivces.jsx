import React from 'react'
const Header = '/assets/service/serviceheader.png'
const Menu1 = '/assets/service/1.png'
const Menu2 = '/assets/service/2.png'
const Menu3 = '/assets/service/tuneupv2.png'




const Serivces = () => {
  return (
    <div className='h-auto flex flex-col justify-start bg-[#E9EAEC]'>
        <img className=' px-6 pt-6' src={Header}></img>
        <img className='px-6 pt-6' src={Menu3}></img>
        <div className='grid md:grid-cols-2 md:space-x-2 p-6'>
            <img src={Menu1} ></img>
            <img src={Menu2} ></img>
        </div>
    </div>
  )
}

export default Serivces