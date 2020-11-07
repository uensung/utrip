var swiper = new Swiper('.section4 .swiper-container', {
  slidesPerView: 1,
  speed: 1000,
  navigation: {
    nextEl: '.section4 .swiper-button-next',
    prevEl: '.section4 .swiper-button-prev'
  }
});

$('#btnHamburger').on('click', function(){
  $('.header').toggleClass('active');
  if($('.header').hasClass('active')) {
    $('.main_menu').css('height', '100%');
    $('.main_menu').css('opacity', '0.9');
  } else {
    $('.main_menu').css('height', '0px');
    $('.main_menu').css('opacity', '0.3');
  }
});

$(".footer .select_area ul").on("click", ".init", function() {
  $(this).closest("ul").children('li:not(.init)').toggle();
});

var allOptions = $("ul").children('li:not(.init)');
$(".footer .select_area ul").on("click", "li:not(.init)", function() {
  allOptions.removeClass('selected');
  $(this).addClass('selected');
  $(".footer .select_area ul").children('.init').text($(this).html());
  $(this).closest("ul").children('li:not(.init)').toggle();
});
