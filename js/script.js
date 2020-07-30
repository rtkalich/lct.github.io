$(document).ready(function () {
  $(".form").submit(function () {
    $.ajax({
      type: "POST",
      url: "contact.php",
      data: $(this).serialize(),
    }).done(function () {
      alert("Спасибо за заявку!Скоро мы свяжемся с Вами!)");
    });
    return false;
  });

  $(() => {
    $(".btn-toggle").on("click", function (e) {
      e.preventDefault;
      $(this).toggleClass("btn-toggle_active");
      $(".menu").toggleClass("menu__active");
    });
  });
  $(() => {
    $(".callback-bt").on("click", function (e) {
      e.preventDefault;
      $(".modal").addClass("modal__active");
    });
  });
  $(() => {
    $(".close_modal").on("click", function (e) {
      e.preventDefault;
      $(".modal").removeClass("modal__active");
    });
  });
  $(() => {});
  $(".slider").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
const scroll = new SmoothScroll('.anchor[href*="#"]', {
  speed: 1500,
  // offset: +50
});
$(() => {
  $(".anchor").click(function () {
    $(".menu").removeClass("menu__active");
    $(".btn-toggle").removeClass("btn-toggle_active");
    return;
  });
});
