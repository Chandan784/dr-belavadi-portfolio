"use client";
import { motion } from "framer-motion";

const ventures = [
  {
    title: "Healing Clinics",
    image:
      "https://r.mobirisesite.com/1943643/assets/images/photo-1616760678404-8b62322959c8.jpeg",
    description:
      "Modern Ayurvedic clinics delivering authentic treatments with patient-first care.",
  },
  {
    title: "Wellness Brands",
    image:
      "https://r.mobirisesite.com/1943643/assets/images/photo-1609486961058-cbfe79e35cbf.jpeg",
    description:
      "Scientifically crafted wellness and nutrition products for holistic health.",
  },
  {
    title: "Education Platforms",
    image:
      "https://r.mobirisesite.com/1943643/assets/images/g0bc4820cae7b79358d008ccb6e59-h_mgzfdc5b.jpg",
    description:
      "Digital platforms spreading Ayurvedic knowledge to students and professionals.",
  },
];

export default function MyVentures() {
  return (
    <section id="ventures" className="bg-white py-2">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Ventures
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-3 rounded-full" />
          <p className="mt-5 text-gray-600 text-lg">
            Building impactful healthcare initiatives across clinics, wellness,
            and education.
          </p>
        </motion.div>

        {/* Ventures Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={venture.image}
                  alt={venture.title}
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-indigo-600">
                  {venture.title}
                </h3>
                <p className="mt-3 text-gray-700">{venture.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
