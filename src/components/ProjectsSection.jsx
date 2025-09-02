import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GeometricBackground from './GeometricBackground'; // Import the geometric background component
import Nutrizen from '../assets/Nutrizen.png';
import chat from '../assets/chatscreen.jpg';
import Devdocket from '../assets/Devdocket.png';

// Example project data
const projects = [
  {
    title: 'Nutrizen',
    description: `Developed NutriZen, a complete wellness app that includes modules for mood, sleep, skincare, fitness, nutrition,
and routine tracking.`,
    tech: ['React',  'Node.js' , 'Express.js' , 'MongoDB' ],
    github: 'https://github.com/KirtiJha-06/Nutrizen/tree/main',
    live: 'https://nutrizen-two.vercel.app/',
    image:Nutrizen,
  },
  {
    title: 'Mindfulness',
    description: `Developed a mental health chatbot powered by AI, using React Native and Expo to provide
real-time, conversational support.`,
    tech: ['ReactNative', 'Typescript', 'Expo', 'GeminiAPI'],
    github: 'https://github.com/KirtiJha-06/Mindfulness',
    live: 'https://drive.google.com/file/d/1GGismC3mj8gFsD2H71YkLp2Z2OwiWlxN/view',
    image: chat,
  },
  {
    title: 'DevDocket',
    description: `Developed a fully responsive, single-page productivity dasboard with React and MUI. It integrates five modular
tools: Micro-Journal, Coding Tracker, Bug Vault, Break Timer, and Tech Stack Planner`,
    tech: ['React', 'MUI', 'React Router', 'Framer Motion', 'Bootstrap'],
    github: 'https://github.com/KirtiJha-06/DevDocket',
    live: 'https://dev-docket-seven.vercel.app/',
    image: Devdocket,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-xl overflow-hidden group"
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-teal-400 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-teal-400 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaExternalLinkAlt />
          </motion.a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-700 text-teal-400 text-sm rounded-full font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="projects"
      className="py-24 bg-gray-900 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <GeometricBackground /> {/* Add the geometric background here */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center text-teal-400 mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;