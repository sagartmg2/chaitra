/* varaibles */
/* data types
    stirng, number,boolean ,undefined,null

    array 
*/


// let courses = "python, web, grphic"
let courses = ["python", "web", "grphic"]

let projector_color = "white"
let projector_pricer = 50000

let projector = {
    color: "white",
    price: 5000,
    brands: ["vivetek", "sony"]
}

/* 
    Mindrisers!@
    Mindrisers@!
*/

/* 

    let brands = [ "sony","apple","samsung"  ]

   "sony","apple","samsung"  -> array elements

    INDEX
        - always starts with 0

*/

let brands = ["sony", "apple", "samsung"]

brands[5] = "LG"
brands[1] = "big-apple"
console.log("brands", brands)
console.log("second element :", brands[1]);
console.log("3rd index element :", brands[3]);


let course = {
    name: "mern",
    duration: 2.5
}

// console.log("course name", course.name);
// course.teacher = "xyz"
// course.duration = 3

// console.log("course duration", course.duration);
// console.log("course price", course.price);
// console.log("course", course);
// console.log(1 + 2);
// console.log(2 * 2);

/*
    WAP to calacuate sum of 2 snumbera nd also double the result
*/


// 1,2
// 2,4
// 2,5
// 2,10


/* 
    OUTPUT
    6
    12
    14
    24

*/


// let number1 = 1
// let number2 = 2
// let numbersum = number1 + number2
// console.log(number1, "+", number2, "=", number1 + number2, numbersum, "* 2 =", numbersum * 2)
// number1 = number1 + 1
// number2 = number2 + 2
// numbersum = number1 + number2
// console.log(numbersum, "* 2 =", numbersum * 2, numbersum, "* 2 =", numbersum * 2)
// number1 = number1 + 1
// number2 = number2 + 2
// numbersum = number1 + number2
// console.log(numbersum, "* 2 =", numbersum * 2, numbersum, "* 2 =", numbersum * 2)
// number1 = number1 + 1
// number2 = number2 + 2
// numbersum = number1 + number2
// console.log(numbersum, "* 2 =", numbersum * 2, numbersum, "* 2 =", numbersum * 2)


// let num1 = 1;
// let num2 = 2;
// let add = num1 + num2;
// let multiplication = num1 * num2;
// console.log('The sum of ', num1, ' and ', num2, ' is: ', add);
// console.log('the double is :', add * multiplication);


// let num3 = 4;
// let num4 = 5;
// let add_2 = num3 + num4;
// let multiplication_2 = num3 * num4;
// console.log('The sum of ', num3, ' and ', num4, ' is: ', add_2);
// console.log('the double is :', add_2 * multiplication_2);



// console.log("the sum of 1 and  2 is", 1 + 2)
// console.log("the sum of 1 and  4 is", 1 + 4)
// console.log("the sum of 1 and  10 is", 1 + 10)
// console.log("the sum of 5 and  4 is", 5 + 4)
// console.log("the sum of 5 and  10 is", 5 + 10)
// console.log("10 +  10 = ", 5 + 10)

/* function 
    DRY - donot repeat yourself

    syntax
    function <name>(){
        // do somehtings
    } 
*/

/*  
let num1 = 1
let num2 = 2
*/
/*  
let num1 = 2
let num2 = 4
*/

function clalculateSum(num1, num2) { //num1,num2 is parameter

    // console.log(num1 + " +  " + num2 + " =", (num1 + num2))

    console.log(num1 + " +  " + num2 + " =", (num1 + num2))

    console.log(`${num1} + ${num2} = ${num1+num2}`);
}

clalculateSum(1, 2) // 1,2 here is arguement

clalculateSum(2, 4)

clalculateSum(5, 6)

/* tempalte literal */

let greeting = "hello"
// console.log(greeting + "world")
// console.log('world')
console.log(`${greeting} world`)