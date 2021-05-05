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

function OpenClose(formTrigger) {
  if (formTrigger) {
    Form.style.left = "40%";
    globalWrap.style.filter = "blur(10px)";
    formTrigger = !formTrigger;
  } else {
    Form.style.left = "-40%";
    globalWrap.style.filter = "blur(0)";
    formTrigger = !formTrigger;
  }
} // открытие и закрытие формы

function showHideDroplist() {
  if (dropTrigger) {
    formUL.style.height = "0px";
    setTimeout(() => {
      formUL.style.display = "none";
    }, 100);
  } else {
    formUL.style.height = "auto";
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

// formDropInput.addEventListener("blur", function () {
//   dropTrigger = !dropTrigger;
//   showHideDroplist();
// }); // Клик вне инпута выпадающего списка

for (let i = 0; i < srvicesSignUp.length; i++) {
  srvicesSignUp[i].addEventListener("click", function () {
    OpenClose(true);
    setInputServicwsData(i);
  });
} // Нажатие и установка значения инпуту в services
