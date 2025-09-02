import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const AnimatedCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useSpring(0, { stiffness: 300, damping: 20 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 20 });

  const cursorSize = isHovering ? 40 : 16; // Larger on hover

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - cursorSize / 2);
      cursorY.set(e.clientY - cursorSize / 2);
    };

    window.addEventListener('mousemove', moveCursor);

    // Add event listeners for hover effects on interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input[type="submit"], input[type="button"], label, .group, [whileHover], [onClick]'
    );

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, cursorSize, isHovering]); // Recalculate cursorSize on isHovering change

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto'; // Restore on unmount
    };
  }, []);

  return (
    <motion.div
      className="fixed z-[99999] top-0 left-0 rounded-full pointer-events-none transition-colors duration-200 ease-out"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        width: cursorSize,
        height: cursorSize,
        backgroundColor: isHovering ? 'rgba(52, 211, 153, 0.4)' : 'rgba(107, 114, 128, 0.3)', // teal or gray
        border: isHovering ? '2px solid rgba(52, 211, 153, 0.8)' : '2px solid rgba(107, 114, 128, 0.5)',
        mixBlendMode: isHovering ? 'normal' : 'difference', // Mix-blend-difference for cool effect
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default AnimatedCursor;