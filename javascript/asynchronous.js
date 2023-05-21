/* callback
    - a function passed as a variabel to another function 
*/

/* synchronous vs asynchronous */

function dosomething() {
    console.log("do-some-task");
}

console.log(1)

for (let index = 0; index < 10; index++) {
    console.log("loop", index);
}




console.log(2)
dosomething()
console.log(3);


/* asynchronous
    - future event
    - tasks that runs in background
    - donot block ohter following codes/task
*/

// setTimeout(dosomething, 5000)
// setTimeout(() => {
//     console.log("temiout-2");
// }, 5000)

let downalodble = false

setTimeout(() => {
    console.log("0s timouet");
}, 0)



console.log("end");


/* promoise
    - pending
    - complte / resolved
    - rejected
*/


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("server error")
        // resolve("data :[{title:'html'}]")
    }, 2000)
})

console.log(promise1)
promise1
    .then((response) => {
        console.log("promise -fulfilled");
        console.log(response);
    })
.catch((err) => {
    console.log(err)
})


/* Error handling || Exception Hanlding  */
// let num2 = 2;
// let num3 = 3;

// try {
//     let num1 = num2 + num3
//     console.log({ num1 });
// } catch (err) {
//     // console.log(err)
//     console.log("eror", err.message)
// }


async function fetchData() {

    // await DB.users ()
    // res.send(users)

    try {
        let data = await promise1
        console.log(data)
        console.log("after promise")

    } catch (err) {
        console.log("promise-err", err);
    }
}

fetchData()


console.log("finallly-ended");







