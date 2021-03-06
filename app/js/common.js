$(function() {

    // $('.img_wrap > img').equalHeights();
    // $('.stock_wrap > .alw_bot').equalHeights();
    // $('.stock_wrap > p').equalHeights();
    // $('.stock_wrap').equalHeights();

		$('#my-menu').mmenu({
			extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-left'],
			navbar: {
			title: '<img src="img/svg/logo.svg" alt="logo comfort">'
			}
		});



  // AOS animation 

  if ($(window).width() > 768) {

      // main page

    $('.ishome .circle').attr('data-aos', 'zoom-in').attr('data-aos-duration', '1000').attr('data-aos-delay', '500');
    $('.ishome .dec_fig2').attr('data-aos', 'zoom-in').attr('data-aos-duration', '1000').attr('data-aos-delay', '800');
    $('.ishome .dec_fig').attr('data-aos', 'zoom-in').attr('data-aos-duration', '1000').attr('data-aos-delay', '1000');

      // about page

    $('.prog_title .title_wrap').attr('data-aos', 'fade-right').attr('data-aos-duration', '1500');
    $('.prog_title .img_wrap').attr('data-aos', 'flip-right').attr('data-aos-delay', '200').attr('data-aos-duration', '1000');
    $('.circles_wrap .wrap_for_circles .circle_around:nth-child(3)').attr('data-aos', 'zoom-in').attr('data-aos-delay', '600').attr('data-aos-duration', '1000');
    $('.circles_wrap .wrap_for_circles .circle_around:nth-child(2)').attr('data-aos', 'zoom-in').attr('data-aos-delay', '900').attr('data-aos-duration', '1000');
    $('.circles_wrap .wrap_for_circles .circle_around:nth-child(1)').attr('data-aos', 'zoom-in').attr('data-aos-delay', '1100').attr('data-aos-duration', '1000');
    $('.prog_title .img_wrap_all .circle_alone').attr('data-aos', 'zoom-in').attr('data-aos-delay', '1000').attr('data-aos-duration', '1000');
    $('.img_container:nth-child(1)').attr('data-aos', 'zoom-in').attr('data-aos-duration', '1000');
    $('.circles_descr .it1').attr('data-aos', 'fade-up').attr('data-aos-duration', '1000');
    $('.circles_descr .it2').attr('data-aos', 'fade-down').attr('data-aos-delay', '100').attr('data-aos-duration', '1000');
    $('.circles_descr .it3').attr('data-aos', 'fade-up').attr('data-aos-delay', '200').attr('data-aos-duration', '1000');
    $('.circles_descr .it4').attr('data-aos', 'fade-down').attr('data-aos-delay', '300').attr('data-aos-duration', '1000');
    $('.circles_descr .it5').attr('data-aos', 'fade-up').attr('data-aos-delay', '400').attr('data-aos-duration', '1000');
    $('.slider_accomp ').attr('data-aos', 'zoom-in').attr('data-aos-duration', '1000');
    $('.flat_examples_wrap .flat_simple').attr('data-aos', 'flip-left').attr('data-aos-duration', '1000');
    $('.flat_examples_wrap .flat_all').attr('data-aos', 'flip-right').attr('data-aos-duration', '1000');

    // mainplanirovki page

    $('.plan_title').attr('data-aos', 'fade-down').attr('data-aos-duration', '1500');
    $('.after_title').attr('data-aos', 'fade-up').attr('data-aos-delay', '200').attr('data-aos-duration', '1600');
  
  }





  var $windWidth = $(window).width();
  var paragPlan = '12 предл...'; // change this for main plan
  var flatTitle = $('.flat_type').text().substr(0, 3);


  		var $menuItem = $('.nav_cnt > .menu_item');
  		$('.nav_cnt').append('<div class="hide_menu"></div>');
  		$('.nav_cnt').append('<div class="hide_menu1"></div>');
  		// $('.nav_cnt').append('<div class="hide_menu2"></div>');

  if ($windWidth >= 1920) {
     $('.blue_sect_dec').css('background-size', 'cover');
  } 

  /*** main_news_cut **/

  var main_new = $('.main_news_descr .sub_des').text();
  var cut_txt = main_new.substr(0, 150);
  var cut_txt2 = main_new.substr(0, 90);

  if ($windWidth <= 1280) {
      $menuItem.slice(4).appendTo('.hide_menu');
      $('.slide_big').remove();
      $('.qotes_title').text('Есть возможность приобрести квартиру в рассрочку.');
      $('.s_smart > .smart_title').text('Преимущества "смарт квартиры" - ЖК Комфорт');
      $('.main_news_descr .sub_des').text(cut_txt + '...');
  } 

  if ($windWidth >= 1280) {
      $('.slide_medium').remove();
  } 

  if ($windWidth <= 1024) {
      $menuItem.slice(3).appendTo('.hide_menu');
      $('.s_prog_title > .blue_sect_dec').css('background-image', 'url(../img/decor_about.svg)');
      $('.form_title > p').text('Уточните детали у нашего менеджера');
      $('.main_news_descr .sub_des').text(cut_txt2 + '...');
  } 

  if ($windWidth >= 1024) {
      $('.s_prog_title > .blue_sect_dec').css('background-image', 'url(../img/sect_dec.png)');
      $('.slide_small').remove();
  } 

  if ($windWidth <= 768) {
  		$menuItem.slice(0, 1).appendTo('.hide_menu');
      $('.slide_medium').remove();
      $('.flat_link > p').html(paragPlan);
      $('.flat_type').html(flatTitle + '.'); 
      $('#infr_cut').text('обсл. организация');
  }

  if ($windWidth <= 570) {
  		$menuItem.slice(0).appendTo('.hide_menu');
  }

	var $main = $('.main-slider');

  $main.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      rows: 0,
      dots: true,
      customPaging: function(slider, i) {
          $(slider.$slides[i]).data();
          return '<button>' + '0' + (i + 1) + '</button>';
      },
      prevArrow: false,
      nextArrow: '<button type="button" class="slick-next"></button>',
      fade: true,
      cssEase: 'linear',
      speed: 500,
      // autoplay: true,
      autoplaySpeed: 5000
  });

  $('.slider_news').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '.new_pr',
      nextArrow: '.new_n',
      rows: 0,
      fade: true,
      cssEase: 'linear',
      speed: 500
  });

  $('.hod_stroyki_wrap .slider_all').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '.str_p',
      nextArrow: '.str_n',
      rows: 0,
      fade: true,
      cssEase: 'linear',
      speed: 500
  });

  $('.slider_adv1_init').slick({
    slidesToScroll: 4,
    slidesToShow: 4,
    prevArrow: '.s_outside .slide_prev',
    nextArrow: '.s_outside .slide_next',
    infinite: false,
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    ]
  });

  $('.ter_slide_wr').slick({
    slidesToScroll: 2,
    slidesToShow: 2,
    prevArrow: '.s_teritory .slide_prev',
    nextArrow: '.s_teritory .slide_next',
    infinite: true,
    responsive: [
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    ]
  });

  $('.slider_news').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    if (i == 1) {
      $('.info_news_wrap .owl_nav .slide_prev').css('border-color', '#d6d8d9');
      $('.info_news_wrap .owl_nav .slide_prev > img').attr('src', 'img/hr_arr_l.svg');
    } else {
      $('.info_news_wrap .owl_nav .slide_prev > img').attr('src', 'img/orr_arr_left.svg');
      $('.info_news_wrap .owl_nav .slide_prev').css('border-color', '#f97b2d');
    }
    if (i == slick.slideCount) {
      $('.info_news_wrap .owl_nav .slide_next > img').attr('src', 'img/hr_arr_r.svg');
      $('.info_news_wrap .owl_nav .slide_next').css('border-color', '#d6d8d9');
    } else {
      $('.info_news_wrap .owl_nav .slide_next > img').attr('src', 'img/orr_arr_right.svg');
      $('.info_news_wrap .owl_nav .slide_next').css('border-color', '#f97b2d');
    }
    $('.curr_slide').text(i + '/' + slick.slideCount);
  });

  /*** HOD STROYKI SLIDE ***/ 

  $('.hod_stroyki_wrap .slider_all').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    if (i == 1) {
      $('.hod_stroyki_wrap .owl_nav .slide_prev').css('border-color', '#d6d8d9');
      $('.hod_stroyki_wrap .owl_nav .slide_prev > img').attr('src', 'img/hr_arr_l.svg');
    } else {
      $('.hod_stroyki_wrap .owl_nav .slide_prev > img').attr('src', 'img/orr_arr_left.svg');
      $('.hod_stroyki_wrap .owl_nav .slide_prev').css('border-color', '#f97b2d');
    }
    if (i == slick.slideCount) {
      $('.hod_stroyki_wrap .owl_nav .slide_next > img').attr('src', 'img/hr_arr_r.svg');
      $('.hod_stroyki_wrap .owl_nav .slide_next').css('border-color', '#d6d8d9');
    } else {
      $('.hod_stroyki_wrap .owl_nav .slide_next > img').attr('src', 'img/orr_arr_right.svg');
      $('.hod_stroyki_wrap .owl_nav .slide_next').css('border-color', '#f97b2d');
    }
  });

  $('.slider_accomp').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide == 4 ? 2 : 1);
    var j = (currentSlide ? currentSlide : 0) + 1;
    var k = slick.slideCount - 3;

    if ($(window).width() < 1280) {
      k = slick.slideCount - 1;
      $('#all_sl').text('3');
      if (currentSlide == 3) {
        i = 2;
      } else if(currentSlide == 6) {
        i = 3
      } else {
        i = 1;
      }
    } 
     
    if ($(window).width() < 1024) {
      k = slick.slideCount - 1;
      $('#all_sl').text('4');
      if (currentSlide == 2) {
        i = 2;
      } else if(currentSlide == 4) {
        i = 3
      } else if(currentSlide == 6) {
        i = 4
      } else {
        i = 1;
      }
      
    }
    
    if ($(window).width() < 768) {
      $('#all_sl').text('8');
      k = slick.slideCount;
      i = j;
    }

    $('#change_numb').text(i);

    if (j == 1) {
      $('.s_accomplishment .owl_nav .slide_prev').css('border-color', '#d6d8d9');
      $('.s_accomplishment .owl_nav .slide_prev > img').attr('src', 'img/hr_arr_l.svg');
    } else {
      $('.s_accomplishment .owl_nav .slide_prev > img').attr('src', 'img/orr_arr_left.svg');
      $('.s_accomplishment .owl_nav .slide_prev').css('border-color', '#f97b2d');
    }
    if (j == k) {
      $('.s_accomplishment .owl_nav .slide_next > img').attr('src', 'img/hr_arr_r.svg');
      $('.s_accomplishment .owl_nav .slide_next').css('border-color', '#d6d8d9');
    } else {
      $('.s_accomplishment .owl_nav .slide_next > img').attr('src', 'img/orr_arr_right.svg');
      $('.s_accomplishment .owl_nav .slide_next').css('border-color', '#f97b2d');
    }
  });


  $('.slider_adv1_init').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide == 4 ? 2 : 1);
    var j = (currentSlide ? currentSlide : 0) + 1;
    var k = slick.slideCount - 3;

    if ($(window).width() < 1280) {
      k = slick.slideCount - 1;
      $('#all_sl').text('3');
      if (currentSlide == 3) {
        i = 2;
      } else if(currentSlide == 6) {
        i = 3
      } else {
        i = 1;
      }
    } 
     
    
    if ($(window).width() < 570) {
      $('#all_sl').text('8');
      k = slick.slideCount;
      i = j;
    }

    $('#change_numb').text(i);

    if (j == 1) {
      $('.s_outside .slide_prev').css('border-color', '#d6d8d9');
      $('.s_outside .slide_prev > img').attr('src', 'img/hr_arr_l.svg');
    } else {
      $('.s_outside .slide_prev > img').attr('src', 'img/orr_arr_left.svg');
      $('.s_outside .slide_prev').css('border-color', '#f97b2d');
    }
    if (j == k) {
      $('.s_outside .slide_next > img').attr('src', 'img/hr_arr_r.svg');
      $('.s_outside .slide_next').css('border-color', '#d6d8d9');
    } else {
      $('.s_outside .slide_next > img').attr('src', 'img/orr_arr_right.svg');
      $('.s_outside .slide_next').css('border-color', '#f97b2d');
    }
  });


  // $('.s_prog_about .arr_prev, .s_prog_about .arr_next').click(function() {
  //   alert('click');
  // })


  $('.slider_detals').slick({
    prevArrow: '.s_prog_about .slide_prev',
    nextArrow: '.s_prog_about .slide_next',
    infinite: false,
    responsive: [{

      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        // infinite: true,
        row: 2
      }

    },
    {

      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        // dots: true,
        row: 1
      }

    },
    {

      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        // dots: true,
        row: 1
      }

    },
    ]
  });


  $('.slider_accomp').slick({
    slidesToScroll: 4,
    slidesToShow: 4,
    prevArrow: '.s_accomplishment .slide_prev',
    nextArrow: '.s_accomplishment .slide_next',
    infinite: false,
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    ]
  });

  $('.slider_flats').slick({
    slidesToShow: 3,
    centerPadding: '80px',
    prevArrow: '.slide_prev',
    nextArrow: '.slide_next',
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
  });

  $('.cond_slider').slick({
    slidesToShow: 3,
    // centerPadding: '80px',
    prevArrow: '.cond_pr',
    nextArrow: '.cond_next',
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
  });


  // $('.slider_accomp').on('afterChange', function(event, slick, currentSlide) {})
  // $('.slider_accomp').on('afterChange', function(event, slick, currentSlide) {})
  // $('.slider_detals').on('beforeChange', function(event, slick, currentSlide) {})


   $('.triger_1').click(function() {
      if(!$('.triger_2').hasClass('active_trig')) { 
        $('.triger_2').addClass('active_trig');
        $(this).removeClass('active_trig');
        $('.flat_simple').css({'transform' : 'scale(1)', 'top' : '0', 'z-index' : '22'});
        $('.flat_all').css({'transform' : 'scale(0.9)', 'top' : '-50px', 'z-index' : '20'});
      } else {
       $('.triger_2').removeClass('active_trig');
        $(this).addClass('active_trig');
        $('.flat_simple').css({'transform' : 'scale(1)', 'top' : '0', 'z-index' : '22'});
        $('.flat_all').css({'transform' : 'scale(0.9)', 'top' : '-50px', 'z-index' : '20'}); 
      }
    
  });

  $('.triger_2').click(function() {
    if($('.triger_1').hasClass('active_trig')) { 
      $(this).addClass('active_trig');
      $('.triger_1').removeClass('active_trig');
      $('.flat_all').css({'transform' : 'scale(1)', 'top' : '0', 'z-index' : '22'});
      $('.flat_simple').css({'transform' : 'scale(0.9)', 'top' : '-50px', 'z-index' : '20'});
    }
  });

  $('form :submit').on('click', function () {
      $('input:required').each(function () {
          if (!$(this).val()) $(this).addClass('incomplete');
      });
  });

  $('input:required').on('input', function () {
      $(this).removeClass('incomplete');
  });

  $('input[name=phone]').mask("+38 (999) 999-9999", {
      completed: function () {
          $(this).removeClass('incomplete');
      }
  });

  $('input[name=name]').on('input', function () {
      $(this).val($(this).val().replace(/[0-9\\/^$.|?*+\-_()]/g, ""));
  });



  $('.addr').click(function() {

    if($(this).parent().find('.add_info_wrap').css('display') != 'none') {
      $(this).find('img').attr('src', 'img/svg/arr_d.svg');
    } else {
      $(this).find('img').attr('src', 'img/svg/arr_u.svg');
    }
    $(this).parent().find('.add_info_wrap').slideToggle();   
  })


  // POPUP 

  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  // FORM CALL

  $('.input-container input').blur(function(event) {
    var inputVal = this.value;
    
    if (inputVal) {
      this.classList.add('value-exists');
    } else {
      this.classList.remove('value-exists');
    }
  });


  // SCROLL SMOOTH

  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });



});

$(window).on('load', function() {
		$('.loader-wrap').fadeOut();
    AOS.init({
      once: true
    });
});

