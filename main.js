// Responsive navigation toggle (for mobile)
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav ul");
  const menuBtn = document.createElement("button");
  menuBtn.className = "menu-toggle";
  menuBtn.innerHTML = "&#9776;";

  // Only add button if nav exists
  if (nav) {
    nav.parentElement.insertBefore(menuBtn, nav);
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("nav-open");
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Scroll-to-top button
  const scrollBtn = document.createElement("button");
  scrollBtn.className = "scroll-top-btn";
  scrollBtn.textContent = "↑";
  document.body.appendChild(scrollBtn);
  scrollBtn.style.display = "none";

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
