import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const contributions = [
    'Conducted in-depth research on graph-based algorithms to identify influential nodes in complex social network structures',
    'Implemented and optimized algorithms using Python and NetworkX library for large-scale network analysis',
    'Developed comprehensive data visualizations to illustrate network patterns and node influence metrics',
    'Applied advanced data structures to efficiently process and analyze network topology',
    'Contributed to research findings that enhanced understanding of information flow in social networks'
  ];

  const technologies = [
    'Python',
    'NetworkX',
    'Graph Algorithms',
    'Data Structures',
    'Data Visualization'
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-orange-500 transform md:-translate-x-1/2"></div>

            <div className="relative">
              <div className="md:flex md:items-center mb-8">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl text-white">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Research Intern</h3>
                        <p className="text-blue-600 font-semibold">Computer Science Department</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={18} className="text-blue-600" />
                        <span className="font-medium">SRM University</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={18} className="text-blue-600" />
                        <span>June 2024 – July 2024</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Research Project</h4>
                      <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-xl">
                        Identifying influential nodes in social networks using graph-based algorithms
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex md:w-0 items-center justify-center relative z-10">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-cyan-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Key Contributions & Impact</h4>
                    <ul className="space-y-4">
                      {contributions.map((contribution, index) => (
                        <li key={index} className="flex items-start gap-3 group">
                          <CheckCircle2
                            size={20}
                            className="text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                          />
                          <span className="text-gray-700 leading-relaxed">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-600 via-cyan-600 to-orange-500 rounded-2xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-3">Research Impact</h4>
            <p className="text-lg text-blue-50 leading-relaxed">
              This research experience strengthened my analytical thinking and problem-solving abilities,
              providing valuable insights into algorithmic optimization and data-driven decision making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
