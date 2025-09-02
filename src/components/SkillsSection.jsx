import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiCplusplus } from 'react-icons/si';

import GeometricBackground from './GeometricBackground'; // Import the new component

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'React Native', icon: <FaReact className="text-indigo-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiMongodb className="text-green-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-700" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-gray-950 relative">
      <GeometricBackground /> {/* Add the geometric background here */}
      <div className="container mx-auto px-6 relative z-10"> {/* Add relative z-10 */}
        <motion.h2
          className="text-5xl font-bold text-center text-teal-400 mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>
        
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 w-32 h-32 bg-gray-800 rounded-2xl shadow-lg cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="text-sm font-semibold text-gray-200 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;