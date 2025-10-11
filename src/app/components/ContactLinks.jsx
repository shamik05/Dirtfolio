"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaChessKnight } from "react-icons/fa";

export default function ContactLinks() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email Me",
      description: "shamikhaldar05@gmail.com",
      href: "mailto:shamikhaldar05@gmail.com"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn", 
      description: "Connect professionally",
      href: "http://www.linkedin.com/in/shamik-h/"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      description: "View my projects", 
      href: "https://github.com/shamik05"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-chess-dark mb-6">Get in Touch</h3>
      
      {/* Contact Methods */}
      <div className="space-y-6 mb-8">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.label}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-chess-green transition-all duration-300 group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-chess-green rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <method.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-chess-dark">{method.label}</p>
              <p className="text-gray-600">{method.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Chess Quote */}
      <motion.div 
        className="bg-chess-light rounded-2xl p-6 border-l-4 border-chess-green"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <FaChessKnight className="w-8 h-8 text-chess-green mb-3" />
        <p className="text-chess-dark font-medium italic">
          "In chess, as in development, every move should be strategic. Let's plan our next move together."
        </p>
      </motion.div>
    </motion.div>
  );
}