var interval1 = setInterval(tetrisTimer, 1000);

function tetrisTimer() {
    var minute = document.getElementById("clock-minute").innerText;
    var second = document.getElementById("clock-second").innerText;

    if(parseInt(second)===59)
    {
        var newMin = (parseInt(minute) + 1).toString();
        if(newMin<10)
            newMin="0" + newMin;
        document.getElementById("clock-minute").innerHTML = newMin;
        document.getElementById("clock-second").innerHTML = "00";
    } else {
        newSec = (parseInt(second) + 1).toString();
        if(newSec<10)
            newSec="0" + newSec;
        document.getElementById("clock-second").innerHTML = newSec;
    }
}