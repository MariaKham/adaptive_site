const slider = document.querySelector('.brands__container');

let mySwiper;

function mobileSlider() {
  if(window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      // spaceBetween: 16,
      wrapperClass: 'brands__wrapper',
      slideClass: 'brands__card',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',       
        clickable: true,
     },
     keyboard: {
        enabled: true,
        },
    });
    slider.dataset.mobile = 'true';
  }
  if(window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';
    if(slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }

  }
}

mobileSlider();

window.addEventListener('resize', function() {
  mobileSlider();
});


let brandsList = document.querySelectorAll('.brands__card--visually-hidden');
let openButton = document.querySelector('.brands__show-btn');
let icon = document.querySelector('.brands__show-btn');

openButton.addEventListener('click', function(event) {
  event.preventDefault();
  if(openButton.textContent == 'Показать все') {
    openButton.textContent = 'Скрыть';
     brandsList.forEach(function(item) 
     {item.classList.remove('brands__card--visually-hidden');});
    
  } else {
  openButton.textContent = 'Показать все';
  brandsList.forEach(function(item) 
  {item.classList.add('brands__card--visually-hidden');});
 }
});

openButton.addEventListener('click', function() {
  icon.classList.toggle('brands__show-btn--close');
  });