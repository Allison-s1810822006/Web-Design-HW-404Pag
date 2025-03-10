document.querySelector(".menu").addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("active");
});

let seconds = 5;
const countdownEl = document.getElementById("countdown");
const timer = setInterval(() => {
    seconds--;
    countdownEl.textContent = seconds;
    if (seconds === 0) {
        clearInterval(timer);
        window.location.href = "HomePage.html.html";
    }
}, 1000);