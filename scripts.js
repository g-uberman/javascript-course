var birthday = new Date(1987, 4, 16, 3, 29, 15);
var birthday1 = new Date(1987, 4, 16, 3, 29, 15);
console.log(birthday);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());     // day of the week (0-6)
console.log(birthday.getTime());    // number of milliseconds since Jan 1st 1970
console.log(birthday.getHours());

// compare dates by getTime:
if(birthday.getTime() == birthday1.getTime()){
    console.log("birthdays are equal");
} else{
    console.log("birthdays are not equal");
}