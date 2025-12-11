"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      className="relative w-full py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-4">
            Dr. Prashanth Belavadi
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg md:text-xl mb-6">
            A physician, strategist, and entrepreneur who’s not afraid to mix
            ancient Indian wisdom with cutting-edge digital innovation. He's
            building the future of healthcare, one brilliant idea at a time.
          </p>

          {/* Connect Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
          >
            Connect
          </motion.a>
        </motion.div>

        {/* Image with Circular Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          {/* Decorative Circle */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-white/10 filter blur-3xl -z-10 top-1/2 transform -translate-y-1/2"></div>

          {/* Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
            <img
              src="https://r.mobirisesite.com/1943643/assets/images/photo-1492552085122-36706c238-h_mgzfooim.jpg"
              alt="Dr. Prashanth Belavadi"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
