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
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
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
$(".scs__slider").slick({
  infinite: false,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
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
