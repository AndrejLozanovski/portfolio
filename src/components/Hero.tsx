'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroProps {
  isVisible?: boolean;
}

export default function Hero({ isVisible = true }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ left: string; top: string; duration: number; delay: number }>>([]);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Frontend Developer';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    // Typing animation - only run when component is visible
    if (!isVisible) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Speed

    return () => clearInterval(typingInterval);
  }, [fullText, isVisible]);

  return (
    <section id="home" className="relative min-h-screen lg:min-h-screen md:min-h-[90vh] sm:min-h-[90vh] flex items-center justify-center lg:justify-center md:justify-start sm:justify-start overflow-hidden lg:pt-0 md:pt-16 sm:pt-12">
      {/* Background with pleasant colors */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.06),transparent_50%)]" />

        {/* Floating particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center md:items-start sm:items-start min-h-screen lg:min-h-screen md:min-h-[90vh] sm:min-h-[90vh] py-22 lg:py-0 md:py-12 sm:py-12">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Hi, I'm <span className="text-blue-400">Andrej</span>
            </motion.h1>

            <motion.div
              className="text-lg lg:text-xl xl:text-2xl mb-6 lg:mb-8 text-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block mr-2">{typedText}<span className="animate-pulse">|</span></span>
            </motion.div>

            <motion.p
              className="text-base lg:text-lg text-gray-300 mb-8 lg:mb-12 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              I like to craft solid and scalable frontend products with great user experiences.
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white transition-colors shadow-lg text-sm sm:text-base"
                whileHover={isVisible ? { scale: 1.05, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.5)" } : {}}
                whileTap={isVisible ? { scale: 0.95 } : {}}
              >
                View My Work
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 border-2 border-white/30 hover:border-white/60 rounded-full font-semibold text-white transition-colors text-sm sm:text-base"
                whileHover={isVisible ? { scale: 1.05 } : {}}
                whileTap={isVisible ? { scale: 0.95 } : {}}
              >
                Get In Touch
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            <motion.div
              className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Large background circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/40 via-indigo-600/30 to-purple-600/40 shadow-2xl"
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Medium circle */}
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 border border-slate-600/50 shadow-inner"
                animate={{
                  scale: [1, 1.05, 0.98, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Inner accent circle */}
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30"
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Central avatar */}
              <motion.div
                className="absolute inset-12 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-4 border-blue-400/70 shadow-2xl flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Inner glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.img
                  src="/Foto.JPG"
                  alt="Andrej's profile picture"
                  className="relative z-10 object-cover rounded-full"
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg"
                animate={{
                  y: [0, 15, 0],
                  rotate: [360, 180, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute top-1/3 -left-6 w-5 h-5 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full shadow-lg"
                animate={{
                  x: [0, -15, 0],
                  y: [0, 10, 0],
                  rotate: [0, 270, 180, 90, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute bottom-1/3 -right-6 w-4 h-4 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full shadow-lg"
                animate={{
                  x: [0, 15, 0],
                  y: [0, -10, 0],
                  rotate: [0, 90, 180, 270, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Centered Bottom Arrow */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative group cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={isVisible ? { scale: 1.2 } : {}}
            whileTap={isVisible ? { scale: 0.9 } : {}}
          >
            {/* Arrow container with glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100"
              animate={isVisible ? {
                scale: [1, 1.3, 1],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main arrow */}
            <motion.div
              className="relative p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
              animate={isVisible ? {
                y: [0, 10, 0],
                boxShadow: [
                  "0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 25px rgba(59, 130, 246, 0.4)",
                  "0 0 0 rgba(59, 130, 246, 0)"
                ]
              } : {}}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.svg
                className="w-6 h-6 text-white/70 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isVisible ? {
                  y: [0, 3, 0],
                } : {}}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>

            {/* Subtle pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-blue-400/30"
              animate={isVisible ? {
                scale: [1, 1.6, 1],
                opacity: [0.5, 0, 0.5],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
