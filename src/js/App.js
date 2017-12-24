import $ from 'jquery';

$(".nav-list li").on('click', function() {
  let prev = $(this).closest('.nav-list');
  prev.find('li.current').removeClass('current');
  $(this).addClass('current');
});

// open nav menu
function open_menu() {
  $(".nav").css({'left' : '0px', 'z-index': '20'});
  $(".nav-btn").css('display' , 'none');
  $(".close-btn").css('display' , 'block');
}

$(".nav-btn").on("click", () => {
  open_menu();
  // if a link item is clicked while nav menu is open, it will close menu
  $(".list-item").on('click', close_menu);
});

// close nav menu
function close_menu() {
  $(".nav").css('left' , '-1260px');
  $(".nav-btn").css('display' , 'block');
  $(".close-btn").css('display' , 'none');
}

$(".close-btn").on('click', close_menu);
