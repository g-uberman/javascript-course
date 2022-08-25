function getAverage(a,b,c,d,e,f){

    var average = (a + b + c + d + e + f) / 6;
    console.log(average)
    return average;         //save var average outside function

}

var myResult = getAverage(7,12,100,77,23,60);   //third value ignored
console.log("the average is " + myResult);