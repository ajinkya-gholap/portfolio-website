
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-950 dark:bg-black text-white pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 space-y-12">
            <div className="relative group w-fit">
              <img
                src="img/Ajinkya3.png"
                alt="Ajinkya Portrait"
                className="w-32 h-40 rounded-3xl object-cover ring-4 ring-orange-600/20 group-hover:ring-orange-600 transition-all duration-500"
              />
              <div className="mt-6 text-sm italic font-light opacity-50 tracking-wide">Bringing clarity to complex<br />software architectures.</div>
            </div>
            <div>
              <h2 className="text-7xl md:text-9xl font-black opacity-5 leading-[0.8] pointer-events-none select-none">
                {PERSONAL_INFO.name.split(' ')[0]}<br />{PERSONAL_INFO.name.split(' ')[1]}
              </h2>
              <div className="relative -mt-12 md:-mt-16">
                <p className="text-xl opacity-60 max-w-sm font-light">
                  Ready for new challenges and entry-level Java opportunities. Let's build something significant.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-end">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group text-lg sm:text-2xl md:text-5xl font-black bg-white/5 border border-white/10 px-8 sm:px-12 py-10 rounded-[3rem] hover:bg-orange-600 transition-all text-center w-full lg:w-fit shadow-2xl overflow-hidden relative break-all sm:break-normal"
            >
              <span className="relative z-10">gholapajinkya465@gmail.com</span>
              <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0"></div>
            </a>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 mt-24 w-full">
              <div className="space-y-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-600">Quick Links</p>
                <ul className="space-y-3 text-lg font-medium opacity-70">
                  <li><a href="#about" className="hover:text-orange-600 transition-colors">Biography</a></li>
                  <li><a href="#projects" className="hover:text-orange-600 transition-colors">Portfolio</a></li>
                  <li><a href="#skills" className="hover:text-orange-600 transition-colors">Expertise</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-600">Resources</p>
                <ul className="space-y-3 text-lg font-medium opacity-70">
                  <li><a href={PERSONAL_INFO.github} target='_blank' className="hover:text-orange-600 transition-colors">GitHub Repository</a></li>
                  <li><a href={PERSONAL_INFO.linkedin} target='_blank' className="hover:text-orange-600 transition-colors">LinkedIn Profile</a></li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-orange-600">Connect</p>
                <div className="flex space-x-5">
                  <a href={PERSONAL_INFO.linkedin} target='_blank' className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl hover:bg-orange-600 transition-all border border-white/10"><Linkedin size={20} /></a>
                  <a href={PERSONAL_INFO.github} target='_blank' className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl hover:bg-orange-600 transition-all border border-white/10"><Github size={20} /></a>
                  <a href={PERSONAL_INFO.instagram} target='_blank' className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl hover:bg-orange-600 transition-all border border-white/10"><Instagram size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-sm opacity-30 font-medium">Design & Code by Ajinkya Gholap © 2025</p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-3 text-xs font-black uppercase tracking-[0.3em] hover:text-orange-600 transition-all group"
          >
            <span className="opacity-50 group-hover:opacity-100">Scroll to top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-600">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
