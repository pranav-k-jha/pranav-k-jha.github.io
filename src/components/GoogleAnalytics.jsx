import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MEASUREMENT_ID = "G-7KZYQ6FXF0";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = window.gtag || gtag;

    if (!window.gtag.q) {
      // Only initialize if not already done
      gtag("js", new Date());
      gtag("config", MEASUREMENT_ID, {
        send_page_view: false, // We'll handle page views manually
      });
    }

    // Track initial page view
    gtag("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
      send_to: MEASUREMENT_ID,
    });
  }, []);

  useEffect(() => {
    // Track page view on route change
    if (window.gtag) {
      gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        send_to: MEASUREMENT_ID,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
