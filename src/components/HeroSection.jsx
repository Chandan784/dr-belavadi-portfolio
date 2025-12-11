"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white flex items-center mt-14 py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Dr. Prashanth Belavadi
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Ayurveda's Maverick — Blending ancient Indian healing with modern
            healthcare solutions. Transforming lives, one patient at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-4 flex-col sm:flex-row sm:justify-center md:justify-start">
            <motion.a
              href="#appointment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition text-center"
            >
              Book Appointment
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition text-center"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img
              src="https://r.mobirisesite.com/1943643/assets/images/photo-1492552085122-36706c238-h_mgzfooim.jpg"
              alt="Dr. Prashanth Belavadi"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full bg-white/10 filter blur-3xl"></div>
      <div className="absolute bottom-[-60px] left-[-60px] w-72 h-72 rounded-full bg-white/10 filter blur-3xl"></div>
    </section>
  );
}
