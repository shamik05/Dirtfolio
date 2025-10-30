"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaTools } from "react-icons/fa";

const MotionLink = motion(Link);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Left: Name/Logo */}
          <MotionLink
            href="#hero"
            className="text-xl font-bold text-chess-dark transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shamik Haldar
          </MotionLink>

          {/* Center: Under Construction Message */}
          <motion.div
            className="hidden md:flex items-center space-x-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
            >
              <FaTools className="w-4 h-4 text-chess-brown" />
            </motion.div>
            <span className="text-sm font-medium text-gray-700">
              Under Construction
            </span>
          </motion.div>

          {/* Right: Navigation Links */}
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <MotionLink
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-chess-green transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </MotionLink>
            ))}
          </div>
        </div>

        {/* Mobile Under Construction Message */}
        <motion.div
          className="md:hidden flex justify-center items-center space-x-2 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
          >
            <FaTools className="w-3 h-3 text-chess-brown" />
          </motion.div>
          <span className="text-xs text-gray-700 font-medium">
            Under Construction
          </span>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;