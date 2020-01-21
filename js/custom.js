
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
})(jQuery);  