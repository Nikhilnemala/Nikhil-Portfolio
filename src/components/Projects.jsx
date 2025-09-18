import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Code, Database } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Campus Academic Management System',
      category: 'Full Stack',
      image: '/public/Project-3.png',
      description: 'A Django-based campus academic management system with strong DBMS integration.',
      longDescription:
        'Developed a Campus Academic Management System using Django and SQL. It supports CRUD operations for student profiles, course registrations, and attendance logs. Integrated custom SQL queries and Django ORM for complex reporting and analytics.',
      technologies: ['Python', 'Django', 'SQL', 'DBMS'],
      features: [
        'CRUD operations for academic entities',
        'Attendance and course registration system',
        'Complex SQL queries and reporting',
        'Django ORM for optimized data handling',
        'Role-based access control',
        'Scalable backend design'
      ],
      github: 'https://github.com/sriharshini02/CampusAcademicManagementPortal',
      demo: 'https://drive.google.com/file/d/1_GqirNsBpIunCGUkeOAi5StL5tMWa937/view?usp=sharing',
      icon: Database
    },
    {
      id: 2,
      title: 'Sentiment Analysis on YouTube Trailer Comments',
      category: 'Machine Learning',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      description: 'An NLP project analyzing YouTube trailer comments using deep learning.',
      longDescription:
        'Built a sentiment analysis pipeline for YouTube movie trailer comments using NLP and deep learning models. Preprocessed 1000+ comments with tokenization, stopword removal, and sentiment scoring. Demonstrated expertise in PyTorch, transformers, and rule-based NLP methods.',
      technologies: ['Python', 'Pandas', 'BERT', 'NLTK', 'PyTorch', 'Transformers'],
      features: [
        'Preprocessing pipeline for 1000+ comments',
        'Tokenization and stopword removal',
        'Sentiment scoring with BERT & NLTK',
        'Rule-based + deep learning hybrid approach',
        'Forecasting insights for movie performance',
        'End-to-end ML pipeline with visualization'
      ],
      github: 'https://github.com/Nikhilnemala/youtube-sentiment-analysis',
      demo: 'https://drive.google.com/file/d/1Doxd6dCVHxsbkKCH7kVZIzx2EqvtznSN/view?usp=sharing',
      icon: Code
    },
    {
      id: 3,
      title: 'Library Management System',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop',
      description: 'A MERN stack library management app deployed on Vercel and MongoDB Atlas.',
      longDescription:
        'Designed and developed a Library Management System using the MERN stack. Streamlined book inventory, borrowing, and return processes. Deployed on Vercel and MongoDB Atlas for scalability and cloud availability.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      features: [
        'Book inventory management',
        'Borrowing and return tracking',
        'Cloud deployment with Vercel & Atlas',
        'Responsive and modern UI',
        'Scalable backend architecture',
        'User authentication and roles'
      ],
      github: 'https://github.com/Nikhilnemala/Library-Management',
      demo: 'https://library-projects.vercel.app/',
      icon: Code
    }
  ];

  const categories = ['All', 'Full Stack', 'Machine Learning'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-cyan-500 mx-auto mb-8" />
          <p
            className="text-lg text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-700 to-cyan-500 text-white'
                  : 'bg-slate-100 dark:bg-zinc-800 text-zinc-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-zinc-700'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-zinc-700 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-blue-700 dark:text-cyan-500 bg-blue-100 dark:bg-cyan-900/30 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-zinc-900 dark:text-white mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-zinc-600 dark:text-slate-400 text-sm leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-slate-200 dark:bg-zinc-700 text-zinc-700 dark:text-slate-300 rounded"
                        style={{ fontFamily: 'Roboto Mono, monospace' }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-slate-200 dark:bg-zinc-700 text-zinc-700 dark:text-slate-300 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                    width="600"
                    height="400"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className="text-2xl font-bold text-zinc-900 dark:text-white"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {selectedProject.title}
                    </h3>
                    <span className="text-sm font-medium text-blue-700 dark:text-cyan-500 bg-blue-100 dark:bg-cyan-900/30 px-3 py-1 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p
                    className="text-zinc-700 dark:text-slate-300 mb-6 leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {selectedProject.longDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4
                        className="text-lg font-semibold text-zinc-900 dark:text-white mb-4"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-700 dark:bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                            <span
                              className="text-zinc-600 dark:text-slate-400 text-sm"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4
                        className="text-lg font-semibold text-zinc-900 dark:text-white mb-4"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-zinc-700 dark:text-slate-300 rounded-lg text-sm"
                            style={{ fontFamily: 'Roboto Mono, monospace' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-700 text-white rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-600 transition-colors"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>Demo</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
