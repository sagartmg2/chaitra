


/*
TODO: CONVERT THE  VALUES OF ABOVE OBJECT TO NEPALI 
__________________________________________________________________________________________________
let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
You may need these concepts
    number.toString()
    string.trim()
    string.split()
    loop
    function
__________________________________________________________________________________________________
OUTPUT SHOULD BE AS BELOW
    dashboard = {
        total: "१००"
        expired: "२४",
        out_of_stock: "२०"
    }
    
*/

// function toNepali(number) {

// }

const toNepali = (number) => {
    let temp = number.toString().split("")  /* 123 => [1,2,3] */
    let nepali_number = ""
    let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

    for (let index = 0; index < temp.length; index++) {
        nepali_number += nepali_digits[temp[index]]
    }

    return nepali_number
}


console.log(toNepali(100)) // १००
console.log(toNepali(985106234)) // 

let dashboard = {
    total: 100,
    expired: 24,
    out_of_stock: 20,
    users_count:10,
    managers_count:3,
}


dashboard = {
    total: toNepali(dashboard.total),
    expired: toNepali(dashboard.expired),
    out_of_stock: toNepali(dashboard.out_of_stock)
}

/* Object.entries(object) */

console.log(dashboard);