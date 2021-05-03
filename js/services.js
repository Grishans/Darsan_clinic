let drop = document.querySelectorAll(".scsd__dropdown > input");
let dropUL = document.querySelectorAll(".sevices__drop__slider > .slick-dots");
let globalDots = document.querySelectorAll(".servicesDots > .slick-dots > li");
let dropLI = document.querySelectorAll(
  ".sevices__drop__slider > .slick-dots > li"
);
let services_wrap = document.querySelectorAll(".services__wrap");
let MainSlides = document.querySelectorAll(".servisec__main_nav");

let dropToogle = false;

for (let i = 0; i < drop.length; i++) {
  drop[i].addEventListener("click", function () {
    for (let j = 0; j < dropUL.length; j++) {
      if (dropToogle) {
        dropUL[j].style.height = 0;
      } else {
        dropUL[j].style.height = "unset";
      }
    }
    dropToogle = !dropToogle;
  });
}
for (let g = 0; g < dropLI.length; g++) {
  dropLI[g].addEventListener("click", function () {
    for (let j = 0; j < dropUL.length; j++) {
      dropUL[j].style.height = 0;
    }
    for (let i = 0; i < drop.length; i++) {
      drop[i].value = dropLI[g].textContent;
    }
    dropToogle = !dropToogle;
  });
}

for (let i = 0; i < globalDots.length; i++) {
  globalDots[i].addEventListener("click", function () {
    for (let j = 0; i < dropLI.length; j++) {
      dropLI[j].click();
    }
  });
}

// function adaptWrapHight(target){

//   console.log(target.offsetHeight);
//   services_wrap.style.height =

// }
