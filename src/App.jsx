import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// FaGithub, FaLinkedin, FaEnvelope are not directly used in App.jsx but good to keep if used in other components
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import AnimatedCursor from './components/AnimatedCursor';
import AnimatedGrid from './components/AnimatedGrid'; // NEW: Import the grid component
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatedCursor />

      <AnimatePresence>
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          className="bg-gray-950 min-h-screen text-white font-sans relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Replaced blob animation with the new grid */}
          <AnimatedGrid />

          <div className="relative z-10">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default App;