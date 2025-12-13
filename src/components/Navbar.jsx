"use client";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const menuItems = [
    { label: "Home", href: "#hero", icon: <Home size={18} /> },
    { label: "About", href: "#about", icon: <User size={18} /> },
    { label: "Services", href: "#services", icon: <Stethoscope size={18} /> },
    {
      label: "Experience",
      href: "#experience",
      icon: <GraduationCap size={18} />,
    },
    { label: "FAQ", href: "#faq", icon: <HelpCircle size={18} /> },
    { label: "Contact", href: "#contact", icon: <Phone size={18} /> },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-white z-50 shadow-sm px-5 flex items-center justify-between overflow-x-hidden">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-semibold text-blue-600 whitespace-nowrap"
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
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
          onClick={() => setOpen(true)}
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed top-0 left-0 h-full w-[75%] max-w-[320px] bg-white z-50 p-6 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-semibold text-blue-600">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Menu Items */}
              <ul className="flex flex-col gap-6 text-gray-800 font-medium">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 text-base hover:text-blue-600"
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
