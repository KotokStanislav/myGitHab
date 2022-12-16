/* slider */
const container = document.querySelector(".container");
const swiper = new Swiper('.hero__swiper', {
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }
});

/* tabs */
let howItemBtn = document.querySelectorAll(".how__item-btn");
let howContentItem = document.querySelectorAll(".how__content-item");

howItemBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    howItemBtn.forEach(function (btn) {
      btn.classList.remove('how__item-btn--active');
    });
    e.currentTarget.classList.add('how__item-btn--active');

    howContentItem.forEach(function (element) {
      element.classList.remove('how__content-item--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('how__content-item--active');
  });
});

/* accordion */
document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: true,
    openOnInit: [0],
    collapse: true
  });
});

/* burger menu */
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".header__link");

burger.addEventListener(`click`, function () {
  burger.classList.toggle(`burger--active`);
  menu.classList.toggle(`header__nav--active`);
  document.body.classList.toggle(`stop-scroll`);
});

menuLinks.forEach(function (el) {
  el.addEventListener(`click`, function () {
    burger.classList.remove(`burger--active`);
    menu.classList.remove(`header__nav--active`);
    document.body.classList.remove(`stop-scroll`);
  });
});

/* search button */
document.querySelector(".header-form-btn__open").addEventListener("click", function () {
  document.querySelector(".header__form").classList.add("header-form__active");
  this.classList.add("active");
});

document.querySelector(".header-form-btn__end").addEventListener("click", function () {
  document.querySelector(`input`).value = "";
  document.querySelector(`.header__form`).classList.remove("header-form__active");
  document.querySelector(".btn-reset").classList.remove("active");
  document.querySelector(".header__btn").classList.remove("active");
  document.querySelector(".form-btn__open").classList.remove(`active`);
});

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".header__form");
  if (!target.closest(".header__container")) {
    form.querySelector('input').value = "";
    form.classList.remove("header-form__active");
    document.querySelector("button").classList.remove(`active`);
  }
});

