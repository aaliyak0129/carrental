function toggleMenu() {
    document.querySelector(".navlinks").classList.toggle("active");
}
var swiper = new Swiper(".cube-slider", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
    },
  });
  VANTA.WAVES({
    el: "#bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x6d99bd,
    shininess: 21.00,
    waveHeight: 18.00,
    zoom: 1.09
  }) 