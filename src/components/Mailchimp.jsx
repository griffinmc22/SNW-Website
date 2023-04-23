import React, { useState } from 'react';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;


const MailchimpForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`${apiBaseUrl}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
      // Reset the email input field after a successful subscription
      if (response.ok) {
        setEmail('');
      }
    } catch (error) {
      setMessage('Error: Unable to subscribe.');
    }
  };

  return (
    <div className='flex flex-col h-auto w-auto justify-center items-center p-4 bg-[#c1c1c2]'>
        <p className='text-center pb-4'>
            Subscribe to our newsletter to get the latest updates on our products and services.
        </p>
        <form onSubmit={subscribe}>
        <input
            className='mr-4 w-64'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
        />
        <button className='p-2 border-4 hover:border-[#FAD02C]' type="submit">Subscribe</button>
        {message && <p>{message}</p>}
        </form>
    </div>
  );
};

export default MailchimpForm;
