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
});

// -------------slider events------------------

// const sliderEvents = document.querySelector(".slider-container");

// let mySwiper;

// function mobileSlider() {
//   if (window.innerWidth <= 673 && sliderEvents.dataset.mobile === "false") {
//     mySwiper = new Swiper(sliderEvents, {
//       direction: "horizontal",
//       slidesPerView: 1,
//       spaceBetween: 30,

//       slideClass: "events__slide",
//     });

//     sliderEvents.dataset.mobile === "true";
//   }

//   if (window.innerWidth > 673) {
//     sliderEvents.dataset.mobile === "false";

//     if (sliderEvents.classList.contains("swiper-container-initialized")) {
//       mySwiper.destroy();
//     }
//   }
// }

// mobileSlider();
// window.addEventListener("resize", () => {
//   mobileSlider();
// });

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
