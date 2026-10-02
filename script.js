document.addEventListener("DOMContentLoaded", function () {
  var dateElement = document.getElementById("last-updated");

  if (dateElement) {
    dateElement.textContent = new Date(document.lastModified)
      .toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
      });
  }

  var btn = document.querySelector(".menu-toggle");
  if (!btn) return;

  btn.addEventListener("click", function () {
    document.body.classList.toggle("nav-open");
  });
});
