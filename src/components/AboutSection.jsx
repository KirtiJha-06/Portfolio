import React from 'react';
import { motion } from 'framer-motion';
import GeometricBackground from './GeometricBackground'; // Import the new component
import profilePic from '../assets/pic.jpg'; 


const AboutSection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 bg-gray-900 relative">
      <GeometricBackground /> {/* Add the background here */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center text-teal-400 mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hello! I'm <span className="font-semibold text-teal-300">Kirti Jha</span>,a Full Stack Developer based in Gwalior, Madhya Pradesh, India, and a graduate of<span className="font-semibold text-teal-300"> Madhav Institute of Technology and Science.</span> My journey into development began with a passion for building intuitive and impactful digital solutions..
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I specialize in creating responsive and scalable applications using <span className="font-semibold text-teal-300">React</span>, <span className="font-semibold text-teal-300">Tailwind CSS</span>,<span className="font-semibold text-teal-300">Node.js</span>, <span className="font-semibold text-teal-300">Express.js</span>, <span className="font-semibold text-teal-300"></span>, <span className="font-semibold text-teal-300">MongoDB</span>,  I also integrate<span className="font-semibold text-teal-300"> AI and Machine Learning </span> to build smarter, data-driven applications. I love solving complex problems, optimizing performance, and continuously learning new tools to refine my craft.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you’ll find me exploring AI innovations, contributing to open-source projects, or enjoying a good book. I’m passionate about clean code, robust architecture, and delivering intelligent, high-quality products.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={profilePic}
              alt="Your Profile"
              className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-teal-500 shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;