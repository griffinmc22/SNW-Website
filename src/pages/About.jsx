import React from 'react';
const Header = '/assets/about/aboutusheader.png'

const About = () => {
  return (
    <div className='h-[80vh] flex flex-col justify-start bg-[#E9EAEC]'>
        <img className=' px-6 pt-6' src={Header}></img>

        <div className="flex flex-col justify-center content-center px-8 py-8 bg-[#E9EAEC]">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome to Spoke N Wheel</h1>
            <p className="text-lg mb-4">
                Serving the valley since 1977, our family-owned bicycle store is dedicated to exceptional service and customer satisfaction. We offer a diverse range of quality bicycles and accessories for every cyclist.
            </p>
            <p className="text-lg mb-4">
                Our expert technicians specialize in servicing and maintaining various types of bicycles, ensuring optimal performance. From tune-ups to customizations, we keep you pedaling smoothly and safely. Please note, we currently cannot repair or service electric bicycles.
            </p>
            <p className="text-lg">
                Visit Spoke N Wheel to experience our unwavering commitment to personalized service and support. Join our community of cycling enthusiasts and let us help you embark on your next adventure.
            </p>
        </div>
    </div>
  );
};

export default About;
