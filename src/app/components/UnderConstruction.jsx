"use client";

import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

export default function UnderConstruction() {
  return (
    <motion.div
      className="fixed top-4 right-4 z-50 cursor-pointer"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      title="Site under construction - check back soon!"
    >
      <div className="bg-chess-brown text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 border-2 border-chess-green hover:bg-chess-dark transition-colors duration-300">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
        >
          <FaTools className="w-4 h-4" />
        </motion.div>
        
        <span className="text-sm font-semibold">Under Construction</span>
      </div>
    </motion.div>
  );
}