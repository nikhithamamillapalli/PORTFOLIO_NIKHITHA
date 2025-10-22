import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Full Stack Developer | UI Designer';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 rounded-full animate-spin-slow opacity-40"></div>
              <img
                src="https://i.postimg.cc/nr6mGXXr/Pi7-Passport-Photo.jpg"
                alt="Nikhitha Mamillapalli"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Nikhitha Mamillapalli
            </h1>

            <div className="min-h-[3rem] flex items-center justify-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto pt-4">
              Passionate about solving real-world problems through efficient and scalable web solutions
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View Portfolio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <a
              href="https://github.com/nikhithamamillapalli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-indigo-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhitha-mamillapalli-a30aba258/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nikhithamamillapalli99@gmail.com"
              className="p-3 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-indigo-600"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
