// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.querySelector("nav");
let isMenuOpen = false;

// Toggle mobile menu
function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    mobileMenu.classList.remove("hidden");
    // Trigger reflow
    void mobileMenu.offsetWidth;
    mobileMenu.classList.add("block");
    document.body.style.overflow = "hidden";
  } else {
    mobileMenu.classList.remove("block");
    mobileMenu.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Close menu when clicking outside
function handleClickOutside(event) {
  if (
    isMenuOpen &&
    !mobileMenu.contains(event.target) &&
    !mobileMenuButton.contains(event.target)
  ) {
    toggleMenu();
  }
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll("#mobile-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) toggleMenu();
  });
});

// Event listeners
mobileMenuButton.addEventListener("click", toggleMenu);
document.addEventListener("click", handleClickOutside);

// Close menu on window resize if it's larger than md breakpoint
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && isMenuOpen) {
    toggleMenu();
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#" || targetId === "#!") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Add shadow to navbar on scroll
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 10) {
    navbar.classList.add("shadow-lg", "bg-white/95");
    navbar.classList.remove("bg-white/80");
  } else {
    navbar.classList.remove("shadow-lg", "bg-white/95");
    navbar.classList.add("bg-white/80");
  }
});

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("opacity-100", "translate-y-0");
      element.classList.remove("opacity-0", "translate-y-8");
    }
  });
};

// Initialize animations
window.addEventListener("load", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);
