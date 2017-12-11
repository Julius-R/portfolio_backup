import $ from 'jquery';

// open nav menu
$(".nav-btn").on("click", () => {
  $(".nav").css({'left' : '0px', 'z-index': '20'});
  $(".nav-btn").css('display' , 'none');
  $(".close-btn").css('display' , 'block');
});

// close nav menu
$(".close-btn").on('click', () => {
  $(".nav").css('left' , '-1260px');
  $(".nav-btn").css('display' , 'block');
  $(".close-btn").css('display' , 'none');
});
