//Preloader
let portfSliderCurrentImgFor = document.querySelectorAll(
  ".portfolioSlider__current-for > .slick-list > .slick-track > .slick-slide > img"
);
let portfSliderCurrentImgNav = document.querySelectorAll(
  ".portfolioSlider__current-nav > .slick-list > .slick-track > .slick-slide > img"
);
let saleSliderCurrentImg = document.querySelectorAll(
  ".saleSlider > .slick-list > .slick-track > .slick-slide > img"
);
let servicesSliderCurrentImg = document.querySelectorAll(
  ".servicesSlide__wrap > .sevices__img > .sevices__img__block > img"
);
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < portfSliderCurrentImgFor.length; i++) {
    let intermediate = portfSliderCurrentImgFor[i].getAttribute("data-src");
    portfSliderCurrentImgFor[i].setAttribute("src", intermediate);
  }
  for (let i = 0; i < portfSliderCurrentImgNav.length; i++) {
    let intermediate = portfSliderCurrentImgNav[i].getAttribute("data-src");
    portfSliderCurrentImgNav[i].setAttribute("src", intermediate);
  }
  for (let i = 0; i < saleSliderCurrentImg.length; i++) {
    let intermediate = saleSliderCurrentImg[i].getAttribute("data-src");
    saleSliderCurrentImg[i].setAttribute("src", intermediate);
  }
  for (let i = 0; i < servicesSliderCurrentImg.length; i++) {
    let intermediate = servicesSliderCurrentImg[i].getAttribute("data-src");
    servicesSliderCurrentImg[i].setAttribute("src", intermediate);
  }

  // setTimeout(() => {
  //   document.querySelector("button[class=heading0]").click();
  //   window.scrollTo(0, 0);
  // }, 300);
});
///Preloader
