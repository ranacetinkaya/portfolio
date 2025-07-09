import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'header-scrolled' : ''}`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.75rem 0' : '1.5rem 0',
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled 
          ? '1px solid rgba(0, 0, 0, 0.1)' 
          : '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <nav className="nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer',
              letterSpacing: '-0.02em',
            }}
            onClick={() => handleMenuClick('#home')}
          >
            Rana Çetinkaya
          </motion.div>

          {/* Desktop Navigation */}
          <div className="nav-desktop" style={{ display: 'none' }}>
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              margin: 0, 
              padding: 0, 
              gap: '2rem',
              alignItems: 'center'
            }}>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item.href);
                    }}
                    style={{
                      position: 'relative',
                      padding: '0.75rem 1.5rem',
                      textDecoration: 'none',
                      color: scrolled ? '#2d3748' : 'rgba(255, 255, 255, 0.9)',
                      fontWeight: '500',
                      borderRadius: '25px',
                      transition: 'all 0.3s ease',
                      background: activeSection === item.href.slice(1) 
                        ? 'rgba(102, 126, 234, 0.2)' 
                        : 'transparent',
                      backdropFilter: activeSection === item.href.slice(1) 
                        ? 'blur(10px)' 
                        : 'none',
                    }}
                    whileHover={{
                      scale: 1.05,
                      background: 'rgba(102, 126, 234, 0.1)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        className="active-indicator"
                        layoutId="activeIndicator"
                        style={{
                          position: 'absolute',
                          bottom: '-2px',
                          left: '50%',
                          width: '20px',
                          height: '2px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: '1px',
                          transform: 'translateX(-50%)',
                        }}
                      />
                    )}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Button for Desktop */}
          <motion.a
            href="#contact"
            className="cta-button"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('#contact');
            }}
            style={{
              display: 'none',
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '0.9rem',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>Get In Touch</span>
            <motion.div
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
                left: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              background: scrolled 
                ? 'rgba(102, 126, 234, 0.1)' 
                : 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              style={{
                width: '20px',
                height: '2px',
                background: scrolled ? '#2d3748' : 'white',
                borderRadius: '1px',
                transformOrigin: 'center',
              }}
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              style={{
                width: '20px',
                height: '2px',
                background: scrolled ? '#2d3748' : 'white',
                borderRadius: '1px',
                margin: '4px 0',
              }}
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              style={{
                width: '20px',
                height: '2px',
                background: scrolled ? '#2d3748' : 'white',
                borderRadius: '1px',
                transformOrigin: 'center',
              }}
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: '0 0 1rem 1rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderTop: 'none',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '1rem' }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      style={{ marginBottom: '0.5rem' }}
                    >
                      <motion.a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMenuClick(item.href);
                        }}
                        style={{
                          display: 'block',
                          padding: '1rem',
                          color: '#2d3748',
                          textDecoration: 'none',
                          fontWeight: '500',
                          borderRadius: '0.5rem',
                          background: activeSection === item.href.slice(1) 
                            ? 'rgba(102, 126, 234, 0.1)' 
                            : 'transparent',
                          transition: 'all 0.3s ease',
                        }}
                        whileHover={{
                          scale: 1.02,
                          background: 'rgba(102, 126, 234, 0.1)',
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.label}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  style={{ padding: '1rem 0', borderTop: '1px solid rgba(0, 0, 0, 0.1)', marginTop: '1rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick('#contact');
                    }}
                    style={{
                      display: 'block',
                      padding: '1rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '0.5rem',
                      fontWeight: '600',
                      textAlign: 'center',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get In Touch
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          .nav-desktop {
            display: flex !important;
          }
          .cta-button {
            display: inline-flex !important;
          }
          .mobile-menu-button {
            display: none !important;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header; 