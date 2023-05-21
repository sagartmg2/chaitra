
// function testPosititivy(input) {

//     // comparision operator  < , <= , > ,>=   == 
//     if (input > 0) {
//         // template literal / string litreal 
//         console.log(` ${input} is  +ve`);
//     } else if (input < 0) {
//         console.log(` ${input} is  -ve`);
//     } else if (input == 0) {
//         console.log(` ${input} is  zero`);
//     } else {
//         console.log(input + " is not a number");
//     }

// }


function testPosititivy(input) {

    if (typeof (input) == "number") {
        if (input >= 0) {
            console.log(` ${input} is  +ve`);
        } else if (input < 0) {
            console.log(` ${input} is  -ve`);
        } else {
            console.log(` ${input} is  zero`);
        }
    }
    else {
        console.log(input + " is not a number");
    }
}


testPosititivy("1") // no a number
testPosititivy(10)
testPosititivy(0)
testPosititivy(-1)
testPosititivy(-10)
testPosititivy("ASDF")

console.log("hello" - "world");
console.log(100 + 100);

console.log(1.12 + "1"); // 1 is being convert to string typecast
console.log(1 - "1");

/* assignment operator  =  */
/* equality operator  ==  */
console.log("hello" == "hello");
console.log("hello" === "hello");

console.log(1 == 1);
console.log(1 == "1");

/* strict equality operator */
console.log(1 === "1");

