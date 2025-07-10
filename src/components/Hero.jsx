import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FaReact, FaPython, FaJs } from 'react-icons/fa';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
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
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ranacetinkaya', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/rana-çetinkaya', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: '#contact', label: 'Email' },
  ];

  const techIcons = [
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaPython, name: 'Python', color: '#3776AB' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
  ];

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        paddingTop: '5rem',
      }}
    >
      {/* Animated Background Particles */}
      <div className="particles-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="particle"
            animate={{
              x: [particle.x, particle.x + particle.speedX * 100, particle.x],
              y: [particle.y, particle.y + particle.speedY * 100, particle.y],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              width: particle.size,
              height: particle.size,
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              left: particle.x,
              top: particle.y,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="gradient-orbs" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <motion.div
          className="orb"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(244, 63, 94, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          className="orb"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 100 }}>
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {/* Name */}
          <motion.div variants={itemVariants}>
            <motion.h1
              className="hero-name"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '900',
                marginBottom: '1rem',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Rana Çetinkaya
            </motion.h1>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="hero-title"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '800',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
                letterSpacing: '-0.02em',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Computer Engineer
            </motion.h2>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="hero-subtitle"
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontWeight: '600',
                marginBottom: '2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                letterSpacing: '-0.01em',
              }}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
            >
              Full-Stack Developer & AI Enthusiast
            </motion.h3>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <motion.p
              className="hero-description"
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.8',
                marginBottom: '3rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '600px',
                margin: '0 auto 3rem auto',
              }}
              whileHover={{ scale: 1.02 }}
            >
              Fresh graduate passionate about LLM, artificial intelligence, and developing cutting-edge web applications. 
              Specialized in machine learning, deep learning, and creating innovative AI-powered solutions.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="hero-buttons"
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            <motion.button
              onClick={() => {
                // Safari-compatible scroll method
                const element = document.getElementById('projects');
                if (element) {
                  const rect = element.getBoundingClientRect();
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                  const targetPosition = rect.top + scrollTop - 100; // 100px offset for header
                  
                  // Safari detection and compatibility
                  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                  
                  if (isSafari) {
                    // Safari - use direct scrolling without smooth behavior
                    window.scrollTo(0, targetPosition);
                  } else {
                    // Modern browsers with smooth scroll
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    });
                  }
                }
              }}
              className="btn btn-primary"
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                color: 'white',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>View My Work</span>
              <motion.div
                className="btn-bg"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                  zIndex: 1,
                }}
                animate={{
                  left: ['−100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.button>

            <motion.button
              onClick={() => {
                // Safari-compatible scroll method
                const element = document.getElementById('contact');
                if (element) {
                  const rect = element.getBoundingClientRect();
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                  const targetPosition = rect.top + scrollTop - 100; // 100px offset for header
                  
                  // Safari detection and compatibility
                  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                  
                  if (isSafari) {
                    // Safari - use direct scrolling without smooth behavior
                    window.scrollTo(0, targetPosition);
                  } else {
                    // Modern browsers with smooth scroll
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    });
                  }
                }
              }}
              className="btn btn-secondary"
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '50px',
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              whileHover={{ 
                scale: 1.05,
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.8)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            variants={itemVariants}
            className="tech-stack"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {['Python', 'Java', 'JavaScript', 'C', 'React', 'AWS', 'Deep Learning', 'AI/ML', 'HTML/CSS'].map((tech, index) => (
              <motion.div
                key={tech}
                className="tech-item"
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '25px',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                }}
                whileHover={{ 
                  scale: 1.1,
                  background: 'rgba(255, 255, 255, 0.2)',
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="social-links"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '2rem',
              zIndex: 10,
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="social-link"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                }}
                whileHover={{ 
                  scale: 1.2,
                  background: 'rgba(255, 255, 255, 0.2)',
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1 + index * 0.1,
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'rgba(255, 255, 255, 0.7)',
          zIndex: 200,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Scroll Down</span>
        <motion.div
          style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '12px',
            position: 'relative',
          }}
        >
          <motion.div
            style={{
              width: '4px',
              height: '8px',
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '2px',
              position: 'absolute',
              top: '6px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 