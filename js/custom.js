(function ($) {
  "use strict";

  //모바일 네비
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").hide()) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Header scroll시 class 추가
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  //배너 이미지 슬라이드
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });

  //post 이미지 슬라이드
  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is > 0px
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is > 600px
      601: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  //partner 슬라이드
  var swiper = new Swiper('.swiper-container3', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is > 0px
      0: {
        slidesPerView: 1,
        spaceBetween: 30
      },

      // when window width is > 480px
      481: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is > 768px
      769: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      // when window width is > 960px
      961: {
        slidesPerView: 4,
        spaceBetween: 50
      }
    }
  });

  // 숫자 카운팅
  var a = 0;
  $(window).scroll(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter_value').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },
          {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            }
          });
      });
      a = 1;
    }
  });

  //갤러리 탭
  var pjBtn = $(".category > button");
  var pjCont = $(".grid_wrap > div");

  pjCont.hide().eq(0).show();

  pjBtn.click(function (e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    pjBtn.removeClass("active");
    target.addClass("active");
    pjCont.css("display", "none");
    pjCont.eq(index).css("display", "block");
  });


  // nav active
  jQuery(function ($) {
    var topMenuHeight = $("#header").outerHeight();
    $("#header").menuScroll(topMenuHeight);
  });

  jQuery.fn.extend({
    menuScroll: function (offset) {
      var topMenu = this;
      var topOffset = offset ? offset : 0;
      var menuItems = $(topMenu).find("a");
      var lastId;

      var scrollItems = $(menuItems).map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
          return item;
        }
      });

      $(topMenu).on("click", "a", function (e) {
        var href = $(this).attr("href");

        var offsetTop = href === "#" ? 0 : $(href).offset().top - topOffset;

        $('html, body').stop().animate({
          scrollTop: offsetTop
        }, 300);
        e.preventDefault();

      });

      $(window).scroll(function () {
        var nm = $("html").scrollTop();
        var nw = $("body").scrollTop();
        var fromTop = (nm > nw ? nm : nw) + topOffset;

        var current = $(scrollItems).map(function () {
          if ($(this).offset().top <= fromTop)
            return this;
        });

        current = current[current.length - 1];
        var id = current && current.length ? current[0].id : "";
        if (lastId !== id) {
          lastId = id;
          // Set/remove active class
          $(menuItems)
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
      });
    }
  });

  jQuery(function ($) {
    $(".youtube-link").grtyoutube();
  });


})(jQuery);  