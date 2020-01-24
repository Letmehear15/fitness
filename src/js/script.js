$(document).ready(function(){
    $('.slider__items').slick({
        dots: false,
        speed: 300,
        adaptiveHeight: true,
        prevArrow: '<button class="slider__left"><img src="./icon/arrow_left.png" alt="arrow_left"></button>',
        nextArrow: '<button class="slider__right"><img src="./icon/arrow_right.png" alt="arrow_right"></button>',
      });
  });