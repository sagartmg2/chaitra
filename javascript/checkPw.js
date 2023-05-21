/* logical operators

    AND

    OR
    NOT

*/

// if( true && false ){  // if(false){}
    
//     console.log("both true");
// }else{
//     console.log("one / both of them is false");
// }



let user = {
    name: "ram",
    email: "ram@ram.com",
    password: "ram-password"
}

function checkPassword(email, pass) {

    if (pass == user.password && user.email == email) {
        console.log("logged in ");
    } else {
        console.log("invldiad");
    }
}

checkPassword("ram@ram.com", "ram-password")   // user logged in 
checkPassword("ram@ram.com","ram-wrong-password")   // Invalid Credentails
checkPassword("shayam@shyam.com","ram-password")

/* OUTPUT */
// checkPassword("ram-password")  //  user logged in
// checkPassword("ram-wrong-password")  //  Invalid Credentials



/* 
    TODO: 
    create a function checkPassword  
    and 
    if the password matches for above user, print user logged in else print invalid credentials


    as self research check for Logical operators too AND(&&) , OR(||) , NOT(!)
    THEN , 
    MUTATE/UPDATE THE FUNCTION  checkPassword

    checkPassword("ram@ram.com","ram-password")   // user logged in 
    checkPassword("ram@ram.com","ram-wrong-password")   // Invalid Credentails
    checkPassword("shayam@shyam.com","ram-password")   // Invalid Credentails


*/



