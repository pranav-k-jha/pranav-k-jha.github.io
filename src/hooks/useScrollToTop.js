import { useState, useEffect, useCallback } from "react";

const useScrollToTop = (visibilityOffset = 400) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setIsVisible(window.pageYOffset > visibilityOffset);
  }, [visibilityOffset]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { isVisible, scrollToTop };
};

export default useScrollToTop;
