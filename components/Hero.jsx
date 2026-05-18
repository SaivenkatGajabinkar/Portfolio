import React, { useState, useEffect } from 'react';
import { Code2, Download, ChevronDown, FileText, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = [
    "I build full-stack applications",
    "I unlock insights from data",
    "I bridge Software Engineering & Data Science"
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Glow effect behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-glow">G. Sai Venkat</span>
        </h1>
        
        <div className="h-12 mb-8">
          <p className="text-xl md:text-3xl text-slate-300 transition-opacity duration-500 font-light">
            {subtitles[subtitleIndex]}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a 
            href="#projects" 
            className="group relative px-8 py-3 bg-white/5 backdrop-blur-md text-white font-medium rounded-full overflow-hidden border border-cyan-500/30 hover:border-cyan-400 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 transition-[width] group-hover:w-full z-0"></div>
          </a>

          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              className="group flex items-center gap-2 px-8 py-3 bg-cyan-500/10 text-cyan-300 font-medium rounded-full border border-cyan-500/50 hover:bg-cyan-500/20 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              <Download size={18} />
              <span>Download Resume</span>
              <ChevronDown size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 right-0 mt-2 p-2 glass-panel rounded-xl transition-all duration-300 origin-top ${isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
              <a href="https://drive.google.com/drive/u/0/folders/16ZSNNpaj71oOgW7_9lQxnzN9jqW8UrY1" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 text-slate-200 transition-colors">
                <FileText size={18} className="text-cyan-400" />
                <span className="text-sm">Software Engineering</span>
              </a>
              <a href="https://drive.google.com/drive/u/0/folders/16ZSNNpaj71oOgW7_9lQxnzN9jqW8UrY1" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 text-slate-200 transition-colors">
                <Database size={18} className="text-purple-400" />
                <span className="text-sm">Data Science</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/SaivenkatGajabinkar?tab=repositories" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] text-slate-400">
            <GithubIcon size={24} />
          </a>
          <a href="https://www.linkedin.com/in/saivenkatgajabinkar/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] text-slate-400">
            <LinkedinIcon size={24} />
          </a>
          <a href="https://leetcode.com/u/saivenkatgajabinkar/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-purple-400 hover:text-purple-400 transition-all hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-slate-400">
            <Code2 size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
