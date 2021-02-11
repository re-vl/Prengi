$(document).ready(function () {
   // Модальные окна

   $("[data-modal=general]").on("click", function () {
      $(".overlay, #form1").fadeIn("slow"); // появление формы
   });
   //сокрытие всех форм по крестику
   $(".modal__close").on("click", function () {
      $(".overlay, #form1, #thanks").fadeOut("slow");
   });

   //валидация форм
   function validateForms(form) {
      $(form).validate({
         rules: {
            name: {
               required: true,
               minlength: 2,
            },
            phone: "required",
            email: {
               required: true,
               email: true,
            },
         },
         messages: {
            name: {
               required: "Введите ваше имя",
               minlength: jQuery.validator.format(
                  "Введите {0} или более символа!"
               ),
            },
            phone: "Введите номер вашего телефона",
            email: {
               required: "Введите вашу почту",
               email: "Неправильно введен адрес почты",
            },
         },
      });
   }
   validateForms("#form1 form");
   validateForms("#consultForm form");
   validateForms("#questForm form");

   $("input[name=phone]").mask("+7 (999) 999-99-99");

   // Скролл в начало по иконке pageup

   $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
         $(".pageup").fadeIn();
      } else {
         $(".pageup").fadeOut();
      }
   });

   $("a[href^='#up']").click(function () {
      const _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
      return false;
   });
});

// slider
$(function () {
   // Owl Carousel
   let owl = $(".owl-carousel");
   owl.owlCarousel({
      items: 1,
      margin: 10,
      loop: true,
      nav: true,
   });
});
// slider end
