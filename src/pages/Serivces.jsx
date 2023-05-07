import React from 'react'
import Pricing from '../components/Pricing'
import A_la_carte from '../components/A_la_carte'
const Header = '/assets/service/serviceheader.png'
const Menu1 = '/assets/service/1.png'
const Menu2 = '/assets/service/2.png'
const Menu3 = '/assets/service/tuneupv2.png'




const Serivces = () => {
  return (
    <div className=' bg-[#E9EAEC]'>
        <Pricing/>
        <A_la_carte/>
    </div>
  )
}

export default Serivces