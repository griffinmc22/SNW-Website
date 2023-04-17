import React, {useState} from 'react'
import Logo from '../assets/textlogolight.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#E9EAEC] text-[#333652] z-50 border-b-2 border-[#333652] '>
        <div>
            <img src={Logo} alt='Logo Image'style={{width: '200px'}}/>
        </div>
        {/* menu */}
           <ul className='hidden md:flex w-[550px] justify-between items-center p-2 mr-10 bg-[#E9EAEC]'>
                <li className='mr-2 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li className='mr-2 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li className='mr-2 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                <Link to="brands" smooth={true} duration={500}>
                Brands
                </Link>
                </li>
                <li className='mr-2 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                <Link to="services" smooth={true} duration={500}>
                Services
                </Link>
                </li>
                <li className='mr-2 font-bold hover:text-[#FAD02C] hover:scale-110 duration-500 cursor-pointer'>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul> 

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#E9EAEC] flex flex-col justify-center items-center '}>
            <li  className='py-6 text-center w-40 text-4xl border-2 border-[#333652] rounded-lg cursor-pointer'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link></li>
            <li className='py-6 m-4 text-center w-40 text-4xl border-2 border-[#333652] rounded-lg cursor-pointer'>
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