/*------DIGITAL CLOCK------*/

//clock
function currentTime(){
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;

    var utchr = d.getUTCHours();
    var timeDiff = utchr - hr;
    var adjTimeDiff = Math.abs(timeDiff);
    var timeZone;

    if(sec<10){
        sec = "0" + sec;
    }
    if(min<10){
        min = "0" + min;
    }
   
    if(hr == 12){
        ampm = "PM";
    }else if(hr>12){
        hr -= 12;
        ampm = "PM";
    }else {
        ampm = "AM";
    }

     if(hr<10){
        hr = "0"+hr;
    }

    if(adjTimeDiff == 8-1){
        timeZone = "PT";
    }else if(adjTimeDiff == 7-1){
        timeZone = "MT";
    }else if(adjTimeDiff == 6-1){
        timeZone = "CT";
    }else if(adjTimeDiff == 5-1){
        timeZone = "ET";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone + " (Summer Time Saving)";
    document.getElementById("clock").innerText = time;
}

setInterval(currentTime,1000);
currentTime();