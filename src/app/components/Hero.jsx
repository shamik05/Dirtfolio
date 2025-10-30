"use client";

import { motion } from "framer-motion";
import { FaChessPawn } from "react-icons/fa";
import { GiChessRook, GiChessKnight, GiChessBishop, GiChessQueen, GiChessKing } from "react-icons/gi";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const MotionLink = motion(Link);

const Hero = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const pieceVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-chess-light flex items-center justify-center px-4 relative">
      <SocialLinks />
      
      <div className="text-center max-w-2xl relative z-10">
        <motion.div 
          className="mb-8 relative h-24 flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            {pieces.map(({ Icon, position }) => (
              <motion.div 
                key={position} 
                className="relative"
                variants={pieceVariants}
              >
                <Icon className="w-8 h-8 md:w-12 md:h-12 text-chess-brown transition-colors duration-300 hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-chess-dark mb-7"
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
        
        <motion.p 
          className="text-lg md:text-xl text-gray-700 mb-2 max-w-md mx-auto leading-relaxed italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
            &quot;What is better than being a developer?<br />
            Being a paid developer.&quot;
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xlmb-8 max-w-md mx-auto mb-8 leading-relaxed text-chess-brown font-semibold mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
            — Joe Staller
        </motion.p>

        <MotionLink
          className="bg-chess-green hover:bg-chess-brown text-white px-8 py-3 rounded-lg 
          transition-all duration-300 transform hover:scale-105 mb-12 shadow-lg 
          hover:shadow-xl flex items-center justify-center space-x-2 w-fit mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
        >
          <span className="font-bold text-lg">View My Work</span>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaChessPawn className="w-6 h-6" />
          </motion.div>
        </MotionLink>
      </div>
    </section>
  );
}

export default Hero;