import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TopBar from './components/top/TopBar';
import Navbar from './components/navbar/Navbar';
import HeroBackground from './components/hero/HeroBackground';
import Activities from './components/activity/Activities';
import Booking from './components/bookings/Booking';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TopBar />

      <Navbar />

      <HeroBackground />

      <Activities />

      <Booking />

      <Gallery />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
