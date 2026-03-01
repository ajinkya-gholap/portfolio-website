
import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Linkedin, Mail, ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FDFDFD] dark:bg-gray-950 transition-colors duration-300">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-l from-orange-50/50 to-transparent dark:from-orange-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Profile Info */}
          <div className={`lg:col-span-4 flex flex-col items-center lg:items-start space-y-6 reveal ${isVisible ? 'active' : ''}`}>
            <div className="relative">
              <div className="w-56 h-64 md:w-64 md:h-72 rounded-[2.5rem] overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-2xl ring-8 ring-white dark:ring-gray-800 transform -rotate-3 hover:rotate-0 transition-all duration-500">
                <img
                  src={"img/Ajinkya1.jpg"}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl animate-float transition-colors duration-300">
                <span className="flex items-center text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-widest">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Active Now
                </span>
              </div>
            </div>

            <div className="text-center lg:text-left pt-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{PERSONAL_INFO.name}</h2>
              <p className="text-orange-600 font-semibold uppercase tracking-widest text-sm">{PERSONAL_INFO.role}</p>
              <div className="flex justify-center lg:justify-start space-x-5 mt-6">
                <a href={PERSONAL_INFO.linkedin} target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-400 hover:text-orange-600 hover:shadow-lg transition-all">
                  <Linkedin size={18} />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-400 hover:text-orange-600 hover:shadow-lg transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Center Main Text */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <div className="space-y-4">
              {/* <h3 className={`text-sm font-bold uppercase tracking-[0.3em] text-orange-600 reveal delay-100 ${isVisible ? 'active' : ''}`}>
                Professional Portfolio
              </h3> */}
              <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-[1.1] reveal delay-200 transition-colors duration-300 ${isVisible ? 'active' : ''}`}>
                Hi! I'm <span className="text-gray-300 dark:text-gray-600">Ajinkya</span>, a <span className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-500 px-6 py-2 rounded-3xl border border-orange-100 dark:border-orange-500/20">Java</span> Expert building <span className="text-gray-300 dark:text-gray-600 italic font-medium">Scalable</span> Logic.
              </h1>
            </div>

            {/* <p className={`max-w-2xl text-xl text-gray-500 leading-relaxed reveal delay-300 ${isVisible ? 'active' : ''}`}>
              Dedicated to crafting high-performance backends and seamless user experiences. Specializing in Java Full-stack development with a recruiter-focused approach.
            </p> */}

            <div className={`flex flex-wrap items-center gap-8 pt-4 reveal delay-400 ${isVisible ? 'active' : ''}`}>
              <a
                href="#projects"
                className="group flex items-center space-x-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white transition-all shadow-2xl hover:-translate-y-1"
              >
                <span>Discover Work</span>
                <ArrowDownRight className="group-hover:rotate-45 transition-transform" />
              </a>
              <div className="hidden sm:block text-sm font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.2em] border-l-2 border-gray-100 dark:border-gray-800 pl-8">
                Full Stack<br />Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
