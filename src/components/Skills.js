import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C#', level: 95 },
        { name: 'C++', level: 65 },
        { name: 'Java', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 65 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'WPF', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'TailwindCSS', level: 50 },
        { name: 'WinForms', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: '.NET Framework', level: 95 },
        { name: '.NET Core', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'ASP.NET', level: 60 },
        { name: 'WCF', level: 60 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 50 },
        { name: 'Jenkins', level: 75 },
        { name: 'ArgoCD', level: 60 },
        { name: 'CI/CD', level: 90 },
        { name: 'Docker', level: 60 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'SQL Server', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'DynamoDB', level: 70 }
      ]
    },
    {
      title: 'Specialized',
      skills: [
        { name: 'Reverse Engineering', level: 90 },
        { name: 'IDA Disassembler', level: 85 },
        { name: 'Security (PKI)', level: 85 },
        { name: 'System Design', level: 90 },
        { name: 'Performance Optimization', level: 90 }
      ]
    }
  ];

  const expertise = [
    'Full Stack Development',
    'Backend Architecture',
    'Problem Solving & Fundamentals',
    'E2E Initiative Leadership',
    'Reverse Engineering',
    'Cloud Infrastructure (AWS)',
    'DevOps & CI/CD',
    'Team Leadership',
    'Code Review & Mentorship',
    'System Design',
    'Performance Enhancement',
    'Security & PKI'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="specialized-achievements">
          <div className="project-card" style={{ animationDelay: '0.1s' }}>
            <div className="project-header">
              <div className="project-category">Reverse Engineering</div>
              <h3 className="project-title">TaxAct Database Decryption</h3>
              <div className="project-company">Data Conversion for Lacerte</div>
            </div>
            <p className="project-description">
              Successfully reverse-engineered TaxAct application's database encryption using IDA Disassembler and x64dbg tool, enabling seamless data conversion for Lacerte. Cracked the evolving decryption 
              algorithms that change annually, ensuring continuous compatibility across multiple 
              tax seasons.
            </p>
            <div className="project-tech">
              <span className="tech-tag">IDA Disassembler</span>
              <span className="tech-tag">Binary Analysis</span>
              <span className="tech-tag">Crypto Analysis</span>
            </div>
            <div className="project-impact">
              <span className="impact-text">Data Conversion stability for Lacerte</span>
            </div>
          </div>

          <div className="project-card" style={{ animationDelay: '0.2s' }}>
            <div className="project-header">
              <div className="project-category">Reverse Engineering</div>
              <h3 className="project-title">ProSystemFX Conversion</h3>
              <div className="project-company">Legacy Format Analysis</div>
            </div>
            <p className="project-description">
              Reverse-engineered ProSystemFX proprietary data formats and file structures, 
              enabling automated conversion to Lacerte. Achieved 75% → 99% automation coverage 
              through deep binary analysis and format mapping.
            </p>
            <div className="project-tech">
              <span className="tech-tag">File Format Analysis</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Automation</span>
            </div>
            <div className="project-impact">
              <span className="impact-text">75% → 99% automation coverage</span>
            </div>
          </div>
        </div>

        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="category-header">
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.1) + (i * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="expertise-section">
          <h3 className="subsection-title">Core Expertise</h3>
          <div className="expertise-tags">
            {expertise.map((item, index) => (
              <span 
                key={index} 
                className="expertise-tag"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

