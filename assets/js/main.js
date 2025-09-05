// Hero 动态文字
const words = ["Network & Distributed Systems Researcher", "Distributed Systems & AI", "Networking Protocols"];
let i = 0;
setInterval(() => {
  const el = document.getElementById("dynamic");
  if (el) el.innerText = words[i % words.length];
  i++;
}, 2000);

// 动画技能条
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-bar").forEach(bar => {
    const level = bar.getAttribute("data-level");
    bar.style.width = level + "%";
  });
});

