const swiperProfession = new Swiper(".profession-slider", {
  direction: "horizontal",
  slidesPerView: "auto",

  pagination: {
    el: ".swiper-pagination",

    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  spaceBetween: 30,
});

const burgerMenu = document.querySelector(".page-header__toggle");
const burgerMenuOpened = document.querySelector(".page-header__toggle--opened");
const mobileMenu = document.querySelector(".page-header__navigation");

let condition = "close";

burgerMenu.addEventListener("click", function () {
  if (condition === "close") {
    mobileMenu.style.display = "block";
    burgerMenu.classList.remove("page-header__toggle--closed");
    burgerMenu.classList.add("page-header__toggle--opened");
    condition = "open";
  }
});

burgerMenuOpened.addEventListener("click", function () {
  if (condition === "open") {
    burgerMenu.classList.remove("page-header__toggle--opened");
    burgerMenu.classList.add("page-header__toggle--closed");
    mobileMenu.style.display = "none";
    condition = "close";
  }
});
