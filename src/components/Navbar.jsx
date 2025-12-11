"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Stethoscope,
  GraduationCap,
  HelpCircle,
  Phone,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#hero", icon: <Home size={20} /> },
    { label: "About", href: "#about", icon: <User size={20} /> },
    { label: "Services", href: "#services", icon: <Stethoscope size={20} /> },
    {
      label: "Experience",
      href: "#experience",
      icon: <GraduationCap size={20} />,
    },
    { label: "FAQ", href: "#faq", icon: <HelpCircle size={20} /> },
    { label: "Contact", href: "#contact", icon: <Phone size={20} /> },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold text-blue-600"
        >
          Dr. Prashanth Belavadi
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 120 }}
              className="fixed left-0 top-0 w-[75%] h-full bg-white shadow-xl z-50 p-6 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-blue-600">Menu</h2>
                <button onClick={() => setOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              {/* Drawer Menu Items */}
              <ul className="flex flex-col gap-6 text-gray-800 font-medium">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 text-lg hover:text-blue-600"
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
