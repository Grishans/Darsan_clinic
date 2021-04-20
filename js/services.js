//Services
let servicesSlide__wrap = document.querySelectorAll(
  ".servicesSlide__wrap > .sevices__img > .sevices__img__block"
);
let servicesHover = document.querySelectorAll(
  ".servicesSlide__wrap > .sevices__img > .sevices__img__block > .servicesSlide__Hovercontent"
);

for (let i = 0; i < servicesSlide__wrap.length; i++) {
  servicesSlide__wrap[i].addEventListener("mouseover", () => {
    servicesHover[i].style.height = 40 + "%";
  });
  servicesSlide__wrap[i].addEventListener("mouseout", () => {
    servicesHover[i].style.height = 0;
  });
}

let servDrop = document.querySelectorAll(".servicesDropdown");
let servDropInput = document.querySelectorAll(".servicesDropdown > input");
let servDropUl = document.querySelectorAll(".sevices__dropDown");
let servDropLi = document.querySelectorAll(".sevices__dropDown > li");
let DropBool = true;

function ShowServicesList(step) {
  servDropUl[step].style.height = 200 + "px";
  servDropUl[step].style.bottom = -190 + "px";
  servDropUl[step].style.opacity = 1;
}
function HideServicesList() {
  for (let i = 0; i < servDropUl.length; i++) {
    servDropUl[i].style.height = 0;
    servDropUl[i].style.bottom = 0;
    servDropUl[i].style.opacity = 0;
  }
}

for (let i = 0; i < servDropInput.length; i++) {
  servDropInput[i].addEventListener("click", function () {
    servDropInput[i].id = "dropInput"; // Добавляем id, чтоб отслеживать конкретный input
    if (DropBool) {
      ShowServicesList(i);
      DropBool = !DropBool;
    } else {
      HideServicesList();
      DropBool = !DropBool;
    }
  });
}
for (let j = 0; j < servDropLi.length; j++) {
  servDropLi[j].addEventListener("click", function () {
    let dropInp = document.querySelector("#dropInput");
    dropInp.value = servDropLi[j].innerHTML;
    HideServicesList();
    dropInp.removeAttribute("id");
    DropBool = !DropBool;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  ///////////////////////
  for (let i = 0; i < servDropInput.length; i++) {
    servDrop[i].classList.add("servInp" + i);

    let servDropInputs = document.querySelector(".servInp" + i + " > input");
    let servDropLis = document.querySelector(".servInp" + i + " > ul > li");

    servDropInputs.value = servDropLis.innerHTML;
  }
  ///////////////////////
  let sevices__img__block = document.querySelectorAll(".sevices__img__block");
  for (let i = 0; i < sevices__img__block.length; i++) {
    sevices__img__block[i].classList.add("sevicesBlock" + i);
    console.log(document.querySelector(".sevicesBlock" + i));
  } // Присваиваем блокам отдельные классы
});
///Services
