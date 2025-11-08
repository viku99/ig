import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Add Variants to framer-motion import
import { motion, Variants } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

// Fix: Explicitly type itemVariants as Variants to satisfy framer-motion's expected types.
const itemVariants: Variants = {
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
  return (
    <motion.div variants={itemVariants} className={`relative block overflow-hidden group aspect-[4/3] ${className}`}>
      <Link to={`/project/${project.id}`}>
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 ease-in-out" />
        <motion.div
          className="absolute bottom-0 left-0 p-6 text-white w-full"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.p 
            className="text-neutral-300 uppercase text-sm tracking-widest"
            variants={{
              rest: { y: 20, opacity: 0 },
              hover: { y: 0, opacity: 1 }
            }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
          >
            {project.category}
          </motion.p>
          <motion.h3 
            className="text-2xl lg:text-3xl font-bold uppercase tracking-tight"
            variants={{
              rest: { y: 20, opacity: 0 },
              hover: { y: 0, opacity: 1 }
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {project.title}
          </motion.h3>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;