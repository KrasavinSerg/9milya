$(document).ready(function(){
  
  $('.toggle').click(function() {
    $('.nav__mobile').toggleClass('nav__mobile--open');
  });
});

$(window).on("load resize", function(){
  var width = $(document).width();
  
  if (width > 768) {
    $('.slick').slick('unslick');
  } else {
    $('.slick').not('.slick-initialized').slick({  
      arrows: true
    });
  }
});
