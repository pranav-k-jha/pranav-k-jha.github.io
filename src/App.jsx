import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AIDomains from "./components/AIDomains";
import BentoDemo from "./components/bento-features";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./pages/Projects";
import ServicesPage from "./pages/ServicesPage";
import GoogleAnalytics from "./components/GoogleAnalytics";
import usePageViews from "./hooks/usePageViews";
import LLMCoursePage from "./pages/LLMCoursePage";
import LLMFundamentalsPage from "./pages/LLMFundamentalsPage";
import LLMScientistPage from "./pages/LLMScientistPage";
import LLMEngineerPage from "./pages/LLMEngineerPage";
import LLMNotebooksPage from "./pages/LLMNotebooksPage";
import LLMTwinCoursePage from "./pages/LLMTwinCoursePage";

// Lazy-loaded pages
const About = lazy(() => import("./components/About"));
const PublicationsPage = lazy(() => import("./pages/PublicationsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPost = lazy(() => import("./components/BlogPost"));
const ResourcePage = lazy(() => import("./pages/ResourcePage"));
const AiMlServicePage = lazy(() => import("./pages/services/AiMlServicePage"));
const MobileAppServicePage = lazy(() =>
  import("./pages/services/MobileAppServicePage")
);
const WebDevServicePage = lazy(() =>
  import("./pages/services/WebDevServicePage")
);
const DataEngServicePage = lazy(() =>
  import("./pages/services/DataEngServicePage")
);
const RagPage = lazy(() => import("./pages/RagPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  usePageViews();
  // Smooth scroll for internal anchor links (#section)
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
    anchorLinks.forEach((link) =>
      link.addEventListener("click", handleAnchorClick)
    );

    return () => {
      anchorLinks.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick)
      );
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
      <GoogleAnalytics />
      <Navbar />
      <ScrollToTop />

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
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/ai-ml" element={<AiMlServicePage />} />
            <Route
              path="/services/web-development"
              element={<WebDevServicePage />}
            />
            <Route
              path="/services/data-engineering"
              element={<DataEngServicePage />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources" element={<ResourcePage />} />
            <Route path="/rag" element={<RagPage />} />
            <Route
              path="/services/mobile-app-development"
              element={<MobileAppServicePage />}
            />
            <Route path="/llm-course" element={<LLMCoursePage />} />
            <Route path="/llm-fundamentals" element={<LLMFundamentalsPage />} />
            <Route path="/llm-scientist" element={<LLMScientistPage />} />
            <Route path="/llm-engineer" element={<LLMEngineerPage />} />
            <Route path="/llm-notebooks" element={<LLMNotebooksPage />} />
            <Route path="/llm-twin-course" element={<LLMTwinCoursePage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
