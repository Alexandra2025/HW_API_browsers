"use strict";

let currentSlideIndex = 1;

function showSlide(index) {
  const slider = document.getElementById("slider");
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (index > slides.length) {
    currentSlideIndex = 1;
  } else if (index < 1) {
    currentSlideIndex = slides.length;
  } else {
    currentSlideIndex = index;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }

  slides[currentSlideIndex - 1].style.display = "block";
  dots[currentSlideIndex - 1].classList.add("active-dot");
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function currentSlide(index) {
  showSlide(index);
}
