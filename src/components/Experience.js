import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCertificate } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Full Stack Developer Intern',
      company: 'TechCorp Solutions',
      period: 'Haziran 2023 - Ağustos 2023',
      description: 'React.js ve Node.js kullanarak web uygulamaları geliştirdim. Veritabanı tasarımı ve API entegrasyonu konularında deneyim kazandım.',
      achievements: [
        '3 farklı web uygulaması geliştirdim',
        'Takım ile Agile metodolojisi kullandım',
        'Code review süreçlerine katıldım'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Git']
    },
    {
      id: 2,
      type: 'education',
      title: 'Bilgisayar Mühendisliği',
      company: 'Üniversite Adı',
      period: 'Eylül 2020 - Haziran 2024',
      description: 'Yazılım geliştirme, veri yapıları, algoritma analizi ve yapay zeka konularında kapsamlı eğitim aldım.',
      achievements: [
        'GPA: 3.8/4.0',
        'Yazılım geliştirme kulübü başkanı',
        '5 farklı proje tamamladım'
      ],
      technologies: ['Python', 'Java', 'C++', 'SQL']
    },
    {
      id: 3,
      type: 'certification',
      title: 'AWS Certified Developer',
      company: 'Amazon Web Services',
      period: 'Mart 2024',
      description: 'AWS cloud platformunda uygulama geliştirme ve deployment konularında sertifika aldım.',
      achievements: [
        'Cloud computing temelleri',
        'Serverless uygulamalar',
        'AWS best practices'
      ],
      technologies: ['AWS', 'Lambda', 'S3', 'DynamoDB']
    },
    {
      id: 4,
      type: 'project',
      title: 'Freelance Web Developer',
      company: 'Bağımsız Çalışma',
      period: 'Ocak 2023 - Günümüz',
      description: 'Çeşitli müşteriler için web siteleri ve e-ticaret uygulamaları geliştiriyorum.',
      achievements: [
        '10+ proje tamamladım',
        'Müşteri memnuniyeti %95+',
        'Responsive tasarım uzmanlığı'
      ],
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Stripe']
    }
  ];

  const awards = [
    {
      title: 'En İyi Bitirme Projesi',
      organization: 'Üniversite',
      year: '2024',
      description: 'Yapay zeka destekli e-ticaret platformu projesi ile ödül aldım.'
    },
    {
      title: 'Hackathon Birinciliği',
      organization: 'TechFest 2023',
      year: '2023',
      description: '48 saatlik hackathon\'da en yenilikçi çözüm ödülü kazandım.'
    },
    {
      title: 'Öğrenci Başarı Ödülü',
      organization: 'Bilgisayar Mühendisliği Bölümü',
      year: '2023',
      description: 'Akademik başarı ve proje katkıları için ödül aldım.'
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return FaBriefcase;
      case 'education':
        return FaGraduationCap;
      case 'certification':
        return FaCertificate;
      case 'project':
        return FaTrophy;
      default:
        return FaBriefcase;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'work':
        return 'blue';
      case 'education':
        return 'green';
      case 'certification':
        return 'purple';
      case 'project':
        return 'orange';
      default:
        return 'blue';
    }
  };

  return (
    <section id="experience" className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Deneyim & Başarılar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Eğitim hayatım boyunca edindiğim deneyimler ve kazandığım başarılar. 
            Her aşama, kariyer yolculuğumda önemli bir adım oldu.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = getIcon(experience.type);
              const color = getColor(experience.type);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-${color}-500 rounded-full flex items-center justify-center shadow-lg z-10`}>
                    <IconComponent className="text-white" size={16} />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${!isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 bg-${color}-100 text-${color}-700 text-xs font-medium rounded-full`}>
                          {experience.type === 'work' && 'İş Deneyimi'}
                          {experience.type === 'education' && 'Eğitim'}
                          {experience.type === 'certification' && 'Sertifika'}
                          {experience.type === 'project' && 'Proje'}
                        </span>
                        <span className="text-sm text-gray-500">{experience.period}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-2 text-gray-800">{experience.title}</h3>
                      <p className="text-blue-600 font-medium mb-3">{experience.company}</p>
                      <p className="text-gray-600 mb-4">{experience.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Başarılar:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-gray-600 flex items-center">
                              <div className={`w-1 h-1 bg-${color}-500 rounded-full mr-2`}></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Ödüller & Başarılar
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTrophy className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-800">{award.title}</h4>
                <p className="text-blue-600 font-medium mb-2">{award.organization}</p>
                <p className="text-sm text-gray-500 mb-3">{award.year}</p>
                <p className="text-sm text-gray-600">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            Kariyer Hedeflerim
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Kısa Vadeli (1-2 yıl)</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Full-stack developer pozisyonunda çalışmak
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Cloud computing teknolojilerinde uzmanlaşmak
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Açık kaynak projelere katkıda bulunmak
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Uzun Vadeli (3-5 yıl)</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Tech lead pozisyonuna yükselmek
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Kendi startup projemi geliştirmek
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Yapay zeka alanında uzmanlaşmak
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 