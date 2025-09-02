import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import GeometricBackground from './GeometricBackground';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted!");
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative">
      <GeometricBackground />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center text-teal-400 mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side: Contact Details */}
          <motion.div
            className="md:w-1/2 flex flex-col justify-center items-start text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-white mb-4">Contact Me </h3>
           
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <FaEnvelope className="text-2xl text-teal-400" />
              <span className="text-lg text-gray-300">kirtijha460@gmail.com</span>
            </motion.div>
            <p className="text-gray-400 text-lg">
             Let’s build something amazing together!
            </p>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            className="md:w-1/2 bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full p-3 bg-gray-700 rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-teal-600 text-white font-bold rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;