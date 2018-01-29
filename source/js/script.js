// Переменные для открытия и закрытия верхнего меню в мобильной версии

var mainNavToggle = document.querySelector(".main-nav__toggle");
var listToggle = document.querySelector(".main-nav__list");
var logoToggle = document.querySelector(".page-header__logo");

// Реализация открытия и закрытия верхнего меню в мобильной версии

mainNavToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainNavToggle.classList.toggle("main-nav__toggle--closed");
  listToggle.classList.toggle("site-list--closed");
  logoToggle.classList.toggle("page-header__logo--mobile");
});
