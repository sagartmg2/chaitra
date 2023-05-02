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
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
]

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

console.log(house.owner);
console.log(colors[0])

// console.log(`${todos[0].title} is ${todos[0].completed}`)
// console.log(`${todos[1].title} is ${todos[1].completed}`)
// console.log(`${todos[2].title} is ${todos[2].completed}`)
// console.log(`${todos[3].title} is ${todos[3].completed}`)
// console.log(`${todos[4].title} is ${todos[4].completed}`)


/*  */

/* let index = 0 */
function printTodoStatus(index) {
    console.log(`${todos[index].title} is ${todos[index].completed}`)
}

printTodoStatus(0)
printTodoStatus(1)
printTodoStatus(2)
printTodoStatus(3)
printTodoStatus(4)

