import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import PageLayout from './components/PageLayout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

// A wrapper to apply the standard page layout to interior pages
const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <PageLayout>{children}</PageLayout>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Main />
    </HashRouter>
  );
};

const Main: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-brand-dark text-neutral-300">
      <Header />
      <ScrollToTop />
      <main className="w-full">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<LayoutWrapper><PortfolioPage /></LayoutWrapper>} />
            <Route path="/project/:id" element={<LayoutWrapper><ProjectDetailPage /></LayoutWrapper>} />
            <Route path="/about" element={<LayoutWrapper><AboutPage /></LayoutWrapper>} />
            <Route path="/contact" element={<LayoutWrapper><ContactPage /></LayoutWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;