const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');


let seconds = 0;
let minutes = 0;
let hours = 0;

//variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


//Variable for set Interval & timerstatus

let timerInterval = null;
let timerStauts = "stopped";




//Stop Watch Function

function stopWatch() {


    seconds++;

    if(seconds / 60 == 1) {
        seconds = 0;
        minutes++;

        if(minutes/60 == 1) {
            minutes = 0;
            hours++;
        }
    }


    if(seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    if(minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    if(hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }




    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopWatch, 1000)


startStopBtn.addEventListener('click', function(){
    if(timerStauts == "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = '<span class="material-symbols-outlined" id="pause">pause</span>';
        timerStauts = "started";
    }
    else {
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML = '<span class="material-symbols-outlined" id="play">play_arrow</span>';
        timerStauts = "stopped";
    }
});


resetBtn.addEventListener('click', function() {


    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
});
