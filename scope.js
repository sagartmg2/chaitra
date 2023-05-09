// var vs let vs const

/* block scope varaible -> let and const */

let arr = [1, 2, 3]




















numbers = [5, 4, 3, 2, 10, 21]
let change_number = true

if (change_number) {
    let arr = []  // fake variable for storing even number
    numbers.forEach(num => {
        if (num % 2 == 0) {
            arr.push(num)
        }
    })
    console.log(arr)

}


if (true) {
    let arr = [100, 200]
}


function doSomething() {
    let number = 100
}


console.log("origianl,number", arr);