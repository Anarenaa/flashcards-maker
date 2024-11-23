const swiper = new Swiper('.swiper', {
    loop: true,
    slideToClickedSlide: true,
    slidesPerView: 1,
    allowTouchMove: false,
  
    pagination: {
      clickable: false,
      el: '.swiper-pagination',
      type: 'fraction'
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      
    },
    keyboard: {
      enabled: true,
    },
    effect: 'cards',
    cardsEffect: {
      perSlideOffset: 4,
      perSlideRotate: 1,
    },
    breakpoints: {
      768: {
        cardsEffect: {
          perSlideOffset: 8,
        },
      }
    }
  });