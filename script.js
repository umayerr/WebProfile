
document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".menu-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
        document.body.classList.toggle("nav-open");
    });
});
