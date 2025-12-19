"use client";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  const whatsappNumber = "918496973301";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <span className="text-lg font-semibold text-black">
          Dr. Prashanth Belavadi
        </span>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition"
        >
          <MessageCircle size={20} />
          Contact
        </button>
      </div>
    </header>
  );
}
