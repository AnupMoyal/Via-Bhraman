// App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';



export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Contact />
      <Gallery />
    </div>
  );
}
