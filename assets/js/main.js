const navLink = document.querySelector(".header__nav-list");
const navIcon = document.querySelector(".header__open");
const navClose = document.querySelector(".header__close");
const navList = document.querySelectorAll(".header__list");

if (navIcon) {
  navIcon.addEventListener("click", () => {
    navLink.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navLink.classList.remove("show-menu");
  });
}

function linkAction() {
  const navLink = document.querySelector(".header__nav-list");
  navLink.classList.remove("show-menu");
}
navList.forEach((e) => e.addEventListener("click", linkAction));
