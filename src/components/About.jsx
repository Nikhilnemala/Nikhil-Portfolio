import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Frontend Development', description: 'React.js, HTML, CSS, Tailwind CSS' },
    { icon: Database, title: 'Backend & Databases', description: 'Node.js, Express.js, MySQL, MongoDB' },
    { icon: Brain, title: 'AI & Machine Learning', description: 'TensorFlow, Scikit-learn, Pandas, NLP' },
    { icon: Globe, title: 'Cloud & Web Technologies', description: 'REST APIs, AWS, DBMS' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-900">
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-cyan-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-2xl transform rotate-6" />
              <img
                src="/images/Nikhil.png"
                alt="Profile"
                className="relative w-full h-96 object-cover rounded-2xl shadow-xl"
                loading="lazy"
                width="500"
                height="600"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p
                className="text-zinc-700 dark:text-slate-300 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                I'm an aspiring Software Developer currently pursuing B.Tech in CSE (AI & ML). 
                Skilled in full-stack development using the MERN stack and experienced in building 
                ML/NLP applications. My technical expertise includes Python, Java, SQL, and cloud 
                technologies.
              </p>
              <p
                className="text-zinc-700 dark:text-slate-300 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                I’ve built projects like a Campus Academic Management System, YouTube Sentiment Analyzer, 
                and a Library Management System. I am passionate about solving problems, learning new 
                technologies, and creating efficient, scalable, and impactful solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-slate-50 dark:bg-zinc-800 rounded-lg border border-slate-200 dark:border-zinc-700"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <skill.icon className="w-6 h-6 text-blue-700 dark:text-cyan-500" />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-zinc-900 dark:text-white text-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {skill.title}
                      </h3>
                      <p
                        className="text-xs text-zinc-600 dark:text-slate-400 mt-1"
                        style={{ fontFamily: 'Roboto Mono, monospace' }}
                      >
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
