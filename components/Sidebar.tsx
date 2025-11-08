import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const NavItem: React.FC<{ path: string; label: string }> = ({ path, label }) => {
  return (
    <NavLink
      to={path}
      end={path === '/'} // Ensure 'Home' link is only active on exact path
      className={({ isActive }) =>
        `relative flex items-center justify-center h-28 w-full transition-colors duration-300 group ${
          isActive ? 'text-white' : 'text-neutral-500 hover:text-white'
        }`
      }
    >
      <span
        style={{ writingMode: 'vertical-rl' }}
        className="transform rotate-180 uppercase text-xs tracking-[0.2em]"
      >
        {label}
      </span>
    </NavLink>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col items-center justify-between h-screen w-20 bg-brand-dark z-50 py-8 border-r border-neutral-800/50 transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:translate-x-0">
      <NavLink to="/" className="text-white font-black text-4xl tracking-tighter">V</NavLink>
      
      <nav className="flex flex-col items-center">
        {navLinks.map(link => <NavItem key={link.path} {...link} />)}
      </nav>

      {/* Empty div for vertical alignment */}
      <div />
    </aside>
  );
};

export default Sidebar;