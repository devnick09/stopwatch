// initialize the time units
let [mili_sec, seconds, minutes, hours] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
let milisecond = document.getElementById("milisecond");
let timer = null;

// main stopwatch fuction which will trigger in watchStart fuction
function stopwatch(){

    // check condition and update time units
    mili_sec++; 
    if (mili_sec == 100) {
        mili_sec = 0; 
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    // add prefix zero according to condition
    let ms = mili_sec < 10 ? "0" + mili_sec : mili_sec;
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // update the display time value
    displayTime.innerHTML = h + ":" + m + ":" + s;
    milisecond.innerHTML = ms;

}

// fucntion to set time intervel and update UI
function watchStart() {

    if (timer !== null) {
        clearInterval(timer);
    }

    // assign setInterval function to timer variable so that we can clear the interval
   timer = setInterval(stopwatch, 10);
}

// function to stop the timer
function watchStop() {
    clearInterval(timer);
}

// function to reset the timer
function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    milisecond.innerHTML = "00";
}