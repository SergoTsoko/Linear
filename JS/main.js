
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-list-mob").classList.toggle("open");
  document.querySelector("body").classList.toggle("no-scroll");
});
document.querySelector(".navigacia").addEventListener("click", function () {
  document.querySelector(".head").classList.toggle("open");
  document.querySelector("body").classList.toggle("no-scroll");
});
document.querySelector(".navigacia").addEventListener("click", function () {
  document.querySelector(".burger").classList.toggle("active");

});


