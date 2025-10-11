"use client";

import { motion } from "framer-motion";
import { FaChessKnight, FaArrowUp } from "react-icons/fa";
import { useRef } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const animationRef = useRef(null);

  // Finally works??
  const scrollToTop = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const duration = 500; // milliseconds
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      window.scrollTo(0, start * (1 - easeOutCubic));
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateScroll);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animateScroll);
  };

  return (
    <footer className="bg-chess-dark text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <FaChessKnight className="text-chess-green" />
              <span className="font-semibold">Shamik Haldar</span>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="bg-chess-green hover:bg-chess-brown text-white p-3 rounded-full transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}