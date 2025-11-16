import React, { useState } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaTools } from "react-icons/fa";

 function TopBar() {
  const [open, setOpen] = useState(false);

  return (
   <header className="w-full text-white bg-black/5 fixed z-50 backdrop-blur-9xl  top-0 left-0 right-0">
      <nav className="flex items-center justify-between px-5 py-4 max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaTools className="text-yellow-400" size={26} />
          <h1 className="text-xl font-bold tracking-wide">BalajiGarage</h1>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
          <li><a href="#repair" className="hover:text-yellow-400">Repairs</a></li>
          <li><a href="#painting" className="hover:text-yellow-400">Painting</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>

        <a
          href="tel:+919166306480"
          className="hidden md:flex items-center gap-1 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300"
        >
          <FaPhoneAlt size={18} /> Call Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-gray-800 text-white px-5 py-4 space-y-4 shadow-inner">
          <li><a href="#services" className="block">Services</a></li>
          <li><a href="#repair" className="block">Repairs</a></li>
          <li><a href="#painting" className="block">Painting</a></li>
          <li><a href="#contact" className="block">Contact</a></li>

          <a
            href="tel:+919166306480"
            className="flex items-center justify-center gap-1 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300"
          >
            <FaPhoneAlt size={18} /> Call Now
          </a>
        </ul>
      )}
    </header>
  );
}

export default TopBar;