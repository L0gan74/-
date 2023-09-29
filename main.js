const burgerMenu = document.querySelector(".burger-menu");
const openBurger = document.querySelector(".open-burger");
const menuContent = document.querySelector(".menu-content");
const closeBurger = document.querySelector(".close-burger");
openBurger.addEventListener("click", function () {
  burgerMenu.style.display = "block";
  document.body.classList.add("no-scroll");
});
closeBurger.addEventListener("click", function () {
  burgerMenu.style.display = "none";
  document.body.classList.remove("no-scroll");
});
var swiper = new Swiper(".mainSwiper", {
  loop: !0,
  pagination: { el: ".swiper-pagination", clickable: !0 },
  autoplay: { delay: 5000, disableOnInteraction: !1 },
  speed: 800,
});
var swiper = new Swiper(".worthSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    640: { slidesPerView: 1, spaceBetween: 20 },
    992: { slidesPerView: 2, spaceBetween: 15 },
    1320: { slidesPerView: 3, spaceBetween: 15 },
    1540: { slidesPerView: 3, spaceBetween: 31 },
  },
});
var swiper = new Swiper(".assortmentPopupSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    340: { slidesPerView: 1, spaceBetween: 0 },
    992: { slidesPerView: 2, spaceBetween: 15 },
    1320: { slidesPerView: 3, spaceBetween: 15 },
    1540: { slidesPerView: 3, spaceBetween: 31 },
  },
});
var swiper = new Swiper(".assortmentSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
const openButtons = document.querySelectorAll(".openButton");
const popups = document.querySelectorAll(".popupContainer");
const overlay = document.querySelector(".overlay");
const closeButtons = document.querySelectorAll(".closeButton");
function openPopup(index) {
  popups[index].style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
}
function closePopup(index) {
  popups[index].style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
}
openButtons.forEach((button, index) => {
  button.addEventListener("click", () => openPopup(index));
});
closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => closePopup(index));
});
overlay.addEventListener("click", () => {
  popups.forEach((popup, index) => {
    if (popup.style.display === "block") {
      closePopup(index);
    }
  });
});
const textContainer = document.getElementById("textContainer");
window.addEventListener("load", checkScroll);
window.addEventListener("resize", checkScroll);
function checkScroll() {
  if (textContainer.scrollHeight > 260) {
    textContainer.classList.add(".scrollable");
  } else {
    textContainer.classList.remove(".scrollable");
  }
}
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("accordion-active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
const buttons = document.querySelectorAll(".toggle-button");
const blocks = document.querySelectorAll(".jelly-item");
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    buttons.forEach((button) => {
      button.classList.remove("active-btn");
    });
    this.classList.add("active-btn");
    blocks.forEach((block) => {
      block.classList.remove("active");
    });
    blocks[index].classList.add("active");
  });
});
