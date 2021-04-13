//arrow functions
const adultAge = 18;
const determineAdult = (myAge) => {
    if (myAge >= adultAge) {
        return true;
    }
    return false;
}

console.log(determineAdult(3));
console.log(determineAdult(23));

const greetPerson = myAge => {
    if (determineAdult(myAge)) {
        return "Hello there";
    }
    return "Hey kiddo";
}

console.log(greetPerson(12));
console.log(greetPerson(28));