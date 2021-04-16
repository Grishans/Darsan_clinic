//Slider
$(".saleSlider").slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrow: false,
  draggable: false,
  swipe: false,
  dots: true,
  prevArrow:
    "<button id='prev' type='button' class='btn btnPrev'><img src='img/slider/arr_left.svg' alt=''></button>",
  nextArrow:
    "<button id='next' type='button' class='btn btnNext'><img src='img/slider/arr_right.svg' alt=''></button>",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
  ],
});
$(".portfolioSlider").on("init", function (event, slick) {
  var dots = $(".portfolioSlider .slick-dots li");
  dots.each(function (k, v) {
    $(this)
      .find("button")
      .addClass("heading" + k);
  });

  var items = $(".portfolioSlider__current-for");
  items.each(function (k, v) {
    // var text = $(this).find("span").text();
    var text = $(this).attr("data-name");

    $(".heading" + k).text(text);
  });
});
$(".portfolioSlider").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
  draggable: false,
  swipe: false,
  dots: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
  ],
});
$(".portfolioSlider__current-for").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
  draggable: false,
  swipe: false,
  dots: false,
  asNavFor: ".portfolioSlider__current-nav",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
  ],
});
$(".portfolioSlider__current-nav").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  draggable: false,
  swipe: false,
  dots: false,
  asNavFor: ".portfolioSlider__current-for",
  focusOnSelect: true,
  prevArrow:
    "<button id='prev' type='button' class='btn btnPrev'><img src='img/slider/arr_left.svg' alt=''></button>",
  nextArrow:
    "<button id='next' type='button' class='btn btnNext'><img src='img/slider/arr_right.svg' alt=''></button>",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
  ],
});
$(".sevices_slider").slick({
  infinite: false,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
  // focusOnSelect: true,
  swipe: true,
  dots: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
  ],
});
///Slider

// Portfolio slider animation
let portfSlides = document.querySelectorAll(
  ".portfolioSlider > .slick-dots > li > button"
);
let portfSliderCurrent = document.querySelectorAll(".portfolioSlider__current");

for (let i = 0; i < portfSlides.length; i++) {
  portfSlides[i].addEventListener("click", () => {
    for (let i = 0; i < portfSliderCurrent.length; i++) {
      portfSliderCurrent[i].style.width = 0;
      setTimeout(() => {
        portfSliderCurrent[i].style.width = 100 + "%";
      }, 400);
    }
  });
}
/// Portfolio slider animation

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
let sevicesSliderCurrentImg = document.querySelectorAll(
  ".servicesSlide__wrap > img"
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
  for (let i = 0; i < sevicesSliderCurrentImg.length; i++) {
    let intermediate = sevicesSliderCurrentImg[i].getAttribute("data-src");
    sevicesSliderCurrentImg[i].setAttribute("src", intermediate);
  }

  setTimeout(() => {
    document.querySelector("button[class=heading0]").click();
    window.scrollTo(0, 0);
  }, 300);
});
///Preloader

//Sevices
let servicesSlide__wrap = document.querySelectorAll(".servicesSlide__wrap");
let servicesHover = document.querySelectorAll(".servicesSlide__Hovercontent");

for (let i = 0; i < servicesSlide__wrap.length; i++) {
  servicesSlide__wrap[i].addEventListener("mouseover", () => {
    servicesHover[i].style.height = 40 + "%";
  });
  servicesSlide__wrap[i].addEventListener("mouseout", () => {
    servicesHover[i].style.height = 0;
  });
}

let servDropInput = document.querySelectorAll(".servicesDropdown > input");
let servDropUl = document.querySelectorAll(".sevices__dropDown");
let servDropLi = document.querySelectorAll(".sevices__dropDown > li");
let DropBool = true;

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < servDropUl.length; i++) {
    servDropUl[i].id = "dropUL" + i;
    servDropInput[i].id = "dropInput" + i;
  }
});

for (let i = 0; i < servDropInput.length; i++) {
  servDropInput[i].addEventListener("click", function () {
    if (DropBool) {
      servDropUl[i].style.height = 200 + "px";
      servDropUl[i].style.bottom = -190 + "px";
      servDropUl[i].style.opacity = 1;
      DropBool = !DropBool;
    } else {
      servDropUl[i].style.height = 0;
      servDropUl[i].style.bottom = 0;
      servDropUl[i].style.opacity = 0;
      DropBool = !DropBool;
    }
  });
  for (let j = 0; j < servDropLi.length; j++) {
    servDropLi[j].addEventListener("click", function () {
      if (
        servDropUl[i].id === "dropUL" + i &&
        servDropInput[i].id === "dropInput" + i
      ) {
        servDropInput[i].value = servDropLi[j].innerHTML;
        console.log("yes");
      } else {
        console.log("no");
      }
    });
  }
}
///Sevices
