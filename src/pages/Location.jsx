import React from 'react';
import Map from '../components/Map';

const Location = () => {
  return (
    <div className="flex flex-col items-center text-center w-full p-4">
      <div>
        <h1 className="text-4xl font-bold">Location</h1>
      </div>
      <div className="w-full h-96 md:h-auto">
        <Map />
      </div>
      <div className='w-full text-2xl py-4'>
        <p>Spoke N Wheel Bicycles</p>
        <p>6804 Platt Ave</p>
        <p>West Hills, CA 91307</p>
      </div>
    </div>
  );
};

export default Location;
