// 1. Create a new file: src/components/GoogleAnalytics.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-7KZYQ6FXF0");
  }, []);

  useEffect(() => {
    // Track page view on route change
    if (window.gtag) {
      window.gtag("config", "G-7KZYQ6FXF0", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
