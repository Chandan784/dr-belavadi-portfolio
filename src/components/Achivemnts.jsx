"use client";
import { motion } from "framer-motion";

const achievements = [
  { number: "18", label: "Years of Experience", icon: "🩺" },
  { number: "5", label: "Brands Founded & Advised", icon: "🏢" },
  { number: "4", label: "Key Areas of Success", icon: "⚡" },
  { number: "100+", label: "Satisfied Clients", icon: "😊" },
  { number: "3", label: "Awards Won", icon: "🏆" },
];

export default function Achievements() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Achievements</h2>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          Highlights of my journey, shaping healthcare and wellness ventures.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:shadow-3xl transition"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-3xl font-bold text-blue-400">{item.number}</h3>
            <p className="mt-2 text-gray-200 text-center">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
