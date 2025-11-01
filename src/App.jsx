import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AIDomains from "./components/AIDomains";
import BentoDemo from "./components/bento-features";

// Lazy load components
const About = lazy(() => import("./components/About"));
const PublicationsPage = lazy(() => import("./pages/PublicationsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPost = lazy(() => import("./components/BlogPost"));

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const targetId = e.currentTarget.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
          window.history.pushState({}, "", targetId);
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <AIDomains />
                  <BentoDemo />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
