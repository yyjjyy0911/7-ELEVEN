// 메뉴
$('header nav > ul > li').hover(function(){
  $(this).find('.sub-menu').stop().slideDown();
}, function(){
  $(this).find('.sub-menu').stop().slideUp();
});