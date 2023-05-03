

let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "html",
        "completed": true
    },
    {
        "userId": 1,
        "id": 2,
        "title": "css",
        "completed": true
    },
    {
        "userId": 1,
        "id": 3,
        "title": "js",
        "completed": false
    },
]

// console.log( todos[0].title + "is" + todos[0].completed )

/* 
output
    html is true
    css is true
    js is false
*/


let colors = ["red", "white", "orange"]

let house = {
    color: "green",
    owner: "xyz"

}

// console.log(house.owner);
// console.log(colors[0])

// console.log(`${todos[0].title} is ${todos[0].completed}`)
// console.log(`${todos[1].title} is ${todos[1].completed}`)
// console.log(`${todos[2].title} is ${todos[2].completed}`)
// console.log(`${todos[3].title} is ${todos[3].completed}`)
// console.log(`${todos[4].title} is ${todos[4].completed}`)


/*  */

/* let index = 0 */
function printTodoStatus(index) {
    // if (todos[index].completed) {
    //     console.log(`${todos[index].title} is completed`)
    // } else {
    //     console.log(`${todos[index].title} is  in process`)
    // }

    /* Ternary operator  ?  */
        console.log(`${todos[index].title} is ${todos[index].completed ? "complted" : "in-process" }`)


}

printTodoStatus(0)
printTodoStatus(1)
printTodoStatus(2)


// if (false) {
//     console.log("do something");
// } else {
//     console.log("do some ohte tasks");
// }


// console.log(1 + 2);
// console.log(1 - 2);
// console.log(1 / 2);


console.log(true ? "yes" : "no");

if (true) {
    console.log("yes");
} else {
    console.log("NO");
}
