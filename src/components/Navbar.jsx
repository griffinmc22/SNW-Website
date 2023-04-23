import React, {useState} from 'react'
const Logo = '/assets/textlogodark.png'
import {FaBars, FaTimes,} from 'react-icons/fa'
import { BsFillCartFill, BsFillPersonFill, BsPinMapFill } from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='z-10 fixed w-full h-[100px] flex md:block justify-between items-center p-4 bg-[#333652] text-[#E9EAEC] '>
        <div className='flex justify-between'>
            <div className='pr-8'>
                <img  src={Logo} alt='Logo Image'style={{width: '200px'}}/>
            </div>
            {/* menu */}
                <div className='flex items-center'>
                    <ul className='hidden md:flex items-center px-4 mr-10'>
                        <li className='m-4 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                        <Link to="home" smooth={true} duration={500}>
                        Home
                        </Link>
                        </li>
                        <li className='m-4 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                        <Link to="about" smooth={true} duration={500}>
                        About
                        </Link>
                        </li>
                        <li className='m-4 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                        <Link to="brands" smooth={true} duration={500}>
                        Services
                        </Link>
                        </li>
                        <li className='m-4 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                        <Link to="services" smooth={true} duration={500}>
                        Brands
                        </Link>
                        </li>
                        <li className='m-4 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                        <Link to="contact" smooth={true} duration={500}>
                        Contact
                        </Link>
                        </li>
                    </ul>
                </div>
                <div className='flex'>
                <ul className='hidden md:flex items-center'>
                    <li className=''>
                        <BsPinMapFill className=' text-xl m-2 hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'/>
                    </li>
                    <li className=''>
                        <BsFillPersonFill className='text-2xl m-2 hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'/>
                    </li>
                    <li className=''>
                        <BsFillCartFill className='text-xl m-2 hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'/>
                    </li>
                </ul>
            </div>
            </div>
            

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 text-[#E9EAEC]'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#333652] flex flex-col text-[#E9EAEC] justify-center items-center '}>
            <li  className='py-6 text-center w-40 text-4xl border-2 border-[#E9EAEC] rounded-lg cursor-pointer'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link></li>
            <li className='py-6 m-4 text-center w-40 text-4xl border-2 border-[#E9EAEC] rounded-lg cursor-pointer'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li className='py-6 text-center w-40 text-4xl border-2 border-[#333652] rounded-lg cursor-pointer'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Brands
                </Link>
            </li>
            <li className='py-6 m-4 text-center w-40 text-4xl border-2 border-[#333652] rounded-lg cursor-pointer'>
                <Link onClick={handleClick} to="links" smooth={true} duration={500}>
                Services
                </Link>
            </li>
            <li className='py-6 m-4 text-center w-40 text-4xl border-2 border-[#333652] rounded-lg cursor-pointer'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>
        
    </div>
  )
}

export default Navbar