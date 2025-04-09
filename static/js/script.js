const swiper1 = new Swiper('.mySwiper', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

const swiper2 = new Swiper('.mySwiper2', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  }
});
