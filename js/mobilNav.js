var navIcon = document.querySelector(".headerMobilToogle");
var navClose = document.querySelector(".mobilNav__closeIcon");

var MobilMenu = document.querySelector(".mobilNav");
var MobilFormOpen = document.querySelector(".mobilFeedackBTN");

// let Form = document.querySelector(".MainForm");

navIcon.addEventListener("click", function () {
  showHideMobilMenu(true);
});

navClose.addEventListener("click", function () {
  showHideMobilMenu(false);
});

MobilFormOpen.addEventListener("click", function () {
  showHideMobilMenu(false);
  Form.style.left = "5%";
});

function showHideMobilMenu(triggr) {
  if (triggr) {
    MobilMenu.style.left = "0";
  } else {
    MobilMenu.style.left = "-120%";
  }
}
