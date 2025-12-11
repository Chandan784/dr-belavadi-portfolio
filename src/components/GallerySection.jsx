"use client";
import { motion } from "framer-motion";

const galleryImages = [
  "https://r.mobirisesite.com/1943643/assets/images/photo-1495461199391-8c39ab674295.jpeg",
  "https://r.mobirisesite.com/1943643/assets/images/photo-1528613526328-8c19bd037322.jpeg",
  "https://r.mobirisesite.com/1943643/assets/images/photo-1624454002302-36b824d7bd0a.jpeg",
  "https://r.mobirisesite.com/1943643/assets/images/photo-1679061583335-c8be1c6209f6.jpeg",
];

export default function GallerySection() {
  return (
    <section
      className="relative w-full py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Gallery</h2>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          A glimpse into Ayurveda, wellness, and healthcare in action.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden flex overflow-x-auto space-x-4 px-6 scrollbar-hide">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="min-w-[200px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 cursor-pointer hover:scale-105 transition"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
