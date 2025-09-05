// Dynamic typing effect for hero section
const words = ["AI Researcher", "Network Scientist", "LLM Systems Enthusiast"];
let i = 0;
setInterval(() => {
  const el = document.getElementById("dynamic");
  if (el) el.innerText = words[i % words.length];
  i++;
}, 2000);

// Skill bars animation
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-bar").forEach(bar => {
    const level = bar.getAttribute("data-level");
    bar.style.width = level + "%";
  });
});
