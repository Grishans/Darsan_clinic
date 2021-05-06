let drop = document.querySelectorAll(".scsd__dropdown > input");
let dropUL = document.querySelectorAll(".sevices__drop__slider > .slick-dots");
let globalDots = document.querySelectorAll(".servicesDots > .slick-dots > li");
let dropLI = document.querySelectorAll(
  ".sevices__drop__slider > .slick-dots > li"
);
let mainArrow = document.querySelectorAll(".sevices_slider .btn");
let secondArrow = document.querySelectorAll(".scs__slider .btn2");
let scs__sliderCurrent = document.querySelectorAll(".scs__slider");
let services_wrap = document.querySelectorAll(".services__wrap");
let MainSlides = document.querySelectorAll(".servisec__main_nav");

let desriptBlock = document.querySelectorAll(".scs__description");
let titleBlock = document.querySelectorAll(".scsd__title h3");
let dropdwnBlock = document.querySelectorAll(".scsd__dropdown");

var servicesDropIcon = document.querySelector(".scsd__dropdown .dropIcon");

let servicesBGText = document.querySelector(".servicesBGText");

let dropToogle = true;

let scs__slider = document.querySelectorAll(
  ".scs__slider .slick-list .slick-track .slick-slide"
);
var servicesNumberCurrent = document.querySelector(
  ".servicesSlideCount__change"
);
var servicesNumberAll = document.querySelector(".servicesSlideCount__all");

var currentServicesSlide;

document.addEventListener("DOMContentLoaded", () => {
  addSCSCurrent();
  for (let j = 0; j < dropUL.length; j++) {
    setdropPosition(j);
  }
});

for (let i = 0; i < drop.length; i++) {
  drop[i].addEventListener("click", function () {
    for (let j = 0; j < dropUL.length; j++) {
      if (dropToogle) {
        dropUL[j].style.height = 0;
        dropUL[j].style.display = "none";
        dropUL[j].style.border = "none";
        rotateDropIconServices(false);
        setdropPosition(j);
      } else {
        dropUL[j].style.height = "unset";
        dropUL[j].style.display = "flex";
        dropUL[j].style.border = "1px solid #d9d9d9";
        rotateDropIconServices(true);
        setdropPosition(j);
      }
    }
    dropToogle = !dropToogle;
  });
}

for (let g = 0; g < dropLI.length; g++) {
  dropLI[g].addEventListener("click", function () {
    for (let j = 0; j < dropUL.length; j++) {
      dropUL[j].style.height = 0;
      dropUL[j].style.display = "none";
      dropUL[j].style.border = "none";
      setdropPosition(j);
    }
    for (let i = 0; i < drop.length; i++) {
      drop[i].value = dropLI[g].textContent; // Прописываем инпуту название выбранного пункта из списка
      titleBlock[i].innerHTML = dropLI[g].textContent;
    }
    for (let i = 0; i < document.querySelectorAll(".scs__slider").length; i++) {
      let currentSlideAfterChangeCategory = document.querySelector(
        ".scs__slider" + g + " .slick-list .slick-track .slick-slide"
      );
      currentSlideAfterChangeCategory.classList.add("slick-current");
    } // Увеличение конкретного слайда после выбора категории

    servicesBGText.innerHTML = dropLI[g].innerHTML; // Ввод текста в блок на заднем фоне

    dropToogle = !dropToogle;
    currentServicesSlide = g;
    rotateDropIconServices(false);
    resetSevicesCountSlide(currentServicesSlide);
  });
}

for (let i = 0; i < globalDots.length; i++) {
  globalDots[i].addEventListener("click", function () {
    let checkWhichSlider = document.querySelector(
      ".sevices_slider .slick-list .slick-track .slick-active .sevices__drop__slider .slick-dots li"
    );
    checkWhichSlider.click(); // Выбор первого элемента из списка при переходе на другую категорию

    dropToogle = !dropToogle;
  });
}

for (let i = 0; i < mainArrow.length; i++) {
  mainArrow[i].addEventListener("click", function () {
    let checkWhichSlider = document.querySelector(
      ".sevices_slider .slick-list .slick-track .slick-active .sevices__drop__slider .slick-dots li"
    );
    checkWhichSlider.click(); // Выбор первого элемента из списка при переходе на другую категорию

    dropToogle = !dropToogle;
  });
}

for (let i = 0; i < secondArrow.length; i++) {
  secondArrow[i].addEventListener("click", function () {
    resetSevicesCountSlide(currentServicesSlide);
  });
}

servicesDropIcon.addEventListener("click", function () {
  for (let j = 0; j < dropUL.length; j++) {
    if (dropToogle) {
      dropUL[j].style.height = 0;
      dropUL[j].style.display = "none";
      rotateDropIconServices(false);
      setdropPosition(j);
    } else {
      dropUL[j].style.height = "unset";
      dropUL[j].style.display = "flex";
      rotateDropIconServices(true);
      setdropPosition(j);
    }
  }
  dropToogle = !dropToogle;
});

function addSCSCurrent() {
  for (let i = 0; i < document.querySelectorAll(".scs__slider").length; i++) {
    document
      .querySelectorAll(".scs__slider")
      [i].classList.add("scs__slider" + i + "");
  }
} // Присвоение разных классов слайдам, для дальнейшего увеличения картинки после перехода на другую категорию

function setdropPosition(current) {
  if (window.matchMedia("(max-width: 601px)").matches) {
    dropUL[current].style.top =
      parseInt(
        window
          .getComputedStyle(titleBlock[current], null)
          .getPropertyValue("height"),
        10
      ) +
      parseInt(
        window
          .getComputedStyle(titleBlock[current], null)
          .getPropertyValue("margin-top"),
        10
      ) +
      parseInt(
        window
          .getComputedStyle(titleBlock[current], null)
          .getPropertyValue("margin-bottom"),
        10
      ) +
      parseInt(
        window
          .getComputedStyle(dropdwnBlock[current], null)
          .getPropertyValue("height"),
        10
      ) +
      parseInt(
        window
          .getComputedStyle(dropdwnBlock[current], null)
          .getPropertyValue("margin-bottom"),
        10
      ) +
      parseInt(
        window
          .getComputedStyle(scs__sliderCurrent[current], null)
          .getPropertyValue("height"),
        10
      ) +
      45 +
      "px";
  } else {
    dropUL[current].style.top =
      parseInt(
        window
          .getComputedStyle(titleBlock[current], null)
          .getPropertyValue("height"),
        10
      ) +
      parseInt(
        window
          .getComputedStyle(titleBlock[current], null)
          .getPropertyValue("margin-top"),
        10
      ) +
      parseInt(
        window
          .getComputedStyle(titleBlock[current], null)
          .getPropertyValue("margin-bottom"),
        10
      ) +
      parseInt(
        window
          .getComputedStyle(dropdwnBlock[current], null)
          .getPropertyValue("height"),
        10
      ) +
      parseInt(
        window
          .getComputedStyle(dropdwnBlock[current], null)
          .getPropertyValue("margin-bottom"),
        10
      ) +
      94 +
      "px";
  }
} // Страшная формула чтоб прижать выпадающий список к низу инпута

function resetSevicesCountSlide(i) {
  servicesNumberCurrent.innerHTML =
    $(".scs__slider:eq(" + i + ")").slick("slickCurrentSlide") + 1; // Конкретный слайд
  servicesNumberAll.innerHTML = $(".scs__slider:eq(" + i + ")").slick(
    "getSlick"
  ).slideCount; // Всего слайдов
} // Переопределение подсчета слайдов

function rotateDropIconServices(trigger) {
  if (trigger) {
    servicesDropIcon.style.transform = "rotate(180deg)";
  } else {
    servicesDropIcon.style.transform = "rotate(0deg)";
  }
} // поворачивает иконку на инпуте

for (let i = 0; i < scs__slider.length; i++) {
  scs__slider[i].addEventListener("click", function () {
    resetSevicesCountSlide(currentServicesSlide);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let checkWhichSlider = document.querySelector(
    ".sevices_slider .slick-list .slick-track .slick-active .sevices__drop__slider .slick-dots li"
  );
  checkWhichSlider.click(); // Выбор первого элемента из списка при переходе на другую категорию
  resetSevicesCountSlide(0);
});
