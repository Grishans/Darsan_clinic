var dropPortfolioWrap = document.querySelector(".portfolioDots__drop");
var dropPortfolioInput = document.querySelector(".portfolio__dropInput");
var dropPortfolioDotsWrap = document.querySelector(".portfolioDots");
var dropPortfolioUL = document.querySelector(".portfolioDots .slick-dots");
var dropPortfolioLI = document.querySelectorAll(
  ".portfolioDots .slick-dots li"
);
var dropPortfolioBTN = document.querySelectorAll(
  ".portfolioSlider .portfolioSlider__current-nav .btn"
);

var portfolioDropIcon = document.querySelector(
  ".portfolioDots__drop .dropIcon"
);

var portfolioNumberCurrent = document.querySelector(
  ".portfolioSlideCount__change"
);
var portfolioNumberAll = document.querySelector(".portfolioSlideCount__all");
var portfolioNavCurrentSlide = document.querySelectorAll(
  ".portfolioSlider__current-nav .slick-list .slick-track .slick-slide"
);
var PortfolioCurrentNavSlider; // для переопределения в функции подсчета слайдов

var dropPortfolioToogle = false;

dropPortfolioInput.addEventListener("click", function () {
  // dropPortfolioWrap.classList.toggle("portfolioDots__dropUp");
  showHidePortfolioDrop();
  dropPortfolioToogle = !dropPortfolioToogle;
}); // Клик по выпадающему списку

for (let i = 0; i < dropPortfolioLI.length; i++) {
  dropPortfolioLI[i].addEventListener("click", function () {
    dropPortfolioDotsWrap.style.height = 0;
    dropPortfolioToogle = !dropPortfolioToogle; // Спрятать меню

    dropPortfolioInput.value = dropPortfolioLI[i].textContent; //Ввести текст в инпут после нажатия на лишку

    dropPortfolioWrap.classList.toggle("portfolioDots__dropUp");

    PortfolioCurrentNavSlider = i;
    resetPortfolioCountSlide(PortfolioCurrentNavSlider);
    rotateDropIcon(false);
  });
} // Клик по пунктам списка

for (let i = 0; i < dropPortfolioBTN.length; i++) {
  dropPortfolioBTN[i].addEventListener("click", function () {
    resetPortfolioCountSlide(PortfolioCurrentNavSlider);
  });
} // Изменение счетчика слайда на клик стрелки

for (let i = 0; i < portfolioNavCurrentSlide.length; i++) {
  portfolioNavCurrentSlide[i].addEventListener("click", function () {
    resetPortfolioCountSlide(PortfolioCurrentNavSlider);
  });
} // Изменение счетчика слайда на клик по слайду nav

portfolioDropIcon.addEventListener("click", function () {
  showHidePortfolioDrop();
  dropPortfolioToogle = !dropPortfolioToogle;
});

function resetPortfolioCountSlide(i) {
  portfolioNumberCurrent.innerHTML =
    $(".portfolioSlider__current-nav:eq(" + i + ")").slick(
      "slickCurrentSlide"
    ) + 1; // Конкретный слайд
  portfolioNumberAll.innerHTML = $(
    ".portfolioSlider__current-nav:eq(" + i + ")"
  ).slick("getSlick").slideCount; // Всего слайдов
} // Переопределение подсчета слайдов

function rotateDropIcon(trigger) {
  if (trigger) {
    portfolioDropIcon.style.transform = "rotate(180deg)";
  } else {
    portfolioDropIcon.style.transform = "rotate(0deg)";
  }
} // поворачивает иконку на инпуте

function showHidePortfolioDrop() {
  if (dropPortfolioToogle) {
    dropPortfolioDotsWrap.style.height = 0;
    rotateDropIcon(false);
  } else {
    dropPortfolioDotsWrap.style.height = "auto";
    rotateDropIcon(true);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let dropInputSize = dropPortfolioInput.getBoundingClientRect().height;
  dropPortfolioDotsWrap.style.top = dropInputSize - 2 + "px"; // Прижать доты к низу инпута

  dropPortfolioInput.value = dropPortfolioLI[0].textContent;
  setTimeout(() => {
    dropPortfolioLI[1].click();
  }, 200);
  setTimeout(() => {
    dropPortfolioLI[0].click();
  }, 800); // нажать на слайдер портфолио, чтоб скорректировалась высота слайдера

  resetPortfolioCountSlide(0);
});
