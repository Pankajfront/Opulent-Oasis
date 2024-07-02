// menubar toggle

const hamBurger = document.querySelector(".nav__hambrgr");
const navMenu = document.querySelector(".nav__list");
const close = document.querySelector(".nav__close")

hamBurger.addEventListener("click", function () {
  navMenu.classList.add("active");
  close.style.display = "block";
  hamBurger.style.display = "none";
})

close.addEventListener("click", function () {
  navMenu.classList.remove("active");
  hamBurger.style.display = "block";
  close.style.display = "none";
})




var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});

// project section 
var swiper = new Swiper(".projectSwiper", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },

});

// accordion 

const accordion = document.addEventListener("DOMContentLoaded", function () {
  const accordItems = document.querySelectorAll(".faq__items");

  accordItems.forEach(item => {
    const accordHead = item.querySelector(".faq__head");
    const accordContent = item.querySelector(".faq__content");
    const accordionIcon = accordHead.querySelector(".accordion__img");

    accordHead.addEventListener("click", function () {

      item.classList.toggle("active");


      if (item.classList.contains("active")) {
        accordionIcon.src = "./assets/images/minus.svg";
      } else {
        accordionIcon.src = "./assets/images/plus.svg";
      }


      if (accordContent.style.display === "block") {
        accordContent.style.display = "none";
      } else {

        closeAllAccordions();
        accordContent.style.display = "block";
      }
    });
  });
});

