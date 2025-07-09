import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const stats = [
    { number: "2025", label: "Graduate", icon: "🎓" },
    { number: "10+", label: "Projects", icon: "💼" },
    { number: "3", label: "Internships", icon: "🚀" },
    { number: "100%", label: "Dedication", icon: "❤️" }
  ];

  return (
    <section 
      id="about" 
      className="section"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='m50 0 50 50-50 50L0 50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: 'none'
        }}
      />

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
              About Me
            </motion.h2>
            <motion.div
              style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto',
                borderRadius: '2px'
              }}
              initial={{ width: 0 }}
              animate={inView ? { width: '80px' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            {/* Left Column - Content */}
            <motion.div variants={itemVariants} className="about-content">
              <motion.div
                className="glass"
                style={{
                  padding: '2.5rem',
                  borderRadius: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Border */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '2rem 2rem 0 0'
                  }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />

                <motion.h3
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#2d3748',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  variants={itemVariants}
                >
                  <span style={{ fontSize: '2rem' }}>👋</span>
                  Hello, I'm Rana Çetinkaya
                </motion.h3>

                <motion.p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#4a5568',
                    marginBottom: '1.5rem'
                  }}
                  variants={itemVariants}
                >
                  A passionate <strong>Computer Engineering graduate</strong> specializing in modern web technologies 
                  and artificial intelligence. I love creating innovative solutions that bridge technology and user experience.
                </motion.p>

                <motion.p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#4a5568',
                    marginBottom: '1.5rem'
                  }}
                  variants={itemVariants}
                >
                  My journey in software development focuses on <strong>React.js</strong>, <strong>Python</strong>, and 
                  <strong> Machine Learning</strong>. I'm committed to writing clean, efficient code and building 
                  scalable applications that make a real impact.
                </motion.p>

                <motion.p
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#4a5568',
                    marginBottom: '2rem'
                  }}
                  variants={itemVariants}
                >
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or learning about the latest trends in web development and AI.
                </motion.p>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    fontWeight: '600',
                    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 12px 35px rgba(102, 126, 234, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  <span>Let's Work Together</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div variants={itemVariants} className="about-stats">
              <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="stat-card glass"
                    style={{
                      padding: '2rem',
                      textAlign: 'center',
                      borderRadius: '1.5rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -10,
                      scale: 1.05
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Animated Background */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)`,
                        opacity: 0
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div
                      style={{
                        fontSize: '2.5rem',
                        marginBottom: '1rem'
                      }}
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {stat.icon}
                    </motion.div>

                    <motion.h4
                      style={{
                        fontSize: '2rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '0.5rem'
                      }}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ 
                        type: "spring",
                        damping: 15,
                        stiffness: 200,
                        delay: 0.8 + index * 0.1
                      }}
                    >
                      {stat.number}
                    </motion.h4>

                    <p style={{
                      color: '#4a5568',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Personal Quote */}
              <motion.div
                className="glass"
                style={{
                  padding: '2rem',
                  marginTop: '2rem',
                  borderRadius: '1.5rem',
                  textAlign: 'center',
                  position: 'relative'
                }}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    opacity: 0.3
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💭
                </motion.div>
                <motion.p
                  style={{
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: '#4a5568',
                    lineHeight: '1.6'
                  }}
                  variants={itemVariants}
                >
                  "The biggest risk is not taking any risk... In a world that's 
                  changing quickly, the only strategy that is guaranteed to fail is not taking risks."
                </motion.p>
                <motion.div
                  style={{
                    marginTop: '1rem',
                    fontSize: '0.9rem',
                    color: '#718096',
                    fontWeight: '600'
                  }}
                  variants={itemVariants}
                >
                  - Mark Zuckerberg
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 