import React, {useState} from 'react'
const Logo = '/assets/textlogodark.png'
import {FaBars, FaTimes,} from 'react-icons/fa'
import { BsFillCartFill, BsFillPersonFill, BsPinMapFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const {user} = UserAuth();

  return (
    <div className='z-10 fixed w-full h-[100px] flex md:block justify-center md:justify-between items-center pb-4 bg-[#333652] text-[#E9EAEC]'>
        <div className='flex md:justify-between w-full h-[100px]'>
            <div className='flex items-center w-full md:w-auto md:justify-start justify-between'>
                <div className='flex items-center justify-between md:justify-start pl-2'>
                <Link to='/account'>
                    {user?.displayName ? <img referrerPolicy="no-referrer"src={`${user.photoURL}?sz=200`}className="md:hidden scale-50 rounded-full border-4 border-transparent hover:border-[#FAD02C]"></img>: <BsFillPersonFill className='md:hidden scale-150 text-2xl hover:text-[#FAD02C]  hover:scale-110 duration-500 cursor-pointer'/>}
                </Link>
                </div>
                <Link to="/">
                <img  src={Logo} alt='Logo Image'style={{width: '200px'}}/>
                </Link>
                <div onClick={handleClick} className='md:hidden px-4 z-10 text-[#E9EAEC]'>
                    {!nav ? <FaBars className='scale-150'/> : <FaTimes/>}
                </div>
            </div>
            {/* menu */}
                <div className='flex items-center'>
                    <ul className='hidden md:flex items-center px-4 mr-10'>
                        <li className='m-4 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                        <Link to="/">
                        Home
                        </Link>
                        </li>
                        <li className='m-4 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                        <Link to="/about">
                        About
                        </Link>
                        </li>
                        <li className='m-4 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                        <Link to="/services">
                        Services
                        </Link>
                        </li>
                        <li className='m-4 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                        <Link to="/contact" smooth={true} duration={500}>
                        Contact
                        </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex '>
                <ul className='hidden md:flex items-center'>
                    <li className=''>
                        <Link to='/location'>
                        <BsPinMapFill className=' text-xl m-2 md:scale-125 hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'/>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/account'>
                            {user?.displayName ? <img referrerPolicy="no-referrer"src={`${user.photoURL}?sz=200`}className="scale-50 rounded-full border-4 border-transparent hover:border-[#FAD02C]"></img>: <BsFillPersonFill className='text-2xl m-2 hover:text-[#FAD02C]  hover:scale-110 duration-500 cursor-pointer'/>}
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/cart'>
                        <BsFillCartFill className='text-xl m-2 md:scale-125 hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'/>
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
            

        {/* Hamburger */}

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#333652] flex flex-col text-[#E9EAEC] justify-center items-center '}>
            <li  className='py-6 text-center w-40 text-4xl cursor-pointer'>
                <Link onClick={handleClick} to="/">
                Home
                </Link></li>
            <li className='py-6 m-4 text-center w-40 text-4xl'>
                <Link onClick={handleClick} to="/about">
                About
                </Link>
            </li>
            <li className='py-6 m-4 text-center w-40 text-4xl cursor-pointer'>
                <Link onClick={handleClick} to="/services" >
                Services
                </Link>
            </li>
            <li className='py-6 m-4 text-center w-40 text-4xl cursor-pointer'>
                <Link onClick={handleClick} to="/contact">
                Contact
                </Link>
            </li>
        </ul>
        
    </div>
    
  )
}

export default Navbar