import React from 'react'
import { UserAuth } from '../context/AuthContext';


const Account = () => {

    const { logOut } = UserAuth()
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='w-full h-screen'>
        <p>Hello world</p>
        <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Account