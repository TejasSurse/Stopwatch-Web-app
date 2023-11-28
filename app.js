let timer = document.getElementById("stopwatch");
let lapList = document.getElementById("laplist");
let hr = 0;
let min = 0;
let sec = 0;
let stop = true;

let lap = 1;

function start(){
    if(stop == true){
        stop = false;
        runtime();
    }
}

function stopTime(){
    if(stop == false){
        stop = true;
    }
}

function recordLap() {
   
    if (stop == false) {
        let lapTime = `${hr} hr : ${min} min : ${sec} sec`;
        let lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lap}: ${lapTime}`;
        //let lapList = document.getElementById("laplist");
        lapList.appendChild(lapItem);
        lap++;
    }
}

function runtime(){
    if(stop == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec++;

        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hr++;
            min = 0;
            sec = 0;
        }
        if(sec<10){
            sec = '0'+sec;
        }
        if(min<10){
            min = '0'+min;
        }
        if(hr<10){
            hr = '0'+hr;
        }

        timer.innerHTML = hr + "<p>hr</p>:" + min + "<p>min</p> : " + sec + "<p>sec</p>";

        setTimeout("runtime()", 1000);
    }
}

function reset() {
    timer.innerHTML = "00 <p>hr</p> : 00 <p>min</p> : 00 <p>sec</p>";
    stop = true;
    hr = 0;
    sec = 0;
    min = 0;
    lap = 1; // Reset lap counter
    lapList = document.getElementById("laplist");
    // Clear lap times by removing all list items (laps)
    while (lapList.firstChild) {
        lapList.removeChild(lapList.firstChild);
    }
}