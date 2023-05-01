// src/pages/Signup.jsx
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {GoogleButton } from 'react-google-button';

const Signup = () => {
    const { googleSignIn, user } = UserAuth()
    const navigate = useNavigate();

    const { emailSignUp } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirm, setConfirm] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const result = await emailSignUp(email, password, firstname, lastname);
        if (!result.success) {
            setError(result.error);
            console.log(result.error)
          } else {
            setError(null);
            navigate('/account')
          }
    };
    

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }

  const isEmpty = (obj) => {
    return obj === null || obj === undefined || (Object.keys(obj).length === 0 && obj.constructor === Object);
  };

  useEffect(() => {
    if (!isEmpty(user)) { // Check if user is not empty
      console.log(user);
      navigate('/account');
    }
  }, [user, navigate]);

  return (
    <div className='flex flex-col items-center h-full w-full justify-center bg-[#E9EAEC] p-4'>
        <div className='flex w-full flex-col items-center'>
            <div className='w-full md:w-1/2 pb-4 rounded-lg border-4 bg-[#333652] border-[#333652]'>
                <form onSubmit={handleSubmit}>
                <div className='flex flex-col w-full justify-center items-center space-y-12'>
                    <p className='text-2xl font-bold text-[#E9EAEC] pt-4'>Customer Registration</p>
                    <a href='/login' className='text-[#E9EAEC] hover:underline'> Already Have an account? Click to sign in.</a>
                    <div className="flex w-3/4 rounded-lg bg-[#E9EAEC] p-4">
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-full bg-[#E9EAEC] border-none outline-none"
                        placeholder="Email"
                        required
                    />
                    </div>
                    <div className='flex w-3/4'>
                        <div className="flex w-1/2 rounded-lg bg-[#E9EAEC] p-4 mr-2 ">
                        <input
                            type='firstname'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            className="w-full h-full bg-[#E9EAEC] border-none outline-none p"
                            placeholder="First Name"
                            required
                        />
                        </div>
                        <div className="flex w-1/2 rounded-lg bg-[#E9EAEC] px-4 ">
                        <input
                            type='lastname'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            className="w-full h-full bg-[#E9EAEC] border-none outline-none"
                            placeholder="Last Name"
                            required
                        />
                        </div>
                    </div>
                    <div className="flex w-3/4 rounded-lg bg-[#E9EAEC] p-4">
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-full bg-[#E9EAEC] border-none outline-none"
                        placeholder="Password"
                        required
                        minLength={6}
                    />
                    </div>
                    {error && <p className='text-red-500'>{error}</p>}
                    <div className="flex rounded-lg bg-[#E9EAEC] p-4 hover:scale-110">
                    <button type='submit'  className=" text-[#333652]- font-bold text-xl border-none outline-none">
                        Sign Up
                    </button>
                    </div>
                </div>
                </form>
            </div>
            <div className="flex justify-center items-end w-1/2 pt-2">
                <GoogleButton
                    className="w-[300px] mb-2"
                    onClick={handleGoogleSignIn}
                />
            </div>
        </div>
    </div>
  );
};

export default Signup;
