import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Post Graduate Certificate in Technology Leadership and Innovation',
      issuer: 'Emeritus',
      period: 'Dec 2023 - Sep 2024',
      certificateLink: 'https://certificates.emeritus.org/11b877e5-0bc3-4237-80e9-5c87790dc6d0',
      courseLink: 'https://executive-ed.xpro.mit.edu/technology-leadership-and-innovation',
      icon: '🎓',
      description: 'Advanced program focusing on leading technology initiatives, innovation strategies, and digital transformation in modern enterprises.',
      skills: ['Leadership', 'Innovation Management', 'Digital Transformation', 'Strategic Planning']
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Professional development and continuous learning</p>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-period">{cert.period}</span>
                </div>
                <p className="cert-description">{cert.description}</p>
                <div className="cert-skills">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="cert-skill-tag">{skill}</span>
                  ))}
                </div>
                <div className="cert-links">
                  <a 
                    href={cert.certificateLink} 
                    className="cert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <line x1="10" y1="9" x2="10" y2="9"></line>
                    </svg>
                    View Certificate
                  </a>
                  <a 
                    href={cert.courseLink} 
                    className="cert-link course-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    Course Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

