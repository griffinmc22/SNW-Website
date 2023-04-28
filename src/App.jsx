import React from 'react';
import { Routes,Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MailchimpForm from './components/Mailchimp.jsx';
import About from './pages/About.jsx';
import Location from './pages/Location.jsx';


function App() {
  return (
    <>
      <Navbar/>
      <div className='pt-[100px]'></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/location" element={<Location/>} />
      </Routes>
      <MailchimpForm/>
      <Footer/>
    </>
  );
}

export default App;
