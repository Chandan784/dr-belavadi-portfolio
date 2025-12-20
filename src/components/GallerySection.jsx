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
    <section id="gallery" className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">Gallery</h2>
          <div className="mt-3 w-16 h-1 mx-auto bg-indigo-600 rounded-full" />
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            A glimpse into Ayurveda, wellness, and healthcare in practice.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
