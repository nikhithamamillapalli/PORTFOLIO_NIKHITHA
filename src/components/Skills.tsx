import { Code2, Database, Globe, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'from-blue-600 to-cyan-600',
      skills: [
        { name: 'C', level: 85 },
        { name: 'C++', level: 90 },
        { name: 'Java', level: 80 }
       
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'HTML & CSS', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'JavaScript', level: 88 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-rose-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQL', level: 82 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'DBMS', level: 85 }
      ]
    },
    {
      title: 'Core Computer Science',
      icon: Cpu,
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'Data Structures', level: 90 },
        { name: 'Algorithms', level: 88 },
        { name: 'OOP', level: 90 },
        { name: 'System Design', level: 82 }
      ]
    }
  ];

  const softSkills = [
    'Problem Solving',
    'Critical Thinking',
    'Team Collaboration',
    'Adaptability',
    'Communication',
    'Time Management'
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building robust, scalable, and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl text-white group-hover:scale-110 transition-transform`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-700 group-hover/skill:text-gray-900 transition-colors">
                          {skill.name}
                        </span>
                        <span className={`font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animation: `slideIn 1s ease-out ${skillIndex * 0.1}s both`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-orange-50 to-rose-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Professional <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Competencies</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:rotate-12 transition-transform">
                  {index + 1}
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
