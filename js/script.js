window.onload = function () {
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
        }, 0.5);
    }

    startCountdown('countdown-1', 3);
    startCountdown('countdown-2', 170000);
    startCountdown('countdown-3', 86);
    startCountdown('countdown-4', 700);
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


const submitButton = document.getElementById('submit-btn');
const emailInput = document.getElementById('email-input');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const email = emailInput.value;
    console.log('Email entered:', email);
    emailInput.value = "";
});