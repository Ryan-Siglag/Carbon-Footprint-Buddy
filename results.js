var total = document.getElementById("total");
total.innerHTML = "Total: " + sessionStorage.getItem('total') + " Pounds of Carbon Dioxide!"

var speed = document.getElementById("speed");
var info = document.getElementById("infoText");
if (sessionStorage.getItem('total') < 15999){
    speed.src = '/Assets/speed_green.png';
    info.innerHTML = "You have low carbon emissions, congrats!";
} else if (sessionStorage.getItem('total') < 22000){
    speed.src = '/Assets/speed_yellow.png';
    info.innerHTML = "You have average carbon emissions, try to work on it.";
} else {
    speed.src = '/Assets/speed_red.png';
    info.innerHTML = "You have high carbon emissions, you gotta do something!";
}

