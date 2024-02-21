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

// faq
const faqItems = document.querySelectorAll('.faq__item')

faqItems.forEach((item) => {
  const faqBtn = item.querySelector('.faq__btn')

  item.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open')
    const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill'
    const iconEl = faqBtn.querySelector('i')
    iconEl.classList = `${iconClass} text-2xl`
  })
})

// scroll reveal animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3666,
  delay: 666,
  // reset: true // reset animation
})

sr.reveal('.hero__text', { origin: 'top' })
sr.reveal('.hero__image')

sr.reveal('.stats__item', {
  delay: 666,
  distance: '100px',
  interval: 100,
  origin: 'top',
})

sr.reveal('.services')
sr.reveal('.services__top')
sr.reveal('.services__item', {
  delay: 666,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
})

sr.reveal('.appointment__title')
sr.reveal('.appointment__form', { origin: 'top' })

sr.reveal('.testimonials')
sr.reveal('.testimonials__container')

sr.reveal('.team__title')
sr.reveal('.team__slider')

sr.reveal('.faq__title')
sr.reveal('.faq__item', {
  delay: 666,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
})

sr.reveal('.departments__bg')
sr.reveal('.departments__container')

sr.reveal('.blog__title')
sr.reveal('.blog__post', {
  delay: 666,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
})

sr.reveal('.brands__logo', {
  delay: 666,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
})

sr.reveal('.newsletter')
sr.reveal('.newsletter__container')

sr.reveal('.footer__item', {
  delay: 666,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
})
