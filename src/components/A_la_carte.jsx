// src/components/A_la_carte.js
import React from 'react';

const aLaCarteData = [
    {
      category: 'General Services',
      services: [
        { service: 'Tire Installation', price: 15 },
        { service: 'Cable Installation', price: 15 },
        { service: 'Brake Adjustment', price: 15 },
        { service: 'Derailleur Adjustment', price: 15 },
        { service: 'Chain Installation', price: 15 },
        { service: 'Brake Bleed', price: 35 },
        { service: 'Wheel Truing', price: 25 },
        { service: 'Tubeless Tire Installation', price: 25 },
        { service: 'Handle Bar Installation', price: 20 },
        { service: 'Handle Bar Tape', price: 30 },
        { service: 'Hub Repack', price: 25 },
        { service: 'Training Wheel Install', price: 10 },
      ],
    },
    {
      category: 'Bike Assembly',
      services: [
        { service: 'Bike Assembly Single Speed', price: 80 },
        { service: 'Bike Assembly Multi Speed', price: 110 },
      ],
    },
    {
      category: 'Dropper Post Services',
      services: [
        { service: 'Command Post Service', price: 50 },
        { service: 'Dropper Post Service', price: 125 },
      ],
    },
    {
      category: 'Tubeless Services',
      services: [
        { service: 'Tubless Sealant (Per Wheel)', price: 6 },
        { service: 'Tubeless Tape/Valve/Sealant (Per Wheel)', price: 30 },
      ],
    },
    {
      category: 'Suspension Services',
      services: [
        { service: 'Shock Service W/Seals', price: 85 },
        { service: 'Fork Service W/Seals', price: 120 },
      ],
    },
    {
      category: 'Miscellaneous',
      services: [
        { service: 'Misc Labor Charge Per Hour', price: 65 },
      ],
    },
  ];
  

  const A_la_carte = () => {
    return (
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">A La Carte Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="lg:col-span-1">
            {aLaCarteData.slice(0, 1).map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white shadow-md rounded-lg overflow-x-auto mb-4 mx-2">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {category.category}
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category.services.map((service, serviceIndex) => (
                      <tr key={serviceIndex}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {service.service}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                          ${service.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
            {aLaCarteData.slice(1).map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white shadow-md rounded-lg overflow-x-auto mb-4 mx-2">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {category.category}
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category.services.map((service, serviceIndex) => (
                      <tr key={serviceIndex}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {service.service}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                          ${service.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default A_la_carte;