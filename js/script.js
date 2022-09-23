
jQuery(document).ready(function ($) {
  $('.menu__icon').click(function (menu) {

    $('.menu__icon, .menu__body, .header__logo').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.women').click(function (menu) {
    $('.submenu-women').toggleClass('active');
  });

  $('.title-women').click(function (menu) {
    $('.submenu-women').toggleClass('active');
  });

  $('.clothing').click(function (menu) {
    $('.submenu-clothing').toggleClass('active');
  });
  
    $('.title-clothing').click(function (menu) {
    $('.submenu-clothing').toggleClass('active');
  });




  $(".footer-inner__title").removeClass("active");
  $(".footer-inner__title").on("click", function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass("active");
      $(this).siblings('.footer-inner__list').slideUp(200);
    } else {

      $(".footer-inner__title").removeClass("active");
      $(this).addClass("active");
      $('.footer-inner__list').slideUp(200);
      $(this).siblings('.footer-inner__list').slideDown(200);
    }
  });


});


