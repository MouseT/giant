'use strict'

// Scroll

$('a.smoothScroll').click(function () {
  var elementClick = $(this).attr('href')
  var destination = $(elementClick).offset().top - 100
  jQuery('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, 800)
  return false
})

// Sandwich

const sandwichToggle = function () {
  const sandwichElements = document.querySelectorAll('.sandwich')

  sandwichElements.forEach((item) => {
    item.addEventListener('click', showSandwichTarget)
  })

  function showSandwichTarget () {
    const menu = document.querySelector('.menu')
    this.classList.toggle('is-active')
    menu.classList.toggle('active')
  }
}
sandwichToggle()

/* Screenshots */
const carousel = $('.screenshots__gallery').waterwheelCarousel()

$(document).ready(function () {
  $('.screenshots__gallery').waterwheelCarousel({
    startingItem: 4,
    separationMultiplier: 0.7,
    edgeFadeEnabled: true,
    opacityMultiplier: 1.5
  })
})

/* Video */

const video = document.querySelector('.videofile')
const play = document.querySelector('.video__btn')

play.addEventListener('click', function () {
  video.play()
  play.classList.add('hidden')
})

video.addEventListener('click', function () {
  video.pause()
  play.classList.remove('hidden')
})

/* Testimonials */

$(document).ready(function () {
  $('.testimonials__gallery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="slick-prev"></span>',
    nextArrow: '<span class="slick-next"></span>',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
})
