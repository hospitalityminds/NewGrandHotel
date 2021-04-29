// *****  Window on Scroll  ******

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".nav").addClass("nav-flow");
      $(".nav-link").addClass("li-flow");
      $(".b3").addClass("dark");
      $(".dropdown-toggle").addClass("li-flow");
    } else {
      $(".nav").removeClass("nav-flow");
      $(".nav-link").removeClass("li-flow");
      $(".b3").removeClass("dark");
      $(".dropdown-toggle").removeClass("li-flow");
    }
  });