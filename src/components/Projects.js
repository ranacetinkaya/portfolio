import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'web', name: 'Web Uygulamaları' },
    { id: 'mobile', name: 'Mobil Uygulamalar' },
    { id: 'ai', name: 'Yapay Zeka' },
    { id: 'backend', name: 'Backend Sistemler' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Platformu',
      description: 'Modern React.js ve Node.js kullanarak geliştirilmiş tam özellikli e-ticaret platformu. Kullanıcı yönetimi, ödeme sistemi ve admin paneli içerir.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      icons: [FaReact, FaJs, SiMongodb, SiExpress],
      github: '#',
      live: '#',
      features: ['Kullanıcı Kimlik Doğrulama', 'Ödeme Sistemi', 'Admin Panel', 'Responsive Tasarım']
    },
    {
      id: 2,
      title: 'AI Chatbot',
      description: 'Python ve TensorFlow kullanarak geliştirilmiş yapay zeka destekli chatbot. Doğal dil işleme ve makine öğrenmesi algoritmaları kullanır.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      icons: [FaPython, FaJs, FaDatabase],
      github: '#',
      live: '#',
      features: ['Doğal Dil İşleme', 'Makine Öğrenmesi', 'API Entegrasyonu', 'Gerçek Zamanlı Yanıt']
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'React Native ile geliştirilmiş mobil görev yönetimi uygulaması. Offline çalışma, push bildirimleri ve senkronizasyon özellikleri.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
      icons: [FaReact, FaJs, FaDatabase],
      github: '#',
      live: '#',
      features: ['Offline Çalışma', 'Push Bildirimleri', 'Senkronizasyon', 'Kullanıcı Arayüzü']
    },
    {
      id: 4,
      title: 'REST API Service',
      description: 'Node.js ve Express.js kullanarak geliştirilmiş kapsamlı REST API servisi. JWT authentication, rate limiting ve dokümantasyon içerir.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
      category: 'backend',
      technologies: ['Node.js', 'Express.js', 'JWT', 'Swagger'],
      icons: [FaJs, SiExpress, FaDatabase],
      github: '#',
      live: '#',
      features: ['JWT Authentication', 'Rate Limiting', 'API Dokümantasyonu', 'Error Handling']
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern ve responsive portfolio web sitesi. Framer Motion animasyonları, dark mode ve SEO optimizasyonu ile geliştirildi.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      icons: [FaReact, SiTailwindcss, FaJs],
      github: '#',
      live: '#',
      features: ['Responsive Tasarım', 'Animasyonlar', 'Dark Mode', 'SEO Optimizasyonu']
    },
    {
      id: 6,
      title: 'Data Visualization Dashboard',
      description: 'Python ve D3.js kullanarak geliştirilmiş interaktif veri görselleştirme dashboard\'u. Gerçek zamanlı veri analizi ve raporlama.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      category: 'ai',
      technologies: ['Python', 'D3.js', 'Flask', 'Pandas'],
      icons: [FaPython, FaJs, FaDatabase],
      github: '#',
      live: '#',
      features: ['İnteraktif Grafikler', 'Gerçek Zamanlı Veri', 'Filtreleme', 'Export Özellikleri']
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Projelerim</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Geliştirdiğim projelerde modern teknolojileri kullanarak yaratıcı çözümler üretiyorum. 
            Her proje, problem çözme becerilerimi ve teknik yeteneklerimi gösteriyor.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                      <a
                        href={project.github}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      >
                        <FaGithub className="text-white" size={18} />
                      </a>
                      <a
                        href={project.live}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      >
                        <FaExternalLinkAlt className="text-white" size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Özellikler:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Daha Fazla Proje Görmek İster misiniz?</h3>
            <p className="text-blue-100 mb-6">
              GitHub profilimde daha fazla proje ve açık kaynak katkılarımı inceleyebilirsiniz.
            </p>
            <a
              href="https://github.com"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <FaGithub className="mr-2" size={20} />
              GitHub Profilimi Ziyaret Et
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 