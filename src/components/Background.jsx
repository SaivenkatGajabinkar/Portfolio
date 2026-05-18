import React, { useEffect, useState } from 'react';

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random orbs
  const orbs = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    color: i % 2 === 0 ? 'bg-cyan-500/10' : 'bg-purple-500/10',
  }));

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#020617]">
      {/* Dynamic gradient following mouse */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.05), transparent 40%)`
        }}
      />
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Floating orbs */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`absolute rounded-full blur-xl ${orb.color} animate-float-slow`}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
            // Slight parallax based on mouse
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02 * (orb.id % 5 + 1)}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02 * (orb.id % 5 + 1)}px)`
          }}
        />
      ))}
    </div>
  );
};

export default Background;
