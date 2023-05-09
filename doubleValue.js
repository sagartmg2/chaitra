let numbers = [1, 2, 3, 4, 5]

let doubled = [];

let even_numbers = [] // [2,4,6,8,10]


// for (let index = 0; index < numbers.length; index++) {
//     doubled.push(numbers[index] * 2)
// }

// function doSomething(element, index) {
//     console.log(element, index)
//     doubled.push(element * 2)
// }


let doSomething = (element, index) => {
    console.log(element, index)
    doubled.push(element * 2)
}

/* 
    callback (cb) 
        -> a function passed to another function as a variable
*/
// numbers.forEach(doSomething)

// numbers.forEach(doSomething)

numbers.forEach((element, index) => {
    doubled.push(element * 2)
})

console.log(doubled); // [2,4,6,8,20]


let double_numbers = numbers.map((element, index) => {
    console.log("inside map", element, index)
    return element*2
})


console.log(numbers);
console.log(double_numbers);










