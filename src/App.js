import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import PrintableResume from './components/PrintableResume/PrintableResume';
import { trackPageView } from './utils/analytics';

function MainApp() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

// Component to track page views on route changes
function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    // Wait for GoatCounter to load, then track page view
    const checkAndTrack = () => {
      if (typeof window !== 'undefined' && window.goatcounter) {
        trackPageView(location.pathname);
      } else {
        // Retry after a short delay if GoatCounter hasn't loaded yet
        setTimeout(checkAndTrack, 100);
      }
    };
    
    checkAndTrack();
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    // Track initial page load
    const initTracking = () => {
      if (typeof window !== 'undefined' && window.goatcounter) {
        trackPageView(window.location.pathname);
      } else {
        setTimeout(initTracking, 100);
      }
    };
    initTracking();
  }, []);

  return (
    <Router>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/print" element={<PrintableResume />} />
      </Routes>
    </Router>
  );
}

export default App;
