import React from 'react';
import { motion, Variants } from 'framer-motion';

// Variants for the sharp, focused layer of the 'V'
const sharpVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: [0.22, 1, 0.36, 1], // smoothEase
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Variants for the blurred, out-of-focus layer
const blurVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    // Sequence: fade in quickly, then fade out as focus is achieved
    opacity: [0, 0.8, 0],
    transition: {
      delay: 0.2,
      duration: 1.2,
      times: [0, 0.5, 1],
      ease: 'easeOut',
    },
  },
  hover: {
    opacity: 0.6,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const AnimatedLogo: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="relative cursor-pointer"
      aria-label="Vikas Logo"
    >
      <motion.svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        aria-hidden="true"
        style={{ transformOrigin: 'center' }}
      >
        {/* Define the blur filter */}
        <defs>
          <filter id="soft-focus-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
        </defs>

        {/* The blurred, out-of-focus layer */}
        <motion.path
          d="M12 10 L25 38 L38 10"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#soft-focus-blur)"
          variants={blurVariants}
        />

        {/* The sharp, in-focus layer */}
        <motion.path
          d="M12 10 L25 38 L38 10"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={sharpVariants}
        />
      </motion.svg>
    </motion.div>
  );
};

export default AnimatedLogo;
