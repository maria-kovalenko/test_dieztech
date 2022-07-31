const swiperProfession = new Swiper(".profession-slider", {
  direction: "horizontal",
  slidesPerView: 4,

  pagination: {
    el: ".swiper-pagination",

    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
  spaceBetween: 30,
  //   loop: 'true',
});
