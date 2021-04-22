let drop = document.querySelectorAll(".scsd__dropdown > input");
let dropUL = document.querySelectorAll(".sevices__drop__slider > .slick-dots");
let dropLI = document.querySelectorAll(
  ".sevices__drop__slider > .slick-dots > li"
);
let dropToogle = false;

for (let i = 0; i < drop.length; i++) {
  drop[i].addEventListener("click", function () {
    for (let j = 0; j < dropUL.length; j++) {
      if (dropToogle) {
        dropUL[j].style.height = 0;
        dropToogle = !dropToogle;
        return 0;
      } else {
        dropUL[j].style.height = "unset";
        dropToogle = !dropToogle;
        return 0;
      }
    }
  });
}
for (let g = 0; g < dropLI.length; g++) {
  dropLI[g].addEventListener("click", function () {
    for (let j = 0; j < dropUL.length; j++) {
      dropUL[j].style.height = 0;
    }
    dropToogle = !dropToogle;
  });
}
