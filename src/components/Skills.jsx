import React from 'react';
import { Code, Layout, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-cyan-400" size={24} />,
      skills: ["Java", "Python", "R", "SQL"]
    },
    {
      title: "Web Development",
      icon: <Layout className="text-purple-400" size={24} />,
      skills: ["HTML", "CSS", "React.js", "Node.js", "Spring Boot"]
    },
    {
      title: "Data Science & Analytics",
      icon: <Database className="text-cyan-400" size={24} />,
      skills: ["Power BI", "Tableau", "Excel", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"]
    },
    {
      title: "Databases & Tools",
      icon: <Wrench className="text-purple-400" size={24} />,
      skills: ["MySQL", "Git", "GitHub", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-16 justify-center">
          <Database className="text-purple-400" size={32} />
          <h2 className="text-4xl font-bold text-white tracking-wide">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl neon-border group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm font-medium border border-slate-700/50 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
