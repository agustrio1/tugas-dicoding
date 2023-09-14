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
  
