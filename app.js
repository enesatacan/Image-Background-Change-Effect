const ImgBox = document.querySelector(".img-box");
const ImgWrap = document.querySelector(".img-wrap");
const originalImg = document.querySelector("#originalImg");
const line = document.querySelector("#line");

originalImg.style.width = ImgBox.offsetWidth + "px";

const leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function (e) {
  const boxWidth = e.pageX - leftSpace + "px";
  ImgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
};
