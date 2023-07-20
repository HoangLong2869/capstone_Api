(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-150px");
    }
  });

  // Product carousel
  $(".product-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
  });
})(jQuery);
// Chờ cho tất cả các tài liệu tải xong
document.addEventListener("DOMContentLoaded", function () {
  // Lấy phần tử container
  const container = document.querySelector(".container-fluid");

  // Khi người dùng cuộn trang, kiểm tra vị trí của phần tử
  window.addEventListener("scroll", function () {
    // Vị trí phần tử từ đỉnh trang
    const elementTop = container.getBoundingClientRect().top;

    // Chiều cao cửa sổ trình duyệt
    const windowHeight = window.innerHeight;

    // Khi phần tử vào vùng hiển thị, thêm lớp 'animation-triggered' để kích hoạt animation
    if (elementTop <= windowHeight) {
      container.classList.add("animation-triggered");
    }
  });
});
