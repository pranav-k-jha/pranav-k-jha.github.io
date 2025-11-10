import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    // Only send if gtag is loaded
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
        send_to: "G-7KZYQ6FXF0",
      });

      // Debug log in development
      if (process.env.NODE_ENV === "development") {
        console.log("GA4 Page View:", {
          page_path: location.pathname + location.search,
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    }
  }, [location]);
}
