const roles = ["Frontend Developer", "AI Engineer", "Security Specialist"];
const el = document.getElementById("roleText");
const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!prefersReduced) {
  let i = 0;
  setInterval(() => {
    i = (i + 1) % roles.length;
    el.style.opacity = 0;
    setTimeout(() => {
      el.textContent = roles[i];
      el.style.opacity = 1;
    }, 220);
  }, 2400);
  el.style.transition = "opacity 0.22s ease";
}
