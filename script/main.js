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

// scroll
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

// top btn
const topBtnEl = document.querySelector('#top_btn');

topBtnEl.addEventListener('click', function(){
  // alert('eiownviowne');
  gsap.to(window, .6, { //브라우저를 선택하여 0.6초만에
    scrollTo: 0 //스크롤 꼭때기 0까지 올라간다.
  });
});

window.addEventListener('scroll', function(){
  console.log(window.scrollY); //스크롤값 확인하기
  if(700<this.window.scrollY){
    gsap.to(topBtnEl, 0.6,{opacity:1});
  }else{
    gsap.to(topBtnEl, 0.6,{opacity:0});
  }
});