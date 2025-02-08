// Countdown Timer
const eventDate = new Date("March 2, 2025 12:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    document.getElementById("days").textContent = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("hours").textContent = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").textContent = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").textContent = Math.floor((timeLeft % (1000 * 60)) / 1000);
}

setInterval(updateCountdown, 1000);
updateCountdown();
