import React from 'react';
import { motion } from 'framer-motion';

const Tours = () => {
  const tours = [
    { name: 'Bali', image: '/images/bali.jpg' },
    { name: 'Rome', image: '/images/rome.webp' },
    { name: 'Santorini', image: '/images/santorini.webp' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="relative min-h-screen text-white" id="tours">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
      >
        <source src="/videos/sea.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0 z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Top Travel Tours</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          Discover the most beautiful destinations with our specially curated tour packages.
        </p>

        {/* Tours Grid with fade-up + hover zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="bg-white rounded-xl overflow-hidden shadow-lg text-black transform transition duration-300 hover:scale-105"
            >
              <div className="overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{tour.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
