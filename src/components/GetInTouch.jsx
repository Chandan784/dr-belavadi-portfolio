"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function GetInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "918496973301";

  const handleSend = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      className="relative w-full py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden"
      id="contact"
    >
      {/* Decorative Circles */}
      <div className="absolute top-[-50px] left-[-50px] w-48 h-48 rounded-full bg-white/10 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 rounded-full bg-white/10 filter blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center text-center md:text-left bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch with Dr. Belavadi
          </h3>
          <p className="text-gray-200 text-lg md:text-xl">
            Have a question, want to schedule a consultation, or just say hello?
            Fill the form and we’ll respond as soon as possible.
          </p>
        </motion.div>

        {/* Right Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl flex flex-col justify-center"
        >
          <h4 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
            Send a Message
          </h4>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="px-4 py-3 rounded-xl bg-white/20 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition mt-2"
            >
              Send via WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
