var mainNavToggle = document.querySelector(".main-nav__toggle");
var listToggle = document.querySelector(".main-nav__list");

mainNavToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainNavToggle.classList.toggle("main-nav__toggle--closed");
  mainNavToggle.classList.toggle("main-nav__toggle");
  listToggle.classList.toggle("site-list--closed");
  listToggle.classList.toggle("site-list");
});
