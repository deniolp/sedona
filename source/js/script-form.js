// Переменные для открытия и закрытия верхнего меню в мобильной версии

var mainNavToggle = document.querySelector(".main-nav__toggle");
var listToggle = document.querySelector(".main-nav__list");
var logoToggle = document.querySelector(".page-header__logo");

// В случае наличия JS лишние классы ниже убираются

mainNavToggle.classList.remove("main-nav__toggle--nojs");
mainNavToggle.classList.remove("main-nav__toggle--closed");
listToggle.classList.add("site-list--closed");
logoToggle.classList.remove("page-header__logo--mobile");

// Реализация открытия и закрытия верхнего меню в мобильной версии

mainNavToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainNavToggle.classList.toggle("main-nav__toggle--closed");
  listToggle.classList.toggle("site-list--closed");
  logoToggle.classList.toggle("page-header__logo--mobile");
});

// Переменные для открытия модальных окон

var popupSuc = document.querySelector(".pop-up--success");
var popupFail = document.querySelector(".pop-up--failure");
var close = popupSuc.querySelector(".pop-up__button");
var ok = popupFail.querySelector(".pop-up__button--failure");
var form = document.querySelector("form");
var feedbackName = document.querySelector("#name");
var feedbackSurname = document.querySelector("#surname");
var feedbackTel = document.querySelector("#tel");
var feedbackEmail = document.querySelector("#email");
var feedbackField = document.querySelector("#feedback");
var storageName = localStorage.getItem("name");
var storageSurname = localStorage.getItem("surname");
var storageTel = localStorage.getItem("tel");
var storageEmail = localStorage.getItem("email");

// В помощь пользователю фокусы в поля и вставка имеющихся значений

if (storageName) {
  feedbackName.value = storageName;
  if (storageSurname) {
    feedbackSurname.value = storageSurname;
    if (storageTel) {
      feedbackTel.value = storageTel;
      if (storageEmail) {
        feedbackEmail.value = storageEmail;
        feedbackField.focus();
      } else
        feedbackEmail.focus();
    } else
      feedbackTel.focus();
  } else
    feedbackSurname.focus();
} else {
  feedbackName.focus();
};

// Реализация открытия и закрытия модальных окон

form.addEventListener("submit", function(evt) {
  if (!feedbackName.value || !feedbackSurname.value || !feedbackTel.value || !feedbackEmail.value || !feedbackField.value) {
    evt.preventDefault();
    popupFail.classList.add("pop-up--show-fail");
    console.log("Нужно заполнить поля");
  } else {
    localStorage.setItem("name", feedbackName.value);
    localStorage.setItem("surname", feedbackSurname.value);
    localStorage.setItem("tel", feedbackTel.value);
    localStorage.setItem("email", feedbackEmail.value);
    popupSuc.classList.add("pop-up--show");
    // Следующая строчка отменяет отправку формы
    evt.preventDefault();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSuc.classList.remove("pop-up--show");
});

ok.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupFail.classList.remove("pop-up--show-fail");
});
