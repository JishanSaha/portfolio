document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typed-text", {
    strings: ["Jishan Saha", "Full-Stack Developer",],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
  });

  AOS.init({
    duration: 1000,
    once: true,
  });

  // Fade-in effect
  document.body.style.opacity = 0;
  window.onload = () => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 1;
  };
});