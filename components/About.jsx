import React from 'react';
import { User, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10 justify-center">
          <User className="text-cyan-400" size={32} />
          <h2 className="text-4xl font-bold text-white tracking-wide">About Me</h2>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden neon-border">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[60px]"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 relative group">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-cyan-500/30 p-2 group-hover:border-cyan-400 transition-colors duration-500 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                {/* Replace with your image */}
                <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Profile Image</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-purple-500/20 p-3 rounded-full border border-purple-500/50 backdrop-blur-sm animate-float">
                <Sparkles className="text-purple-400" size={24} />
              </div>
            </div>

            <div className="text-lg text-slate-300 leading-relaxed space-y-4 font-light">
              <p>
                Hello! I am a passionate <strong className="text-cyan-400 font-medium">Computer Science Undergraduate</strong> specializing in Data Science at Anurag University (Expected Graduation 2027).
              </p>
              <p>
                I thrive at the intersection of <span className="text-purple-400 font-medium">Software Engineering and Data Analytics</span>, leveraging code and analytical models to solve real-world problems. Whether it's building interactive, full-stack web applications or extracting actionable insights from complex datasets, I love turning ideas into impactful digital realities.
              </p>
              <p>
                My ultimate goal is to craft seamless digital experiences while utilizing the power of data to drive innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
