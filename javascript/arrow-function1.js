
function sum(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2
    console.log("below - return");
}

// let result = sum(1, 2) // 3
// console.log({result});

// let result2 = sum(result, 4) //7


// sum(result2,100)


let result = sum(sum(50, 50), sum(100, 100))    //sum(100,200)
console.log({ result });



let diff = (num1, num2) => {
    console.log("diff", (num1 - num2));
    return num1 - num2
}

diff(10, 5)
diff(4, 5)
diff(100, 10)

let difference = diff(100, 50)
console.log({ difference });
console.log("differece of 10 & 7 is", diff(10, 7));


let f_name = "john"
let l_name = "Doe"

// let printUser = () =>{
//     return f_name+l_name
// }

let printUser = () => f_name + l_name


console.log("default return value", printUser());


let printFullName = (first, last) => first + last

console.log(printFullName("Ram","prasad")); 
console.log(printFullName("Ram","Hari")); 