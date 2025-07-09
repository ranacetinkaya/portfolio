import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const experiences = [
    {
      id: 1,
      title: "Computer Engineering Student",
      company: "TED University",
      location: "Ankara, Turkey",
      period: "2021 - 2025",
      type: "Education",
      description: "Bachelor's Degree in Computer Engineering. Focused on software development, artificial intelligence, and modern web technologies.",
      highlights: [
        "Computer Engineering Program",
        "Software Development Focus",
        "AI & Machine Learning Studies",
        "Web Technologies",
        "Data Structures & Algorithms"
      ],
      icon: "🎓",
      color: "#667eea"
    },
    {
      id: 2,
      title: "Senior Project Student",
      company: "FNSS",
      location: "Ankara, Turkey",
      period: "06.11.2024 - Present",
      type: "Project",
      description: "Developing Turkish language processing system with integrated text-to-speech (TTS) and speech-to-text (STT) functionalities, optimized for Turkish and designed to connect seamlessly to FNSS services.",
      highlights: [
        "Turkish NLP Development",
        "Text-to-Speech Integration",
        "Speech-to-Text Implementation",
        "FNSS System Integration",
        "Language Processing Optimization"
      ],
      icon: "🤖",
      color: "#764ba2"
    },
    {
      id: 3,
      title: "Summer Intern",
      company: "Altınay Defence",
      location: "Ankara, Turkey",
      period: "12.08.2024 - 30.09.2024",
      type: "Internship",
      description: "Participated in a project where I built a website using ReactJS, deployed the application on an AWS cloud server running Ubuntu and using Nginx for deployment. Gained hands-on experience with Docker while managing and optimizing container image.",
      highlights: [
        "React.js Web Development",
        "AWS Cloud Deployment",
        "Ubuntu Server Management",
        "Nginx Configuration",
        "Docker Containerization"
      ],
      icon: "☁️",
      color: "#764ba2"
    },
    {
      id: 4,
      title: "Summer Intern",
      company: "Erpa Payment Systems",
      location: "Ankara, Turkey",
      period: "03.07.2023 - 12.08.2023",
      type: "Internship",
      description: "Participated in a project where I developed login and registration panels using HTML, CSS, and JavaScript, integrating them with PHP for backend processing. Connected these panels to a MySQL database for secure data storage and retrieval. Utilized DataTables to display data in the user interface and implemented full CRUD functionality for efficient data management.",
      highlights: [
        "Full-Stack Web Development",
        "PHP Backend Development",
        "MySQL Database Design",
        "DataTables Implementation",
        "CRUD Operations"
      ],
      icon: "💳",
      color: "#667eea"
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 80 },
    { name: "Problem Solving", level: 95 },
    { name: "Team Collaboration", level: 88 },
    { name: "Project Management", level: 75 },
    { name: "Communication", level: 85 }
  ];

  return (
    <section 
      id="experience" 
      className="section"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)'
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(240, 147, 251, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)'
          }}
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
              Experience & Journey
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
              My professional journey as a Computer Engineer, showcasing education, 
              internships, freelance work, and contributions to the tech community.
            </motion.p>
          </motion.div>

          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
            {/* Timeline Section */}
            <motion.div variants={itemVariants}>
              <motion.h3
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: '#2d3748'
                }}
                variants={itemVariants}
              >
                Professional Timeline
              </motion.h3>

              <div style={{ position: 'relative' }}>
                {/* Timeline Line */}
                <motion.div
                  style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '2rem',
                    bottom: '2rem',
                    width: '3px',
                    background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '2px',
                    transformOrigin: 'top'
                  }}
                  variants={timelineVariants}
                />

                {/* Experience Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      style={{
                        position: 'relative',
                        paddingLeft: '5rem'
                      }}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Timeline Dot */}
                      <motion.div
                        style={{
                          position: 'absolute',
                          left: '1rem',
                          top: '1rem',
                          width: '2rem',
                          height: '2rem',
                          background: exp.color,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1rem',
                          boxShadow: `0 4px 15px ${exp.color}40`,
                          zIndex: 1
                        }}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        {exp.icon}
                      </motion.div>

                      {/* Experience Card */}
                      <motion.div
                        className="glass"
                        style={{
                          padding: '2rem',
                          borderRadius: '1.5rem',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                        whileHover={{ 
                          y: -5,
                          boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15)'
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Type Badge */}
                        <motion.div
                          style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            padding: '0.5rem 1rem',
                            background: `${exp.color}20`,
                            color: exp.color,
                            borderRadius: '50px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            border: `1px solid ${exp.color}40`
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + index * 0.2 }}
                        >
                          {exp.type}
                        </motion.div>

                        <motion.h4
                          style={{
                            fontSize: '1.4rem',
                            fontWeight: '700',
                            color: '#2d3748',
                            marginBottom: '0.5rem'
                          }}
                          variants={itemVariants}
                        >
                          {exp.title}
                        </motion.h4>

                        <motion.div
                          style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: exp.color,
                            marginBottom: '0.5rem'
                          }}
                          variants={itemVariants}
                        >
                          {exp.company}
                        </motion.div>

                        <motion.div
                          style={{
                            fontSize: '0.9rem',
                            color: '#718096',
                            marginBottom: '1rem',
                            display: 'flex',
                            gap: '1rem'
                          }}
                          variants={itemVariants}
                        >
                          <span>📍 {exp.location}</span>
                          <span>📅 {exp.period}</span>
                        </motion.div>

                        <motion.p
                          style={{
                            color: '#4a5568',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem'
                          }}
                          variants={itemVariants}
                        >
                          {exp.description}
                        </motion.p>

                        {/* Highlights */}
                        <motion.div variants={itemVariants}>
                          <h5 style={{
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            color: '#2d3748',
                            marginBottom: '0.75rem'
                          }}>
                            Key Highlights:
                          </h5>
                          <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                          }}>
                            {exp.highlights.map((highlight, hIndex) => (
                              <motion.li
                                key={hIndex}
                                style={{
                                  fontSize: '0.85rem',
                                  color: '#4a5568',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.5rem'
                                }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: 1.2 + index * 0.2 + hIndex * 0.1 }}
                              >
                                <span style={{ color: exp.color }}>▸</span>
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills Progress Section */}
            <motion.div variants={itemVariants}>
              <motion.h3
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: '#2d3748'
                }}
                variants={itemVariants}
              >
                Professional Skills
              </motion.h3>

              <motion.div
                className="glass"
                style={{
                  padding: '2.5rem',
                  borderRadius: '2rem',
                  marginBottom: '2rem'
                }}
                variants={itemVariants}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.75rem'
                      }}>
                        <span style={{
                          fontWeight: '600',
                          color: '#2d3748',
                          fontSize: '1rem'
                        }}>
                          {skill.name}
                        </span>
                        <span style={{
                          fontWeight: '700',
                          color: '#667eea',
                          fontSize: '0.9rem'
                        }}>
                          {skill.level}%
                        </span>
                      </div>

                      <div style={{
                        width: '100%',
                        height: '10px',
                        background: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: '5px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}>
                        <motion.div
                          style={{
                            height: '100%',
                            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '5px',
                            transformOrigin: 'left'
                          }}
                          initial={{ scaleX: 0 }}
                          animate={inView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 1.2 + index * 0.1,
                            ease: "easeOut"
                          }}
                        />

                        {/* Shimmer Effect */}
                        <motion.div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
                          }}
                          animate={{
                            left: inView ? '100%' : '-100%'
                          }}
                          transition={{
                            duration: 2,
                            delay: 1.8 + index * 0.1,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>

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
                    color: '#1a202c'
                }}
                variants={itemVariants}
              >
                Ready for New Opportunities
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
                I'm always open to discussing new opportunities, collaborations, 
                and exciting projects. Let's connect and build something amazing together!
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
                <span>Let's Connect</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🤝
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 