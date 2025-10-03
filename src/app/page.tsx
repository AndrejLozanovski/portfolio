'use client';

import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

export default function Home() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isLoadingComplete) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isLoadingComplete]);

  useEffect(() => {
    if (!isLoadingComplete) return;

    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoadingComplete]);

  return (
    <>
      <Loading onLoadingComplete={handleLoadingComplete} />
      <div className="min-h-screen">
        <Navbar isVisible={isLoadingComplete} />
        <Hero isVisible={isLoadingComplete} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
