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
      delay: 1500,
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
    color: 0xf2303c,
    waveHeight: 24.50,
    waveSpeed: 0.95,
    zoom: 0.76
  }) 
  let logout=()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("password")
    location.href="signup.html"
  }