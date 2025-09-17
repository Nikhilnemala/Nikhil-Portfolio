import React from 'react';
    import { motion } from 'framer-motion';
    import { Linkedin, Github, Code, Heart } from 'lucide-react';

    const Footer = () => {
      const socialLinks = [
        { icon: Linkedin, href: 'https://www.linkedin.com/in/nikhil-nemala-643443275/', label: 'LinkedIn' },
        { icon: Github, href: 'https://github.com/Nikhilnemala', label: 'GitHub' },
        { icon: Code, href: 'https://leetcode.com/u/Nemala123/', label: 'LeetCode' }
      ];

      const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <footer className="bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <motion.h3
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  onClick={() => scrollToSection('home')}
                >
                  Nikhil Nemala
                </motion.h3>
                <p className="text-slate-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Aspiring Software Developer and AI/ML enthusiast skilled in MERN stack and NLP, with hands-on experience in building scalable web apps and intelligent ML-driven solutions.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-500 hover:text-white transition-all"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Quick Links
                </h4>
                <nav className="space-y-2">
                  {[
                    { id: 'home', label: 'Home' },
                    { id: 'about', label: 'About' },
                    { id: 'experience', label: 'Experience' },
                    { id: 'education', label: 'Education' },
                    { id: 'projects', label: 'Projects' },
                    { id: 'contact', label: 'Contact' }
                  ].map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(item.id)}
                      className="block text-slate-400 hover:text-white transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Get In Touch
                </h4>
                <div className="space-y-2 text-slate-400">
                  <p style={{ fontFamily: 'Inter, sans-serif' }}>nemalanikhil7@gmail.com</p>
                  <p style={{ fontFamily: 'Inter, sans-serif' }}>+91 6302048688</p>
                  <p style={{ fontFamily: 'Inter, sans-serif' }}>Vizag, AP</p>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                © 2025 Nikhil Nemala. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm flex items-center mt-4 md:mt-0" style={{ fontFamily: 'Inter, sans-serif' }}>
                Built with <Heart className="w-4 h-4 text-red-500 mx-1" /> by{' '}
                <a
                  href="/Hero.jsx"
                  target="_blank"
                  rel="nofollow"
                  className="text-blue-400 hover:text-blue-300 transition-colors ml-1"
                >
                  Nikhil
                </a>
              </p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;