console.log("Hello wold")

// npm install -g nodemon


/* variables */

let color = "red"
color = "black"
color = "white"

const PI = 3.14
// PI = 3.11


/* DATATYPES

    Primitive data types
        String - text 
        Number
        Boolean  - true / false
        undefined
        null
    
    Non-primitive data types  (Collections)
        array
            - collections of different values
            syntax
            let <variable_name> = [ <value> , <value>    ]

            - collection of similar data-types


        object
            - collections
            syntax
            let <variable_name> = {
                <property> : <value> ,
                <key> : <value> ,
                <attribute> : <value> ,
            }
            
*/

let user; // varaible decleration

console.log("user", user)

let data = null;
console.log("data", data);

let brand1 = "sony"
let brand2 = "apple"
let brand3 = "samsung"
let brand4 = "lg"
let brand5 = "panasonic"

// console.log("hello \n world")

let brands = ["sony", "apple", "samsung", brand4, brand5]
console.log("brands", brands)

let numbers = [1, 2, 3, 4, 5]
console.log("numbers", numbers);

let array_values = ["string", 0, 1, true, null, undefined, { name: "object" }, [1, 2, 4]]
console.log("arary_valus", array_values);




let projector = {
    color: "white",
    price: 50000,
    dimension: "1000 X 2000",
    brands: [
        {
            name: "samsung",
            estd: 1990,
            url: "www.samsngun.com"
        },
        {
            name: "lg",
            est: 2000,
            url: "www.lg.com"
        }
    ]
}

console.log("proejector", projector);






// let even_numbers = [2, 4, 6,]

let course_1 = {
    name: "MERN",
    duration: "2.5",
    teachers: [
        { name: "xyz", phone: "111" },
        { name: "abc", phone: "222" },
    ]
}

// let course_2 = ["Pyhont", "2.5"]  here 2.5 doesnot make sense so lets create object instead

let course_2 = {
    name: "Python",
    duration: "2.5",
    teachers: [
        { name: "xyz", phone: "111" },
    ]
}


let courses = [course_1, course_2]
console.log("courses", courses)







