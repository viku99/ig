import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import PlayIcon from './icons/PlayIcon';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(error => {
        // Autoplay was prevented.
        console.error("Video play failed:", error);
      });
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isHovered]);

  return (
    <motion.div 
        variants={itemVariants} 
        className={`relative block overflow-hidden group ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/project/${project.id}`} className="block w-full h-full">
        {/* Static Thumbnail Image */}
        <motion.img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* Hover Video */}
        {project.thumbnailVideo && (
          <motion.video
            ref={videoRef}
            src={project.thumbnailVideo}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        )}
        
        {/* Overlay and Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 ease-in-out" />
        
        {/* Centered Play Icon on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <PlayIcon className="w-16 h-16 text-white/80" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Always-Visible Text Info */}
        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
          <div className="flex justify-between items-baseline">
            <p className="text-neutral-300 uppercase text-sm tracking-widest">{project.category}</p>
            <p className="text-neutral-400 text-sm">{project.year}</p>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight mt-1">{project.title}</h3>
        </div>
      </Link>
       {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none ring-4 ring-brand-accent/0 group-hover:ring-brand-accent/50 ring-offset-4 ring-offset-brand-dark transition-all duration-300"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  );
};

export default ProjectCard;