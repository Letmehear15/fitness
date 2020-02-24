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

    function valid(el) {
        $(el).validate({
            rules: {
             name: 'required',
             email: {
                 required: true,
                 email: true
             },
             phone: 'required'
            },
            messages: {
             name: "Введите свое имя",
             email: {
                 required: 'Введите email',
                 email: "Введите корректный email"
             },
             phone: {
                 required: 'Введите номер телефона',
                 phone: 'Введите корректный номер телефона'
             }
            }
        })
    }
    $("input[name=phone]").mask("+7(999) 999-99-99");

    valid('#consiltation');
    valid('#callback');
    valid("#order");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: "./mailer/smart.php",
            data: $(this).serialize()
          }).done(function() {
            $( this ).find('input').val('');


            $('form').trigger('reset');
          }).fail(function(){
            alert('fail');
          });
          return false;
    })
  });
