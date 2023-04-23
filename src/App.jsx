import React from 'react';
import { Routes,Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MailchimpForm from './components/Mailchimp.jsx';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <MailchimpForm/>
      <Footer/>
    </>
  );
}

export default App;
