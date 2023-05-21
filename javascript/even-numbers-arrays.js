let arr1 = [1, 2, 3, 4, 10];
let doubles = [];
let even_numbers = []; //2,4,10
let odd_numbers = []; //2,4,10


/* falsy values  */

/* 
    - false
    - undefined
    - null
    - 0 -0
    - NaN
    - "" empty string

*/



even_numbers = arr1.filter((el) => {
    if (el % 2 == 0) {
        return true
    }
})


// console.log({ even_numbers });
// console.log({ arr1 });

// for(let i=0;i<arr1.length;i++){
//   doubles.push(arr1[i]*2)
// }

// arr1.forEach((element, index) => {
//   console.log("For each element");
//   doubles.push(element * 2);
//   if (element % 2 == 0) {
//     even_number.push(element);
//   } else {
//     console.log("else reject");
//   }
// });
// console.log(even_number);
// console.log(doubles);


