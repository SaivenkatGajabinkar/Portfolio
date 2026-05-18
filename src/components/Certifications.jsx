import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "Oracle Java Foundations",
      issuer: "Oracle University"
    },
    {
      title: "SQL and Relational Databases 101",
      issuer: "IBM SkillsBuild"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM SkillsBuild"
    },
    {
      title: "Cyber Security Essentials",
      issuer: "Cisco Networking Academy"
    },
    {
      title: "Introduction to Data Analytics",
      issuer: "Simplilearn"
    },
    {
      title: "Infosys Springboard Certifications",
      issuer: "Infosys",
      details: "(HTML5, CSS3, Python Programming, Database and SQL)"
    },
    {
      title: "Remote Sensing Data Analytics in Crop Production Forecasting",
      issuer: "IIRS / ISRO"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Award className="text-purple-400" size={32} />
          <h2 className="text-4xl font-bold text-white tracking-wide">Certifications</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {certs.map((cert, idx) => (
            <div 
              key={idx}
              className="glass-panel px-6 py-4 rounded-2xl flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300 neon-border min-w-[280px]"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Award className="text-purple-400" size={20} />
              </div>
              <div>
                <h3 className="text-white font-medium">{cert.title}</h3>
                <p className="text-sm text-slate-400">
                  {cert.issuer} {cert.details && <span className="text-slate-500">{cert.details}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
