const swiperProfession = new Swiper(".profession-slider", {
  direction: "horizontal",
  slidesPerView: "auto",

  pagination: {
    el: ".swiper-pagination",

    clickable: true,
    // dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  spaceBetween: 30,

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: "auto",
    },
  },
});

const buttonOpen = document.querySelector(".page-header__toggle--opened");
const buttonClose = document.querySelector(".page-header__toggle--closed");
const mobileMenu = document.querySelector(".page-header__navigation");

let condition = "close";

buttonClose.addEventListener("click", function () {
  if (condition === "close") {
    buttonClose.classList.remove("page-header__toggle--closed");
    buttonClose.classList.add("page-header__toggle--opened");
    mobileMenu.style.display = "block";
    condition = "open";
  } else {
    buttonClose.classList.remove("page-header__toggle--opened");
    buttonClose.classList.add("page-header__toggle--closed");
    mobileMenu.style.display = "none";
    condition = "close";
  }
});
