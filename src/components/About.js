import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a <strong>Staff Software Engineer</strong> with over <strong>10 years</strong> of experience 
              in crafting robust, scalable applications that solve real-world problems.
            </p>
            <p>
              Currently at <strong>Intuit India</strong>, I played an integral role in developing <strong>Lacerte</strong>, 
              the premier desktop application for US tax filing. I achieved a remarkable enhancement in 
              <strong> data conversion automation</strong>, increasing efficiency from <strong>75% to 99%</strong>, 
              and reducing conversion time from <strong>2-3 hours to mere minutes</strong>.
            </p>
            <p>
              My expertise spans <strong>Product Management intricacies</strong>, <strong>Performance Enhancement</strong>, 
              and <strong>Reverse Engineering</strong>. I specialize in analyzing intricate systems, fortifying 
              vulnerabilities, and elevating functionality. As an <strong>open-source contributor</strong>, I authored 
              and maintain the <strong>TreeifyTask C# library</strong> under Intuit's public GitHub.
            </p>
            <p>
              Prior to Intuit, I spent 5 years at <strong>Philips Electronics India</strong> as a Software Technologist, 
              where I won the <strong>CTF (Capture The Flag) competition twice</strong> (2015 & 2016), demonstrating 
              strong problem-solving and security skills.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">🎯</div>
              <h3>Mission</h3>
              <p>
                Drive technical innovation through leadership-driven approach and mastery of advanced 
                engineering principles, ensuring unwavering durability in solutions.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🚀</div>
              <h3>Approach</h3>
              <p>
                Continuously incorporate new technologies, participate in crucial design discussions, 
                and provide insights for strategic technical planning.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">💡</div>
              <h3>Impact</h3>
              <p>
                Manage teams of 2-5 members, facilitating their success while delivering measurable 
                business impact through automation and optimization.
              </p>
            </div>
          </div>

          <div className="education-section">
            <h3 className="subsection-title">Education</h3>
            <div className="education-grid">
              <div className="education-item">
                <div className="education-degree">B.Tech</div>
                <div className="education-school">Pondicherry University</div>
                <div className="education-year">2013</div>
              </div>
              <div className="education-item">
                <div className="education-degree">Diploma in IT</div>
                <div className="education-school">MNGP, Pondicherry</div>
                <div className="education-year">2007</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

