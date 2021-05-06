let signUp = document.querySelectorAll(".mainBTN");
let globalWrap = document.querySelector(".bodyGlobalWrap");
let Form = document.querySelector(".MainForm");
let formClose = document.querySelector(".formClose");

let formDropInput = document.querySelector(".formDropInput");
let formUL = document.querySelector(".mainFormDrop");
let formLI = document.querySelectorAll(".mainFormDrop li");

let srvicesSignUp = document.querySelectorAll(".scs__description > .mainBTN");
let srvicesCurrentInput = document.querySelectorAll(".scsd__dropdown > input");

var dropTrigger = true;
var formDropIcon = document.querySelector(".formDropInput__wrap .dropIcon");

function OpenClose(formTrigger) {
  if (formTrigger) {
    if (window.matchMedia("(max-width: 601px)").matches) {
      Form.style.left = "5%";
      Form.style.zIndex = "10";
      formTrigger = !formTrigger;
    } else {
      Form.style.left = "40%";
      Form.style.zIndex = "10";
      formTrigger = !formTrigger;
    }
  } else {
    Form.style.left = "-100%";
    globalWrap.style.filter = "blur(0)";
    formTrigger = !formTrigger;
  }
} // открытие и закрытие формы

function showHideDroplist() {
  if (dropTrigger) {
    formUL.style.height = "0px";
    rotateDropIconForm(false);
    setTimeout(() => {
      formUL.style.display = "none";
    }, 100);
  } else {
    formUL.style.height = "auto";
    rotateDropIconForm(true);
    setTimeout(() => {
      formUL.style.display = "block";
    }, 100);
  }
} // Открытие и закрытие списка

function setInputValue(i) {
  formLI[i].addEventListener("click", function () {
    formDropInput.value = formLI[i].innerHTML;
    dropTrigger = !dropTrigger;
    showHideDroplist();
  });
} //  Установить инпуту значение лишки

function setInputServicwsData(i) {
  formDropInput.value = srvicesCurrentInput[i].value;
} // Установить значение на инпут в форме в зависимости от выбранного в services

function rotateDropIconForm(trigger) {
  if (trigger) {
    formDropIcon.style.transform = "rotate(180deg)";
  } else {
    formDropIcon.style.transform = "rotate(0deg)";
  }
} // поворачивает иконку на инпуте

for (let i = 0; i < signUp.length; i++) {
  signUp[i].addEventListener("click", function () {
    OpenClose(true);
  });
  formClose.addEventListener("click", function () {
    OpenClose(false);
  });
} // Клик по кнопке "записаться"

for (let i = 0; i < formLI.length; i++) {
  setInputValue(i);
} // Клик по лишке

formDropInput.addEventListener("mousedown", function () {
  dropTrigger = !dropTrigger;
  showHideDroplist();
}); // Клик по инпуту выпадающего списка

for (let i = 0; i < srvicesSignUp.length; i++) {
  srvicesSignUp[i].addEventListener("click", function () {
    OpenClose(true);
    setInputServicwsData(i);
  });
} // Нажатие и установка значения инпуту в services

formDropIcon.addEventListener("click", function () {
  dropTrigger = !dropTrigger;
  showHideDroplist();
}); // Клик по иконке на инпуте
