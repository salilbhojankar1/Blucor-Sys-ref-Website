
// Image Slider
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
  index = (index + 1) % slides.length;
}
setInterval(showSlide, 4000);

// Reveal on Scroll
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 50) {
      el.classList.add("active");
    }
  });
});


window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".rev");
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 70) {
      el.classList.add("activ");
    }
  });
});
