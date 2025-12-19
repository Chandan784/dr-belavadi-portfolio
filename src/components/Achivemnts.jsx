"use client";
import { motion } from "framer-motion";
import { User, Briefcase, Zap, Smile, Award } from "lucide-react"; // Import Lucide icons

const achievements = [
  { number: "18+", label: "Years of Experience", icon: User },
  { number: "5+", label: "Brands Founded & Advised", icon: Briefcase },
  { number: "4", label: "Key Areas of Success", icon: Zap },
  { number: "100+", label: "Satisfied Clients", icon: Smile },
  { number: "3", label: "Awards Won", icon: Award },
];

export default function Achievements() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Achievements
          </h2>
          <div className="mt-3 w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Key milestones that define leadership, impact, and excellence in
            healthcare and wellness.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {achievements.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-2xl p-6
                           flex flex-col items-center text-center
                           shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white">
                  <IconComponent className="text-black w-8 h-8" />
                </div>

                {/* Number */}
                <h3
                  className="mt-4 text-3xl font-bold
                             bg-gradient-to-r from-indigo-600 to-indigo-600
                             bg-clip-text text-transparent"
                >
                  {item.number}
                </h3>

                {/* Label */}
                <p className="mt-2 text-gray-700 font-medium">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
