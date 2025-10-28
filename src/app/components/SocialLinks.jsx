"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
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
    tooltip: "Visit my LinkedIn!"
  },
  { 
    href: "https://github.com/shamik05",
    icon: FaGithub,
    label: "GitHub",
    tooltip: "Visit my GitHub!"
  }
];

export default function SocialLinks() {
  return (
    <>
      {/* Desktop Social Links - Vertical */}
      <motion.div 
        className="hidden md:flex flex-col items-center absolute left-8 lg:left-12 z-10"
        initial={{ scaleY: 0, opacity: 0, transformOrigin: "top" }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center space-y-6">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="relative group"
            >
              <a 
                href={social.href} 
                className="transition-all hover:scale-110 hover:translate-x-1 block"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-8 h-8 text-chess-dark hover:text-chess-green transition-colors" />
              </a>
              <div className="absolute left-full ml-2 px-2 py-1 bg-chess-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {social.tooltip}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile Social Links - Horizontal */}
      <div className="flex md:hidden justify-center space-x-8 mb-16">
        {socialLinks.map((social) => (
          <div key={social.label} className="relative group">
            <a 
              href={social.href}
              className="transition-transform hover:scale-110 block"
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="w-8 h-8 text-chess-dark hover:text-chess-green transition-colors" />
            </a>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-chess-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {social.tooltip}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}