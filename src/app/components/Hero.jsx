"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaChessPawn } from "react-icons/fa";
import { GiChessRook, GiChessKnight, GiChessBishop, GiChessQueen, GiChessKing } from "react-icons/gi";

export default function Hero() {
  const pieces = [
    { Icon: GiChessRook, position: 0 },
    { Icon: GiChessKnight, position: 1 },
    { Icon: GiChessBishop, position: 2 },
    { Icon: GiChessQueen, position: 3 },
    { Icon: GiChessKing, position: 4 }, // Center king
    { Icon: GiChessBishop, position: 5 },
    { Icon: GiChessKnight, position: 6 },
    { Icon: GiChessRook, position: 7 },
  ];

  return (
    <section className="min-h-screen bg-chess-light flex items-center justify-center px-4 relative">
      {/* Vertical Social Links - Desktop with Framer Motion */}
      <motion.div 
        className="hidden md:flex flex-col items-center absolute left-8 lg:left-12 z-10"
        initial={{ scaleY: 0, opacity: 0, transformOrigin: "top" }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center space-y-6">
          {/* Social Icons with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <a href="mailto:shamikhaldar05@gmail.com" className="transition-all hover:scale-110 hover:translate-x-1 block">
              <FaEnvelope className="w-8 h-8 text-chess-dark hover:text-chess-green transition-colors" />
            </a>
            <div className="absolute left-full ml-2 px-2 py-1 bg-chess-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Email Me
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <a href="http://www.linkedin.com/in/shamik-h/" className="transition-all hover:scale-110 hover:translate-x-1 block">
              <FaLinkedin className="w-8 h-8 text-chess-dark hover:text-chess-green transition-colors" />
            </a>
            <div className="absolute left-full ml-2 px-2 py-1 bg-chess-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              LinkedIn
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <a href="https://github.com/shamik05" className="transition-all hover:scale-110 hover:translate-x-1 block">
              <FaGithub className="w-8 h-8 text-chess-dark hover:text-chess-green transition-colors" />
            </a>
            <div className="absolute left-full ml-2 px-2 py-1 bg-chess-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              GitHub
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="text-center max-w-2xl relative z-10">
        {/* Chess Pieces Row - Group Hover Container */}
        <div className="mb-8 group cursor-pointer relative h-24 flex items-center justify-center">
          <div className="flex items-center justify-center space-x-2 md:space-x-4 relative">
            {pieces.map(({ Icon, position }) => (
              <motion.div
                key={position}
                className="relative"
                initial={{ opacity: 1, x: 0, scale: 1 }}
                whileHover="hover"
                variants={{
                  hover: {
                    x: position < 4 ? -50 * (4 - position) : position > 4 ? 50 * (position - 4) : 0,
                    opacity: position === 4 ? 1 : 0,
                    scale: position === 4 ? 1.3 : 0.5,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: position === 4 ? 0.2 : 0.1 * Math.abs(position - 4),
                    }
                  }
                }}
              >
                <Icon 
                  className={`w-8 h-8 md:w-12 md:h-12 transition-colors duration-300 ${
                    position === 4 
                      ? "text-chess-brown group-hover:text-chess-green" 
                      : "text-chess-brown"
                  }`} 
                />
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            All pieces bow to the king! ♟️
          </p>
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
          Strategic code, calculated moves
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
        
        {/* Mobile Social Links - Horizontal with Tooltips */}
        <div className="flex md:hidden justify-center space-x-8 mb-16">
          {[
            { 
              href: "mailto:shamikhaldar05@gmail.com", 
              icon: FaEnvelope, 
              label: "Email", 
              tooltip: "Email Me" 
            },
            { 
              href: "http://www.linkedin.com/in/shamik-h/", 
              icon: FaLinkedin, 
              label: "LinkedIn", 
              tooltip: "LinkedIn" 
            },
            { 
              href: "https://github.com/shamik05", 
              icon: FaGithub, 
              label: "GitHub", 
              tooltip: "GitHub" 
            }
          ].map((social, index) => (
            <div key={index} className="relative group">
              <a 
                href={social.href}
                className="transition-transform hover:scale-110 block"
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8 text-chess-dark hover:text-chess-green transition-colors" />
              </a>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-chess-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.tooltip}
              </div>
            </div>
          ))}
        </div>
        
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