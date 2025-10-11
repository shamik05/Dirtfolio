"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function ContactLinks() {
  const [copiedItem, setCopiedItem] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyToClipboard = async (text, itemName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemName);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setCopiedItem(null);
        timeoutRef.current = null;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      description: "shamikhaldar05@gmail.com",
      href: "mailto:shamikhaldar05@gmail.com",
      copyText: "shamikhaldar05@gmail.com",
      copyLabel: "Email"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn", 
      description: "Connect professionally",
      href: "http://www.linkedin.com/in/shamik-h/",
      copyText: "http://www.linkedin.com/in/shamik-h/",
      copyLabel: "LinkedIn"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      description: "View my projects", 
      href: "https://github.com/shamik05",
      copyText: "https://github.com/shamik05",
      copyLabel: "GitHub"
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
      
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-chess-green transition-all duration-300 group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <a 
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center space-x-4 flex-1"
            >
              <div className="w-12 h-12 bg-chess-green rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <method.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-chess-dark">{method.label}</p>
                <p className="text-gray-600">{method.description}</p>
              </div>
            </a>

            <div className="relative">
              <motion.button
                onClick={() => copyToClipboard(method.copyText, method.copyLabel)}
                className="p-2 text-chess-brown hover:text-chess-green hover:bg-chess-light rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={`Copy ${method.label} to clipboard`}
              >
                {copiedItem === method.copyLabel ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-chess-green"
                  >
                    <FaCheck className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <FaCopy className="w-5 h-5" />
                )}
              </motion.button>
              
              {copiedItem === method.copyLabel && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-chess-dark text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                >
                  Copied {method.copyLabel}!
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}