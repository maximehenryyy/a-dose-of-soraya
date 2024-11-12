import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Wellness from './components/Wellness';
import Mystical from './components/Mystical';
import Events from './components/Events';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Wellness />
      <Mystical />
      <Events />
      <Contact />
    </div>
  );
}

export default App;