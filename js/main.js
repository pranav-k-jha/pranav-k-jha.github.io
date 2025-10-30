document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }

    // Update active nav link
    const scrollPosition = window.scrollY + 200;

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinksContainer = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinksContainer.style.display =
        navLinksContainer.style.display === "flex" ? "none" : "flex";
    });
  }

  // Animate skills on scroll
  const animateSkills = () => {
    const skills = document.querySelectorAll(".skill-item");
    skills.forEach((skill) => {
      const progress = skill.querySelector(".progress");
      const percent = skill.querySelector(
        ".skill-info span:last-child"
      ).textContent;
      progress.style.width = percent;
    });
  };

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        if (entry.target.id === "skills") {
          animateSkills();
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Typewriter effect
  const typewriterText = document.querySelector(".typewriter");
  if (typewriterText) {
    const words = [
      "AI Engineer",
      "ML Specialist",
      "Python Developer",
      "Data Scientist",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      typewriterText.textContent = currentChar;

      if (!isDeleting && charIndex < currentWord.length) {
        // Typing
        charIndex++;
        typeSpeed = 100;
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        charIndex--;
        typeSpeed = 50;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        // Pause at the end of the word
        isDeleting = true;
        typeSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(type, typeSpeed);
    }

    // Start the typewriter effect
    setTimeout(type, 1000);
  }
});
