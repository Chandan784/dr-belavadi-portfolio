"use client";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact-info" },
  ];

  const socials = [
    { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
    { icon: <Instagram size={24} />, href: "https://instagram.com" },
    { icon: <Twitter size={24} />, href: "https://twitter.com" },
  ];

  return (
    <footer className="relative bg-indigo-600 text-white py-16 px-6 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-60px] left-[-60px] w-48 h-48 rounded-full bg-white/10 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-72 h-72 rounded-full bg-white/10 filter blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dr. Prashanth Belavadi
          </h2>
          <p className="text-gray-100 text-lg">
            Ayurveda's Maverick — Blending ancient Indian healing with modern
            healthcare.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex flex-col gap-3"
        >
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex flex-col gap-3"
        >
          <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
          <div className="flex gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="bg-white text-indigo-600 p-3 rounded-full hover:bg-yellow-300 hover:text-white transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 text-center text-gray-200 text-sm relative z-10 space-y-1"
      >
        <div>
          © {new Date().getFullYear()} Dr. Prashanth Belavadi. All rights
          reserved.
        </div>
        <div>Developed by Applute Technologies Private Limited</div>
      </motion.div>
    </footer>
  );
}
