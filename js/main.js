const menuButton = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");
const overlay = document.querySelector(".header__overlay");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("is-open");
  menuButton.classList.toggle("is-open");
  overlay.classList.toggle("is-open");

  const isExpanded = menuButton.getAttribute("aria-expanded") === "false";

  menuButton.setAttribute("aria-expanded", isExpanded);

  menuButton.setAttribute(
    "aria-label",
    isExpanded ? "Close menu" : "Open menu",
  );
});
