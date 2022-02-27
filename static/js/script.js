jQuery(function ($) {
   /*preloader*/
   jQuery(window).on("load", function () {
      $(".modex-loader").fadeOut("slow");
   });


   "use strict";

   /*Sticky Header*/
   $(window).on('scroll', function () {
      if ($(this).scrollTop() > 70) {
         $('header').addClass('header-appear');
      } else {
         $('header').removeClass('header-appear');
      }
   });
   if ($("body").hasClass("bottom-nav")) {
      var $fixednav = $(".bottom-nav .navbar-fixed-top");
      $(window).on("scroll", function () {
         var $heightcalc = $(window).height() - $fixednav.height();
         if ($(this).scrollTop() > $heightcalc) {
            $fixednav.addClass("navbar-bottom-top");
            $('.menu_bars').addClass('pushmenu-fixed');
         } else {
            $fixednav.removeClass("navbar-bottom-top");
            $('.menu_bars').removeClass('pushmenu-fixed');
         }
      });
   }
   $(".navbar-nav li a").on("click", function (event) {
      $(".navbar-collapse").collapse('hide');
   });

   /*Side Menu*/
   if ($("#menu_bars").length) {
      var $menuRight = $(".pushmenu-right");
      var $toggleright = $(".menu_bars.right");
      $toggleright.on("click", function () {
         $('.menu_bars').toggleClass("active");
         $menuRight.toggleClass("pushmenu-open");
         $("body").toggleClass("pushmenu-push-toLeft");
         $(".navbar").toggleClass("navbar-right_open");
         return false;
      });
      $(document).on('click', function () {
         $('.pushmenu').removeClass('pushmenu-open');
         $('.menu_bars').removeClass("active");

      });
   }

   /*Smooth Scroll*/
   $(".scroll").on('click', function (event) {
      event.preventDefault();
      $('html,body').animate({
         scrollTop: $(this.hash).offset().top
      }, 750);
   });


   /*Testimonial Owl*/
   $('.owl-testimonial').owlCarousel({
      dots: true,
      loop: true,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,

         },
         767: {
            items: 1,

         },
         1000: {
            items: 2,
         }
      }
   });

   /*Team Owl*/
   $("#team-member-slides").owlCarousel({
      items: 3,
      autoplay: false,
      loop: true,
      margin: 30,
      dots: false,
      nav: false,
      responsive: {
         1200: {
            items: 3,
         },
         900: {
            items: 3,
         },
         768: {
            items: 2,
         },
         320: {
            items: 1,
         },
      }
   });

   /*Counters*/
   $('.count').each(function () {
      $(this).prop('Counter', 0).animate({
         Counter: $(this).text()
      }, {
         duration: 2000,
         easing: 'swing',
         step: function (now) {
            $(this).text(Math.ceil(now));
         }
      });
   });

   /*Parallax*/
   if ($(window).width() > 992) {
      $(".parallax").parallaxie({
         speed: 0.55,
         offset: 0,
      });
   }

   /*Revolution Slider*/
   $("#banner-main").show().revolution({
      sliderType: "standard",
      sliderLayout: "fullscreen",
      scrollbarDrag: "true",
      dottedOverlay: "none",
      sliderDrag: true,
      sliderTouch: true,
      navigation: {
         keyboardNavigation: "on",
         keyboard_direction: "horizontal",
         mouseScrollNavigation: "off",
         mouseScrollReverse: "default",
         onHoverStop: "on",

         bullets: {
            style: "",
            enable: true,
            rtl: false,
            hide_onmobile: false,
            hide_onleave: false,
            hide_under: 767,
            hide_over: 9999,
            tmp: '',
            direction: "horizontal",
            space: 10,
            h_align: "center",
            v_align: "middle",
            h_offset: 0,
            v_offset: 40
         },
         arrows: {
            enable: false,
            hide_onmobile: true,
            hide_onleave: false,
            hide_under: 767,
            left: {
               h_align: "left",
               v_align: "center",
               h_offset: 20,
               v_offset: 30,
            },
            right: {
               h_align: "right",
               v_align: "center",
               h_offset: 20,
               v_offset: 30
            },
         },
         touch: {
            touchenabled: "on",
            touchOnDesktop: "off",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: true,
         }
      },
      viewPort: {
         enable: true,
         outof: "pause",
         visible_area: "90%"
      },
      responsiveLevels: [4096, 1024, 778, 480],
      gridwidth: [1140, 1024, 750, 480],
      gridheight: [700, 550, 500, 350],
      lazyType: "none",
      parallax: {
         type: "mouse",
         origo: "slidercenter",
         speed: 9000,
         levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
         simplifyAll: "off",
         nextSlideOnWindowFocus: "off",
         disableFocusListener: false,
      }
   });


   $("#rev_slider_2_2").show().revolution({
      sliderType: "standard",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {
         onHoverStop: "off"
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [600, 600, 500, 400],
      lazyType: "none",
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
         simplifyAll: "off",
         nextSlideOnWindowFocus: "off",     
         disableFocusListener: false 
      }


   });

   /*Cubeporfolio*/
   $('#js-grid-mosaic-flat').cubeportfolio({
      filters: '#js-filters-mosaic-flat',
      layoutMode: 'mosaic',
      sortByDimension: true,
      mediaQueries: [{
         width: 1500,
         cols: 6,
        }, {
         width: 1100,
         cols: 4,
        }, {
         width: 800,
         cols: 3,
        }, {
         width: 480,
         cols: 2,
         options: {
            caption: '',
            gapHorizontal: 15,
            gapVertical: 15,
         }
        }],
      defaultFilter: '*',
      animationType: 'fadeOutTop',
      gapHorizontal: 0,
      gapVertical: 0,
      gridAdjustment: 'responsive',
      caption: 'fadeIn',
      displayType: 'fadeIn',
      displayTypeSpeed: 100,

      // lightbox
      lightboxDelegate: '.cbp-lightbox',
      lightboxGallery: true,
      lightboxTitleSrc: 'data-title',
      lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

      plugins: {
         loadMore: {
            element: '#js-loadMore-mosaic-flat',
            action: 'click',
            loadItems: 3,
         }
      },
   });

});