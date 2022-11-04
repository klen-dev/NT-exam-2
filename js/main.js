// scroll animation

window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.documentElement.scrollTop > 250) {
      document.getElementById("header").classList.add("navbar-shrink");
      document.getElementById("back-top").classList.add("d-flex");
    } else {
      document.getElementById("header").classList.remove("navbar-shrink");
      document.getElementById("back-top").classList.remove("d-flex");
    }
  }
