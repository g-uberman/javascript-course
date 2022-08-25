for (i = 0; i < 10; i++) {

    if(i === 5 || i === 3){
        console.log("number ignored")
        continue;
    }

    console.log(i);

    if(i === 7) {
        break;
    }
}

console.log("I have broken out of the loop.")