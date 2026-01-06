document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel__container");

    if (!carousel) return;

    let scrollAmount = 0;
    const slideWidth = carousel.clientWidth;

    setInterval(() => {
        scrollAmount += slideWidth;

        if (scrollAmount >= carousel.scrollWidth) {
            scrollAmount = 0;
        }

        carousel.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }, 3000);
});
