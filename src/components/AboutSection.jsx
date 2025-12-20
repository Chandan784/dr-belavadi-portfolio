"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  const whatsappNumber = "918496973301"; // Replace with your number

  const toggleExpand = () => setExpanded(!expanded);
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <section id="about" className="w-full py-12 bg-white text-black">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-16">
        {/* Heading (like HealingSecrets) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Dr. Prashanth Belavadi
          </h2>
          <div className="w-14 h-1 bg-indigo-600 mx-auto mt-2 rounded-full" />
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl -z-10"></div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://r.mobirisesite.com/1943643/assets/images/photo-1492552085122-36706c238-h_mgzfooim.jpg"
              alt="Dr. Prashanth Belavadi"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-md">
              20+ Years Experience
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center max-w-4xl"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Dr. Prashanth Belavadi stands at the forefront of integrative
            healthcare, combining over 10 years of dedicated Ayurvedic practice
            with nearly two decades of hospital administration excellence. His
            approach blends classical Ayurvedic wisdom with modern healthcare
            strategies to deliver impactful, patient-focused outcomes.
          </p>

          {expanded && (
            <>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                He has led transformative initiatives in Panchakarma therapies,
                wellness programming, hospital growth strategy, and NABH quality
                accreditation. His work extends beyond clinical practice into
                operational excellence and patient experience innovation.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                What truly sets Dr. Prashanth apart is his ability to integrate
                traditional healing systems with data-driven healthcare
                management, ensuring both clinical effectiveness and sustainable
                growth.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                His mission is to make Ayurveda accessible, relevant, and
                credible for modern audiences while preserving its classical
                integrity through evidence-based and ethical practice.
              </p>
            </>
          )}

          {/* Expand Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleExpand}
            className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-2 rounded-full shadow-lg transition"
          >
            {expanded ? "Show Less" : "Read More"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
