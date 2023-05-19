

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

const express = require("express")
