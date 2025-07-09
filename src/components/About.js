import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: FaCode, number: '50+', label: 'Proje Tamamlandı' },
    { icon: FaGraduationCap, number: '4.0', label: 'GPA' },
    { icon: FaLightbulb, number: '100+', label: 'Problem Çözüldü' },
    { icon: FaUsers, number: '10+', label: 'Takım Projesi' },
  ];

  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'Database Design', level: 80 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Machine Learning', level: 75 },
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Hakkımda</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tutkulu bir bilgisayar mühendisi olarak, teknolojinin gücüyle dünyayı değiştirmeye odaklanıyorum.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Neden Beni Seçmelisiniz?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaCode className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Modern Teknolojiler</h4>
                  <p className="text-gray-600">
                    React.js, Python, Node.js gibi güncel teknolojilerde uzmanım. 
                    Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaLightbulb className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Yaratıcı Çözümler</h4>
                  <p className="text-gray-600">
                    Karmaşık problemleri basit ve etkili çözümlere dönüştürme konusunda 
                    güçlü analitik becerilere sahibim.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Takım Çalışması</h4>
                  <p className="text-gray-600">
                    Agile metodolojileri kullanarak etkili takım çalışması yapabilir, 
                    projeleri zamanında ve kaliteli şekilde teslim edebilirim.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Yetenek Seviyelerim
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Eğitim & Geçmiş
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Bilgisayar Mühendisliği</h4>
                  <p className="text-blue-600 font-medium mb-1">Üniversite Adı</p>
                  <p className="text-gray-600">2020 - 2024</p>
                  <p className="text-gray-600 mt-2">
                    Yazılım geliştirme, veri yapıları, algoritma analizi ve 
                    yapay zeka konularında kapsamlı eğitim aldım.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaCode className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Staj Deneyimi</h4>
                  <p className="text-green-600 font-medium mb-1">Teknoloji Şirketi</p>
                  <p className="text-gray-600">2023 - 2024</p>
                  <p className="text-gray-600 mt-2">
                    Full-stack web uygulamaları geliştirme, veritabanı tasarımı 
                    ve API entegrasyonu konularında deneyim kazandım.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 