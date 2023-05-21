
/* global objects */

console.log(__filename);
console.log(__dirname);
// require
// module

/*
 global scope vs block scope
*/

/*

    NODE Modules
        - core module
            - fs
            - path
            - http -> express  uses this http module under the hood

        - third party module
            - nodemon
        - local module

*/

const fs = require("fs")  // return {writeFileSync:() =>{}, .... }

// fs.writeFileSync("custom.txt", "data")

let data = fs.readFileSync("./custom.txt", { encoding: "utf8" })
console.log((data))

const path = require("path")
console.log(path.extname("text.txt"));
console.log(path.join(__dirname, "uploads"));

const http = require("http")

const server = http.createServer((req, res) => {


    if (req.url === "/api/todos" && req.method === "GET") {
        res.write(JSON.stringify([{ title: "html" }]))
        res.end();
    } else if (req.url === "/api/todos" && req.method === "POST") {
        req.on("data", (data) => {
            console.log(JSON.parse(data))
        })
        res.write("created ...todos data from server")
        res.end();
    }
    res.end();
})

// server.listen(8000, () => {
//     console.log("server started.");
// })

// const signup = require("./auth")

// const auth = require("./auth")  // default import
// auth.signup("12345678")
// auth.login()

const { signup, login } = require("./auth")  // named import
signup("asdfaf")
login()


