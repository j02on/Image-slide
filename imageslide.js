const slide1Img = document.querySelector(".slide1Img");
const slide2Img = document.querySelector(".slide2Img");
const slide3Img = document.querySelector(".slide3Img");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const slideContainer = document.querySelector(".slideContainer");
const imageAll = document.querySelector(".imageAll");

function clickShow() {
  let i = 1;
  rightArrow.addEventListener("click", () => {
    if (i < 0) {
      i *= -1;
    }
    if (i === 0) {
      i = 1;
    } else if (i === 1) {
      i = 2;
    } else {
      i = 0;
    }
    imageAll.style.transform = `translateX(${i * -1395}px)`;
  });
  leftArrow.addEventListener("click", () => {
    if (i === 0) {
      i = -2;
    } else if (i === 1) {
      i = 0;
    } else {
      i = -1;
    }
    imageAll.style.transform = `translateX(${i * 1395}px)`;
  });
}

clickShow();
