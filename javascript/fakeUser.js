const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]



/* 
TODO: 
    From the above array create an new array of users with email and password 
    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 
*/

let fakeUsers = nepaliNames.map((el,index) => {
    return { name: el, email: `${el}@gmail.com`,password:`${el}${index}` }
})

console.log(fakeUsers);