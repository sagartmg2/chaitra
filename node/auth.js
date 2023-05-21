const bcrypt = require("bcrypt")


async function signup(pass) {
    /* 1. take request from user */
    /* 2. validation */
    /* 3.  encrypt password */
    /*  password -> $@#$FASD@Q#$%ASDFASDF@$ */

    // let hashed = await bcrypt.hash(pass, 10);
    // console.log(hashed);

    bcrypt.hash(pass, 10, function (err, hash) {
        console.log(hash);
    });

    console.log("after hash");

}

const login = () => {
    console.log("login");
}

module.exports = signup  // default export


// module.exports.login  = login    // named export
// module.exports.signup  = signup 


module.exports = {  // named export
    "login": login,
    signup
}