"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24 bg-white text-black">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl lg:text-3xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent  bg-indigo-600"
        >
          About Dr. N. Prashanth Belavadi
        </motion.h2>

        {/* Image - TOP CENTER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl -z-10"></div>

          {/* Image Card */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://r.mobirisesite.com/1943643/assets/images/photo-1492552085122-36706c238-h_mgzfooim.jpg"
              alt="Dr. Prashanth Belavadi"
              className="w-full h-full object-cover"
            />

            {/* Experience Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-md">
              20+ Years Experience
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center max-w-4xl"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Dr. N. Prashanth Belavadi stands at the forefront of integrative
            healthcare, combining over 10 years of dedicated Ayurvedic practice
            with nearly two decades of hospital administration excellence. His
            approach blends classical Ayurvedic wisdom with modern healthcare
            strategies to deliver impactful, patient-focused outcomes.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            He has led transformative initiatives in Panchakarma therapies,
            wellness programming, hospital growth strategy, and NABH quality
            accreditation. His work extends beyond clinical practice into
            operational excellence and patient experience innovation.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            What truly sets Dr. Prashanth apart is his ability to integrate
            traditional healing systems with data-driven healthcare management,
            ensuring both clinical effectiveness and sustainable growth.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            His mission is to make Ayurveda accessible, relevant, and credible
            for modern audiences while preserving its classical integrity
            through evidence-based and ethical practice.
          </p>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition"
          >
            Book an Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
