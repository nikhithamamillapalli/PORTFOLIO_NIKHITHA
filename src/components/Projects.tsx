import { Github, Calendar, Users, Shield, Sparkles, FileText, MessageSquare } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Doctor's Appointment Booking System",
      description: "A comprehensive healthcare management platform built with the MERN stack, featuring role-based access control for patients, doctors, and administrators.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST API'],
      gradient: 'from-blue-500 to-indigo-500',
      features: [
        { icon: Users, text: 'Role-based access for Patients, Doctors, and Admins' },
        { icon: Shield, text: 'Secure JWT-based authentication system' },
        { icon: Calendar, text: 'Real-time appointment scheduling and management' },
        { icon: MessageSquare, text: 'Responsive UI with seamless user experience' }
      ],
      githubLink: 'https://github.com/nikhithamamillapalli/DOCTOR-APPOINTMENT-BOOKING-SYSTEM'
    },
    {
      title: "QuickAI – AI SaaS Platform",
      description: "An innovative AI-powered platform built with the PERN stack, offering subscription-based access to cutting-edge AI features including image generation and resume analysis.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'Stripe', 'AI APIs'],
      gradient: 'from-purple-500 to-pink-500',
      features: [
        { icon: Sparkles, text: 'AI-driven image generation capabilities' },
        { icon: FileText, text: 'Intelligent resume analyzer with insights' },
        { icon: Users, text: 'Community page for sharing AI-generated content' },
        { icon: Shield, text: 'Subscription-based billing with Stripe integration' }
      ],
      githubLink: 'https://github.com/nikhithamamillapalli/QUICKAI'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity z-10`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="md:w-3/5 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="grid gap-2">
                      {project.features.map((feature, featureIndex) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <div className={`p-1.5 bg-gradient-to-r ${project.gradient} rounded-lg text-white flex-shrink-0`}>
                              <FeatureIcon size={14} />
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    <Github size={18} />
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-xl p-6 shadow-lg">
            <p className="text-gray-600 mb-3">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/nikhithamamillapalli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Github size={20} />
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
