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
    threshold: 0.2,
    triggerOnce: true
  });

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
    hidden: { y: 50, opacity: 0 },
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

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", level: "Intermediate", color: "#4A90E2" },
        { name: "HTML", level: "Advanced", color: "#27AE60" },
        { name: "JavaScript", level: "Intermediate", color: "#5DADE2" },
        { name: "Python", level: "Intermediate", color: "#3498DB" }
      ]
    },
    {
      title: "Web Technologies", 
      icon: "🌐",
      skills: [
        { name: "CSS", level: "Intermediate", color: "#4A90E2" },
        { name: "React.js", level: "Intermediate", color: "#5DADE2" },
        { name: "SQL", level: "Intermediate", color: "#3498DB" },
        { name: "PHP", level: "Beginner", color: "#F39C12" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: "Intermediate", color: "#4A90E2" },
        { name: "Docker", level: "Beginner", color: "#E67E22" },
        { name: "AWS", level: "Intermediate", color: "#5DADE2" },
        { name: "MS Excel", level: "Intermediate", color: "#3498DB" }
      ]
    },
    {
      title: "AI & Data Science",
      icon: "🤖",
      skills: [
        { name: "AI & Machine Learning", level: "Intermediate", color: "#4A90E2" },
        { name: "Deep Learning (PyTorch, TensorFlow)", level: "Beginner", color: "#F39C12" },
        { name: "Natural Language Processing", level: "Intermediate", color: "#5DADE2" },
        { name: "Data Analysis", level: "Intermediate", color: "#3498DB" }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", level: "Advanced", levelNum: 95, icon: "🧩" },
    { name: "Team Collaboration", level: "Advanced", levelNum: 90, icon: "🤝" },
    { name: "Communication", level: "Intermediate", levelNum: 88, icon: "💬" },
    { name: "Adaptability", level: "Advanced", levelNum: 92, icon: "🔄" },
    { name: "Leadership", level: "Intermediate", levelNum: 85, icon: "👑" },
    { name: "Time Management", level: "Intermediate", levelNum: 87, icon: "⏰" }
  ];

  return (
    <section 
      id="skills" 
      className="section"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Floating Background Elements */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
        <motion.div
          style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)'
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
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
            top: '60%',
            right: '10%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)'
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 6,
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
              Skills & Expertise
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
              Passionate about cutting-edge technologies and continuous learning. 
              Here are the tools and skills I use to bring ideas to life.
            </motion.p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} style={{ marginBottom: '4rem' }}>
            <div className="grid grid-2" style={{ gap: '2rem' }}>
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  className="glass"
                  style={{
                    padding: '2rem',
                    borderRadius: '1.5rem',
                  }}
                >
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    marginBottom: '1.5rem',
                    color: '#1a202c'
                  }}>
                    {category.title}
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem'
                        }}
                      >
                        <span style={{ 
                          minWidth: '7rem', 
                          fontWeight: '600',
                          color: '#1a202c',
                          fontSize: '0.9rem'
                        }}>
                          {skill.name}
                        </span>
                        <span style={{
                          fontWeight: '700',
                          color: skill.color,
                          fontSize: '0.9rem'
                        }}>
                          {skill.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <motion.h3
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '3rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              variants={itemVariants}
            >
              Soft Skills
            </motion.h3>

            <div className="grid grid-3" style={{ gap: '1.5rem' }}>
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="glass"
                  style={{
                    padding: '2rem',
                    textAlign: 'center',
                    borderRadius: '1.5rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Circular Progress */}
                  <div style={{
                    position: 'relative',
                    width: '100px',
                    height: '100px',
                    margin: '0 auto 1.5rem auto'
                  }}>
                    <svg
                      width="100"
                      height="100"
                      style={{ transform: 'rotate(-90deg)' }}
                    >
                      {/* Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="rgba(0, 0, 0, 0.1)"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      {/* Progress Circle */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="transparent"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={inView ? { pathLength: skill.levelNum / 100 } : { pathLength: 0 }}
                        transition={{ duration: 2, delay: 1.2 + index * 0.1 }}
                        style={{
                          pathLength: skill.levelNum / 100
                        }}
                      />
                      <defs>
                        <linearGradient id="gradient">
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Icon in Center */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '2rem'
                      }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {skill.icon}
                    </motion.div>
                  </div>

                  <motion.h4
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: '#1a202c',
                      marginBottom: '0.5rem'
                    }}
                    variants={itemVariants}
                  >
                    {skill.name}
                  </motion.h4>

                  <motion.div
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '800',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      type: "spring",
                      damping: 15,
                      stiffness: 200,
                      delay: 1.5 + index * 0.1
                    }}
                  >
                    {skill.level}
                  </motion.div>
                </motion.div>
              ))}
            </div>
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
                  color: '#1a202c'
                }}
                variants={itemVariants}
              >
                Ready to Collaborate?
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
                Let's combine these skills to build something amazing together. 
                I'm always excited to take on new challenges and learn new technologies.
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
                <span>Get In Touch</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🚀
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 