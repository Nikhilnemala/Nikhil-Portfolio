import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: '1Strop.ai',
      location: 'Remote',
      period: 'Jul 2025 – Sep 2025',
      description:
        'Worked on building responsive and modern web applications using React, Bootstrap, Tailwind CSS, HTML, CSS, and JavaScript. Collaborated with senior developers to implement reusable UI components and improve frontend performance.',
      achievements: [
        'Developed responsive page with React and Tailwind',
        'Optimized UI for faster load times and accessibility',
        'Integrated Bootstrap components for cross-device consistency',
        'Improved code reusability by implementing modular components'
      ]
    },
    {
      title: 'ML Using Python Intern',
      company: 'YHills',
      location: 'Remote',
      period: 'Jan 2025 – Feb 2025',
      description:
        'Worked on building and improving machine learning models using Python, TensorFlow, and Scikit-learn. Designed efficient data pipelines and implemented feature engineering for better model performance.',
      achievements: [
        'Built ML models using TensorFlow & Scikit-learn',
        'Designed end-to-end preprocessing and validation pipelines',
        'Enhanced accuracy with advanced feature engineering'
      ]
    },
    {
      title: 'Game Developer Intern',
      company: 'Edumoon',
      location: 'Remote',
      period: 'May 2024 – June 2024',
      description:
        'Contributed to gameplay mechanics and system scripts in Unity Engine. Focused on implementing interactive features and ensuring smooth execution of core game functionalities.',
      achievements: [
        'Developed gameplay mechanics using C in Unity',
        'Implemented efficient scripts for interactive systems',
        'Ensured seamless operation of core game features'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-zinc-800">
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-cyan-500 mx-auto mb-8" />
          <p
            className="text-lg text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Internships and hands-on industry experience where I applied my skills to real-world projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-700 via-cyan-500 to-blue-700" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-full border-4 border-white dark:border-zinc-800 shadow-lg z-10" />

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-zinc-700"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2 text-blue-700 dark:text-cyan-500">
                        <Briefcase size={20} />
                        <span
                          className="text-sm font-medium"
                          style={{ fontFamily: 'Roboto Mono, monospace' }}
                        >
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <h3
                      className="text-xl font-bold text-zinc-900 dark:text-white mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {exp.title}
                    </h3>

                    <div className="flex items-center space-x-4 mb-4 text-zinc-600 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Briefcase size={16} />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p
                      className="text-zinc-700 dark:text-slate-300 mb-4 leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4
                        className="text-sm font-semibold text-zinc-900 dark:text-white"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-700 dark:bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                            <span
                              className="text-sm text-zinc-600 dark:text-slate-400"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
