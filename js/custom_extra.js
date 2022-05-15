$(function() {
  "use strict";
  
  // Preloader
  var loader = $(".loader");
  var wHeight = $(window).height();
  var wWidth = $(window).width();
  var o = 0;
  loader.css({
      top: wHeight / 2 - 2.5,
      left: wWidth / 2 - 200
  })
  do {
      loader.animate({
          width: o
      }, 10)
      o += 3;
  } while (o <= 400)
  if (o === 402) {
      loader.animate({
          left: 0,
          width: '100%'
      })
      loader.animate({
          top: '0',
          height: '100vh'
      })
  }
  setTimeout(function() {
      $(".loader-wrapper").fadeOut('fast');
      (loader).fadeOut('fast');
  }, 3500);
  
  //  YouTubePopUp
  $("a.vid").YouTubePopUp();
  
  // Testimonials owlCarousel
  $('.testimonials .owl-carousel').owlCarousel({
      loop:true,
      margin: 30,
      mouseDrag:true,
      autoplay: false,
      dots: true,
      nav: false,
      navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
  
  // Projects owlCarousel
  $('.projects .owl-carousel').owlCarousel({
      loop: true
      , margin: 30
      , mouseDrag: true
      , autoplay: false
      , dots: true
      , autoplayHoverPause:true
      , smartSpeed: 1500
      , responsiveClass: true
      , responsive: {
          0: {
              items: 1
          , }
          , 600: {
              items: 2
          }
          , 1000: {
              items: 2
          }
      }
  });
  
  // Blog Home owlCarousel
  $('.bauen-blog .owl-carousel').owlCarousel({
      loop: true
      , margin: 30
      , mouseDrag: true
      , autoplay: false
      , dots: true
      , responsiveClass: true
      , responsive: {
          0: {
              items: 1
          , }
          , 600: {
              items: 2
          }
          , 1000: {
              items: 2
          }
      }
  });

  // Team owlCarousel
  $('.team .owl-carousel').owlCarousel({
      loop: true
      , margin: 30
      , dots: false
      , mouseDrag: true
      , autoplay: false
      , responsiveClass: true
      , responsive: {
          0: {
              items: 1
          }
          , 600: {
              items: 2
          }
          , 1000: {
              items: 3
          }
      }
  });
  
  // Clients owlCarousel
  $('.clients .owl-carousel').owlCarousel({
      loop: true
      , margin: 30
      , mouseDrag: true
      , autoplay: true
      , dots: false
      , responsiveClass: true
      , responsive: {
          0: {
              margin: 10
              , items: 3
          }
          , 600: {
              items: 3
          }
          , 1000: {
              items: 5
          }
      }
  });
  
  // MagnificPopup
  $(".img-zoom").magnificPopup({
      type: "image"
      , closeOnContentClick: !0
      , mainClass: "mfp-fade"
      , gallery: {
          enabled: !0
          , navigateByImgClick: !0
          , preload: [0, 1]
      }
  })
  $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
      disableOn: 700
      , type: 'iframe'
      , mainClass: 'mfp-fade'
      , removalDelay: 300
      , preloader: false
      , fixedContentPos: false
  });
  
});


// Slider 
$(document).ready(function() {
  var owl = $('.header .owl-carousel');
  // Slider owlCarousel
  $('.slider .owl-carousel').owlCarousel({
      items: 1,
      loop:true,
      dots: false,
      margin: 0,
      autoplay: true,
      smartSpeed: 500,
       nav: true,
       navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
  });
  // Slider owlCarousel
  $('.slider-fade .owl-carousel').owlCarousel({
      items: 1,
      loop:true,
      dots: false,
      margin: 0,
      autoplay: true,
      smartSpeed: 500,
      animateOut: 'fadeOut',
      nav: true,
      navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
  });
  owl.on('changed.owl.carousel', function(event) {
      var item = event.item.index - 2;     // Position of the current item
      $('h4').removeClass('animated fadeInUp');
      $('h1').removeClass('animated fadeInUp');
      $('p').removeClass('animated fadeInUp');
      $('.butn-light').removeClass('animated fadeInUp');
      $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
      $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
      $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
      $('.owl-item').not('.cloned').eq(item).find('.butn-light').addClass('animated fadeInUp');
  });
});

// Preloader page
paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
};
//Pace.on('done', function () {
//    $('#preloader').addClass("isdone");
//    $('.loading-text').addClass("isdone");
//});
Pace.on('done', function() {
$('#preloader').delay(500).fadeOut(800);
});

// Accordion Box
if ($(".accordion-box").length) {
  $(".accordion-box").on("click", ".acc-btn", function () {
    var outerBox = $(this).parents(".accordion-box");
    var target = $(this).parents(".accordion");

    if ($(this).next(".acc-content").is(":visible")) {
      //return false;
      $(this).removeClass("active");
      $(this).next(".acc-content").slideUp(300);
      $(outerBox).children(".accordion").removeClass("active-block");
    } else {
      $(outerBox).find(".accordion .acc-btn").removeClass("active");
      $(this).addClass("active");
      $(outerBox).children(".accordion").removeClass("active-block");
      $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
      target.addClass("active-block");
      $(this).next(".acc-content").slideDown(300);
    }
  });
}

