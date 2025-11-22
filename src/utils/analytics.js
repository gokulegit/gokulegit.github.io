// Analytics utility for GoatCounter
// The GoatCounter script is loaded in index.html
// Make sure to replace 'YOUR_GOATCOUNTER_CODE' in index.html with your actual site code

// Track a page view
export const trackPageView = (path = window.location.pathname) => {
  if (typeof window !== 'undefined' && window.goatcounter) {
    window.goatcounter.count({
      path: path,
    });
  }
};

// Track a custom event
export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined' && window.goatcounter) {
    window.goatcounter.count({
      path: eventName,
      title: eventName,
      event: true,
      ...eventData,
    });
  }
};

// Track print event
export const trackPrint = () => {
  trackEvent('print-resume', {
    title: 'Resume Printed',
  });
};

// Track section view
export const trackSectionView = (sectionName) => {
  trackEvent(`section-view-${sectionName}`, {
    title: `Viewed Section: ${sectionName}`,
  });
};

// Initialize GoatCounter (called after script loads)
export const initAnalytics = () => {
  if (typeof window !== 'undefined' && window.goatcounter) {
    // Track initial page view
    trackPageView();
  }
};

