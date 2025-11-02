import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to top when route changes
    window.scrollTo(0, 0);

    // Optional: force reflow for animations to replay correctly
    document.body.offsetHeight;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
