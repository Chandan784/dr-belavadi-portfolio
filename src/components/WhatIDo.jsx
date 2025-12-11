"use client";
import { motion } from "framer-motion";

const superpowers = [
  {
    title: "Ayurveda",
    description:
      "Deep knowledge of ancient healing, bringing natural wellness to modern life.",
    icon: "🩺",
  },
  {
    title: "Innovation",
    description:
      "Bringing cutting-edge digital solutions to healthcare for better accessibility.",
    icon: "💡",
  },
  {
    title: "Mentoring",
    description:
      "Guiding the next generation of healthcare professionals and entrepreneurs.",
    icon: "🎓",
  },
  {
    title: "Entrepreneurship",
    description:
      "Building ventures that blend tradition with modern business strategies.",
    icon: "🚀",
  },
];

export default function WhatIDo() {
  return (
    <section className="relative w-full py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">My Superpowers</h2>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          I mix old wisdom with new tech to create awesome healthcare.
        </p>
      </div>

      {/* Superpowers Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {superpowers.map((power, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center cursor-pointer hover:shadow-3xl transition"
          >
            <div className="text-5xl mb-4">{power.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{power.title}</h3>
            <p className="text-gray-200">{power.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
