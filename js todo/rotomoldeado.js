// Ejecutar sin esperar al evento DOMContentLoaded
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-visible");
    } else {
      entry.target.classList.remove("animate-visible");
    }
  });
}, { threshold: 0 });

document.querySelectorAll(".animate").forEach(element => {
  observer.observe(element);
});