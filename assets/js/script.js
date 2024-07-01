
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// project section 
var swiper = new Swiper(".projectSwiper", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      // spaceBetween: 50,
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

