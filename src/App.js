import React, { useRef, useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const toursRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [places, setPlaces] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // close menu after click
  };

  useEffect(() => {
    // Example static data (remove backend dependency)
    setPlaces([
      { name: 'Paris', description: 'City of Light' },
      { name: 'Bali', description: 'Island of Gods' },
      { name: 'New York', description: 'The Big Apple' },
      { name: 'Rome', description: 'City of History' },
    ]);
  }, []);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-violet-950 to-rose-950 text-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <h1 className="text-xl font-bold">🌍 Travel-Destination</h1>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden block text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Menu Items */}
          <div
            className={`md:flex space-x-4 md:static 
              md:bg-transparent text-white
              md:w-auto w-full md:top-auto
              transition-all duration-300 ease-in-out 
              ${menuOpen 
                ? "absolute top-16 right-8 z-20 flex flex-col p-2 h-fit min-w-[15rem] bg-gradient-to-r from-rose-950 to-violet-950 rounded-xl shadow-lg" 
                : "hidden"
              }`}
          >
            <button className="block px-4 py-2 md:inline hover:border-b-2 hover:border-violet-950 hover:shadow-md transition-all duration-200" onClick={() => scrollTo(homeRef)}>Home</button>
            <button className="block px-4 py-2 md:inline hover:border-b-2 hover:border-violet-950 hover:shadow-md transition-all duration-200" onClick={() => scrollTo(toursRef)}>Tours</button>
            <button className="block px-4 py-2 md:inline hover:border-b-2 hover:border-violet-950 hover:shadow-md transition-all duration-200" onClick={() => scrollTo(aboutRef)}>About</button>
            <button className="block px-4 py-2 md:inline hover:border-b-2 hover:border-violet-950 hover:shadow-md transition-all duration-200" onClick={() => scrollTo(contactRef)}>Contact</button>
          </div>

        </div>
      </nav>

      {/* Sections */}
      <section ref={homeRef}><Home places={places} /></section>
      <section ref={toursRef}><Tours /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={contactRef}><Contact /></section>
    </div>
  );
}

export default App;
