'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Pradeep Nandwani
            </button>
            <div className="hidden md:flex space-x-6">
              {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Certificates', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Pradeep Nandwani
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-6 font-light">
              Full-Stack Developer
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              With 3+ years of experience shipping user-centric, high-traffic applications. 
              Known for translating business requirements into robust, scalable, and high-performance solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="mailto:nandwani.ind@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/ip-nandwani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              View GitHub
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <a href="mailto:nandwani.ind@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              📧 nandwani.ind@gmail.com
            </a>
            <a href="tel:+919111167419" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              📱 +91 9111167419
            </a>
            <span>📍 Indore, India</span>
            <a href="https://github.com/ip-nandwani" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              💼 ip-nandwani
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              I&apos;m a passionate Full-Stack Developer with over 3 years of experience building scalable, 
              high-performance applications that serve thousands of users daily. My expertise lies in 
              creating seamless user experiences while ensuring robust backend architecture.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Currently working at <span className="font-semibold text-blue-600 dark:text-blue-400">Tata Consultancy Services</span>, 
              I&apos;ve contributed to enterprise-level applications for clients like GE Healthcare and Google, 
              focusing on performance optimization, state management, and API integration.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Shri Vaishnav Vidyapeeth Vishwavidyalaya
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
                B. Tech in Computer Science
              </p>
              <p className="text-slate-500 dark:text-slate-500 mb-2">
                CGPA: 9.0/10.0
              </p>
              <p className="text-slate-500 dark:text-slate-500">
                2019 - 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                    Tata Consultancy Services
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Frontend Developer
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    Clients: GE Healthcare, Google
                  </p>
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold mt-2 md:mt-0">
                  2023 - Present
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  Contributed to the development and enhancement of a large-scale healthcare e-commerce application 
                  used by <span className="font-semibold text-blue-600 dark:text-blue-400">100K+ users</span>, 
                  helping maintain <span className="font-semibold">99.9% crash-free sessions</span> across mobile and web.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  Improved page and screen load time by <span className="font-semibold text-green-600 dark:text-green-400">~45%</span> and 
                  Core Web Vitals / TTI by <span className="font-semibold text-green-600 dark:text-green-400">~38%</span> by optimizing 
                  React rendering, applying memoization, list virtualization, and lazy loading.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  Implemented and maintained Redux Toolkit–based state management across <span className="font-semibold">30+ screens</span>, 
                  reducing unnecessary API calls by <span className="font-semibold text-green-600 dark:text-green-400">~30%</span> and 
                  improving UI consistency.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  Integrated and consumed <span className="font-semibold">30+ REST and GraphQL APIs</span> for catalog, 
                  cart, payments, and order workflows, working closely with backend teams to ensure stable releases 
                  with <span className="font-semibold">99.9% uptime</span>.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  Collaborated with backend engineers on FastAPI service contracts, contributing to API design 
                  discussions to support low-latency (<span className="font-semibold">&lt;250ms</span>) frontend interactions.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  Implemented authentication flows using <span className="font-semibold">JWT, OAuth 2.0, and biometric login</span>, 
                  helping reduce login-related issues and improve overall security compliance.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  Assisted in setting up and maintaining CI/CD pipelines for React Native and React web applications, 
                  reducing manual deployment effort and improving release consistency.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  Participated in production issue triaging and monitoring, helping reduce app crash rates by 
                  <span className="font-semibold text-green-600 dark:text-green-400"> ~50%</span> through bug fixes, 
                  performance tuning, and regression prevention.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  Developed enterprise web applications for Google internal teams using <span className="font-semibold">React.js, Angular, and FastAPI</span>, 
                  supporting <span className="font-semibold">10K+ daily users</span> with noticeable UI responsiveness improvements.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  Actively participated in code reviews and refactoring efforts, improving code readability, 
                  maintainability, and reducing recurring frontend defects.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 dark:text-slate-300">
                  Received client and team recognition for consistent delivery on critical features that improved 
                  feature adoption and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                Online Code Execution Platform
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
                Full Stack
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Built a multi-language, secure, sandboxed code execution system used by 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> 500+ active users</span>, 
                supporting real-time input/output, file uploads, and smart error analysis to accelerate debugging and learning.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                High-Performance Chat System
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 font-semibold">
                C++ | LRU + Trie
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Engineered a WhatsApp-style chat list using LRU caching and Trie-based indexing, 
                reducing data fetch latency by <span className="font-semibold text-green-600 dark:text-green-400">85%</span> and 
                optimizing memory usage at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'React Native', 'HTML5', 'CSS3', 'Responsive UI'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'NestJS', 'Express.js', 'GraphQL', 'REST APIs', 'JWT', 'RBAC', 'Microservices'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'Postgres DB', 'MySQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS (EC2, RDS, IAM)', 'Docker', 'CI/CD', 'Nginx', 'PM2', 'Load Balancing', 'Monitoring'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Testing & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Unit Testing', 'Integration Testing', 'API Testing', 'VS Code', 'Git', 'GitHub', 'Postman', 'JIRA', 'Linux', 'Agile/Scrum'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certificates
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Certificate of Excellence in Competitive Programming
              </h3>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                AWS Certified DevOps Engineer – Professional
              </h3>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                AWS Certified AI Practitioner
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:nandwani.ind@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Email Me
            </a>
            <a
              href="https://github.com/ip-nandwani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="tel:+919111167419"
              className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              Call Me
            </a>
          </div>
          
          <div className="text-sm text-slate-600 dark:text-slate-400">
            <p>📍 Indore, India</p>
            <p className="mt-2">📧 nandwani.ind@gmail.com | 📱 +91 9111167419</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
        <p>© {new Date().getFullYear()} Pradeep Nandwani. All rights reserved.</p>
      </footer>
    </div>
  );
}
