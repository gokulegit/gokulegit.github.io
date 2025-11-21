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
              I designed and implemented a <strong>Chrome-like Silent Updater system for Lacerte</strong>, inspired by 
              Google's Omaha Library. This innovative solution eliminated system reboots, introduced folder clone patching 
              for faster updates, and significantly improved user experience. I've successfully handled <strong>multiple 
              tax seasons</strong>, resolved <strong>critical bugs</strong> including complex Amyuni printer driver issues, 
              and collaborated with third-party vendors for deep analysis on native printer driver workflows.
            </p>
            <p>
              My expertise spans <strong>Product Management intricacies</strong>, <strong>Performance Enhancement</strong>, 
              and <strong>Reverse Engineering</strong>. I specialize in analyzing intricate systems, fortifying 
              vulnerabilities, and elevating functionality. As an <strong>open-source contributor</strong>, I authored 
              and maintain the <strong>TreeifyTask C# library</strong> under Intuit's public GitHub.
            </p>
            <p>
              I've also worked on <strong>AI projects</strong> including E-Filing Assist, <strong>OMNI AI (Incident RCA helper)</strong>, 
              and Intuit Tax Research - all <strong>applied for patenting</strong>. For OMNI AI, I developed a 
              <strong> Slack bot</strong> using <strong>AWS CDK with Lambda functions</strong>, integrating with Intuit's GenOS 
              platform to provide intelligent incident root cause analysis. This demonstrates my ability to quickly adapt to new 
              technologies and deliver production-ready solutions.
            </p>
            <p>
              With minimal Spring Boot knowledge, I singlehandedly <strong>migrated the DCM backend server to MSaaS</strong> 
              (Modern SaaS platform at Intuit with paved roads for microservices) with <strong>zero production issues and zero 
              downtime</strong>. This involved moving a custom service to Intuit's standardized microservices platform while 
              maintaining complete reliability. I also built a <strong>custom cloud formation stack using AWS CDK and Route53 </strong> 
              for UFT license server hosting in a Modern SaaS environment, demonstrating proficiency with infrastructure as code.
            </p>
            <p>
              As a <strong>Staff Engineer</strong>, I actively build <strong>team rapport and collaboration</strong> by keeping my 
              team ahead of the curve and identifying opportunities for visibility. I actively participate in 
              <strong> GED (Global Engineering Days)</strong> at Intuit, exploring innovative ideas and encouraging the team to 
              showcase their work. I <strong>enable team members with my expertise</strong> in reverse engineering, system design, 
              and emerging technologies, ensuring they have the skills and confidence to tackle complex challenges. My leadership 
              style focuses on creating opportunities for growth, recognition, and technical excellence across the team.
            </p>
            <p>
              Prior to Intuit, I spent 5 years at <strong>Philips Electronics India</strong> as a Software Technologist, 
              where I won the <strong>CTF (Capture The Flag) competition twice</strong> (2015 & 2016), demonstrating 
              strong problem-solving and security skills.
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

