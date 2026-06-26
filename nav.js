/* ============================================================
   International Rescue Ministry — nav.js
   Handles: mobile hamburger menu toggle
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* --- CREATE HAMBURGER BUTTON --- */
  const nav = document.querySelector("nav");
  const navLinks = document.querySelector(".nav-links");

  if (!nav || !navLinks) return;

  // Create the button
  const hamburger = document.createElement("button");
  hamburger.classList.add("hamburger-btn");
  hamburger.setAttribute("aria-label", "Toggle navigation menu");
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';

  nav.appendChild(hamburger);

  /* --- TOGGLE MENU --- */
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("nav-open");
    const isOpen = navLinks.classList.contains("nav-open");
    hamburger.innerHTML = isOpen
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  /* --- CLOSE MENU WHEN LINK IS CLICKED --- */
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("nav-open");
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  /* --- CLOSE MENU WHEN CLICKING OUTSIDE --- */
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target)) {
      navLinks.classList.remove("nav-open");
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

});
