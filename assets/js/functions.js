$(document).ready(function() {

  // change label color on form focus
  $('form label textarea, form label input').focus(function() {
    $(this).siblings('span').addClass('input-focus');
  }).blur(function() {
    $('span').removeClass('input-focus');
  });

});

$(window).load(function($){
  header_scroll();
});

function header_scroll(){
  if( $(window).width() > 767 && !( $('html').hasClass('ie9') ) ){
  
    var windowHeight = $(window).height();
    var sidebarHeight = $('.sidebar').height();
    var documentHeight = $(document).height();

    // $('.sidebar').css({ 'min-height' : windowHeight });

    $(window).scroll(function(){
      if($(window).scrollTop() < documentHeight - sidebarHeight){
        $('.sidebar').css({ 'position' : 'fixed', 'top' : '0' });
      } else {
        $('.sidebar').css({ 'position' : 'absolute', 'top' : documentHeight - sidebarHeight });
      }
    });

  }
}