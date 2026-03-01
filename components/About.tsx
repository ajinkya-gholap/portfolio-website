
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { FileDown, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  // Resume download handled via direct link to /resume.pdf in public folder

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-gray-800 transition-colors duration-300">
            <img
              src="img/Ajinkya2.jpg"
              alt="Ajinkya Gholap Professional Portrait"
              className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-gray-900 dark:bg-gray-800 text-white p-10 rounded-[2rem] shadow-2xl hidden md:block transition-colors duration-300">
            <p className="text-5xl font-black text-orange-600 mb-1">02</p>
            <p className="text-xs font-bold opacity-60 uppercase tracking-[0.2em] leading-tight">Industry<br />Internships</p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 dark:text-orange-500 mb-6">CURRICULUM VITAE</h3>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight transition-colors duration-300">
              Logic Meets <span className="text-orange-600">Creativity</span>.
            </h2>
          </div>

          <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-light italic border-l-4 border-orange-600 dark:border-orange-500 pl-8 transition-colors duration-300">
            "{PERSONAL_INFO.profile}"
          </p>

          <div className="grid grid-cols-2 gap-10 py-4">
            <div>
              <p className="text-4xl font-black text-gray-900 dark:text-white transition-colors duration-300">MCA</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Specialization</p>
            </div>
            <div>
              <p className="text-4xl font-black text-gray-900 dark:text-white transition-colors duration-300">Top 5</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Batch %</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center justify-center space-x-4 bg-orange-600 dark:bg-orange-600 text-white px-10 py-5 rounded-full text-lg font-black hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 transition-all group shadow-xl hover:shadow-orange-200 dark:hover:shadow-orange-900/40">
              <span>Contact Me</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="Ajinkya_Gholap.pdf"
              download="Ajinkya_Gholap.pdf"
              className="flex items-center justify-center space-x-4 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700 text-gray-900 dark:text-white px-10 py-5 rounded-full text-lg font-bold hover:border-orange-600 dark:hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-500 transition-all shadow-sm"
            >
              <FileDown size={20} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
