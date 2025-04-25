document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typed-text", {
    strings: ["Jishan Saha", "Full-Stack Developer", "Dream Visualizer"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
  });

  AOS.init({
    duration: 1000,
    once: true,
  });

  // Fade-in on page load
  document.body.style.opacity = 0;
  window.onload = () => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 1;
  };

  // Custom Smooth Scroll with Offset Fix
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const headerOffset = 100; // Adjust this based on your header height
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
});