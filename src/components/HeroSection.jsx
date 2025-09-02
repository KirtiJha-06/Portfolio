import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-transparent overflow-hidden px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative z-10">
        <motion.h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight" variants={itemVariants}>
          Hi, I'm <span className="text-teal-400">Kirti Jha</span>
        </motion.h1>
        <motion.p className="text-2xl md:text-3xl text-gray-300 mb-8" variants={itemVariants}>
          A Passionate <span className="font-semibold text-purple-300">FullStack Developer</span>
        </motion.p>
        <motion.p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10" variants={itemVariants}>
          Building beautiful, responsive, and highly interactive web experiences.
        </motion.p>

        {/* Buttons Section */}
        <motion.div className="flex flex-wrap justify-center gap-6" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-teal-500 text-gray-900 rounded-full text-lg font-semibold hover:bg-teal-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-teal-500 text-teal-400 rounded-full text-lg font-semibold hover:bg-teal-500 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>

          {/* New Download Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1vWTZs20qiX1rBmp2enkpuU2DV-ARG8rN/view?usp=sharing"
            download="Kirti_Jha_Resume.pdf"
            className="px-8 py-3 bg-purple-500 text-white rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="text-xl" />
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div className="mt-12 flex justify-center space-x-6" variants={itemVariants}>
          <a
            href="https://github.com/KirtiJha-06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 text-4xl transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kirti-jha-280162238/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 text-4xl transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
