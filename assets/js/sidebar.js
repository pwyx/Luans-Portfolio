$(document).ready(function($) {
  $('.sidebar-button').sideMenu();
  (function($) {
    var $window = $(window), $html = $('.sidebar-button');

    $window.resize(function resize() {
      // #logo expanded width is 438
      // if ($window.width() < Math.max(768, 500 + $('.nav.navbar-nav.navbar-right').width())) {
      if ($window.width() < Math.max(1440)) {
      //   $('#logo').text('ASP');
        $('body').removeClass('push-body-toright');
        $('.sidebar-button').removeClass('active');
        $('.sidebar').removeClass('open');
        return $html.addClass('push-body');
      }
      // $('#logo').text('Autism Social Platform');
      $html.removeClass('push-body');
    }).trigger('resize');
  })(jQuery);

});

(function($) {
  $.fn.sideMenu = function() {

    $('body').addClass('push-body');

    $(this).click(function(e) {

      e.stopPropagation();
      $(this).toggleClass('active');
      $('.sidebar').toggleClass('open');

      if ($(this).is('.push-body')) {
        $('body').toggleClass('push-body-toright');
      }

      return;
    });

    var sideMenu = {
      close: function () {
        $('body').removeClass('push-body-toright');
        $('.sidebar').removeClass('open');
        $('.sidebar-button').removeClass('active');
      }
    }

    // if ($(window).width() <= 1440) {
      $(document).click(function() {
        sideMenu.close();
      });
    // }

    // $('.sidebar a').on('click',function() {
    //   sideMenu.close();
    // });

  };
})(jQuery);
