'use client';

import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: 'HTML'},
    { name: 'CSS'},
    { name: 'Sass'},
    { name: 'JavaScript'},
    { name: 'TypeScript'},
    { name: 'NodeJS'},
    { name: 'React'},
    { name: 'Next.js'},
    { name: 'Bootstrap'},
    { name: 'Tailwind CSS'},
    { name: 'Git'},
    { name: 'REST'},
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-50 relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-slate-600 mb-8">
              <p>
                Frontend developer focused on creating elegant, fast, functional, and accessible user-experience applications.
                I love diving into the latest web tech to turn your big ideas into apps that actually work smooth, speedy, and built with code that's easy to read.
              </p>
              <p>
                Over the years I've been working on many projects. For the last year, I have been working at IT-FI, an IT services company specializing in web development and branding, as a Next.js developer.
                In my role, I have worked on designing and building the official website from scratch. Additionally, I've had the chance to lead the development team. In that role, I guided the group, oversaw technical direction, ensured high code quality, and collaborated with other teams.
              </p>
              <p>
                As someone who is passionate about learning new things, I'm excited to bring my experience and skills to your company. Whether you're looking for a developer who can bring a fresh perspective to your team, I am ready to contribute and help you achieve your goals.
                With hands-on experience at IT-FI and leadership background, I can offer a fresh, unique perspective and valuable skills to your team.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Technologies I Use
            </h3>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={`${skill.name}-${index}`}
                  className="px-5 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
