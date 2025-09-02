import React from 'react';
import { motion } from 'framer-motion';

const GeometricBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full overflow-hidden opacity-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1.5 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="geometric-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0L80 40L40 80L0 40Z"
              stroke="#2C3E50"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#geometric-pattern)"
        />
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#geometric-pattern)"
          animate={{ x: [0, -80, 0], y: [0, -80, 0] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </motion.div>
  );
};

export default GeometricBackground;