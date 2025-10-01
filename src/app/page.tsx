'use client';

import { useState } from 'react';
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
