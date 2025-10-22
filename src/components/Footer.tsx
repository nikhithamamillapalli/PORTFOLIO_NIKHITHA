import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Mamillapalli Nikhitha
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating efficient and scalable web solutions
              that solve real-world problems.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/nikhithamamillapalli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-500 transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhitha-mamillapalli-a30aba258/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-500 transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nikhithamamillapalli99@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-500 transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              nikhithamamillapalli99@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Mamillapalli Nikhitha. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
