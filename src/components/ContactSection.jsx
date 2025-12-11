"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      icon: <Phone size={28} />,
      title: "Phone",
      value: "+91 84969 73301",
      bg: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      icon: <Mail size={28} />,
      title: "Email",
      value: "belavadiprashanth@gmail.com",
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin size={28} />,
      title: "Address",
      value: "Medfine Hospitals, BTM Layout 1st Stage, Bangalore",
      bg: "bg-gradient-to-r from-green-400 to-green-600",
    },
  ];

  return (
    <section
      id="contact-info"
      className="relative w-full py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Contact Us
      </motion.h2>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex-1 ${contact.bg} rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 transform transition`}
          >
            <div className="bg-white/20 p-5 rounded-full mb-4">
              {contact.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
            <p className="text-white text-lg">{contact.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
