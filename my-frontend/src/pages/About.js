import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const places = [
    { name: 'Paris', image: '/images/baibeach.jpg' },
    { name: 'Tokyo', image: '/images/tokyo.webp' },
    { name: 'New York', image: '/images/newyork.webp' },
    { name: 'Varkala', image: '/images/varkala.webp' },
    { name: 'Munnar', image: '/images/munnar.jpg' },
    { name: 'Wayanad', image: '/images/wayanad.webp' },
  ];

  const videos = [
    'https://www.youtube.com/embed/Scxs7L0vhZ4',
    'https://www.youtube.com/embed/ORmZlQPJuDI',
    'https://www.youtube.com/embed/_xVc-_Rug6g',
    'https://www.youtube.com/embed/hMGNCrWHUy8',
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="relative min-h-screen text-white" id="about">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/videos/kerala.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for readability */}
      <div className="relative px-4 py-12 bg-black/50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Title and Description */}
          <h2 className="text-4xl font-bold text-blue-300 text-center mb-6">
            About Our Travel Platform
          </h2>
          <p className="text-white text-lg leading-relaxed text-center mb-10">
            We help you explore the most beautiful places in the world. Whether you want to enjoy a romantic trip to Paris,
            explore the tech culture in Tokyo, or enjoy the skyline of New York — we've got you covered.
          </p>

          {/* Places Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {places.map((place, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="rounded-xl overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{place.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Videos Section */}
          <h3 className="text-3xl font-bold text-blue-200 text-center mb-6">Travel Moments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((url, index) => (
              <div key={index} className="w-full aspect-video">
                <iframe
                  src={url}
                  title={`video-${index}`}
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-md"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
