let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('show');
    if (i === index) {
      slide.classList.add('show');
    }
  });
}

function changeSlide(n) {
  currentIndex += n;
  if (currentIndex >= slides.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  showSlide(currentIndex);
}

// Show the first image on page load
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);

  // Auto-slide every 4 seconds
  setInterval(() => {
    changeSlide(1);
  }, 4000);
});
