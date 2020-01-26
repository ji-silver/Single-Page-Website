
(function($){
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

    // 숫자 카운팅
    $('.counter_value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {
        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });  

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

          // when window width is > 320px
          321: {
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
})(jQuery);  