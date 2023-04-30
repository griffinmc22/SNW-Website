import React, {useEffect}  from 'react'
import {GoogleButton } from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {

    const { googleSignIn, user } = UserAuth()
    const navigate = useNavigate();
    

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user) {
          navigate("/account");
        }
      }, [user, navigate]);

  return (
    <div className='flex flex-col items-center h-full w-full justify-center bg-[#E9EAEC] p-4'>
        <div className='flex w-full flex-col items-center'>
            <div className='w-3/4 md:w-1/2 h-[500px] rounded-lg border-4 bg-[#333652] border-[#333652]'>
                <div className='flex flex-col w-full justify-center items-center space-y-12'>
                    <p className='text-2xl font-bold text-[#E9EAEC] pt-4'>Customer Login</p>
                    <a href='/signup' className='text-[#E9EAEC] hover:underline'> No Account? Click to sign up.</a>
                    <div className="flex w-3/4 rounded-lg bg-[#E9EAEC] p-4">
                    <input
                        className="w-full h-full bg-[#E9EAEC] border-none outline-none"
                        placeholder="Username"
                    />
                    </div>
                    <div className="flex w-3/4 rounded-lg bg-[#E9EAEC] p-4">
                    <input
                        className="w-full h-full bg-[#E9EAEC] border-none outline-none"
                        placeholder="Password"
                    />
                    </div>
                    <div className="flex rounded-lg bg-[#E9EAEC] p-4 hover:scale-110">
                    <button className=" text-[#333652]- font-bold text-xl border-none outline-none">
                        Login
                    </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-end w-1/2 pt-2">
                <GoogleButton
                    className="w-[300px] mb-2"
                    onClick={handleGoogleSignIn}
                />
                {/* Add your Discord button here */}
                {/* <DiscordButton className="w-[300px] mb-2 ml-2" /> */}
            </div>
        </div>
    </div>
  )
}

export default Login