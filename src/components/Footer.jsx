import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-screen bg-black text-white pt-16 pb-8 overflow-hidden">
      {/* Main Footer */}
      <motion.div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-neue-light text-2xl text-[#7947ac]">WEB-REAL | OBSESSED</h1>
          <p className="text-white/70 text-center md:text-left">
            Crafting modern digital experiences for brands and businesses worldwide.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-neue-light text-3xl text-gray-600">WE BELIEVE IN DOING.</h1>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl items-center">
            <motion.a whileHover={{ scale: 1.3, color: "#8e3bc6" }} href="https://www.instagram.com/webreal_official">
              <FaInstagram />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-12"></div>

      {/* Bottom Text */}
      <motion.div
        className="mt-4 text-center text-white/50 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        © {new Date().getFullYear()} WebReal. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default memo(Footer);
