var dropInstagramBTN = document.querySelectorAll(".instagramSlider .btn");
var instagramNumberCurrent = document.querySelector(
  ".instagramSlideCount__change"
);
var instagramNumberAll = document.querySelector(".instagramSlideCount__all");

function resetInstagramCountSlide() {
  instagramNumberCurrent.innerHTML =
    $(".instagramSlider").slick("slickCurrentSlide") + 1; // Конкретный слайд
  instagramNumberAll.innerHTML = $(".instagramSlider").slick(
    "getSlick"
  ).slideCount; // Всего слайдов
} // Переопределение подсчета слайдов

function loadStHeightSlide() {
  let centerSlide = document.querySelector(
    ".instagramSlider .slick-list .slick-track .slick-center"
  );
  let slideAll = document.querySelectorAll(
    ".instagramSlider .slick-list .slick-track .slick-slide"
  );

  for (let i = 0; i < slideAll.length; i++) {
    slideAll[i].style.height =
      centerSlide.getBoundingClientRect().height + "px";
    console.log(centerSlide.getBoundingClientRect().height);
  }
}

for (let i = 0; i < dropInstagramBTN.length; i++) {
  dropInstagramBTN[i].addEventListener("click", function () {
    resetInstagramCountSlide();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  resetInstagramCountSlide();
  loadStHeightSlide();
});
