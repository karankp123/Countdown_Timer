const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let countdownInterval;
let initialSeconds = 600; // Set your desired countdown time in seconds
let seconds = initialSeconds;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startCountdown() {
    countdownInterval = setInterval(() => {
        if (seconds > 0) {
            seconds--;
            timerElement.textContent = formatTime(seconds);
        } else {
            clearInterval(countdownInterval);
            timerElement.textContent = "00:00:00";
        }
    }, 1000);
}

startButton.addEventListener('click', () => {
    if (!countdownInterval) {
        startCountdown();
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(countdownInterval);
    countdownInterval = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(countdownInterval);
    countdownInterval = null;
    seconds = initialSeconds;
    timerElement.textContent = formatTime(seconds);
});
