var str = "hello, world";

var str2 = str.slice(3,9);      // start-end slice
console.log(str2);

var str3 = str.slice(3);        // start only slice
console.log(str3);

var tags = "meat, ham, salami, pork, beef, chicken";    // string
console.log(tags);

var tagsArray = tags.split(",");        // string split into array, cut at commas
console.log(tagsArray);
console.log(typeof tagsArray);          // object