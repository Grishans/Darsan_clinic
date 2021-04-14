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

$(".portfolioSlider__current").on("init", function (event, slick) {
  var dots = $(".portfolioSlider .slick-dots li");
  dots.each(function (k, v) {
    $(this)
      .find("button")
      .addClass("heading" + k);
  });
  var items = $(".portfolioSlider__current");
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

$(".portfolioSlider__current").slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrow: false,
  draggable: false,
  swipe: false,
  dots: false,
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
  // draggable: true,
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
let portfSliderCurrentImg = document.querySelectorAll(
  ".portfolioSlider__current > .slick-list > .slick-track > .slick-slide > img"
);
let saleSliderCurrentImg = document.querySelectorAll(
  ".saleSlider > .slick-list > .slick-track > .slick-slide > img"
);
let sevicesSliderCurrentImg = document.querySelectorAll(
  ".servicesSlide__wrap > img"
);
document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < portfSliderCurrentImg.length; i++) {
    let intermediate = portfSliderCurrentImg[i].getAttribute("data-src");
    portfSliderCurrentImg[i].setAttribute("src", intermediate);
  }

  for (let i = 0; i < saleSliderCurrentImg.length; i++) {
    let intermediate = saleSliderCurrentImg[i].getAttribute("data-src");
    saleSliderCurrentImg[i].setAttribute("src", intermediate);
  }
  for (let i = 0; i < sevicesSliderCurrentImg.length; i++) {
    let intermediate = sevicesSliderCurrentImg[i].getAttribute("data-src");
    sevicesSliderCurrentImg[i].setAttribute("src", intermediate);
  }
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
///Sevices
