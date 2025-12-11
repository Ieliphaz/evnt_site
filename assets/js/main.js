
// ---- ES Module, deferred ----

const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".mobile-nav");
const contrastToggle = document.querySelector("#contrast-toggle");

// ---- Reduced motion preference ----
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---- Hamburger menu toggle ----
if (menuBtn && nav) {
 menuBtn.addEventListener("click", () => {
 const expanded = menuBtn.getAttribute("aria-expanded") === "true";
 const newState = !expanded;

 menuBtn.setAttribute("aria-expanded", String(newState));
 nav.classList.toggle("open");

 if (!prefersReducedMotion) {
 nav.style.transition = "transform 0.25s ease";
 } else {
 nav.style.transition = "none";
 }
 });
}

// ---- High contrast toggle ----
if (contrastToggle) {
 contrastToggle.addEventListener("click", () => {
 document.body.classList.toggle("high-contrast");
 });
}

// ---- Lazy-load images ----
document.addEventListener("DOMContentLoaded", () => {
 const imgs = document.querySelectorAll("img[data-src]");
 imgs.forEach((img) => {
 if (!img) return;
 img.setAttribute("src", img.dataset.src);
 img.removeAttribute("data-src");
 });
});

// ---- Optional: Log site load ----
console.log("Community Event site loaded with JS enhancements.");

