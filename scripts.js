// constructor function for making new objects:
var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    },
    this.logDriver = function(){
        console.log("Driver name is " + this.driver);
    }
    this.test =  function(){
        console.log(this);
    }
}

// create new objects using Car function:
var myCar0 = new Car (100, "Shaun");
var myCar1 = new Car (120, "Mary");
var myCar2 = new Car (160, "Willy");
var myCar3 = new Car (90, "Bob");

// print properties for testing:
myCar0.test();
myCar1.test();
myCar2.test();
myCar3.test();