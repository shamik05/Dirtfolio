"use client";

import { motion } from "framer-motion";
import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">
            Let's Connect!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to make your next strategic move? Reach out and let's discuss opportunities.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactLinks />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}