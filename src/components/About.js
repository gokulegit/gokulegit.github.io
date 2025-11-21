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
              Currently at <strong>Intuit India</strong>, I played a key role in developing <strong>Lacerte</strong>, 
              the premier desktop tax filing application. I achieved <strong>75% to 99% data conversion automation</strong>, 
              reducing conversion time from <strong>2-3 hours to minutes</strong>. I designed the <strong>Chrome-like 
              Silent Updater system</strong> (inspired by Google Omaha), eliminating reboots and handling multiple tax 
              seasons with <strong>zero downtime</strong>.
            </p>
            <p>
              I've developed <strong>AI projects</strong> including <strong>OMNI AI Slack bot</strong> (AWS CDK, Lambda, GenOS) 
              and E-Filing Assist - all <strong>applied for patenting</strong>. I migrated <strong>DCM backend to MSaaS </strong> 
              with zero production issues, built <strong>AWS CDK cloud stacks</strong>, and authored the <strong>TreeifyTask 
              C# library</strong> (open source). My expertise spans reverse engineering, system design, and performance optimization.
            </p>
            <p>
              As <strong>Staff Engineer</strong>, I actively build team collaboration, participate in <strong>GED (Global 
              Engineering Days)</strong>, and enable members with expertise in emerging technologies. Prior to Intuit, I spent 
              5 years at <strong>Philips Electronics India</strong>, winning <strong>CTF competition twice</strong> (2015 & 2016).
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <h3>Technical Excellence</h3>
              <p>
                Cracked ProSystem FX data conversion with minimal reverse engineering experience. 
                Increased automation coverage from 75% to 99% through Python, C#, and Electron tools. 
                Developed innovative solutions like Silent Updater inspired by Google Omaha Library.
              </p>
            </div>

            <div className="about-card">
              <h3>Customer Obsession</h3>
              <p>
                Designed solutions that delight customers - from seamless data transfer to hosting 
                environments, to eliminating system reboots with silent updates. Successfully handled 
                multiple peak tax filing seasons with zero downtime.
              </p>
            </div>

            <div className="about-card">
              <h3>Leadership & Enablement</h3>
              <p>
                As Staff Engineer, I build team collaboration and keep members ahead through GED 
                (Global Engineering Days) participation and idea exploration. I enable the team with 
                expertise in reverse engineering, system design, and emerging tech, creating opportunities 
                for growth and visibility.
              </p>
            </div>

            <div className="about-card">
              <h3>Innovation & Learning</h3>
              <p>
                Always eager to learn new technologies - from Delphi (zero experience) to AWS CDK, 
                Spring Boot, AI/ML with LangChain, and Slack bot development. Applied for multiple 
                patents for AI-powered tax assistant solutions.
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

