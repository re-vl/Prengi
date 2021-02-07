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

   // форма подтверждения и отправка почты
   /* $("form").submit(function (e) {
      e.preventDefault(); //отменяем стандарт поведение броузера, будет без перезагрузки
      $.ajax({
         //type: "POST",
         //url: "mailer/smart.php",
         //data: $(this).serialize(),
      }).done(function () {
         $(this).find("input").val("");
         $("#form1").fadeOut();
         $(".overlay, #thanks").fadeIn("slow"); //показываем форму благодарности
         $("form").trigger("reset");
      });
      return false;
   });
*/
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
let btnPrev = document.querySelector("#gallery .buttons .prev");
let btnNext = document.querySelector("#gallery .buttons .next");
let images = document.querySelectorAll("#gallery .photos img");

let i = 0; // номер текущей картинки, на экране

btnPrev.onclick = function () {
   images[i].style.display = "none";
   i = i - 1;
   if (i < 0) {
      i = images.length - 1;
   }
   images[i].style.display = "block";
};

btnNext.onclick = function () {
   images[i].style.display = "none";
   i = i + 1;
   if (i >= images.length) {
      i = 0;
   }
   images[i].style.display = "block";
};
// slider end
