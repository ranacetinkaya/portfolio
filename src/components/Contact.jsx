import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'rana.cetinkaya@tedu.edu.tr',
      link: 'mailto:rana.cetinkaya@tedu.edu.tr'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+90 553 801 62 56',
      link: 'tel:+905538016256'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Ankara, Turkey',
      link: 'https://maps.google.com/?q=Ankara,Turkey'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ranacetinkaya', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'www.linkedin.com/in/rana-çetinkaya-071077270' },
    { icon: FaInstagram, href: '#', label: 'https://www.instagram.com/rana.ckaya?igsh=N3N6NTQ5d3FqczFn' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration - Geçici olarak hardcoded
    const serviceID = 'service_kriaz3b';
    const templateID = 'template_k693kxm';
    const publicKey = 'Q2M-R5Wy0oOMZXt4K';
    const toEmail = 'rana.cetinkaya@tedu.edu.tr';

    // Debug: Environment variables kontrolü
    console.log('EmailJS Config:', {
      serviceID,
      templateID,
      publicKey,
      toEmail
    });

    // Eğer gerekli değerler yoksa hata ver
    if (!serviceID || !templateID || !publicKey) {
      console.error('Missing EmailJS configuration!');
      setSubmitStatus('error');
      setIsSubmitting(false);
      alert('EmailJS configuration is missing. Please check your .env file.');
      return;
    }

    try {
      // EmailJS ile email gönder
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: toEmail
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', error.text || error.message);
      setSubmitStatus('error');
      
      // Daha detaylı hata mesajı
      if (error.text) {
        alert(`EmailJS Error: ${error.text}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255, 255, 255, 0.9)', 
            maxWidth: '40rem', 
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Feel free to reach out for projects, ask questions, or just say hello. 
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3.75rem', 
          marginBottom: '5rem' 
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass" style={{ 
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Glass card top gradient line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #667eea, #764ba2, #6a5acd)'
              }}></div>

              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  color: '#667eea', 
                  marginBottom: '1rem' 
                }}>
                  <FaEnvelope />
                </div>
                <h3 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700', 
                  color: '#1a202c', 
                  marginBottom: '0.75rem' 
                }}>
                  Send Message
                </h3>
                <p style={{ 
                  color: '#4a5568', 
                  fontSize: '1rem', 
                  lineHeight: '1.6' 
                }}>
                  Use the form below to get in touch with me directly
                </p>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div style={{
                                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                                      background: 'linear-gradient(135deg, #9333ea, #7c3aed)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  ❌ Failed to send message. Please try again or contact me directly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem' 
              }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '1.25rem' 
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label 
                      htmlFor="name" 
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: '600',
                        color: '#1a202c',
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem'
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 1.25rem',
                        border: '2px solid #e2e8f0',
                        borderRadius: '0.75rem',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 255, 255, 0.9)',
                        outline: 'none',
                        color: '#1a202c'
                      }}
                      placeholder="Your full name"
                      onFocus={(e) => {
                        e.target.style.borderColor = '#667eea';
                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                        e.target.style.background = 'white';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                        e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    />
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label 
                      htmlFor="email" 
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: '600',
                        color: '#1a202c',
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem'
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 1.25rem',
                        border: '2px solid #e2e8f0',
                        borderRadius: '0.75rem',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 255, 255, 0.9)',
                        outline: 'none',
                        color: '#1a202c'
                      }}
                      placeholder="example@email.com"
                      onFocus={(e) => {
                        e.target.style.borderColor = '#667eea';
                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                        e.target.style.background = 'white';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                        e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label 
                    htmlFor="subject" 
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: '600',
                      color: '#1a202c',
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem 1.25rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.9)',
                      outline: 'none',
                      color: '#1a202c'
                    }}
                    placeholder="Message subject"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                      e.target.style.background = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.boxShadow = 'none';
                      e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label 
                    htmlFor="message" 
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: '600',
                      color: '#1a202c',
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '1rem 1.25rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '0.75rem',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: 'rgba(255, 255, 255, 0.9)',
                      outline: 'none',
                      resize: 'none',
                      minHeight: '7.5rem',
                      fontFamily: 'inherit',
                      color: '#1a202c'
                    }}
                    placeholder="Write your message here..."
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                      e.target.style.background = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.boxShadow = 'none';
                      e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    marginTop: '0.5rem',
                    opacity: isSubmitting ? '0.7' : '1',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderTop: '2px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }}></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* Contact Information */}
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem', 
                color: '#1a202c' 
              }}>
                Contact Information
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem', 
                      padding: '1rem', 
                      borderRadius: '0.75rem', 
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      color: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(102, 126, 234, 0.1)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ 
                      width: '3rem', 
                      height: '3rem', 
                      background: 'rgba(102, 126, 234, 0.1)', 
                      borderRadius: '0.75rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <info.icon style={{ color: '#667eea' }} size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '600', color: '#1a202c' }}>{info.title}</h4>
                      <p style={{ color: '#4a5568', margin: 0 }}>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '1.5rem', 
                color: '#1a202c' 
              }}>
                Social Media
              </h3>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '1rem' 
              }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem', 
                      padding: '1rem', 
                      borderRadius: '0.75rem', 
                      border: '2px solid rgba(102, 126, 234, 0.2)', 
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      color: '#4a5568'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = 'rgba(102, 126, 234, 0.4)';
                      e.target.style.background = 'rgba(102, 126, 234, 0.05)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                      e.target.style.background = 'transparent';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <social.icon size={20} />
                    <span style={{ fontWeight: '500' }}>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '1.5rem',
                padding: '2rem',
                color: 'white'
              }}
            >
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: '700', 
                marginBottom: '1rem' 
              }}>
                Availability Status
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>New Projects</span>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    background: '#10b981', 
                    borderRadius: '9999px', 
                    fontSize: '0.875rem', 
                    fontWeight: '500' 
                  }}>
                    Available
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Freelance Work</span>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    background: '#10b981', 
                    borderRadius: '9999px', 
                    fontSize: '0.875rem', 
                    fontWeight: '500' 
                  }}>
                    Available
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Full-time</span>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    background: '#f59e0b', 
                    borderRadius: '9999px', 
                    fontSize: '0.875rem', 
                    fontWeight: '500' 
                  }}>
                    Considering
                  </span>
                </div>
              </div>
              <p style={{ 
                color: 'rgba(219, 234, 254, 1)', 
                fontSize: '0.875rem', 
                marginTop: '1rem',
                margin: '1rem 0 0 0'
              }}>
                Feel free to reach out for detailed information about your projects.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
          style={{ marginTop: '4rem' }}
        >
          <div className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              marginBottom: '1rem', 
              color: '#1a202c' 
            }}>
              Let's Work Together!
            </h3>
            <p style={{ 
              color: '#4a5568', 
              marginBottom: '1.5rem', 
              maxWidth: '32rem', 
              margin: '0 auto 1.5rem auto'
            }}>
              I'm always excited to develop creative projects, learn new technologies, 
              and solve problems. Feel free to reach out for your projects.
            </p>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '1rem' 
            }}>
              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>
              <a href="/Cv_RanaCetinkaya.pdf" className="btn btn-secondary" download>
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"]:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          
          h2 {
            font-size: 2.5rem !important;
          }
          
          .glass {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 2rem !important;
          }
          
          .glass {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact; 