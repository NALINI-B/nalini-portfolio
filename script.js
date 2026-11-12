// PERSONALIZE THIS EMAIL BEFORE PUBLISHING:
const CONTACT_EMAIL = "nalinibanki7@gmail.com";

document.getElementById("year").textContent = new Date().getFullYear();
const emailLink = document.getElementById("email-link");
if (CONTACT_EMAIL && !CONTACT_EMAIL.includes("YOUR_EMAIL")) {
  emailLink.href = `mailto:${CONTACT_EMAIL}`;
  document.querySelector(".contact-hint").textContent = "Or email me directly: " + CONTACT_EMAIL;
}

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
