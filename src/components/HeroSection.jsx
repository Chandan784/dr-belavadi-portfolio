"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-white text-black overflow-hidden pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Dr. Prashanth Belavadi
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
            Ayurveda's Maverick — blending ancient Indian healing wisdom with
            modern healthcare systems to deliver sustainable, patient-focused
            wellness solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-4 flex-col sm:flex-row">
            <motion.a
              href="https://wa.me/918496973301" // replace with your number
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-700 transition text-center"
            >
              Book Appointment
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://r.mobirisesite.com/1943643/assets/images/photo-1492552085122-36706c238-h_mgzfooim.jpg"
              alt="Dr. Prashanth Belavadi"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
