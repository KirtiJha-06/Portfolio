import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 py-8 text-center text-gray-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/KirtiJha-06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 text-3xl transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kirti-jha-280162238/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 text-3xl transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
         
        </div>
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Kirti Jha. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Designed and Built with <span className="text-red-500">❤️</span> in India.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;