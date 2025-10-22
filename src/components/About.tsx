import { GraduationCap, Award, Trophy } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'SRMAP University',
      period: '2022 – 2026',
      grade: 'CGPA: 8.87/10',
      icon: GraduationCap,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      degree: 'Intermediate',
      institution: 'Chaitanya Junior College',
      period: '2020 – 2022',
      grade: '96.8%',
      icon: Award,
      color: 'from-orange-500 to-amber-500'
    },
    {
      degree: 'School Education',
      institution: 'Sri Chaitanya High School',
      period: '2019 – 2020',
      grade: '100%',
      icon: Trophy,
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Full Stack Developer & Problem Solver
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I am a passionate Full Stack Developer with expertise in both frontend and backend technologies.
                My journey in software development is driven by a deep commitment to solving real-world problems
                through efficient, scalable, and user-centric web solutions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a strong foundation in the MERN and PERN stacks, I specialize in building robust applications
                that combine elegant user interfaces with powerful backend architectures. My approach emphasizes
                clean code, optimal performance, and seamless user experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I am dedicated to continuous learning and staying at the forefront of web development technologies,
                always seeking new challenges that allow me to create impactful applications that make a difference.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow hover:border-blue-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">Frontend</div>
                <p className="text-gray-600">React.js, HTML, CSS</p>
              </div>
              <div className="bg-white border-2 border-orange-100 p-6 rounded-xl hover:shadow-lg transition-shadow hover:border-orange-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent mb-2">Backend</div>
                <p className="text-gray-600">Node.js, MongoDB, SQL</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education Timeline</h3>
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>

                  <div className="relative flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-r ${edu.color} rounded-xl text-white`}>
                      <Icon size={24} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                        <span className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-semibold`}>
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium mb-1">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.period}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
