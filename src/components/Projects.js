import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Data Conversion Automation',
      company: 'Intuit',
      description: 'Unraveled techniques for ProSystemFX and TurboTax conversion, introducing automation that compresses manual conversion duration from 2-3 hours to mere minutes. Automation coverage increased from 75% to 99%.',
      tech: ['Python', 'IDA Disassembler', 'C#', 'ReactJs', 'Crank.js', 'TailwindCSS'],
      icon: '🔄',
      impact: '75% → 99% automation, 2-3 hrs → minutes'
    },
    {
      title: 'TreeifyTask',
      company: 'Intuit (Open Source)',
      description: '.NET standard library to efficiently manage a mix of synchronous and asynchronous tasks in a hierarchical fashion. Published under Intuit\'s public GitHub organization.',
      tech: ['C#', '.NET Standard', 'Async/Await', 'Task Parallel Library'],
      icon: '🌳',
      link: 'https://github.com/intuit/TreeifyTask',
      impact: 'Open source contribution'
    },
    {
      title: 'Silent Updater',
      company: 'Intuit',
      description: 'Follow-me-home initiative for managing desktop application software updates. Produced technical documentation for Generic solution integration across diverse desktop applications.',
      tech: ['C#', 'WPF', 'Update Management', 'Desktop Apps'],
      icon: '🔔',
      impact: 'Generic solution for BU'
    },
    {
      title: 'Platform Hosting',
      company: 'Intuit',
      description: 'Helps customers onboard to Hosting environment by transferring data from local desktop to Remote desktop account. Upload/Download features with seamless UI/UX.',
      tech: ['C#', 'WPF', 'Delphi XE5', 'Cloud Migration'],
      icon: '☁️',
      impact: 'Seamless cloud onboarding'
    },
    {
      title: 'Software Package Signer',
      company: 'Philips Electronics',
      description: 'Public Key Infrastructure design for digital signature on software packages. Implemented certificate chain verification to root authority using S/MIME protocol.',
      tech: ['C#', 'PKI', 'S/MIME', 'WPF', 'Security'],
      icon: '🔐',
      impact: 'Security infrastructure'
    },
    {
      title: 'XRAY Remote Control',
      company: 'Philips Electronics',
      description: 'Infra-Red signal configuration for FLIRC remote control with keyboard hooks for image movements, zoom, pan. Focused on SOLID and Design principles.',
      tech: ['C#', 'P/Invoke', 'UML', 'Windows Native APIs'],
      icon: '🎮',
      impact: 'Enhanced medical device UX'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my notable work</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-icon">{project.icon}</div>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-company">{project.company}</div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.impact && (
                <div className="project-impact">
                  <span className="impact-icon">⚡</span>
                  <span className="impact-text">{project.impact}</span>
                </div>
              )}
              {project.link && (
                <a 
                  href={project.link} 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

