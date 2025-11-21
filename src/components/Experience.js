import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Staff Software Engineer & Scrum Master',
      company: 'Intuit India',
      location: 'Ecospace, Bellandur, Bengaluru',
      period: '2020 - Present',
      description: [
        'Currently leading Tax Engine Modernization team as Scrum Master, managing deliverables and team of 5',
        'Modernizing 30-year-old legacy TPS C++ Engine powering TurboTax, TurboTax Desktop, ProSeries and other products',
        'Delivered significant performance and memory optimization through thorough internal engine analysis',
        'Previously led development of Lacerte, achieving 75% to 99% data conversion automation efficiency',
        'Designed and implemented Chrome-like Silent Updater system for Lacerte',
        'Reduced conversion time from 2-3 hours to mere minutes through reverse engineering',
        'Built AI projects: E-Filing Assist, OMNI AI (Incident RCA), Intuit Tax Research (Patent applications)',
        'Migrated DCM backend to MSaaS with zero production issues',
        'Authored and maintain TreeifyTask C# library (open source)',
        'Tech stack: C++, Java, C#, Python, JS, React, Spring Boot, AWS, Jenkins, ArgoCD, LangChain'
      ],
      highlights: ['Scrum Master', 'Legacy Modernization', '99% Automation', 'Patents', 'Open Source']
    },
    {
      title: 'Software Technologist II',
      company: 'Philips Electronics India',
      location: 'Manyata Tech Park, Bengaluru',
      period: '2015 - 2020',
      description: [
        'CTF (Capture The Flag) Competition Winner - 2015 & 2016',
        'Designed and developed field service applications for XRAY modalities',
        'Built software package signing infrastructure using PKI',
        'Implemented remote control functions for XRAY examination rooms',
        'Created simulator libraries for service application development',
        'Tech stack: C#, WPF, WCF, .NET Framework'
      ],
      highlights: ['CTF Winner 2x', 'Security', 'Medical Devices']
    },
    {
      title: 'Contract Sr. Software Engineer',
      company: 'Datamatics @ Philips Electronics India',
      location: 'Bengaluru',
      period: '2013 - 2015',
      description: [
        'Developed and maintained field service applications for XRAY modalities',
        'Implemented unit testing with NUnit frameworks and Rhino Mocks',
        'Managed component design and architectural improvements',
        'Maintained service applications in medical devices',
        'Tech stack: C#, WPF, WCF, SQL Server'
      ],
      highlights: ['Medical Software', 'Architecture']
    },
    {
      title: 'Freelancer Software Developer',
      company: 'Independent',
      location: 'Remote',
      period: '2011 - 2013',
      description: [
        '2 years freelancing journey with diverse technology stack',
        'Developed applications using PHP, JSP, ASP.NET, C# WPF',
        'Built Java Swing desktop applications',
        'Managed multiple client projects simultaneously'
      ],
      highlights: ['Freelance', 'Multi-tech']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <div className="timeline-company">{exp.company}</div>
                    <div className="timeline-location">{exp.location}</div>
                  </div>
                  <div className="timeline-period">{exp.period}</div>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <span key={i} className="badge">{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

