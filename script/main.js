$(function(){

  $('#sh_btn').click(function(){
    $('.sh_box').slideToggle();
  });

  $('#st_btn').click(function(){
    $('.sitemap_wrap').fadeIn();
  });
  $('#c_btn').click(function(){
    $('.sitemap_wrap').hide();
  });

  $('.main_visual .inner img').delay(500).fadeIn();
  $('.main_visual .inner .text').delay(1000).fadeIn();

});

// 푸터 카피라이트
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

const spyEl = document.querySelectorAll('article.scroll-spy');
spyEl.forEach(function (spyEl){
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});