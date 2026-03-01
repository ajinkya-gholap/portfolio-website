
import React from 'react';
import { Project, ExperienceItem, EducationItem } from './types';
import { Code2, Database, Terminal, Cpu, Layout, Globe, Award, CirclePile } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Ajinkya Gholap",
  role: "Java Developer",
  email: "gholapajinkya465@gmail.com",
  phone: "+91-8484981685",
  linkedin: "https://linkedin.com/in/ajinkya-gholap",
  github: "https://github.com/ajinkya-gholap",
  instagram: "https://instagram.com/_ajinkya2002",
  location: "Amravati, India",
  profile: "Final-year MCA student with strong knowledge of Java, SQL, web development technologies. Actively seeking an entry-level Java Developer role to apply skills and grow in a professional environment."
};

export const PROJECTS: Project[] = [
  {
    title: "Table Tennis Game",
    category: "Java Desktop App",
    description: "Developed a 2-player desktop game using Core Java, AWT, and Swing. Implemented real-time keyboard controls and score tracking with 100% accuracy. Applied OOP principles, reducing code duplication by 25%. Improved game responsiveness by 15% through optimized event handling.",
    image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=800&auto=format&fit=crop",
    link: "#"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Java Development Intern",
    company: "SaiKet Systems",
    duration: "Jan 2025 – Mar 2025",
    description: [
      "Developed Java modules using Core Java and OOP, improving code efficiency by 25%.",
      "Debugged and resolved application issues, reducing runtime errors by 20%.",
      "Implemented reusable classes, decreasing code duplication by 30%.",
      "Assisted in testing and optimization, improving application stability by 15%."
    ]
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    duration: "Oct 2024 – Dec 2024",
    description: [
      "Designed responsive web pages using HTML5, CSS3, and JavaScript.",
      "Improved page responsiveness by 30% across desktop and mobile devices.",
      "Optimized UI components, reducing page load time by 20%.",
      "Delivered tasks within deadlines, maintaining 100% task completion rate."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Saraswati College, Amravati (SGBAU)",
    duration: "2024 – 2026",
    details: [
      "Location: Shegaon, India",
      "Ranked among the top 5% of the batch based on academic performance.",
      "Completed 10+ hands-on assignments in Java and SQL-based applications."
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science",
    institution: "Dr. G. K. College, Amravati (SGBAU)",
    duration: "2020 – 2023",
    details: [
      "Location: Telhara, India",
      "Foundational coursework in algorithms, data structures, and software engineering."
    ]
  }
];

export const SKILLS = [
  { name: "Java", icon: <Code2 />, category: "Technical" },
  { name: "SQL & JDBC", icon: <Database />, category: "Technical" },
  { name: "Spring Boot", icon: <Terminal />, category: "Technical" },
  { name: "JSP/Servlets", icon: <Cpu />, category: "Technical" },
  { name: "HTML5/CSS3", icon: <Layout />, category: "Technical" },
  { name: "JavaScript", icon: <Globe />, category: "Technical" },
  { name: "Git & GitHub", icon: <Code2 />, category: "Tools" },
  { name: "Oracle SQL", icon: <Database />, category: "Technical" },
  { name: "DSA", icon: <CirclePile />, category: "Technical" }
];

export const CERTIFICATIONS = [
  {
    title: "Java Full Stack Development",
    issuer: "Naresh-IT",
    date: "Dec 2023 – July 2024",
    icon: <Award className="text-orange-600" />
  },
  {
    title: "Gemini Certified",
    issuer: "Google",
    date: "Dec 12, 2025",
    icon: <Award className="text-orange-600" />
  },
  {
    title: "Infosys - Springboard",
    issuer: "Infosys",
    date: "Jan 6, 2025",
    icon: <Award className="text-orange-600" />
  }
];
