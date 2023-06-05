// const swiper = new Swiper('.swiper', {
//  direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

// });

var swiper = new Swiper(".mySwiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // slidesPerView: 2,
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is <= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is <= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});
