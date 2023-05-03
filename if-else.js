
let will_rain = false
let has_probability = false

// if( <contidion> ) {  }


// if (will_rain) {
//     console.log("take umbrealla");
// } else {
//     if (has_probability) {
//         console.log("you may take it")
//     } else {
//         console.log("no need to take umbrealla");
//     }
// }


if (will_rain) {
    console.log("take umbrealla");
} else if (has_probability) {
    console.log("you may take it. ");
} else {
    console.log("no need");
}


console.log(will_rain ? "take it" :  has_probability ? "you may take it" : "no need" );



// if (false) {
//     console.log("true statement");
// }else{
//     console.log("false statement");
// }



