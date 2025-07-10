import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const projectVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.3
      }
    }
  };

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'ai', name: 'AI & ML', icon: '🤖' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' }
  ];

  const projects = [
    {
      id: 1,
      title: "✨AI-Powered Curriculum Content Generator 📚🤖",
      description: "An AI assistant for professors and teachers that searches the web using SerpAPI 🔍 and uses LLM agents + RAG tech to create curriculum-aligned educational content. Optionally, upload a syllabus PDF 📄 to tailor the results and get storytelling-style notes as a downloadable PDF 📥.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "ai",
      technologies: ["Python", "SerpAPI", "LLM Agents", "RAG Pipeline", "FPDF", "Gradio", "Google Generative AI"],
      liveUrl: "https://huggingface.co/spaces/ranacetinkaya/content_recommender",
      githubUrl: "https://huggingface.co/spaces/ranacetinkaya/content_recommender/tree/main",
      features: ["Web Search Integration", "LLM Agents", "RAG Technology", "PDF Generation", "Curriculum Alignment"],
      status: "Completed"
    },
    {
      id: 2,
      title: "React CRUD Using JSONPlaceholder",
      description: "A comprehensive React application demonstrating full CRUD operations using JSONPlaceholder API. Features modern UI components, state management, and responsive design with real-time data manipulation capabilities.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["React.js", "JSONPlaceholder API", "Axios", "CSS3", "JavaScript ES6"],
      liveUrl: "https://reactapp-kappa-two.vercel.app/",
      githubUrl: "https://github.com/ranacetinkaya/reactapp",
      features: ["CRUD Operations", "API Integration", "Responsive Design", "State Management"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Turkish Language Processing System (FNSS)",
      description: "This project creates an offline Turkish Speech-to-Text and Text-to-Speech system, fine-tuned for Turkish dialects and noise conditions. It delivers high accuracy and natural voice output, optimized for integration with FNSS services. Note: This is a downloadable desktop application(GUI), no live demo available.",
      image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=500&h=300&fit=crop",
      category: "ai",
      technologies: ["Python","ElevenLabs", "PyQt6 (GUI development)" ,"OpenAI Whisper", "TTS/STT", "Machine Learning", "Fine-tuned Models"],
      liveUrl: "https://acusense-ejly.vercel.app/",
      githubUrl: "https://github.com/tcgumus/tddsis",
      features: ["Desktop Application", "Turkish NLP", "Text-to-Speech", "Speech-to-Text", "FNSS Integration", "Fine-tuned Models"],
      status: "In Progress"
    },
    {
      id: 4,
      title: "Employee DataTable Database System",
      description: "A comprehensive employee management system with advanced DataTable functionality. Features include employee data management, search and filter capabilities, and database integration for efficient HR operations.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["PHP", "MySQL", "DataTables", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://rana-companydb.ct.ws/",
      githubUrl: "https://github.com/ranacetinkaya/Company_Database",
      features: ["Employee Management", "Advanced Search", "Database Integration", "Data Export", "Responsive Tables"],
      status: "Completed"
    },
    {
      id: 5,
      title: "ILTSY - AI-Powered English Learning Platform",
      description: "An innovative AI-powered English learning platform currently under development. Features personalized learning paths, interactive exercises, and intelligent progress tracking to enhance English language acquisition through artificial intelligence.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      category: "ai",
      technologies: ["React.js", "Python", "AI/ML", "Natural Language Processing", "Progressive Web App"],
      liveUrl: "#",
      githubUrl: "#",
      features: ["AI-Powered Learning", "Personalized Paths", "Interactive Exercises", "Progress Tracking", "Adaptive Learning"],
      status: "In Progress"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section 
      id="projects" 
      className="section"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center" style={{ marginBottom: '4rem' }}>
            <motion.h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1rem',
                letterSpacing: '-0.02em'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto 2rem auto',
                borderRadius: '2px'
              }}
              initial={{ width: 0 }}
              animate={inView ? { width: '80px' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.p
              style={{
                fontSize: '1.2rem',
                color: '#4a5568',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
              variants={itemVariants}
            >
              A showcase of my recent work, featuring web applications, AI projects, 
              and innovative solutions that demonstrate my technical expertise.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            variants={itemVariants} 
            className="text-center" 
            style={{ marginBottom: '3rem' }}
          >
            <div 
              className="glass"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: 'clamp(0.5rem, 2vw, 1rem)',
                padding: 'clamp(0.5rem, 2vw, 1rem)',
                borderRadius: '2rem',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                    borderRadius: '1.5rem',
                    border: 'none',
                    background: selectedCategory === category.id 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'transparent',
                    color: selectedCategory === category.id ? 'white' : '#4a5568',
                    fontWeight: '600',
                    fontSize: 'clamp(0.8rem, 2.5vw, 0.95rem)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'clamp(0.25rem, 1vw, 0.5rem)',
                    transition: 'all 0.3s ease',
                    backdropFilter: selectedCategory !== category.id ? 'blur(10px)' : 'none',
                    minHeight: '44px',
                    textAlign: 'center'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.1 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants}>
            <motion.div
              key={selectedCategory}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                gap: 'clamp(1rem, 3vw, 2rem)',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, staggerChildren: 0.1 }}
            >
                {projects
                  .filter(project => selectedCategory === 'all' || project.category === selectedCategory)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="glass"
                      style={{
                        borderRadius: '1.5rem',
                        overflow: 'hidden',
                        position: 'relative',
                        cursor: 'pointer'
                      }}
                      variants={projectVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        y: -15, 
                        scale: 1.02,
                        boxShadow: '0 25px 50px rgba(102, 126, 234, 0.2)'
                      }}
                      onHoverStart={() => setHoveredProject(project.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                      onTouchStart={() => setHoveredProject(project.id)}
                      onClick={() => {
                        // Toggle hover state for mobile
                        if (hoveredProject === project.id) {
                          setHoveredProject(null);
                        } else {
                          setHoveredProject(project.id);
                        }
                      }}
                    >
                      {/* Project Image */}
                      <div style={{ 
                        position: 'relative', 
                        overflow: 'hidden', 
                        height: 'clamp(180px, 25vw, 220px)',
                        width: '100%'
                      }}>
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Status Badge */}
                        <motion.div
                          style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            padding: '0.5rem 1rem',
                            background: project.status === 'Completed' 
                              ? 'rgba(34, 197, 94, 0.9)' 
                              : 'rgba(249, 115, 22, 0.9)',
                            color: 'white',
                            borderRadius: '50px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            backdropFilter: 'blur(10px)'
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {project.status}
                        </motion.div>

                        {/* Hover Overlay */}
                        <AnimatePresence>
                          {hoveredProject === project.id && (
                            <motion.div
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem'
                              }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.a
                                href={project.liveUrl}
                                style={{
                                  padding: '0.75rem 1.5rem',
                                  background: 'rgba(255, 255, 255, 0.2)',
                                  color: 'white',
                                  textDecoration: 'none',
                                  borderRadius: '50px',
                                  fontWeight: '600',
                                  backdropFilter: 'blur(10px)',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {project.title.includes("Turkish Language Processing") ? "🌐 Website" : "👁️ Live Demo"}
                              </motion.a>
                              <motion.a
                                href={project.githubUrl}
                                style={{
                                  padding: '0.75rem 1.5rem',
                                  background: 'rgba(255, 255, 255, 0.2)',
                                  color: 'white',
                                  textDecoration: 'none',
                                  borderRadius: '50px',
                                  fontWeight: '600',
                                  backdropFilter: 'blur(10px)',
                                  border: '1px solid rgba(255, 255, 255, 0.3)'
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                💻 Code
                              </motion.a>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Project Content */}
                      <div style={{ 
                        padding: 'clamp(1rem, 4vw, 2rem)',
                        minHeight: 'clamp(200px, 30vw, 300px)',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <h3
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            color: '#2d3748',
                            marginBottom: '1rem'
                          }}
                        >
                          {project.title}
                        </h3>

                        <p
                          style={{
                            color: '#4a5568',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem',
                            fontSize: '0.95rem'
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div style={{ marginBottom: '1.5rem' }}>
                          <h4 style={{ 
                            fontSize: '0.9rem', 
                            fontWeight: '600', 
                            color: '#2d3748',
                            marginBottom: '0.5rem' 
                          }}>
                            Technologies:
                          </h4>
                          <div style={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            gap: '0.5rem' 
                          }}>
                            {project.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                style={{
                                  padding: '0.25rem 0.75rem',
                                  background: 'rgba(102, 126, 234, 0.1)',
                                  color: '#667eea',
                                  borderRadius: '1rem',
                                  fontSize: '0.8rem',
                                  fontWeight: '600',
                                  border: '1px solid rgba(102, 126, 234, 0.2)'
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 style={{ 
                            fontSize: '0.9rem', 
                            fontWeight: '600', 
                            color: '#2d3748',
                            marginBottom: '0.5rem' 
                          }}>
                            Key Features:
                          </h4>
                          <ul style={{ 
                            listStyle: 'none', 
                            padding: 0, 
                            margin: 0,
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                            gap: '0.25rem'
                          }}>
                            {project.features.map((feature, featureIndex) => (
                              <motion.li
                                key={feature}
                                style={{
                                  fontSize: '0.85rem',
                                  color: '#4a5568',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.25rem'
                                }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 + index * 0.1 + featureIndex * 0.05 }}
                              >
                                <span style={{ color: '#667eea' }}>✓</span>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Gradient Border Animation */}
                      <motion.div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                          opacity: 0
                        }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                                  ))}
              </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
            style={{ marginTop: '4rem' }}
          >
            <motion.div
              className="glass"
              style={{
                padding: '3rem 2rem',
                borderRadius: '2rem',
                maxWidth: '600px',
                margin: '0 auto'
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h4
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: '#2d3748'
                }}
                variants={itemVariants}
              >
                Have a Project in Mind?
              </motion.h4>
              <motion.p
                style={{
                  fontSize: '1.1rem',
                  color: '#4a5568',
                  marginBottom: '2rem',
                  lineHeight: '1.6'
                }}
                variants={itemVariants}
              >
                I'm always excited to work on new and challenging projects. 
                Let's bring your ideas to life with cutting-edge technology.
              </motion.p>
              <motion.a
                href="#contact"
                className="btn btn-primary"
                style={{
                  padding: '1rem 2.5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 12px 35px rgba(102, 126, 234, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span>Start a Project</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  💼
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 