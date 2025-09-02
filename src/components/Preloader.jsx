import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ setLoading }) => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      // Optional: A slight delay after welcome fades out before loading main content
      setTimeout(() => setLoading(false), 500);
    }, 3000); // Display welcome for 3 seconds

    return () => clearTimeout(timer);
  }, [setLoading]);

  const welcomeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.2, transition: { duration: 1, ease: "easeIn" } },
  };

  const textVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1.2, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950 text-white"
          variants={welcomeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="overflow-hidden mb-4"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-extrabold text-teal-400 overflow-hidden"
              variants={textVariants}
            >
              Welcome!
            </motion.h1>
          </motion.div>
          <motion.div
            className="w-48 h-2 bg-purple-500 my-4 rounded-full"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          ></motion.div>
          <motion.p
            className="text-xl md:text-2xl text-gray-400 overflow-hidden"
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            variants={textVariants}
          >
            Loading...
          </motion.p>
          {/* Optional: Simple loading animation */}
          <div className="flex space-x-2 mt-8">
            <motion.div
              className="w-4 h-4 bg-teal-500 rounded-full"
              animate={{ y: ["0%", "-100%", "0%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="w-4 h-4 bg-purple-500 rounded-full"
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            ></motion.div>
            <motion.div
              className="w-4 h-4 bg-teal-500 rounded-full"
              animate={{ y: ["0%", "-100%", "0%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            ></motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;