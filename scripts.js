var myForm = document.forms.myForm;

// target property
myForm.name

// target property value
myForm.name.value
myForm.colour.value

// ONFOCUS: active or clicked element:
myForm.name.onfocus = function(){
    myForm.name.style.border = "4px solid pink";
}

// BLURRED: inactive element:
myForm.name.onblur = function(){
    myForm.name.style.border = "none";
}