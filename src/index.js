const a = document.querySelector('a');

a.addEventListener('click', function() {
  this.classList.add('animated', 'fadeIn');
});

document.addEventListener('DOMContentLoaded', function () {
    const offCanvasToggle = document.querySelector('.off-canvas-toggle');
    const offCanvas = document.querySelector('.off-canvas');
  
    offCanvasToggle.addEventListener('click', function () {
      offCanvas.classList.toggle('open');
    });
  });
  
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselSlides = document.querySelectorAll('.carousel-slide');

const slideWidth = carouselSlides[0].offsetWidth;
const carouselWrapperWidth = slideWidth * carouselSlides.length;

carouselWrapper.style.width = `${carouselWrapperWidth}px`;

// Fungsi untuk menghentikan animasi ketika cursor berada di atas carousel
carouselWrapper.addEventListener('mouseover', () => {
  carouselWrapper.style.animationPlayState = 'paused';
});

carouselWrapper.addEventListener('mouseout', () => {
  carouselWrapper.style.animationPlayState = 'running';
});
