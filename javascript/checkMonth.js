function checkMonth(input) {
    if (input === 1) {
        console.log("jan");
    } else if (input === 2) {
        console.log("feb");
    } else if (input === 3) {
        console.log("march");
    } else if (100 > 1) {
        console.log("satic-true");
    } else {
        console.log("invalid");
    }
}

function checkMonth(input) {
    let month = null
    switch (input) {
        case 1: {   //  if(input == 1)
            month = "jan"
            break;
        }
        case 2: {
            month = "feb"
            break;
        }
        case true: {  // if(input  == true)
            month = "100>2"
            break;
        }
        default: {
            month = "invlid"
        }
    }
    console.log(month);
}



checkMonth(1)
checkMonth(2)
checkMonth(123)
// checkMonth(2)
// checkMonth(3)
// checkMonth(0)