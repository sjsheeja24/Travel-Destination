// import React, { useState } from 'react';

// const Home = ({ places = [] }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredPlaces = places.filter((place) =>
//     place.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
   
//     <section className="min-h-screen px-4 py-12 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-4xl font-bold mb-6 text-blue-800">Explore Destinations</h1>
//         <input
//           type="text"
//           placeholder="Search destinations..."
//           className="w-full md:w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {filteredPlaces.length > 0 ? (
//           filteredPlaces.map((place, index) => (
//             <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 border">
//               <h2 className="text-xl font-semibold text-gray-800">{place.name}</h2>
//               <p className="text-gray-600 mt-2">{place.description}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">No destinations found.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Home;





import React, { useState } from 'react';

const Home = ({ places = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      className="min-h-screen px-4 py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/bg.jpg')`, // Use relative path from public/
      }}
    >
      <div className="backdrop-brightness-90 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">Explore Destinations</h1>
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full md:w-2/3 px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 border">
                <h2 className="text-xl font-semibold text-gray-800">{place.name}</h2>
                <p className="text-gray-600 mt-2">{place.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-white drop-shadow">No destinations found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
