"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ventures = [
  {
    title: "Healing Clinics",
    image:
      "https://r.mobirisesite.com/1943643/assets/images/photo-1616760678404-8b62322959c8.jpeg",
    description: "Modern clinics offering authentic Ayurvedic treatments.",
  },
  {
    title: "Wellness Brands",
    image:
      "https://r.mobirisesite.com/1943643/assets/images/photo-1609486961058-cbfe79e35cbf.jpeg",
    description: "Supplements and wellness products crafted for everyone.",
  },
  {
    title: "Education Platforms",
    image:
      "https://r.mobirisesite.com/1943643/assets/images/g0bc4820cae7b79358d008ccb6e59-h_mgzfdc5b.jpg",
    description: "Online courses spreading Ayurvedic knowledge worldwide.",
  },
];

export default function MyVentures() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent(current === 0 ? ventures.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === ventures.length - 1 ? 0 : current + 1);

  return (
    <section className="relative w-full py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">My Ventures</h2>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          From healing clinics to wellness brands, I've built and guided
          businesses that make a real difference. See the magic happen!
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Slider */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md"
        >
          <img
            src={ventures[current].image}
            alt={ventures[current].title}
            className="w-full h-80 md:h-96 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-white">
              {ventures[current].title}
            </h3>
            <p className="mt-2 text-gray-200">
              {ventures[current].description}
            </p>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full shadow-lg transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-full shadow-lg transition"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {ventures.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              current === index ? "bg-blue-400" : "bg-white/40"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
