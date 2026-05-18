import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <Background />
      
      <main className="flex flex-col gap-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
      </main>

      <Footer />
    </div>
  );
}

export default App;
