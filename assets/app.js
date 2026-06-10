// Databricks Career Hub — shared behavior (no dependencies)

(function () {
  // 1. Highlight active top-nav link by filename.
  var file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".topnav a.navlink").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === file) {
      a.classList.add("active");
    } else if (file.indexOf("de-") === 0 && href === "de-track.html") {
      a.classList.add("active");
    } else if (file.indexOf("rsa-") === 0 && href === "rsa-track.html") {
      a.classList.add("active");
    } else if (file.indexOf("prep-") === 0 && href === "prep-track.html") {
      a.classList.add("active");
    }
  });

  // 2. Persist study-plan checkboxes in localStorage (keyed by checkbox id).
  var boxes = document.querySelectorAll('.check-item input[type="checkbox"][id]');
  if (!boxes.length) return;

  var KEY = "dbx-hub-checklist";
  var state = {};
  try { state = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { state = {}; }

  function updateProgress() {
    var bar = document.querySelector(".progress-bar > div");
    var label = document.querySelector(".progress-label");
    if (!bar) return;
    var done = 0;
    boxes.forEach(function (b) { if (b.checked) done++; });
    var pct = Math.round((done / boxes.length) * 100);
    bar.style.width = pct + "%";
    if (label) label.textContent = done + " of " + boxes.length + " complete (" + pct + "%)";
  }

  boxes.forEach(function (b) {
    if (state[b.id]) b.checked = true;
    b.addEventListener("change", function () {
      state[b.id] = b.checked;
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
      updateProgress();
    });
  });

  updateProgress();
})();
