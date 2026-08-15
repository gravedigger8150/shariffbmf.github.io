document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
});

function showFormNotice() {
  const notice = document.getElementById("form-notice");
  if (notice) notice.textContent = "Static demo form: replace YOUR-EMAIL@example.com with your real address or connect a form service before publishing.";
}