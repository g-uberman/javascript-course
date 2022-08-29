var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function () {
    // if name is empty:
    if (myForm.name.value == "") {
        message.innerHTML = "Please enter a name.";
        return false;
    } else {
        message.innerHTML = "";
        return true;
    }
}