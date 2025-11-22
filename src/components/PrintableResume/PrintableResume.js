import React from 'react';
import './PrintableResume.css';

const PrintableResume = () => {
  return (
    <div className="printable-container">
      {/* Page 1 */}
      <div className="print-page">
        {/* Header */}
        <div className="print-header">
          <div className="print-profile-wrapper">
            <img src="/profile.png" alt="Gokul Elumalai" className="print-profile-img" />
            <div className="print-header-content">
              <h1 className="print-name">GOKUL ELUMALAI</h1>
              <div className="print-title">Staff Software Engineer</div>
              <div className="print-contact-row">
                <span>📧 gokul.jai_e@yahoo.com</span>
                <span>📱 +91 70260 53581</span>
                <span>📍 Bengaluru, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Impact Stats */}
        <div className="print-stats-row">
          <div className="stat-pill">10+ Years Experience</div>
          <div className="stat-pill">6+ Tech Stacks</div>
          <div className="stat-pill">2x CTF Winner</div>
          <div className="stat-pill">3 Patents Applied</div>
        </div>

        {/* Professional Summary */}
        <div className="print-section compact">
          <h2 className="print-section-title">Professional Summary</h2>
          <p className="print-text tight">
            <strong>Staff Software Engineer</strong> with 10+ years crafting robust, scalable applications. 
            At <strong>Intuit India</strong>, achieved <strong>75% to 99% data conversion automation</strong>, 
            designed Chrome-like <strong>Silent Updater</strong> (inspired by Google Omaha), and handled multiple 
            tax seasons with <strong>zero downtime</strong>. Developed AI projects (<strong>OMNI AI Slack bot</strong> 
            with AWS CDK/Lambda, E-Filing Assist) - all <strong>patent-applied</strong>. Migrated DCM to MSaaS 
            with zero issues, authored <strong>TreeifyTask C# library</strong> (open source). Lead Tax Engine 
            Modernization as <strong>Scrum Master</strong>, managing team of 5. Won <strong>CTF competition 
            twice</strong> at Philips (2015 & 2016).
          </p>
        </div>

        {/* Experience - Intuit */}
        <div className="print-section compact">
          <h2 className="print-section-title">Professional Experience</h2>
          
          <div className="exp-block">
            <div className="exp-header-row">
              <div>
                <div className="exp-title">Staff Software Engineer</div>
                <div className="exp-company">Intuit India, Bengaluru</div>
              </div>
              <div className="exp-period">2020 - Present</div>
            </div>
            
            <div className="two-col-list">
              <ul className="compact-list">
                <li>Lead Tax Engine Modernization as Scrum Master, managing team of 5</li>
                <li>Modernize 30-year legacy TPS C++ Engine (TurboTax, ProSeries)</li>
                <li>Achieved 75% → 99% data conversion automation efficiency</li>
                <li>Designed Chrome-like Silent Updater (Google Omaha-inspired)</li>
                <li>Built OMNI AI Slack bot (AWS CDK, Lambda, GenOS integration)</li>
              </ul>
              <ul className="compact-list">
                <li>Developed E-Filing Assist & Tax Research AI (3 patents applied)</li>
                <li>Migrated DCM backend to MSaaS - zero production issues</li>
                <li>Authored TreeifyTask C# library (Intuit public GitHub)</li>
                <li>Built AWS CDK cloud stacks for UFT license server</li>
                <li>Lead GED participation, enable team with emerging tech</li>
              </ul>
            </div>
            
            <div className="badge-row">
              <span className="badge">Scrum Master</span>
              <span className="badge">Legacy Modernization</span>
              <span className="badge">99% Automation</span>
              <span className="badge">Patents</span>
              <span className="badge">Open Source</span>
            </div>
          </div>

          {/* Philips */}
          <div className="exp-block compact">
            <div className="exp-header-row">
              <div>
                <div className="exp-title">Software Technologist II</div>
                <div className="exp-company">Philips Electronics India, Bengaluru</div>
              </div>
              <div className="exp-period">2015 - 2020</div>
            </div>
            <ul className="compact-list">
              <li><strong>CTF Winner 2015 & 2016</strong></li>
              <li>Designed field service apps for XRAY modalities (C#, WPF, WCF)</li>
              <li>Built PKI software package signing infrastructure</li>
              <li>Implemented IR remote control for XRAY rooms</li>
            </ul>
          </div>

          {/* Datamatics */}
          <div className="exp-block compact">
            <div className="exp-header-row">
              <div>
                <div className="exp-title">Contract Sr. Software Engineer</div>
                <div className="exp-company">Datamatics @ Philips, Bengaluru</div>
              </div>
              <div className="exp-period">2013 - 2015</div>
            </div>
            <ul className="compact-list">
              <li>Field service apps for medical devices (C#, WPF, WCF, SQL Server)</li>
              <li>Unit testing with NUnit & Rhino Mocks</li>
              <li>Component design & architecture</li>
            </ul>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="print-section compact">
          <h2 className="print-section-title">Key Achievements</h2>
          <div className="achievement-row">
            <div className="achievement-box">
              <div className="ach-value">75% → 99%</div>
              <div className="ach-label">Automation</div>
            </div>
            <div className="achievement-box">
              <div className="ach-value">Zero</div>
              <div className="ach-label">Downtime</div>
            </div>
            <div className="achievement-box">
              <div className="ach-value">3</div>
              <div className="ach-label">Patents</div>
            </div>
            <div className="achievement-box">
              <div className="ach-value">5</div>
              <div className="ach-label">Team Size</div>
            </div>
            <div className="achievement-box">
              <div className="ach-value">2x</div>
              <div className="ach-label">CTF Winner</div>
            </div>
          </div>
        </div>

        {/* Page Footer */}
        <div className="page-number">Page 1 of 2</div>
      </div>

      {/* Page 2 */}
      <div className="print-page">
        {/* Technical Skills - 3 Column Dense Layout */}
        <div className="print-section compact">
          <h2 className="print-section-title">Technical Skills</h2>
          <div className="skills-three-col">
            <div className="skill-col">
              <div className="skill-cat-title">Languages</div>
              <div className="skill-tags-dense">
                <span>C# ⭐95%</span>
                <span>JavaScript ⭐90%</span>
                <span>SQL ⭐85%</span>
                <span>Python ⭐80%</span>
                <span>Java ⭐75%</span>
                <span>C++ ⭐65%</span>
                <span>TypeScript ⭐65%</span>
              </div>

              <div className="skill-cat-title">Frontend</div>
              <div className="skill-tags-dense">
                <span>WPF ⭐95%</span>
                <span>WinForms ⭐90%</span>
                <span>HTML/CSS ⭐90%</span>
                <span>React.js ⭐85%</span>
                <span>TailwindCSS</span>
              </div>
            </div>

            <div className="skill-col">
              <div className="skill-cat-title">Backend & Cloud</div>
              <div className="skill-tags-dense">
                <span>.NET Framework ⭐95%</span>
                <span>.NET Core ⭐90%</span>
                <span>CI/CD ⭐90%</span>
                <span>Node.js ⭐80%</span>
                <span>Jenkins ⭐75%</span>
                <span>ArgoCD ⭐60%</span>
                <span>Docker ⭐60%</span>
                <span>ASP.NET/WCF ⭐60%</span>
                <span>AWS ⭐50%</span>
              </div>

              <div className="skill-cat-title">Databases</div>
              <div className="skill-tags-dense">
                <span>SQL Server ⭐90%</span>
                <span>MySQL ⭐85%</span>
                <span>PostgreSQL ⭐80%</span>
                <span>DynamoDB ⭐70%</span>
              </div>
            </div>

            <div className="skill-col">
              <div className="skill-cat-title">Specialized</div>
              <div className="skill-tags-dense">
                <span>Reverse Engineering ⭐90%</span>
                <span>System Design ⭐90%</span>
                <span>Performance Opt ⭐90%</span>
                <span>IDA Disassembler ⭐85%</span>
                <span>Security (PKI) ⭐85%</span>
              </div>

              <div className="skill-cat-title">Core Expertise</div>
              <div className="skill-tags-dense small">
                <span>Full Stack Dev</span>
                <span>Backend Arch</span>
                <span>E2E Leadership</span>
                <span>Team Leadership</span>
                <span>Code Review</span>
                <span>Agile/Scrum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects - 2 Column */}
        <div className="print-section compact">
          <h2 className="print-section-title">Featured Projects</h2>
          <div className="projects-two-col">
            <div className="project-item-compact">
              <div className="project-title-compact">Data Conversion Automation</div>
              <div className="project-company">Intuit</div>
              <p className="project-desc-compact">
                ProSystemFX & TurboTax conversion automation. 75% → 99% coverage. 
                Python, IDA, C#, React, TailwindCSS.
              </p>
            </div>

            <div className="project-item-compact">
              <div className="project-title-compact">TreeifyTask (Open Source)</div>
              <div className="project-company">Intuit</div>
              <p className="project-desc-compact">
                .NET library for hierarchical async task management. 
                Intuit public GitHub. C#, .NET Standard, Async/Await.
              </p>
            </div>

            <div className="project-item-compact">
              <div className="project-title-compact">Silent Updater</div>
              <div className="project-company">Intuit</div>
              <p className="project-desc-compact">
                Chrome-like updater for Lacerte. Eliminated reboots, folder clone patching. 
                C#, WPF, inspired by Google Omaha.
              </p>
            </div>

            <div className="project-item-compact">
              <div className="project-title-compact">OMNI AI Slack Bot</div>
              <div className="project-company">Intuit (Patent Applied)</div>
              <p className="project-desc-compact">
                Incident RCA helper. AWS CDK, Lambda, GenOS integration. 
                Intelligent root cause analysis.
              </p>
            </div>

            <div className="project-item-compact">
              <div className="project-title-compact">Platform Hosting</div>
              <div className="project-company">Intuit</div>
              <p className="project-desc-compact">
                Desktop to cloud migration tool. Seamless data transfer. 
                C#, WPF, Delphi XE5.
              </p>
            </div>

            <div className="project-item-compact">
              <div className="project-title-compact">Software Package Signer</div>
              <div className="project-company">Philips</div>
              <p className="project-desc-compact">
                PKI infrastructure for digital signatures. S/MIME protocol. 
                Certificate chain verification. C#, WPF.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Additional */}
        <div className="print-section compact">
          <div className="two-col-section">
            <div>
              <h2 className="print-section-title">Education</h2>
              <div className="edu-item-compact">
                <div className="edu-degree">B.Tech</div>
                <div className="edu-school">Pondicherry University</div>
                <div className="edu-year">2013</div>
              </div>
              <div className="edu-item-compact">
                <div className="edu-degree">Diploma in IT</div>
                <div className="edu-school">MNGP, Pondicherry</div>
                <div className="edu-year">2007</div>
              </div>
            </div>

            <div>
              <h2 className="print-section-title">Links & Contact</h2>
              <div className="links-compact">
                <div>🔗 linkedin.com/in/gokul-elumalai-3a334b120/</div>
                <div>💻 github.com/gokulegit</div>
                <div>📧 gokul.jai_e@yahoo.com</div>
                <div>📱 +91 70260 53581</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="print-footer-text">
          <strong>Key Highlights:</strong> Staff Engineer at Intuit • 75→99% Automation • 3 Patents Applied • 
          CTF Winner 2x • Open Source Author • Zero Production Issues • GED Participant • Team Leadership
        </div>

        <div className="page-number">Page 2 of 2</div>
      </div>
    </div>
  );
};

export default PrintableResume;

