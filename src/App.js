import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
        // HashRouter provides pathname without hash, but we'll use it as-is
        const path = location.pathname || '/';
        trackPageView(path);
      } else {
        // Retry after a short delay if GoatCounter hasn't loaded yet
        setTimeout(checkAndTrack, 100);
      }
    };
    
    checkAndTrack();
  }, [location]);

  return null;
}

// Debug component to see current route
function RouteDebugger() {
  const location = useLocation();
  useEffect(() => {
    console.log('Current route pathname:', location.pathname);
    console.log('Current hash:', window.location.hash);
    console.log('Full location:', location);
  }, [location]);
  return null;
}

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      return hash ? hash.slice(1) : '/';
    }
    return '/';
  });

  useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentPath(hash ? hash.slice(1) : '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Track initial page load
    const initTracking = () => {
      if (typeof window !== 'undefined' && window.goatcounter) {
        const path = currentPath;
        trackPageView(path);
      } else {
        setTimeout(initTracking, 100);
      }
    };
    initTracking();
  }, [currentPath]);

  return (
    <Router>
      <RouteDebugger />
      <PageViewTracker />
      <Routes>
        <Route path="/print" element={<PrintableResume />} />
        <Route path="/" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
