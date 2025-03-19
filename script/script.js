
//mainbanner
var swiper = new Swiper(".mySwiper", {
  loop: true,
  // autoplay: {
  //   delay: 10000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".mySwiper .swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".mySwiper .swiper-button-next",
    prevEl: ".mySwiper .swiper-button-prev",
  },
});
// mainbanner


// content 3 - all product
var swiper = new Swiper(".mySwiper3", {
  loop: true,
  navigation: {
    nextEl: ".mySwiper3 .swiper-button-next",
    prevEl: ".mySwiper3 .swiper-button-prev",
  },
});
// product


//content 4 - megagine
$(function () {
  $('.tab>li').click(function () {
    //내가 클릭한 그것이 on이 되고 선택안된 형제는 off
    $(this).addClass('on').siblings().removeClass('on')
  });
});
// con4 tab menu


// <!-- content5 - con5 : sns slide -->
var swiper = new Swiper(".mySwiper5", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 4,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".mySwiper5 .swiper-pagination",
  },
});
// sns slide