import React, { useRef, useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Contact from './pages/Contact';

function App() {
  const homeRef = useRef(null);
  const toursRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [places, setPlaces] = useState([]);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .catch((err) => console.error("Error fetching places:", err));
  }, []);

  return (


    <div className="font-sans">
      <nav className="h-14 bg-gradient-to-r from-violet-950 to-rose-950 bg-blue-700 text-white px-4 py-3 shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">🌍 Travel-Destination</h1>
          <div className="space-x-4">
            <button onClick={() => scrollTo(homeRef)}>Home</button>
            <button onClick={() => scrollTo(toursRef)}>Tours</button>
            <button onClick={() => scrollTo(aboutRef)}>About</button>
            <button onClick={() => scrollTo(contactRef)}>Contact</button>
          </div>
        </div>
      </nav>

      <section ref={homeRef}><Home places={places} /></section>
      <section ref={toursRef}><Tours /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={contactRef}><Contact /></section>
    </div>
  );
}

export default App;









// import React, { useRef, useState, useEffect } from 'react';
// import Home from './pages/Home';
// import About from './pages/About';
// import Tours from './pages/Tours';
// import Contact from './pages/Contact';
// import './App.css';

// function App() {
//   const homeRef = useRef(null);
//   const toursRef = useRef(null);
//   const aboutRef = useRef(null);
//   const contactRef = useRef(null);

//   const [places, setPlaces] = useState([]);

//   // Fetch places from backend (or define sample data for now)
//   useEffect(() => {
//     // If backend not ready, use hardcoded data:
//     setPlaces([
//       { name: 'Paris', description: 'City of Light' },
//       { name: 'Bali', description: 'Island of Gods' },
//       { name: 'New York', description: 'The Big Apple' },
//       { name: 'Rome', description: 'City of History' },
//     ]);
//   }, []);

//   const scrollTo = (ref) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="App">
//       <nav className="navbar">
//         <h1 className="logo">🌍 Travel-Destination</h1>
//         <div className="nav-links">
//           <button onClick={() => scrollTo(homeRef)}>Home</button>
//           <button onClick={() => scrollTo(toursRef)}>Tours</button>
//           <button onClick={() => scrollTo(aboutRef)}>About</button>
//           <button onClick={() => scrollTo(contactRef)}>Contact</button>
//         </div>
//       </nav>

//       <div className="main-content">
//         <section ref={homeRef}>
//           <Home places={places} />
//         </section>
//         <section ref={toursRef}><Tours /></section>
//         <section ref={aboutRef}><About /></section>
//         <section ref={contactRef}><Contact /></section>
//       </div>
//     </div>
//   );
// }

// export default App;
