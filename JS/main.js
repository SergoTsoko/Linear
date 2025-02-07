
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-list-mob").classList.toggle("open");
  document.querySelector("body").classList.toggle("no-scroll");
  document.querySelector("body").classList.toggle("bg-color");


});

document.querySelector(".nav-list-mob").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector("body").classList.toggle("no-scroll");
  document.querySelector("body").classList.toggle("bg-color");

  document.querySelector(".burger").classList.toggle("active");
});
// document.querySelector(".closer").addEventListener("click", function () {
//   this.classList.toggle("open1");
//   document.querySelector("body").classList.toggle("no-scroll");
//   document.querySelector(".nav-list-mob").classList.toggle("open");

//   document.querySelector(".burger").classList.toggle("active");
// });



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 1,
  initialSlide: 0,
 
  pagination: {
    el: ".swiper-scrollbar",

  },
  
 
  // breakpoints: {
  //   500: {
  //     slidesPerView: 3,
  //     spaceBetween: 1,
  //   },
  // },
  // breakpoints: {
  //   400: {
  //     slidesPerView: 2,
  //     spaceBetween: 1,
  //   },
  // },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 1,
  //   },
  // },
});

