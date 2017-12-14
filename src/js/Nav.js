import $ from 'jquery';


$('.mobile-btn').on('click', function(){
  $('.nav-list-item').slideToggle(500).on('click',
function(){
  $('.nav-list-item').slideUp();
});
});


export default Nav;
