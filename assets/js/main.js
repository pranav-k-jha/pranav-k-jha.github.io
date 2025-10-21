// Main JavaScript for pranav-k-jha.github.io
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const siteNav = document.getElementById("site-nav");
  const hamburger = document.querySelector(".hamburger");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      siteNav.classList.toggle("active");
      if (hamburger) {
        hamburger.classList.toggle("active");
      }
      document.body.classList.toggle("menu-open");
    });
  }

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll(".site-nav .page-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        siteNav.classList.remove("active");
        if (hamburger) {
          hamburger.classList.remove("active");
        }
        document.body.classList.remove("menu-open");
      }
    });
  });

  // Add scroll effect to header
  const header = document.getElementById("site-header");
  if (header) {
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        header.classList.remove("scrolled");
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.style.transform = "translateY(-100%)";
      } else {
        // Scrolling up
        header.style.transform = "translateY(0)";
        header.classList.add("scrolled");
      }

      lastScroll = currentScroll;
    });
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
