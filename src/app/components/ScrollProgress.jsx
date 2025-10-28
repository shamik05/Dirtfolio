"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const sections = [
  { id: "hero", label: "Home", position: 0 },
  { id: "projects", label: "Projects", position: 1 },
  { id: "skills", label: "Skills", position: 2 },
  { id: "contact", label: "Contact", position: 3 }
];

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState(0);

  // Use Intersection Observer for more accurate section detection
  useEffect(() => {
    const observers = sections.map((section, index) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { 
          threshold: 0.5, // 50% of section visible
          rootMargin: '-20% 0px -20% 0px' // Adjust these values as needed
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
      {/* Debug display */}
      <div className="mb-4 text-xs bg-black text-white px-2 py-1 rounded">
        Active: {sections[activeSection]?.label}
      </div>

      {/* Progress Line Container */}
      <div className="relative flex flex-col items-center h-64">
        {/* Background Line */}
        <div className="w-1 h-full bg-gray-300 rounded-full" />
        
        {/* Progress Fill */}
        <motion.div 
          className="absolute top-0 w-1 bg-chess-green rounded-full"
          style={{ 
            scaleY: scaleY,
            transformOrigin: "top"
          }}
        />
        
        {/* Section Dots */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {sections.map((section, index) => (
            <SectionDot 
              key={section.id}
              section={section}
              index={index}
              isActive={activeSection >= index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionDot({ section, index, isActive }) {
  return (
    <motion.button
      className="relative flex items-center justify-center w-6 h-6 -ml-3 group"
      onClick={() => {
        document.getElementById(section.id)?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Dot */}
      <div 
        className={`w-4 h-4 rounded-full border-2 border-white shadow-lg z-10 transition-colors duration-300 ${
          isActive ? 'bg-chess-green' : 'bg-gray-400'
        }`}
      />
      
      {/* Tooltip */}
      <div className="absolute -left-28 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-chess-dark text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        {section.label}
        <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-chess-dark rotate-45" />
      </div>
    </motion.button>
  );
}