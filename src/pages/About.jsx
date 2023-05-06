import React from 'react';
const Header = '/assets/about/aboutusheader.png'
const Team = '/assets/gallery/gallery3.jpg'

const About = () => {
  return (
    <div className='h-auto flex flex-col justify-start bg-[#E9EAEC]'>
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
                <div className='grid md:grid-cols-2 py-4'>
                    <div className='flex justify-center px-6'>
                        <img className='object-contain' src={Team} ></img>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-4">Our Team</h1>
                        <p className="text-lg mb-4">
                            At Spoke N Wheel, our team is more than just a group of employees – we are a family of passionate cycling enthusiasts, dedicated to sharing our love for bicycles with the community. Since 1977, we have been serving the valley with a steadfast commitment to quality products and outstanding service, and our team is the driving force behind this legacy.                    </p>
                        <p className="text-lg mb-4">
                            We believe that cycling has the power to transform lives, and we are honored to play a part in your journey. As you walk through our doors, you'll be greeted with warm smiles and genuine enthusiasm for helping you explore the world on two wheels. So, come on in, meet the Spoke N Wheel family, and let us embark on this incredible cycling adventure together!                        </p>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default About;
