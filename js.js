let time_minutes = 0;
let time_seconds = 60;

let duration = time_minutes * 60 + time_seconds;
element = document.querySelector("#count-down-timer");

function paddedFormat(num) {
    return num < 10 ? "0" + num : num;
}

element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

startCountDown(--duration, element);

function startCountDown (duration, element) {
    let secondsRemaining = duration;
    let min = 0;
    let second = 0;
}

let countInterval = setInterval(function () {

    min = parseInt(secondsRemaining / 60);
    sec = parseInt(secondsRemaining % 60);

    element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

    secondsRemaining = secondsRemaining - 1;
    if (secondsRemaining < 0) { clearInterval(countInterval) };

}, 1000);


let secondsRemaining = 60;
let min = parseInt(secondsRemaining / 60);
let sec = parseInt(secondsRemaining % 60);

console.log(secondsRemaining + "seconds");
console.log(min);
console.log(sec);

element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;