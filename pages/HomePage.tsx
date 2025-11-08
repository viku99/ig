import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Add Variants to framer-motion import
import { motion, Variants } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ArrowIcon from '../components/icons/ArrowIcon';

const title = "VIKAS";
const titleContainerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

// Fix: Explicitly type letterVariants as Variants to satisfy framer-motion's expected types for cubic-bezier easing.
const letterVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

const HomePage: React.FC = () => {
  return (
    <AnimatedPage type="fade">
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
          src="https://videos.pexels.com/video-files/857251/857251-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center text-white p-4">
          <motion.h1
            className="font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter uppercase"
            variants={titleContainerVariants}
            initial="initial"
            animate="animate"
          >
            {title.split("").map((letter, index) => (
              <motion.span key={index} className="inline-block" variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            className="text-neutral-300 text-lg md:text-xl tracking-widest uppercase mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Motion Designer & VFX Storyteller
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center justify-center mt-12 px-8 py-3 border border-white text-white uppercase text-sm tracking-widest transition-colors duration-300 hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-white"
            >
              View Portfolio
              <motion.div
                className="ml-2"
              >
                 <ArrowIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default HomePage;