import React, { useState, memo } from "react";
import logo from "../assets/images/hero-logo.webp";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Services", "Pricing", "Why Us", "Contact"];

  const handleScroll = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Close mobile menu
  };

  return (
    <nav className="fixed w-full bg-black z-50 h-20 border-b-[1px] border-b-[#43184e]">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        {/* Logo */}
        <div className="cursor-pointer flex items-center h-full">
          <img src={logo} alt="WebReal Logo" className="h-[150px] md:h-[180px]" loading="lazy" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-gilroy-light text-white text-lg h-full items-center">
          {links.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-purple-500 flex items-center h-full"
              onClick={() => handleScroll(link)}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col justify-center items-center cursor-pointer z-50 h-full"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-black shadow-lg transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-24 space-y-8 ml-6 font-gilroy-light text-white text-xl">
          {links.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-purple-500"
              onClick={() => handleScroll(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default memo(Nav);
