var startTime;
var isRunning = false;
var chronometerElement = document.getElementById("chronometer");

function startChronometer() {
    if (!isRunning) {
        isRunning = true;
        startTime = new Date().getTime();
        chronometerInterval = setInterval(updateChronometer, 100);
    }
}

function stopChronometer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(chronometerInterval);
    }
}

function resetChronometer() {
    stopChronometer();
    chronometerElement.textContent = '00:00:00';
}

function updateChronometer() {
    if (isRunning) {
        var currentTime = new Date().getTime();
        var elapsedTime = currentTime - startTime;

        var hours = Math.floor(elapsedTime / 3600000);
        var minutes = Math.floor((elapsedTime % 3600000) / 60000);
        var seconds = Math.floor((elapsedTime % 60000) / 1000);

        hours = padNumber(hours);
        minutes = padNumber(minutes);
        seconds = padNumber(seconds);

        chronometerElement.textContent = hours + ':' + minutes + ':' + seconds;
    }
}

function padNumber(number) {
    return (number < 10) ? '0' + number : number;
}
