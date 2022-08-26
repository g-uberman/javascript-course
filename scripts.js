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