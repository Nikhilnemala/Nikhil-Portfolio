import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering(AI & ML)',
      institution: 'Anil Neerukonda Institute of Technology and Sciences',
      location: 'Visakhapatnam, Andhra Pradesh',
      period: '2023 – 2026',
      description:
        'Focused on software engineering, data structures, algorithms, artificial intelligence, and full-stack development. Worked on multiple academic and personal projects in AI/ML and web development.',
      achievements: [
        'Specialized in AI/ML, NLP, and full-stack web technologies',
        'Built academic projects using MERN stack and machine learning',
        'Active participant in coding challenges and hackathons'
      ]
    },
    {
      degree: 'Diploma in EEE',
      institution: 'Government Polytechnic Pendurthi',
      location: 'Visakhapatnam, Andhra Pradesh',
      period: '2020 – 2023',
      description:
        'Studied Electrical and Electronics with Technical knowledge',
      achievements: [
        'Graduated with distinction',
        'Strengthened problem-solving and logical reasoning skills'
      ]
    },
    {
      degree: 'Secondary School Education (Class X)',
      institution: 'SFS High School',
      location: 'Visakhapatnam, Andhra Pradesh',
      period: '2019 – 2020',
      description:
        'Completed foundational education with emphasis on science, mathematics, and computer basics.',
      achievements: [
        'Achieved excellent academic record',
        'Developed early interest in programming and technology'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-zinc-900">
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-cyan-500 mx-auto mb-8" />
          <p
            className="text-lg text-zinc-600 dark:text-slate-400 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            My academic journey and milestones that shaped my technical foundation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-700 via-cyan-500 to-blue-700" />

          <div className="space-y-12">
            {education.map((edu, index) => (
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
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-full border-4 border-white dark:border-zinc-900 shadow-lg z-10" />

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-zinc-700"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2 text-blue-700 dark:text-cyan-500">
                        <GraduationCap size={20} />
                        <span
                          className="text-sm font-medium"
                          style={{ fontFamily: 'Roboto Mono, monospace' }}
                        >
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    <h3
                      className="text-xl font-bold text-zinc-900 dark:text-white mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {edu.degree}
                    </h3>

                    <div className="flex items-center space-x-4 mb-4 text-zinc-600 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <GraduationCap size={16} />
                        <span className="text-sm font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>

                    <p
                      className="text-zinc-700 dark:text-slate-300 mb-4 leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      <h4
                        className="text-sm font-semibold text-zinc-900 dark:text-white"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
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

export default Education;
