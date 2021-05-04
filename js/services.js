let drop = document.querySelectorAll(".scsd__dropdown > input");
let dropUL = document.querySelectorAll(".sevices__drop__slider > .slick-dots");
let globalDots = document.querySelectorAll(".servicesDots > .slick-dots > li");
let dropLI = document.querySelectorAll(
  ".sevices__drop__slider > .slick-dots > li"
);
let services_wrap = document.querySelectorAll(".services__wrap");
let MainSlides = document.querySelectorAll(".servisec__main_nav");

let desriptBlock = document.querySelectorAll(".scs__description");
let titleBlock = document.querySelectorAll(".scsd__title h3");
let dropdwnBlock = document.querySelectorAll(".scsd__dropdown");

let dropToogle = false;

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
        setdropPosition(j);
      } else {
        dropUL[j].style.height = "unset";
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

    dropToogle = !dropToogle;
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

function addSCSCurrent() {
  for (let i = 0; i < document.querySelectorAll(".scs__slider").length; i++) {
    document
      .querySelectorAll(".scs__slider")
      [i].classList.add("scs__slider" + i + "");
  }
} // Присвоение разных классов слайдам, для дальнейшего увеличения картинки после перехода на другую категорию

function setdropPosition(current) {
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
    ) -
    6 +
    "px";
} // Страшная формула чтоб прижать выпадающий список к низу инпута
