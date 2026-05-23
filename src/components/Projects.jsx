import React, { useState } from 'react';
import { PlayCircle, FolderKanban, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All Projects', 'Web Development', 'Data Science / Analytics'];

  const projects = [
    {
      id: 1,
      title: "SmartConvert.com – AI File Converter",
      category: "Web Development",
      tags: ["Spring Boot", "React", "AI"],
      description: "Web app for multi-format conversion with AI-powered document summarization.",
      github: "https://github.com/SaivenkatGajabinkar/SmartConverter.git",
      demo: "https://smart-converter-46pq.vercel.app/"
    },
    {
      id: 2,
      title: "ChaTTy – Multilingual Chat App",
      category: "Web Development",
      tags: ["React", "Node.js", "Spring Boot", "MySQL", "WebSockets"],
      description: "Real-time chat with automatic translation and seamless user experience.",
      github: "https://github.com/SaivenkatGajabinkar/ChaTTy.git",
      demo: "https://chatty-frontend-orcin.vercel.app"
    },
    {
      id: 3,
      title: "Mobile Sales Analytics Dashboard",
      category: "Data Science / Analytics",
      tags: ["Power BI", "Excel"],
      description: "Interactive sales trend, revenue, and regional performance tracker.",
      github: "https://github.com/SaivenkatGajabinkar/PowerBI.Project.git",
      demo: "https://github.com/SaivenkatGajabinkar/PowerBI.Project/blob/main/project.dashboard.pbix"
    },
    {
      id: 4,
      title: "Gold & Silver Price Analysis",
      category: "Data Science / Analytics",
      tags: ["Tableau"],
      description: "Trend analysis exploring relationships between metal prices, inflation, and USD-INR rates.",
      github: "https://github.com/SaivenkatGajabinkar/Tableau.Project.git",
      demo: "https://github.com/SaivenkatGajabinkar/Tableau.Project/blob/main/Dashboard.png"
    },
    {
      id: 5,
      title: "IPLytics — Data-Driven Cricket Analytics Platform",
      category: "Data Science / Analytics",
      tags: ["Python", "Pandas", "Data Analytics"],
      description: "A data-driven cricket analytics platform built to extract player performance insights, visualize match trends, and perform predictive analytics on IPL datasets.",
      github: "https://github.com/SaivenkatGajabinkar/IPLytics.git",
      demo: "https://iplytics-saivenkatgajabinkar.streamlit.app/"
    }
  ];

  const filteredProjects = projects.filter(p => 
    filter === 'All Projects' ? true : p.category === filter || (filter === 'All' && true)
  );

  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <FolderKanban className="text-cyan-400" size={32} />
          <h2 className="text-4xl font-bold text-white tracking-wide">Featured Projects</h2>
        </div>

        {/* Filter Toggle */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                filter === cat || (filter === 'All' && cat === 'All Projects')
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/30 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-panel p-6 rounded-3xl group transition-transform duration-500 hover:-translate-y-2 neon-border flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-300 font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-slate-800 text-xs text-slate-300 rounded-full border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium text-white transition-all hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                >
                  <GithubIcon size={16} />
                  GitHub Code
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-sm font-medium text-cyan-300 transition-all hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                >
                  {project.demo.includes('video') ? (
                    <>
                      <PlayCircle size={16} />
                      Watch Demo
                    </>
                  ) : (
                    <>
                      <ExternalLink size={16} />
                      Live Demo
                    </>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
