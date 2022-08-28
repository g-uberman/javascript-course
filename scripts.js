var colourChanger = document.getElementById("colour-changer");
var colours = ["green", "greenyellow", "yellow", "orange", "red", "brown", "olive"];
var counter = 0;
var colourNotification = document.getElementById("notification");
var body = document.getElementsByTagName("body")[0]

//colour cycle function (on call only)
function changeColour(){
    if (counter >= colours.length) {
        counter = 0;
    }
    colourChanger.style.background = colours[counter];
    counter++;
}

//call changeColour every 3000 milliseconds
var myTimer = setInterval(changeColour, 1000);

//onclick stop
colourChanger.onclick = function(){
    clearInterval(myTimer);
    colourNotification.innerHTML = "Colour chosen";
    body.style.background = colours[counter - 1];
}