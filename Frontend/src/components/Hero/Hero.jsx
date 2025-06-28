// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="w-full text-center py-20 px-6 md:px-0 bg-gradient-to-b from-[#f8eee7] to-white">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Discover the world <br /> with our tours
      </h1>
      <p className="text-gray-600 mb-10">
        Escape the hustle and bustle, enjoy the perfect vacation.
      </p>
      <button className="bg-yellow-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-yellow-600 transition duration-200">
        Start Exploring
      </button>
    </section>
  );
};

export default Hero;
