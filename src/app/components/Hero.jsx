"use client";

import { motion } from "framer-motion";
import { FaChessPawn } from "react-icons/fa";
import { GiChessRook, GiChessKnight, GiChessBishop, GiChessQueen, GiChessKing } from "react-icons/gi";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  const pieces = [
    { Icon: GiChessRook, position: 0 },
    { Icon: GiChessKnight, position: 1 },
    { Icon: GiChessBishop, position: 2 },
    { Icon: GiChessQueen, position: 3 },
    { Icon: GiChessKing, position: 4 },
    { Icon: GiChessBishop, position: 5 },
    { Icon: GiChessKnight, position: 6 },
    { Icon: GiChessRook, position: 7 },
  ];

  return (
    <section id="hero" className="min-h-screen bg-chess-light flex items-center justify-center px-4 relative">
      {/* Social Links Component */}
      <SocialLinks />

      {/* Main Content */}
      <div className="text-center max-w-2xl relative z-10">
        {/* Chess Pieces Row */}
        <div className="mb-8 cursor-pointer relative h-24 flex items-center justify-center">
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            {pieces.map(({ Icon, position }) => (
              <div key={position} className="relative">
                <Icon className="w-8 h-8 md:w-12 md:h-12 text-chess-brown transition-colors duration-300" />
              </div>
            ))}
          </div>
          {/* <p className="text-xs text-gray-500 mt-2 opacity-70 transition-opacity duration-300 absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            Complete chess set - All pieces in position! ♟️
          </p> */}
        </div>
        
        {/* Name & Title */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-chess-dark mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Shamik Haldar
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-chess-dark mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Full Stack Developer
        </motion.p>
        
        {/* Tagline */}
        <motion.p 
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Strategic code, Spectacular blunders
        </motion.p>
        
        {/* CTA Button */}
        <motion.button 
          className="bg-chess-green hover:bg-chess-dark text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 mb-12 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work →
        </motion.button>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <FaChessPawn className="w-6 h-6 mx-auto text-chess-brown" />
        </motion.div>
      </div>
    </section>
  );
}