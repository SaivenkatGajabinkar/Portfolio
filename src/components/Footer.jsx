import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-12 px-4 relative z-10 border-t border-white/5 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <a href="mailto:saivenkatgajabinkar@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group">
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
              <Mail size={20} />
            </div>
            <span>saivenkatgajabinkar@gmail.com</span>
          </a>
          
          <a href="tel:+919392516856" className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-colors group">
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-purple-500/20 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
              <Phone size={20} />
            </div>
            <span>+91 93925 16856</span>
          </a>

          <div className="flex items-center gap-3 text-slate-300 group">
            <div className="p-3 bg-white/5 rounded-full">
              <MapPin size={20} />
            </div>
            <span>India</span>
          </div>
        </div>

        {/* Pulsing Radar / Available Status */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
          <span className="text-sm font-medium text-cyan-300">Available for Opportunities</span>
        </div>

        <p className="text-slate-500 text-sm mt-12">
          &copy; {new Date().getFullYear()} G. Sai Venkat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
