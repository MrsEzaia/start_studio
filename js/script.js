const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 16,
  slidesPerView: "auto",
  slidesOffsetAfter: 70,
  centerSlides: true,
});

const swiperTodo = new Swiper("#swiper-todo", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  spaceBetween: 16,
  slidesPerView: "auto",
  slidesOffsetAfter: 70,
  centerSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
