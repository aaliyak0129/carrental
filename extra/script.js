var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    on: {
        slideChange: function () {
            document.querySelectorAll("video").forEach(video => video.pause());
            let activeSlide = document.querySelector(".swiper-slide-active video");
            if (activeSlide) activeSlide.play();
        }
    }
});