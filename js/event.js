// badges -----------------------------------------
const badgeEl = document.querySelector('.badges');

if(matchMedia("screen and (min-width: 1200px)").matches){
  window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 1200){
      gsap.to(badgeEl, 0.6, {
        opacity : 0,
        display : 'none'
      })
    } else{
      gsap.to(badgeEl, 0.6, {
        opacity : 1,
        display : 'block'
      })
    }
  }));  
}


// 햄버거 메뉴 -------------------------------------
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.querySelector('header nav');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
  isHideMenu = !isHideMenu;
  if(isHideMenu){
    menuHide.classList.add('show');
    menuToggleBtn.classList.add('active');
  } else{
    menuHide.classList.remove('show');
    menuToggleBtn.classList.remove('active');
  }
});


// Scroll Magic------------------------------------
const scrollEl = document.querySelectorAll('section.scroll-spy');
scrollEl.forEach(function(scrollEl){
  new ScrollMagic.Scene({
    triggerElement : scrollEl, //보여짐 여부를 감지할 요소를 지정
    triggerHook : 0.8,
  })
  //show넣었다가 뺐다가
  //.setClassToggle(토글할요소, '넣었다뺄 class이름')
  .setClassToggle(scrollEl, 'show')
  .addTo(new ScrollMagic.Controller());
});