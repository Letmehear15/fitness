$(document).ready(function(){
    $('.slider__items').slick({
        dots: false,
        speed: 300,
        adaptiveHeight: true,
        prevArrow: '<button class="slider__left"><img src="./icon/arrow_left.png" alt="arrow_left"></button>',
        nextArrow: '<button class="slider__right"><img src="./icon/arrow_right.png" alt="arrow_right"></button>',
      });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__items').removeClass('catalog__items_active').eq($(this).index()).addClass('catalog__items_active');
    });

   function scroll(cl) {
    $(cl).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog__content').eq(i).toggleClass('catalog__content_active');
            $('.catalog__extra').eq(i).toggleClass('catalog__extra_active');
        });
    });
   };
    scroll('.catalog__link');
    scroll('.catalog__back');
  });