var myAge = 35;

/*
if (myAge >= 18 && myAge <= 40){
    document.write("You can come.")
} else{
    document.write("You ain't coming.")
}
*/

if (myAge < 18 || myAge > 40 || myAge === 25){
    document.write("You ain't coming.")
} else{
    document.write("You can come.")
}