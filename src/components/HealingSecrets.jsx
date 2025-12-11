"use client";
import { motion } from "framer-motion";

export default function HealingSecrets() {
  return (
    <section
      className="relative w-full py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white"
      id="healing"
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Healing Secrets</h2>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          Ancient Ayurvedic wisdom explained in modern ways.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 flex flex-col items-center bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition cursor-pointer"
      >
        <div className="w-full aspect-video rounded-t-3xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/1Uq_7Gm6zQk?list=TLGG9LGjVP2SuPAxMTEyMjAyNQ" // Replace with your actual video
            title="Healing Secrets"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-white mt-4 mb-6 text-center">
          Vitality Elixir — Ancient Ayurveda Explained
        </h3>
      </motion.div>
    </section>
  );
}
