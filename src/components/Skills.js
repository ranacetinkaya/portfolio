import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaPython, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, 
  FaDatabase, FaGitAlt, FaDocker, FaAws, FaFigma, FaGithub 
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Teknolojileri',
      skills: [
        { name: 'React.js', icon: FaReact, color: '#61DAFB', level: 95 },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 90 },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 85 },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 95 },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 85 },
      ]
    },
    {
      title: 'Backend Teknolojileri',
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776AB', level: 90 },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 85 },
        { name: 'Express.js', icon: SiExpress, color: '#000000', level: 80 },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 75 },
        { name: 'SQL', icon: FaDatabase, color: '#336791', level: 80 },
      ]
    },
    {
      title: 'Araçlar & Platformlar',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 90 },
        { name: 'GitHub', icon: FaGithub, color: '#181717', level: 85 },
        { name: 'Docker', icon: FaDocker, color: '#2496ED', level: 70 },
        { name: 'AWS', icon: FaAws, color: '#FF9900', level: 65 },
        { name: 'Figma', icon: FaFigma, color: '#F24E1E', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Yeteneklerim</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern web geliştirme teknolojilerinde kapsamlı deneyime sahibim. 
            Sürekli öğrenmeye ve yeni teknolojileri keşfetmeye odaklanıyorum.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                {category.title}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    className="group relative"
                  >
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${skill.color}20` }}
                        >
                          <skill.icon 
                            size={28} 
                            style={{ color: skill.color }}
                            className="group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                          <div className="text-sm text-gray-500">Seviye: {skill.level}%</div>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <motion.div
                          className="h-2 rounded-full"
                          style={{ 
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                            width: `${skill.level}%`
                          }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 
                          }}
                        />
                      </div>
                      
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Başlangıç</span>
                        <span>Uzman</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Diğer Yetenekler
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'RESTful API Design',
              'Responsive Design',
              'Agile/Scrum',
              'Problem Solving',
              'Data Structures',
              'Algorithms',
              'Machine Learning',
              'UI/UX Design'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-sm font-medium text-gray-700">{skill}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Şu Anda Öğrendiğim Teknolojiler
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Next.js', color: '#000000' },
              { name: 'GraphQL', color: '#E10098' },
              { name: 'Kubernetes', color: '#326CE5' },
              { name: 'TensorFlow', color: '#FF6F00' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                className="px-4 py-2 bg-white border-2 border-dashed border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors duration-300"
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 