let firstName = "Seb";
let lastname = "Nik";

// Now we are creating a object
let person = {
    nameFirst: firstName,
    nameLast: lastname,
    age: 30
};

console.log(person.age)
// Changing Value
person.age = 50
// Doing the same thing but different
person['age'] = 20
// Printing out changed value
console.log(person.age)