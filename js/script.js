window.onload = function () {
    // شمارش معکوس برای هر عدد
    function startCountdown(id, targetNumber) {
        let currentNumber = 0;
        const element = document.getElementById(id);

        const interval = setInterval(() => {
            if (currentNumber < targetNumber) {
                currentNumber++;
                element.textContent = currentNumber;
            } else {
                clearInterval(interval);
            }
        }, 0.5); // زمان بین هر افزایش (برای سرعت بالاتر می‌توانید مقدار 10 را تغییر دهید)
    }

    // شمارش معکوس برای هر بخش
    startCountdown('countdown-1', 3); // عدد 3 برای بخش اول
    startCountdown('countdown-2', 170000); // عدد 170000 برای بخش دوم
    startCountdown('countdown-3', 86); // عدد 86 برای بخش سوم
    startCountdown('countdown-4', 700); // عدد 700 برای بخش چهارم
};

window.onscroll = function () {
    let scrollToTopBtn = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


document.getElementById("scrollToTop").addEventListener("click", function () {
    document.getElementById("top-view").scrollIntoView({
        behavior: "smooth"
    });
});