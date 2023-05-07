// src/components/Pricing.js
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const pricingData = [
  {
    title: 'Mini Tune-Up',
    price: 50,
    features: ['Tire Inspection', 'Brake Adjustment', 'Chain Lubrication', 'Gear Adjustment'],
  },
  {
    title: 'Tune-Up',
    price: 100,
    features: ['Tire Inspection', 'Brake Adjustment', 'Chain Lubrication', 'Gear Adjustment', 'Wheel Truing', 'Bike Cleaning'],
  },
  {
    title: 'Full Overhaul',
    price: 180,
    features: ['Tire Inspection', 'Brake Adjustment', 'Chain Lubrication', 'Gear Adjustment', 'Wheel Truing', 'Bike Cleaning', 'Bottom Bracket Service', 'Headset Service', 'Hub Service', 'Strip and Rebuild', 'New Cables and Housing'],
  },
];

const allFeatures = [
  'Tire Inspection',
  'Brake Adjustment',
  'Chain Lubrication',
  'Gear Adjustment',
  'Wheel Truing',
  'Bike Cleaning',
  'Bottom Bracket Service',
    'Headset Service',
    'Hub Service',
  'Strip and Rebuild',
  'New Cables and Housing',
];

const Pricing = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Tune-Up Pricing</h1>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              {pricingData.map((plan, index) => (
                <th key={index} className="px-6 py-3 text-xs font-medium text-center text-gray-500 uppercase tracking-wider">
                  {plan.title} <br /> (${plan.price})
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allFeatures.map((feature, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature}</td>
                {pricingData.map((plan, planIndex) => (
                  <td key={planIndex} className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                    <div className="flex justify-center items-center h-full">
                      {plan.features.includes(feature) ? <FaCheck className="text-green-500" /> : ''}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
            {/* Discount row */}
            <tr className="bg-green-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SNW Bike Price</td>
              {pricingData.map((plan, planIndex) => (
                <td key={planIndex} className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                  {plan.title === 'Tune-Up' ? (
                    <div className="flex justify-center items-center h-full">
                      <span className="text-green-600 font-bold">$50</span>
                    </div>
                  ) : (
                    ''
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
