const slide1Img = document.querySelector(".slide1Img");
const slide2Img = document.querySelector(".slide2Img");
const slide3Img = document.querySelector(".slide3Img");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const slideContainer = document.querySelector(".slideContainer");

let pageNum = 0;

function startPage() {
  slide1Img.style.display = "flex";
  slide2Img.style.display = "none";
  slide3Img.style.display = "none";
  leftArrow.style.display = "flex";
  rightArrow.style.display = "flex";
}

startPage();
