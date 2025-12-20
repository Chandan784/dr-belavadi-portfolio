"use client";
import { motion } from "framer-motion";

const videos = [
  { embed: "https://www.youtube.com/embed/-i9ZgG9SFG4?si=z0eU1jX2XTDejAAv" },
  { embed: "https://www.youtube.com/embed/JpWVsoPjfY4?si=zRyDVWWlBAt0laF5" },
  { embed: "https://www.youtube.com/embed/-4kwHSbksgw?si=kqa3QoxMyTau0ShW" },
];

export default function HealingSecrets() {
  return (
    <section id="healing" className="bg-white py-2">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Healing Secrets
          </h2>
          <div className="w-14 h-1 bg-indigo-600 mx-auto mt-2 rounded-full" />
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Ancient Ayurvedic wisdom explained through modern conversations.
          </p>
        </motion.div>

        {/* Horizontal Scroll Videos */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 px-1">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="
                min-w-[90%]
                sm:min-w-[75%]
                md:min-w-[420px]
                bg-black rounded-2xl
                overflow-hidden
                shadow-md hover:shadow-lg
                transition
              "
            >
              {/* Video */}
              <div className="aspect-video w-full">
                <iframe
                  src={video.embed}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
