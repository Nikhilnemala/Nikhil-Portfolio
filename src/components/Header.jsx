import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Eye, Linkedin, Github, Code, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResumeHovered, setIsResumeHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-xl font-bold ${
                isScrolled ? 'text-blue-700' : 'text-white'
              }`}
            >
              Nikhil
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-zinc-900 dark:text-slate-300 hover:text-blue-700 dark:hover:text-cyan-500'
                      : 'text-white hover:text-slate-300'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Resume Button & Social Links */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Resume Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsResumeHovered(true)}
              onMouseLeave={() => setIsResumeHovered(false)}
              href="/Nikhil_Nemala_resume.pdf"   
              download="/Nikhil_Nemala_resume.pdf"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isScrolled
                  ? 'bg-blue-700 text-white hover:bg-blue-800'
                  : 'bg-white text-blue-700 hover:bg-slate-100'
              }`}
            >
              {isResumeHovered ? <Eye size={16} /> : <Download size={16} />}
              <span>{isResumeHovered ? 'View Resume' : 'Download'}</span>
            </motion.a>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/nikhil-nemala-643443275/',
                  label: 'LinkedIn'
                },
                {
                  icon: Github,
                  href: 'https://github.com/Nikhilnemala',
                  label: 'GitHub'
                },
                {
                  icon: Code,
                  href: 'https://leetcode.com/u/Nemala123/',
                  label: 'LeetCode'
                },
                {
                  icon: BookOpen,
                  href: 'https://www.geeksforgeeks.org/user/nikhilnevwz/',
                  label: 'GeeksforGeeks'
                }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'text-zinc-900 dark:text-slate-300 hover:text-blue-700 dark:hover:text-cyan-500'
                      : 'text-white hover:text-slate-300'
                  }`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-zinc-900 dark:text-slate-300' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-zinc-900 rounded-lg mt-2 shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-zinc-900 dark:text-slate-300 hover:text-blue-700 dark:hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-zinc-800"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-slate-200 dark:border-zinc-700">
                  <a
                    href="./public/Nikhil_Nemala_resume.pdf"
                    download="./public/Nikhil_Nemala_resume.pdf"
                    className="flex items-center space-x-2 w-full px-3 py-2 text-blue-700 font-medium"
                  >
                    <Download size={16} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
