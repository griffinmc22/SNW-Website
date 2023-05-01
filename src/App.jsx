// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MailchimpForm from './components/Mailchimp.jsx';
import About from './pages/About.jsx';
import Location from './pages/Location.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import Login from './pages/Login.jsx';
import PrivateRouteWrapper from './components/PrivateRoute.jsx';
import Account from './pages/Account.jsx';
import Signup from './pages/Signup.jsx'; // Import the Signup component
import Cart from './pages/Cart.jsx';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar/>
      <div className='pt-[100px]'></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/signup" element={<Signup/>} /> {/* Add the Signup route */}
        <Route path="/account" element={<PrivateRouteWrapper />}>
            <Route path="" element={<Account />} />
        </Route>

      </Routes>
      <MailchimpForm/>
      <Footer/>
      </AuthContextProvider>
    </>
  );
}

export default App;
