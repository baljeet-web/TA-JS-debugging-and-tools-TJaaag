let fullName = function(firstName=" ",lastName=" "){
    return (firstName +" "+ lastName)
}
console.log(fullName(`Baljeet`,`Singh`));

let result = (fullName(`Baljeet`,`Singh`))
let expected = (fullName(`Baljeet`,`Sing`))

if (expected !== result){
    throw new Error (`${expected} is not equal to ${result}`);
}