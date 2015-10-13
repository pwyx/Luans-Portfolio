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

    // $('.sidebar').css({ 'min-height' : $(window).height() });

    // if( $('.sidebar .sidebar-menu').length == 0 )
    //   $('.sidebar').wrapInner("<div class='sidebar-menu'></div>");

    var innerHeight = $('.sidebar-menu').height();
    var documentHeight = $(document).height();

    $(window).scroll(function(){
      if( $(window).scrollTop() < documentHeight - innerHeight ){
        $('.sidebar').css({ 'position' : 'fixed', 'top' : '0' });
      } else {
        $('.sidebar').css({ 'position' : 'absolute', 'top' : documentHeight - innerHeight });
      }
    });

  }
}
