jQuery(document).ready(function () {

  $('.nav>li').mouseover(function() {
    $(this).find('.sub').stop().slideDown(300);
  }).mouseout(function() {
    $(this).find('.sub').stop().slideUp(300);
  });

});


/* banner */
$(function(){
  var swiper = new Swiper('.swiper-container', {
     autoplay: {
         delay: 3000,//슬라이드 넘어가는 시간
         disableOnInteraction: false,
       },
       loop: true,//슬라이드 무한반복
       navigation: {//화살표 버튼
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
       pagination: {//블릿 버튼
         el: '.swiper-pagination',
         clickable: true,
       },
     });
 });

/* con1 */
AOS.init({
  duration: 1800
})

/* click */
$("a").click(function(e){
  e.preventDefault();
});


/* contents3 */
$(document).on('ready', function() {

  $(".regular").slick({
//autoplay:true,자동 갤러리 구문(삭제시 수동으로 변함.)
//autoplaySpeed:2000,자동 갤러리가 넘어가는 시간
    dots: true,
    infinite: true,
    slidesToShow: 2,//보여지는 갤러리 수
    slidesToScroll: 1,//넘어가는 갤러리 수
speed: 2000,//다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간
pauseOnHover:true, /* 마우스 호버시 슬라이드 이동 멈춤 */ 
  });
});