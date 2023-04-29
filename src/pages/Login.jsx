import React from 'react'
import {GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

const Login = () => {

    const { googleSignIn, user, logOut } = UserAuth()
    
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error)
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='h-full'>
        {user?.displayName ? <button onClick={handleSignOut}>Sign Out</button> : <GoogleButton onClick={handleGoogleSignIn}/>}
    </div>
  )
}

export default Login