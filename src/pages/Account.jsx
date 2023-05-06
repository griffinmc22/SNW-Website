import React, {useState} from 'react'
import { UserAuth } from '../context/AuthContext';
const purchasesData = [
    { id: 1, date: '2023-05-01', item: 'Road Bike', price: 1200 },
    { id: 2, date: '2023-04-15', item: 'Mountain Bike', price: 1500 },
    // Add more purchase data
  ];
  
  const serviceHistoryData = [
    { id: 1, date: '2023-04-30', service: 'Tire Replacement', cost: 40 },
    { id: 2, date: '2023-03-20', service: 'Brake Adjustment', cost: 25 },
    // Add more service history data
  ];
  
  function Purchases() {
    return (
      <div>
        <h2 className='text-xl font-bold mb-4'>Purchases</h2>
        <div className='grid grid-cols-4 gap-4'>
          <div>Date</div>
          <div>Item</div>
          <div>Price</div>
          <div>Details</div>
          {purchasesData.map((purchase) => (
            <React.Fragment key={purchase.id}>
              <div>{purchase.date}</div>
              <div>{purchase.item}</div>
              <div>${purchase.price}</div>
              <div>View Details</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
  
  function ServiceHistory() {
    return (
      <div>
        <h2 className='text-xl font-bold mb-4'>Service History</h2>
        <div className='grid grid-cols-4 gap-4'>
          <div>Date</div>
          <div>Service</div>
          <div>Cost</div>
          <div>Details</div>
          {serviceHistoryData.map((service) => (
            <React.Fragment key={service.id}>
              <div>{service.date}</div>
              <div>{service.service}</div>
              <div>${service.cost}</div>
              <div>View Details</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  function BicycleStore() {
    const [activeView, setActiveView] = useState('purchases');
  
    return (
      <div className='flex'>
        <div className='flex flex-col w-1/4 p-4 bg-[#333652] text-white'>
          <button
            className={`w-full p-2 ${activeView === 'purchases' ? 'bg-blue-500' : ''}`}
            onClick={() => setActiveView('purchases')}
          >
            Purchases
          </button>
          <button
            className={`w-full p-2 ${activeView === 'serviceHistory' ? 'bg-blue-500' : ''}`}
            onClick={() => setActiveView('serviceHistory')}
          >
            Service History
          </button>
        </div>
        <div className='flex-1 p-4'>
          {activeView === 'purchases' ? <Purchases /> : <ServiceHistory />}
        </div>
      </div>
    );
  }

const Account = () => {
    const [activeView, setActiveView] = useState('purchases');
    const { logOut, user } = UserAuth()
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='flex w-full h-[1000px] justify-center bg-[#E9EAEC]'>
          <div className='flex flex-col w-4/5 m-8 rounded-lg bg-[#333652] text-white'>
            <div className='flex items-center justify-between p-4'>
              {user ? <h1 className='text-2xl font-bold'>{`Welcome ${user.displayName}`}</h1>: <h1 className='text-2xl font-bold'>Welcome</h1>}
              <button
                onClick={handleSignOut}
                className='py-1 px-3 bg-red-500 hover:bg-red-600 rounded text-white'
              >
                Sign Out
              </button>
            </div>
            <BicycleStore />
          </div>
        </div>
      );
    }

export default Account