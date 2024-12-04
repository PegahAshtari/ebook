// نمایش دکمه در هنگام اسکرول پایین صفحه
window.onscroll = function () {
    let scrollToTopBtn = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// اسکرول به سکشن #top-view هنگام کلیک بر روی دکمه
document.getElementById("scrollToTop").addEventListener("click", function () {
    document.getElementById("top-view").scrollIntoView({
        behavior: "smooth"
    });
});