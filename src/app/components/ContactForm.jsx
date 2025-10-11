"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { FaCheck, FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mrbyyyvr");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-chess-dark mb-6">Send a Message</h3>
      
      {state.succeeded ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-chess-green text-white rounded-2xl p-8 text-center"
        >
          <FaCheck className="w-16 h-16 mx-auto mb-4" />
          <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
          <p className="text-chess-light">
            Thank you for reaching out. I'll get back to you soon!
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="Your Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            errors={state.errors}
            required
          />
          
          <FormField
            label="Email Address"
            type="email"
            name="email"
            placeholder="Enter your email"
            errors={state.errors}
            required
          />
          
          <FormField
            label="Your Message"
            type="textarea"
            name="message"
            placeholder="What would you like to discuss?"
            errors={state.errors}
            required
            rows={5}
          />

          <SubmitButton state={state} />
        </form>
      )}
    </motion.div>
  );
}

function FormField({ label, type, name, placeholder, errors, required, rows }) {
  const commonProps = {
    id: name,
    name,
    required,
    placeholder,
    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chess-green focus:border-chess-green transition-all duration-300"
  };

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-chess-dark mb-2">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea {...commonProps} rows={rows} />
      ) : (
        <input {...commonProps} type={type} />
      )}
      <ValidationError 
        prefix={label} 
        field={name}
        errors={errors}
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
}

function SubmitButton({ state }) {
  return (
    <motion.button
      type="submit"
      disabled={state.submitting}
      className="w-full bg-chess-green hover:bg-chess-dark disabled:bg-gray-400 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center space-x-2"
      whileHover={{ scale: state.submitting ? 1 : 1.02 }}
      whileTap={{ scale: state.submitting ? 1 : 0.98 }}
    >
      {state.submitting ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Sending...</span>
        </>
      ) : (
        <>
          <FaPaperPlane className="w-5 h-5" />
          <span>Send Message</span>
        </>
      )}
    </motion.button>
  );
}