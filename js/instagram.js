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

for (let i = 0; i < dropInstagramBTN.length; i++) {
  dropInstagramBTN[i].addEventListener("click", function () {
    resetInstagramCountSlide();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  resetInstagramCountSlide();
});
