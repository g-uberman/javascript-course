//ONCLICK EVENT ONLY SETUP BY A FUNCTION, NOT BY DEFAULT
function setUpEvents() {

    var content = document.getElementById("content");
    var button = document.getElementById("show-more");

    // SHOW MORE BUTTON
    button.onclick = function () {
        if (content.className == "open") {
            //shrink box
            content.className = "";
            button.innerHTML = "Show More";
        } else {
            //expand box
            content.className = "open";
            button.innerHTML = "Show Less";
        }
    };

};

//AUTORUN SETUP FUNCTION AFTER PAGE IS FULLY LOADED
//makes sure that the needed elements are already in place
window.onload = function () {
    setUpEvents();
};