// menubar toggle
const hamBurger = document.querySelector(".nav__hambrgr");
const navMenu = document.querySelector(".nav__list");
const close = document.querySelector(".nav__close")

hamBurger.addEventListener("click", function () {
  navMenu.classList.add("active");
  close.style.display = "block";
})

close.addEventListener("click", function () {
  navMenu.classList.remove("active");
})


// Testimonials section

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
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
    const accordionIcon = item.querySelector(".faq__img");
    const accordionMinusIcon = item.querySelector(".faq__minus-img");

    accordHead.addEventListener("click", function () {
      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        accordContent.style.display = "block";
        accordionIcon.style.display = "none";
        accordionMinusIcon.style.display = "block";
      } else {
        accordContent.style.display = "none";
        accordionIcon.style.display = "block";
        accordionMinusIcon.style.display = "none";
      }
      closeOtherAccordions(item);
    });
  });

  function closeOtherAccordions(currentItem) {
    accordItems.forEach(item => {
      if (item !== currentItem && item.classList.contains("active")) {
        item.classList.remove("active");
        item.querySelector(".faq__content").style.display = "none";
        item.querySelector(".faq__img").style.display = "block";
        item.querySelector(".faq__minus-img").style.display = "none";
      }
    });
  }
});
