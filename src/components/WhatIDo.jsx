"use client";
import { motion } from "framer-motion";
import { User, Zap, GraduationCap, Rocket } from "lucide-react";

const superpowers = [
  {
    title: "Ayurveda",
    description:
      "Deep knowledge of ancient healing, bringing natural wellness to modern life.",
    icon: User,
  },
  {
    title: "Innovation",
    description:
      "Bringing cutting-edge digital solutions to healthcare for better accessibility.",
    icon: Zap,
  },
  {
    title: "Mentoring",
    description:
      "Guiding the next generation of healthcare professionals and entrepreneurs.",
    icon: GraduationCap,
  },
  {
    title: "Entrepreneurship",
    description:
      "Building ventures that blend tradition with modern business strategies.",
    icon: Rocket,
  },
];

export default function WhatIDo() {
  return (
    <section className="relative w-full py-20 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">My Superpowers</h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          I mix old wisdom with new tech to create awesome healthcare.
        </p>
      </div>

      {/* Superpowers Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {superpowers.map((power, index) => {
          const IconComponent = power.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center mb-4"
              >
                <IconComponent className="w-8 h-8 text-black" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-2">{power.title}</h3>
              <p className="text-gray-600">{power.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
