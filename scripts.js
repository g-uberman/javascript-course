var myCar = {
    maxSpeed: 70,
    driver: "Net Ninja",
    drive: function(speed, time){
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("Driver name is " + this.driver);
    },
    test: function(){
        console.log(this);
    }
};

myCar.logDriver();
console.log(myCar.maxSpeed);
myCar.drive(50,3);         // 150 travelled
myCar.test();