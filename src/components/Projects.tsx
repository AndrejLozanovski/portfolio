'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Projects() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCardFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const projectData = [
    {
      title: 'IT-FI',
      description: 'This is the official website for IT-FI, a company providing IT services. I worked on the frontend team, focusing on building responsive, user-friendly interfaces and ensuring a smooth user experience across the platform.',
      image: '/project.webp',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'MapLibre', 'Resend', 'Husky', 'Jest'
      ],
      link: 'https://it-fi.com.au/',
      github: '#',
    },
     {
      title: 'Bank Clone Application',
      description: 'Bank Clone App is a financial SaaS platform built with NextJS that displays transactions in real-time, connects to multiple bank accounts, manages their finances and allows users to transfer money to other platform users.',
      image: '/project2.webp',
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'shadcn/ui', 'React Hook Form', 'Zod', 'Appwrite', 'Plaid', 'Dwolla', 'Chart.js'],
      link: 'https://bank-app-p04.vercel.app/',
      github: 'https://github.com/AndrejLozanovski/banking-app',
    },
    {
      title: 'Kinemoe',
      description: 'The website serves as an online streaming platform that allows users to explore, engage with, and express themselves through a wide variety of media content including (but not limited to) Movies, TV series, documentaries, and podcasts.',
      image: '/project3.webp',
      tech: ['React', 'Bootstrap', 'Node.js', 'Typescript', 'Zustand', 'Axios', 'Firebase'],
      link: 'https://andrejlozanovski-project03.netlify.app/landing',
      github: 'https://github.com/AndrejLozanovski/Online-Streaming-Platform',
    },
    {
      title: 'This Amazing Portfolio',
      description: 'My personal portfolio website to present a showcase of my projects and provide professional information about myself.',
      image: '/project4.webp',
      tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      link: '#',
      github: '#',
    },
    {
      title: 'Street ARTists',
      description: 'Mobile web space for every street artist that will allow them to be able to track their income, and to have a place on the web where they can showcase their masterpieces.',
      image: '/project5.webp',
      tech: ['HTML', 'JavaScript', 'CSS', 'Bootstrap', 'Chart.js', 'API integration', 'Web API - Media Devices - Camera'],
      link: 'https://andrejlozanovski-project02.netlify.app/',
      github: 'https://github.com/AndrejLozanovski/Street-Artists-Project',
    },
    {
      title: 'Brainster Labs',
      description: 'BrainsterLabs is a project on which we will place all the projects Brainster students have made from the Marketing Academy, Coding Academy and Design Academy.',
      image: '/project6.webp',
      tech: ['HTML', 'JavaScript', 'CSS', 'RegEx'],
      link: 'https://andrejlozanovski-project01.netlify.app/',
      github: 'https://github.com/AndrejLozanovski/BrainsterLabs',
    },    
   
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="group relative h-[26rem] w-full [perspective:1000px] cursor-pointer"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              onClick={() => toggleCardFlip(index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedCards.has(index) ? '[transform:rotateY(180deg)]' : ''
                } group-hover:[transform:rotateY(180deg)]`}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-pink-900/20 opacity-50" />

                  {/* Project Visual */}
                  <div className="relative h-full bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center top' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Title Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-pink-900/20 opacity-50" />

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-200 mb-3">Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30 hover:border-blue-400/50 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => { e.stopPropagation(); setFlippedCards(prev => { const newSet = new Set(prev); newSet.delete(index); return newSet; }); }}
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-blue-500/50 text-blue-200 rounded-xl font-medium hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => { e.stopPropagation(); setFlippedCards(prev => { const newSet = new Set(prev); newSet.delete(index); return newSet; }); }}
                      >
                        <FaGithub className="text-xs" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
