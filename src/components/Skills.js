import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'C#', level: 95 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'WPF', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'TailwindCSS', level: 85 },
        { name: 'WinForms', level: 90 }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: '.NET Framework', level: 95 },
        { name: '.NET Core', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'ASP.NET', level: 90 },
        { name: 'WCF', level: 85 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 15 },
        { name: 'Jenkins', level: 85 },
        { name: 'ArgoCD', level: 80 },
        { name: 'CI/CD', level: 90 },
        { name: 'Docker', level: 75 }
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'SQL Server', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'DynamoDB', level: 70 }
      ]
    },
    {
      title: 'Specialized',
      icon: '🔬',
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
        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
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

