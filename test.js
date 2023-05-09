

let dashboard = {
    total: 190,
    expired: 24,
    out_of_stock: 20,
    develery: 120
}

const toNepali = (input) => {
    let newInput = input.toString().split('')

    let nepaliNum = ''
    for (let index = 0; index < newInput.length; index++) {

        let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
        nepaliNum += nepali_digits[newInput[index]]

    }

    return nepaliNum

}





let updateObject = () => {
    let newobj = {}
    temp = Object.entries(dashboard)
    temp.forEach((element) => {
        // element[1] = 
        newobj[element[0]] = toNepali(element[1])

    })

    return newobj
}
console.log(updateObject())

