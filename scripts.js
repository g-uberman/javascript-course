function getAverage(a,b){

    var average = (a + b) / 2;      //local var
    console.log(average)
    return average;     //function result: average given

}

var myResult = getAverage(7,12);        //global var

function logResult(){
    console.log("the average is " + myResult + " inside the function");
}

logResult();

console.log(myResult);  //available
console.log(average);   //not available