const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal', //슬라이드방향 horizontal, vertical
  loop: true, // 슬라이드 반복 여부
  loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
  effect : 'fade', // 페이드 효과 사용
  speed : 1200, // 슬라이드 속도 1.2초

  autoplay: {     //자동슬라이드 (false-비활성화)
     delay: 3000, // 시간 설정
     disableOnInteraction: false, // false-스와이프 후 자동 재생
},

  // If we need pagination
  pagination: {
    el: '.swiper-pagination', //버튼을 담을 태그 설정
    clickable: true, // 버튼 클릭 여부
  },

  // Navigation arrows
  navigation: { //좌우버튼
    nextEl: '.swiper-button-next',  //버튼을 담을 태그 설정
    prevEl: '.swiper-button-prev',  //버튼을 담을 태그 설정
  },

});