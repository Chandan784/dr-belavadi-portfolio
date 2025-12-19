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
      className="relative w-full py-24 bg-white text-gray-900"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col justify-center text-center md:text-left rounded-3xl p-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-600">
            Get in Touch with Dr. Belavadi
          </h3>
          <p className="text-gray-800 text-lg md:text-xl">
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
          className="flex-1 bg-white border border-gray-200 rounded-3xl p-8 shadow-md flex flex-col justify-center"
        >
          <h4 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left text-black">
            Send a Message
          </h4>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="px-4 py-3 rounded-xl border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-indigo-600 transition resize-none"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSend}
              className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl border border-indigo-600 shadow-sm hover:bg-indigo-600 hover:text-white transition mt-2"
            >
              Send via WhatsApp
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
