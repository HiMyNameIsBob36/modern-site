/* TIME */
function updateTime() {
  document.getElementById("time").textContent =
    new Date().toLocaleTimeString("en-AU", {
      timeZone: "Australia/Sydney",
      hour: "2-digit",
      minute: "2-digit"
    });
}
setInterval(updateTime, 1000);
updateTime();

/* PAGE SWITCH */
let currentPage = 0;
const pages = document.getElementById("pages");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentPage = i;
    pages.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach(d => d.classList.remove("active"));
    dot.classList.add("active");
  });
});

/* ICON → PANEL */
const panel = document.getElementById("panel");
const panelTitle = document.getElementById("panelTitle");
const panelSince = document.getElementById("panelSince");
const panelText = document.getElementById("panelText");
const panelLink = document.getElementById("panelLink");

document.querySelectorAll(".app").forEach(app => {
  app.addEventListener("click", () => {
    panel.classList.remove("active");
    setTimeout(() => {
      panelTitle.textContent = app.dataset.title;
      panelSince.textContent = app.dataset.since;
      panelText.textContent = app.dataset.info;
      panelLink.href = app.dataset.link;
      panel.classList.add("active");
    }, 200);
  });
});

/* DARK MODE */
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};
