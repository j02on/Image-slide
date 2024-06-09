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
    if (i == 2) {
      i = 0;
    } else {
      i++;
    }
    imageAll.style.transform = `translateX(${i * -1395}px)`;
  });
  leftArrow.addEventListener("click", () => {
    if (i === 0) {
      i = 2;
    } else {
      i--;
    }
    imageAll.style.transform = `translateX(${i * -1395}px)`;
  });
}

clickShow();
