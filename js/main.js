// mobile nav
const mobileNav = document.querySelector('.mobile-nav')
const closeBtn = document.querySelector('.mobile-nav__close-btn')
const closeBtnIcon = document.querySelector('.mobile-nav__close-btn-icon')

const navOpenedClass = 'left-0'
const navClosedClass = '-left-[300px]'
const arrowLeftClass = 'ri-arrow-left-s-line'
const arrowRightClass = 'ri-arrow-right-s-line'

closeBtn.addEventListener('click', () => {
  mobileNav.classList.toggle(navOpenedClass)
  mobileNav.classList.toggle(navClosedClass)
  closeBtnIcon.classList.toggle(arrowLeftClass)
  closeBtnIcon.classList.toggle(arrowRightClass)
})

// swiper testimonials
const swiperTestimonials = new Swiper('.testimonials__slider', {
  loop: true,
  autoplay: {
    delay: 3666,
  },
  pagination: {
    el: '.testimonials__slider-pagination',
    clickable: true,
  },
})

// swiper testimonials
const swiperTeam = new Swiper('.team__slider', {
  loop: true,
  autoplay: {
    delay: 6666,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    960: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
  pagination: {
    el: '.team__slider-pagination',
    clickable: true,
  },
})
