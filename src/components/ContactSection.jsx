"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 84969 73301",
    },
    {
      icon: Mail,
      title: "Email",
      value: "belavadiprashanth@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Medfine Hospitals, BTM Layout 1st Stage, Bangalore",
    },
  ];

  return (
    <section
      id="contact-info"
      className="relative w-full py-24 bg-white text-gray-900"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
      >
        Contact Us
      </motion.h2>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {contacts.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="flex-1 bg-gray-50 rounded-2xl shadow-md p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gray-100"
              >
                <IconComponent className="w-7 h-7 text-gray-700" />
              </motion.div>

              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {contact.value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
